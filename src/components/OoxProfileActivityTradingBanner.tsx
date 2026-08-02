'use client';

import { useState } from 'react';
import { 
  Activity, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  BarChart3, 
  Award, 
  DollarSign, 
  Tag, 
  Handshake, 
  Trash2, 
  Gift, 
  Circle,
  Trophy,
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxProfileActivityTradingBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [activeTab, setActiveTab] = useState<'activity' | 'trading'>('activity');
  const [activityFilter, setActivityFilter] = useState<'all' | 'sale' | 'listing' | 'offer' | 'unlist' | 'mint'>('all');

  const activityFiltersList = [
    { id: 'all', label: { it: 'All', en: 'All' }, icon: Circle },
    { id: 'sale', label: { it: 'Sale', en: 'Sale' }, icon: DollarSign },
    { id: 'listing', label: { it: 'Listing', en: 'Listing' }, icon: Tag },
    { id: 'offer', label: { it: 'Item Offer', en: 'Item Offer' }, icon: Handshake },
    { id: 'unlist', label: { it: 'Unlist', en: 'Unlist' }, icon: Trash2 },
    { id: 'mint', label: { it: 'Mint', en: 'Mint' }, icon: Gift },
  ];

  const mockActivityLogs = [
    { type: 'sale', title: 'CHUBBY OnionX #042', price: '12.5 EGLD', time: '2m ago', icon: DollarSign, color: 'text-emerald-400' },
    { type: 'listing', title: 'EAPES #102', price: '50,000 $ONX', time: '15m ago', icon: Tag, color: 'text-cyan-400' },
    { type: 'offer', title: 'BAXC #88', price: '4.2 EGLD', time: '1h ago', icon: Handshake, color: 'text-purple-400' },
    { type: 'mint', title: 'Chubby OnionX #500', price: '0.5 EGLD', time: '3h ago', icon: Gift, color: 'text-amber-400' },
    { type: 'unlist', title: 'EAPES #99', price: 'Cancel', time: '5h ago', icon: Trash2, color: 'text-rose-400' },
  ];

  const filteredLogs = activityFilter === 'all' 
    ? mockActivityLogs 
    : mockActivityLogs.filter(log => log.type === activityFilter);

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-cyan-500/30 overflow-hidden space-y-8 shadow-2xl">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
          <Activity className="w-3.5 h-3.5" />
          <span>{isIt ? 'Storico Attività & Analytics' : 'Activity History & Analytics'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>Activity <span className="gradient-text-cyan-purple">& Trading</span></>
          ) : (
            <>Activity <span className="gradient-text-cyan-purple">& Trading</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Monitora nel dettaglio ogni singola operazione svolta su OOX ed accedi al Trading HUB completo di statistiche personali, grafici di performance e badge di reputazione.'
            : 'Track every single action performed on OOX in detail and access the Trading HUB complete with personal statistics, performance charts, and reputation badges.'}
        </p>
      </div>

      {/* 2 MAIN PILLARS GRID */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* CARD 1: ACTIVITY */}
        <div 
          onClick={() => setActiveTab('activity')}
          className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer space-y-4 ${
            activeTab === 'activity'
              ? 'bg-white dark:bg-slate-900 border-cyan-500 dark:border-cyan-400 shadow-xl scale-[1.01]'
              : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-white/10 hover:border-cyan-500/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 text-white flex items-center justify-center shadow-lg">
              <Activity className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">
              ACTIVITY
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              {isIt ? 'Storico Completo Attività' : 'Complete Activity History'}
            </h3>
            <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
              {isIt ? 'Tracciamento dettagliato per ogni azione' : 'Detailed tracking for every action'}
            </p>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Su Activity ogni utente può monitorare tutte le attività svolte su OOX tramite filtri rapidi dedicati: Vendite (Sale), Listing, Offerte ricevute/create (Item Offer), Delisting (Unlist) e Minting.'
              : 'On Activity every user can monitor all actions performed on OOX using dedicated quick filters: Sale, Listing, Item Offer, Unlist, and Mint.'}
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isIt ? 'Filtri dedicati: All, Sale, Listing, Item Offer, Unlist, Mint' : 'Dedicated filters: All, Sale, Listing, Item Offer, Unlist, Mint'}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isIt ? 'Storico in tempo reale di tutte le transazioni' : 'Real-time transaction history feed'}</span>
            </div>
          </div>
        </div>

        {/* CARD 2: TRADING HUB */}
        <div 
          onClick={() => setActiveTab('trading')}
          className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer space-y-4 ${
            activeTab === 'trading'
              ? 'bg-white dark:bg-slate-900 border-purple-500 dark:border-purple-400 shadow-xl scale-[1.01]'
              : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-white/10 hover:border-purple-500/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 text-white flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/30 uppercase tracking-wider">
              TRADING HUB
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              {isIt ? 'Trading HUB & Statistiche Personali' : 'Trading HUB & Personal Analytics'}
            </h3>
            <p className="text-xs font-bold text-purple-600 dark:text-purple-400">
              {isIt ? 'Analisi delle performance e Badge reputazionali' : 'Performance analytics and Reputation Badges'}
            </p>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Su Trading ogni utente accede al Trading HUB: una pagina con tutte le statistiche e grafici personali. Volume totale, totale trade, media prezzo di trade, miglior trade, grafici delle prestazioni, trade recenti e badge ottenuti.'
              : 'On Trading every user accesses the Trading HUB: a page dedicated to all personal statistics and charts. Total Volume, Total Trades, Average Trade Price, Best Trade, performance charts, recent trades, and earned badges.'}
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isIt ? 'Volume Totale, Totale Trade, Prezzo Medio e Miglior Trade' : 'Total Volume, Total Trades, Avg Price & Best Trade'}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isIt ? 'Grafici di prestazione e visualizzazione dei Badge ottenuti' : 'Performance charts and unlocked reputation Badges'}</span>
            </div>
          </div>
        </div>

      </div>

      {/* DUAL INTERACTIVE SIMULATOR MOCKUP */}
      <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-cyan-500/40 shadow-2xl space-y-6">
        {activeTab === 'activity' ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-extrabold text-white">
                  {isIt ? 'Storico Attività OOX con Filtri Rapidi' : 'OOX Activity History with Quick Filters'}
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
                Live Feed
              </span>
            </div>

            {/* FILTERS BAR MOCKUP (EXACT MATCH FOR USER ATTACHMENT) */}
            <div className="flex flex-wrap items-center gap-2 pb-2">
              {activityFiltersList.map(filter => {
                const FilterIcon = filter.icon;
                const isSelected = activityFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActivityFilter(filter.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 border transition-all ${
                      isSelected
                        ? 'bg-white text-slate-950 border-white shadow-lg font-black'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/30'
                    }`}
                  >
                    <FilterIcon className="w-3.5 h-3.5" />
                    <span>{filter.label[language]}</span>
                  </button>
                );
              })}
            </div>

            {/* ACTIVITY LOG LIST */}
            <div className="space-y-2">
              {filteredLogs.map((log, idx) => {
                const LogIcon = log.icon;
                return (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <LogIcon className={`w-4 h-4 ${log.color}`} />
                      </div>
                      <div>
                        <div className="font-extrabold text-white">{log.title}</div>
                        <div className="text-[10px] text-slate-400 capitalize">{log.type} • {log.time}</div>
                      </div>
                    </div>
                    <span className={`font-black ${log.color}`}>{log.price}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-extrabold text-white">
                  {isIt ? 'Trading HUB - Statistiche & Performance Personali' : 'Trading HUB - Personal Statistics & Performance'}
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold">
                Analytics Pro
              </span>
            </div>

            {/* 4 STATS METRICS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] text-slate-400 font-bold uppercase">{isIt ? 'Volume Totale' : 'Total Volume'}</div>
                <div className="text-sm sm:text-base font-black text-cyan-400">142.5 EGLD</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] text-slate-400 font-bold uppercase">{isIt ? 'Totale Trade' : 'Total Trades'}</div>
                <div className="text-sm sm:text-base font-black text-purple-400">84 Trades</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] text-slate-400 font-bold uppercase">{isIt ? 'Media Prezzo Trade' : 'Avg Trade Price'}</div>
                <div className="text-sm sm:text-base font-black text-emerald-400">1.69 EGLD</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] text-slate-400 font-bold uppercase">{isIt ? 'Miglior Trade' : 'Best Trade'}</div>
                <div className="text-sm sm:text-base font-black text-amber-400">15.0 EGLD</div>
              </div>
            </div>

            {/* BADGES SHOWCASE */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-white">
                <Award className="w-4 h-4 text-amber-400" />
                <span>{isIt ? 'Badge Ottenuti in base alle attività:' : 'Unlocked Reputation Badges:'}</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 font-extrabold flex items-center space-x-1">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Whale Trader 🐋</span>
                </span>
                <span className="px-3 py-1 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 font-extrabold flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Diamond Hands 💎</span>
                </span>
                <span className="px-3 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-extrabold flex items-center space-x-1">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>Top Minter 🎁</span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
