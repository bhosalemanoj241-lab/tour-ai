import React from 'react';
import { Sparkles, Compass, Bookmark, MessageSquare } from 'lucide-react';
import { ActiveTab } from './Navbar';

interface BottomNavProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  savedTripsCount: number;
  onOpenCopilot: () => void;
  isCopilotOpen?: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onSelectTab,
  savedTripsCount,
  onOpenCopilot,
  isCopilotOpen = false,
}) => {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t border-slate-200 dark:border-slate-800/90 pb-safe shadow-[0_-8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.6)]"
      aria-label="Mobile Navigation"
    >
      <div className="grid grid-cols-4 items-center h-16 max-w-md mx-auto px-2">
        {/* 1. AI Recommender Tab */}
        <button
          type="button"
          onClick={() => {
            onSelectTab('ai');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all relative ${
            activeTab === 'ai' && !isCopilotOpen
              ? 'text-sky-600 dark:text-cyan-400 font-bold'
              : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          <div
            className={`p-1.5 rounded-xl transition-all ${
              activeTab === 'ai' && !isCopilotOpen
                ? 'bg-sky-50 dark:bg-cyan-500/15 text-sky-600 dark:text-cyan-400 ring-1 ring-sky-300/70 dark:ring-cyan-500/30'
                : ''
            }`}
          >
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight font-medium">AI Matcher</span>
        </button>

        {/* 2. Explore Tab */}
        <button
          type="button"
          onClick={() => {
            onSelectTab('explore');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all relative ${
            activeTab === 'explore' && !isCopilotOpen
              ? 'text-sky-600 dark:text-cyan-400 font-bold'
              : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          <div
            className={`p-1.5 rounded-xl transition-all ${
              activeTab === 'explore' && !isCopilotOpen
                ? 'bg-sky-50 dark:bg-cyan-500/15 text-sky-600 dark:text-cyan-400 ring-1 ring-sky-300/70 dark:ring-cyan-500/30'
                : ''
            }`}
          >
            <Compass className="w-5 h-5" />
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight font-medium">Explore</span>
        </button>

        {/* 3. My Trips Tab */}
        <button
          type="button"
          onClick={() => {
            onSelectTab('trips');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all relative ${
            activeTab === 'trips' && !isCopilotOpen
              ? 'text-sky-600 dark:text-cyan-400 font-bold'
              : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          <div
            className={`p-1.5 rounded-xl transition-all relative ${
              activeTab === 'trips' && !isCopilotOpen
                ? 'bg-sky-50 dark:bg-cyan-500/15 text-sky-600 dark:text-cyan-400 ring-1 ring-sky-300/70 dark:ring-cyan-500/30'
                : ''
            }`}
          >
            <Bookmark className="w-5 h-5" />
            {savedTripsCount > 0 && (
              <span className="absolute -top-1 -right-1.5 min-w-[16px] h-4 px-1 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center shadow-xs">
                {savedTripsCount}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight font-medium">My Trips</span>
        </button>

        {/* 4. AI Copilot Chat Action */}
        <button
          type="button"
          onClick={onOpenCopilot}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all relative ${
            isCopilotOpen
              ? 'text-sky-600 dark:text-cyan-400 font-bold'
              : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          <div
            className={`p-1.5 rounded-xl transition-all relative ${
              isCopilotOpen
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 dark:from-cyan-500 dark:to-blue-600 text-white shadow-md'
                : 'hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight font-medium">AI Copilot</span>
        </button>
      </div>
    </nav>
  );
};
