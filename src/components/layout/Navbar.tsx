import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, Globe, Bookmark, Heart, Sun, Moon } from 'lucide-react';
import { ThemeSwitcher } from '../common/ThemeSwitcher';

export type ActiveTab = 'ai' | 'explore' | 'trips';

interface NavbarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  savedTripsCount: number;
  onOpenSavedDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  savedTripsCount,
  onOpenSavedDrawer,
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pt-safe backdrop-blur-xl ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 shadow-xs py-2.5'
          : 'bg-white/85 dark:bg-slate-950/85 border-b border-slate-200/80 dark:border-slate-800/80 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Friendly Title */}
        <div
          onClick={() => onSelectTab('ai')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-all">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                TourAI
              </span>
              <span className="text-[10px] font-bold text-cyan-700 dark:text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/40">
                INDIA
              </span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
              69 Verified Indian Destinations
            </p>
          </div>
        </div>

        {/* Super Clear Navigation Tabs (Desktop only; on mobile, BottomNav provides instant thumb navigation) */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/90 dark:bg-slate-900/90 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <button
            onClick={() => onSelectTab('ai')}
            className={`px-3.5 lg:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'ai'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800/70'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>AI Recommender</span>
          </button>

          <button
            onClick={() => onSelectTab('explore')}
            className={`px-3.5 lg:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'explore'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800/70'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Explore All (69)</span>
          </button>

          <button
            onClick={() => onSelectTab('trips')}
            className={`px-3.5 lg:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'trips'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800/70'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>My Trips</span>
            {savedTripsCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 text-[11px] font-black">
                {savedTripsCount}
              </span>
            )}
          </button>
        </nav>

        {/* Right Header Actions: Theme & Saved Trips Quick View */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <ThemeSwitcher />

          <button
            onClick={onOpenSavedDrawer}
            className="px-2.5 sm:px-3 py-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-200 transition-all border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-xs flex items-center gap-1.5 sm:gap-2 active:scale-95 text-xs font-bold"
            title="Saved Destinations"
            aria-label="Saved Destinations"
          >
            <Heart className={`w-4 h-4 ${savedTripsCount > 0 ? 'text-rose-500 fill-rose-500' : 'text-slate-400'}`} />
            <span className="hidden sm:inline">Saved</span>
            <span className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono font-bold">
              {savedTripsCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
