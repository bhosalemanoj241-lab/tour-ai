import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Destination } from '../../types/travel';
import { Sparkles, Compass, ZoomIn, ZoomOut, RotateCcw, Eye } from 'lucide-react';

interface Globe3DProps {
  destinations: Destination[];
  selectedDestination: Destination | null;
  onSelectDestination: (dest: Destination) => void;
  onCinematicComplete?: () => void;
}

export const Globe3D: React.FC<Globe3DProps> = ({
  destinations,
  selectedDestination,
  onSelectDestination,
  onCinematicComplete,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredDest, setHoveredDest] = useState<Destination | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [cinematicPhase, setCinematicPhase] = useState<number>(0);
  const [webglError, setWebglError] = useState<boolean>(false);

  // References for Three.js state
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const markersGroupRef = useRef<THREE.Group | null>(null);
  const routesGroupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  const targetCameraPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 320));
  const currentCameraPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 850)); // Starts far for cinematic zoom
  const targetRotation = useRef<{ x: number; y: number }>({ x: 0.2, y: -0.4 });
  const isDragging = useRef<boolean>(false);
  const previousMousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const globeRadius = 140;

  // Convert Lat/Lng to 3D Cartesian Vector
  const latLngToVector3 = (lat: number, lng: number, radius: number): THREE.Vector3 => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  };

  // Generate high-tech procedural Earth texture
  const createProceduralEarthTexture = (): THREE.CanvasTexture => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;

    // Deep ocean base
    ctx.fillStyle = '#040714';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle latitude / longitude tech grid lines
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 64) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Equator & Tropic lines
    ctx.strokeStyle = 'rgba(249, 115, 22, 0.2)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // Procedural continents using organic geometric dot clusters
    // We render stylized land masses (Eurasia, Americas, Africa, Australia)
    ctx.fillStyle = '#081738';
    ctx.shadowColor = 'rgba(0, 240, 255, 0.5)';
    ctx.shadowBlur = 10;

    const renderLandmass = (cx: number, cy: number, rx: number, ry: number, dotCount = 180) => {
      for (let i = 0; i < dotCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.pow(Math.random(), 0.6);
        const px = cx + Math.cos(angle) * rx * dist;
        const py = cy + Math.sin(angle) * ry * dist;
        const radius = Math.random() * 3 + 1.5;

        ctx.fillStyle = Math.random() > 0.4 ? '#0c2356' : 'rgba(0, 240, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Indian Subcontinent & Himalayas
    renderLandmass(1460, 420, 110, 140, 320);
    // East Asia & Japan
    renderLandmass(1650, 380, 130, 110, 260);
    // Europe & Scandinavia
    renderLandmass(1150, 280, 130, 90, 240);
    // Africa
    renderLandmass(1150, 520, 140, 180, 300);
    // North America
    renderLandmass(520, 330, 200, 140, 350);
    // South America
    renderLandmass(680, 680, 120, 180, 260);
    // Australia
    renderLandmass(1720, 720, 130, 90, 200);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    try {
      // 1. Scene & Camera
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x03050c, 0.001);
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(45, width / height, 1, 3000);
      camera.position.copy(currentCameraPos.current);
      cameraRef.current = camera;

      // 2. Renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // 3. Globe Hierarchy
      const globeGroup = new THREE.Group();
      scene.add(globeGroup);
      globeGroupRef.current = globeGroup;

      // Earth Core Sphere
      const earthGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
      const earthTex = createProceduralEarthTexture();
      const earthMat = new THREE.MeshPhongMaterial({
        map: earthTex,
        bumpScale: 2,
        specular: new THREE.Color(0x00f0ff),
        shininess: 18,
        transparent: true,
        opacity: 0.94,
      });
      const earthMesh = new THREE.Mesh(earthGeo, earthMat);
      globeGroup.add(earthMesh);

      // Atmosphere Outer Halo Sphere
      const atmoGeo = new THREE.SphereGeometry(globeRadius * 1.08, 48, 48);
      const atmoMat = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(0x00f0ff) },
        },
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          uniform vec3 color;
          void main() {
            float intensity = pow(0.68 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.8);
            gl_FragColor = vec4(color, intensity * 0.85);
          }
        `,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        transparent: true,
        depthWrite: false,
      });
      const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
      globeGroup.add(atmoMesh);

      // Tech Grid Latitude Rings
      const gridGroup = new THREE.Group();
      for (let lat = -60; lat <= 60; lat += 30) {
        const radius = globeRadius * Math.cos((lat * Math.PI) / 180) * 1.005;
        const y = globeRadius * Math.sin((lat * Math.PI) / 180) * 1.005;
        const ringGeo = new THREE.BufferGeometry();
        const pts: THREE.Vector3[] = [];
        for (let i = 0; i <= 64; i++) {
          const theta = (i / 64) * Math.PI * 2;
          pts.push(new THREE.Vector3(Math.cos(theta) * radius, y, Math.sin(theta) * radius));
        }
        ringGeo.setFromPoints(pts);
        const ringMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.12 });
        const ring = new THREE.Line(ringGeo, ringMat);
        gridGroup.add(ring);
      }
      globeGroup.add(gridGroup);

      // 4. Background Starfield
      const starsCount = 1600;
      const starsGeo = new THREE.BufferGeometry();
      const starPositions = new Float32Array(starsCount * 3);
      const starColors = new Float32Array(starsCount * 3);

      for (let i = 0; i < starsCount * 3; i += 3) {
        starPositions[i] = (Math.random() - 0.5) * 2600;
        starPositions[i + 1] = (Math.random() - 0.5) * 2600;
        starPositions[i + 2] = (Math.random() - 0.5) * 2600;

        const isCyan = Math.random() > 0.7;
        starColors[i] = isCyan ? 0.0 : 0.9;
        starColors[i + 1] = isCyan ? 0.94 : 0.95;
        starColors[i + 2] = 1.0;
      }
      starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
      starsGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

      const starsMat = new THREE.PointsMaterial({
        size: 2.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
      });
      const stars = new THREE.Points(starsGeo, starsMat);
      scene.add(stars);
      particlesRef.current = stars;

      // 5. Lighting
      const ambientLight = new THREE.AmbientLight(0x0e1738, 2.2);
      scene.add(ambientLight);

      const sunLight = new THREE.DirectionalLight(0xffffff, 2.5);
      sunLight.position.set(400, 200, 500);
      scene.add(sunLight);

      const cyanRimLight = new THREE.DirectionalLight(0x00f0ff, 3.0);
      cyanRimLight.position.set(-500, -200, -300);
      scene.add(cyanRimLight);

      const sunsetRimLight = new THREE.DirectionalLight(0xf97316, 2.0);
      sunsetRimLight.position.set(300, -400, 300);
      scene.add(sunsetRimLight);

      // 6. Destination Markers Group
      const markersGroup = new THREE.Group();
      globeGroup.add(markersGroup);
      markersGroupRef.current = markersGroup;

      // 7. Travel Routes Group
      const routesGroup = new THREE.Group();
      globeGroup.add(routesGroup);
      routesGroupRef.current = routesGroup;

      // Create interactive markers
      destinations.forEach((dest) => {
        const pos = latLngToVector3(dest.lat, dest.lng, globeRadius * 1.01);

        // Core dot
        const dotGeo = new THREE.SphereGeometry(2.4, 16, 16);
        const dotMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
        const dotMesh = new THREE.Mesh(dotGeo, dotMat);
        dotMesh.position.copy(pos);
        dotMesh.userData = { destination: dest };

        // Outer pulse ring
        const ringGeo = new THREE.RingGeometry(3.0, 4.5, 24);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xff8c42,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.75,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.position.copy(pos.clone().multiplyScalar(1.002));
        ringMesh.lookAt(new THREE.Vector3(0, 0, 0));
        ringMesh.userData = { isPulseRing: true };

        // Vertical pin line to emphasize location
        const pinPos = pos.clone().multiplyScalar(1.04);
        const lineGeo = new THREE.BufferGeometry().setFromPoints([pos, pinPos]);
        const lineMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.6 });
        const pinLine = new THREE.Line(lineGeo, lineMat);

        markersGroup.add(dotMesh);
        markersGroup.add(ringMesh);
        markersGroup.add(pinLine);
      });

      // Create glowing bezier routes between destinations
      for (let i = 0; i < destinations.length; i++) {
        for (let j = i + 1; j < destinations.length; j++) {
          if (Math.random() > 0.45) continue; // select key connections

          const start = latLngToVector3(destinations[i].lat, destinations[i].lng, globeRadius * 1.01);
          const end = latLngToVector3(destinations[j].lat, destinations[j].lng, globeRadius * 1.01);

          // Calculate elevated midpoint for arched arc
          const mid = start.clone().add(end).multiplyScalar(0.5);
          const distance = start.distanceTo(end);
          mid.normalize().multiplyScalar(globeRadius + distance * 0.28);

          const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
          const points = curve.getPoints(50);
          const routeGeo = new THREE.BufferGeometry().setFromPoints(points);

          const routeMat = new THREE.LineBasicMaterial({
            color: 0x00f0ff,
            transparent: true,
            opacity: 0.35,
          });
          const routeLine = new THREE.Line(routeGeo, routeMat);
          routesGroup.add(routeLine);

          // Animated photon particle on the curve
          const photonGeo = new THREE.SphereGeometry(1.5, 8, 8);
          const photonMat = new THREE.MeshBasicMaterial({ color: 0xffa040 });
          const photon = new THREE.Mesh(photonGeo, photonMat);
          photon.userData = { curve, progress: Math.random(), speed: 0.004 + Math.random() * 0.003 };
          routesGroup.add(photon);
        }
      }

      // 8. Animation & Render Loop
      let animationFrameId: number;
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const delta = clock.getDelta();
        const elapsed = clock.getElapsedTime();

        // Cinematic Dolly-in Entrance
        if (currentCameraPos.current.z > targetCameraPos.current.z + 1) {
          currentCameraPos.current.z += (targetCameraPos.current.z - currentCameraPos.current.z) * 0.035;
          camera.position.z = currentCameraPos.current.z;
          if (currentCameraPos.current.z < 450 && cinematicPhase === 0) {
            setCinematicPhase(1);
            onCinematicComplete?.();
          }
        }

        // Smooth rotation damping
        if (globeGroupRef.current) {
          if (isAutoRotating && !isDragging.current) {
            targetRotation.current.y += 0.0018;
          }
          globeGroupRef.current.rotation.y += (targetRotation.current.y - globeGroupRef.current.rotation.y) * 0.08;
          globeGroupRef.current.rotation.x += (targetRotation.current.x - globeGroupRef.current.rotation.x) * 0.08;
        }

        // Animate pulse rings on markers
        if (markersGroupRef.current) {
          markersGroupRef.current.children.forEach((child) => {
            if (child.userData.isPulseRing) {
              const scale = 1 + Math.sin(elapsed * 4) * 0.35;
              child.scale.set(scale, scale, 1);
            }
          });
        }

        // Animate photons along flight curves
        if (routesGroupRef.current) {
          routesGroupRef.current.children.forEach((child) => {
            if (child.userData.curve) {
              child.userData.progress = (child.userData.progress + child.userData.speed) % 1;
              const pt = child.userData.curve.getPoint(child.userData.progress);
              child.position.copy(pt);
            }
          });
        }

        // Slowly twinkle stars
        if (particlesRef.current) {
          particlesRef.current.rotation.y = elapsed * 0.015;
        }

        renderer.render(scene, camera);
      };

      animate();

      // Window Resize Handler
      const handleResize = () => {
        if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        cameraRef.current.aspect = w / h;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(w, h);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    } catch (err) {
      console.error('WebGL initialization error:', err);
      setWebglError(true);
    }
  }, []);

  // Raycasting for Destination Selection & Hover
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;
      targetRotation.current.y += deltaX * 0.005;
      targetRotation.current.x = Math.max(-0.8, Math.min(0.8, targetRotation.current.x + deltaY * 0.005));
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
      return;
    }

    // Raycast hover check
    if (!containerRef.current || !cameraRef.current || !markersGroupRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(x, y), cameraRef.current);
    const intersects = raycaster.intersectObjects(markersGroupRef.current.children);

    const hit = intersects.find((i) => i.object.userData.destination);
    if (hit) {
      setHoveredDest(hit.object.userData.destination);
    } else {
      setHoveredDest(null);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;

    // Check if clicked directly on a destination pin
    if (!containerRef.current || !cameraRef.current || !markersGroupRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(x, y), cameraRef.current);
    const intersects = raycaster.intersectObjects(markersGroupRef.current.children);

    const hit = intersects.find((i) => i.object.userData.destination);
    if (hit) {
      onSelectDestination(hit.object.userData.destination);
    }
  };

  // Fly Camera to Selected Destination
  useEffect(() => {
    if (!selectedDestination) return;
    const targetLng = selectedDestination.lng;
    const targetLat = selectedDestination.lat;

    // Target rotation to center location
    const phi = (90 - targetLat) * (Math.PI / 180);
    const theta = (targetLng + 180) * (Math.PI / 180);

    targetRotation.current.y = -theta + Math.PI / 2;
    targetRotation.current.x = phi - Math.PI / 2;
    targetCameraPos.current.z = 240; // Zoom in closer
  }, [selectedDestination]);

  const handleZoom = (direction: 'in' | 'out') => {
    if (!cameraRef.current) return;
    const delta = direction === 'in' ? -40 : 40;
    targetCameraPos.current.z = Math.max(180, Math.min(500, targetCameraPos.current.z + delta));
  };

  const handleReset = () => {
    targetRotation.current = { x: 0.2, y: -0.4 };
    targetCameraPos.current.z = 320;
    setIsAutoRotating(true);
  };

  return (
    <div className="relative w-full h-full select-none overflow-hidden">
      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      />

      {/* Fallback for devices without WebGL */}
      {webglError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950 p-6 text-center">
          <div className="web3-glass-card p-8 rounded-2xl max-w-md border border-cyan-500/30">
            <Compass className="w-12 h-12 text-cyan-400 mx-auto mb-4 animate-spin" />
            <h3 className="text-xl font-bold text-white mb-2">Holographic 3D Map Active</h3>
            <p className="text-slate-400 text-sm">
              Your device is rendering our optimized geospatial layer. Select any destination from the curated deck.
            </p>
          </div>
        </div>
      )}

      {/* 3D Navigation Controls Floating Widget */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex flex-col gap-1.5 sm:gap-2 web3-glass-card p-1 sm:p-1.5 rounded-xl border border-white/10 shadow-xl">
        <button
          onClick={() => handleZoom('in')}
          title="Zoom In"
          className="p-2 text-slate-300 hover:text-cyan-glow hover:bg-white/5 rounded-lg transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleZoom('out')}
          title="Zoom Out"
          className="p-2 text-slate-300 hover:text-cyan-glow hover:bg-white/5 rounded-lg transition-colors"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={() => setIsAutoRotating(!isAutoRotating)}
          title={isAutoRotating ? 'Pause Orbit' : 'Resume Orbit'}
          className={`p-2 rounded-lg transition-colors ${
            isAutoRotating ? 'text-cyan-glow bg-cyan-glow/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <RotateCcw className={`w-4 h-4 ${isAutoRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
        </button>
        <button
          onClick={handleReset}
          title="Reset Earth Orientation"
          className="p-2 text-slate-300 hover:text-sunset-glow hover:bg-white/5 rounded-lg transition-colors"
        >
          <Compass className="w-4 h-4" />
        </button>
      </div>

      {/* Live Destination Hover Tooltip Card */}
      {hoveredDest && (
        <div
          className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 z-30 transition-all duration-300 animate-fadeIn"
        >
          <div className="glass-panel px-4 py-3 rounded-2xl border border-cyan-glow/40 shadow-glow-cyan flex items-center gap-4">
            <img
              src={hoveredDest.heroImage}
              alt={hoveredDest.name}
              className="w-12 h-12 rounded-xl object-cover border border-white/10"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm tracking-wide">{hoveredDest.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-glow/20 text-cyan-glow font-mono font-semibold">
                  {hoveredDest.aiMatchScore}% AI Match
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{hoveredDest.country} • {hoveredDest.currentTemp} • {hoveredDest.crowdLevel} Crowds</p>
            </div>
            <div className="text-right pl-2 border-l border-white/10">
              <span className="text-xs text-slate-400 block">Avg Trip</span>
              <span className="text-sm font-semibold text-sunset-gold font-mono">₹{hoveredDest.baseBudgetInr.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Status Pill */}
      <div className="absolute top-6 left-6 z-20 hidden md:flex items-center gap-2.5 glass-panel px-3.5 py-1.5 rounded-full border border-white/10 text-xs text-slate-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-glow opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-glow"></span>
        </span>
        <span className="font-mono text-cyan-glow">LIVE GLOBE</span>
        <span className="text-slate-500">•</span>
        <span>{destinations.length} AI Waypoints Mapped</span>
      </div>
    </div>
  );
};
