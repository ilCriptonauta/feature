'use client';

import { useState } from 'react';
import { 
  ThumbsUp, 
  Plus, 
  Trophy, 
  TrendingUp, 
  Sparkles, 
  Flame, 
  Users, 
  ShieldCheck,
  ChevronUp,
  Vote
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OnxNftVotingBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [voteCount, setVoteCount] = useState(4362);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVoteClick = () => {
    if (!hasVoted) {
      setVoteCount((prev) => prev + 1);
      setHasVoted(true);
    } else {
      setVoteCount((prev) => prev - 1);
      setHasVoted(false);
    }
  };

  return (
    <section className="relative rounded-3xl p-4 sm:p-8 glass-card border border-purple-500/40 overflow-hidden space-y-8">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-purple-500 pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-extrabold tracking-wide">
          <ThumbsUp className="w-3.5 h-3.5" />
          <span>{isIt ? 'Voto NFT & Classifica Top Voted' : 'NFT Voting & Top Voted Leaderboard'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight break-words">
          {isIt ? (
            <>Vota i tuoi NFT preferiti: <span className="gradient-text-cyan-purple">Più Voti, Più Esposizione</span></>
          ) : (
            <>Vote your favorite NFTs: <span className="gradient-text-cyan-purple">More Votes, More Exposure</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {isIt
            ? 'Ogni utente può esprimere il proprio voto su qualsiasi singolo NFT tramite il pulsante 👍 (costo fisso 20 $ONX). Il voto viene attribuito all’NFT specifico ma si somma automaticamente a tutti i voti della collezione!'
            : 'Every user can vote on any individual NFT using the 👍 button (fixed cost of 20 $ONX). Each vote belongs to the specific NFT while automatically accumulating for the entire collection!'}
        </p>
      </div>

      {/* MAIN TWO-COLUMN DISPLAY: LEFT NFT CARD SIMULATOR (ATTACHMENT 2) & RIGHT VALUE PROPOSITION */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
        
        {/* LEFT COLUMN: REALISTIC NFT CARD SIMULATOR (REPRODUCING ATTACHMENT 2) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-xs rounded-3xl p-4 bg-slate-950 border border-purple-500/50 shadow-2xl space-y-3 relative group transform hover:-translate-y-1 transition-all duration-300">
            
            {/* NFT Artwork Container */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group/art">
              
              {/* CHUBBY OnionX NFT Artwork Image */}
              <img 
                src="/chubby-avatar.jpg" 
                alt="CHUBBY OnionX NFT" 
                className="w-full h-full object-cover group-hover/art:scale-105 transition-transform duration-500"
              />

              {/* Top Left: Vote Count Badge */}
              <div className="absolute top-3 left-3 z-10 flex items-center space-x-1 px-3 py-1 rounded-xl bg-emerald-500 text-white text-xs font-black shadow-lg">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{voteCount}</span>
              </div>

              {/* Top Right: HIGHLIGHTED VOTE BUTTON 👍 */}
              <div className="absolute top-3 right-3 z-20 flex items-center space-x-2">
                
                {/* HIGHLIGHTED THUMBS UP BUTTON WITH GLOW & TOOLTIP */}
                <div className="relative group/btn">
                  <button
                    onClick={handleVoteClick}
                    className={`p-2.5 rounded-full transition-all duration-300 flex items-center justify-center shadow-2xl border-2 ${
                      hasVoted
                        ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white border-amber-300 scale-110 shadow-glow-cyan'
                        : 'bg-slate-900/90 text-white border-purple-400 hover:border-amber-400 hover:scale-110 shadow-glow-cyan animate-pulse'
                    }`}
                    aria-label="Vote with 👍"
                  >
                    <ThumbsUp className="w-5 h-5 fill-current" />
                  </button>

                  {/* Floating Cost Badge */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-black text-[9px] whitespace-nowrap shadow-md">
                    20 $ONX
                  </div>
                </div>

                {/* Plus (+) Button */}
                <button 
                  className="p-2.5 rounded-full bg-slate-900/80 text-white border border-white/20 hover:border-white transition-colors"
                  aria-label="Add"
                >
                  <Plus className="w-4 h-4" />
                </button>

              </div>

              {/* Bottom Badge overlay */}
              <div className="absolute bottom-3 left-3 z-10">
                <div className="text-[10px] font-black uppercase text-amber-300 tracking-widest bg-slate-950/80 px-2.5 py-1 rounded-full border border-amber-500/30 backdrop-blur-md shadow-lg">
                  CHUBBY OnionX #042
                </div>
              </div>

            </div>

            {/* NFT Details Header */}
            <div className="flex items-center justify-between pt-1">
              <div>
                <h4 className="text-lg font-black text-white leading-tight">
                  CHUBBY OnionX
                </h4>
                <div className="text-xs font-bold text-slate-400">
                  100,000 <span className="text-purple-400 font-extrabold">$ONX</span>
                </div>
              </div>

              <span className="text-xs font-black text-slate-400">
                #042
              </span>
            </div>

            {/* Action Buttons: Buy (Magenta) & Offer (Dark Glass) */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button className="w-full py-2.5 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-extrabold text-xs shadow-lg transition-colors">
                Buy
              </button>
              <button className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 font-extrabold text-xs transition-colors">
                Offer
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: VALUE PROPOSITION & COMMUNITY CALL TO ACTION */}
        <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-white/90 dark:bg-slate-900/90 border border-purple-500/40 shadow-2xl space-y-6">
          
          {/* TOP VOTED LEADERBOARD MECHANIC */}
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-extrabold">
              <Trophy className="w-3.5 h-3.5" />
              <span>{isIt ? 'Classifica "TOP VOTED" in Homepage OOX' : 'Homepage OOX "TOP VOTED" Leaderboard'}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {isIt ? 'Qual è il vantaggio per la Collezione?' : 'What is the Advantage for the Collection?'}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'La somma di tutti i voti espressi sui singoli NFT aiuta la collezione ad arrampicarsi nella classifica "TOP VOTED" sulla homepage di OOX, posizionandola in primissimo piano davanti a tutti i collezionisti dell’ecosistema.'
                : 'The sum of all votes cast across individual NFTs propels the entire collection up the official "TOP VOTED" leaderboard on the OOX homepage, placing it right in the spotlight for all collectors.'}
            </p>
          </div>

          {/* 3 BENEFIT HIGHLIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* Benefit 1 */}
            <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1.5">
              <div className="flex items-center space-x-1.5 text-xs font-black text-amber-700 dark:text-amber-400">
                <Trophy className="w-4 h-4" />
                <span>{isIt ? 'Top Voted' : 'Top Voted'}</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                {isIt ? 'I voti si sommano a livello di collezione' : 'Votes accumulate for the full collection'}
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1.5">
              <div className="flex items-center space-x-1.5 text-xs font-black text-purple-700 dark:text-purple-400">
                <Users className="w-4 h-4" />
                <span>{isIt ? 'Community Rally' : 'Community Rally'}</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                {isIt ? 'Invita la tua community a votare' : 'Mobilize community members to vote'}
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1.5">
              <div className="flex items-center space-x-1.5 text-xs font-black text-cyan-700 dark:text-cyan-400">
                <Flame className="w-4 h-4" />
                <span>{isIt ? 'Max Esposizione' : 'Max Exposure'}</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                {isIt ? 'Più voti = Maggiore visibilità' : 'More votes = Higher visibility'}
              </p>
            </div>

          </div>

          {/* CALL TO ACTION FOR COMMUNITIES */}
          <div className="p-4 rounded-2xl bg-purple-500/10 dark:bg-gradient-to-r dark:from-purple-900/40 dark:via-purple-950/40 dark:to-slate-900 border border-purple-500/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <div className="text-xs font-black text-purple-700 dark:text-purple-300">
                {isIt ? 'L’invito è rivolto a tutte le Community Web3!' : 'Calling all Web3 NFT Communities!'}
              </div>
              <div className="text-sm font-black text-slate-900 dark:text-white">
                {isIt ? 'Votate i vostri NFT preferiti per metterli in risalto.' : 'Vote your favorite NFTs to get featured.'}
              </div>
            </div>

            <div className="px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-400 text-purple-700 dark:text-purple-300 font-black text-xs whitespace-nowrap shadow-md">
              {isIt ? 'Più Voti, Più Esposizione 🔥' : 'More Votes, More Exposure 🔥'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
