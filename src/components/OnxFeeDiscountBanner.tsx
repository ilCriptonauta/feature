'use client';

import { useState } from 'react';
import { 
  Percent, 
  Coins, 
  Sparkles, 
  CheckCircle2, 
  TrendingDown, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OnxFeeDiscountBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  // Interactive slider state for fee calculation demo (NFT Price in $ONX)
  const [nftPrice, setNftPrice] = useState<number>(1000);

  const standardFee = (nftPrice * 0.01).toFixed(1); // 1.0%
  const onxFee = (nftPrice * 0.005).toFixed(1); // 0.5%
  const savedAmount = (nftPrice * 0.005).toFixed(1); // 50% savings

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-amber-500/30 overflow-hidden space-y-8">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-extrabold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isIt ? 'Vantaggio Esclusivo $ONX' : 'Exclusive $ONX Benefit'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>Grazie a <span className="gradient-text-cyan-purple">$ONX</span> dimezzi le Fee</>
          ) : (
            <>Cut Marketplace Fees in Half with <span className="gradient-text-cyan-purple">$ONX</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {isIt
            ? 'I listing effettuati con $ONX beneficiano della metà delle commissioni. Paghi solo lo 0.5% anziché l’1.0% applicato a tutti gli altri token. Più crei e scambi in $ONX, più risparmi.'
            : 'Listings created with $ONX enjoy half the marketplace fees. Pay only 0.5% instead of the 1.0% applied to all other tokens. The more you list in $ONX, the more you save.'}
        </p>
      </div>

      {/* GRAPHICAL COMPARISON & INTERACTIVE CALCULATOR */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
        
        {/* LEFT COLUMN: COMPARISON CARDS (Standard vs $ONX) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Standard Tokens Fee Card */}
            <div className="p-5 rounded-2xl glass-card border border-black/5 dark:border-white/10 space-y-3 relative opacity-80">
              <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {isIt ? 'Tutti gli altri Token' : 'All Other Tokens'}
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-slate-200">
                1.0% <span className="text-xs font-normal text-slate-500">Fee</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isIt ? 'Commissione standard applicata su EGLD, USDC e altri token.' : 'Standard fee applied on EGLD, USDC and other tokens.'}
              </p>
            </div>

            {/* $ONX Special Fee Card (Highlighted Golden Glow) */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-500/15 to-purple-600/15 border border-amber-400/50 shadow-md space-y-3 relative transform hover:scale-102 transition-all">
              <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black text-[10px] font-black tracking-wide uppercase shadow">
                {isIt ? '-50% SCONTO' : '-50% DISCOUNT'}
              </div>
              
              <div className="text-[10px] font-extrabold text-amber-700 dark:text-amber-400 uppercase tracking-wider flex items-center space-x-1">
                <Coins className="w-3.5 h-3.5" />
                <span>{isIt ? 'Listing in $ONX' : 'Listing in $ONX'}</span>
              </div>
              <div className="text-3xl font-black text-amber-600 dark:text-amber-300">
                0.5% <span className="text-xs font-extrabold text-amber-700 dark:text-amber-400">Fee</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                {isIt ? 'Dimezzi le commissioni di vendita su ogni transazione!' : 'Half the selling fees on every transaction!'}
              </p>
            </div>

          </div>

          {/* Key Takeaway Banner */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>{isIt ? 'Risparmio del 50% su ogni NFT venduto in $ONX' : '50% Savings on every NFT sold in $ONX'}</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-[10px] font-black">0.5% VS 1.0%</span>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE SAVINGS CALCULATOR WIDGET */}
        <div className="lg:col-span-6 rounded-3xl p-6 bg-white/90 dark:bg-slate-900/90 border border-amber-500/40 shadow-2xl space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="flex items-center space-x-2">
              <TrendingDown className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                {isIt ? 'Calcolatore Risparmio Fee $ONX' : '$ONX Fee Savings Calculator'}
              </span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30">
              Interactive Demo
            </span>
          </div>

          {/* SLIDER INPUT FOR NFT PRICE */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600 dark:text-slate-400 font-medium">
                {isIt ? 'Prezzo NFT da listare:' : 'Listing NFT Price:'}
              </span>
              <span className="font-extrabold text-amber-600 dark:text-amber-400 text-sm">
                {nftPrice.toLocaleString()} $ONX
              </span>
            </div>

            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={nftPrice}
              onChange={(e) => setNftPrice(Number(e.target.value))}
              className="w-full accent-amber-500 dark:accent-amber-400 cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
            />
          </div>

          {/* LIVE CALCULATED SAVINGS DISPLAY */}
          <div className="grid grid-cols-3 gap-3 text-center">
            
            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">
                {isIt ? 'Fee Standard (1%)' : 'Standard Fee (1%)'}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-300">
                {standardFee} $ONX
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 dark:border-amber-500/40 space-y-1">
              <div className="text-[10px] text-amber-700 dark:text-amber-400 uppercase font-extrabold">
                {isIt ? 'Fee $ONX (0.5%)' : '$ONX Fee (0.5%)'}
              </div>
              <div className="text-xs sm:text-sm font-black text-amber-600 dark:text-amber-300">
                {onxFee} $ONX
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 dark:border-emerald-500/40 space-y-1">
              <div className="text-[10px] text-emerald-700 dark:text-emerald-400 uppercase font-extrabold">
                {isIt ? 'Risparmi' : 'You Save'}
              </div>
              <div className="text-xs sm:text-sm font-black text-emerald-600 dark:text-emerald-300">
                +{savedAmount} $ONX
              </div>
            </div>

          </div>

          {/* Guarantee Badge */}
          <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-600 dark:text-slate-400 font-medium pt-1">
            <ShieldCheck className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span>
              {isIt
                ? 'Applica lo 0.5% di Fee in automatico quando elenchi il tuo NFT in $ONX'
                : '0.5% Fee automatically applied when listing your NFT in $ONX'}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
