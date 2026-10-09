import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Palette, Check } from 'lucide-react';
import { useTheme, AccentColor } from '../../context/ThemeContext';

export const ThemeSwitcher: React.FC = () => {
  const { mode, accent, isDark, setMode, setAccent, toggleTheme } = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const accents: { id: AccentColor; label: string; colorClass: string; bgClass: string }[] = [
    { id: 'blue', label: 'Ocean Sky', colorClass: 'bg-sky-500', bgClass: 'from-sky-500 to-blue-600' },
    { id: 'emerald', label: 'Emerald Forest', colorClass: 'bg-emerald-500', bgClass: 'from-emerald-500 to-teal-600' },
    { id: 'amber', label: 'Sunset Amber', colorClass: 'bg-amber-500', bgClass: 'from-amber-500 to-orange-600' },
    { id: 'purple', label: 'Royal Purple', colorClass: 'bg-purple-500', bgClass: 'from-purple-500 to-indigo-600' },
    { id: 'rose', label: 'Rose Coral', colorClass: 'bg-rose-500', bgClass: 'from-rose-500 to-pink-600' },
  ];

  // Close dropdown on click/touch outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setPaletteOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center gap-1.5" ref={dropdownRef}>
      {/* 1. Quick Light/Dark Toggle Button */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all border border-slate-200/80 dark:border-slate-700/80 shadow-xs active:scale-95"
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        aria-label="Toggle dark/light mode"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
        ) : (
          <Moon className="w-4 h-4 text-sky-600 hover:-rotate-12 transition-transform" />
        )}
      </button>

      {/* 2. Color Palette Accent Picker */}
      <button
        onClick={() => setPaletteOpen(!paletteOpen)}
        className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-center gap-1.5 active:scale-95"
        title="Customize Theme Palette"
        aria-label="Customize Theme Palette"
      >
        <Palette className="w-4 h-4 text-slate-600 dark:text-slate-300" />
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            accents.find((a) => a.id === accent)?.colorClass || 'bg-sky-500'
          }`}
        />
      </button>

      {/* 3. Dropdown Menu */}
      {paletteOpen && (
        <div className="absolute right-0 top-11 z-50 w-56 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-2.5 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-900 dark:text-white">Theme & Mood</span>
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              {isDark ? 'Dark' : 'Light'}
            </span>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => setMode('light')}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                mode === 'light'
                  ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>Light</span>
            </button>
            <button
              onClick={() => setMode('dark')}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                mode === 'dark'
                  ? 'bg-slate-800 text-white border border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Moon className="w-3.5 h-3.5 text-sky-400" />
              <span>Dark</span>
            </button>
          </div>

          <div className="pt-1">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1.5">
              Accent Color
            </span>
            <div className="space-y-1">
              {accents.map((item) => {
                const isSelected = accent === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setAccent(item.id);
                      setPaletteOpen(false);
                    }}
                    className={`w-full px-2.5 py-1.5 rounded-xl text-xs font-medium flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${item.colorClass}`} />
                      <span>{item.label}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
