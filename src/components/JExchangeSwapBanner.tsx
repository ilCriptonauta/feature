'use client';

import { useState } from 'react';
import { 
  ArrowRightLeft, 
  Coins, 
  Zap, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function JExchangeSwapBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [selectedFromToken, setSelectedFromToken] = useState('EGLD');
  const [isSwapping, setIsSwapping] = useState(false);

  const esdtTokens = [
    { symbol: 'EGLD', name: 'MultiversX', iconBg: 'from-cyan-400 to-blue-600', rate: '1.2' },
    { symbol: '$ONX', name: 'OOX Token', iconBg: 'from-purple-500 to-pink-500', rate: '450' },
    { symbol: 'USDC', name: 'USD Coin', iconBg: 'from-blue-500 to-indigo-600', rate: '54.00' },
    { symbol: 'BONEZ', name: 'CryptoPittz', iconBg: 'from-amber-400 to-orange-500', rate: '100,000' },
    { symbol: 'RARE', name: 'Rare Token', iconBg: 'from-emerald-400 to-teal-600', rate: '1,500' },
    { symbol: 'TIME', name: 'Time Token', iconBg: 'from-indigo-500 to-purple-600', rate: '85' },
    { symbol: 'DNA', name: 'DNA Ecosystem', iconBg: 'from-rose-500 to-pink-600', rate: '3,200' },
    { symbol: 'EAPES', name: 'Elrond Apes', iconBg: 'from-cyan-500 to-teal-400', rate: '240' },
  ];

  const currentToken = esdtTokens.find(t => t.symbol === selectedFromToken) || esdtTokens[0];

  const handleSimulateSwap = () => {
    setIsSwapping(true);
    setTimeout(() => {
      setIsSwapping(false);
    }, 1200);
  };

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-cyan-500/30 overflow-hidden space-y-8">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isIt ? '1-Click Auto-Swap Integrato' : '1-Click Integrated Auto-Swap'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>Acquista in 1-Click con oltre <span className="gradient-text-cyan-purple">25 Token ESDT</span></>
          ) : (
            <>Buy in 1-Click using over <span className="gradient-text-cyan-purple">25+ ESDT Tokens</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Se un NFT è listato in $ONX (o un altro token) e non lo possiedi nel tuo wallet, cliccando semplicemente su BUY NOW lo smart contract rileva in automatico i token mancanti, converte la somma necessaria tramite jExchange e completa l’acquisto dell’NFT in un’unica transazione atomica!'
            : 'If an NFT is listed in $ONX (or another token) and you don’t hold it in your wallet, clicking BUY NOW automatically detects missing tokens, executes the conversion via jExchange, and completes the NFT purchase in a single seamless atomic transaction!'}
        </p>
      </div>

      {/* INTERACTIVE GRAPHICAL SWAP & PURCHASE MOCKUP WIDGET */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
        
        {/* LEFT COLUMN: ESDT TOKENS SELECTOR PILLS */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center space-x-2">
            <Coins className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
            <span>{isIt ? 'Scegli il saldo nel tuo wallet' : 'Select your wallet balance'}</span>
          </h3>

          <div className="grid grid-cols-2 xs:grid-cols-4 gap-2">
            {esdtTokens.map((token) => (
              <button
                key={token.symbol}
                onClick={() => {
                  setSelectedFromToken(token.symbol);
                  handleSimulateSwap();
                }}
                className={`p-3 rounded-2xl border text-left transition-all duration-200 ${
                  selectedFromToken === token.symbol
                    ? 'bg-cyan-500/10 dark:bg-cyan-500/15 border-cyan-500 dark:border-cyan-400 shadow-md scale-105'
                    : 'glass-card border-black/5 dark:border-white/10 hover:border-cyan-500/30'
                }`}
              >
                <div className={`w-7 h-7 rounded-xl bg-gradient-to-tr ${token.iconBg} text-white font-black text-[10px] flex items-center justify-center mb-1 shadow`}>
                  {token.symbol.substring(0, 2)}
                </div>
                <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                  {token.symbol}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                  {token.name}
                </div>
              </button>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-700 dark:text-purple-300 font-semibold flex items-center justify-between">
            <span>{isIt ? '+ Altri 17 Token ESDT supportati' : '+ 17 More ESDT Tokens Supported'}</span>
            <span className="px-2 py-0.5 rounded bg-purple-500/20 text-[10px]">MultiversX Native</span>
          </div>
        </div>

        {/* RIGHT COLUMN: GRAPHICAL 1-CLICK SWAP & BUY DEMO BOX */}
        <div className="lg:col-span-7 rounded-3xl p-6 bg-white/90 dark:bg-slate-900/90 border border-cyan-500/40 shadow-2xl space-y-5">
          
          {/* Top Widget Header with jExchange Badge */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3.5">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold text-slate-900 dark:text-slate-200">
                {isIt ? 'Simulatore Acquisto NFT 1-Click' : '1-Click NFT Purchase Simulator'}
              </span>
            </div>

            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 dark:from-cyan-500/20 dark:to-purple-500/20 border border-cyan-400/40 text-cyan-700 dark:text-cyan-300 text-[11px] font-extrabold">
              <Zap className="w-3 h-3 text-cyan-500 dark:text-cyan-400" />
              <span>Powered by jExchange</span>
            </div>
          </div>

          {/* REAL SCENARIO EXPLANATION BANNER INSIDE WIDGET */}
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1">
            <div className="flex items-center justify-between font-extrabold text-amber-700 dark:text-amber-300">
              <span>{isIt ? '🎯 Scenario: NFT Listato in $ONX' : '🎯 Scenario: NFT Listed in $ONX'}</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-[10px] text-amber-800 dark:text-amber-300 font-bold">
                {isIt ? 'Il tuo Wallet: 0 $ONX' : 'Your Wallet: 0 $ONX'}
              </span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
              {isIt
                ? `Vuoi comprare l'NFT ma non hai $ONX nel wallet. Cliccando BUY NOW, il contratto usa il tuo saldo in ${currentToken.symbol}, lo converte all'istante ed acquista l'NFT.`
                : `You want to buy the NFT but have 0 $ONX in your wallet. Clicking BUY NOW uses your ${currentToken.symbol} balance, converts it instantly, and buys the NFT.`}
            </p>
          </div>

          {/* SIMULATED FLOW DIAGRAM */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center text-center">
            
            {/* Step 1: Listed NFT */}
            <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 space-y-1">
              <div className="text-[10px] uppercase font-bold text-purple-700 dark:text-purple-300">
                {isIt ? '1. NFT Listato in $ONX' : '1. NFT Listed in $ONX'}
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                Cyber Samurai #742
              </div>
              <div className="text-xs font-black text-amber-600 dark:text-amber-400">
                Prezzo: 10,000 $ONX
              </div>
            </div>

            {/* Step 2: Auto-Swap Conversion */}
            <div className="flex flex-col items-center justify-center p-2 text-purple-600 dark:text-purple-400 space-y-1">
              <div className={`p-2.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/40 ${isSwapping ? 'animate-spin' : ''}`}>
                <ArrowRightLeft className="w-5 h-5 text-cyan-600 dark:text-cyan-300" />
              </div>
              <span className="text-[10px] font-extrabold text-cyan-600 dark:text-cyan-300">
                {isIt ? 'Auto-Swap Smart Contract' : 'Smart Contract Auto-Swap'}
              </span>
              <span className="text-[9px] text-slate-500 dark:text-slate-400 font-semibold">
                {currentToken.symbol} ➔ $ONX
              </span>
            </div>

            {/* Step 3: NFT Delivered */}
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
              <div className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 flex items-center justify-center space-x-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>{isIt ? '2. NFT nel Tuo Wallet' : '2. NFT in Your Wallet'}</span>
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                Cyber Samurai #742
              </div>
              <div className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400">
                {isIt ? 'Acquisto 1-Click Riuscito!' : '1-Click Buy Completed!'}
              </div>
            </div>

          </div>

          {/* Action Simulation Button & Protection Guarantee */}
          <div className="space-y-2.5 pt-1">
            <button 
              onClick={handleSimulateSwap}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-extrabold text-xs sm:text-sm shadow-glow-cyan hover:opacity-95 active:scale-98 transition-all flex items-center justify-center space-x-2"
            >
              {isSwapping ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>{isIt ? `Conversione ${currentToken.symbol} ➔ $ONX ed acquisto in corso...` : `Converting ${currentToken.symbol} ➔ $ONX & buying NFT...`}</span>
                </>
              ) : (
                <>
                  <span>
                    {isIt
                      ? `BUY NOW con ${currentToken.symbol} (Auto-Swap ${currentToken.symbol} ➔ 10,000 $ONX)`
                      : `BUY NOW with ${currentToken.symbol} (Auto-Swap ${currentToken.symbol} ➔ 10,000 $ONX)`}
                  </span>
                  <Zap className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center space-x-4 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
              <div className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                <span>{isIt ? 'Rilevamento Automatico $ONX' : 'Auto-Detect Missing $ONX'}</span>
              </div>
              <span>•</span>
              <div>{isIt ? 'Auto-Swap jExchange' : 'jExchange Auto-Swap'}</div>
              <span>•</span>
              <div>{isIt ? '1-Click Atomico' : '1-Click Atomic'}</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
