'use client';

import { 
  Award, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  BarChart3, 
  Layers, 
  Cpu,
  Star,
  Zap
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxHighStandardsBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  return (
    <section className="relative rounded-3xl p-4 sm:p-8 glass-card border border-cyan-500/30 overflow-hidden space-y-10 shadow-2xl">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
          <Award className="w-3.5 h-3.5 text-cyan-400" />
          <span>{isIt ? 'Standard Elevati • MultiversX & Open Rarity' : 'High Standards • MultiversX & Open Rarity'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight break-words">
          {isIt ? (
            <>Standard elevati: <span className="gradient-text-cyan-purple">I massimi standard di MultiversX.</span></>
          ) : (
            <>High Standards: <span className="gradient-text-cyan-purple">Powered by MultiversX Standards.</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Adottiamo e usiamo i massimi standard proposti dalla rete MultiversX. Garantiamo ai collezionisti ed ai creatori la massima trasparenza, interoperabilità e precisione nel calcolo della rarità.'
            : 'We adopt and use the highest standards proposed by the MultiversX network. We guarantee collectors and creators maximum transparency, interoperability, and precision in rarity calculations.'}
        </p>
      </div>

      {/* TWO-COLUMN GRID: LEFT CORE STANDARDS CARDS & RIGHT VISUAL RARITY SIMULATOR */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: OPEN RARITY & CUSTOM RANK CARDS */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* CARD 1: OPEN RARITY */}
          <div className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-cyan-500/40 shadow-xl space-y-3 hover:border-cyan-400 transition-all">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-[10px] font-black uppercase">
                  OPEN RARITY STANDARD
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight">
                  {isIt ? 'Open Rarity Protocol' : 'Open Rarity Protocol'}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'Usiamo Open Rarity per classificare la rarità di ogni NFT. Un algoritmo aperto, matematicamente verificabile ed imparziale che analizza la frequenza dei tratti di ciascun NFT nella collezione.'
                : 'We use Open Rarity to rank the rarity of every NFT. An open, mathematically verifiable, and unbiased algorithm that calculates trait frequency across the collection.'}
            </p>
          </div>

          {/* CARD 2: MULTIVERSX CUSTOM RANK */}
          <div className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-purple-500/40 shadow-xl space-y-3 hover:border-purple-400 transition-all">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase">
                  MULTIVERSX NATIVE RANK
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight">
                  {isIt ? 'MultiversX Custom Rank' : 'MultiversX Custom Rank'}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'Supportiamo anche il custom rank offerto dalla rete MultiversX. Consentiamo ai progetti di integrare classifiche di rarità personalizzate definite direttamente nel codice on-chain.'
                : 'We also support the custom rank offered by the MultiversX network. We enable projects to integrate custom rarity rankings defined natively on-chain.'}
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: VISUAL MOCK CARD OF NFT WITH OPEN RARITY & CUSTOM RANK BADGES */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-xs rounded-3xl p-5 bg-slate-950 border border-cyan-500/50 shadow-2xl space-y-4 relative group">
            
            {/* NFT Artwork Image Container */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group/art">
              <img 
                src="/chubby-avatar.jpg" 
                alt="Chubby NFT Open Rarity Showcase" 
                className="w-full h-full object-cover group-hover/art:scale-105 transition-transform duration-500"
              />

              {/* TOP LEFT: OPEN RARITY BADGE */}
              <div className="absolute top-3 left-3 z-10 flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-cyan-500 text-slate-950 text-xs font-black shadow-lg">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Rank #12</span>
              </div>

              {/* TOP RIGHT: MULTIVERSX CUSTOM RANK BADGE */}
              <div className="absolute top-3 right-3 z-10 flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-purple-600 text-white text-[11px] font-black shadow-lg border border-purple-400/40">
                <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                <span>Custom #004</span>
              </div>

              {/* BOTTOM OVERLAY */}
              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-amber-300 tracking-wider bg-slate-950/90 px-2.5 py-1 rounded-full border border-amber-500/30 backdrop-blur-md">
                  Open Rarity Score: 98.4
                </span>
              </div>
            </div>

            {/* CARD DETAILS */}
            <div className="space-y-2 text-left pt-1">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-black text-white">
                  CHUBBY OnionX
                </h4>
                <span className="text-xs font-bold text-cyan-400">
                  Top 1% Rare
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] font-bold pt-1">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 flex items-center justify-between">
                  <span>Open Rarity</span>
                  <span className="text-cyan-400 font-black">Verified ✓</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 flex items-center justify-between">
                  <span>MultiversX</span>
                  <span className="text-purple-400 font-black">Standard ✓</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
