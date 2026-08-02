'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  X, 
  Search, 
  Store, 
  UserCheck, 
  Wrench, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles,
  Home
} from 'lucide-react';
import { OOX_FEATURES } from '@/data/features';
import { useLanguage } from '@/i18n/LanguageContext';

const ICON_MAP: Record<string, any> = {
  Store,
  UserCheck,
  Wrench,
  ShieldCheck,
  Palette: Wrench,
  Ticket: Sparkles,
  Calendar: Sparkles,
  Coins: Store,
  Rocket: Sparkles,
};

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationDrawer({ isOpen, onClose }: NavigationDrawerProps) {
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState('');
  const { t, getLocalized } = useLanguage();

  if (!isOpen) return null;

  const filteredFeatures = OOX_FEATURES.filter((f) => {
    const title = getLocalized(f.title).toLowerCase();
    const desc = getLocalized(f.shortDescription).toLowerCase();
    const term = searchTerm.toLowerCase();
    return title.includes(term) || desc.includes(term) || f.category.toLowerCase().includes(term);
  });

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
      />

      {/* Slide-over Panel (Mobile First) */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-oox-surface-light dark:bg-[#0d101d] border-l border-black/10 dark:border-white/10 text-slate-900 dark:text-slate-100 flex flex-col shadow-2xl">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-black/5 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/oox-logo-dark.png" 
                alt="OOX" 
                className="h-9 w-auto hidden dark:block object-contain" 
              />
              <img 
                src="/oox-logo-light.png" 
                alt="OOX" 
                className="h-9 w-auto block dark:hidden object-contain" 
              />
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                features
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-400 hover:text-slate-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Box */}
          <div className="p-4 border-b border-black/5 dark:border-white/5 bg-slate-500/5">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={t('drawer.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-200/60 dark:bg-white/5 border border-transparent focus:border-cyan-500 text-sm focus:outline-none placeholder-slate-400 transition-all"
              />
            </div>
          </div>

          {/* Drawer Links List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <Link
              href="/"
              onClick={onClose}
              className={`flex items-center space-x-3 p-3.5 rounded-xl transition-all ${
                pathname === '/'
                  ? 'bg-gradient-to-r from-cyan-500/15 to-purple-500/15 border border-cyan-500/30 text-cyan-500 dark:text-cyan-400 font-semibold'
                  : 'hover:bg-slate-500/10 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-slate-500/10 flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">{t('drawer.homeLink')}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{t('drawer.homeSub')}</div>
              </div>
            </Link>

            <div className="pt-3 pb-1 px-2 text-xs font-bold tracking-wider text-slate-400 uppercase">
              {t('drawer.allFeatures')} ({filteredFeatures.length})
            </div>

            {filteredFeatures.map((feature) => {
              const IconComponent = ICON_MAP[feature.icon] || Store;
              const isActive = pathname === `/features/${feature.slug}`;
              const title = getLocalized(feature.title);
              const shortDesc = getLocalized(feature.shortDescription);
              const badge = getLocalized(feature.badge);

              return (
                <Link
                  key={feature.id}
                  href={`/features/${feature.slug}`}
                  onClick={onClose}
                  className={`group flex items-center space-x-3 p-3.5 rounded-xl transition-all ${
                    isActive
                      ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold shadow-glow-cyan'
                      : 'hover:bg-slate-500/10 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-tr ${feature.accentGradient}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold truncate group-hover:text-cyan-400 transition-colors">
                        {title}
                      </h3>
                      {badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {shortDesc}
                    </p>
                  </div>

                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              );
            })}
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-black/5 dark:border-white/10 bg-slate-500/5 text-center">
            <a 
              href="https://oox.art" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center space-x-2 text-xs font-semibold text-cyan-500 dark:text-cyan-400 hover:underline"
            >
              <span>{t('drawer.visitOfficial')}</span>
              <Sparkles className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
