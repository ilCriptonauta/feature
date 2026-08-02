import { LocalizedString } from '@/i18n/LanguageContext';

export interface OOXMetricMultilingual {
  label: LocalizedString;
  value: string;
}

export interface KeyBenefitMultilingual {
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
}

export interface OOXFeatureMultilingual {
  id: string;
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  shortDescription: LocalizedString;
  fullDescription: LocalizedString;
  category: 'Marketplace' | 'Profiles' | 'Tools' | 'Security' | 'Web3' | 'main' | string;
  isMain?: boolean; // Se true, è una delle 5 Main Features per il carosello hero in alto
  icon: 'Store' | 'UserCheck' | 'Wrench' | 'ShieldCheck' | 'Coins' | 'Rocket' | 'Palette' | 'Ticket' | 'Calendar';
  badge?: LocalizedString;
  accentGradient: string;
  glowColor: string;
  ogImage: string;
  highlights: LocalizedString[];
  metrics: OOXMetricMultilingual[];
  detailedContent: {
    heroHeading: LocalizedString;
    sectionTitle: LocalizedString;
    sectionDescription: LocalizedString;
    keyBenefits: KeyBenefitMultilingual[];
  };
}
export const OOX_FEATURES: OOXFeatureMultilingual[] = [
  // ==========================================
  // 1. ABOUT ONIONXLABS
  // ==========================================
  {
    id: 'about-onionxlabs',
    slug: 'about-onionxlabs',
    isMain: false,
    title: {
      it: 'About OnionXLabs',
      en: 'About OnionXLabs',
    },
    subtitle: {
      it: 'Costruttori su rete MultiversX',
      en: 'Builders on MultiversX Network',
    },
    shortDescription: {
      it: 'Chi siamo e cosa facciamo: il team di sviluppatori dietro l’ecosistema OOX e le soluzioni Web3 su MultiversX.',
      en: 'Who we are and what we do: the dev team powering the OOX ecosystem and Web3 solutions on MultiversX.',
    },
    fullDescription: {
      it: 'OnionXLabs è un team di costruttori e sviluppatori attivi su rete MultiversX. Progettiamo e sviluppiamo prodotti decentralizzati, smart contract in Rust ad alte prestazioni e soluzioni Web3 innovative per collezionisti, creator e progetti.',
      en: 'OnionXLabs is a team of passionate builders on the MultiversX Network. We design and develop decentralized products, audited high-performance Rust smart contracts, and innovative Web3 solutions for collectors, creators, and projects.',
    },
    category: 'Web3',
    icon: 'Rocket',
    badge: {
      it: 'Builders MultiversX',
      en: 'MultiversX Builders',
    },
    accentGradient: 'from-cyan-400 via-purple-500 to-indigo-600',
    glowColor: 'cyan',
    ogImage: '/og/og-about-onionxlabs.png',
    highlights: [
      { it: 'Costruttori su rete MultiversX', en: 'Builders on MultiversX Network' },
      { it: 'Sviluppo Smart Contract Rust & DApp Web3', en: 'Rust Smart Contracts & Web3 DApp Development' },
      { it: 'Creatori del Marketplace e dell’Ecosistema OOX', en: 'Creators of the OOX Marketplace & Ecosystem' },
    ],
    metrics: [
      { label: { it: 'Network', en: 'Network' }, value: 'MultiversX' },
      { label: { it: 'Smart Contracts', en: 'Smart Contracts' }, value: 'Rust Audited' },
      { label: { it: 'Focus', en: 'Focus' }, value: 'Web3 & NFTs' },
    ],
    detailedContent: {
      heroHeading: {
        it: 'OnionXLabs • Costruttori su Rete MultiversX',
        en: 'OnionXLabs • Builders on MultiversX Network',
      },
      sectionTitle: {
        it: 'Sviluppiamo il futuro del Web3 su MultiversX',
        en: 'Building the Future of Web3 on MultiversX',
      },
      sectionDescription: {
        it: 'Dalla creazione di smart contract in Rust al design dell’ecosistema OOX.',
        en: 'From Rust smart contract engineering to OOX ecosystem architecture.',
      },
      keyBenefits: [],
    },
  },

  // ==========================================
  // 2. OVERVIEW
  // ==========================================
  {
    id: 'overview',
    slug: 'overview',
    isMain: true,
    title: {
      it: 'Overview',
      en: 'Overview',
    },
    subtitle: {
      it: 'Panoramica generale dell’ecosistema OOX',
      en: 'General overview of the OOX ecosystem',
    },
    shortDescription: {
      it: 'Esplora le collezioni trending, i volumi di scambio live e le attività recenti del marketplace OOX su MultiversX.',
      en: 'Explore trending collections, live trading volumes, and recent activity across OOX marketplace on MultiversX.',
    },
    fullDescription: {
      it: 'Immergiti nella panoramica di OOX e scopri molteplici motivi per iniziare a usarlo. Scopri le principali features. Ti innamorerai di OOX e non riuscirai più a farne a meno.',
      en: 'Immerse yourself in the OOX overview and discover multiple reasons to start using it. Explore the core features. You will fall in love with OOX and won’t be able to live without it.',
    },
    category: 'Marketplace',
    icon: 'Store',
    badge: {
      it: 'Main Feature',
      en: 'Main Feature',
    },
    accentGradient: 'from-cyan-400 via-blue-500 to-purple-600',
    glowColor: '#00f2fe',
    ogImage: '/og/og-overview.png',
    highlights: [
      {
        it: 'Vista d’insieme a 360° su volumi e collezioni',
        en: '360° overview on trading volume and collections',
      },
      {
        it: 'Dati live in tempo reale dalla blockchain MultiversX',
        en: 'Real-time live feeds directly from MultiversX blockchain',
      },
      {
        it: 'Ranking istantaneo delle collezioni Top & Trending',
        en: 'Instant ranking for Top & Trending collections',
      },
      {
        it: 'Feed delle ultime transazioni ed aste in corso',
        en: 'Live feed of recent transactions and active auctions',
      },
    ],
    metrics: [
      {
        label: { it: 'Collezioni Live', en: 'Live Collections' },
        value: '500+',
      },
      {
        label: { it: 'Volumi 24h', en: '24h Volume' },
        value: 'Real-time',
      },
      {
        label: { it: 'Velocità Sync', en: 'Sync Speed' },
        value: 'Instant',
      },
    ],
    detailedContent: {
      heroHeading: {
        it: 'Tutti i Dati del Marketplace in Un’Unica Dashboard',
        en: 'All Marketplace Data in One Unified Dashboard',
      },
      sectionTitle: {
        it: 'Il Punto di Partenza per Esplorare l’Ecosistema OOX',
        en: 'The Gateway to Exploring the OOX Ecosystem',
      },
      sectionDescription: {
        it: 'Monitora le performance delle collezioni, scopri le nuove tendenze e accedi direttamente alle schede di scambio.',
        en: 'Monitor collection performance, discover new trends, and jump directly into trading suites.',
      },
      keyBenefits: [
        {
          title: { it: 'Top & Trending Ranking', en: 'Top & Trending Rankings' },
          description: {
            it: 'Classifica automatica delle collezioni in base a volume, floor price e incremento percentuale.',
            en: 'Automated collection rankings by volume, floor price, and percentage gains.',
          },
          icon: 'TrendingUp',
        },
        {
          title: { it: 'Live Activity Feed', en: 'Live Activity Feed' },
          description: {
            it: 'Tracciamento visivo immediato di tutte le offerte, vendite e listing sul marketplace.',
            en: 'Immediate visual tracking of bids, sales, and listings across the marketplace.',
          },
          icon: 'Zap',
        },
        {
          title: { it: 'Advanced Search & Discovery', en: 'Advanced Search & Discovery' },
          description: {
            it: 'Trova qualsiasi collezione o NFT con filtri avanzati per rarità, attributi e prezzo.',
            en: 'Find any collection or NFT with advanced rarity, attribute, and price filters.',
          },
          icon: 'BarChart3',
        },
      ],
    },
  },

  // ==========================================
  // OUR COLLECTIONS FEATURE
  // ==========================================
  {
    id: 'our-collections',
    slug: 'our-collections',
    isMain: true,
    title: {
      it: 'Our Collections',
      en: 'Our Collections',
    },
    subtitle: {
      it: 'Le Collezioni Ufficiali dell’Ecosistema OOX',
      en: 'Official OOX Ecosystem Collections',
    },
    shortDescription: {
      it: 'Esplora le collezioni NFT ufficiali nate su OOX: arte digitale, utility esclusive, benefit per gli holder e rarità certificata Open Rarity.',
      en: 'Explore official NFT collections born on OOX: digital art, exclusive utility, holder perks, and Open Rarity certified scores.',
    },
    fullDescription: {
      it: 'OnionXLabs e l’ecosistema OOX presentano la selezione di collezioni ufficiali. Ogni collezione è progettata con smart contract auditati in Rust, rarità calcolata via Open Rarity, staking pool dedicate e vantaggi reali per i possessori.',
      en: 'OnionXLabs and the OOX ecosystem introduce the official suite of collections. Every collection is engineered with audited Rust smart contracts, Open Rarity scoring, dedicated staking pools, and real-world holder utilities.',
    },
    category: 'Marketplace',
    icon: 'Store',
    badge: {
      it: 'Collezioni Ufficiali',
      en: 'Official Collections',
    },
    accentGradient: 'from-purple-500 via-pink-500 to-cyan-400',
    glowColor: '#a855f7',
    ogImage: '/og/og-our-collections.png',
    highlights: [
      { it: 'Arte & Utility su Rete MultiversX', en: 'Art & Utility on MultiversX Network' },
      { it: 'Staking Pool Dedicate & Multiplier ONX', en: 'Dedicated Staking Pools & ONX Multipliers' },
      { it: 'Accesso Esclusivo ad Eventi & Airdrop', en: 'Exclusive Event Access & Airdrops' },
    ],
    metrics: [
      { label: { it: 'Collezioni Live', en: 'Live Collections' }, value: '4' },
      { label: { it: 'NFT Mintati', en: 'Minted NFTs' }, value: '7,055' },
      { label: { it: 'Volume Scambiato', en: 'Traded Volume' }, value: '4,080 EGLD' },
    ],
    detailedContent: {
      heroHeading: {
        it: 'Our Collections • Le Collezioni Ufficiali OOX',
        en: 'Our Collections • Official OOX Collections',
      },
      sectionTitle: {
        it: 'Esplora le Collezioni Ufficiali su MultiversX',
        en: 'Explore Official Collections on MultiversX',
      },
      sectionDescription: {
        it: 'Arte digitale d’eccellenza, utilità reali per gli holder e rarità certificata.',
        en: 'Excellence in digital art, real holder utilities, and certified rarity.',
      },
      keyBenefits: [],
    },
  },

  // ==========================================
  // 3. ABOUT ONX
  // ==========================================
  {
    id: 'about-onx',
    slug: 'about-onx',
    isMain: true,
    title: {
      it: 'About ONX',
      en: 'About ONX',
    },
    subtitle: {
      it: 'Il nostro utility token con i super poteri',
      en: 'Our utility token with superpowers',
    },
    shortDescription: {
      it: 'Il nostro utility token con i super poteri. La supply si riduce ad ogni voto, ti permette di listare al 50% delle FEE e ti premia con lo stake integrato su OOX.',
      en: 'Our utility token with superpowers. Total supply reduces with every vote, lets you list at 50% fees, and rewards you with built-in OOX staking.',
    },
    fullDescription: {
      it: 'ONX è l’utility token nativo con i super poteri dell’ecosistema OOX su MultiversX. Progettato per unire utilità economica, incentivi di rendimento e governance della community, $ONX ti permette di dimezzare le commissioni di compravendita sul marketplace allo 0.5%, accedere allo staking integrato e votare i tuoi NFT preferiti partecipando alla curatela dell’ecosistema.',
      en: 'ONX is the native utility token with superpowers powering the OOX ecosystem on MultiversX. Designed to merge financial utility, staking yields, and community governance, $ONX allows you to slash marketplace trading fees to 0.5%, unlock built-in staking rewards, and vote for your favorite NFTs while guiding ecosystem curation.',
    },
    category: 'Tokens',
    icon: 'Coins',
    badge: {
      it: 'Main Feature',
      en: 'Main Feature',
    },
    accentGradient: 'from-amber-400 via-orange-500 to-yellow-500',
    glowColor: '#f59e0b',
    ogImage: '/og/og-about-onx.png',
    highlights: [
      {
        it: 'Votazione dei singoli NFT per soli 20 $ONX',
        en: 'Individual NFT voting for just 20 $ONX',
      },
      {
        it: 'Scissione Smart Contract 50/50: 10 $ONX Burned + 10 $ONX Staking Pool',
        en: 'Smart Contract 50/50 split: 10 $ONX Burned + 10 $ONX Staking Pool',
      },
      {
        it: '50% di sconto sulle fee di compravendita del Marketplace (0.5%)',
        en: '50% marketplace trading fee discount (0.5%)',
      },
      {
        it: 'Staking flessibile ad alto rendimento in APR per gli holder',
        en: 'Flexible high-yield APR staking program for holders',
      },
    ],
    metrics: [
      {
        label: { it: 'Sconto Fee', en: 'Fee Discount' },
        value: '-50%',
      },
      {
        label: { it: 'Standard', en: 'Standard' },
        value: 'ESDT',
      },
      {
        label: { it: 'Network', en: 'Network' },
        value: 'MultiversX',
      },
    ],
    detailedContent: {
      heroHeading: {
        it: 'L’Utilità Completa del Token $ONX',
        en: 'The Complete Utility of the $ONX Token',
      },
      sectionTitle: {
        it: 'Perché Possedere $ONX nell’Ecosistema OOX',
        en: 'Why Hold $ONX in the OOX Ecosystem',
      },
      sectionDescription: {
        it: '$ONX unisce utilità economica, rendimento da staking e governance della community per tutti i collezionisti ed artisti.',
        en: '$ONX merges financial utility, staking yields, and community governance for all collectors and creators.',
      },
      keyBenefits: [
        {
          title: { it: 'Dimezza le Fee sul Marketplace', en: 'Half-Off Marketplace Fees' },
          description: {
            it: 'Elenca e acquista NFT in $ONX pagando solo lo 0.5% di fee anziché l’1.0%.',
            en: 'List and trade NFTs in $ONX paying just 0.5% fee instead of 1.0%.',
          },
          icon: 'TrendingUp',
        },
        {
          title: { it: 'Staking Rewards', en: 'Staking Rewards' },
          description: {
            it: 'Metti in staking $ONX per sbloccare APR dinamici ed accesso alle whitelist dei mint.',
            en: 'Stake $ONX to unlock dynamic APRs and mint whitelist priority access.',
          },
          icon: 'Sparkles',
        },
        {
          title: { it: 'Community Governance', en: 'Community Governance' },
          description: {
            it: 'Vota con i tuoi token per curare gli artisti in vetrina e guidare lo sviluppo di OOX.',
            en: 'Vote with your tokens to curate featured creators and guide OOX evolution.',
          },
          icon: 'Award',
        },
      ],
    },
  },

  // ==========================================
  // 4. EXPLORE, LIST, SELL & BUY (LISTING)
  // ==========================================
  {
    id: 'listing',
    slug: 'listing',
    isMain: true,
    title: {
      it: 'Explore, List, Sell & Buy',
      en: 'Explore, List, Sell & Buy',
    },
    subtitle: {
      it: 'La nuova dimensione del collezionismo digitale su MultiversX',
      en: 'The next era of digital collecting on MultiversX',
    },
    shortDescription: {
      it: 'Marketplace NFT ad alte prestazioni con commissioni ultra-basse, esecuzioni istantanee e massima sicurezza.',
      en: 'High-performance NFT marketplace featuring ultra-low fees, instant execution, and peak security.',
    },
    fullDescription: {
      it: 'OOX Marketplace reinterpreta il collezionismo digitale offrendo una piattaforma ultra-veloce, con costi di transazione minimi e contratti intelligenti auditati. Pensato per artisti, collezionisti e community Web3.',
      en: 'OOX Marketplace redefines digital collecting with an ultra-fast platform, minimal transaction costs, and audited smart contracts. Built for artists, collectors, and Web3 communities.',
    },
    category: 'Marketplace',
    icon: 'Store',
    badge: {
      it: 'Main Feature',
      en: 'Main Feature',
    },
    accentGradient: 'from-cyan-400 via-blue-500 to-purple-600',
    glowColor: '#00f2fe',
    ogImage: '/og/og-listing.png',
    highlights: [
      {
        it: '1-Click Auto-Swap: acquista subito anche se non possiedi il token di listing ($ONX, EGLD, etc.)',
        en: '1-Click Auto-Swap: Buy instantly even if you lack the listed token ($ONX, EGLD, etc.)',
      },
      {
        it: 'Listing in $ONX al 50% delle commissioni del marketplace (0.5% vs 1.0%)',
        en: 'Listing in $ONX at 50% marketplace fees (0.5% vs 1.0%)',
      },
      {
        it: 'Transazioni finalizzate in una singola operazione atomica',
        en: 'Transactions finalized in a single atomic operation',
      },
      {
        it: 'Supporto nativo per Royalties automatizzate agli artisti',
        en: 'Native automated royalties support for creators',
      },
    ],
    metrics: [],
    detailedContent: {
      heroHeading: {
        it: 'Compra, Vendi e Colleziona Artworks Digitali Esclusivi',
        en: 'Buy, Sell, and Collect Exclusive Digital Artworks',
      },
      sectionTitle: {
        it: 'Perché il Marketplace di OOX è differente',
        en: 'Why OOX Marketplace stands apart',
      },
      sectionDescription: {
        it: 'Progettato per la velocità della blockchain MultiversX, OOX Marketplace elimina l’attrito nelle transazioni consentendo scambi immediati direttamente dal tuo portafoglio mobile.',
        en: 'Engineered for the speed of MultiversX blockchain, OOX Marketplace removes friction, enabling instant trades directly from your mobile wallet.',
      },
      keyBenefits: [
        {
          title: { it: 'Trading Senza Attrito', en: 'Frictionless Trading' },
          description: {
            it: 'Inserisci le tue opere o acquista NFT con 1-click grazie all’integrazione nativa con xPortal e svariati wallet.',
            en: 'List or purchase NFTs in 1-click thanks to native integration with xPortal and multiple Web3 wallets.',
          },
          icon: 'Zap',
        },
        {
          title: { it: 'Filtri & Rari-Metrics Avanzate', en: 'Advanced Rarity Metrics' },
          description: {
            it: 'Calcolo automatico dell’OpenRarity e ranking integrato per identificare al volo gli asset più rari.',
            en: 'Automated OpenRarity scoring and integrated ranking to spot rare assets instantly.',
          },
          icon: 'BarChart3',
        },
        {
          title: { it: 'Notifiche in Tempo Reale', en: 'Real-Time Notifications' },
          description: {
            it: 'Rimani aggiornato su offerte, aste in scadenza e vendite direttamente sul tuo smartphone.',
            en: 'Stay updated on bids, expiring auctions, and sales directly on your mobile device.',
          },
          icon: 'Bell',
        },
      ],
    },
  },

  // ==========================================
  // 5. PROFILES
  // ==========================================
  {
    id: 'profiles',
    slug: 'profiles',
    isMain: false,
    title: {
      it: 'Web3 Identity & Profiles',
      en: 'Web3 Identity & Profiles',
    },
    subtitle: {
      it: 'La tua identità digitale unica ed espressiva',
      en: 'Your unique and expressive digital identity',
    },
    shortDescription: {
      it: 'Crea e personalizza il tuo profilo Web3. Se possiedi una CHUBBY OnionX nel tuo wallet, viene impostata subito ed automaticamente come tuo Avatar di profilo.',
      en: 'Create and customize your Web3 profile. If you hold a CHUBBY OnionX NFT in your wallet, it is automatically set as your profile Avatar.',
    },
    fullDescription: {
      it: 'Il tuo profilo su OOX è completo di tutto. Chubby automatica come avatar, controllo totale sui tuoi NFT e sui tuoi listing, collezioni e singoli NFT tra i preferiti, sistema di badge in base alle attività e tutte le statistiche che ti servono.',
      en: 'Your OOX profile has everything you need. Automatic Chubby avatar, total control over your NFTs and listings, favorite collections and single NFTs, activity badge system, and all the stats you need.',
    },
    category: 'Profiles',
    icon: 'UserCheck',
    badge: {
      it: 'Popular',
      en: 'Popular',
    },
    accentGradient: 'from-purple-500 via-pink-500 to-rose-500',
    glowColor: '#7928ca',
    ogImage: '/og/og-profiles.png',
    highlights: [
      {
        it: 'Avatar Automatico: Se possiedi una CHUBBY OnionX nel wallet viene impostata subito come Avatar',
        en: 'Automatic Avatar: Holding a CHUBBY OnionX in your wallet automatically assigns it as your Avatar',
      },
      {
        it: 'Vetrina dinamica delle collezioni e del portfolio NFT',
        en: 'Dynamic collection and NFT portfolio showcase',
      },
      {
        it: 'Integrazione diretta con i canali social Web2 e Web3',
        en: 'Direct integration with Web2 and Web3 social handles',
      },
      {
        it: 'Badge di Reputazione e tracciamento delle attività sul marketplace',
        en: 'Reputation badges and marketplace activity tracking',
      },
    ],
    metrics: [
      {
        label: { it: 'Verifica Avatar', en: 'Avatar Verification' },
        value: 'Instant',
      },
      {
        label: { it: 'Personalizzazione', en: 'Customization' },
        value: '100%',
      },
      {
        label: { it: 'Privacy', en: 'Privacy' },
        value: 'Decentralized',
      },
    ],
    detailedContent: {
      heroHeading: {
        it: 'Mostra al Mondo la Tua Collezione Digitale',
        en: 'Showcase Your Digital Collection to the World',
      },
      sectionTitle: {
        it: 'Un Hub Profilo Completo per Collezionisti e Creatori',
        en: 'A Comprehensive Profile Hub for Collectors & Creators',
      },
      sectionDescription: {
        it: 'Il tuo profilo OOX non è solo un indirizzo di wallet, ma una vera e propria carta d’identità digitale ad alta risoluzione.',
        en: 'Your OOX profile is more than a wallet address; it is a high-resolution digital identity card.',
      },
      keyBenefits: [
        {
          title: { it: 'NFT Avatar Verification', en: 'NFT Avatar Verification' },
          description: {
            it: 'Dimostra la proprietà effettiva del tuo PFP con la spunta di verifica blockchain automatica.',
            en: 'Prove true ownership of your PFP with automatic blockchain verification badge.',
          },
          icon: 'CheckCircle2',
        },
        {
          title: { it: 'Curated Showcase', en: 'Curated Showcase' },
          description: {
            it: 'Metti in risalto i tuoi NFT preferiti nella prima sezione del tuo profilo per massima visibilità.',
            en: 'Highlight your favorite NFTs at the top of your profile for maximum visibility.',
          },
          icon: 'Sparkles',
        },
        {
          title: { it: 'Badge & Achievement System', en: 'Badges & Achievements' },
          description: {
            it: 'Sblocca badge collezionabili completando missioni, partecipando ad eventi e supportando artisti.',
            en: 'Unlock collectible badges by completing quests, joining events, and supporting creators.',
          },
          icon: 'Award',
        },
      ],
    },
  },

  // ==========================================
  // 6. STUDIO CREATOR (TOOLS)
  // ==========================================
  {
    id: 'tools',
    slug: 'tools',
    isMain: true,
    title: {
      it: 'Studio Creator',
      en: 'Studio Creator',
    },
    subtitle: {
      it: 'Strumenti avanzati per creator, progetti ed esploratori',
      en: 'Advanced toolkit for creators, projects, and explorers',
    },
    shortDescription: {
      it: 'Suite di strumenti analitici e gestionali per lanciare collezioni, monitorare i trend e analizzare il mercato.',
      en: 'Suite of analytical and management tools to launch collections, track trends, and analyze the market.',
    },
    fullDescription: {
      it: 'La suite di tool OOX offre ad artisti e project manager strumenti completi per il tracciamento del floor price, la gestione di airdrop, la creazione di smart contract e l’analisi dei volumi in tempo reale.',
      en: 'The OOX tool suite provides creators and project leaders with floor price tracking, airdrop managers, smart contract deployers, and real-time volume analytics.',
    },
    category: 'Tools',
    icon: 'Palette',
    badge: {
      it: 'Main Feature',
      en: 'Main Feature',
    },
    accentGradient: 'from-blue-500 via-teal-400 to-emerald-500',
    glowColor: '#00c6ff',
    ogImage: '/og/og-tools.png',
    highlights: [
      {
        it: 'Analytics e grafici dei volumi in tempo reale',
        en: 'Real-time analytics and volume charts',
      },
      {
        it: 'Gestione Airdrop & Batch Transfer',
        en: 'Batch Airdrop & Multi-Transfer Manager',
      },
      {
        it: 'Launchpad & Smart Contract Deployer',
        en: 'Launchpad & Smart Contract Deployer',
      },
      {
        it: 'Alert su Floor Price e Whitelist',
        en: 'Floor Price and Whitelist alerts',
      },
    ],
    metrics: [
      {
        label: { it: 'Aggiornamento', en: 'Update Speed' },
        value: 'Real-time',
      },
      {
        label: { it: 'Batch Tx', en: 'Batch Tx' },
        value: 'Up to 500',
      },
      {
        label: { it: 'Accuratezza', en: 'Accuracy' },
        value: '100% On-chain',
      },
    ],
    detailedContent: {
      heroHeading: {
        it: 'Prendi Decisioni Informate con i Dati In Tempo Reale',
        en: 'Make Informed Decisions with Real-Time Data',
      },
      sectionTitle: {
        it: 'Strumenti di Precisione per il Mercato Web3',
        en: 'Precision Instruments for the Web3 Market',
      },
      sectionDescription: {
        it: 'Monitora l’andamento del mercato NFT e gestisci la tua community con gli strumenti nativi di OOX.',
        en: 'Monitor NFT market dynamics and manage your community using native OOX tools.',
      },
      keyBenefits: [
        {
          title: { it: 'Live Floor Price Tracking', en: 'Live Floor Price Tracking' },
          description: {
            it: 'Grafici interattivi sui volumi di scambio e andamento dei prezzi in tempo reale.',
            en: 'Interactive trading volume charts and live price trend indicators.',
          },
          icon: 'TrendingUp',
        },
        {
          title: { it: 'Airdrop Multi-Receiver', en: 'Multi-Receiver Airdrops' },
          description: {
            it: 'Distribuisci token o NFT a centinaia di destinatari con una singola operazione ottimizzata in gas.',
            en: 'Distribute tokens or NFTs to hundreds of recipients in a single gas-optimized transaction.',
          },
          icon: 'Send',
        },
        {
          title: { it: 'Smart Whitelist Manager', en: 'Smart Whitelist Manager' },
          description: {
            it: 'Gestisci le liste di accesso per i tuoi minting in modo trasparente e automatico.',
            en: 'Manage minting access lists seamlessly with automated transparency.',
          },
          icon: 'Users',
        },
      ],
    },
  },

  // ==========================================
  // 7. REAL OWNERSHIP (SECURITY)
  // ==========================================
  {
    id: 'security',
    slug: 'security',
    isMain: false,
    title: {
      it: 'Real Ownership',
      en: 'Real Ownership',
    },
    subtitle: {
      it: 'Quello che crei su OOX è réellement di tua proprietà',
      en: 'What you create on OOX is truly your property',
    },
    shortDescription: {
      it: 'Tutto ciò che crei, minti o scambi su OOX appartiene al 100% al tuo wallet. Proprietà reale e sovrana su rete MultiversX.',
      en: 'Everything you create, mint, or trade on OOX belongs 100% to your wallet. True digital ownership on MultiversX.',
    },
    fullDescription: {
      it: 'Proprietà reale, sovrana ed immutabile. Con OOX, collezioni, smart contract e metadati sono registrati direttamente sul tuo wallet e su IPFS, garantendo l’assoluto controllo del creatore senza lock-in centralizzati.',
      en: 'Real, sovereign, and immutable ownership. With OOX, collections, smart contracts, and metadata are tied directly to your wallet on IPFS, ensuring absolute creator control with zero centralized lock-in.',
    },
    category: 'Security',
    icon: 'ShieldCheck',
    badge: {
      it: 'Real Ownership',
      en: 'Real Ownership',
    },
    accentGradient: 'from-emerald-400 via-green-500 to-cyan-500',
    glowColor: '#10b981',
    ogImage: '/og/og-security.png',
    highlights: [
      {
        it: 'Smart Contract scritti in Rust ad altissima efficienza',
        en: 'High-efficiency smart contracts written in Rust',
      },
      {
        it: 'Nessun rischio di Reentrancy o vulnerabilità note',
        en: 'Zero reentrancy or vulnerability risks',
      },
      {
        it: 'Escrow decentralizzato senza intermediari',
        en: 'Decentralized escrow with zero intermediaries',
      },
      {
        it: 'Verifica automatica dei token ESDT / SFT / NFT',
        en: 'Automated verification of ESDT / SFT / NFT tokens',
      },
    ],
    metrics: [
      {
        label: { it: 'Rust SC', en: 'Rust SC' },
        value: 'Verified',
      },
      {
        label: { it: 'Audit Status', en: 'Audit Status' },
        value: 'Passed',
      },
      {
        label: { it: 'Non-Custodial', en: 'Non-Custodial' },
        value: '100%',
      },
    ],
    detailedContent: {
      heroHeading: {
        it: 'Infrastruttura Decentralizzata Non-Custodial',
        en: 'Non-Custodial Decentralized Infrastructure',
      },
      sectionTitle: {
        it: 'Il Massimo Livello di Protezione per i Tuoi Asset',
        en: 'Peak Protection for Your Assets',
      },
      sectionDescription: {
        it: 'Non dovrai mai cedere le tue chiavi private né affidare i tuoi NFT a terze parti centralizzate.',
        en: 'You never surrender private keys or entrust NFTs to centralized third parties.',
      },
      keyBenefits: [
        {
          title: { it: 'Atomic Swaps', en: 'Atomic Swaps' },
          description: {
            it: 'Gli scambi avvengono in maniera atomica: o la transazione è completata al 100% o viene annullata in sicurezza.',
            en: 'Trades operate atomically: either 100% completed or safely rolled back.',
          },
          icon: 'Lock',
        },
        {
          title: { it: 'ESDT Native Security', en: 'ESDT Native Security' },
          description: {
            it: 'Sfrutta la sicurezza nativa del protocollo MultiversX per la gestione dei token senza approvazioni illimitate pericolose.',
            en: 'Leverage native MultiversX protocol security for token handling without risky unlimited approvals.',
          },
          icon: 'ShieldAlert',
        },
        {
          title: { it: 'Zero Downtime', en: 'Zero Downtime' },
          description: {
            it: 'Architettura distribuita e resilient per garantire disponibilità costante 24 ore su 24.',
            en: 'Resilient distributed architecture providing 24/7 continuous availability.',
          },
          icon: 'Activity',
        },
      ],
    },
  },

  // ==========================================
  // 8. EVENTS
  // ==========================================
  {
    id: 'events',
    slug: 'events',
    isMain: true,
    title: {
      it: 'Events',
      en: 'Events',
    },
    subtitle: {
      it: 'Eventi ed esperienze Web3 esclusive',
      en: 'Exclusive Web3 events and experiences',
    },
    shortDescription: {
      it: 'Partecipa a minting live stream, incontri esclusivi con la community e ticketing NFT decentralizzato.',
      en: 'Join live minting streams, exclusive community meetups, and decentralized NFT ticketing.',
    },
    fullDescription: {
      it: 'OOX Events connette la community attraverso esperienze memorabili. Accedi ad aste a tempo limitato, ticketing NFT anti-bagarinaggio e dirette streaming riservate agli holder.',
      en: 'OOX Events connects the community through memorable experiences. Access limited-time auctions, scalper-free NFT ticketing, and holder-only live streams.',
    },
    category: 'Events',
    icon: 'Ticket',
    badge: {
      it: 'Main Feature',
      en: 'Main Feature',
    },
    accentGradient: 'from-pink-500 via-purple-500 to-indigo-500',
    glowColor: '#ec4899',
    ogImage: '/og/og-events.png',
    highlights: [
      {
        it: 'Ticketing NFT verificato su blockchain',
        en: 'On-chain verified NFT ticketing',
      },
      {
        it: 'Livestreaming esclusivi riservati agli Holder',
        en: 'Exclusive live streams reserved for holders',
      },
      {
        it: 'Accesso VIP ad eventi fisici e virtuali',
        en: 'VIP access to physical and virtual events',
      },
      {
        it: 'Integrazione diretta con notifiche Push',
        en: 'Direct integration with push notifications',
      },
    ],
    metrics: [
      {
        label: { it: 'Verifica Pass', en: 'Pass Check' },
        value: '< 1s',
      },
      {
        label: { it: 'Prevenzione Bot', en: 'Bot Prevention' },
        value: '100%',
      },
      {
        label: { it: 'Formato Ticket', en: 'Ticket Format' },
        value: 'NFT SFT',
      },
    ],
    detailedContent: {
      heroHeading: {
        it: 'Esperienze Uniche per Collezionisti e Community',
        en: 'Unique Experiences for Collectors & Community',
      },
      sectionTitle: {
        it: 'Rivoluziona la Gestione degli Eventi Web3',
        en: 'Revolutionizing Web3 Event Management',
      },
      sectionDescription: {
        it: 'Elimina il bagarinaggio e la falsificazione dei biglietti grazie al ticketing garantito dagli smart contract di OOX.',
        en: 'Eliminate ticket scalping and counterfeiting through guaranteed smart contract ticketing on OOX.',
      },
      keyBenefits: [
        {
          title: { it: 'NFT Ticketing Anti-Scalping', en: 'Anti-Scalping NFT Ticketing' },
          description: {
            it: 'Biglietti digitali non falsificabili con massimali di rivendita controllati via codice.',
            en: 'Unforgeable digital tickets with code-enforced resale price caps.',
          },
          icon: 'Ticket',
        },
        {
          title: { it: 'Exclusive Token-Gated Streams', en: 'Token-Gated Live Streams' },
          description: {
            it: 'Accedi ad eventi in diretta streaming dimostrando il possesso degli NFT nel tuo wallet.',
            en: 'Access live stream events by verifying NFT ownership in your mobile wallet.',
          },
          icon: 'Sparkles',
        },
        {
          title: { it: 'POAP & Event Badges', en: 'POAP & Event Badges' },
          description: {
            it: 'Ricevi automaticamente badge di partecipazione da mostrare sul tuo profilo OOX.',
            en: 'Automatically claim attendance badges to display on your OOX profile.',
          },
          icon: 'Award',
        },
      ],
    },
  },
];

export function getFeatureBySlug(slug: string): OOXFeatureMultilingual | undefined {
  return OOX_FEATURES.find((f) => f.slug === slug);
}
