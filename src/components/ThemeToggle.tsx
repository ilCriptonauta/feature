'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('oox_theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme === 'light' ? 'light' : 'dark';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    document.documentElement.classList.toggle('light', initialTheme === 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('oox_theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    document.documentElement.classList.toggle('light', nextTheme === 'light');
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400">
        <div className="w-4 h-4 rounded-full bg-gray-500/20 animate-pulse" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative p-2.5 rounded-full glass-card hover:scale-105 active:scale-95 transition-all duration-200 group text-slate-300 dark:text-slate-200 hover:text-cyan-400"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}
