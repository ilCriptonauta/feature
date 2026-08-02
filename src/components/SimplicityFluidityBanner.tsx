'use client';

import { useState } from 'react';
import { 
  Smartphone, 
  Zap, 
  Sparkles, 
  Layers, 
  Eye, 
  Flame, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function SimplicityFluidityBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'immediato',
      title: isIt ? 'OOX è Immediato' : 'OOX is Instant',
      subtitle: isIt ? 'Caricamento istantaneo e 0 tempi di attesa' : 'Instant loading and 0 wait times',
      icon: Zap,
      iconBg: 'from-cyan-400 to-blue-500',
      description: isIt
        ? 'Navigazione ultra-veloce senza caricamenti pesanti. Ogni azione risponde al millisecondo per un’esperienza reattiva e senza attrito.'
        : 'Ultra-fast navigation with zero heavy load times. Every interaction responds in milliseconds for a friction-free experience.',
    },
    {
      id: 'mobile',
      title: isIt ? 'Ottimizzato per Mobile' : 'Mobile-First Optimized',
      subtitle: isIt ? 'Progettato nativamente per smartphone' : 'Natively engineered for smartphones',
      icon: Smartphone,
      iconBg: 'from-purple-500 to-pink-500',
      description: isIt
        ? 'Pensato prima di tutto per i dispositivi mobili. Gestures touch naturali, menu drawer a comparsa e layout fluido ad una sola mano.'
        : 'Designed mobile-first. Natural touch gestures, quick slide-over drawers, and single-hand fluid layouts.',
    },
    {
      id: 'nfts',
      title: isIt ? 'Focalizzato sui Tuoi NFT' : 'Focused on Your NFTs',
      subtitle: isIt ? 'La tua arte al centro dell’attenzione' : 'Your digital art front and center',
      icon: Eye,
      iconBg: 'from-amber-400 to-orange-500',
      description: isIt
        ? 'Interfaccia essenziale e pulita che elimina la confusione visiva, mettendo in risalto gli artworks in altissima risoluzione.'
        : 'Clean and minimal interface that removes visual clutter, showcasing artworks in ultra-high resolution.',
    },
    {
      id: 'fluido',
      title: isIt ? 'OOX è molto Fluido' : 'OOX is Extremely Fluid',
      subtitle: isIt ? 'Animazioni a 60fps e transizioni morbide' : '60fps micro-animations & soft transitions',
      icon: Flame,
      iconBg: 'from-emerald-400 to-teal-500',
      description: isIt
        ? 'Transizioni di pagina setose, scorrimento a carosello touch e feedback visivi immediati per ogni tocco.'
        : 'Silky smooth page transitions, touch carousel scrolling, and instant tactile feedback for every tap.',
    },
  ];

  const currentPillar = pillars[activePillar];

  return (
    <section className="relative rounded-3xl p-4 sm:p-8 glass-card border border-cyan-500/30 overflow-hidden space-y-8">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isIt ? 'Semplicità & Esperienza Utente' : 'Simplicity & User Experience'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight break-words">
          {isIt ? (
            <>OOX è <span className="gradient-text-cyan-purple">Immediato, Semplice e Molto Fluido</span></>
          ) : (
            <>OOX is <span className="gradient-text-cyan-purple">Instant, Simple & Extremely Fluid</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {isIt
            ? 'Abbiamo eliminato ogni complessità non necessaria. OOX è semplice da consultare, focalizzato sui tuoi NFT e nativamente ottimizzato per l’uso da smartphone.'
            : 'We eliminated all unnecessary complexity. OOX is effortless to navigate, laser-focused on your NFTs, and natively optimized for mobile devices.'}
        </p>
      </div>

      {/* GRAPHICAL PILLARS & INTERACTIVE DEMO BOX */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
        
        {/* LEFT COLUMN: 4 INTERACTIVE PILLAR CARDS */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            const isSelected = activePillar === idx;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                  isSelected
                    ? 'bg-cyan-500/10 dark:bg-cyan-500/15 border-cyan-500 dark:border-cyan-400 shadow-md scale-102'
                    : 'glass-card border-black/5 dark:border-white/10 hover:border-cyan-500/30'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${pillar.iconBg} text-white flex items-center justify-center mb-2 shadow`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="text-xs font-black text-slate-900 dark:text-white">
                  {pillar.title}
                </div>
                <div className="text-[10px] text-cyan-600 dark:text-cyan-400 font-semibold mt-0.5">
                  {pillar.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: GRAPHICAL MOBILE PREVIEW FRAME DEMO */}
        <div className="lg:col-span-6 rounded-3xl p-6 bg-white/90 dark:bg-slate-900/90 border border-cyan-500/40 shadow-2xl space-y-5">
          
          {/* Top Bar simulating Mobile Interface Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
            <div className="flex items-center space-x-2">
              <Smartphone className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
              <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                Native Mobile Focus • OOX.art
              </span>
            </div>

            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
              60 FPS Fluidity
            </span>
          </div>

          {/* ACTIVE PILLAR DEMO DISPLAY */}
          <div className="p-5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3 animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${currentPillar.iconBg} text-white flex items-center justify-center shadow-lg`}>
                <currentPillar.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white">
                  {currentPillar.title}
                </h4>
                <p className="text-xs text-cyan-600 dark:text-cyan-400 font-bold">
                  {currentPillar.subtitle}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              {currentPillar.description}
            </p>
          </div>

          {/* SIMULATED MOBILE TOUCH GESTURE BADGES */}
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-extrabold">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 flex items-center justify-center space-x-1">
              <Zap className="w-3 h-3 text-cyan-500" />
              <span>{isIt ? 'Zero Lag' : 'Zero Lag'}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 flex items-center justify-center space-x-1">
              <Layers className="w-3 h-3 text-purple-500" />
              <span>{isIt ? '1-Hand UX' : '1-Hand UX'}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center justify-center space-x-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              <span>{isIt ? 'Ultra Pulito' : 'Ultra Clean'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
