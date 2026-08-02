'use client';

import { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  Bookmark, 
  Bell, 
  Zap, 
  Eye, 
  CheckCircle2, 
  ShoppingBag,
  TrendingUp,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxProfileFavoritesBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [activeTab, setActiveTab] = useState<'collections' | 'nfts'>('collections');

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-rose-500/30 overflow-hidden space-y-8 shadow-2xl">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-extrabold tracking-wide">
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          <span>{isIt ? 'Wishlist & Preferiti' : 'Wishlist & Favorites'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight flex items-center space-x-2 justify-center sm:justify-start">
          <span>{isIt ? 'I Tuoi Preferiti' : 'Your Favorites'}</span>
          <Heart className="w-7 h-7 sm:w-9 sm:h-9 text-rose-500 fill-rose-500 inline-block animate-bounce" />
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Sappiamo che è facile perdersi tra migliaia di NFT. Il nostro cuore ti permette di salvare rapidamente collezioni e singoli NFT tra i preferiti per ritrovarli subito.'
            : 'We know it’s easy to get lost among thousands of NFTs. Our heart allows you to quickly save collections and individual NFTs to your favorites so you can find them right away.'}
        </p>
      </div>

      {/* 2 MAIN PILLARS GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* PILLAR 1: MONITOR COLLECTIONS */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-rose-500/30 shadow-lg space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-base font-black text-slate-900 dark:text-white">
            {isIt ? 'Monitora le Collezioni Preferite' : 'Monitor Favorite Collections'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Monitora velocemente il floor price, le variazioni ed i volumi di trading di tutte le collezioni aggiunte tra i preferiti in un’unica plancia di controllo.'
              : 'Quickly track floor prices, variations, and trading volumes of all your favorited collections in a unified dashboard.'}
          </p>
          <div className="pt-2 flex items-center space-x-2 text-xs font-bold text-rose-600 dark:text-rose-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>{isIt ? 'Aggiornamenti Live del Floor Price' : 'Live Floor Price Updates'}</span>
          </div>
        </div>

        {/* PILLAR 2: MONITOR SINGLE NFTs & INSTANT BUY ON LISTING */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-purple-500/30 shadow-lg space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-base font-black text-slate-900 dark:text-white">
            {isIt ? 'Acquisto Rapido al Listing' : 'Instant Buy on Listing'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Metti un NFT tra i preferiti e monitoralo. Potrai comprarlo rapidamente non appena verrà messo in vendita da qualsiasi venditore!'
              : 'Add an NFT to your favorites and monitor it. You can purchase it rapidly the exact moment it gets listed for sale by any seller!'}
          </p>
          <div className="pt-2 flex items-center space-x-2 text-xs font-bold text-purple-600 dark:text-purple-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>{isIt ? 'Alert Istantaneo sul Listing' : 'Instant Listing Alert'}</span>
          </div>
        </div>

      </div>

      {/* INTERACTIVE FAVORITES DASHBOARD MOCKUP */}
      <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-rose-500/40 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-600 text-white flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">
                {isIt ? 'Plancia Preferiti ❤️' : 'Favorites Board ❤️'}
              </h3>
              <p className="text-xs text-slate-400">
                {isIt ? 'Gestisci collezioni ed NFT salvati col Cuore' : 'Manage collections and NFTs saved with Heart'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 p-1 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setActiveTab('collections')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                activeTab === 'collections'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isIt ? 'Collezioni (3)' : 'Collections (3)'}
            </button>
            <button
              onClick={() => setActiveTab('nfts')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                activeTab === 'nfts'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isIt ? 'NFT Singoli (5)' : 'Single NFTs (5)'}
            </button>
          </div>
        </div>

        {/* TAB CONTENTS */}
        {activeTab === 'collections' ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-black text-white">CHUBBY OnionX</span>
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              </div>
              <div className="text-[11px] text-slate-300">Floor Price: <span className="font-extrabold text-emerald-400">12.5 EGLD</span></div>
              <div className="text-[10px] text-emerald-400 font-bold">+18.4% 24h</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-black text-white">EAPES</span>
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              </div>
              <div className="text-[11px] text-slate-300">Floor Price: <span className="font-extrabold text-emerald-400">45,000 $ONX</span></div>
              <div className="text-[10px] text-emerald-400 font-bold">+5.2% 24h</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-black text-white">BAXC</span>
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              </div>
              <div className="text-[11px] text-slate-300">Floor Price: <span className="font-extrabold text-emerald-400">3.2 EGLD</span></div>
              <div className="text-[10px] text-rose-400 font-bold">-1.1% 24h</div>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950 via-slate-900 to-rose-950 border border-purple-500/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-black">
                #888
              </div>
              <div>
                <div className="font-extrabold text-white">CHUBBY OnionX #888</div>
                <div className="text-[11px] text-amber-300 font-bold">
                  {isIt ? 'Appena Listato a 8,500 $ONX!' : 'Just Listed for 8,500 $ONX!'}
                </div>
              </div>
            </div>
            <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-black text-xs shadow hover:scale-105 transition-all">
              {isIt ? 'Acquista Ora ❤️' : 'Buy Now ❤️'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
