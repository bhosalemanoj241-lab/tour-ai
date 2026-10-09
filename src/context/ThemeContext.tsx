import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';
export type AccentColor = 'blue' | 'emerald' | 'amber' | 'purple' | 'rose';

interface ThemeContextType {
  mode: ThemeMode;
  accent: AccentColor;
  isDark: boolean;
  setMode: (mode: ThemeMode) => void;
  setAccent: (accent: AccentColor) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('tourai_theme_mode');
    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      return saved;
    }
    return 'light'; // Default to pristine luxury white theme
  });

  const [accent, setAccentState] = useState<AccentColor>(() => {
    const saved = localStorage.getItem('tourai_theme_accent');
    if (saved && ['blue', 'emerald', 'amber', 'purple', 'rose'].includes(saved)) {
      return saved as AccentColor;
    }
    return 'blue';
  });

  const [isDark, setIsDark] = useState<boolean>(false);

  // Sync theme mode with document.documentElement
  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      let resolvedDark = false;
      if (mode === 'system') {
        resolvedDark = mediaQuery.matches;
      } else {
        resolvedDark = mode === 'dark';
      }

      setIsDark(resolvedDark);
      if (resolvedDark) {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
      }
    };

    applyTheme();

    const listener = () => {
      if (mode === 'system') {
        applyTheme();
      }
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [mode]);

  // Sync accent color with data attribute on html root
  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
  }, [accent]);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem('tourai_theme_mode', newMode);
  };

  const setAccent = (newAccent: AccentColor) => {
    setAccentState(newAccent);
    localStorage.setItem('tourai_theme_accent', newAccent);
  };

  const toggleTheme = () => {
    setMode(isDark ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ mode, accent, isDark, setMode, setAccent, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
