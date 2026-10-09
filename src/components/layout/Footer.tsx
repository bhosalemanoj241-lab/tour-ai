import React from 'react';
import { Compass, Sparkles, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ActiveTab } from './Navbar';

interface FooterProps {
  onSelectTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pt-12 pb-16 md:pb-12 px-4 sm:px-6 lg:px-8 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-100 dark:border-slate-800">
        {/* Brand Information */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-500 text-white flex items-center justify-center shadow-xs">
              <Compass className="w-4 h-4" />
            </div>
            <span className="font-display font-black text-lg text-slate-900 dark:text-white tracking-tight">
              TourAI
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
            AI-Powered Tourism Destination Intelligence. Intelligently recommends destinations across India based on your mood, budget, companion, and travel style.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold pt-1">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Ready for Production Deployment</span>
          </div>
        </div>

        {/* Core Navigation Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Core Features
          </h4>
          <ul className="space-y-2 text-xs font-medium">
            <li>
              <button
                onClick={() => {
                  onSelectTab('ai');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                <span>AI Destination Recommendations</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onSelectTab('explore');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-sky-500" />
                <span>Explore All Destinations (Directory & 3D Globe)</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Verification & Tech Stack Details */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            System Architecture
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Built with React 19, TypeScript, Vite, Tailwind CSS, and customizable theme architecture. Fully responsive for web, tablet, and mobile devices.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-sky-500" />
            <span>Multi-Criteria Heuristic Scoring Algorithm</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-500">
        <div>
          © {new Date().getFullYear()} TourAI — Travel Destination Engine.
        </div>
        <div className="flex items-center gap-4">
          <span>Theme Adjustable (Light & Dark)</span>
          <span>•</span>
          <span>Zero External API Blockers</span>
        </div>
      </div>
    </footer>
  );
};
