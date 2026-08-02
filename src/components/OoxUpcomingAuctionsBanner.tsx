'use client';

import { useState } from 'react';
import { 
  Gavel, 
  Sparkles, 
  Clock, 
  Flame, 
  ShieldCheck, 
  Zap, 
  Eye, 
  BellRing,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxUpcomingAuctionsBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [subscribed, setSubscribed] = useState<boolean>(false);

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-amber-500/30 overflow-hidden space-y-8 shadow-2xl">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* TOP SPOILER TEASER BADGE */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-300 text-xs font-extrabold tracking-wide">
          <Clock className="w-3.5 h-3.5 animate-spin text-amber-500" />
          <span>{isIt ? 'Evento in Arrivo • Teaser & Spoiler' : 'Upcoming Event • Teaser & Spoiler'}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>Le Aste, <span className="gradient-text-cyan-purple">come non le hai mai viste.</span></>
          ) : (
            <>Auctions, <span className="gradient-text-cyan-purple">like you’ve never seen them before.</span></>
          )}
        </h2>

        <p className="text-sm sm:text-base font-bold text-amber-600 dark:text-amber-400">
          {isIt 
            ? 'Siamo quasi pronti a rivoluzionare anche il mondo delle aste Web3.' 
            : 'We are almost ready to revolutionize Web3 auctions as well.'}
        </p>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Un format d’asta di nuova generazione pensato per garantire la massima fluidità, trasparenza e partecipazione. Una nuova meccanica di rilanci ad alta velocità che trasformerà ogni evento in un’esperienza adrenalinica.'
            : 'A next-generation auction format designed for maximum liquidity, transparency, and excitement. High-speed bidding dynamics that will transform every event into a thrilling Web3 experience.'}
        </p>
      </div>

      {/* TEASER CARDS GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        
        <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-3 shadow-lg relative overflow-hidden group hover:border-amber-500/40 transition-all">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <Gavel className="w-5 h-5" />
          </div>
          <h3 className="text-base font-black text-slate-900 dark:text-white">
            {isIt ? 'Meccanica di Asta Adrenalinica' : 'Adrenaline Bidding Engine'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Rilanci in tempo reale con notifiche istantanee ed una struttura di gara pensata per valorizzare ogni singolo NFT.'
              : 'Real-time bidding with instant notifications and competitive structures engineered to maximize NFT value.'}
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-3 shadow-lg relative overflow-hidden group hover:border-cyan-500/40 transition-all">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-black text-slate-900 dark:text-white">
            {isIt ? 'Protezione Anti-Snipe On-Chain' : 'On-Chain Anti-Snipe Shield'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Nessuno bot potrà rubare le aste all’ultimo secondo. Estensioni automatiche e regole trasparenti su smart contract.'
              : 'No last-second bot snipes. Automated smart-contract time extensions ensuring fair competition for all bidders.'}
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-3 shadow-lg relative overflow-hidden group hover:border-purple-500/40 transition-all">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-base font-black text-slate-900 dark:text-white">
            {isIt ? 'Sblocco Istantaneo della Liquidità' : 'Instant Liquidity Unlocks'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Se la tua offerta viene superata, i tuoi fondi vengono rilasciati istantaneamente nel tuo wallet senza attese.'
              : 'Outbid funds are released back to your wallet instantly with zero delays or locked funds.'}
          </p>
        </div>

      </div>

      {/* MYSTERY PREVIEW SPOILER BOX */}
      <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-amber-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-0.5 shadow-xl shrink-0">
            <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center text-amber-400">
              <Lock className="w-6 h-6 animate-pulse" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-black text-amber-400 uppercase tracking-widest">COMING SOON</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                {isIt ? 'In Sviluppo' : 'In Development'}
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-black text-white">
              {isIt ? 'La nuova era delle Aste Web3 su MultiversX' : 'The New Era of Web3 Auctions on MultiversX'}
            </h4>
            <p className="text-xs text-slate-300 font-medium">
              {isIt ? 'Rimani connesso. L’annuncio ufficiale del lancio è sempre più vicino!' : 'Stay tuned. The official release launch announcement is just around the corner!'}
            </p>
          </div>
        </div>

        {/* NOTIFY ME TEASER BUTTON */}
        <button
          onClick={() => setSubscribed(!subscribed)}
          className={`px-5 py-3 rounded-2xl text-xs font-extrabold flex items-center space-x-2 transition-all shrink-0 active:scale-95 shadow-lg ${
            subscribed 
              ? 'bg-emerald-500 text-slate-950' 
              : 'bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 shadow-amber-500/25'
          }`}
        >
          {subscribed ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-slate-950" />
              <span>{isIt ? 'Notifica Attivata!' : 'Notified!'}</span>
            </>
          ) : (
            <>
              <BellRing className="w-4 h-4 text-slate-950" />
              <span>{isIt ? 'Avvisami al Lancio' : 'Notify Me at Launch'}</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
