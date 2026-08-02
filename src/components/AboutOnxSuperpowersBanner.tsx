'use client';

import { useState } from 'react';
import { 
  Flame, 
  Percent, 
  Coins, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  TrendingUp,
  Vote,
  ArrowRightLeft,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkle
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function AboutOnxSuperpowersBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [activeTab, setActiveTab] = useState(0);

  const superpowers = [
    {
      id: 'vote-burn',
      badge: isIt ? 'Voto NFT & Burn Deflazionistico' : 'NFT Vote & Deflationary Burn',
      title: isIt ? 'Vota i singoli NFT con 20 $ONX' : 'Vote individual NFTs with 20 $ONX',
      icon: Flame,
      color: 'from-orange-500 via-amber-500 to-red-600',
      glow: '#f97316',
      shortDesc: isIt
        ? 'Ogni singolo NFT può essere votato dalla community al costo fisso di 20 $ONX. Lo smart contract divide automaticamente la somma: 10 $ONX vengono bruciati per sempre e 10 $ONX alimentano la pool dello staking.'
        : 'Every single NFT can be voted on by the community for a fixed cost of 20 $ONX. The smart contract automatically splits the fee: 10 $ONX are burned forever and 10 $ONX feed the staking pool.',
      metrics: [
        { label: isIt ? 'Costo Voto' : 'Vote Cost', val: '20 $ONX' },
        { label: isIt ? 'Burn Fisso' : 'Fixed Burn', val: '10 $ONX (50%)' },
        { label: isIt ? 'Pool Staking' : 'Staking Pool', val: '10 $ONX (50%)' },
      ],
    },
    {
      id: 'fees',
      badge: isIt ? 'Superpotere Economico' : 'Financial Superpower',
      title: isIt ? 'Listing al 50% delle FEE' : 'Listing at 50% OFF Fees',
      icon: Percent,
      color: 'from-cyan-400 via-blue-500 to-purple-600',
      glow: '#00f2fe',
      shortDesc: isIt
        ? 'Elenca e scambia i tuoi NFT utilizzando $ONX per beneficiare del dimezzamento immediato delle commissioni del marketplace: paghi solo lo 0.5% anziché l’1.0% di tutti gli altri token.'
        : 'List and trade your NFTs using $ONX to enjoy an instant 50% fee cut across the marketplace: pay only 0.5% instead of the standard 1.0% charged on other tokens.',
      metrics: [
        { label: isIt ? '$ONX Fee' : '$ONX Fee', val: '0.5%' },
        { label: isIt ? 'Altri Token' : 'Other Tokens', val: '1.0%' },
        { label: isIt ? 'Risparmio' : 'Net Savings', val: '-50%' },
      ],
    },
    {
      id: 'staking',
      badge: isIt ? 'Superpotere di Rendimento' : 'Yield Superpower',
      title: isIt ? 'Staking Integrato su OOX' : 'Built-in OOX Staking',
      icon: Coins,
      color: 'from-amber-400 via-orange-500 to-yellow-500',
      glow: '#f59e0b',
      shortDesc: isIt
        ? 'I 10 $ONX derivanti da ogni voto NFT confluiscono direttamente nella pool dello staking, ricompensando costantemente gli holder che mettono in cassaforte i propri token.'
        : 'The 10 $ONX from every NFT vote flow directly into the staking pool, continuously rewarding holders who vault their tokens on OOX.',
      metrics: [
        { label: isIt ? 'Flessibile' : 'Flexible', val: '4% APR' },
        { label: isIt ? 'Liquid Stake' : 'Liquid Stake', val: '6% - 10% APR' },
        { label: isIt ? 'Posizioni NFT' : 'NFT Positions', val: isIt ? 'Scambiabili' : 'Tradable' },
      ],
    },
  ];

  const currentPower = superpowers[activeTab];

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-amber-500/40 overflow-hidden space-y-8">
      {/* Ambient Background Glow */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-500"
        style={{ backgroundColor: currentPower.glow }}
      />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-extrabold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isIt ? 'Meccaniche dei Superpoteri $ONX' : '$ONX Superpower Mechanics'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>Schema Operativo dei Superpoteri di <span className="gradient-text-cyan-purple">$ONX</span></>
          ) : (
            <>Superpower Operating Diagrams of <span className="gradient-text-cyan-purple">$ONX</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {isIt
            ? 'Seleziona un superpotere a sinistra per esplorare lo schema tecnico ed il funzionamento dello smart contract in tempo reale.'
            : 'Select a superpower on the left to explore its technical diagram and smart contract execution in real time.'}
        </p>
      </div>

      {/* INTERACTIVE SUPERPOWER TABS & DISPLAY WIDGET */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
        
        {/* LEFT COLUMN: 3 SUPERPOWER TAB CARDS */}
        <div className="lg:col-span-5 space-y-3">
          {superpowers.map((power, idx) => {
            const IconComponent = power.icon;
            const isSelected = activeTab === idx;

            return (
              <button
                key={power.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 flex items-center space-x-4 ${
                  isSelected
                    ? 'bg-amber-500/10 dark:bg-amber-500/15 border-amber-500 dark:border-amber-400 shadow-md scale-102'
                    : 'glass-card border-black/5 dark:border-white/10 hover:border-amber-500/30'
                }`}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${power.color} text-white flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    {power.badge}
                  </div>
                  <div className="text-sm font-black text-slate-900 dark:text-white">
                    {power.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: DYNAMIC SCHEMA BASED ON SELECTED TAB */}
        <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-white/90 dark:bg-slate-900/90 border border-amber-500/40 shadow-2xl space-y-6">
          
          {/* Header Badge */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${currentPower.color} text-white flex items-center justify-center`}>
                <currentPower.icon className="w-4 h-4" />
              </div>
              <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                {currentPower.title}
              </span>
            </div>

            <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30">
              {isIt ? 'Smart Contract Execution' : 'Smart Contract Execution'}
            </span>
          </div>

          {/* DYNAMIC SCHEMA CONTENT */}
          {activeTab === 0 && (
            /* TAB 0: VOTE & BURN 50/50 SCHEMA */
            <div className="space-y-4 animate-fadeIn">
              
              {/* INPUT VOTE COST */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 font-black text-xs flex items-center justify-center border border-amber-500/30">
                    <Vote className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900 dark:text-white">
                      {isIt ? '1 Voto su Singolo NFT' : '1 Vote on Individual NFT'}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      {isIt ? 'Costo fisso per ogni interazione' : 'Fixed cost per interaction'}
                    </div>
                  </div>
                </div>
                
                <div className="text-sm font-black text-amber-600 dark:text-amber-400 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  20 $ONX
                </div>
              </div>

              {/* ARROW DIVISION INDICATOR */}
              <div className="flex items-center justify-center space-x-2 text-[11px] font-extrabold text-cyan-600 dark:text-cyan-400">
                <ArrowRightLeft className="w-4 h-4 text-cyan-500 rotate-90 sm:rotate-0" />
                <span>{isIt ? 'Divisione Automatica dallo Smart Contract' : 'Automatic Smart Contract 50/50 Split'}</span>
              </div>

              {/* 50/50 OUTPUT CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Output 1: 10 ONX BURNED */}
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 space-y-1.5 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-bold text-red-700 dark:text-red-400">
                    <div className="flex items-center space-x-1.5">
                      <Flame className="w-4 h-4 text-orange-500" />
                      <span>{isIt ? '50% Bruciato' : '50% Burned'}</span>
                    </div>
                    <span className="font-black text-slate-900 dark:text-white">10 $ONX</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug font-medium">
                    {isIt ? 'Bruciati per sempre per ridurre la supply totale' : 'Burned forever to decrease total supply'}
                  </p>
                </div>

                {/* Output 2: 10 ONX STAKING POOL */}
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1.5 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    <div className="flex items-center space-x-1.5">
                      <Coins className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>{isIt ? '50% Staking Pool' : '50% Staking Pool'}</span>
                    </div>
                    <span className="font-black text-slate-900 dark:text-white">10 $ONX</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug font-medium">
                    {isIt ? 'Tornano nella pool per ricompensare gli staker' : 'Refill pool to reward stakers'}
                  </p>
                </div>

              </div>

            </div>
          )}

          {activeTab === 1 && (
            /* TAB 1: 50% FEE DISCOUNT SCHEMA */
            <div className="space-y-4 animate-fadeIn">
              
              <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                {isIt 
                  ? 'Confronto diretto delle commissioni applicate dallo Smart Contract di OOX durante il listing degli NFT:'
                  : 'Direct fee comparison executed by OOX Smart Contract during NFT listing:'}
              </div>

              {/* FEE COMPARISON GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Standard Token Fee */}
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2 opacity-80">
                  <div className="text-[10px] font-extrabold uppercase text-slate-500 dark:text-slate-400">
                    {isIt ? 'Altri Token (EGLD, USDC)' : 'Other Tokens (EGLD, USDC)'}
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-slate-300">
                    1.0%
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {isIt ? 'Commissione standard di vendita' : 'Standard listing fee'}
                  </div>
                </div>

                {/* ONX Token Fee */}
                <div className="p-4 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500 dark:border-cyan-400 space-y-2 relative overflow-hidden shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-cyan-700 dark:text-cyan-400 tracking-wider">
                      {isIt ? 'Listing con $ONX' : 'Listing with $ONX'}
                    </span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-400/30">
                      -50% OFF
                    </span>
                  </div>
                  
                  <div className="text-3xl font-black text-cyan-600 dark:text-cyan-300">
                    0.5%
                  </div>
                  
                  <div className="text-[11px] text-cyan-700 dark:text-cyan-200 font-semibold">
                    {isIt ? 'Sconto automatico immediato' : 'Instant automatic discount'}
                  </div>
                </div>

              </div>

              {/* SAVINGS HIGHLIGHT */}
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 text-cyan-700 dark:text-cyan-300 font-bold">
                  <Zap className="w-4 h-4 text-cyan-500" />
                  <span>{isIt ? 'Risparmio netto garantito' : 'Guaranteed net savings'}</span>
                </div>
                <span className="font-black text-cyan-600 dark:text-cyan-400 text-sm">
                  {isIt ? '50% in meno su ogni vendita' : '50% off every trade'}
                </span>
              </div>

            </div>
          )}

          {activeTab === 2 && (
            /* TAB 2: INTEGRATED STAKING SCHEMA */
            <div className="space-y-4 animate-fadeIn">
              
              <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                {isIt 
                  ? 'Flusso di rendimento dello Staking Vault integrato di OOX:'
                  : 'Yield flow of the integrated OOX Staking Vault:'}
              </div>

              {/* STAKING VAULT FLOW */}
              <div className="space-y-3">
                
                {/* Step 1: Deposit $ONX */}
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 font-black flex items-center justify-center border border-amber-500/30">
                      1
                    </div>
                    <div>
                      <div className="font-black text-slate-900 dark:text-white">{isIt ? 'Deposita i tuoi $ONX in Vault' : 'Deposit $ONX in Vault'}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">{isIt ? 'Staking flessibile senza lockup rigidi' : 'Flexible staking with no rigid lockup'}</div>
                    </div>
                  </div>
                  <Lock className="w-4 h-4 text-amber-500" />
                </div>

                {/* Step 2: Continuous Refill from Votes */}
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black flex items-center justify-center border border-emerald-500/30">
                      2
                    </div>
                    <div>
                      <div className="font-black text-emerald-700 dark:text-emerald-300">{isIt ? 'Alimentazione continua della Pool' : 'Continuous Pool Refill'}</div>
                      <div className="text-[10px] text-emerald-800 dark:text-emerald-200/80">{isIt ? '+10 $ONX confluiscono da OGNI voto NFT' : '+10 $ONX flow from EVERY NFT vote'}</div>
                    </div>
                  </div>
                  <Coins className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>

                {/* Step 3: APR Yield & Rewards */}
                <div className="p-3.5 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500 dark:border-amber-400 flex items-center justify-between text-xs shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white font-black flex items-center justify-center shadow-md">
                      3
                    </div>
                    <div>
                      <div className="font-black text-amber-700 dark:text-amber-300">{isIt ? 'Guadagni APR Passivo + Rewards' : 'Earn Passive APR + Rewards'}</div>
                      <div className="text-[10px] text-amber-800 dark:text-amber-200/80">{isIt ? 'Ricompense quotidiane dallo Staking Vault' : 'Daily rewards from Staking Vault'}</div>
                    </div>
                  </div>
                  <TrendingUp className="w-4 h-4 text-amber-500" />
                </div>

              </div>

            </div>
          )}

          {/* Protection Trust Badge */}
          <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium pt-2 border-t border-slate-200 dark:border-white/10">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>
              {isIt ? 'Esecuzione 100% Trustless verificata su MultiversX' : '100% Trustless Execution verified on MultiversX'}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
