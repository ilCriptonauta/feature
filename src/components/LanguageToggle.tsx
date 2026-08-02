'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-full glass-card p-1 text-xs font-bold transition-all">
      <button
        onClick={() => setLanguage('it')}
        className={`px-2.5 py-1 rounded-full transition-all ${
          language === 'it'
            ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white shadow-glow-cyan font-black'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        aria-label="Italiano"
      >
        IT
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-full transition-all ${
          language === 'en'
            ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white shadow-glow-cyan font-black'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
