import React, { useRef, useState } from 'react';

export const BackgroundVideo: React.FC = () => {
  const [videoError, setVideoError] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. AMBIENT LIVING CINEMATIC VIDEO LAYER */}
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-105 filter brightness-105 contrast-100 opacity-40 dark:opacity-25 transition-opacity duration-500"
        >
          {/* Ethereal sunny coastal waves & horizon video (luxury white theme aesthetic) */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-waves-coming-to-the-beach-5016-large.mp4" type="video/mp4" />
          <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
        </video>
      ) : (
        /* Fallback smooth luminous gradient if video is blocked */
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-50 via-white to-sky-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      )}

      {/* 2. HIGH-CONTRAST READABILITY SHIELD (Pristine luminous white for light theme, deep obsidian for dark) */}
      <div className="absolute inset-0 bg-slate-50/80 dark:bg-slate-950/85 backdrop-blur-[2px] pointer-events-none transition-colors duration-300" />

      {/* 3. SUBTLE AMBIENT RADIAL LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.08)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.1)_0%,_transparent_60%)] pointer-events-none" />
    </div>
  );
};
