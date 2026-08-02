'use client';

import { useState } from 'react';
import { 
  Zap, 
  Gavel, 
  Target, 
  Globe, 
  ArrowRightLeft, 
  Sparkles, 
  CheckCircle2, 
  ShoppingBag,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxTradingTypesBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [activeOfferTab, setActiveOfferTab] = useState<'direct' | 'global' | 'swap'>('direct');

  const offerTypes = [
    {
      id: 'direct',
      icon: Target,
      badgeColor: 'from-cyan-500 to-blue-600',
      glowBorder: 'border-cyan-500/40 dark:border-cyan-400/40',
      title: {
        it: 'Offerte Dirette',
        en: 'Direct Offers'
      },
      subtitle: {
        it: 'Invia un’offerta mirata su un singolo NFT specifico',
        en: 'Make a targeted bid on a specific individual NFT'
      },
      description: {
        it: 'Fai una proposta di acquisto ad-hoc sul singolo pezzo che desideri. Il proprietario attuale riceve una notifica istantanea e può accettarla con 1-click on-chain.',
        en: 'Send an ad-hoc purchase offer for the exact piece you want. The current owner gets notified immediately and can accept with 1-click on-chain.'
      },
      featurePoints: [
        { it: 'Targeting preciso su token ID specifico', en: 'Precise targeting on specific token ID' },
        { it: 'Fondi bloccati in smart contract in modo sicuro', en: 'Funds securely escrowed in smart contract' },
        { it: 'Notifiche in tempo reale al venditore', en: 'Real-time seller notifications' }
      ],
      mockupLabel: { it: 'OFFERTA DIRETTA INVIATA', en: 'DIRECT OFFER SENT' },
      mockupDetail: { it: 'Offerta: 45 EGLD su Cyber Samurai #742', en: 'Offer: 45 EGLD on Cyber Samurai #742' }
    },
    {
      id: 'global',
      icon: Globe,
      badgeColor: 'from-purple-500 to-indigo-600',
      glowBorder: 'border-purple-500/40 dark:border-purple-400/40',
      title: {
        it: 'Offerte Globali',
        en: 'Collection / Global Offers'
      },
      subtitle: {
        it: 'Offri su qualsiasi NFT di un’intera collezione con un’unica proposta',
        en: 'Bid on any item across an entire collection with a single offer'
      },
      description: {
        it: 'Non attendere un singolo seller. Fai un’offerta globale per l’intera collezione: il primo holder della collezione che accetta riceve l’offerta e ti trasferisce l’NFT.',
        en: 'Don’t wait for a single seller. Create a collection-wide offer: the first holder to accept receives the funds and transfers their NFT instantly.'
      },
      featurePoints: [
        { it: 'Copertura immediata sull’intera collezione', en: 'Immediate coverage over the whole collection' },
        { it: 'Massima liquidità per chi desidera vendere al volo', en: 'Maximum liquidity for holders wanting fast exit' },
        { it: 'Esecuzione automatica al primo accetto', en: 'Automatic execution on first acceptance' }
      ],
      mockupLabel: { it: 'OFFERTA GLOBALE ATTIVA', en: 'ACTIVE COLLECTION OFFER' },
      mockupDetail: { it: 'Offerta: 12.5 EGLD su Qualsiasi NFT di OOX Genesi', en: 'Offer: 12.5 EGLD on Any NFT in OOX Genesi' }
    },
    {
      id: 'swap',
      icon: ArrowRightLeft,
      badgeColor: 'from-amber-500 to-rose-600',
      glowBorder: 'border-amber-500/40 dark:border-amber-400/40',
      title: {
        it: 'Offerte con Swap di NFT',
        en: 'NFT Swap Offers'
      },
      subtitle: {
        it: 'Scambio diretto NFT per NFT. Fee di creazione: 5,000 $ONX',
        en: 'Pure NFT for NFT trade. Creation Fee: 5,000 $ONX'
      },
      description: {
        it: 'Proponi uno scambio diretto offrendo un tuo NFT in cambio di un altro NFT. Lo swap prevede esclusivamente il baratto tra NFT (non è possibile aggiungere token). Per creare e pubblicare la proposta nello smart contract è richiesta una fee fissa di 5,000 $ONX.',
        en: 'Propose a direct trade offering your NFT in exchange for another target NFT. The swap strictly covers NFT for NFT bartering (no additional tokens allowed). A fixed creation fee of 5,000 $ONX is required by the smart contract.'
      },
      featurePoints: [
        { it: 'Scambio puro NFT ⇄ NFT (senza aggiunta di token)', en: 'Pure NFT ⇄ NFT trade (no tokens allowed)' },
        { it: 'Fee fissa di creazione Swap: 5,000 $ONX', en: 'Fixed Swap Creation Fee: 5,000 $ONX' },
        { it: 'Esecuzione atomica 100% sicura on-chain', en: '100% secure atomic execution on-chain' }
      ],
      mockupLabel: { it: 'PROPOSTA SWAP NFT (FEE 5,000 $ONX)', en: 'NFT SWAP PROPOSAL (FEE 5,000 $ONX)' },
      mockupDetail: { it: 'NeoPunk #12 ⇄ Cyber Samurai #742 (Fee: 5,000 $ONX)', en: 'NeoPunk #12 ⇄ Cyber Samurai #742 (Fee: 5,000 $ONX)' }
    }
  ];

  const currentOffer = offerTypes.find(o => o.id === activeOfferTab) || offerTypes[0];
  const CurrentIcon = currentOffer.icon;

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-cyan-500/30 overflow-hidden space-y-8">
      {/* Ambient background glows */}
      <div className="absolute -top-12 -left-12 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isIt ? 'Marketplace Nativo MultiversX' : 'Native MultiversX Marketplace'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>Tutti gli NFT di MultiversX: <span className="gradient-text-cyan-purple">Buy Now, Aste e Offerte</span></>
          ) : (
            <>All MultiversX NFTs: <span className="gradient-text-cyan-purple">Buy Now, Auctions & Offers</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Esplora ed accedi a qualsiasi collezione NFT sulla rete MultiversX. Scegli se acquistare all’istante, competere in aste al rilancio oppure sfruttare la nostra suite avanzata con 3 tipologie uniche di offerte.'
            : 'Explore and access any NFT collection on MultiversX network. Choose to buy instantly, compete in live auctions, or leverage our advanced suite with 3 unique offer mechanisms.'}
        </p>
      </div>

      {/* TOP ROW: BUY NOW vs ASTE CARDS */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* BUY NOW CARD */}
        <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-cyan-500/30 shadow-lg flex items-start space-x-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <Zap className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                {isIt ? 'Buy Now (Acquisto Istantaneo)' : 'Buy Now (Instant Purchase)'}
              </h3>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                1-Click
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {isIt
                ? 'Acquista al prezzo fisso stabilito dal venditore. Esecuzione immediata ed invio diretto al tuo portafoglio.'
                : 'Purchase at the fixed price set by seller. Instant execution and immediate delivery to your wallet.'}
            </p>
          </div>
        </div>

        {/* ASTE CARD */}
        <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-purple-500/30 shadow-lg flex items-start space-x-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <Gavel className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                {isIt ? 'Aste in Tempo Reale' : 'Live Auctions'}
              </h3>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                On-Chain
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {isIt
                ? 'Fai la tua offerta al rilancio nelle aste a tempo. Lo smart contract gestisce la graduatoria e rimborsa i rilanci superati.'
                : 'Place your bids in timed auctions. The smart contract manages rankings and auto-refunds outbid buyers.'}
            </p>
          </div>
        </div>

      </div>

      {/* 3 OFFER TYPES DEEP-DIVE CONTAINER */}
      <div className="relative z-10 space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight flex items-center space-x-2">
              <Layers className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
              <span>{isIt ? 'I 3 Tipi di Offerte Supportati su OOX' : '3 Unique Offer Types Supported on OOX'}</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isIt ? 'Seleziona una modalità per vederne il funzionamento nel dettaglio' : 'Select a modality to inspect detailed mechanics'}
            </p>
          </div>
        </div>

        {/* TAB BUTTONS FOR THE 3 OFFER TYPES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {offerTypes.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeOfferTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveOfferTab(tab.id as any)}
                className={`p-3.5 rounded-2xl border transition-all duration-200 flex items-center space-x-3 text-left ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 border-cyan-500 dark:border-cyan-400 shadow-xl scale-[1.02]'
                    : 'glass-card border-black/5 dark:border-white/10 hover:border-cyan-500/30'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${tab.badgeColor} text-white flex items-center justify-center shrink-0 shadow`}>
                  <TabIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                    {tab.title[language]}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    {isIt ? 'Clicca per dettagli' : 'Click to view'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ACTIVE OFFER TYPE DISPLAY BOX */}
        <div className={`p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-slate-900/95 border ${currentOffer.glowBorder} shadow-2xl space-y-6 transition-all duration-300`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* LEFT DETAILS */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${currentOffer.badgeColor} text-white flex items-center justify-center shadow-lg`}>
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900 dark:text-white">
                    {currentOffer.title[language]}
                  </h4>
                  <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    {currentOffer.subtitle[language]}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentOffer.description[language]}
              </p>

              <div className="space-y-2 pt-1">
                {currentOffer.featurePoints.map((point, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{point[language]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT GRAPHICAL MOCKUP CARD */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-950 text-white border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                <span className="font-extrabold text-cyan-400 uppercase tracking-wider text-[10px]">
                  {currentOffer.mockupLabel[language]}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  On-Chain Escrow
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] text-slate-400 font-medium">
                  {isIt ? 'Dettaglio Proposta:' : 'Proposal Details:'}
                </div>
                <div className="text-xs font-extrabold text-amber-300 leading-snug">
                  {currentOffer.mockupDetail[language]}
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span className="flex items-center space-x-1">
                  <ShoppingBag className="w-3.5 h-3.5 text-purple-400" />
                  <span>{isIt ? 'Esecuzione Atomica' : 'Atomic Execution'}</span>
                </span>
                <span className="text-cyan-400 font-bold flex items-center space-x-1">
                  <span>{isIt ? 'Invia Offerta' : 'Send Offer'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
