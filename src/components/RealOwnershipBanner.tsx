'use client';

import { 
  ShieldCheck, 
  Key, 
  Lock, 
  Database, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  Cpu
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function RealOwnershipBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  return (
    <section className="relative rounded-3xl p-4 sm:p-8 glass-card border border-emerald-500/30 overflow-hidden space-y-10 shadow-2xl">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* HERO INTRODUCTION - REAL OWNERSHIP FOCUS */}
      <div className="relative z-10 space-y-6 text-center sm:text-left max-w-4xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold tracking-wide">
          <Key className="w-3.5 h-3.5 text-emerald-400" />
          <span>{isIt ? 'Proprietà Reale • Real Ownership' : 'Real Ownership • Sovereign Assets'}</span>
        </div>

        <h1 className="text-2xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight break-words">
          {isIt ? (
            <>Real Ownership: <span className="gradient-text-cyan-purple">Quello che crei su OOX è realmente di tua proprietà.</span></>
          ) : (
            <>Real Ownership: <span className="gradient-text-cyan-purple">What you create on OOX is truly your property.</span></>
          )}
        </h1>

        <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'A differenza delle piattaforme tradizionali centralizzate, OOX è costruito sulla filosofia della sovranità digitale. Ogni collezione creata, ogni NFT coniato ed ogni transazione eseguita appartengono al 100% al tuo wallet sulla blockchain MultiversX.'
            : 'Unlike traditional centralized platforms, OOX is engineered on digital sovereignty. Every collection launched, every NFT minted, and every trade executed belongs 100% to your wallet on the MultiversX blockchain.'}
        </p>
      </div>

      {/* 3 CORE PILLARS OF REAL OWNERSHIP */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Pillar 1: Non-Custodial Sovereign Wallet */}
        <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-4 shadow-xl hover:border-emerald-500/40 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
            <Key className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-slate-900 dark:text-white">
            {isIt ? '100% Proprietà del Wallet' : '100% Wallet Ownership'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'I tuoi token ESDT ed i tuoi NFT risiedono direttamente nel tuo wallet personale. Nessun intermediario può congelare, sequestrare o bloccare i tuoi asset.'
              : 'Your ESDT tokens and NFTs reside directly in your personal Web3 wallet. Zero intermediaries can freeze or lock your assets.'}
          </p>
        </div>

        {/* Pillar 2: Decentralized Storage & IPFS */}
        <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-4 shadow-xl hover:border-cyan-500/40 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
            <Database className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-slate-900 dark:text-white">
            {isIt ? 'Metadati & File IPFS Indipendenti' : 'Independent IPFS Metadata'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'I file della tua collezione sono ospitati su nodi IPFS decentralizzati. Anche se OOX dovesse offline, la tua opera ed i tuoi metadati rimarranno immortali sul web.'
              : 'Your media and metadata are hosted on decentralized IPFS nodes. Even if OOX went offline, your artwork remains immortal.'}
          </p>
        </div>

        {/* Pillar 3: Zero Platform Lock-In */}
        <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-4 shadow-xl hover:border-purple-500/40 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-slate-900 dark:text-white">
            {isIt ? 'Nessun Lock-In Piattaforma' : 'Zero Platform Lock-In'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'I contratti creati tramite OOX sono standard ESDT / SFT su MultiversX: puoi trasferirli, utilizzarli o scambiarli su qualsiasi dApp o marketplace compatibile.'
              : 'Contracts built with OOX follow native MultiversX ESDT / SFT standards: you can move or trade them freely on any compatible dApp.'}
          </p>
        </div>

      </div>

      {/* CREATOR SMART CONTRACT OWNERSHIP SECTION */}
      <div className="relative z-10 space-y-8 pt-8 border-t border-black/5 dark:border-white/10">
        
        {/* HEADER */}
        <div className="text-center sm:text-left space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isIt ? 'Smart Contract Sovrani • Sovereign SC' : 'Sovereign Smart Contracts'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {isIt ? (
              <>Ogni Smart Contract creato su OOX <span className="gradient-text-cyan-purple">appartiene al creatore.</span></>
            ) : (
              <>Every Smart Contract created on OOX <span className="gradient-text-cyan-purple">belongs to the creator.</span></>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium max-w-3xl leading-relaxed">
            {isIt
              ? 'Che sia una collezione mintabile, una vending machine o una pool di staking NFT, ogni contratto aperto appartiene al 100% al creatore. OOX è unicamente lo strumento d’interfaccia che facilita l’interazione con la blockchain MultiversX.'
              : 'Whether it is a mintable collection, a vending machine, or an NFT staking pool, every contract deployed belongs 100% to the creator. OOX is purely the interface tool facilitating interaction with MultiversX SCs.'}
          </p>

          {/* MULTIVERSX HIGHEST STANDARDS & 24/7 ACCESSIBILITY GUARANTEE */}
          <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center space-x-3 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold shadow-md">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>
              {isIt
                ? 'Tutti gli smart contract sono creati rispettando tutti i massimi standard MultiversX ed accessibili in qualsiasi momento da parte dell’utente.'
                : 'All smart contracts are created adhering to the highest MultiversX standards and are accessible at any time by the user.'}
            </span>
          </div>
        </div>

        {/* 3 CONTRACT TYPE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: Mintable Collections */}
          <div className="p-6 rounded-3xl bg-slate-900/90 dark:bg-slate-950/90 border border-cyan-500/30 space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-lg">
              🎨
            </div>
            <h3 className="text-base font-black text-white">
              {isIt ? 'Collezioni Mintabili' : 'Mintable Collections'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'Il contratto di minting ed il ruolo di Owner sono attribuiti al tuo wallet. I diritti d’incasso e le royalty rimangono interamente sotto il tuo controllo.'
                : 'The minting contract and Owner role belong to your wallet. Mint proceeds and royalties stay completely under your control.'}
            </p>
          </div>

          {/* Card 2: Vending Machine */}
          <div className="p-6 rounded-3xl bg-slate-900/90 dark:bg-slate-950/90 border border-purple-500/30 space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg">
              🎰
            </div>
            <h3 className="text-base font-black text-white">
              {isIt ? 'Vending Machine' : 'Vending Machine'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'Distribuisci NFT o token in modo automatico. La Vending Machine viene distribuita on-chain con le tue regole ed il tuo indirizzo proprietario.'
                : 'Distribute NFTs or tokens automatically. The Vending Machine is deployed on-chain with your rules and your owner address.'}
            </p>
          </div>

          {/* Card 3: NFT Staking Pools */}
          <div className="p-6 rounded-3xl bg-slate-900/90 dark:bg-slate-950/90 border border-amber-500/30 space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
              🥩
            </div>
            <h3 className="text-base font-black text-white">
              {isIt ? 'Pool Staking NFT' : 'NFT Staking Pools'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'Crea pool di staking per ricompensare i tuoi holder. Il contratto della pool risponde unicamente alla tua firma di amministrazione.'
                : 'Create staking pools to reward your community. The pool contract responds exclusively to your admin signature.'}
            </p>
          </div>

        </div>

        {/* HIGHLIGHT BANNER: NESSUN ALTRO MARKETPLACE TI OFFRE UNA COSÌ ALTA PROPRIETÀ */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/90 via-slate-900 to-cyan-950/90 border border-emerald-500/50 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isIt ? 'Proprietà Inguagliabile' : 'Unrivaled Ownership'}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {isIt
                ? 'Nessun altro marketplace ti offre una così alta proprietà.'
                : 'No other marketplace offers you such high ownership.'}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl">
              {isIt
                ? 'Con OOX non sei mai vincolato ad un’infrastruttura chiusa. Possiedi gli Smart Contract, possiedi i token, possiedi il tuo futuro su MultiversX.'
                : 'With OOX you are never bound to a closed platform. You own the Smart Contracts, you own the tokens, you own your future.'}
            </p>
          </div>

          <div className="shrink-0">
            <div className="px-5 py-3 rounded-2xl bg-emerald-500 text-slate-950 font-black text-xs shadow-lg uppercase tracking-wide">
              {isIt ? '100% Sovrano' : '100% Sovereign'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
