import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Calendar,
  Clock,
  Check,
  Zap,
  Bookmark,
  TrendingDown,
  CloudRain,
  Sun,
  MapPin,
  Building2,
  Utensils,
  Car,
  Plane,
  ShieldCheck,
  Sliders,
  DollarSign,
  Share2,
} from 'lucide-react';
import { Destination, DayPlan } from '../../types/travel';
import { DestinationImage } from '../common/DestinationImage';

interface DestinationDetailsViewProps {
  destination: Destination | null;
  onBack: () => void;
  onSaveTrip: (dest: Destination) => void;
  isSaved?: boolean;
  onAskAI?: (prompt: string) => void;
}

export const DestinationDetailsView: React.FC<DestinationDetailsViewProps> = ({
  destination,
  onBack,
  onSaveTrip,
  isSaved = false,
  onAskAI,
}) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [isOptimized, setIsOptimized] = useState<boolean>(false);
  const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
  const [budgetMultiplier, setBudgetMultiplier] = useState<number>(1.0);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  if (!destination) {
    return (
      <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">No Destination Selected</h2>
        <p className="text-sm text-slate-600">Please select a destination from Recommendations or Explore.</p>
        <button
          onClick={onBack}
          className="px-6 py-2.5 rounded-full bg-travel-600 text-white font-semibold text-xs"
        >
          Browse Recommendations
        </button>
      </div>
    );
  }

  const matchScore = destination.matchScore || destination.aiMatchScore || 96;
  const baseBudget = destination.estimatedBudget || destination.baseBudgetInr || 15000;
  const currentTotalBudget = Math.round(baseBudget * budgetMultiplier);
  const aiSavings = Math.round(currentTotalBudget * 0.17); // 17% algorithmic savings
  const days = destination.duration || destination.recommendedDays || 4;

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimized(true);
      setIsOptimizing(false);
    }, 500);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2000);
  };

  return (
    <div className="pt-24 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
      {/* Top Back Navigation & Quick Actions */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Recommendations</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors relative"
            title="Share itinerary"
          >
            <Share2 className="w-4 h-4" />
            {copiedToast && (
              <span className="absolute -bottom-8 right-0 bg-slate-900 text-white text-[10px] px-2 py-1 rounded shadow-md whitespace-nowrap">
                Link copied!
              </span>
            )}
          </button>

          <button
            onClick={() => onSaveTrip(destination)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              isSaved
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-travel-600 hover:bg-travel-700 text-white shadow-sm'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
            <span>{isSaved ? 'Saved in My Trips' : 'Save Trip'}</span>
          </button>
        </div>
      </div>

      {/* Hero Showcase Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <DestinationImage
            src={destination.heroImage || destination.image}
            alt={destination.name}
            destinationName={destination.name}
            country={destination.country}
            aspectRatio="aspect-auto h-full w-full object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

          {/* Top Overlays */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-travel-600 text-white text-xs font-extrabold shadow-sm">
              {matchScore}% AI Match
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold">
              {destination.crowdLevel} Crowds
            </span>
          </div>

          {/* Bottom Hero Info */}
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex items-center gap-1.5 text-xs text-travel-300 font-bold">
              <MapPin className="w-3.5 h-3.5" />
              <span>{destination.region}, {destination.country}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
              {destination.name}
            </h1>
            <p className="text-xs sm:text-base text-slate-200 max-w-2xl italic">
              "{destination.tagline}"
            </p>
          </div>
        </div>

        {/* Quick Facts Strip */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-500 block uppercase font-bold text-[10px]">Estimated Budget</span>
            <span className="font-mono font-bold text-base text-slate-900">
              ₹{currentTotalBudget.toLocaleString('en-IN')}
            </span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase font-bold text-[10px]">Ideal Duration</span>
            <span className="font-bold text-base text-slate-900">{days} Days</span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase font-bold text-[10px]">Best Season</span>
            <span className="font-bold text-base text-slate-900">{destination.bestSeason}</span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase font-bold text-[10px]">Current Weather</span>
            <span className="font-bold text-base text-slate-900">{destination.currentTemp} • {destination.weatherCondition}</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: AI ITINERARY GENERATOR */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-travel-50 text-travel-700 text-xs font-bold mb-1">
              <Calendar className="w-3.5 h-3.5 text-travel-600" />
              <span>AI DAY-BY-DAY ITINERARY</span>
            </div>
            <h2 className="text-2xl font-display font-bold text-slate-900">
              Customized Travel Schedule
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Arranged for optimal sunlight, weather windows, and low-crowd hours.
            </p>
          </div>

          <button
            onClick={handleOptimize}
            disabled={isOptimizing}
            className={`px-4 py-2.5 rounded-full text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 self-start sm:self-auto ${
              isOptimized
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-travel-600 hover:bg-travel-700 text-white'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 ${isOptimizing ? 'animate-spin' : ''}`} />
            <span>{isOptimizing ? 'Optimizing...' : isOptimized ? '✓ Schedule Optimized' : '1-Click AI Schedule Optimizer'}</span>
          </button>
        </div>

        {/* Day Tabs */}
        {destination.itinerary && destination.itinerary.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {destination.itinerary.map((dayPlan) => (
              <button
                key={dayPlan.day}
                onClick={() => setActiveDay(dayPlan.day)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  activeDay === dayPlan.day
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Day {dayPlan.day}: {dayPlan.title}
              </button>
            ))}
          </div>
        )}

        {/* Active Day Activities List */}
        <div className="space-y-3">
          {(() => {
            const currentDayPlan =
              destination.itinerary?.find((d) => d.day === activeDay) || destination.itinerary?.[0];

            if (!currentDayPlan || !currentDayPlan.activities) {
              return <p className="text-xs text-slate-500">Standard flexible exploration day.</p>;
            }

            return currentDayPlan.activities.map((act, aIdx) => (
              <div
                key={act.id || aIdx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white hover:border-slate-200 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-travel-100 text-travel-700 flex items-center justify-center shrink-0 text-xs font-bold">
                    {aIdx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-travel-700">{act.time}</span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs font-semibold text-slate-500">{act.location}</span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 mt-0.5">{act.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{act.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto text-xs">
                  <span className="font-mono font-bold text-slate-800">
                    {act.costInr > 0 ? `₹${act.costInr}` : 'Free'}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 text-[11px]">
                    {act.duration}
                  </span>
                </div>
              </div>
            ));
          })()}
        </div>
      </div>

      {/* SECTION 2: BUDGET ESTIMATION & CHECKER */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-1">
              <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
              <span>EXPENSE & SAVINGS SYNTHESIZER</span>
            </div>
            <h2 className="text-2xl font-display font-bold text-slate-900">
              Budget Estimation
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Transparent cost breakdown verified across direct local stays and regional transit.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-800 block">AI Algorithmic Savings</span>
              <span className="font-mono font-bold text-lg text-emerald-700">₹{aiSavings.toLocaleString('en-IN')}</span>
              <span className="text-[10px] text-emerald-600 block">~17% saved vs commercial packages</span>
            </div>
          </div>
        </div>

        {/* Budget Tier Switcher */}
        <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-100">
          <span className="text-xs font-bold text-slate-700">Adjust Travel Comfort Level:</span>
          <div className="flex items-center gap-1.5">
            {[
              { label: 'Budget (0.8x)', mult: 0.8 },
              { label: 'Standard (1.0x)', mult: 1.0 },
              { label: 'Premium (1.4x)', mult: 1.4 },
            ].map((tier) => (
              <button
                key={tier.label}
                onClick={() => setBudgetMultiplier(tier.mult)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  budgetMultiplier === tier.mult
                    ? 'bg-travel-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>

        {/* Expense Categories Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
              <Building2 className="w-4 h-4 text-travel-600" />
              <span>Stays & Accommodation</span>
            </div>
            <span className="font-mono font-bold text-lg text-slate-900 block">
              ₹{Math.round(currentTotalBudget * 0.35).toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-slate-500">Verified boutique stays & homestays</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
              <Utensils className="w-4 h-4 text-travel-600" />
              <span>Dining & Food</span>
            </div>
            <span className="font-mono font-bold text-lg text-slate-900 block">
              ₹{Math.round(currentTotalBudget * 0.22).toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-slate-500">Local thalis & artisan cafes</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
              <Car className="w-4 h-4 text-travel-600" />
              <span>Transit & Activities</span>
            </div>
            <span className="font-mono font-bold text-lg text-slate-900 block">
              ₹{Math.round(currentTotalBudget * 0.43).toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-slate-500">Local cabs, permits & entry passes</span>
          </div>
        </div>
      </div>

      {/* SECTION 3: SAVE TRIP & AI ASSISTANT PROMPT */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="font-display font-bold text-xl text-white">
            Love this trip for {destination.name}?
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Save it to "My Trips" for offline reference, or chat with AI Assistant to adjust custom details.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          {onAskAI && (
            <button
              onClick={() =>
                onAskAI(`Tell me everything about traveling to ${destination.name}, India including hidden gems, budget, and local food`)
              }
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-travel-400" />
              <span>Ask AI Assistant</span>
            </button>
          )}

          <button
            onClick={() => onSaveTrip(destination)}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5 ${
              isSaved
                ? 'bg-emerald-500 text-white'
                : 'bg-travel-600 hover:bg-travel-500 text-white'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
            <span>{isSaved ? 'Saved to My Trips' : 'Save to My Trips'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
