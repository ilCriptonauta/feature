'use client';

import { useState } from 'react';
import { 
  Tag, 
  Coins, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRightLeft, 
  Gift, 
  ShieldCheck,
  Zap,
  Clock,
  Layers
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxProfileOffersStakingBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [activeTab, setActiveTab] = useState<'offers' | 'staking'>('offers');

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-purple-500/30 overflow-hidden space-y-8 shadow-2xl">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-extrabold tracking-wide">
          <ArrowRightLeft className="w-3.5 h-3.5" />
          <span>{isIt ? 'Gestione Trattative & Rendimenti' : 'Negotiations & Rewards Management'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>Offerte <span className="gradient-text-cyan-purple">& Staking</span></>
          ) : (
            <>Offers <span className="gradient-text-cyan-purple">& Staking</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Pannello di controllo unificato per gestire tutte le tue trattative d’offerta in entrata ed in uscita, e monitorare i tuoi NFT in stake con claim delle ricompense in tempo reale.'
            : 'Unified dashboard to manage all your incoming and outgoing offer negotiations, and track your staked NFTs with real-time rewards claiming.'}
        </p>
      </div>

      {/* 2 MAIN PARTS GRID */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* PARTE 1: OFFERTE */}
        <div 
          onClick={() => setActiveTab('offers')}
          className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer space-y-4 ${
            activeTab === 'offers'
              ? 'bg-white dark:bg-slate-900 border-cyan-500 dark:border-cyan-400 shadow-xl scale-[1.01]'
              : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-white/10 hover:border-cyan-500/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 text-white flex items-center justify-center shadow-lg">
              <Tag className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">
              OFFERS
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              {isIt ? 'Gestione Offerte Inviate & Ricevute' : 'Manage Created & Received Offers'}
            </h3>
            <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
              {isIt ? 'Controllo totale su ogni trattativa' : 'Total control over every offer negotiation'}
            </p>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Gestisci le tue offerte create ed annullale in qualsiasi momento con sblocco immediato dei fondi. Monitora le offerte ricevute sui tuoi NFT, accettale per completare la vendita o rifiutale se non soddisfano le tue esigenze.'
              : 'Manage your created offers and cancel them at any time with instant fund release. Monitor received offers on your NFTs, accept them to complete a sale, or reject them if they do not meet your expectations.'}
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isIt ? 'Annullamento offerte create in qualsiasi momento' : 'Cancel created offers at any time'}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isIt ? 'Accetta o rifiuta offerte ricevute in 1 click' : 'Accept or reject received offers in 1 click'}</span>
            </div>
          </div>
        </div>

        {/* PARTE 2: STAKING */}
        <div 
          onClick={() => setActiveTab('staking')}
          className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer space-y-4 ${
            activeTab === 'staking'
              ? 'bg-white dark:bg-slate-900 border-purple-500 dark:border-purple-400 shadow-xl scale-[1.01]'
              : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-white/10 hover:border-purple-500/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 text-white flex items-center justify-center shadow-lg">
              <Coins className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/30 uppercase tracking-wider">
              Staking
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              {isIt ? 'Monitoraggio Staking & Claim Rewards' : 'Staking Tracker & Rewards Claiming'}
            </h3>
            <p className="text-xs font-bold text-purple-600 dark:text-purple-400">
              {isIt ? 'Raccogli le ricompense in tempo reale' : 'Claim accumulated rewards in real time'}
            </p>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Monitora rapidamente tutti gli NFT di qualsiasi collezione messi in stake. Visualizza l’accumulo delle ricompense in token ed esegui rapidamente il claim delle rewards in tempo reale.'
              : 'Quickly monitor all NFTs from any collection placed in stake. Track accumulated token rewards and rapidly execute real-time reward claims.'}
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isIt ? 'Tracciamento multi-collezione degli NFT in stake' : 'Multi-collection tracking of staked NFTs'}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isIt ? 'Claim istantaneo delle ricompense accumulate' : 'Instant claim of accumulated rewards'}</span>
            </div>
          </div>
        </div>

      </div>

      {/* DUAL INTERACTIVE SIMULATOR MOCKUP */}
      <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-purple-500/40 shadow-2xl space-y-6">
        {activeTab === 'offers' ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-extrabold text-white">
                  {isIt ? 'Pannello Gestione Offerte (Inviate & Ricevute)' : 'Offer Management Panel (Sent & Received)'}
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
                Live Negotiations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              
              {/* OFFERTA RICEVUTA */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-amber-300 uppercase">{isIt ? 'Offerta Ricevuta' : 'Offer Received'}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{isIt ? 'Scade in 12h' : 'Expires in 12h'}</span>
                </div>
                <div className="font-extrabold text-white text-sm">CHUBBY OnionX #102</div>
                <div className="text-xs text-emerald-400 font-bold">{isIt ? 'Offerta: 10.5 EGLD (da 0x8f...3a)' : 'Offer: 10.5 EGLD (by 0x8f...3a)'}</div>
                <div className="flex items-center space-x-2 pt-1">
                  <button className="flex-1 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all">
                    {isIt ? 'Accetta' : 'Accept'}
                  </button>
                  <button className="flex-1 py-1.5 rounded-xl bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/40 font-extrabold text-xs transition-all">
                    {isIt ? 'Rifiuta' : 'Reject'}
                  </button>
                </div>
              </div>

              {/* OFFERTA CREATA DA ANNULLARE */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-cyan-300 uppercase">{isIt ? 'Offerta Inviata (Tua)' : 'Sent Offer (Yours)'}</span>
                  <span className="text-[10px] text-emerald-400 font-bold">{isIt ? 'Attiva' : 'Active'}</span>
                </div>
                <div className="font-extrabold text-white text-sm">EAPES #404</div>
                <div className="text-xs text-cyan-300 font-bold">{isIt ? 'La tua offerta: 50,000 $ONX' : 'Your offer: 50,000 $ONX'}</div>
                <div className="pt-1">
                  <button className="w-full py-1.5 rounded-xl bg-slate-800 hover:bg-rose-600 text-white font-extrabold text-xs transition-all">
                    {isIt ? 'Annulla Offerta' : 'Cancel Offer'}
                  </button>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <Coins className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-extrabold text-white">
                  {isIt ? 'Dashboard Staking & Ricompense Multi-Collezione' : 'Multi-Collection Staking & Rewards Dashboard'}
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold">
                Real-Time Yield
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-[10px] text-purple-300 font-bold uppercase">{isIt ? 'NFT in Stake Totali: 8 Asset' : 'Total Staked NFTs: 8 Assets'}</div>
                <div className="font-black text-white text-sm sm:text-base">
                  {isIt ? 'Ricompense Accumulate:' : 'Accumulated Rewards:'} <span className="text-emerald-400">14,250 $ONX</span>
                </div>
              </div>
              <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-black text-xs shadow hover:scale-105 transition-all flex items-center space-x-1.5 shrink-0">
                <Gift className="w-4 h-4" />
                <span>{isIt ? 'Claim All Rewards (14,250 ONX)' : 'Claim All Rewards (14,250 ONX)'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
