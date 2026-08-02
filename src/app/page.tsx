'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { OOX_FEATURES } from '@/data/features';
import FeatureCard from '@/components/FeatureCard';
import HeroCarousel from '@/components/HeroCarousel';
import { useLanguage } from '@/i18n/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 py-4">
      
      {/* SWIPEABLE HERO CAROUSEL */}
      <HeroCarousel />

      {/* ARCHIVE HEADER */}
      <section id="features-grid" className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t('filter.allFeaturesTitle')}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {t('filter.filterDesc')}
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OOX_FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </section>

      {/* MOBILE ARCHIVE HINT BANNER */}
      <section className="rounded-2xl p-5 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-cyan-500/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center justify-center sm:justify-start space-x-2">
            <Menu className="w-4 h-4 text-cyan-400" />
            <span>{t('mobileHint.title')}</span>
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
            {t('mobileHint.desc')}
          </p>
        </div>
      </section>

    </div>
  );
}
