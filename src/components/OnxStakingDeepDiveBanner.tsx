'use client';

import { useState } from 'react';
import { 
  Coins, 
  Lock, 
  Unlock, 
  Sparkles, 
  Flame, 
  ExternalLink, 
  Scissors, 
  ShoppingBag, 
  Send, 
  Award, 
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Layers
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OnxStakingDeepDiveBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [stakingType, setStakingType] = useState<'flexible' | 'liquid'>('liquid');
  const [selectedLock, setSelectedLock] = useState<90 | 180>(180);

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-amber-500/40 overflow-hidden space-y-8">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-amber-500 pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-extrabold tracking-wide">
          <Coins className="w-3.5 h-3.5" />
          <span>{isIt ? 'Architettura Staking OOX' : 'OOX Staking Architecture'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>Scegli il tuo Staking: <span className="gradient-text-cyan-purple">Flessibile o Liquid NFT</span></>
          ) : (
            <>Choose your Staking: <span className="gradient-text-cyan-purple">Flexible or Liquid NFT</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {isIt
            ? 'Mettere in staking i tuoi $ONX è semplice e flessibile. Sblocca rendimenti fino al 10% APR ed usufruisci del Liquid Staking basato su Posizioni NFT scambiabili e frazionabili.'
            : 'Staking $ONX is simple and flexible. Unlock yield up to 10% APR and leverage Liquid Staking powered by tradable and splittable NFT positions.'}
        </p>
      </div>

      {/* STAKING TYPE TOGGLE BUTTONS */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 p-1.5 rounded-2xl bg-slate-200/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 max-w-xl">
        <button
          onClick={() => setStakingType('flexible')}
          className={`w-full sm:w-1/2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all duration-300 ${
            stakingType === 'flexible'
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25 scale-102'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Unlock className="w-4 h-4" />
          <span>{isIt ? 'Stake Flessibile (4% APR)' : 'Flexible Stake (4% APR)'}</span>
        </button>

        <button
          onClick={() => setStakingType('liquid')}
          className={`w-full sm:w-1/2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all duration-300 ${
            stakingType === 'liquid'
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25 scale-102'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Lock className="w-4 h-4" />
          <span>{isIt ? 'Liquid Stake (Fino al 10%)' : 'Liquid Stake (Up to 10%)'}</span>
        </button>
      </div>

      {/* DISPLAY PANEL FOR SELECTED STAKING VERSION */}
      {stakingType === 'flexible' ? (
        /* FLEXIBLE STAKE DISPLAY */
        <div className="relative z-10 rounded-3xl p-6 sm:p-8 bg-white/90 dark:bg-slate-900/90 border border-amber-500/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
              <Unlock className="w-3.5 h-3.5" />
              <span>{isIt ? 'Nessun Periodo di Blocco' : 'No Lockup Period'}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {isIt ? 'Stake Flessibile @ 4% APR' : 'Flexible Stake @ 4% APR'}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'La soluzione ideale per chi desidera rendimenti continui mantenendo il 100% del controllo immediato sulla propria liquidità. Puoi depositare e prelevare i tuoi token $ONX in qualsiasi momento senza vincoli temporali.'
                : 'The ideal solution for continuous yield while maintaining 100% immediate liquidity control. Deposit and withdraw your $ONX tokens at any time with zero lockup constraints.'}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">{isIt ? 'Rendimento APR' : 'APR Yield'}</div>
                <div className="text-xl font-black text-amber-600 dark:text-amber-400">4% APR</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">{isIt ? 'Prelievo' : 'Withdrawal'}</div>
                <div className="text-sm font-black text-emerald-600 dark:text-emerald-400">{isIt ? 'Istantaneo 24/7' : 'Instant 24/7'}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl p-6 bg-amber-500/10 dark:bg-amber-500/10 border border-amber-500/30 space-y-4 text-center">
            <Coins className="w-12 h-12 text-amber-500 dark:text-amber-400 mx-auto" />
            <div className="text-sm font-extrabold text-slate-900 dark:text-white">
              {isIt ? 'Inizia lo Staking Flessibile' : 'Start Flexible Staking'}
            </div>
            <a
              href="https://oox.art/staking"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-amber-500/20"
            >
              <span>oox.art/staking</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      ) : (
        /* LIQUID STAKE DISPLAY WITH LOCK OPTIONS & NFT POSITION MECHANICS */
        <div className="relative z-10 space-y-8">
          
          {/* LOCK PERIOD CHOOSER (90 DAYS VS 180 DAYS) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* 90 DAYS LOCK CARD */}
            <button
              onClick={() => setSelectedLock(90)}
              className={`p-6 rounded-3xl border text-left transition-all duration-300 relative overflow-hidden ${
                selectedLock === 90
                  ? 'bg-amber-500/10 dark:bg-amber-500/15 border-amber-500 dark:border-amber-400 shadow-md scale-102'
                  : 'bg-white/90 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-amber-500/40'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                  90 {isIt ? 'GIORNI' : 'DAYS'}
                </span>
                <span className="text-2xl font-black text-amber-600 dark:text-amber-400">6% APR</span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {isIt ? 'Blocco Medio Termine' : 'Medium-Term Lock'}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                {isIt ? 'Ricevi l’NFT Posizione nel wallet ed ottieni il 6% di APR.' : 'Receive Position NFT in wallet with 6% APR.'}
              </p>
            </button>

            {/* 180 DAYS LOCK CARD */}
            <button
              onClick={() => setSelectedLock(180)}
              className={`p-6 rounded-3xl border text-left transition-all duration-300 relative overflow-hidden ${
                selectedLock === 180
                  ? 'bg-amber-500/10 dark:bg-amber-500/15 border-amber-500 dark:border-amber-400 shadow-md scale-102'
                  : 'bg-white/90 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-amber-500/40'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md">
                  180 {isIt ? 'GIORNI (MAX APR)' : 'DAYS (MAX APR)'}
                </span>
                <span className="text-2xl font-black text-amber-600 dark:text-amber-300">10% APR</span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {isIt ? 'Blocco Lungo Termine' : 'Long-Term Lock'}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                {isIt ? 'Rendimento massimo 10% APR con NFT Posizione trasferibile.' : 'Maximum 10% APR yield with transferrable Position NFT.'}
              </p>
            </button>

          </div>

          {/* LIQUID NFT POSITIONS SUPERPOWER FEATURES (4 COLUMNS) */}
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
              {isIt ? '⚡ Come funzionano le Posizioni Liquid NFT:' : '⚡ How Liquid NFT Staking Positions Work:'}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Feature 1: Automatic NFT Minting */}
              <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-amber-500/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-sm font-black text-slate-900 dark:text-white">
                  {isIt ? '1. Minting NFT Posizione' : '1. Position NFT Mint'}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {isIt
                    ? 'Lo smart contract genera un NFT rappresentativo dei tuoi $ONX in stake e lo spedisce direttamente nel tuo wallet.'
                    : 'The smart contract mints an NFT representing your staked $ONX and deposits it directly into your wallet.'}
                </p>
              </div>

              {/* Feature 2: Split position up to 10x */}
              <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-amber-500/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                  <Scissors className="w-5 h-5" />
                </div>
                <div className="text-sm font-black text-slate-900 dark:text-white">
                  {isIt ? '2. Split fino a 10 Posizioni' : '2. Split up to 10x'}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {isIt
                    ? 'Puoi frazionare una singola posizione NFT fino a 10 posizioni più piccole per una gestione ultra-flessibile.'
                    : 'Split a single position NFT into up to 10 smaller micro-positions for ultra-flexible portfolio management.'}
                </p>
              </div>

              {/* Feature 3: Sell for instant liquidity */}
              <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-amber-500/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div className="text-sm font-black text-slate-900 dark:text-white">
                  {isIt ? '3. Vendi sul Marketplace' : '3. Sell on Marketplace'}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {isIt
                    ? 'Se hai bisogno di liquidità immediata, puoi mettere in vendita le tue posizioni NFT su OOX senza attendere la scadenza!'
                    : 'If you need instant liquidity, put your staked position NFTs up for sale on OOX without waiting for lock maturity!'}
                </p>
              </div>

              {/* Feature 4: Transfer & Redeem */}
              <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-amber-500/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Send className="w-5 h-5" />
                </div>
                <div className="text-sm font-black text-slate-900 dark:text-white">
                  {isIt ? '4. Trasferisci e Riscatta' : '4. Transfer & Redeem'}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {isIt
                    ? 'Trasferisci posizioni ad altri utenti o chiudi la posizione a scadenza riscattando $ONX + rewards accumulate.'
                    : 'Transfer positions to other users or close at maturity to claim original $ONX + accumulated rewards.'}
                </p>
              </div>

            </div>
          </div>

          {/* CTA LINK TO DEPLOYED STAKING PAGE */}
          <div className="p-6 rounded-3xl bg-amber-500/10 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-900 dark:to-amber-950/40 border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-black text-slate-900 dark:text-white">
                {isIt ? 'Gestisci le tue posizioni su OOX Staking' : 'Manage your positions on OOX Staking'}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {isIt
                  ? 'Accedi a OOX per mettere in stake, splittare o trasferire le tue posizioni NFT.'
                  : 'Access OOX to stake, split, or transfer your NFT positions.'}
              </p>
            </div>

            <a
              href="https://oox.art/staking"
              target="_blank"
              rel="noreferrer"
              className="py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-black text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-lg shadow-amber-500/25 flex-shrink-0"
            >
              <span>oox.art/staking</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      )}

    </section>
  );
}
