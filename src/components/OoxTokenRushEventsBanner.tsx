'use client';

import { useState } from 'react';
import { 
  Zap, 
  Trophy, 
  Flame, 
  Coins, 
  Gift, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Medal, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxTokenRushEventsBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [activeTab, setActiveTab] = useState<'leaderboard' | 'rewards'>('leaderboard');

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-purple-500/30 overflow-hidden space-y-8 shadow-2xl">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-300 text-xs font-extrabold tracking-wide">
          <Zap className="w-3.5 h-3.5 fill-purple-400" />
          <span>{isIt ? 'Eventi Mensili OOX • Trading Challenge' : 'OOX Monthly Events • Trading Challenge'}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          TOKEN <span className="gradient-text-cyan-purple">RUSH</span> ⚡
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Gli eventi mensili di OOX in cui selezioniamo una coppia esclusiva (Token + Collezione NFT) ed invitiamo gli utenti a sfidarsi a colpi di trading per aggiudicarsi il montepremi in FEE ed i bonus dei progetti!'
            : 'OOX monthly trading challenges featuring a curated (Token + NFT Collection) pair where traders compete for 100% Marketplace Fee distribution and sponsor project prizes!'}
        </p>
      </div>

      {/* HOW TOKEN RUSH WORKS GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Step 1 */}
        <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-3 shadow-lg">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-black text-lg">
            1
          </div>
          <h3 className="text-base font-black text-slate-900 dark:text-white">
            {isIt ? 'Selezione Coppia & Progetto' : 'Curated Token & Collection Pair'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Durante ogni Token Rush selezioniamo un token ed una collezione NFT partner. Gli utenti utilizzano la coppia scelta per acquistare e scambiare NFT.'
              : 'During each Token Rush we select a partner token and NFT collection. Traders use the designated pair to list, buy, and trade NFTs.'}
          </p>
        </div>

        {/* Step 2 */}
        <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-3 shadow-lg">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-black text-lg">
            2
          </div>
          <h3 className="text-base font-black text-slate-900 dark:text-white">
            {isIt ? 'Ridistribuzione 100% FEE OOX' : '100% Marketplace Fee Split'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'OOX mette in palio il 100% delle FEE generate durante l’evento e le distribuisce ai primi 3 classificati del leaderboard (50%, 30%, 20%).'
              : 'OOX redistributes 100% of marketplace fees generated during the challenge directly to the top 3 leaderboard finishers (50%, 30%, 20%).'}
          </p>
        </div>

        {/* Step 3 */}
        <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-3 shadow-lg">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-black text-lg">
            3
          </div>
          <h3 className="text-base font-black text-slate-900 dark:text-white">
            {isIt ? 'Premi Extra dei Progetti Partner' : 'Bonus Partner Project Prizes'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Ai premi in FEE di OOX si sommano i premi esclusivi, token ed NFT messi in palio direttamente dal progetto sponsor dell’evento!'
              : 'On top of OOX fee payouts, partner projects add their own exclusive tokens, NFTs, and custom rewards to the total prize pool!'}
          </p>
        </div>

      </div>

      {/* FEE DISTRIBUTION BREAKDOWN BADGE PANEL */}
      <div className="relative z-10 p-6 rounded-3xl bg-slate-950 text-white border border-purple-500/40 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-purple-600 text-white flex items-center justify-center shadow-lg">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">
                {isIt ? 'Ripartizione Montepremi FEE OOX' : 'OOX Fee Prize Pool Breakdown'}
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                {isIt ? 'Come vengono divise le FEE del marketplace tra i vincitori' : 'How marketplace fees are distributed among winners'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'leaderboard' ? 'bg-purple-500 text-white font-black shadow' : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {isIt ? 'Leaderboard Live' : 'Live Leaderboard'}
            </button>
            <button
              onClick={() => setActiveTab('rewards')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'rewards' ? 'bg-purple-500 text-white font-black shadow' : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {isIt ? 'Regole Payout' : 'Payout Rules'}
            </button>
          </div>
        </div>

        {/* 3 WINNER PODIUM CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* 1st Place */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-500/20 to-slate-900 border border-amber-500/40 space-y-2 text-center relative overflow-hidden">
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[9px] uppercase">
              1° POSTO
            </div>
            <div className="text-3xl">🥇</div>
            <div className="text-sm font-black text-amber-300">
              {isIt ? 'Primo Vincitore' : 'First Place'}
            </div>
            <div className="text-2xl font-black text-white">
              50% <span className="text-xs font-bold text-amber-400">{isIt ? 'delle FEE' : 'of Fees'}</span>
            </div>
            <p className="text-[11px] text-slate-300 font-medium">
              {isIt ? '+ 50% dei premi extra messi in palio dal progetto' : '+ 50% of bonus project prize pool'}
            </p>
          </div>

          {/* 2nd Place */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-400/20 to-slate-900 border border-slate-400/40 space-y-2 text-center relative overflow-hidden">
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-slate-300 text-slate-950 font-black text-[9px] uppercase">
              2° POSTO
            </div>
            <div className="text-3xl">🥈</div>
            <div className="text-sm font-black text-slate-200">
              {isIt ? 'Secondo Posizionato' : 'Second Place'}
            </div>
            <div className="text-2xl font-black text-white">
              30% <span className="text-xs font-bold text-slate-300">{isIt ? 'delle FEE' : 'of Fees'}</span>
            </div>
            <p className="text-[11px] text-slate-300 font-medium">
              {isIt ? '+ 30% dei premi extra messi in palio dal progetto' : '+ 30% of bonus project prize pool'}
            </p>
          </div>

          {/* 3rd Place */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-700/20 to-slate-900 border border-amber-700/40 space-y-2 text-center relative overflow-hidden">
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-amber-600 text-white font-black text-[9px] uppercase">
              3° POSTO
            </div>
            <div className="text-3xl">🥉</div>
            <div className="text-sm font-black text-amber-400">
              {isIt ? 'Terzo Posizionato' : 'Third Place'}
            </div>
            <div className="text-2xl font-black text-white">
              20% <span className="text-xs font-bold text-amber-500">{isIt ? 'delle FEE' : 'of Fees'}</span>
            </div>
            <p className="text-[11px] text-slate-300 font-medium">
              {isIt ? '+ 20% dei premi extra messi in palio dal progetto' : '+ 20% of bonus project prize pool'}
            </p>
          </div>

        </div>

        {/* LIVE SIMULATION CONTENT */}
        {activeTab === 'leaderboard' ? (
          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold text-slate-300 flex items-center justify-between">
              <span>{isIt ? 'Coppia Attiva del Mese: $ONX + CHUBBY OnionX' : 'Active Pair of the Month: $ONX + CHUBBY OnionX'}</span>
              <span className="text-cyan-400 font-mono">Total Fee Pool: 25.0 EGLD</span>
            </div>

            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center">1</span>
                  <span className="font-extrabold text-white">0x8f...3a (Alex)</span>
                </div>
                <div className="text-right">
                  <div className="font-black text-amber-400">12.5 EGLD (50% Fee)</div>
                  <div className="text-[10px] text-slate-400">+ 2,500,000 $ONX</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded-full bg-slate-300 text-slate-950 font-black text-xs flex items-center justify-center">2</span>
                  <span className="font-extrabold text-white">0x1b...9c (Marco)</span>
                </div>
                <div className="text-right">
                  <div className="font-black text-slate-300">7.5 EGLD (30% Fee)</div>
                  <div className="text-[10px] text-slate-400">+ 1,500,000 $ONX</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-black text-xs flex items-center justify-center">3</span>
                  <span className="font-extrabold text-white">0x4e...7f (Elena)</span>
                </div>
                <div className="text-right">
                  <div className="font-black text-amber-500">5.0 EGLD (20% Fee)</div>
                  <div className="text-[10px] text-slate-400">+ 1,000,000 $ONX</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-slate-300">
            <div className="font-bold text-white mb-1">
              {isIt ? 'Come accreditiamo i premi del Token Rush:' : 'How Token Rush payouts are distributed:'}
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{isIt ? 'Al termine del mese i volumi di trading sulla coppia scelta vengono congelati e verificati on-chain.' : 'At the end of the month, trading volumes on the selected pair are frozen and verified on-chain.'}</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{isIt ? 'Le FEE accumulate da OOX vengono ripartite (50% / 30% / 20%) ed accreditate direttamente nel wallet dei vincitori.' : 'Accumulated OOX marketplace fees are split (50% / 30% / 20%) and sent directly to winners\' wallets.'}</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{isIt ? 'I premi addizionali messi in palio dal progetto partner vengono accreditati simultaneamente.' : 'Additional rewards pledged by the partner project are distributed simultaneously.'}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
