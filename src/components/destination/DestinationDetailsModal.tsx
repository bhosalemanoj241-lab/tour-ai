import React, { useState, useEffect } from 'react';
import {
  X,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  Bookmark,
  Share2,
  DollarSign,
  Sun,
  ShieldCheck,
  Check,
  Users,
  Compass,
  Zap,
} from 'lucide-react';
import { Destination } from '../../types/travel';
import { DestinationImage } from '../common/DestinationImage';

interface DestinationDetailsModalProps {
  destination: Destination | null;
  onClose: () => void;
  onToggleSave: (dest: Destination) => void;
  isSaved?: boolean;
}

export const DestinationDetailsModal: React.FC<DestinationDetailsModalProps> = ({
  destination,
  onClose,
  onToggleSave,
  isSaved = false,
}) => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'budget' | 'gems' | 'tips'>('itinerary');
  const [activeDay, setActiveDay] = useState<number>(1);
  const [budgetMultiplier, setBudgetMultiplier] = useState<number>(1.0);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!destination) return null;

  const baseBudget = destination.baseBudgetInr || destination.estimatedBudget || 15000;
  const currentTotalBudget = Math.round(baseBudget * budgetMultiplier);
  const matchPct = destination.aiMatchScore || destination.matchScore || 95;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2000);
    }
  };

  const itineraryDays = destination.itinerary && destination.itinerary.length > 0
    ? destination.itinerary
    : [
        {
          day: 1,
          title: `Arrival & Exploration in ${destination.name}`,
          weather: { temp: destination.currentTemp || '22°C', condition: 'Sunny' as const, icon: 'Sun' },
          activities: [
            {
              id: 'a1',
              time: '09:30 AM',
              title: 'Scenic Arrival & Check-in',
              description: `Arrive at ${destination.name}, settle in, and soak in the surrounding panoramic vistas.`,
              location: destination.region,
              category: 'transit' as const,
              duration: '2h',
              costInr: 500,
              isOutdoor: false,
            },
            {
              id: 'a2',
              time: '01:00 PM',
              title: 'Authentic Local Culinary Lunch',
              description: 'Enjoy regional heirloom specialties and seasonal ingredients at a beloved local establishment.',
              location: 'Old Town Heritage Quarter',
              category: 'food' as const,
              duration: '1.5h',
              costInr: 600,
              isOutdoor: false,
            },
            {
              id: 'a3',
              time: '04:30 PM',
              title: 'Sunset Viewpoint & Stroll',
              description: 'Golden hour walk along quiet scenic ridges and iconic heritage viewpoints.',
              location: 'Panoramic Ridge',
              category: 'nature' as const,
              duration: '2h',
              costInr: 0,
              isOutdoor: true,
            },
          ],
        },
      ];

  const currentDayPlan = itineraryDays.find((d) => d.day === activeDay) || itineraryDays[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-4xl web3-glass-card bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl border-t sm:border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden h-[94dvh] sm:h-auto sm:max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Grab Bar */}
        <div className="w-12 h-1 rounded-full bg-slate-300 dark:bg-slate-600/70 mx-auto my-1.5 sm:hidden shrink-0" />

        {/* Top Sticky Header Banner */}
        <div className="relative aspect-[16/9] sm:aspect-[24/9] w-full overflow-hidden shrink-0 min-h-[180px] sm:min-h-[220px]">
          <DestinationImage
            src={destination.heroImage || destination.image}
            alt={destination.name}
            destinationName={destination.name}
            aspectRatio="h-full w-full"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

          {/* Top Control Buttons: Close, Share, Save */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-all shadow-md active:scale-95 relative"
              title="Share itinerary"
            >
              <Share2 className="w-4 h-4" />
              {copiedToast && (
                <span className="absolute -bottom-8 right-0 text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
                  Link Copied!
                </span>
              )}
            </button>

            <button
              onClick={() => onToggleSave(destination)}
              className={`p-2 rounded-full backdrop-blur-md transition-all shadow-md active:scale-95 ${
                isSaved
                  ? 'bg-rose-500 text-white'
                  : 'bg-black/50 hover:bg-black/70 text-white'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save destination'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-md active:scale-95"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Title & Match Badges */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{destination.region}, {destination.country}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mt-0.5">
                {destination.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-1 max-w-xl">
                {destination.tagline || destination.description}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-black flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{matchPct}% Match</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-md">
                ₹{destination.baseBudgetInr.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Summary Pill Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 sm:p-4 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 text-center shrink-0">
          <div className="p-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80">
            <span className="block text-[10px] text-slate-400 font-medium">Recommended Stay</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {destination.recommendedDays || 4} Days / {(destination.recommendedDays || 4) - 1} Nights
            </span>
          </div>
          <div className="p-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80">
            <span className="block text-[10px] text-slate-400 font-medium">Best Season</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
              {destination.bestSeason || 'Year-round'}
            </span>
          </div>
          <div className="p-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80">
            <span className="block text-[10px] text-slate-400 font-medium">Weather</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {destination.currentTemp} • {destination.weatherCondition}
            </span>
          </div>
          <div className="p-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80">
            <span className="block text-[10px] text-slate-400 font-medium">Crowd Level</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {destination.crowdLevel}
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-4 sm:px-6 pt-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'itinerary'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>AI Itinerary</span>
          </button>
          <button
            onClick={() => setActiveTab('budget')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'budget'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>Budget & Costs</span>
          </button>
          <button
            onClick={() => setActiveTab('gems')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'gems'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hidden Gems</span>
          </button>
          <button
            onClick={() => setActiveTab('tips')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'tips'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Best Hours & Tips</span>
          </button>
        </div>

        {/* Tab Content Body (Scrollable) */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5">
          {/* TAB 1: ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              {/* Day Selector Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {itineraryDays.map((d) => (
                  <button
                    key={d.day}
                    onClick={() => setActiveDay(d.day)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeDay === d.day
                        ? 'bg-sky-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    Day {d.day}
                  </button>
                ))}
              </div>

              {/* Active Day Header */}
              <div className="p-3.5 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/60 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                    {currentDayPlan.title}
                  </h4>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Day {currentDayPlan.day} of {destination.recommendedDays || 4}
                  </span>
                </div>
                <div className="text-right text-xs text-sky-700 dark:text-sky-300 font-semibold flex items-center gap-1">
                  <Sun className="w-4 h-4 text-amber-500" />
                  <span>{currentDayPlan.weather.temp}</span>
                </div>
              </div>

              {/* Day's Activities List */}
              <div className="space-y-3">
                {currentDayPlan.activities.map((act) => (
                  <div
                    key={act.id}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="px-2 py-1 rounded-lg bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 text-[11px] font-mono font-bold shrink-0">
                        {act.time}
                      </div>
                      <div>
                        <h5 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                          {act.title}
                        </h5>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                          {act.description}
                        </p>
                        <div className="flex items-center gap-3 mt-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-sky-500" />
                            {act.location}
                          </span>
                          <span>Duration: {act.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="sm:text-right shrink-0">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {act.costInr === 0 ? 'Free Entry' : `₹${act.costInr.toLocaleString('en-IN')}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: BUDGET BREAKDOWN */}
          {activeTab === 'budget' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Estimated Budget Tier
                  </span>
                  <span className="text-sm font-display font-extrabold text-sky-600 dark:text-sky-400">
                    Total: ₹{currentTotalBudget.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Slider */}
                <input
                  type="range"
                  min="0.8"
                  max="1.5"
                  step="0.1"
                  value={budgetMultiplier}
                  onChange={(e) => setBudgetMultiplier(parseFloat(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>Budget Tier (-20%)</span>
                  <span>Standard / Balanced</span>
                  <span>Comfort / Luxury (+50%)</span>
                </div>
              </div>

              {/* Breakdown Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    label: 'Accommodation & Stays',
                    cost: Math.round(destination.budgetBreakdown.accommodation * budgetMultiplier),
                    pct: '35%',
                  },
                  {
                    label: 'Transit & Local Transport',
                    cost: Math.round(destination.budgetBreakdown.transport * budgetMultiplier),
                    pct: '25%',
                  },
                  {
                    label: 'Food & Regional Dining',
                    cost: Math.round(destination.budgetBreakdown.food * budgetMultiplier),
                    pct: '20%',
                  },
                  {
                    label: 'Activities & Sightseeing',
                    cost: Math.round(destination.budgetBreakdown.activities * budgetMultiplier),
                    pct: '20%',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-slate-400">Est. share: {item.pct}</span>
                    </div>
                    <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                      ₹{item.cost.toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: HIDDEN GEMS */}
          {activeTab === 'gems' && (
            <div className="space-y-4">
              {destination.hiddenGems && destination.hiddenGems.length > 0 ? (
                destination.hiddenGems.map((gem, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-emerald-500" />
                        <span>{gem.name}</span>
                      </h4>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300">
                        {gem.crowdReductionPct}% Less Crowded
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {gem.description}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                      <span>Alternative to: <strong>{gem.popularAlternativeName}</strong></span>
                      <span>Estimated Savings: ₹{gem.savingsInr.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-xs text-slate-500">
                  No offbeat gems currently recorded for this location.
                </div>
              )}
            </div>
          )}

          {/* TAB 4: BEST HOURS & TIPS */}
          {activeTab === 'tips' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                  <Clock className="w-4 h-4 text-sky-500" />
                  <span>AI Recommended Visiting Window</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">
                      Recommended Hours
                    </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                      {destination.optimalVisitingHours?.recommendedHours || '06:00 AM – 09:30 AM'}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">
                      Peak Tourist Hours
                    </span>
                    <span className="font-bold text-amber-600 dark:text-amber-400 text-sm">
                      {destination.optimalVisitingHours?.peakHours || '11:00 AM – 03:00 PM'}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {destination.optimalVisitingHours?.reason ||
                    'Visiting during dawn and early morning offers clearer viewpoints, peaceful monastic chanting, and comfortable temperatures.'}
                </p>
              </div>

              {/* Local Travel Advice */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white block">
                  Local Cultural Notes:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Always carry cash as UPI connectivity can fluctuate in remote high-altitude ridges.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Respect local temple customs and avoid single-use plastics along trails.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Book government-licensed local guides for treks and safari excursions.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions with Safe-area padding */}
        <div className="p-3.5 sm:p-5 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0 pb-safe">
          <button
            onClick={() => onToggleSave(destination)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              isSaved
                ? 'bg-rose-50 dark:bg-rose-950/70 text-rose-600 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            <span>{isSaved ? 'Saved in Bookmarks' : 'Bookmark Destination'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 font-display font-semibold text-xs transition-all shadow-xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
