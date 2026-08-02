'use client';

import { useState, useEffect } from 'react';
import { 
  Coins, 
  Flame, 
  Users, 
  Repeat, 
  ArrowUpRight, 
  RefreshCw, 
  ShieldCheck, 
  ExternalLink,
  DollarSign,
  TrendingUp,
  Activity,
  Layers
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface TokenData {
  identifier: string;
  name: string;
  ticker: string;
  decimals: number;
  supply: string;
  circulatingSupply: string;
  initialMinted: string;
  burnt: string;
  marketCap: number;
  price: number;
  accounts: number;
  transactions: number;
  transfers: number;
  assets?: {
    pngUrl?: string;
    svgUrl?: string;
    website?: string;
  };
  canMint: boolean;
}

export default function OnxLiveTokenMetricsBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [tokenData, setTokenData] = useState<TokenData>({
    identifier: 'ONX-3e51c8',
    name: 'OnionX',
    ticker: 'ONX',
    decimals: 18,
    supply: '119959880',
    circulatingSupply: '119959880',
    initialMinted: '135000000000000000000000000',
    burnt: '15040120000000000000000000',
    marketCap: 10120.29,
    price: 0.00008436,
    accounts: 2462,
    transactions: 22756,
    transfers: 106318,
    assets: {
      pngUrl: 'https://tools.multiversx.com/assets-cdn/tokens/ONX-3e51c8/icon.png',
      svgUrl: 'https://tools.multiversx.com/assets-cdn/tokens/ONX-3e51c8/icon.svg',
      website: 'https://oni0nx.com/onx'
    },
    canMint: false
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const fetchTokenMetrics = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.multiversx.com/tokens/ONX-3e51c8');
      if (res.ok) {
        const data = await res.json();
        setTokenData(data);
        setLastUpdated(new Date().toLocaleTimeString());
      }
    } catch (err) {
      console.error('Failed to fetch MultiversX live token metrics:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTokenMetrics();
    const interval = setInterval(fetchTokenMetrics, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  // Helper number formatters
  const formatNumber = (num: number | string) => {
    const val = typeof num === 'string' ? parseFloat(num) : num;
    if (isNaN(val)) return '0';
    return new Intl.NumberFormat('en-US').format(Math.round(val));
  };

  const formatRawDecimals = (rawStr: string, decimals: number = 18) => {
    if (!rawStr) return '0';
    const bigVal = BigInt(rawStr);
    const divisor = BigInt(10 ** decimals);
    const whole = bigVal / divisor;
    return new Intl.NumberFormat('en-US').format(Number(whole));
  };

  const formattedSupply = formatNumber(tokenData.supply);
  const formattedBurnt = formatRawDecimals(tokenData.burnt, tokenData.decimals);
  const formattedMarketCap = tokenData.marketCap 
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tokenData.marketCap)
    : '$10,120.29';

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-cyan-500/30 overflow-hidden space-y-8 shadow-2xl">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* HEADER SECTION */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-black/5 dark:border-white/10 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{isIt ? 'MultiversX Mainnet Data Live' : 'MultiversX Mainnet Live Data'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight flex items-center space-x-3">
            <span>$ONX Token Analytics</span>
            <span className="text-xs font-mono px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 font-bold">
              {tokenData.identifier}
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
            {isIt
              ? 'Dati e statistiche in tempo reale direttamente dalla blockchain MultiversX.'
              : 'Real-time metrics and tokenomics synchronized live from MultiversX blockchain.'}
          </p>
        </div>

        {/* Live Refresh Button */}
        <div className="flex items-center space-x-3">
          <button
            onClick={fetchTokenMetrics}
            disabled={loading}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-bold text-slate-800 dark:text-white flex items-center space-x-2 transition-all active:scale-95 shadow-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-cyan-400' : 'text-slate-400'}`} />
            <span>{loading ? (isIt ? 'Aggiornamento...' : 'Syncing...') : (isIt ? 'Aggiorna Dati' : 'Refresh Data')}</span>
          </button>
          {lastUpdated && (
            <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
              Updated: {lastUpdated}
            </span>
          )}
        </div>
      </div>

      {/* TOKEN OVERVIEW HERO BADGE CARD */}
      <div className="relative z-10 p-6 rounded-3xl bg-slate-950 text-white border border-cyan-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-5">
          <div className="relative shrink-0">
            <div className="w-16 h-16 rounded-2xl p-1 bg-gradient-to-tr from-cyan-400 to-purple-600 shadow-xl">
              <img 
                src={tokenData.assets?.pngUrl || tokenData.assets?.svgUrl || 'https://tools.multiversx.com/assets-cdn/tokens/ONX-3e51c8/icon.png'} 
                alt="ONX Token Icon"
                className="w-full h-full object-contain rounded-xl bg-slate-900"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-cyan-400 text-slate-950 text-[9px] font-black uppercase shadow">
              ESDT
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <h3 className="text-xl sm:text-2xl font-black text-white">{tokenData.name} ({tokenData.ticker})</h3>
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-xs text-slate-300 font-mono">
              Identifier: <span className="text-cyan-400 font-bold">{tokenData.identifier}</span> • Decimals: <span className="text-purple-400 font-bold">{tokenData.decimals}</span>
            </p>
            <div className="flex items-center space-x-2 pt-1">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-black uppercase">
                {isIt ? 'Minting Chiuso (Supply Capped) 🔒' : 'Minting Capped 🔒'}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-[10px] font-black uppercase">
                Fungible ESDT
              </span>
            </div>
          </div>
        </div>

        {/* MultiversX Explorer CTA Button */}
        <a
          href={`https://explorer.multiversx.com/tokens/${tokenData.identifier}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-extrabold flex items-center space-x-2 shadow-lg hover:shadow-cyan-500/25 transition-all shrink-0 active:scale-95"
        >
          <span>{isIt ? 'Vedi su Explorer MultiversX' : 'View on MultiversX Explorer'}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* 6 KEY METRICS GRID */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        
        {/* Metric 1: Supply */}
        <div className="p-5 rounded-3xl glass-card border border-black/5 dark:border-white/10 space-y-2 hover:border-cyan-500/40 transition-all">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Coins className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              SUPPLY
            </span>
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {isIt ? 'Circulating Supply' : 'Circulating Supply'}
            </span>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {formattedSupply} <span className="text-xs text-cyan-500">ONX</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            {isIt ? 'Supply totale circolante al netto dei token bruciati' : 'Total circulating supply net of burned tokens'}
          </p>
        </div>

        {/* Metric 2: Burnt Tokens */}
        <div className="p-5 rounded-3xl glass-card border border-black/5 dark:border-white/10 space-y-2 hover:border-rose-500/40 transition-all">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
              BURN
            </span>
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {isIt ? 'Token Bruciati' : 'Total Burnt'}
            </span>
            <div className="text-xl sm:text-2xl font-black text-rose-500 dark:text-rose-400">
              {formattedBurnt} <span className="text-xs text-rose-400">ONX 🔥</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            {isIt ? 'Token $ONX definitivamente rimossi dalla circolazione' : '$ONX tokens permanently removed from circulation'}
          </p>
        </div>

        {/* Metric 3: Holders */}
        <div className="p-5 rounded-3xl glass-card border border-black/5 dark:border-white/10 space-y-2 hover:border-purple-500/40 transition-all">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              HOLDERS
            </span>
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {isIt ? 'Holders (Accounts)' : 'Holders (Accounts)'}
            </span>
            <div className="text-xl sm:text-2xl font-black text-purple-500 dark:text-purple-400">
              {formatNumber(tokenData.accounts)} <span className="text-xs text-slate-400">Wallets</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            {isIt ? 'Numero totale di wallet MultiversX con saldo $ONX' : 'Total MultiversX wallet addresses holding $ONX'}
          </p>
        </div>

        {/* Metric 4: Transactions */}
        <div className="p-5 rounded-3xl glass-card border border-black/5 dark:border-white/10 space-y-2 hover:border-blue-500/40 transition-all">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              TXS
            </span>
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {isIt ? 'Transazioni Totali' : 'Total Transactions'}
            </span>
            <div className="text-xl sm:text-2xl font-black text-blue-500 dark:text-blue-400">
              {formatNumber(tokenData.transactions)} <span className="text-xs text-slate-400">Txs</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            {isIt ? 'Operazioni totali eseguite con il token $ONX' : 'Total smart contract operations involving $ONX'}
          </p>
        </div>

        {/* Metric 5: Transfers */}
        <div className="p-5 rounded-3xl glass-card border border-black/5 dark:border-white/10 space-y-2 hover:border-amber-500/40 transition-all">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Repeat className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              TRANSFERS
            </span>
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {isIt ? 'Trasferimenti Totali' : 'Total Transfers'}
            </span>
            <div className="text-xl sm:text-2xl font-black text-amber-500 dark:text-amber-400">
              {formatNumber(tokenData.transfers)} <span className="text-xs text-slate-400">Transfers</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            {isIt ? 'Movimenti on-chain tra indirizzi dell’ecosistema' : 'On-chain ESDT transfers between addresses'}
          </p>
        </div>

        {/* Metric 6: Market Cap */}
        <div className="p-5 rounded-3xl glass-card border border-black/5 dark:border-white/10 space-y-2 hover:border-emerald-500/40 transition-all">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              MARKETCAP
            </span>
          </div>
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {isIt ? 'Capitalizzazione di Mercato' : 'Market Capitalization'}
            </span>
            <div className="text-xl sm:text-2xl font-black text-emerald-500 dark:text-emerald-400">
              {formattedMarketCap}
            </div>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            {isIt ? 'Valore totale basato sul prezzo live xExchange' : 'Total valuation calculated from xExchange live price'}
          </p>
        </div>

      </div>
    </section>
  );
}
