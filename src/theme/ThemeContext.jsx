import React from 'react'
import {createContext, useContext, useEffect, useMemo, useState} from 'react';

const ThemeContext = createContext({theme: 'light', toggle: () => {}});

export const useTheme = () => useContext(ThemeContext);

function getInitialTheme() {
  // 1) prefer saved choice
  const saved = localStorage.getItem('healtea-theme')
if (saved === 'light' || saved === 'dark') return saved;
//2) else follow system
const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark').matches

return prefersDark ? 'dark' : 'light';    
}

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply to <html> for Tailwind 'dark variants
  useEffect(() => {
    const root = document.documentElement; // <html>
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('healtea-theme', theme);
  }, [theme]);

  // Keep in sync if user changes OS theme while app is open
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark');
      const handler = e => {
        const saved = localStorage.getItem('healtea-theme');
      if (!saved) setTheme(e.matches ? 'dark' : 'light'); //only if user hasn't chosen
      };
      mq.addEventListener?.('change', handler);
      return () => mq.removeEventListener?.('change', handler);
  }, []);


  const value = useMemo(() => ({
    theme,
    toggle: () => setTheme(t => (t === 'dark' ? 'light' : 'dark')),
    setTheme, 
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}