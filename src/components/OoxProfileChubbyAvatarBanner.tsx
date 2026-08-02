'use client';

import { useState } from 'react';
import { 
  UserCheck, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Ticket, 
  Share2,
  Folder,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxProfileChubbyAvatarBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [hasChubby, setHasChubby] = useState<boolean>(true);

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-purple-500/30 overflow-hidden space-y-8 shadow-2xl">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-extrabold tracking-wide">
          <UserCheck className="w-3.5 h-3.5" />
          <span>{isIt ? 'Identità Web3 & Avatar Automatico' : 'Web3 Identity & Automatic Avatar'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>Avatar di Profilo Automatico con <span className="gradient-text-cyan-purple">CHUBBY OnionX</span></>
          ) : (
            <>Instant Profile Avatar via <span className="gradient-text-cyan-purple">CHUBBY OnionX</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Nei profili OOX non è richiesta alcuna farraginosa procedura di verifica manuale. Se l’utente possiede una CHUBBY OnionX nel proprio wallet, questa viene usata subito ed automaticamente come suo Avatar. Se non possiede alcuna CHUBBY, viene assegnata in automatico l’immagine profilo impostata su xPortal.'
            : 'OOX profiles require zero complex manual verification flows. If a user holds a CHUBBY OnionX NFT in their wallet, it is instantly and automatically set as their Avatar. If they hold no CHUBBY, their xPortal profile picture is assigned automatically.'}
        </p>
      </div>

      {/* 3 HIGHLIGHT CARDS GRID */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-purple-500/30 shadow-lg space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            {isIt ? 'CHUBBY OnionX Avatar' : 'CHUBBY OnionX Avatar'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Se possiedi una CHUBBY OnionX nel wallet, viene impostata all’istante come Avatar VIP.'
              : 'Holding a CHUBBY OnionX automatically assigns it as your VIP profile Avatar.'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-cyan-500/30 shadow-lg space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            {isIt ? 'Fallback su xPortal' : 'xPortal Avatar Fallback'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Se non possiedi una CHUBBY, viene utilizzata l’immagine profilo del tuo account xPortal.'
              : 'If you hold no CHUBBY, your xPortal profile picture is assigned automatically.'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-amber-500/30 shadow-lg space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Ticket className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            {isIt ? 'Zero Passaggi Manuali' : 'Zero Manual Steps'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Nessuna form o procedura di upload necessaria. Tutto si sincronizza on-chain in automatico.'
              : 'No manual forms or uploads needed. Everything syncs on-chain automatically.'}
          </p>
        </div>

      </div>

      {/* INTERACTIVE PROFILE AVATAR SIMULATOR CARD */}
      <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-purple-500/40 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-base font-black text-white flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>{isIt ? 'Simulatore Profilo Web3 OOX' : 'OOX Web3 Profile Simulator'}</span>
            </h3>
            <p className="text-xs text-slate-400">
              {isIt ? 'Testa l’assegnazione automatica dell’avatar con CHUBBY o xPortal' : 'Test automatic avatar assignment with CHUBBY or xPortal'}
            </p>
          </div>

          <div className="flex items-center space-x-2 p-1 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setHasChubby(true)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                hasChubby 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isIt ? 'CHUBBY nel Wallet' : 'CHUBBY in Wallet'}
            </button>
            <button
              onClick={() => setHasChubby(false)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                !hasChubby 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isIt ? 'Nessuna CHUBBY (xPortal Sync)' : 'No CHUBBY (xPortal Sync)'}
            </button>
          </div>
        </div>

        {/* PROFILE CARD PREVIEW */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-5">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
            
            {/* AVATAR DISPLAY */}
            <div className="relative shrink-0">
              <div className={`w-20 h-20 rounded-2xl p-1 bg-gradient-to-tr ${hasChubby ? 'from-amber-400 via-pink-500 to-purple-600 animate-pulse' : 'from-cyan-400 to-blue-600'} shadow-xl`}>
                <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center text-white overflow-hidden relative">
                  {hasChubby ? (
                    <img 
                      src="/chubby-avatar.jpg" 
                      alt="CHUBBY OnionX NFT" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 flex flex-col items-center justify-center p-2 text-center">
                      <UserCheck className="w-8 h-8 text-cyan-400 mb-1" />
                      <span className="text-[9px] font-black text-cyan-300 uppercase leading-none">xPortal Pic</span>
                    </div>
                  )}
                </div>
              </div>
              <div className={`absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full font-black text-[9px] border border-slate-950 shadow ${hasChubby ? 'bg-amber-400 text-slate-950' : 'bg-cyan-400 text-slate-950'}`}>
                {hasChubby ? 'CHUBBY' : 'xPortal'}
              </div>
            </div>

            {/* PROFILE INFO */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h4 className="text-lg font-black text-white">alex.erd</h4>
                {hasChubby ? (
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-black uppercase tracking-wider">
                    CHUBBY OnionX Holder 👑
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] font-extrabold uppercase tracking-wider">
                    xPortal Avatar Synced 📲
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-300 font-medium">
                {hasChubby
                  ? (isIt ? '✨ Avatar impostato automaticamente dalla CHUBBY OnionX nel tuo wallet!' : '✨ Avatar automatically assigned from the CHUBBY OnionX in your wallet!')
                  : (isIt ? '📲 Nessuna CHUBBY nel wallet: assegnata automaticamente l’immagine profilo impostata su xPortal!' : '📲 No CHUBBY in wallet: automatically assigned your xPortal profile picture!')}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
