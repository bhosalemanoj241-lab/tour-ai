import React, { Suspense, lazy } from 'react';
import { Sparkles, ArrowRight, Compass, ShieldCheck, Zap, MapPin, Globe } from 'lucide-react';
import { Destination } from '../../types/travel';
import { DestinationImage } from '../common/DestinationImage';

// Lazy-load Globe3D for fast initial page load & performance
const Globe3D = lazy(() =>
  import('../globe/Globe3D').then((module) => ({ default: module.Globe3D }))
);

interface HomeViewProps {
  onPlanTrip: () => void;
  onExplore: () => void;
  onSelectDestination: (dest: Destination) => void;
  destinations: Destination[];
}

export const HomeView: React.FC<HomeViewProps> = ({
  onPlanTrip,
  onExplore,
  onSelectDestination,
  destinations,
}) => {
  const featuredDest = destinations[0] || null;
  const popularDestinations = destinations.slice(0, 3);

  return (
    <div className="pt-24 pb-20 space-y-20 animate-fadeIn">
      {/* 1. HERO SECTION WITH 3D GLOBE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Hero Left: Clear Typography & Primary Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-travel-50 border border-travel-200 text-travel-700 text-xs font-bold tracking-wide shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-travel-600 animate-pulse" />
              <span>AI-POWERED TOURISM RECOMMENDATION SYSTEM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Your dream trip, <br />
              <span className="bg-gradient-to-r from-travel-600 to-sky-500 bg-clip-text text-transparent">
                crafted by AI.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              TourAI calibrates your journey across India based on your mood, budget, companion style, and travel pace. Zero tourist traps, 100% personalized.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onPlanTrip}
                className="px-7 py-4 rounded-full bg-gradient-to-r from-travel-600 to-sky-500 hover:from-travel-700 hover:to-sky-600 text-white font-display font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Plan My Trip</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExplore}
                className="px-6 py-4 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-display font-semibold text-sm tracking-wide transition-all text-center"
              >
                Explore Destinations
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>65+ Verified Indian Locations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>1-Click Schedule Optimizer</span>
              </div>
            </div>
          </div>

          {/* Hero Right: 3D Interactive Earth Globe */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex items-center justify-center">
              <Suspense
                fallback={
                  <div className="flex flex-col items-center justify-center gap-2 text-slate-400">
                    <Compass className="w-8 h-8 animate-spin text-travel-400" />
                    <span className="text-xs font-mono">Loading 3D Travel Globe...</span>
                  </div>
                }
              >
                <Globe3D
                  destinations={destinations}
                  selectedDestination={null}
                  onSelectDestination={onSelectDestination}
                />
              </Suspense>

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 pointer-events-none">
                <span>Interactive 3D Globe: Rotate & Click Locations</span>
                <span className="text-cyan-400 font-mono font-bold">65+ Coordinates Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN USER FLOW STEPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
            <span className="text-xs font-bold text-travel-600 uppercase tracking-wider">How TourAI Works</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              Simple 3-Step Trip Creation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/70 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-travel-50 text-travel-700 font-bold flex items-center justify-center text-sm">
                1
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">Enter Preferences</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose your travel mood, companion style, budget, duration, and preferred landscape.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/70 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-travel-50 text-travel-700 font-bold flex items-center justify-center text-sm">
                2
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">AI Recommendations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                TourAI scans Indian destinations and presents your 3 Best Destinations with match explanations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/70 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-travel-50 text-travel-700 font-bold flex items-center justify-center text-sm">
                3
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">Itinerary & Budget</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Review your optimized day-by-day itinerary, verify budget breakdowns, and save your trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED DESTINATION SPOTLIGHT */}
      {featuredDest && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-xs font-bold text-travel-600 uppercase tracking-wider block">Featured Spotlight</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-1">
                Popular with Travelers in India
              </h2>
            </div>
            <button
              onClick={onExplore}
              className="text-xs sm:text-sm font-semibold text-travel-600 hover:text-travel-700 flex items-center gap-1"
            >
              <span>View all 65+ destinations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="travel-card rounded-3xl overflow-hidden travel-card-hover cursor-pointer group flex flex-col justify-between bg-white border border-slate-200"
              >
                <div>
                  <div className="relative overflow-hidden">
                    <DestinationImage
                      src={dest.heroImage || dest.image}
                      alt={dest.name}
                      destinationName={dest.name}
                      country={dest.country}
                      aspectRatio="aspect-[16/10]"
                    />
                    <div className="absolute top-3 left-3 bg-travel-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {dest.aiMatchScore || 95}% Match
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-1 text-xs text-travel-700 font-bold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.region}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-travel-600 transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">"{dest.tagline}"</p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-mono font-bold text-slate-900">
                    ₹{(dest.estimatedBudget || dest.baseBudgetInr).toLocaleString('en-IN')}
                  </span>
                  <span className="text-travel-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
