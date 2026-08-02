'use client';

import { useState } from 'react';
import { 
  Crown, 
  Sparkles, 
  KeyRound, 
  CheckCircle2, 
  Wrench, 
  ShieldCheck, 
  Coins,
  Ticket,
  ChevronRight,
  Zap,
  Lock,
  Unlock
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxPlusPassBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [simulatedPass, setSimulatedPass] = useState<'onionx' | 'onxHold' | 'none'>('onionx');

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-amber-500/40 overflow-hidden space-y-8 shadow-2xl">
      {/* Premium Amber & Purple Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-500/40 text-amber-600 dark:text-amber-300 text-xs font-black tracking-wide shadow-sm">
          <Crown className="w-4 h-4 text-amber-500" />
          <span>{isIt ? 'Versione PLUS Esclusiva • OOX+' : 'Exclusive VIP Membership • OOX+'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>Sblocca l’Accesso Completo allo <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">Studio Creator con OOX+</span></>
          ) : (
            <>Unlock Full Access to <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">Studio Creator with OOX+</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'OOX+ è la versione PLUS pensata per creator, collezionisti ed esploratori avanzati. Ottieni l’accesso completo a tutti gli strumenti dello Studio Creator per lanciare collezioni, creare Staking Pool ed automatizzare le royalties su MultiversX.'
            : 'OOX+ is the PLUS tier engineered for creators, collectors, and power users. Unlock full unlimited access to the entire OOX Studio Creator suite to launch collections, build Staking Pools, and manage royalties on MultiversX.'}
        </p>
      </div>

      {/* 2 ACCESS PATHS GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* PATH 1: CHUBBY ONIONX NFT */}
        <div 
          onClick={() => setSimulatedPass('onionx')}
          className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer space-y-4 ${
            simulatedPass === 'onionx'
              ? 'bg-gradient-to-br from-amber-500/10 via-purple-500/10 to-slate-900/90 border-amber-500 dark:border-amber-400 shadow-xl scale-[1.02]'
              : 'bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-white/10 hover:border-amber-500/40'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-lg">
              <Ticket className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 uppercase tracking-wider">
              {isIt ? 'Pass a Vita' : 'Lifetime Pass'}
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              {isIt ? '1. CHUBBY OnionX NFT' : '1. CHUBBY OnionX NFT'}
            </h3>
            <p className="text-xs font-bold text-amber-600 dark:text-amber-400">
              {isIt ? 'Ticket a vita per accedere a OOX+' : 'Lifetime access ticket to OOX+'}
            </p>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Possiedi un NFT della speciale collezione CHUBBY OnionX nel tuo wallet. Questo NFT funge da Pass VIP definitivo e sblocca permanentemente OOX+.'
              : 'Hold an NFT from the special CHUBBY OnionX collection in your wallet. This NFT acts as your ultimate VIP Pass, permanently unlocking OOX+.'}
          </p>

          <div className="pt-2 flex items-center space-x-2 text-xs font-extrabold text-amber-600 dark:text-amber-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>{isIt ? 'Riconoscimento Istantaneo nel Wallet' : 'Instant Wallet Verification'}</span>
          </div>
        </div>

        {/* PATH 2: 500,000 $ONX HOLD BALANCE */}
        <div 
          onClick={() => setSimulatedPass('onxHold')}
          className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer space-y-4 ${
            simulatedPass === 'onxHold'
              ? 'bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-slate-900/90 border-purple-500 dark:border-purple-400 shadow-xl scale-[1.02]'
              : 'bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-white/10 hover:border-purple-500/40'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 text-white flex items-center justify-center shadow-lg">
              <Coins className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30 uppercase tracking-wider">
              {isIt ? 'Token Balance' : 'Token Balance'}
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              {isIt ? '2. Hold di 500,000 $ONX' : '2. Hold 500,000 $ONX'}
            </h3>
            <p className="text-xs font-bold text-purple-600 dark:text-purple-400">
              {isIt ? 'Accesso attivo con saldo token' : 'Active access via token balance'}
            </p>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Mantieni un saldo minimo di 500,000 $ONX nel tuo wallet. Lo smart contract rileva in automatico i tuoi token e ti concede immediatamente tutte le funzionalità OOX+.'
              : 'Maintain a minimum balance of 500,000 $ONX in your wallet. The smart contract automatically detects your tokens and instantly grants full OOX+ privileges.'}
          </p>

          <div className="pt-2 flex items-center space-x-2 text-xs font-extrabold text-purple-600 dark:text-purple-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>{isIt ? 'Nessun Abbonamento Mensile' : 'Zero Monthly Subscriptions'}</span>
          </div>
        </div>

      </div>

      {/* OOX+ UNLOCKED ADVANTAGE: STUDIO CREATOR FULL SUITE DISPLAY */}
      <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-amber-500/40 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-lg">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-black text-white">
                  {isIt ? 'Il Vantaggio di OOX+: Studio Creator Completo' : 'The OOX+ Advantage: Full Studio Creator Access'}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-extrabold flex items-center space-x-1">
                  <Unlock className="w-3 h-3" />
                  <span>SBLOCCATO</span>
                </span>
              </div>
              <p className="text-xs text-amber-300 font-semibold">
                {isIt ? 'Accedi a tutti gli strumenti di creazione on-chain senza limiti' : 'Access all on-chain creation tools with zero limits'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* 1. MINTABLE COLLECTIONS */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-extrabold text-white">
              {isIt ? 'Collezioni Mintabili' : 'Mintable Collections'}
            </h4>
            <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'Lancia collezioni NFT mintabili direttamente dagli utenti con smart contract trasparenti e custom.'
                : 'Launch mintable NFT collections directly for users with custom transparent smart contracts.'}
            </p>
          </div>

          {/* 2. LOTTERIES / RAFFLES */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
              <Ticket className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-extrabold text-white">
              {isIt ? 'Lotterie & Raffles' : 'Lotteries & Raffles'}
            </h4>
            <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'Crea ed organizza lotterie ed estrazioni on-chain trasparenti per la tua community.'
                : 'Host transparent on-chain lotteries and token/NFT raffles for your community.'}
            </p>
          </div>

          {/* 3. NFT GENERATOR */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
              <Wrench className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-extrabold text-white">
              {isIt ? 'Generatore NFT' : 'NFT Generator'}
            </h4>
            <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'Genera collezioni uniche combinando layer grafici, attributi e rarità in pochi minuti.'
                : 'Generate unique collections combining graphic layers, traits, and rarities in minutes.'}
            </p>
          </div>

          {/* 4. VENDING MACHINES */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
              <Coins className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-extrabold text-white">
              {isIt ? 'Vending Machine' : 'Vending Machines'}
            </h4>
            <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'Distribuisci NFT ed asset tramite distributori automatici e minting istantaneo.'
                : 'Distribute NFTs and digital assets via automated Web3 vending machines and instant minting.'}
            </p>
          </div>

        </div>

        <div className="pt-2 text-center">
          <a
            href="/features/tools"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-slate-950 font-black text-xs sm:text-sm shadow-xl hover:scale-105 transition-all"
          >
            <span>{isIt ? 'Esplora lo Studio Creator di OOX+' : 'Explore OOX+ Studio Creator'}</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
