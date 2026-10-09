import React, { useEffect, useState } from 'react';
import { Check, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { UserPreferences } from '../../types/travel';

interface AIAnalysisOverlayProps {
  onComplete: () => void;
  preferences?: UserPreferences | null;
}

export const AIAnalysisOverlay: React.FC<AIAnalysisOverlayProps> = ({
  onComplete,
  preferences,
}) => {
  const steps = [
    preferences?.mood
      ? `Calibrating emotional frequency for "${preferences.mood}"`
      : 'Calibrating travel vibe & emotional frequency',
    preferences?.geography
      ? `Scanning terrain vectors for ${preferences.geography}`
      : 'Scanning high-altitude, coastal & forest geographies',
    preferences?.budget
      ? `Optimizing accommodations within ${preferences.budget}`
      : 'Matching budget limits & live transparency',
    preferences?.companions
      ? `Balancing ${preferences.companions} journey pacing & access`
      : 'Balancing companion pacing & crowd windows',
    preferences?.interests && preferences.interests.length > 0
      ? `Cross-referencing ${preferences.interests.slice(0, 2).join(' & ')} experiences`
      : 'Filtering out tourist-heavy crowd corridors',
    'Finalizing bespoke destination recommendations & itineraries',
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 450);
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(timer);
  }, [steps.length, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 text-center relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Pulsing AI Neural Icon */}
        <div className="relative w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/30">
          <Sparkles className="w-8 h-8 animate-pulse" />
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-slate-900" />
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-[11px] font-bold tracking-wide uppercase mb-2">
          <Compass className="w-3.5 h-3.5 text-sky-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>TourAI Neural Engine</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white mb-2">
          Synthesizing Your Journey
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
          Analyzing real-time weather, crowd windows, and bespoke vectors...
        </p>

        {/* Dynamic Multi-Step Progress List */}
        <div className="space-y-2.5 text-left max-w-sm mx-auto bg-slate-50/80 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/80">
          {steps.map((step, idx) => {
            const isCompleted = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;

            return (
              <div
                key={idx}
                className={`flex items-center gap-3 text-xs sm:text-sm transition-all duration-300 ${
                  isCompleted
                    ? 'text-slate-800 dark:text-slate-200 font-semibold opacity-100'
                    : isCurrent
                    ? 'text-sky-600 dark:text-sky-400 font-bold opacity-100 translate-x-1'
                    : 'text-slate-400 dark:text-slate-500 opacity-40'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs transition-colors ${
                    isCompleted
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : isCurrent
                      ? 'border-2 border-sky-500 bg-sky-50 dark:bg-sky-950 text-sky-600 animate-pulse'
                      : 'border border-slate-300 dark:border-slate-600 text-slate-300 dark:text-slate-600'
                  }`}
                >
                  {isCompleted ? <Check className="w-3 h-3 stroke-[3]" /> : null}
                </div>
                <span className="truncate">{step}</span>
              </div>
            );
          })}
        </div>

        {/* Bottom Status Footnote */}
        <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Multi-Criteria Heuristic Scoring • Verified Indian Destinations</span>
        </div>
      </div>
    </div>
  );
};
