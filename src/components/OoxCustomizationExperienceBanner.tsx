'use client';

import { useState } from 'react';
import { 
  Sliders, 
  LayoutGrid, 
  Grid2x2, 
  Grid3x3, 
  List, 
  Sun, 
  Moon, 
  Sparkles, 
  Eye, 
  Palette,
  Check
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxCustomizationExperienceBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  // Interactive Simulator States
  const [viewMode, setViewMode] = useState<'list' | 'small-grid' | 'large-grid'>('large-grid');
  const [simulatedTheme, setSimulatedTheme] = useState<'dark' | 'light'>('dark');

  return (
    <section className="relative rounded-3xl p-4 sm:p-8 glass-card border border-purple-500/30 overflow-hidden space-y-10 shadow-2xl">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-xs font-extrabold tracking-wide">
          <Sliders className="w-3.5 h-3.5 text-purple-400" />
          <span>{isIt ? 'Massima Personalizzazione • Custom Experience' : 'Maximum Customization • Personal Experience'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight break-words">
          {isIt ? (
            <>Massima personalizzazione: <span className="gradient-text-cyan-purple">OOX è la tua casa per gli NFT.</span></>
          ) : (
            <>Maximum Customization: <span className="gradient-text-cyan-purple">OOX is your home for NFTs.</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Sappiamo quanto sia importante esplorare e visualizzare gli NFT al meglio ed è per questo motivo che su OOX puoi personalizzare completamente la tua esperienza di utilizzo: imposta la visualizzazione che preferisci e scegli il tema chiaro o scuro.'
            : 'We know how vital it is to explore and view NFTs at their best, which is why on OOX you can completely customize your experience: set your preferred view mode and toggle between light or dark themes.'}
        </p>
      </div>

      {/* TWO-COLUMN DISPLAY: LEFT INTERACTIVE CONTROLS & RIGHT LIVE SIMULATION GALLERY */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: INTERACTIVE VIEW MODE & THEME CONTROLS */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* VIEW MODE CONTROL BOX (ATTACHMENT 1 REPRODUCTION) */}
          <div className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-purple-500/40 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black uppercase text-purple-600 dark:text-purple-400 tracking-wider">
                {isIt ? '1. Scegli la Visualizzazione' : '1. Select View Mode'}
              </label>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                {viewMode === 'list' && (isIt ? 'Elenco' : 'List')}
                {viewMode === 'small-grid' && (isIt ? 'Anteprime Piccole' : 'Small Grid')}
                {viewMode === 'large-grid' && (isIt ? 'Anteprime Grandi' : 'Large Grid')}
              </span>
            </div>

            {/* 3 ICON TOGGLE BUTTONS (EXACTLY LIKE ATTACHMENT 1) */}
            <div className="grid grid-cols-3 gap-3">
              
              {/* List View Button */}
              <button
                onClick={() => setViewMode('list')}
                className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center space-y-1.5 transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-purple-600 text-white border-purple-400 shadow-glow-purple scale-105'
                    : 'bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-purple-400'
                }`}
              >
                <List className="w-6 h-6" />
                <span className="text-[10px] font-black">{isIt ? 'Elenco' : 'List'}</span>
              </button>

              {/* Small Grid View Button */}
              <button
                onClick={() => setViewMode('small-grid')}
                className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center space-y-1.5 transition-all duration-300 ${
                  viewMode === 'small-grid'
                    ? 'bg-purple-600 text-white border-purple-400 shadow-glow-purple scale-105'
                    : 'bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-purple-400'
                }`}
              >
                <Grid3x3 className="w-6 h-6" />
                <span className="text-[10px] font-black">{isIt ? 'Piccole' : 'Small'}</span>
              </button>

              {/* Large Grid View Button */}
              <button
                onClick={() => setViewMode('large-grid')}
                className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center space-y-1.5 transition-all duration-300 ${
                  viewMode === 'large-grid'
                    ? 'bg-purple-600 text-white border-purple-400 shadow-glow-purple scale-105'
                    : 'bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-purple-400'
                }`}
              >
                <Grid2x2 className="w-6 h-6" />
                <span className="text-[10px] font-black">{isIt ? 'Grandi' : 'Large'}</span>
              </button>

            </div>
          </div>

          {/* THEME CONTROL BOX (LIGHT / DARK THEME TOGGLE) */}
          <div className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-cyan-500/40 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black uppercase text-cyan-600 dark:text-cyan-400 tracking-wider">
                {isIt ? '2. Scegli il Tema' : '2. Select Theme'}
              </label>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                {simulatedTheme === 'dark' ? (isIt ? 'Tema Scuro' : 'Dark Mode') : (isIt ? 'Tema Chiaro' : 'Light Mode')}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Dark Theme Button */}
              <button
                onClick={() => setSimulatedTheme('dark')}
                className={`p-3.5 rounded-2xl border flex items-center justify-center space-x-2 font-extrabold text-xs transition-all duration-300 ${
                  simulatedTheme === 'dark'
                    ? 'bg-slate-950 text-cyan-400 border-cyan-400 shadow-glow-cyan scale-105'
                    : 'bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10'
                }`}
              >
                <Moon className="w-4 h-4" />
                <span>{isIt ? 'Tema Scuro' : 'Dark Theme'}</span>
              </button>

              {/* Light Theme Button */}
              <button
                onClick={() => setSimulatedTheme('light')}
                className={`p-3.5 rounded-2xl border flex items-center justify-center space-x-2 font-extrabold text-xs transition-all duration-300 ${
                  simulatedTheme === 'light'
                    ? 'bg-slate-100 text-purple-600 border-purple-500 shadow-lg scale-105'
                    : 'bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10'
                }`}
              >
                <Sun className="w-4 h-4 text-amber-500" />
                <span>{isIt ? 'Tema Chiaro' : 'Light Theme'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: LIVE SIMULATED NFT GALLERY RESPONDING REAL-TIME TO TOGGLES */}
        <div className="lg:col-span-7">
          <div className={`p-6 rounded-3xl border transition-all duration-500 shadow-2xl space-y-4 ${
            simulatedTheme === 'dark' 
              ? 'bg-slate-950/95 border-purple-500/50 text-white' 
              : 'bg-slate-50 border-slate-300 text-slate-900 shadow-slate-300/50'
          }`}>
            
            {/* SIMULATOR HEADER BAR */}
            <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-black tracking-wide ml-2 opacity-75">
                  OOX.art • {isIt ? 'Anteprima Live' : 'Live Preview'}
                </span>
              </div>

              <div className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-purple-500/20 text-purple-400">
                {viewMode} • {simulatedTheme}
              </div>
            </div>

            {/* DYNAMIC GALLERY CONTENT SIMULATION */}

            {/* MODE 1: ELENCO (LIST VIEW) */}
            {viewMode === 'list' && (
              <div className="space-y-3 py-2 animate-fadeIn">
                {[1, 2, 3].map((item) => (
                  <div key={item} className={`p-3 rounded-2xl border flex items-center justify-between transition-colors ${
                    simulatedTheme === 'dark' ? 'bg-slate-900/80 border-white/10' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <img src="/chubby-avatar.jpg" alt="NFT" className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <div className="text-xs font-black">CHUBBY OnionX #{item * 42}</div>
                        <div className="text-[10px] opacity-60">Floor: 12.5 EGLD</div>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 rounded-xl bg-purple-500 text-white font-black text-xs">
                      Buy
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* MODE 2: ANTEPRIME PICCOLE (SMALL GRID 3x3) */}
            {viewMode === 'small-grid' && (
              <div className="grid grid-cols-3 gap-3 py-2 animate-fadeIn">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className={`p-2 rounded-2xl border space-y-2 transition-colors ${
                    simulatedTheme === 'dark' ? 'bg-slate-900/80 border-white/10' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <div className="aspect-square rounded-xl overflow-hidden">
                      <img src="/chubby-avatar.jpg" alt="NFT" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[10px] font-black truncate">CHUBBY #{item * 15}</div>
                  </div>
                ))}
              </div>
            )}

            {/* MODE 3: ANTEPRIME GRANDI (LARGE GRID 2x2) */}
            {viewMode === 'large-grid' && (
              <div className="grid grid-cols-2 gap-4 py-2 animate-fadeIn">
                {[1, 2].map((item) => (
                  <div key={item} className={`p-3 rounded-2xl border space-y-3 transition-colors ${
                    simulatedTheme === 'dark' ? 'bg-slate-900/80 border-white/10' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <div className="aspect-square rounded-xl overflow-hidden">
                      <img src="/chubby-avatar.jpg" alt="NFT" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-black">CHUBBY #{item * 108}</div>
                        <div className="text-[10px] text-cyan-400 font-bold">100,000 $ONX</div>
                      </div>
                      <button className="px-3 py-1.5 rounded-xl bg-purple-500 text-white font-black text-xs">
                        Buy
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* FOOTER CAPTION */}
            <div className="text-center pt-2 text-[11px] font-extrabold opacity-75">
              ✨ {isIt ? 'OOX è la tua casa per gli NFT. Personalizza ogni dettaglio.' : 'OOX is your home for NFTs. Customize every detail.'}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
