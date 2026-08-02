'use client';

import { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  ShoppingBag, 
  Tag, 
  RefreshCw, 
  CheckCircle2, 
  Zap, 
  ShieldCheck,
  CheckSquare,
  Square,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxNftFocusBatchBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [activeTab, setActiveTab] = useState<'single' | 'batch'>('batch');
  const [selectedItems, setSelectedItems] = useState<number[]>([1, 2, 3]);

  const mockNfts = [
    { id: 1, name: 'Cyber Samurai #742', price: '1.2 EGLD', collection: 'Cyber Samurai' },
    { id: 2, name: 'OOX Genesi #088', price: '450 $ONX', collection: 'OOX Genesi' },
    { id: 3, name: 'NeoPunk #1042', price: '54 USDC', collection: 'NeoPunks' },
  ];

  const toggleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(i => i !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-cyan-500/30 overflow-hidden space-y-8">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isIt ? 'Esperienza NFT-First • Rete MultiversX' : 'NFT-First Experience • MultiversX Network'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>I tuoi NFT in primo piano. <span className="gradient-text-cyan-purple">Sempre in primo piano.</span></>
          ) : (
            <>Your NFTs Front and Center. <span className="gradient-text-cyan-purple">Always Front and Center.</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Acquisti singoli e multipli. Listing e delisting singoli e multipli. Cambi prezzo singoli e multipli. Tutto gestito con la massima sicurezza, semplicità e velocità fulminea della rete MultiversX.'
            : 'Single and batch purchases. Single and batch listings and delistings. Single and batch price updates. All executed with peak security, simplicity, and lightning speed on MultiversX.'}
        </p>
      </div>

      {/* 4 FEATURE PILLARS GRID */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* PILLAR 1: PURCHASES */}
        <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-cyan-500/30 shadow-lg space-y-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 text-white flex items-center justify-center shadow">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            {isIt ? 'Acquisti Singoli e Multipli' : 'Single & Batch Purchases'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {isIt
              ? 'Aggiungi più NFT al carrello ed esegui un acquisto multiplo in 1-Click con una sola firma.'
              : 'Add multiple NFTs to cart and execute a batch buy in 1-click with a single signature.'}
          </p>
        </div>

        {/* PILLAR 2: LISTING & DELISTING */}
        <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-purple-500/30 shadow-lg space-y-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 text-white flex items-center justify-center shadow">
            <Tag className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            {isIt ? 'Listing & Delisting Multipli' : 'Batch Listing & Delisting'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {isIt
              ? 'Metti in vendita o ritira decine di NFT simultaneamente definendo i prezzi in blocco.'
              : 'List or cancel sales for dozens of NFTs at once setting batch prices effortlessly.'}
          </p>
        </div>

        {/* PILLAR 3: PRICE UPDATES */}
        <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-amber-500/30 shadow-lg space-y-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center shadow">
            <RefreshCw className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            {isIt ? 'Cambi Prezzo Istantanei' : 'Instant Batch Price Updates'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {isIt
              ? 'Modifica i prezzi dei tuoi listing in un solo passaggio senza dover prima fare il delisting.'
              : 'Update listing prices in a single step without having to delist and relist.'}
          </p>
        </div>

        {/* PILLAR 4: MULTIVERSX SPEED */}
        <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-emerald-500/30 shadow-lg space-y-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-600 text-white flex items-center justify-center shadow">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            {isIt ? 'Velocità & Sicurezza MultiversX' : 'MultiversX Speed & Safety'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {isIt
              ? 'Finalizzazione atomica in pochi millisecondi con costi minimi e massima sicurezza on-chain.'
              : 'Atomic finality in milliseconds with minimal gas and 100% audited smart contract security.'}
          </p>
        </div>

      </div>

      {/* INTERACTIVE DEMO WIDGET FOR BATCH VS SINGLE */}
      <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-cyan-500/40 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center space-x-2">
              <Layers className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
              <span>{isIt ? 'Simulatore Operazioni Multi-NFT (Batch Suite)' : 'Multi-NFT Operations Simulator (Batch Suite)'}</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isIt ? 'Prova la facilità delle azioni singole o in blocco' : 'Experience single or batch actions effortlessly'}
            </p>
          </div>

          {/* TOGGLE TABS */}
          <div className="flex items-center p-1 rounded-xl bg-slate-200/80 dark:bg-white/5 border border-black/5 dark:border-white/10">
            <button
              onClick={() => setActiveTab('single')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'single'
                  ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {isIt ? 'Azione Singola' : 'Single Action'}
            </button>
            <button
              onClick={() => setActiveTab('batch')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'batch'
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white shadow-glow-cyan'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {isIt ? 'Azione Multipla (Batch)' : 'Batch Action'}
            </button>
          </div>
        </div>

        {/* DEMO CONTENT DISPLAY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* MOCK NFT LIST */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>{isIt ? 'Seleziona gli NFT dal tuo Portfolio / Carrello' : 'Select NFTs from Portfolio / Cart'}</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                {selectedItems.length} {isIt ? 'selezionati' : 'selected'}
              </span>
            </div>

            <div className="space-y-2">
              {mockNfts.map((nft) => {
                const isSelected = selectedItems.includes(nft.id);
                return (
                  <div
                    key={nft.id}
                    onClick={() => toggleSelectItem(nft.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-cyan-500/10 dark:bg-cyan-500/15 border-cyan-500 dark:border-cyan-400 shadow-md'
                        : 'bg-slate-100/60 dark:bg-white/5 border-slate-200 dark:border-white/10 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {isSelected ? (
                        <CheckSquare className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                      <div>
                        <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                          {nft.name}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">
                          {nft.collection}
                        </div>
                      </div>
                    </div>

                    <div className="text-xs font-black text-amber-600 dark:text-amber-400">
                      {nft.price}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOCK BATCH ACTION CARD */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-950 text-white border border-cyan-500/30 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider">
                {activeTab === 'batch' ? (isIt ? 'AZIONI MULTIPLE IN 1-CLICK' : '1-CLICK BATCH SUITE') : (isIt ? 'AZIONE SINGOLA' : 'SINGLE ACTION')}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                MultiversX Native
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>{isIt ? 'Modalità:' : 'Mode:'}</span>
                <span className="text-white font-bold">{activeTab === 'batch' ? (isIt ? 'Multiplo (Batch)' : 'Batch') : (isIt ? 'Singolo' : 'Single')}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>{isIt ? 'Elementi:' : 'Items:'}</span>
                <span className="text-cyan-400 font-bold">{activeTab === 'batch' ? selectedItems.length : 1} NFT</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>{isIt ? 'Firme Richieste:' : 'Signatures Required:'}</span>
                <span className="text-emerald-400 font-bold">1 {isIt ? 'Singola Firma' : 'Single Signature'}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-extrabold text-xs shadow-glow-cyan hover:opacity-95 transition-all flex items-center justify-center space-x-2">
                <span>
                  {activeTab === 'batch'
                    ? (isIt ? `Esegui Azione Multipla su ${selectedItems.length} NFT` : `Execute Batch Action on ${selectedItems.length} NFTs`)
                    : (isIt ? 'Esegui Azione Singola' : 'Execute Single Action')}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center space-x-2 text-[10px] text-slate-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isIt ? '100% Sicurezza & Velocità MultiversX' : '100% MultiversX Speed & Safety'}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
