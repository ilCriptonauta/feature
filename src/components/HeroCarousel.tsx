'use client';

import { useState, useEffect, TouchEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Hand 
} from 'lucide-react';
import { OOX_FEATURES } from '@/data/features';
import { useLanguage } from '@/i18n/LanguageContext';

export default function HeroCarousel() {
  const { t, getLocalized } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Filter features marked with hidden category 'main' or isMain: true
  const mainFeatures = OOX_FEATURES.filter(
    (f) => f.isMain === true || f.category === 'main'
  );

  // Total slides = 1 (Default Hero) + number of main features
  const totalSlides = 1 + mainFeatures.length;
  const minSwipeDistance = 45;

  // Automatisco scorrimento ogni 5 secondi (5000ms)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const onTouchStart = (e: TouchEvent) => {
    setIsPaused(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative rounded-3xl overflow-hidden glass-card border border-black/5 dark:border-white/10 select-none flex flex-col justify-between"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SLIDES CONTAINER */}
      <div className="relative z-10 p-4 sm:p-8 flex-1 flex flex-col justify-center">
        
        {/* SLIDE 0: DEFAULT HERO INTRO (Image Left, Text & Buttons Right) */}
        {currentSlide === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center animate-slide-content">
            {/* LEFT COLUMN: HERO PREVIEW IMAGE */}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl group">
              <Image
                src="/og/og-home.png"
                alt="OOX Features"
                width={1200}
                height={630}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* RIGHT COLUMN: TEXT & CTA BUTTONS */}
            <div className="md:col-span-7 space-y-4 text-center md:text-left">
              {/* Main Heading */}
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                {t('hero.titleStart')}{' '}
                <span className="gradient-text-cyan-purple">OOX</span>
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {t('hero.subtitle')}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col xs:flex-row items-center justify-center md:justify-start gap-3 pt-2">
                <a
                  href="#features-grid"
                  className="w-full xs:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-extrabold text-xs shadow-glow-cyan hover:opacity-95 active:scale-95 transition-all text-center"
                >
                  {t('hero.exploreCta')}
                </a>
                <a
                  href="https://oox.art"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full xs:w-auto px-6 py-3 rounded-xl glass-card hover:border-cyan-500/30 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center space-x-2 transition-all active:scale-95"
                >
                  <span>{t('hero.visitCta')}</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* SLIDES 1+: FEATURE SPOTLIGHT ITEMS (Image Left, Text & Buttons Right) */}
        {currentSlide > 0 && (() => {
          const feature = mainFeatures[currentSlide - 1];
          if (!feature) return null;

          const title = getLocalized(feature.title);
          const subtitle = getLocalized(feature.subtitle);
          const desc = getLocalized(feature.fullDescription);

          return (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center animate-slide-content">
              {/* LEFT COLUMN: FEATURE BANNER IMAGE */}
              <div className="md:col-span-5 relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl group">
                <Image
                  src={feature.ogImage}
                  alt={title}
                  width={1200}
                  height={630}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* RIGHT COLUMN: TEXT & BUTTONS */}
              <div className="md:col-span-7 space-y-4 text-center md:text-left">
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  {title}
                </h2>

                <p className="text-xs sm:text-sm font-semibold text-cyan-500 dark:text-cyan-400">
                  {subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {desc}
                </p>

                <div className="pt-2 flex justify-center md:justify-start">
                  <Link
                    href={`/features/${feature.slug}`}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-extrabold text-xs shadow-glow-cyan hover:scale-105 transition-all"
                  >
                    <span>{t('card.discoverCta')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })()}

      </div>

      {/* CAROUSEL FOOTER: NAVIGATION DOTS & SWIPE PROMPT */}
      <div className="relative z-10 px-6 py-4 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-500/5">
        
        {/* Swipe Prompt Invite for User */}
        <div className="flex items-center space-x-2 text-xs font-extrabold text-cyan-500 dark:text-cyan-400">
          <Hand className="w-4 h-4 animate-bounce text-cyan-400" />
          <span className="tracking-wide">
            {t('hero.swipeHint')}
          </span>
        </div>

        {/* Slide Controls & Indicator Dots */}
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-1.5 rounded-full glass-card hover:border-cyan-500/40 text-slate-700 dark:text-slate-300 transition-all active:scale-95"
            aria-label="Precedente"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dynamic Animated Dots & Progress Pill */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, i) => {
              const isActive = currentSlide === i;
              return (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`relative h-2.5 rounded-full overflow-hidden transition-all duration-300 ${
                    isActive
                      ? 'w-10 bg-slate-300 dark:bg-white/20 shadow-glow-cyan'
                      : 'w-2.5 bg-slate-400/40 hover:bg-slate-400/70'
                  }`}
                  aria-label={`Vai alla slide ${i + 1}`}
                >
                  {isActive && (
                    <span
                      key={`${currentSlide}-${isPaused}`}
                      className="absolute inset-y-0 left-0 bg-cyan-400 shadow-glow-cyan rounded-full"
                      style={{
                        animation: isPaused ? 'none' : 'carouselProgress 5s linear forwards',
                        width: isPaused ? '100%' : undefined,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            className="p-1.5 rounded-full glass-card hover:border-cyan-500/40 text-slate-700 dark:text-slate-300 transition-all active:scale-95"
            aria-label="Successivo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
