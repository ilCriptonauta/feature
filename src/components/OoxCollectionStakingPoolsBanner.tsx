'use client';

import { useState } from 'react';
import { 
  Sparkles, 
  Coins, 
  Settings2, 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  CheckCircle2, 
  Lock, 
  Sliders,
  Gift,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxCollectionStakingPoolsBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [selectedPoolType, setSelectedPoolType] = useState<'fixed' | 'decreasing' | 'inverse'>('fixed');

  const poolMechanics = [
    {
      id: 'fixed',
      badge: 'Default',
      badgeStyle: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      icon: Lock,
      title: {
        it: 'Fixed Rewards (Ricompense Fisse)',
        en: 'Fixed Rewards'
      },
      subtitle: {
        it: 'Ogni NFT guadagna sempre la stessa quantità al secondo, indipendentemente dal totale in stake.',
        en: 'Each NFT always earns the same amount per second, regardless of total staked.'
      },
      example: {
        it: 'Esempio: 0.01 token/sec per NFT × sempre = APY Costante',
        en: 'Example: 0.01 tokens/sec per NFT × always = consistent APY'
      },
      useCase: {
        it: 'Ideale per progetti che vogliono offrire un rendimento stabile e prevedibile.',
        en: 'Ideal for projects looking for predictable, stable reward distribution.'
      }
    },
    {
      id: 'decreasing',
      badge: 'Dynamic',
      badgeStyle: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
      icon: TrendingDown,
      title: {
        it: 'Variable Rewards - Decreasing (Ricompensa Decrescente)',
        en: 'Variable Rewards (Decreasing)'
      },
      subtitle: {
        it: 'Le ricompense per NFT diminuiscono all’aumentare degli NFT messi in stake. I primi staker guadagnano di più.',
        en: 'Rewards per NFT decrease as more NFTs stake. Early stakers earn more.'
      },
      example: {
        it: 'Esempio: 1 NFT = 0.1/sec ➔ 100 NFT = 0.001/sec ciascuno',
        en: 'Example: 1 NFT = 0.1/sec ➔ 100 NFTs = 0.001/sec each'
      },
      useCase: {
        it: 'Perfetto per premiare l’early adoption ed incentivare lo staking immediato.',
        en: 'Perfect to reward early adopters and incentivize instant staking.'
      }
    },
    {
      id: 'inverse',
      badge: 'Community Boost',
      badgeStyle: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30',
      icon: TrendingUp,
      title: {
        it: 'Inverse Variable Rewards (Ricompensa Inversa Boost)',
        en: 'Inverse Variable Rewards'
      },
      subtitle: {
        it: 'Le ricompense per NFT aumentano man mano che più NFT vengono messi in stake. Incentiva la partecipazione di massa!',
        en: 'Rewards per NFT increase as more NFTs stake. Incentivizes mass participation!'
      },
      example: {
        it: 'Esempio: 10% in stake = 0.001/sec ➔ 100% in stake = 0.01/sec ciascuno (10× Boost)',
        en: 'Example: 10% staked = 0.001/sec ➔ 100% staked = 0.01/sec each (10× Boost)'
      },
      useCase: {
        it: 'Ideale per unire la community e spingere l’intera collezione allo staking totale.',
        en: 'Ideal to rally the community and push the whole collection towards max staking.'
      }
    }
  ];

  const currentMechanic = poolMechanics.find(m => m.id === selectedPoolType) || poolMechanics[0];

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-cyan-500/30 overflow-hidden space-y-8">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
          <Settings2 className="w-3.5 h-3.5" />
          <span>{isIt ? 'Suite per Proprietari di Collezioni' : 'Collection Owners Suite'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>Crea e Configura le tue <span className="gradient-text-cyan-purple">Pool di Stake NFT</span></>
          ) : (
            <>Create and Configure your <span className="gradient-text-cyan-purple">NFT Staking Pools</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'I proprietari delle collezioni possono configurare facilmente le proprie pool di stake personalizzate ed in totale autonomia. Distruibuisci qualsiasi token supportato da OOX ($ONX, EGLD, USDC, BONEZ, RARE, TIME, DNA, EAPES, etc.) ai tuoi holders.'
            : 'Collection owners can easily create custom NFT staking pools autonomously. Distribute any OOX-supported token ($ONX, EGLD, USDC, BONEZ, RARE, TIME, DNA, EAPES, etc.) directly to your collection holders.'}
        </p>
      </div>

      {/* KEY BENEFIT HIGHLIGHTS */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-cyan-500/30 flex items-center space-x-3 shadow">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-900 dark:text-white">
              {isIt ? 'Distribuisci Qualsiasi Token' : 'Distribute Any Token'}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              $ONX, EGLD, USDC, BONEZ...
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-purple-500/30 flex items-center space-x-3 shadow">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-900 dark:text-white">
              {isIt ? 'Configuratore Avanzato' : 'Advanced Configurator'}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              {isIt ? 'Setup in pochi click' : 'Setup in a few clicks'}
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-emerald-500/30 flex items-center space-x-3 shadow">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-900 dark:text-white">
              {isIt ? 'Smart Contract Sicuri' : 'Secured Smart Contracts'}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              {isIt ? 'Esecuzione 100% On-Chain' : '100% On-Chain Execution'}
            </div>
          </div>
        </div>

      </div>

      {/* 3 STAKING POOL MECHANICS DISPLAY (MATCHING THE ATTACHMENT) */}
      <div className="relative z-10 space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight flex items-center space-x-2">
            <Coins className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
            <span>{isIt ? 'Le 3 Tipologie di Pool Supportate' : '3 Supported Staking Pool Types'}</span>
          </h3>
        </div>

        {/* LIST OF THE 3 STAKING MECHANICS */}
        <div className="space-y-3">
          {poolMechanics.map((mechanic) => {
            const MechanicIcon = mechanic.icon;
            const isSelected = selectedPoolType === mechanic.id;
            return (
              <div
                key={mechanic.id}
                onClick={() => setSelectedPoolType(mechanic.id as any)}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-emerald-500 dark:border-emerald-400 shadow-xl scale-[1.01]'
                    : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-white/10 hover:border-emerald-500/40 opacity-90 hover:opacity-100'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0">
                      <MechanicIcon className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                      {mechanic.title[language]}
                    </h4>
                  </div>

                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${mechanic.badgeStyle}`}>
                    {mechanic.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-2">
                  {mechanic.subtitle[language]}
                </p>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs italic font-semibold text-emerald-600 dark:text-emerald-400">
                  {mechanic.example[language]}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
