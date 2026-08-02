'use client';

import { useState } from 'react';
import { 
  Info, 
  ImageIcon, 
  Tag, 
  Users, 
  History, 
  TrendingUp, 
  Clock, 
  Sparkles, 
  SlidersHorizontal, 
  Map, 
  CheckCircle2, 
  ExternalLink,
  Crown,
  Zap,
  Filter
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxDedicatedCollectionsBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  // Active Tab in the collection navigation simulator (Matching Attachment 1)
  const [activeTab, setActiveTab] = useState<'overview' | 'items' | 'offers' | 'holders' | 'activity' | 'analytics' | 'staking'>('overview');

  return (
    <section className="relative rounded-3xl p-4 sm:p-8 glass-card border border-cyan-500/30 overflow-hidden space-y-10 shadow-2xl">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
          <Crown className="w-3.5 h-3.5 text-cyan-400" />
          <span>{isIt ? 'Trattamento VIP per le Collezioni • Premium Hub' : 'VIP Treatment for Collections • Premium Hub'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight break-words">
          {isIt ? (
            <>Su OOX le collezioni sono trattrate <span className="gradient-text-cyan-purple">con i guanti.</span></>
          ) : (
            <>On OOX collections are treated <span className="gradient-text-cyan-purple">with white-glove perfection.</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Ogni collezione ha la sua pagina dedicata con tutti i dati in prima vista: potenti filtri per consultare rapidamente gli NFT in base ai tratti ed alla rarità, lista holders, attività ed analisi in tempo reale.'
            : 'Every collection features a dedicated hub with all data front and center: powerful trait and rarity filters, holders breakdown, real-time activity, and deep analytics.'}
        </p>
      </div>

      {/* REPRODUCTION OF ATTACHMENT 1: THE 7 OFFICIAL COLLECTION TABS INTERACTIVE SIMULATOR */}
      <div className="relative z-10 space-y-6">
        
        {/* TAB NAVIGATION BAR (REPRODUCING ATTACHMENT 1 EXACTLY) */}
        <div className="p-2 rounded-2xl bg-slate-900/90 border border-cyan-500/40 shadow-2xl flex items-center overflow-x-auto gap-2 scrollbar-none">
          
          {/* Tab 1: Overview */}
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center space-x-2 transition-all shrink-0 ${
              activeTab === 'overview'
                ? 'bg-purple-600 text-white shadow-glow-purple border border-purple-400'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>{isIt ? 'Overview' : 'Overview'}</span>
          </button>

          {/* Tab 2: Items */}
          <button
            onClick={() => setActiveTab('items')}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center space-x-2 transition-all shrink-0 ${
              activeTab === 'items'
                ? 'bg-purple-600 text-white shadow-glow-purple border border-purple-400'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>{isIt ? 'Items' : 'Items'}</span>
          </button>

          {/* Tab 3: Offers */}
          <button
            onClick={() => setActiveTab('offers')}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center space-x-2 transition-all shrink-0 ${
              activeTab === 'offers'
                ? 'bg-purple-600 text-white shadow-glow-purple border border-purple-400'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>{isIt ? 'Offers' : 'Offers'}</span>
          </button>

          {/* Tab 4: Holders */}
          <button
            onClick={() => setActiveTab('holders')}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center space-x-2 transition-all shrink-0 ${
              activeTab === 'holders'
                ? 'bg-purple-600 text-white shadow-glow-purple border border-purple-400'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>{isIt ? 'Holders' : 'Holders'}</span>
          </button>

          {/* Tab 5: Activity */}
          <button
            onClick={() => setActiveTab('activity')}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center space-x-2 transition-all shrink-0 ${
              activeTab === 'activity'
                ? 'bg-purple-600 text-white shadow-glow-purple border border-purple-400'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <History className="w-4 h-4" />
            <span>{isIt ? 'Activity' : 'Activity'}</span>
          </button>

          {/* Tab 6: Analytics */}
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center space-x-2 transition-all shrink-0 ${
              activeTab === 'analytics'
                ? 'bg-purple-600 text-white shadow-glow-purple border border-purple-400'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>{isIt ? 'Analytics' : 'Analytics'}</span>
          </button>

          {/* Tab 7: Staking */}
          <button
            onClick={() => setActiveTab('staking')}
            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center space-x-2 transition-all shrink-0 ${
              activeTab === 'staking'
                ? 'bg-purple-600 text-white shadow-glow-purple border border-purple-400'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>{isIt ? 'Staking' : 'Staking'}</span>
          </button>

        </div>

        {/* DYNAMIC DISPLAY ACCORDING TO SELECTED TAB */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-cyan-500/40 shadow-2xl space-y-6">
          
          {/* TAB 1 CONTENT: OVERVIEW (BIGLIETTO DA VISITA MODULARE) */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* MODULAR SHOWCASE BANNER */}
              <div className="relative rounded-2xl overflow-hidden p-6 sm:p-8 bg-gradient-to-r from-purple-900/60 via-slate-900 to-cyan-950/60 border border-purple-500/40 space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-black">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isIt ? 'Biglietto da Visita Modulare' : 'Modular Showcase Card'}</span>
                </div>

                <h3 className="text-xl sm:text-3xl font-black text-white">
                  CHUBBY OnionX Official Collection
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium max-w-2xl">
                  {isIt
                    ? 'La pagina Overview è lo strumento modulare perfetto per presentare il tuo progetto: aggiungi immagini in evidenza, la storia della collezione, la roadmap interattiva, il team ed i canali social ufficiali.'
                    : 'The Overview page is the ultimate modular showcase to introduce your project: add custom header banners, project lore, interactive roadmap milestones, and official social links.'}
                </p>

                {/* MODULAR ELEMENTS GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                    <div className="text-[10px] font-black text-cyan-400">🖼️ IMMAGINI HERO</div>
                    <div className="text-xs font-bold text-white">Banner Custom</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                    <div className="text-[10px] font-black text-purple-400">📝 TESTO & LORE</div>
                    <div className="text-xs font-bold text-white">Descrizione Ricca</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                    <div className="text-[10px] font-black text-amber-400">🗺️ ROADMAP</div>
                    <div className="text-xs font-bold text-white">Milestones</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                    <div className="text-[10px] font-black text-emerald-400">🌐 SOCIAL & LINKS</div>
                    <div className="text-xs font-bold text-white">Verificati</div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2 CONTENT: ITEMS & FILTERS */}
          {activeTab === 'items' && (
            <div className="space-y-5 animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center space-x-2 text-xs font-black text-cyan-400">
                  <Filter className="w-4 h-4" />
                  <span>{isIt ? 'Filtri Avanzati Tratti & Rarità' : 'Advanced Trait & Rarity Filters'}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-400">
                  <span>Open Rarity</span> • <span>Price Low-High</span> • <span>Trait Matching</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="p-3 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                    <div className="aspect-square rounded-xl overflow-hidden">
                      <img src="/chubby-avatar.jpg" alt="NFT" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xs font-black text-white">CHUBBY #{item * 42}</div>
                    <div className="text-[10px] text-cyan-400 font-bold">12.5 EGLD</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* OTHER TABS SIMULATED DISPLAY */}
          {(activeTab === 'offers' || activeTab === 'holders' || activeTab === 'activity' || activeTab === 'analytics' || activeTab === 'staking') && (
            <div className="p-6 text-center space-y-3 animate-fadeIn">
              <div className="text-sm font-black text-cyan-400 uppercase tracking-widest">
                Tab {activeTab} • Live Analytics & Data Hub
              </div>
              <p className="text-xs text-slate-300 max-w-xl mx-auto font-medium">
                {isIt
                  ? `Visualizzazione completa e dettagliata per la sezione ${activeTab}: consulta offerte attive, la lista dei proprietari, lo storico transazioni, i grafici dei volumi ed il modulo di staking.`
                  : `Comprehensive breakdown for ${activeTab}: explore collection offers, holders list, live trades, volume charts, and integrated staking.`}
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
