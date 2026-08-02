'use client';

import { useState } from 'react';
import { 
  Crown, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  ExternalLink, 
  Coins, 
  Flame, 
  Zap, 
  Users, 
  Award,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Sliders,
  Star
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxOurCollectionsBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [activeFilter, setActiveFilter] = useState<'all' | 'genesis' | 'utility' | 'avatars'>('all');

  const collections = [
    {
      id: 'onionxcards',
      category: 'genesis',
      name: 'OnionXCards',
      ticker: 'ONXCRDS',
      identifier: 'ONXCRDS-ab712e',
      type: 'SFT',
      badge: isIt ? 'Collezione SFT' : 'SFT Collection',
      verified: true,
      floorPrice: '1.8 EGLD',
      volume: '1,850 EGLD',
      items: '98 SFTs',
      holders: '1,146',
      explorerUrl: 'https://explorer.multiversx.com/collections/ONXCRDS-ab712e',
      websiteUrl: 'https://oni0nx.com/onionxcards/',
      openRarityRank: '#1 SFT',
      description: isIt 
        ? 'La collezione ufficiale di SFT (Semi-Fungible Tokens) dell’ecosistema OOX su MultiversX. Carte collezionabili uniche disegnate a mano e divise in 10 Deck, con rarità Open Rarity e meccanica Burnable 🔥 per riscuotere ricompense.'
        : 'The official SFT (Semi-Fungible Tokens) collection of the OOX ecosystem on MultiversX. Unique hand-drawn trading cards across 10 Decks featuring Open Rarity scores and Burnable 🔥 mechanics to claim rewards.',
      perks: [
        isIt ? 'Collezione SFT (Semi-Fungible Tokens)' : 'SFT Collection (Semi-Fungible Tokens)',
        isIt ? '1,146 Holders & 98 Card Uniche in 10 Deck' : '1,146 Holders & 98 Unique Cards in 10 Decks',
        isIt ? 'Meccanica Burnable 🔥 per riscuotere Reward' : 'Burnable 🔥 Mechanics to claim Rewards',
        isIt ? 'Ranking Certificato Open Rarity su OOX' : 'Certified Open Rarity Ranking on OOX',
      ],
      gradient: 'from-purple-500 via-cyan-400 to-emerald-400',
      glow: '#a855f7',
    },
    {
      id: 'chubbyonionx',
      category: 'avatars',
      name: 'ChubbyOnionX',
      ticker: 'CHBONX',
      identifier: 'CHBONX-3e0201',
      badge: isIt ? 'Collezione di Punta • Pass OOX+' : 'Flagship Collection • OOX+ Pass',
      verified: true,
      floorPrice: '1.2 EGLD',
      volume: '890 EGLD',
      items: '333 NFTs',
      holders: '150',
      marketplaceUrl: 'https://oox.art/marketplace/collections/CHBONX-3e0201',
      explorerUrl: 'https://explorer.multiversx.com/collections/CHBONX-3e0201',
      openRarityRank: '#1 NFT',
      description: isIt
        ? 'La nostra collezione di punta dell’ecosistema OOX. 333 avatar PFP unici: ogni ChubbyOnionX nel tuo wallet è un PASS A VITA per OOX+, sblocca il ruolo CHUBBER Club su Discord e garantisce ricompense ed airdrop mensili.'
        : 'Our flagship collection of the OOX ecosystem. 333 cute PFP avatars: holding a ChubbyOnionX in your wallet is a LIFETIME PASS for OOX+, unlocking the CHUBBER Club Discord role and monthly rewards.',
      perks: [
        isIt ? 'PASS A VITA per OOX+ & Benefit VIP' : 'LIFETIME PASS for OOX+ & VIP Perks',
        isIt ? 'Ruolo CHUBBER Club su Discord' : 'CHUBBER Club Role on Discord',
        isIt ? 'Premiazione Mensile & Airdrop Token' : 'Monthly Prizes & Token Airdrops',
        isIt ? '150 Holders & 333 NFT Unici su MultiversX' : '150 Holders & 333 Unique NFTs on MultiversX',
      ],
      gradient: 'from-pink-500 via-purple-500 to-cyan-400',
      glow: '#ec4899',
    },
    {
      id: 'onionxlabs-pass',
      category: 'utility',
      name: 'OnionXLabs Builder Pass',
      ticker: 'OXL PASS',
      badge: isIt ? 'Pass per Creator' : 'Creator Pass',
      verified: true,
      floorPrice: '2.8 EGLD',
      volume: '620 EGLD',
      items: 500,
      holders: 390,
      openRarityRank: '#3',
      description: isIt
        ? 'Pass di utilità per progetti, brand e creator. Permette di lanciare collezioni con lo Studio Creator OOX a costo zero e di accedere al supporto diretto degli sviluppatori OnionXLabs.'
        : 'Utility pass for projects, brands, and creators. Launch collections via OOX Creator Studio at zero upfront fee and access direct OnionXLabs dev support.',
      perks: [
        isIt ? 'Launchpad Studio a costo zero' : 'Zero-cost Studio Launchpad',
        isIt ? 'Smart contract Rust dedicati' : 'Custom Rust Smart Contracts',
        isIt ? 'Canale Discord Dev VIP' : 'VIP Dev Discord Channel',
      ],
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
      glow: '#06b6d4',
    },
    {
      id: 'cyber-samurai',
      category: 'genesis',
      name: 'Cyber Samurai MultiversX',
      ticker: 'CYBERSAM',
      badge: isIt ? 'High Rarity Art' : 'High Rarity Art',
      verified: true,
      floorPrice: '3.1 EGLD',
      volume: '1,120 EGLD',
      items: 2222,
      holders: 950,
      openRarityRank: '#4',
      description: isIt
        ? 'Collezione artistica d’avanguardia ispirata al movimento cyberpunk. Integra il sistema di calcolo rarità Open Rarity ed il ranking nativo di MultiversX.'
        : 'Cutting-edge digital art collection inspired by the cyberpunk movement. Fully integrated with Open Rarity ranking and MultiversX custom ranks.',
      perks: [
        isIt ? 'Ranking Open Rarity Certificato' : 'Certified Open Rarity Ranking',
        isIt ? 'Mercato di scambio Royalty Share' : 'Royalty Share Marketplace',
        isIt ? 'Accesso Token-Gated Livestream' : 'Token-Gated Livestream Access',
      ],
      gradient: 'from-amber-400 via-orange-500 to-rose-500',
      glow: '#f59e0b',
    },
  ];

  const filtered = activeFilter === 'all' 
    ? collections 
    : collections.filter(c => c.category === activeFilter);

  return (
    <section className="relative rounded-3xl p-4 sm:p-8 glass-card border border-purple-500/30 overflow-hidden space-y-10 shadow-2xl">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* HERO INTRODUCTION */}
      <div className="relative z-10 space-y-4 text-center sm:text-left max-w-4xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-xs font-extrabold tracking-wide">
          <Crown className="w-3.5 h-3.5 text-purple-400" />
          <span>{isIt ? 'Collezioni Ufficiali • OOX Ecosystem' : 'Official Collections • OOX Ecosystem'}</span>
        </div>

        <h1 className="text-2xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight break-words">
          {isIt ? (
            <>Our Collections: <span className="gradient-text-cyan-purple">Le collezioni ufficiali di OOX.</span></>
          ) : (
            <>Our Collections: <span className="gradient-text-cyan-purple">Official OOX Ecosystem Collections.</span></>
          )}
        </h1>

        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Scopri l’eccellenza dell’arte digitale e dell’utilità Web3 su rete MultiversX. Ogni collezione dell’ecosistema OOX è sviluppata con smart contract auditati in Rust, calcolo rarità certificato Open Rarity e staking pool per ricompensare la community.'
            : 'Experience digital art and Web3 utility on the MultiversX Network. Every official OOX collection is built with audited Rust smart contracts, certified Open Rarity scores, and community staking pools.'}
        </p>
      </div>

      {/* STATS OVERVIEW HIGHLIGHTS */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 rounded-2xl glass-card border border-cyan-500/20 text-center space-y-1">
          <div className="text-xl sm:text-3xl font-black gradient-text-cyan-purple">4</div>
          <div className="text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
            {isIt ? 'Collezioni Live' : 'Live Collections'}
          </div>
        </div>
        <div className="p-4 rounded-2xl glass-card border border-purple-500/20 text-center space-y-1">
          <div className="text-xl sm:text-3xl font-black text-purple-500 dark:text-purple-400">7,055</div>
          <div className="text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
            {isIt ? 'NFT Totali Mintati' : 'Total Minted NFTs'}
          </div>
        </div>
        <div className="p-4 rounded-2xl glass-card border border-emerald-500/20 text-center space-y-1">
          <div className="text-xl sm:text-3xl font-black text-emerald-500 dark:text-emerald-400">4,080 EGLD</div>
          <div className="text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
            {isIt ? 'Volume di Scambio' : 'Total Trading Volume'}
          </div>
        </div>
        <div className="p-4 rounded-2xl glass-card border border-amber-500/20 text-center space-y-1">
          <div className="text-xl sm:text-3xl font-black text-amber-500 dark:text-amber-400">Open Rarity</div>
          <div className="text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
            {isIt ? 'Standard Rarità' : 'Rarity Standard'}
          </div>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="relative z-10 flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeFilter === 'all'
              ? 'bg-purple-600 text-white shadow-glow-purple'
              : 'glass-card text-slate-600 dark:text-slate-300 hover:text-white'
          }`}
        >
          {isIt ? 'Tutte le Collezioni' : 'All Collections'}
        </button>
        <button
          onClick={() => setActiveFilter('genesis')}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeFilter === 'genesis'
              ? 'bg-purple-600 text-white shadow-glow-purple'
              : 'glass-card text-slate-600 dark:text-slate-300 hover:text-white'
          }`}
        >
          Genesis & Pass
        </button>
        <button
          onClick={() => setActiveFilter('avatars')}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeFilter === 'avatars'
              ? 'bg-purple-600 text-white shadow-glow-purple'
              : 'glass-card text-slate-600 dark:text-slate-300 hover:text-white'
          }`}
        >
          Avatars & PFP
        </button>
        <button
          onClick={() => setActiveFilter('utility')}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeFilter === 'utility'
              ? 'bg-purple-600 text-white shadow-glow-purple'
              : 'glass-card text-slate-600 dark:text-slate-300 hover:text-white'
          }`}
        >
          Creator & Utilities
        </button>
      </div>

      {/* COLLECTIONS DISPLAY GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((col) => (
          <div 
            key={col.id}
            className="group rounded-3xl glass-card p-5 sm:p-6 border border-black/5 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl"
          >
            <div className="space-y-4">
              
              {/* TOP CARD HEADER */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {col.name}
                    </h3>
                    {col.verified && (
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                      ${col.ticker}
                    </span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {col.badge}
                    </span>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-amber-500/30 text-amber-400 text-xs font-black flex items-center space-x-1 shrink-0">
                  <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                  <span>{col.openRarityRank}</span>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {col.description}
              </p>

              {/* METRICS ROW */}
              <div className="grid grid-cols-4 gap-1.5 p-3 rounded-2xl bg-slate-900/60 border border-white/5 text-center">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">{isIt ? 'Floor' : 'Floor'}</div>
                  <div className="text-xs font-black text-cyan-400 mt-0.5">{col.floorPrice}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">{isIt ? 'Holders' : 'Holders'}</div>
                  <div className="text-xs font-black text-emerald-400 mt-0.5">{col.holders}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">{isIt ? 'Volume' : 'Volume'}</div>
                  <div className="text-xs font-black text-purple-400 mt-0.5">{col.volume}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">{isIt ? 'Items' : 'Items'}</div>
                  <div className="text-xs font-black text-slate-200 mt-0.5">{col.items}</div>
                </div>
              </div>

              {/* PERKS / HOLDER UTILITY LIST */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                  {isIt ? 'Benefit per gli Holder:' : 'Holder Perks:'}
                </div>
                <div className="space-y-1.5">
                  {col.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-300">
                      <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ACTION CTAS */}
            <div className="space-y-2 pt-2">
              {col.explorerUrl && (
                <a
                  href={col.explorerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl glass-card hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 font-bold text-xs flex items-center justify-center space-x-2 transition-all active:scale-95"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{isIt ? 'Vedi su MultiversX Explorer' : 'View on MultiversX Explorer'}</span>
                </a>
              )}
              <a
                href={col.marketplaceUrl || 'https://oox.art'}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white font-extrabold text-xs flex items-center justify-center space-x-2 shadow-glow-cyan hover:opacity-95 transition-all active:scale-95"
              >
                <span>{isIt ? 'Esplora Collezione su OOX.art' : 'Explore Collection on OOX.art'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
