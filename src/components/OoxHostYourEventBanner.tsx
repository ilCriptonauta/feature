'use client';

import { 
  Sparkles, 
  Send, 
  MessageSquare, 
  Wrench, 
  Users, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  Headphones
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxHostYourEventBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-cyan-500/30 overflow-hidden space-y-8 shadow-2xl">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
          <Rocket className="w-3.5 h-3.5 text-cyan-400" />
          <span>{isIt ? 'Organizza il Tuo Evento • Partner Program' : 'Host Your Event • Partner Program'}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>Organizza il tuo <span className="gradient-text-cyan-purple">prossimo evento su OOX</span></>
          ) : (
            <>Host your <span className="gradient-text-cyan-purple">next event on OOX</span></>
          )}
        </h2>

        <p className="text-sm sm:text-base font-bold text-cyan-600 dark:text-cyan-400">
          {isIt 
            ? 'Abbiamo tutti gli strumenti per creare il tuo prossimo evento su misura.' 
            : 'We have all the tools to build and power your next custom Web3 event.'}
        </p>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Che tu voglia lanciare una sfida Token Rush, una lotteria con ticket SFT, una Vending Machine o un mint personalizzato, ti diamo la nostra massima disponibilità. Contattaci direttamente per organizzare l’evento insieme a noi.'
            : 'Whether you want to launch a Token Rush trading battle, an SFT ticket lottery, a custom Vending Machine or a minting campaign, we offer 1-on-1 support. Contact us directly to plan your event together.'}
        </p>
      </div>

      {/* 3 ADVANTAGES GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        
        <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-3 shadow-lg hover:border-cyan-500/40 transition-all">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
            <Wrench className="w-5 h-5" />
          </div>
          <h3 className="text-base font-black text-slate-900 dark:text-white">
            {isIt ? 'Suite Completa di Tool' : 'Complete Tooling Suite'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Accesso completo a tutti i tool dello Studio Creator: Collezioni Mintabili, Token Rush, Lotterie ed Aste.'
              : 'Full access to all Studio Creator instruments: Mintable Collections, Token Rush, Raffles, and Auctions.'}
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-3 shadow-lg hover:border-purple-500/40 transition-all">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
            <Headphones className="w-5 h-5" />
          </div>
          <h3 className="text-base font-black text-slate-900 dark:text-white">
            {isIt ? 'Supporto & Consulenza 1-on-1' : '1-on-1 Dedicated Support'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Il nostro team ti affianca passo dopo passo nella configurazione tecnica e nella pianificazione dell’evento.'
              : 'Our team guides you step-by-step through technical setup and event campaign planning.'}
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-3 shadow-lg hover:border-amber-500/40 transition-all">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-base font-black text-slate-900 dark:text-white">
            {isIt ? 'Visibilità nella Community' : 'Community Visibility'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Metti in risalto il tuo progetto ed attiva la community di collezionisti e trader dell’ecosistema OOX.'
              : 'Spotlight your project and engage the active collector and trading community across the OOX ecosystem.'}
          </p>
        </div>

      </div>

      {/* DIRECT CONTACT BUTTONS PANEL */}
      <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-cyan-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="text-lg sm:text-xl font-black text-white">
            {isIt ? 'Pronto ad organizzare il tuo prossimo evento?' : 'Ready to build your next event?'}
          </h4>
          <p className="text-xs text-slate-300 font-medium">
            {isIt ? 'Contattaci subito su Telegram o Discord per parlarne direttamente con il team.' : 'Contact us directly on Telegram or Discord to talk with our team.'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          
          {/* Telegram Button */}
          <a
            href="https://t.me/onionxlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl bg-blue-500 hover:bg-blue-400 text-white text-xs font-extrabold flex items-center space-x-2.5 shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95"
          >
            <Send className="w-4 h-4 fill-current" />
            <span>{isIt ? 'Contattaci su Telegram' : 'Contact on Telegram'}</span>
          </a>

          {/* Discord Button */}
          <a
            href="https://discord.gg/WVSMrNzqNb"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold flex items-center space-x-2.5 shadow-lg hover:shadow-indigo-600/30 transition-all active:scale-95"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span>{isIt ? 'Parla su Discord' : 'Chat on Discord'}</span>
          </a>

        </div>
      </div>
    </section>
  );
}
