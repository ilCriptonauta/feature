'use client';

import { useState } from 'react';
import { 
  Home, 
  CheckCircle2, 
  TrendingUp, 
  ThumbsUp, 
  Sparkles, 
  Layers, 
  Trophy, 
  Flame,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxHomepageShowcaseBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  // Active Leaderboard Tab in the Homepage Simulator
  const [activeLeaderboard, setActiveLeaderboard] = useState<'volume' | 'voted'>('voted');

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-cyan-500/30 overflow-hidden space-y-10 shadow-2xl">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
          <Home className="w-3.5 h-3.5 text-cyan-400" />
          <span>{isIt ? 'La Homepage OOX • Vetrina Ufficiale' : 'OOX Homepage • Official Showcase'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>La Homepage di OOX: <span className="gradient-text-cyan-purple">Semplice, Pulita ed Elegante.</span></>
          ) : (
            <>OOX Homepage: <span className="gradient-text-cyan-purple">Simple, Clean & Elegant.</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'La homepage di OOX ospita le collezioni verificate dell’ecosistema. Incrementa la tua possibilità di esposizione personalizzando la tua collezione e aggiungendo la sezione Overview!'
            : 'The OOX homepage hosts verified ecosystem collections. Boost your exposure by customizing your collection and adding the modular Overview section!'}
        </p>
      </div>

      {/* MAIN TWO-COLUMN DISPLAY: LEFT FEATURE HIGHLIGHTS & RIGHT HOMEPAGE LEADERBOARD SIMULATOR */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: CORE HOMEPAGE ADVANTAGES */}
        <div className="lg:col-span-6 space-y-5">
          
          {/* Card 1: Collezioni Verificate & Overview */}
          <div className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-cyan-500/40 shadow-xl space-y-3 hover:border-cyan-400 transition-all">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                {isIt ? 'Vetrina per Collezioni Verificate' : 'Verified Collections Showcase'}
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'La homepage mostra in primo piano le collezioni verificate. Personalizzando la tua pagina con la sezione Overview (storia, roadmap, socials), aumenti il livello di fiducia e di ingaggio dei collezionisti.'
                : 'The homepage highlights verified collections. Customizing your page with the Overview section (lore, roadmap, socials) elevates trust and collector engagement.'}
            </p>
          </div>

          {/* Card 2: Classifica Democratici Voti ONX */}
          <div className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-purple-500/40 shadow-xl space-y-3 hover:border-purple-400 transition-all">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center shrink-0">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                {isIt ? 'Classifica Voti $ONX • Sistema Democratico' : '$ONX Voting Leaderboard • Democratic System'}
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'Nella homepage trovi la classifica per volumi e la classifica delle collezioni più votate. Il nostro sistema di votazione con $ONX è il sistema più democratico per incrementare l’esposizione: più voti ottiene una collezione, maggiore sarà la sua visibilità.'
                : 'The homepage features both trading volume and top-voted leaderboards. Our $ONX voting mechanism is the most democratic system to boost exposure: the more votes a collection receives, the higher its visibility.'}
            </p>
          </div>

          {/* CTA BANNER: LA PROSSIMA COLLEZIONE ESPOSA PUÒ ESSERE LA TUA */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-900/60 via-slate-900 to-cyan-950/60 border border-purple-500/40 shadow-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs font-black text-white">
                {isIt ? 'La prossima collezione esposta in Homepage può essere la TUA!' : 'The next featured collection on the Homepage can be YOURS!'}
              </span>
            </div>
            <span className="text-xs font-black text-cyan-400 shrink-0">oox.art</span>
          </div>

        </div>

        {/* RIGHT COLUMN: HOMEPAGE LEADERBOARD SIMULATOR */}
        <div className="lg:col-span-6">
          <div className="p-6 rounded-3xl bg-slate-950 border border-cyan-500/40 shadow-2xl space-y-5">
            
            {/* SIMULATOR TAB SWITCHER (VOLUME VS TOP VOTED) */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="text-xs font-black text-white flex items-center space-x-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>{isIt ? 'Classifiche Homepage OOX' : 'OOX Homepage Leaderboards'}</span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-900 p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setActiveLeaderboard('volume')}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${
                    activeLeaderboard === 'volume'
                      ? 'bg-cyan-500 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🔥 Volumi
                </button>

                <button
                  onClick={() => setActiveLeaderboard('voted')}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${
                    activeLeaderboard === 'voted'
                      ? 'bg-purple-600 text-white shadow-glow-purple'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  👍 Top Voted ($ONX)
                </button>
              </div>
            </div>

            {/* SIMULATED COLLECTION LEADERBOARD LIST */}
            <div className="space-y-3">
              
              {/* RANK 1 */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/40 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-xl bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shadow">
                    #1
                  </div>
                  <img src="/chubby-avatar.jpg" alt="CHUBBY Collection" className="w-10 h-10 rounded-xl object-cover" />
                  <div>
                    <div className="text-xs font-black text-white flex items-center space-x-1">
                      <span>CHUBBY OnionX</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/20" />
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {activeLeaderboard === 'voted' ? '4,362 Voti ($ONX)' : '1,845 EGLD Volume'}
                    </div>
                  </div>
                </div>

                {activeLeaderboard === 'voted' ? (
                  <div className="px-3 py-1 rounded-xl bg-amber-400 text-slate-950 font-black text-[10px] shadow">
                    TOP 1 VOTED
                  </div>
                ) : (
                  <div className="px-3 py-1 rounded-xl bg-cyan-500 text-slate-950 font-black text-[10px] shadow">
                    TOP VOLUME
                  </div>
                )}
              </div>

              {/* RANK 2 */}
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-xl bg-slate-800 text-slate-300 font-black text-xs flex items-center justify-center">
                    #2
                  </div>
                  <img src="/team-francesco.jpg" alt="Collection" className="w-10 h-10 rounded-xl object-cover" />
                  <div>
                    <div className="text-xs font-black text-white flex items-center space-x-1">
                      <span>OnionX VIP Pass</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/20" />
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {activeLeaderboard === 'voted' ? '3,120 Voti ($ONX)' : '980 EGLD Volume'}
                    </div>
                  </div>
                </div>

                <div className="text-xs font-black text-purple-400">
                  {activeLeaderboard === 'voted' ? '3,120 👍' : '980 EGLD'}
                </div>
              </div>

              {/* RANK 3 */}
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-xl bg-slate-800 text-slate-300 font-black text-xs flex items-center justify-center">
                    #3
                  </div>
                  <img src="/team-andrea.jpg" alt="Collection" className="w-10 h-10 rounded-xl object-cover" />
                  <div>
                    <div className="text-xs font-black text-white flex items-center space-x-1">
                      <span>MultiversX Builders</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/20" />
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {activeLeaderboard === 'voted' ? '2,480 Voti ($ONX)' : '620 EGLD Volume'}
                    </div>
                  </div>
                </div>

                <div className="text-xs font-black text-purple-400">
                  {activeLeaderboard === 'voted' ? '2,480 👍' : '620 EGLD'}
                </div>
              </div>

            </div>

            <div className="text-center pt-2 text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest">
              ⚡ {isIt ? 'Vota con 20 $ONX per scalare la classifica' : 'Vote with 20 $ONX to climb the leaderboard'}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
