import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Check,
  MapPin,
  Calendar,
  DollarSign,
  Bookmark,
  SlidersHorizontal,
  HelpCircle,
  X,
  ShieldCheck,
} from 'lucide-react';
import { Destination, UserPreferences } from '../../types/travel';
import { DestinationImage } from '../common/DestinationImage';

interface RecommendationsViewProps {
  destinations: Destination[];
  userPreferences: UserPreferences | null;
  onSelectDestination: (dest: Destination) => void;
  onEditPreferences: () => void;
  onSaveTrip: (dest: Destination) => void;
  savedTrips: Destination[];
  onAskAI?: (prompt: string) => void;
}

export const RecommendationsView: React.FC<RecommendationsViewProps> = ({
  destinations,
  userPreferences,
  onSelectDestination,
  onEditPreferences,
  onSaveTrip,
  savedTrips,
  onAskAI,
}) => {
  const [whyModalDest, setWhyModalDest] = useState<Destination | null>(null);

  // Top 3 best matching destinations
  const top3Destinations = destinations.slice(0, 3);
  const otherDestinations = destinations.slice(3, 9);

  const rankBadges = [
    {
      badge: '🥇 #1 BEST AI MATCH',
      labelBg: 'bg-amber-500 text-white',
      borderRing: 'border-amber-400 ring-2 ring-amber-100 shadow-lg',
    },
    {
      badge: '🥈 #2 TOP ALTERNATIVE',
      labelBg: 'bg-sky-600 text-white',
      borderRing: 'border-sky-300 shadow-md',
    },
    {
      badge: '🥉 #3 HIDDEN GEM MATCH',
      labelBg: 'bg-emerald-600 text-white',
      borderRing: 'border-emerald-300 shadow-md',
    },
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 animate-fadeIn">
      {/* Top Header & Active Preferences Strip */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-travel-500/20 text-travel-400 flex items-center justify-center shrink-0 border border-travel-500/40">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-travel-400 font-bold block">
                STEP 2 OF 3 • AI RECOMMENDATIONS
              </span>
              <h2 className="text-base sm:text-lg font-display font-bold">
                {userPreferences
                  ? `Curated for your ${userPreferences.mood} trip with ${userPreferences.companions}`
                  : 'AI Recommended Destinations for India'}
              </h2>
              {userPreferences && (
                <div className="flex flex-wrap items-center gap-1.5 mt-1 text-[11px] text-slate-300">
                  <span className="px-2 py-0.5 rounded bg-white/10 font-semibold">{userPreferences.budget}</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 font-semibold">{userPreferences.duration}</span>
                  {userPreferences.geography && (
                    <span className="px-2 py-0.5 rounded bg-travel-500/30 text-sky-200 font-semibold">{userPreferences.geography}</span>
                  )}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={onEditPreferences}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-all flex items-center gap-1.5 self-start md:self-auto"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Edit Preferences</span>
          </button>
        </div>

        <div className="text-center max-w-2xl mx-auto pt-2">
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Your 3 Best Destinations
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Selected by TourAI based on interest resonance, budget efficiency, and current weather windows.
          </p>
        </div>
      </div>

      {/* THE 3 BEST DESTINATIONS CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {top3Destinations.map((dest, idx) => {
          const rankInfo = rankBadges[idx] || rankBadges[0];
          const matchPercentage = dest.matchScore || dest.aiMatchScore || (98 - idx * 3);
          const budgetDisplay = dest.estimatedBudget || dest.baseBudgetInr || 15000;
          const daysDisplay = dest.duration || dest.recommendedDays || 4;
          const isSaved = savedTrips.some((d) => d.id === dest.id);

          return (
            <div
              key={dest.id}
              className={`travel-card rounded-3xl overflow-hidden travel-card-hover flex flex-col justify-between group bg-white border ${rankInfo.borderRing} relative`}
            >
              {/* Image & Badges */}
              <div>
                <div className="relative overflow-hidden">
                  <DestinationImage
                    src={dest.heroImage || dest.image}
                    alt={dest.name}
                    destinationName={dest.name}
                    country={dest.country}
                    aspectRatio="aspect-[16/11]"
                  />

                  {/* Rank Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold shadow-md uppercase tracking-wider ${rankInfo.labelBg}`}>
                      {rankInfo.badge}
                    </span>
                  </div>

                  {/* Bookmark Save Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSaveTrip(dest);
                    }}
                    title={isSaved ? 'Saved to My Trips' : 'Save to My Trips'}
                    className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all shadow-sm ${
                      isSaved
                        ? 'bg-travel-600 text-white'
                        : 'bg-white/90 text-slate-700 hover:text-travel-600 hover:bg-white'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
                  </button>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-travel-700 font-bold mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{dest.region}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{matchPercentage}% Match</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-travel-600 transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 italic">
                      "{dest.tagline}"
                    </p>
                  </div>

                  {/* Estimated Cost & Duration Strip */}
                  <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium">
                    <div className="flex items-center gap-1 font-mono font-bold text-slate-900">
                      <DollarSign className="w-3.5 h-3.5 text-travel-600" />
                      <span>₹{budgetDisplay.toLocaleString('en-IN')} total</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{daysDisplay} Days</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {dest.crowdLevel} Crowds
                    </span>
                  </div>

                  {/* Why AI Chose This */}
                  <div className="p-3 rounded-2xl bg-travel-50/60 border border-travel-100 space-y-1.5 text-xs">
                    <span className="font-bold text-travel-900 block text-[11px] uppercase tracking-wider">
                      Why AI Picked This For You
                    </span>
                    <div className="space-y-1 text-slate-700">
                      {(dest.whyAiChose.slice(0, 3) || []).map((reason, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => onSelectDestination(dest)}
                  className="w-full py-3 px-4 rounded-xl bg-travel-600 hover:bg-travel-700 text-white font-display font-semibold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>View Details & Generate Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setWhyModalDest(dest)}
                    className="py-2 px-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors text-xs font-semibold flex items-center justify-center gap-1.5"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-travel-600" />
                    <span>Why this pick?</span>
                  </button>

                  {onAskAI && (
                    <button
                      type="button"
                      onClick={() => onAskAI(`Tell me complete details about traveling to ${dest.name}, India including hidden gems, budget, and local food`)}
                      className="py-2 px-2.5 rounded-xl text-travel-700 bg-travel-50 hover:bg-travel-100 border border-travel-200/80 transition-colors text-xs font-semibold flex items-center justify-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-travel-600" />
                      <span>Ask AI</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MORE MATCHING DESTINATIONS ACROSS INDIA */}
      {otherDestinations.length > 0 && (
        <div className="pt-10 border-t border-slate-200 space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
              More Matching Destinations in India
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Alternative destinations that also resonate with your travel profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="travel-card rounded-2xl overflow-hidden travel-card-hover cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative">
                    <DestinationImage
                      src={dest.heroImage || dest.image}
                      alt={dest.name}
                      destinationName={dest.name}
                      country={dest.country}
                      aspectRatio="aspect-[16/10]"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-xs">
                      {dest.aiMatchScore || 88}% Match
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-travel-600 transition-colors">
                      {dest.name}, {dest.region}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">"{dest.tagline}"</p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-mono font-bold text-slate-900">
                    ₹{(dest.estimatedBudget || dest.baseBudgetInr).toLocaleString('en-IN')}
                  </span>
                  <span className="text-travel-600 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* WHY MODAL */}
      {whyModalDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fadeIn">
          <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 shadow-modal p-6 relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h4 className="font-display font-bold text-base text-slate-900">
                Why TourAI Recommends {whyModalDest.name}
              </h4>
              <button
                type="button"
                onClick={() => setWhyModalDest(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="font-bold text-slate-900 block mb-0.5">Your Selected Preferences:</span>
                <p>• Mood: {userPreferences?.mood || 'Adventure'}</p>
                <p>• Companions: {userPreferences?.companions || 'Solo'}</p>
                <p>• Budget: {userPreferences?.budget || 'Standard'}</p>
                <p>• Duration: {userPreferences?.duration || '3–5 days'}</p>
              </div>

              <div className="space-y-2 text-slate-700">
                <span className="font-bold text-slate-900 block">AI Match Rationale:</span>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{whyModalDest.matchScore || whyModalDest.aiMatchScore}% algorithmic resonance score</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Comfortably aligns with your budget (₹{(whyModalDest.estimatedBudget || whyModalDest.baseBudgetInr).toLocaleString('en-IN')})</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>High traveler satisfaction score ({whyModalDest.experienceScore}/100)</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                onSelectDestination(whyModalDest);
                setWhyModalDest(null);
              }}
              className="w-full py-2.5 rounded-xl bg-travel-600 hover:bg-travel-700 text-white font-semibold text-xs"
            >
              View Full Details & Itinerary
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
