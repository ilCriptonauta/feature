'use client';

import { useState } from 'react';
import { 
  FolderHeart, 
  Sparkles, 
  Layers, 
  Filter, 
  Zap, 
  SlidersHorizontal, 
  CheckCircle2, 
  Heart,
  Grid,
  List,
  ArrowUpDown,
  Search
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxProfileNftManagementBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [viewMode, setViewMode] = useState<'collection' | 'all'>('collection');
  const [selectedCount, setSelectedCount] = useState<number>(3);

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-cyan-500/30 overflow-hidden space-y-8 shadow-2xl">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-4 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
          <FolderHeart className="w-3.5 h-3.5" />
          <span>{isIt ? 'Gestione Avanzata Inventory' : 'Advanced Inventory Management'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>I Tuoi NFT. <span className="gradient-text-cyan-purple">Massimo Controllo</span></>
          ) : (
            <>Your NFTs. <span className="gradient-text-cyan-purple">Maximum Control</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Esegui listing singoli e multipli, cambi di prezzo e prelievi in tempo reale. Visualizza i tuoi NFT suddivisi in collezioni oppure scegli di vederli tutti insieme. Filtri avanzati che ti permettono di visualizzare NFT specifici.'
            : 'Execute single and batch listings, price updates, and real-time withdrawals. View your NFTs grouped by collection or choose to see them all together. Advanced filters allow you to locate specific NFTs.'}
        </p>

        {/* HEARTFEET CALLOUT BADGE */}
        <div className="inline-flex items-center space-x-2.5 p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs font-extrabold">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0 animate-pulse" />
          <span>
            {isIt
              ? 'Abbiamo a cuore i tuoi NFT e sappiamo quanto sia importante poterli gestire velocemente e con semplicità.'
              : 'We care deeply about your NFTs and know how important it is to manage them quickly and simply.'}
          </span>
        </div>
      </div>

      {/* 4 PILLARS FEATURE CARDS */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-cyan-500/30 shadow-lg space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-extrabold text-slate-900 dark:text-white">
            {isIt ? 'Operazioni Single & Batch' : 'Single & Batch Operations'}
          </h3>
          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Listing singoli e multipli, cambi prezzo e delisting immediati in un solo click.'
              : 'Single and batch listings, price updates, and instant delistings in one click.'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-purple-500/30 shadow-lg space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
            <Grid className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-extrabold text-slate-900 dark:text-white">
            {isIt ? 'Vista Flessibile' : 'Flexible View Modes'}
          </h3>
          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Visualizza gli NFT divisi per collezione oppure unificati in un’unica vista globale.'
              : 'View NFTs grouped by collection or unified in a single global feed.'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-amber-500/30 shadow-lg space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-extrabold text-slate-900 dark:text-white">
            {isIt ? 'Filtri Avanzati' : 'Advanced Filters'}
          </h3>
          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Filtra istantaneamente per attributi, rarità, status di listing e valore.'
              : 'Instantly filter by traits, rarity rank, listing status, and value.'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-emerald-500/30 shadow-lg space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <ArrowUpDown className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-extrabold text-slate-900 dark:text-white">
            {isIt ? 'Tempo Reale MultiversX' : 'Real-Time MultiversX'}
          </h3>
          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Esecuzione immediata sulla blockchain MultiversX con zero ritardi.'
              : 'Immediate execution on MultiversX blockchain with zero delays.'}
          </p>
        </div>

      </div>

      {/* INTERACTIVE INVENTORY MANAGER MOCKUP */}
      <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-cyan-500/40 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-base font-black text-white flex items-center space-x-2">
              <FolderHeart className="w-5 h-5 text-cyan-400" />
              <span>{isIt ? 'Gestore NFT Profilo OOX' : 'OOX Profile NFT Manager'}</span>
            </h3>
            <p className="text-xs text-slate-400">
              {isIt ? 'Prova i filtri e la visualizzazione flessibile del tuo wallet' : 'Try filters and flexible viewing modes for your wallet'}
            </p>
          </div>

          {/* VIEW MODE TOGGLE BUTTONS */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center space-x-1 p-1 rounded-xl bg-white/5 border border-white/10">
              <button
                onClick={() => setViewMode('collection')}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all flex items-center space-x-1.5 ${
                  viewMode === 'collection'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>{isIt ? 'Per Collezione' : 'By Collection'}</span>
              </button>
              <button
                onClick={() => setViewMode('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all flex items-center space-x-1.5 ${
                  viewMode === 'all'
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>{isIt ? 'Tutti Insieme' : 'All Together'}</span>
              </button>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-extrabold flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{selectedCount} {isIt ? 'NFT Selezionati per Batch' : 'NFTs Selected for Batch'}</span>
            </div>
          </div>
        </div>

        {/* SEARCH & FILTERS BAR MOCKUP */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-2 text-xs text-slate-300">
            <Search className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{isIt ? 'Cerca NFT o ID...' : 'Search NFT or ID...'}</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold">{isIt ? 'Filtro: Tutti i Listed' : 'Filter: All Listed'}</span>
            <SlidersHorizontal className="w-4 h-4 text-purple-400 shrink-0" />
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold">{isIt ? 'Ordinamento: Ultimi Acquisti' : 'Sort: Recent Purchases'}</span>
            <ArrowUpDown className="w-4 h-4 text-amber-400 shrink-0" />
          </div>
        </div>

        {/* BATCH ACTION BANNER */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950 via-slate-900 to-purple-950 border border-cyan-500/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="font-extrabold text-white">
              {isIt ? 'Azione Multipla Pronto all’Invio:' : 'Batch Action Ready:'} {selectedCount} NFT
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs shadow transition-all">
              {isIt ? 'Batch Listing (ONX)' : 'Batch List (ONX)'}
            </button>
            <button className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs shadow transition-all">
              {isIt ? 'Cambia Prezzi Multiplo' : 'Batch Price Update'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
