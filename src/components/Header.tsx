'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import NavigationDrawer from './NavigationDrawer';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 20) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`sticky top-0 z-40 w-full glass-card border-b border-black/5 dark:border-white/10 transition-all duration-500 ease-in-out ${
          isAtTop 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* Brand Logo - Light & Dark theme responsive */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-11 flex items-center">
              <img 
                src="/oox-logo-dark.png" 
                alt="OOX" 
                className="h-10 sm:h-12 w-auto hidden dark:block group-hover:scale-105 transition-transform duration-200 object-contain" 
              />
              <img 
                src="/oox-logo-light.png" 
                alt="OOX" 
                className="h-10 sm:h-12 w-auto block dark:hidden group-hover:scale-105 transition-transform duration-200 object-contain" 
              />
            </div>
            
            <div className="flex items-center">
              <span className="text-xs sm:text-sm font-extrabold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20 tracking-wide">
                features
              </span>
            </div>
          </Link>

          {/* Right Action Bar */}
          <div className="flex items-center space-x-2.5 sm:space-x-3">
            <a
              href="https://oox.art"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center space-x-1.5 text-xs font-bold px-3 py-2.5 rounded-xl bg-slate-500/10 hover:bg-slate-500/20 text-slate-800 dark:text-slate-200 transition-colors"
            >
              <span>oox.art</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </a>

            {/* Language Toggle */}
            <LanguageToggle />

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Menu Trigger Button */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex items-center space-x-2 px-3.5 py-2 rounded-full glass-card hover:border-cyan-500/40 text-slate-800 dark:text-slate-200 hover:text-cyan-400 transition-all duration-200 active:scale-95"
              aria-label={t('header.archive')}
            >
              <Menu className="w-5 h-5" />
              <span className="text-xs font-bold hidden xs:inline">{t('header.archive')}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Drawer */}
      <NavigationDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
