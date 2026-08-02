'use client';

import { useState } from 'react';
import { 
  Wrench, 
  Sparkles, 
  ChevronDown, 
  Crown, 
  Ticket, 
  Palette, 
  Coins, 
  CheckCircle2,
  PlusSquare,
  Dices,
  Layers,
  AlertTriangle,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OoxStudioToolsAccordionBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  // Open first item by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const studioTools = [
    {
      id: 'single-mint',
      icon: PlusSquare,
      title: {
        it: 'Single Mint (Mint single NFT/SFT)',
        en: 'Single Mint (Mint single NFT/SFT)'
      },
      subtitle: {
        it: 'Configura e minta un singolo NFT o SFT',
        en: 'Configure and mint a single NFT/SFT'
      },
      badge: 'OOX & OOX+',
      badgeStyle: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      description: {
        it: 'Sviluppa la tua prima collezione e minta il tuo primo NFT. Ideale per una distribuzione più controllata e manuale con totale libertà di scegliere quando pubblicare i propri NFT.',
        en: 'Develop your first collection and mint your first NFT. Ideal for a controlled and manual distribution with total freedom to decide when to publish your NFTs.'
      },
      features: [
        { it: 'Distribuzione controllata e manuale', en: 'Controlled manual distribution' },
        { it: 'Gestione libera delle tempistiche di rilascio', en: 'Flexible release timing freedom' },
        { it: 'Disponibile per tutti gli utenti OOX ed OOX+', en: 'Available for all OOX and OOX+ users' }
      ]
    },
    {
      id: 'mintable-collections',
      icon: Sparkles,
      title: {
        it: 'Collezioni Mintabili (Create Mintable Collection)',
        en: 'Create Mintable Collection'
      },
      subtitle: {
        it: 'Configura e distribuisci contratti di mint su misura',
        en: 'Configure and deploy custom minting contracts'
      },
      badge: {
        it: 'Esclusivo OOX+',
        en: 'Exclusive OOX+'
      },
      isPlusExclusive: true,
      badgeStyle: 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/40',
      description: {
        it: 'Ideale per chi vuole creare la sua prima collezione mintabile. Un tool avanzato e dettagliato che ti permette di creare pagamenti misti, organizzare fasi di mint, whitelist, organizzare giveaway e dividere le revenue tra più autori.',
        en: 'Ideal for launching your first mintable collection. An advanced and detailed tool allowing mixed payments, multi-phase minting, whitelists, giveaways, and automated revenue splits between co-authors.'
      },
      hasIpfsNotice: true,
      features: [
        { it: 'Pagamenti misti e multi-fase di mint', en: 'Mixed payments & multi-phase mints' },
        { it: 'Gestione Whitelist & Giveaway integrati', en: 'Integrated Whitelist & Giveaway tools' },
        { it: 'Divisione automatica delle revenue tra più autori', en: 'Automated revenue splits among co-authors' }
      ]
    },
    {
      id: 'vending-machine',
      icon: Coins,
      title: {
        it: 'VENDING Machine (Create Vending Machine)',
        en: 'Create Vending Machine'
      },
      subtitle: {
        it: 'Crea un distributore automatico di NFT',
        en: 'Create an automated NFT vending machine'
      },
      badge: {
        it: 'Esclusivo OOX+',
        en: 'Exclusive OOX+'
      },
      isPlusExclusive: true,
      badgeStyle: 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/40',
      description: {
        it: 'Un’ottima soluzione per distribuire molteplici NFT simulando un mint. Acquisti puramente randomici su una selezione di NFT che l’utente ha già in suo possesso nel proprio inventory.',
        en: 'An excellent solution to distribute multiple NFTs mimicking a mint. Purely randomized purchases over a selection of NFTs already held in your inventory.'
      },
      features: [
        { it: 'Distribuzione randomizzata in stile Vending Machine', en: 'Randomized Vending Machine distribution' },
        { it: 'Simula l’esperienza di un minting istantaneo', en: 'Simulates an instant minting experience' },
        { it: 'Disponibile esclusivamente per gli utenti OOX+', en: 'Exclusively available for OOX+ members' }
      ]
    },
    {
      id: 'lotteries',
      icon: Dices,
      title: {
        it: 'Lotteries (Create Lottery)',
        en: 'Create Lottery'
      },
      subtitle: {
        it: 'Crea e gestisci campagne lotteria con premi',
        en: 'Create and manage lottery campaigns with prizes'
      },
      badge: {
        it: 'OOX & OOX+ (SFT su OOX+)',
        en: 'OOX & OOX+ (SFT on OOX+)'
      },
      badgeStyle: 'bg-purple-500/15 text-purple-600 dark:text-purple-300 border-purple-500/30',
      description: {
        it: 'Crea le tue lotterie decidendo la durata, scegli il token tra quelli supportati e decidi la quantità di biglietti. Gli utenti OOX+ possono anche utilizzare gli SFT come ticket d’accesso.',
        en: 'Create custom lotteries: set duration, select from supported tokens, and set ticket supply. OOX+ users can also use SFTs as raffle ticket passes.'
      },
      features: [
        { it: 'Scelta token di pagamento & durata personalizzata', en: 'Custom payment token & duration selection' },
        { it: 'Estrazione casuale 100% trasparente on-chain', en: '100% transparent on-chain random drawing' },
        { it: 'Gli utenti OOX+ possono usare SFT come biglietto', en: 'OOX+ users can use SFTs as entry tickets' }
      ]
    },
    {
      id: 'nft-generator',
      icon: Palette,
      title: {
        it: 'NFT ART Generator (Generate Collections)',
        en: 'NFT Art Generator'
      },
      subtitle: {
        it: 'Genera collezioni combinando layer e tratti',
        en: 'Generate collections from layers and traits'
      },
      badge: {
        it: 'Esclusivo OOX+',
        en: 'Exclusive OOX+'
      },
      isPlusExclusive: true,
      badgeStyle: 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/40',
      description: {
        it: 'Crea la tua prima collezione. Carica tutti i tratti separati, gestisci i livelli e le rarità e genera automaticamente le quantità che desideri.',
        en: 'Generate your first collection. Upload individual traits, manage layer ordering and rarities, and generate your desired collection size automatically.'
      },
      features: [
        { it: 'Caricamento tratti grafici e gestione livelli', en: 'Graphic traits upload & layer management' },
        { it: 'Impostazione rarità e combinazioni su misura', en: 'Custom rarity scoring & combination logic' },
        { it: 'Generazione automatica dell’intera collezione', en: 'Automated generation of the entire collection' }
      ]
    }
  ];

  return (
    <section className="relative rounded-3xl p-6 sm:p-10 glass-card border border-cyan-500/30 overflow-hidden space-y-8">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="relative z-10 space-y-3 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
          <Wrench className="w-3.5 h-3.5" />
          <span>{isIt ? 'Catalogo Completo Strumenti' : 'Complete Tools Catalog'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {isIt ? (
            <>Tutti gli Strumenti dello <span className="gradient-text-cyan-purple">Studio Creator</span></>
          ) : (
            <>All Tools Available in <span className="gradient-text-cyan-purple">Studio Creator</span></>
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {isIt
            ? 'Esplora la nostra suite completa di creazione. Clicca su ciascuno strumento per scoprirne le funzionalità e le disponibilità per gli utenti OOX ed OOX+.'
            : 'Explore our complete creation suite. Click on any tool below to discover its features and availability for OOX and OOX+ members.'}
        </p>
      </div>

      {/* ACCORDION CONTAINER */}
      <div className="relative z-10 space-y-3">
        {studioTools.map((tool, index) => {
          const ToolIcon = tool.icon;
          const isOpen = openIndex === index;
          return (
            <div
              key={tool.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-white dark:bg-slate-900 border-cyan-500 dark:border-cyan-400 shadow-xl'
                  : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-white/10 hover:border-cyan-500/30'
              }`}
            >
              {/* ACCORDION HEADER BUTTON */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left space-x-4 focus:outline-none"
              >
                <div className="flex items-center space-x-3.5 min-w-0">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow ${
                    tool.isPlusExclusive 
                      ? 'bg-gradient-to-tr from-amber-400 to-orange-500 text-white' 
                      : 'bg-slate-100 dark:bg-white/10 text-cyan-600 dark:text-cyan-400'
                  }`}>
                    <ToolIcon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white truncate">
                        {tool.title[language]}
                      </h3>
                      {tool.isPlusExclusive && (
                        <Crown className="w-4 h-4 text-amber-500 shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      {tool.subtitle[language]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border hidden sm:inline-block ${tool.badgeStyle}`}>
                    {typeof tool.badge === 'string' ? tool.badge : tool.badge[language]}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-500' : 'text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </button>

              {/* ACCORDION CONTENT PANEL */}
              {isOpen && (
                <div className="px-5 pb-6 pt-1 border-t border-slate-100 dark:border-white/5 space-y-4 animate-fade-in">
                  <div className="sm:hidden">
                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${tool.badgeStyle}`}>
                      {typeof tool.badge === 'string' ? tool.badge : tool.badge[language]}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                    {tool.description[language]}
                  </p>

                  {/* IPFS NOTICE WARNING FOR MINTABLE COLLECTIONS */}
                  {tool.hasIpfsNotice && (
                    <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-medium leading-relaxed flex items-start space-x-2.5">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        {isIt ? (
                          <>
                            <span className="font-extrabold text-amber-600 dark:text-amber-400">Avviso IPFS:</span> OOX non è un provider IPFS. Ogni collezione mintabile deve essere ospitata in un server IPFS. Consigliamo <a href="https://pinata.cloud/" target="_blank" rel="noopener noreferrer" className="font-bold underline text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 inline-flex items-center space-x-1"><span>Pinata</span><ExternalLink className="w-3 h-3 ml-0.5 inline" /></a>.
                          </>
                        ) : (
                          <>
                            <span className="font-extrabold text-amber-600 dark:text-amber-400">IPFS Notice:</span> OOX is not an IPFS provider. Every mintable collection must be hosted on an IPFS server. We recommend <a href="https://pinata.cloud/" target="_blank" rel="noopener noreferrer" className="font-bold underline text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 inline-flex items-center space-x-1"><span>Pinata</span><ExternalLink className="w-3 h-3 ml-0.5 inline" /></a>.
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    {tool.features.map((feat, fIdx) => (
                      <div key={fIdx} className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-start space-x-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat[language]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
