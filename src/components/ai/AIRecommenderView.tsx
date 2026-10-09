import React, { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Calendar,
  Bookmark,
  ArrowRight,
  Check,
  X,
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
  Heart,
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  Compass,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Destination, UserPreferences } from '../../types/travel';
import { DestinationImage } from '../common/DestinationImage';
import { AIStepWizard } from './AIStepWizard';

interface AIRecommenderViewProps {
  destinations: Destination[];
  userPreferences: UserPreferences;
  onUpdatePreferences: (prefs: UserPreferences) => void;
  onSelectDestination: (dest: Destination) => void;
  onToggleSaveTrip: (dest: Destination) => void;
  savedTrips: Destination[];
}


// Compute synergy metrics
function computeSynergyScores(dest: Destination, prefs: UserPreferences) {
  let terrainSynergy = 76;
  if (prefs.geography) {
    const geo = prefs.geography.toLowerCase();
    const tags = dest.tags.map((t) => t.toLowerCase());
    const reg = dest.region.toLowerCase();
    if (
      (geo.includes('mountain') && (tags.includes('mountains') || reg.includes('himalaya') || reg.includes('ladakh') || reg.includes('himachal'))) ||
      (geo.includes('beach') && (tags.includes('beaches') || reg.includes('goa') || reg.includes('andaman'))) ||
      (geo.includes('ghats') && (tags.includes('western ghats') || tags.includes('tea gardens'))) ||
      (geo.includes('wildlife') && tags.includes('wildlife')) ||
      (geo.includes('heritage') && (tags.includes('culture') || tags.includes('history'))) ||
      (geo.includes('desert') && tags.includes('desert')) ||
      (geo.includes('spiritual') && tags.includes('spirituality'))
    ) {
      terrainSynergy = 98;
    } else {
      terrainSynergy = 68;
    }
  }

  let budgetSynergy = 86;
  if (prefs.budget.includes('5K–₹10K')) {
    budgetSynergy = dest.baseBudgetInr <= 12500 ? 98 : 65;
  } else if (prefs.budget.includes('10K–₹25K')) {
    budgetSynergy = dest.baseBudgetInr <= 25000 && dest.baseBudgetInr >= 8000 ? 97 : 80;
  } else if (prefs.budget.includes('25K–₹50K')) {
    budgetSynergy = dest.baseBudgetInr <= 52000 && dest.baseBudgetInr >= 15000 ? 96 : 82;
  } else if (prefs.budget.includes('50K+')) {
    budgetSynergy = 95;
  }

  let vibeSynergy = 85;
  const mood = (prefs.mood || '').toLowerCase();
  if (dest.moodMatches.some((m) => m.toLowerCase().includes(mood))) {
    vibeSynergy = 98;
  } else if (dest.scores.relaxation >= 85 || dest.scores.adventure >= 85) {
    vibeSynergy = 91;
  }

  const crowdSynergy = Math.max(72, Math.min(99, 100 - (dest.crowdScore || 30) + 12));

  return { terrainSynergy, budgetSynergy, vibeSynergy, crowdSynergy };
}

export const AIRecommenderView: React.FC<AIRecommenderViewProps> = ({
  destinations,
  userPreferences,
  onUpdatePreferences,
  onSelectDestination,
  onToggleSaveTrip,
  savedTrips,
}) => {
  // CRITICAL FLOW:
  // When user clicks the AI feature, DO NOT give the recommendations directly!
  // It starts in 'step-by-step' quiz mode.
  // After answering all steps, it analyzes and THEN recommends the best destination!
  const [aiStage, setAiStage] = useState<'step-by-step' | 'analyzing' | 'results'>('step-by-step');

  // Handle completion of the step-by-step preference questionnaire
  const handleWizardComplete = (prefs: UserPreferences) => {
    setAiStage('analyzing');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Neural analysis simulation
    setTimeout(() => {
      onUpdatePreferences(prefs);
      setAiStage('results');

      // Celebration Confetti
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1300);
  };


  const topDestination = destinations[0];
  const runnerUps = destinations.slice(1, 7);
  const isTopSaved = topDestination && savedTrips.some((d) => d.id === topDestination.id);

  const synergy = topDestination
    ? computeSynergyScores(topDestination, userPreferences)
    : { terrainSynergy: 98, budgetSynergy: 97, vibeSynergy: 95, crowdSynergy: 88 };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* =========================================================================
          STAGE 1: STEP-BY-STEP PREFERENCE QUESTIONNAIRE (DEFAULT ON CLICKING AI)
         ========================================================================= */}
      {aiStage === 'step-by-step' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Welcoming Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-cyan-950/90 border border-sky-200 dark:border-cyan-500/40 text-sky-800 dark:text-cyan-300 text-xs font-bold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400 animate-pulse" />
              <span>AI STEP-BY-STEP PREFERENCE MATCHER</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-900 dark:text-white drop-shadow-xs">
              Discover Your Best Destination Match
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Answer 6 quick questions below to configure your preferences. TourAI will synthesize your answers across 69 verified destinations in India and recommend your optimal match.
            </p>

          </div>

          {/* The Step-by-Step AI Wizard */}
          <AIStepWizard
            initialPreferences={userPreferences}
            onComplete={handleWizardComplete}
          />
        </div>
      )}

      {/* =========================================================================
          STAGE 2: NEURAL ANALYSIS & CALCULATING ANIMATION STATE
         ========================================================================= */}
      {aiStage === 'analyzing' && (
        <div className="py-20 max-w-2xl mx-auto text-center space-y-6 animate-fadeIn">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-sky-50 dark:bg-cyan-500/10 border-2 border-sky-500 dark:border-cyan-400 text-sky-600 dark:text-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(2,132,199,0.2)] animate-pulse">
            <Sparkles className="w-10 h-10 animate-spin" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 dark:text-white">
              Synthesizing Your Preferences...
            </h2>
            <p className="text-xs sm:text-sm text-sky-700 dark:text-cyan-300 font-mono">
              Calibrating 69 Indian destinations across terrain, budget, companions, and crowd density
            </p>
          </div>

          {/* Loading Progress Bar */}
          <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-inner max-w-md mx-auto">
            <div className="h-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 w-full animate-[pulse_1s_infinite] shadow-[0_0_15px_rgba(2,132,199,0.8)]" />
          </div>

          {/* Live Step Logs */}
          <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 font-mono pt-2">
            <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400">
              <Check className="w-3.5 h-3.5" />
              <span>Preferences verified: {userPreferences.geography} • {userPreferences.companions} • {userPreferences.budget}</span>
            </div>
            <div>Cross-referencing climate, crowd levels, and regional gastronomy...</div>
            <div className="text-sky-700 dark:text-cyan-400">Identifying #1 optimal match for your trip...</div>
          </div>
        </div>
      )}

      {/* =========================================================================
          STAGE 3: RESULTS (REVEALED AFTER COMPLETING STEP-BY-STEP PREFERENCES)
         ========================================================================= */}
      {aiStage === 'results' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Results Navigation Bar with "Retake Quiz" Button */}
          <div className="p-4 sm:p-5 rounded-3xl web3-glass-card bg-white/95 dark:bg-slate-900/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-cyan-500/10 border border-sky-200 dark:border-cyan-500/30 text-sky-600 dark:text-cyan-400 flex items-center justify-center font-bold shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase font-bold text-sky-700 dark:text-cyan-400">
                    CALIBRATED TRAVEL PROFILE
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 font-bold">
                    Match Computed
                  </span>
                </div>

                {/* Submitted Preference Badges */}
                <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs">
                  <span className="px-2.5 py-1 rounded-xl bg-sky-50 dark:bg-cyan-950/90 text-sky-900 dark:text-cyan-300 font-bold border border-sky-200 dark:border-cyan-500/40">
                    {userPreferences.geography || 'Snowy Mountains'}
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700/60">
                    👤 {userPreferences.companions || 'Solo'}
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-emerald-700 dark:text-emerald-300 font-semibold border border-slate-200 dark:border-slate-700/60 font-mono">
                    {userPreferences.budget || '₹10K–₹25K'}
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700/60">
                    🗓️ {userPreferences.duration || '3–5 days'}
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-purple-700 dark:text-purple-300 font-semibold border border-slate-200 dark:border-slate-700/60">
                    ✨ {userPreferences.mood || 'Peaceful'}
                  </span>
                </div>
              </div>
            </div>

            {/* BUTTON TO RETAKE QUESTIONNAIRE */}
            <button
              onClick={() => {
                setAiStage('step-by-step');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-display font-black text-xs sm:text-sm tracking-wide transition-all shadow-lg flex items-center gap-2.5 active:scale-95 shrink-0 self-stretch md:self-auto justify-center"
            >
              <RotateCcw className="w-4 h-4 stroke-[2.5]" />
              <span>Change Preferences / Retake Quiz</span>
            </button>
          </div>

          {/* 1. HERO #1 BEST MATCH DESTINATION CARD */}
          {topDestination && (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                    <span>🏆 #1 BEST MATCH FOR YOU</span>
                  </span>
                </div>

                <span className="text-xs font-mono text-sky-700 dark:text-cyan-400 font-bold">
                  {topDestination.aiMatchScore || 98}% Overall Match
                </span>
              </div>

              <div className="rounded-3xl web3-glass-card bg-white/95 dark:bg-slate-900/90 border-2 border-amber-400/60 overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                {/* Left: Destination Hero Image */}
                <div className="lg:w-1/2 relative min-h-[250px] sm:min-h-[350px] lg:min-h-[440px]">
                  <DestinationImage
                    src={topDestination.heroImage || topDestination.image}
                    alt={topDestination.name}
                    destinationName={topDestination.name}
                    country={topDestination.country}
                    aspectRatio="h-full w-full object-cover"
                  />

                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3.5 py-1.5 rounded-full bg-slate-950/90 text-amber-300 border border-amber-400/40 font-bold text-xs shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Top Recommendation</span>
                    </span>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={() => onToggleSaveTrip(topDestination)}
                    className={`absolute top-4 right-4 z-20 p-2.5 rounded-full backdrop-blur-md transition-all shadow-md active:scale-90 ${
                      isTopSaved
                        ? 'bg-rose-500 text-white'
                        : 'bg-black/70 text-white hover:bg-black/90'
                    }`}
                    title={isTopSaved ? 'Remove from Saved' : 'Save this Trip'}
                  >
                    <Bookmark className={`w-5 h-5 ${isTopSaved ? 'fill-current' : ''}`} />
                  </button>

                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex items-end justify-between z-10">
                    <span className="text-white text-sm font-semibold flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      {topDestination.region}
                    </span>

                    <div className="px-3 py-1 rounded-full bg-emerald-500 text-white font-black text-xs flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{topDestination.aiMatchScore || 98}% Match</span>
                    </div>
                  </div>
                </div>

                {/* Right: Key Details & Why AI Chose It */}
                <div className="lg:w-1/2 p-5 sm:p-8 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-sky-50 dark:bg-cyan-950/80 text-sky-800 dark:text-cyan-300 border border-sky-200 dark:border-cyan-500/30">
                          {topDestination.travelDnaFit || 'The Ideal Match'}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-display font-black text-slate-900 dark:text-white">
                        {topDestination.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        {topDestination.tagline || topDestination.description}
                      </p>
                    </div>

                    {/* Key Trip Numbers */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 py-3 border-y border-slate-200 dark:border-slate-800 text-center">
                      <div className="p-2 sm:p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                        <span className="block text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-bold">Estimated Cost</span>
                        <span className="text-xs sm:text-base lg:text-lg font-black text-sky-600 dark:text-cyan-400 font-mono">
                          ₹{topDestination.baseBudgetInr.toLocaleString('en-IN')}
                        </span>
                        <span className="block text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-500">per person</span>
                      </div>

                      <div className="p-2 sm:p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                        <span className="block text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-bold">Duration</span>
                        <span className="text-xs sm:text-base lg:text-lg font-black text-slate-900 dark:text-white">
                          {topDestination.recommendedDays || 4} Days
                        </span>
                        <span className="block text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-500">recommended</span>
                      </div>

                      <div className="p-2 sm:p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                        <span className="block text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-bold">Best Season</span>
                        <span className="text-[11px] sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 line-clamp-1 mt-0.5 sm:mt-1">
                          {topDestination.bestSeason?.split('–')[0]?.trim() || 'All Year'}
                        </span>
                        <span className="block text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-500 truncate">{topDestination.currentTemp}</span>
                      </div>
                    </div>

                    {/* Live AI Preference Synergy Matrix */}
                    <div className="space-y-2 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
                      <span className="text-[11px] font-mono uppercase font-bold text-sky-700 dark:text-cyan-400 flex items-center justify-between">
                        <span>Preference Compatibility Breakdown:</span>
                        <span className="text-slate-500 dark:text-slate-400">{topDestination.aiMatchScore || 98}% Combined</span>
                      </span>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">Terrain Fit</span>
                          <span className="text-xs font-black text-sky-700 dark:text-cyan-300 font-mono">{synergy.terrainSynergy}%</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">Budget Fit</span>
                          <span className="text-xs font-black text-emerald-600 dark:text-emerald-300 font-mono">{synergy.budgetSynergy}%</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">Vibe Match</span>
                          <span className="text-xs font-black text-purple-700 dark:text-purple-300 font-mono">{synergy.vibeSynergy}%</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">Crowd Peace</span>
                          <span className="text-xs font-black text-amber-700 dark:text-amber-300 font-mono">{synergy.crowdSynergy}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Why AI Chose This For You */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-cyan-400 flex items-center gap-1.5 font-mono">
                        <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                        <span>Why This Fits Your Submitted Preferences:</span>
                      </h3>

                      <ul className="space-y-2">
                        {topDestination.whyAiChose.slice(0, 3).map((reason, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 flex items-start gap-2">
                            <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => onSelectDestination(topDestination)}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-display font-black text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95"
                    >
                      <span>View Full Itinerary & Plan</span>
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </button>

                    <button
                      onClick={() => onToggleSaveTrip(topDestination)}
                      className={`w-full sm:w-auto px-5 py-3.5 rounded-2xl border font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 active:scale-95 ${
                        isTopSaved
                          ? 'bg-rose-50 border-rose-300 text-rose-600 dark:bg-rose-500/20 dark:border-rose-500/40 dark:text-rose-300'
                          : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${isTopSaved ? 'fill-current' : ''}`} />
                      <span>{isTopSaved ? 'Saved in My Trips' : 'Save Trip'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. TOP ALTERNATIVE MATCHES (#2, #3, #4...) */}
          {runnerUps.length > 0 && (
            <div className="space-y-4 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                    Alternative Recommendations Matching Your Criteria
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Other high-scoring Indian destinations matching your calibrated travel profile
                  </p>
                </div>

                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Showing top alternatives
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {runnerUps.map((dest, idx) => {
                  const isSaved = savedTrips.some((d) => d.id === dest.id);
                  const rank = idx + 2;

                  return (
                    <div
                      key={dest.id}
                      className="rounded-3xl web3-glass-card bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between group hover:border-sky-400 dark:hover:border-cyan-500/40 transition-all shadow-md"
                    >
                      {/* Card Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <DestinationImage
                          src={dest.heroImage || dest.image}
                          alt={dest.name}
                          destinationName={dest.name}
                          country={dest.country}
                          aspectRatio="aspect-[16/10]"
                        />

                        {/* Rank Badge */}
                        <div className="absolute top-3 left-3 z-20">
                          <span className="px-2.5 py-1 rounded-full bg-slate-950/90 text-cyan-300 font-bold text-xs border border-cyan-500/30">
                            #{rank} Alternative
                          </span>
                        </div>

                        {/* Bookmark Toggle */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleSaveTrip(dest);
                          }}
                          className={`absolute top-3 right-3 z-20 p-2 rounded-full backdrop-blur-md transition-all ${
                            isSaved ? 'bg-rose-500 text-white' : 'bg-black/60 text-white hover:bg-black/80'
                          }`}
                        >
                          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                        </button>

                        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex items-end justify-between z-10">
                          <span className="text-white text-xs font-semibold flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                            {dest.region}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-xs font-bold">
                            {dest.aiMatchScore || 90}% Match
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-sky-600 dark:text-white dark:group-hover:text-cyan-400 transition-colors">
                              {dest.name}
                            </h3>
                            <span className="text-sm font-mono font-bold text-sky-700 dark:text-cyan-300">
                              ₹{dest.baseBudgetInr.toLocaleString('en-IN')}
                            </span>
                          </div>

                          <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                            {dest.tagline || dest.description}
                          </p>

                          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-1">
                            <span>🗓️ {dest.recommendedDays} Days</span>
                            <span>•</span>
                            <span>👥 {dest.crowdLevel} Crowds</span>
                          </div>
                        </div>

                        <button
                          onClick={() => onSelectDestination(dest)}
                          className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-sky-600 hover:text-white text-slate-800 dark:bg-slate-800 dark:hover:bg-cyan-500 dark:hover:text-slate-950 dark:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-xs"
                        >
                          <span>Explore Itinerary</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
