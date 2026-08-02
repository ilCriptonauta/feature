'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  OOX_FEATURES, 
  getFeatureBySlug 
} from '@/data/features';
import JExchangeSwapBanner from '@/components/JExchangeSwapBanner';
import OoxTradingTypesBanner from '@/components/OoxTradingTypesBanner';
import OnxFeeDiscountBanner from '@/components/OnxFeeDiscountBanner';
import SimplicityFluidityBanner from '@/components/SimplicityFluidityBanner';
import OoxHomepageShowcaseBanner from '@/components/OoxHomepageShowcaseBanner';
import OoxCustomizationExperienceBanner from '@/components/OoxCustomizationExperienceBanner';
import OoxDedicatedCollectionsBanner from '@/components/OoxDedicatedCollectionsBanner';
import OoxHighStandardsBanner from '@/components/OoxHighStandardsBanner';
import OoxNftFocusBatchBanner from '@/components/OoxNftFocusBatchBanner';
import OoxCollectionStakingPoolsBanner from '@/components/OoxCollectionStakingPoolsBanner';
import OoxPlusPassBanner from '@/components/OoxPlusPassBanner';
import OoxManageCollectionsStakingBanner from '@/components/OoxManageCollectionsStakingBanner';
import OoxStudioToolsAccordionBanner from '@/components/OoxStudioToolsAccordionBanner';
import OoxProfileChubbyAvatarBanner from '@/components/OoxProfileChubbyAvatarBanner';
import OoxProfileNftManagementBanner from '@/components/OoxProfileNftManagementBanner';
import OoxProfileFavoritesBanner from '@/components/OoxProfileFavoritesBanner';
import OoxProfileOffersStakingBanner from '@/components/OoxProfileOffersStakingBanner';
import OoxProfileActivityTradingBanner from '@/components/OoxProfileActivityTradingBanner';
import AboutOnxSuperpowersBanner from '@/components/AboutOnxSuperpowersBanner';
import AboutOnionXLabsBanner from '@/components/AboutOnionXLabsBanner';
import RealOwnershipBanner from '@/components/RealOwnershipBanner';
import OoxTokenRushEventsBanner from '@/components/OoxTokenRushEventsBanner';
import OoxUpcomingAuctionsBanner from '@/components/OoxUpcomingAuctionsBanner';
import OoxHostYourEventBanner from '@/components/OoxHostYourEventBanner';
import OnxLiveTokenMetricsBanner from '@/components/OnxLiveTokenMetricsBanner';
import OnxNftVotingBanner from '@/components/OnxNftVotingBanner';
import OnxStakingDeepDiveBanner from '@/components/OnxStakingDeepDiveBanner';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Copy,
  Check,
  Sparkles, 
  Store, 
  UserCheck, 
  Wrench, 
  ShieldCheck,
  Palette,
  Ticket,
  Calendar,
  Coins,
  Zap,
  BarChart3,
  Bell,
  TrendingUp,
  Send,
  Users,
  Lock,
  ShieldAlert,
  Activity,
  Award
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const ICON_COMPONENTS: Record<string, any> = {
  Zap,
  BarChart3,
  Bell,
  CheckCircle2,
  Sparkles,
  Award,
  TrendingUp,
  Send,
  Users,
  Lock,
  ShieldAlert,
  Activity,
  Ticket,
  Calendar,
};

const CATEGORY_ICONS: Record<string, any> = {
  Store,
  UserCheck,
  Wrench,
  ShieldCheck,
  Palette,
  Ticket,
  Calendar,
  Coins,
};

export default function FeatureDetailClient({ slug }: { slug: string }) {
  const { language, t, getLocalized } = useLanguage();
  const [copied, setCopied] = useState(false);
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    notFound();
  }

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareX = () => {
    if (typeof window !== 'undefined') {
      const title = getLocalized(feature.title);
      const subtitle = getLocalized(feature.subtitle);
      const sharePrefix = language === 'it' ? 'Scopri' : 'Discover';
      const tweetText = encodeURIComponent(
        `${sharePrefix} ${title} su @OOX_Marketplace 🚀 ${subtitle}`
      );
      const tweetUrl = encodeURIComponent(window.location.href);
      window.open(
        `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`,
        '_blank'
      );
    }
  };

  const CategoryIcon = CATEGORY_ICONS[feature.icon] || Store;

  const title = getLocalized(feature.title);
  const subtitle = getLocalized(feature.subtitle);
  const fullDesc = getLocalized(feature.fullDescription);
  const badge = getLocalized(feature.badge);
  const sectionTitle = getLocalized(feature.detailedContent.sectionTitle);
  const sectionDescription = getLocalized(feature.detailedContent.sectionDescription);

  return (
    <div className="space-y-10 py-4 max-w-4xl mx-auto">

      {/* FEATURE HERO HEADER WITH IMAGE EMBEDDED ON THE RIGHT */}
      <section className="relative rounded-3xl p-6 sm:p-8 glass-card border border-black/5 dark:border-white/10 overflow-hidden">
        <div 
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: feature.glowColor }}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center relative z-10">
          
          {/* LEFT COLUMN: TITLE, BADGE, SUBTITLE, DESCRIPTION & OPTIONAL METRICS */}
          <div className="md:col-span-7 space-y-4">
            {badge && (
              <span className="inline-block text-xs font-extrabold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {badge}
              </span>
            )}
            
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {title}
            </h1>

            <p className="text-sm sm:text-base font-bold text-cyan-500 dark:text-cyan-400">
              {subtitle}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {fullDesc}
            </p>

            {/* QUICK SHARING BUTTONS AT BOTTOM OF FIRST SECTION */}
            <div className="flex items-center space-x-2.5 pt-2">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl glass-card hover:border-cyan-500/40 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all active:scale-95 shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">{t('share.copied')}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t('share.copyLink')}</span>
                  </>
                )}
              </button>

              <button
                onClick={handleShareX}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-black hover:bg-slate-900 text-white text-xs font-bold border border-white/20 shadow-md transition-all active:scale-95"
              >
                <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>{t('share.shareOnX')}</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: COMPACT FEATURE PREVIEW IMAGE */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-xl group">
            <Image
              src={feature.ogImage}
              alt={title}
              width={1200}
              height={630}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </section>

      {/* DETAILED CONTENT & KEY BENEFITS (EXCEPT ON TOOLS, PROFILES, OVERVIEW, ABOUT-ONX, EVENTS, ABOUT-ONIONXLABS & SECURITY PAGES) */}
      {feature.slug !== 'tools' && feature.slug !== 'profiles' && feature.slug !== 'overview' && feature.slug !== 'about-onx' && feature.slug !== 'events' && feature.slug !== 'about-onionxlabs' && feature.slug !== 'security' && (
        <section className="space-y-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {sectionTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              {sectionDescription}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {feature.detailedContent.keyBenefits.map((benefit, index) => {
              const BenefitIcon = ICON_COMPONENTS[benefit.icon] || Sparkles;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl glass-card border border-black/5 dark:border-white/5 space-y-2 hover:border-cyan-500/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <BenefitIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {getLocalized(benefit.title)}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {getLocalized(benefit.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* OVERVIEW LANDING EXCLUSIVE BANNERS */}
      {feature.slug === 'overview' && (
        <>
          <SimplicityFluidityBanner />
          <OoxHomepageShowcaseBanner />
          <OoxCustomizationExperienceBanner />
          <OoxDedicatedCollectionsBanner />
          <OoxHighStandardsBanner />
          <OoxNftFocusBatchBanner />
          <OoxCollectionStakingPoolsBanner />
          <OoxPlusPassBanner />
        </>
      )}

      {/* PROFILES LANDING EXCLUSIVE BANNERS */}
      {feature.slug === 'profiles' && (
        <>
          <OoxProfileChubbyAvatarBanner />
          <OoxProfileNftManagementBanner />
          <OoxProfileFavoritesBanner />
          <OoxProfileOffersStakingBanner />
          <OoxProfileActivityTradingBanner />
        </>
      )}

      {/* STUDIO CREATOR (TOOLS) LANDING EXCLUSIVE BANNERS */}
      {feature.slug === 'tools' && (
        <>
          <OoxPlusPassBanner />
          <OoxManageCollectionsStakingBanner />
          <OoxStudioToolsAccordionBanner />
        </>
      )}

      {/* ABOUT ONX LANDING EXCLUSIVE BANNERS */}
      {feature.slug === 'about-onx' && (
        <>
          <AboutOnxSuperpowersBanner />
          <OnxLiveTokenMetricsBanner />
          <OnxNftVotingBanner />
          <OnxStakingDeepDiveBanner />
        </>
      )}

      {/* ABOUT ONIONXLABS LANDING EXCLUSIVE BANNERS */}
      {feature.slug === 'about-onionxlabs' && (
        <>
          <AboutOnionXLabsBanner />
        </>
      )}

      {/* SECURITY / REAL OWNERSHIP LANDING EXCLUSIVE BANNERS */}
      {feature.slug === 'security' && (
        <>
          <RealOwnershipBanner />
        </>
      )}

      {/* EVENTS LANDING EXCLUSIVE BANNERS */}
      {feature.slug === 'events' && (
        <>
          <OoxTokenRushEventsBanner />
          <OoxUpcomingAuctionsBanner />
          <OoxHostYourEventBanner />
        </>
      )}

      {/* LISTING LANDING EXCLUSIVE BANNERS */}
      {(feature.slug === 'listing' || feature.slug === 'marketplace') && (
        <>
          {/* ACCESS MULTIVERSX COLLECTIONS: BUY NOW, AUCTIONS & 3 OFFER TYPES */}
          <OoxTradingTypesBanner />

          {/* JEXCHANGE MULTI-TOKEN SWAP & BUY BANNER */}
          <JExchangeSwapBanner />

          {/* ONX LISTING FEE DISCOUNT BANNER (0.5% VS 1.0%) */}
          <OnxFeeDiscountBanner />
        </>
      )}

      {/* CTA BOTTOM BANNER */}
      <section className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 border border-cyan-500/40 text-center space-y-4 shadow-2xl relative overflow-hidden">
        {/* Ambient glow inside CTA card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <h3 className="text-2xl sm:text-3xl font-black text-white text-center tracking-tight relative z-10">
          {t('detail.ctaTitle')}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto relative z-10 leading-relaxed font-medium">
          {t('detail.ctaDesc')}
        </p>
        <div className="pt-2 relative z-10">
          <a
            href="https://oox.art"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-extrabold text-xs sm:text-sm shadow-glow-cyan hover:scale-105 active:scale-95 transition-all"
          >
            <span>{t('detail.ctaButton')}</span>
          </a>
        </div>
      </section>

      {/* BOTTOM NAVIGATION: BACK TO ARCHIVE */}
      <div className="pt-4 flex justify-center">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-extrabold text-slate-700 dark:text-slate-200 hover:text-cyan-400 glass-card px-6 py-3.5 rounded-2xl border border-cyan-500/30 shadow-xl hover:border-cyan-400 hover:scale-105 active:scale-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-400" />
          <span>{t('detail.backToArchive')}</span>
        </Link>
      </div>

    </div>
  );
}
