'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
  Store, 
  UserCheck, 
  Wrench, 
  ShieldCheck, 
  Sparkles,
  Ticket,
  Calendar,
  Coins
} from 'lucide-react';
import { OOXFeatureMultilingual } from '@/data/features';
import { useLanguage } from '@/i18n/LanguageContext';

const ICON_COMPONENTS: Record<string, any> = {
  Store,
  UserCheck,
  Wrench,
  ShieldCheck,
  Palette: Wrench,
  Ticket,
  Calendar,
  Coins,
};

const ICON_GRADIENTS: Record<string, string> = {
  Store: 'bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600',
  UserCheck: 'bg-gradient-to-tr from-purple-500 via-pink-500 to-rose-500',
  Wrench: 'bg-gradient-to-tr from-blue-500 via-teal-400 to-emerald-500',
  Palette: 'bg-gradient-to-tr from-blue-500 via-teal-400 to-emerald-500',
  ShieldCheck: 'bg-gradient-to-tr from-emerald-400 via-green-500 to-cyan-500',
  Ticket: 'bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500',
  Calendar: 'bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500',
  Coins: 'bg-gradient-to-tr from-amber-400 via-orange-500 to-yellow-500',
};

interface FeatureCardProps {
  feature: OOXFeatureMultilingual;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const { t, getLocalized } = useLanguage();
  const IconComponent = ICON_COMPONENTS[feature.icon] || Store;
  const gradientClass = ICON_GRADIENTS[feature.icon] || ICON_GRADIENTS.Store;

  const title = getLocalized(feature.title);
  const subtitle = getLocalized(feature.subtitle);
  const shortDesc = getLocalized(feature.shortDescription);
  const badge = getLocalized(feature.badge);

  return (
    <div className="group relative rounded-3xl glass-card p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-1">
      {/* Background glow behind icon */}
      <div 
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"
        style={{ backgroundColor: feature.glowColor }}
      />

      <div>
        {/* Top Header with Icon & Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-2xl ${gradientClass} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className="w-6 h-6" />
          </div>

          {badge && (
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20">
              {badge}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
          {subtitle}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-6 leading-relaxed">
          {shortDesc}
        </p>
      </div>

      {/* Action Link */}
      <Link
        href={`/features/${feature.slug}`}
        className="w-full py-3 px-4 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-cyan-500 text-white font-bold text-sm flex items-center justify-center space-x-2 transition-all duration-200 group/btn"
      >
        <span>{t('card.discoverCta')}</span>
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
