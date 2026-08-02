'use client';

import { useState } from 'react';
import { 
  FolderKanban, 
  Sparkles, 
  Globe, 
  Image as ImageIcon, 
  Share2, 
  Coins, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  PlusCircle,
  Layout
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxManageCollectionsStakingBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [activeTab, setActiveTab] = useState<'overview' | 'staking'>('overview');

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-cyan-500/30 overflow-hidden space-y-8">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
          <FolderKanban className="w-3.5 h-3.5" />
          <span>{isIt ? 'Studio Creator Hub' : 'Studio Creator Hub'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>Manage Collections <span className="gradient-text-cyan-purple">& Staking</span></>
          ) : (
            <>Manage Collections <span className="gradient-text-cyan-purple">& Staking</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Il fulcro per personalizzare le tue collezioni con Banner, Logo e canali Social. Crea la tua pagina Overview completa ed attiva le tue Pool di Staking on-chain.'
            : 'The core hub to customize your collections with Banner, Logo, and Social channels. Build your custom Overview page and launch on-chain Staking Pools.'}
        </p>
      </div>

      {/* 2 MAIN PILLARS GRID */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* PILLAR 1: COLLECTION CUSTOMIZER & OVERVIEW BUILDER */}
        <div 
          onClick={() => setActiveTab('overview')}
          className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer space-y-4 ${
            activeTab === 'overview'
              ? 'bg-white dark:bg-slate-900 border-cyan-500 dark:border-cyan-400 shadow-xl scale-[1.01]'
              : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-white/10 hover:border-cyan-500/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 text-white flex items-center justify-center shadow-lg">
              <Layout className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">
              {isIt ? 'Pagina Overview' : 'Overview Builder'}
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              {isIt ? 'Personalizzazione & Pagina Overview' : 'Collection Customizer & Overview Page'}
            </h3>
            <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
              {isIt ? 'Sei privo di un sito web per la tua collezione?' : 'Lacking a website for your collection?'}
            </p>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'La pagina Overview di OOX è uno strumento completo che ti permette di presentare la tua collezione al meglio. Aggiungi Banner, Logo, informazioni, link Social (Twitter/Discord) e vetrina live degli asset.'
              : 'The OOX Overview page is a comprehensive tool allowing you to showcase your collection in the best way. Upload Banner, Logo, descriptions, Social links (Twitter/Discord), and live asset showcase.'}
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isIt ? 'Personalizza Logo, Banner e Social' : 'Customize Logo, Banner, and Social links'}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isIt ? 'Vetrina d’impatto senza bisogno di hosting esterno' : 'High-impact landing without external hosting'}</span>
            </div>
          </div>
        </div>

        {/* PILLAR 2: STAKING POOL CREATION (2 EGLD FEE) */}
        <div 
          onClick={() => setActiveTab('staking')}
          className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer space-y-4 ${
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
              {isIt ? 'Costo: 2 EGLD' : 'Cost: 2 EGLD'}
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              {isIt ? 'Creazione Staking Pool' : 'Staking Pool Creation'}
            </h3>
            <p className="text-xs font-bold text-purple-600 dark:text-purple-400">
              {isIt ? 'Premia i tuoi holders con qualsiasi token' : 'Reward your holders with any token'}
            </p>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Accedi alla creazione delle tue pool di staking on-chain. Puoi distribuire qualsiasi token supportato da OOX ai tuoi holders. La creazione di ogni pool ha un costo fisso trasparente di 2 EGLD.'
              : 'Access on-chain staking pool creation. Distribute any OOX-supported token to your holders. The creation of each pool has a transparent fixed cost of 2 EGLD.'}
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isIt ? 'Costo fisso di creazione: 2 EGLD per Pool' : 'Fixed creation fee: 2 EGLD per Pool'}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isIt ? 'Supporta tutte e 3 le meccaniche di reward' : 'Supports all 3 reward pool mechanics'}</span>
            </div>
          </div>
        </div>

      </div>

      {/* MOCKUP DISPLAY FOR THE SELECTED TAB */}
      <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-cyan-500/40 shadow-2xl space-y-6">
        {activeTab === 'overview' ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <ImageIcon className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-extrabold text-white">
                  {isIt ? 'Anteprima Editor Pagina Overview Collezione' : 'Collection Overview Page Editor Preview'}
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
                No Code Required
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] text-slate-400 font-bold uppercase">{isIt ? '1. Brand Assets' : '1. Brand Assets'}</div>
                <div className="font-semibold text-white">{isIt ? 'Carica Banner (16:9) e Logo' : 'Upload Banner (16:9) & Logo'}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] text-slate-400 font-bold uppercase">{isIt ? '2. Social & Links' : '2. Social & Links'}</div>
                <div className="font-semibold text-white">{isIt ? 'Twitter, Discord, Website' : 'Twitter, Discord, Website'}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] text-slate-400 font-bold uppercase">{isIt ? '3. Vetrina Live' : '3. Live Showcase'}</div>
                <div className="font-semibold text-white">{isIt ? 'Ranking & Floor Price' : 'Ranking & Floor Price'}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <Coins className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-extrabold text-white">
                  {isIt ? 'Configuratore Staking Pool (Fee: 2 EGLD)' : 'Staking Pool Configurator (Fee: 2 EGLD)'}
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold">
                Smart Contract Deployer
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div>
                <div className="font-black text-white text-sm">
                  {isIt ? 'Costo di Creazione Pool: 2 EGLD' : 'Pool Creation Fee: 2 EGLD'}
                </div>
                <div className="text-slate-300 text-[11px]">
                  {isIt ? 'Costo una tantum per il deploy del contratto intelligente su MultiversX' : 'One-time smart contract deployment cost on MultiversX'}
                </div>
              </div>
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-extrabold text-xs shadow hover:opacity-95 shrink-0">
                {isIt ? 'Crea Staking Pool (2 EGLD)' : 'Create Staking Pool (2 EGLD)'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
