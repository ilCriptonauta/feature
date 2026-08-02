'use client';

import { 
  Rocket, 
  ShieldCheck, 
  Code2, 
  Cpu, 
  Zap, 
  Sparkles, 
  Globe, 
  Layers,
  CheckCircle2,
  Send,
  MessageSquare,
  Users,
  Palette,
  Wrench
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function AboutOnionXLabsBanner() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  return (
    <section className="relative rounded-3xl p-4 sm:p-8 glass-card border border-cyan-500/30 overflow-hidden space-y-10 shadow-2xl">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* HERO HERO INTRODUCTION WITH TRANSPARENT LOGO */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-black/5 dark:border-white/10 pb-8">
        
        <div className="space-y-4 max-w-2xl text-center md:text-left">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
            <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isIt ? 'Chi Siamo • OnionXLabs' : 'About Us • OnionXLabs'}</span>
          </div>

          <h1 className="text-2xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight break-words">
            About <span className="gradient-text-cyan-purple">OnionXLabs</span>
          </h1>

          <p className="text-base sm:text-xl font-bold text-cyan-500 dark:text-cyan-400">
            {isIt 
              ? 'Costruttori su rete MultiversX' 
              : 'Builders on MultiversX Network'}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {isIt
              ? 'Siamo un team di sviluppatori, ingegneri e visionari focalizzati sulla costruzione di infrastrutture decentralizzate ad alte prestazioni sulla blockchain MultiversX. Dalla scrittura di smart contract sicuri in Rust all’architettura di DApp moderne come OOX, trasformiamo idee complesse in prodotti semplici, veloci e trasparenti per la community.'
              : 'We are a team of developers, engineers, and visionaries building high-performance decentralized infrastructure on the MultiversX blockchain. From writing audited Rust smart contracts to engineering modern DApps like OOX, we turn complex ideas into simple, fast, and transparent products for the Web3 community.'}
          </p>
        </div>

        {/* LOGO DISPLAY CONTAINER (ADAPTIVE LIGHT & DARK VERSION) */}
        <div className="relative shrink-0 flex items-center justify-center p-6 rounded-3xl bg-slate-900/60 dark:bg-slate-950/80 border border-cyan-500/40 shadow-2xl backdrop-blur-xl group hover:border-cyan-400 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-transparent rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
          <img 
            src="/onionxlabs-logo.png" 
            alt="OnionXLabs Logo" 
            className="w-40 sm:w-48 h-auto object-contain filter drop-shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>

      {/* WHAT WE DO - 3 CORE PILLARS */}
      <div className="relative z-10 space-y-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {isIt ? 'Cosa Facciamo' : 'What We Do'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-medium">
            {isIt ? 'I nostri ambiti di sviluppo e specializzazione su MultiversX' : 'Our development domains and core expertise on MultiversX'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Pillar 1: Smart Contracts */}
          <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-3 shadow-lg hover:border-cyan-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900 dark:text-white">
              {isIt ? 'Smart Contract Ingegnerizzati in Rust' : 'Rust Smart Contract Engineering'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'Progettiamo e sviluppiamo smart contract in Rust nativi per MultiversX. Massima sicurezza on-chain, esecuzione deterministica ed ottimizzazione maniacale dei consumi di gas.'
                : 'We design and develop native Rust smart contracts for MultiversX with maximum on-chain security, deterministic execution, and gas efficiency.'}
            </p>
          </div>

          {/* Pillar 2: Ecosystem Products */}
          <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-3 shadow-lg hover:border-purple-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900 dark:text-white">
              {isIt ? 'Ecosistema OOX & Prodotti Web3' : 'OOX Ecosystem & Web3 Products'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'Siamo gli autori del marketplace OOX, del pass VIP OOX+, dello Studio Creator, delle Staking Pools e delle piattaforme di Vending Machine e Lotterie.'
                : 'We are the creators of the OOX marketplace, OOX+ VIP pass, Studio Creator, Staking Pools, Vending Machines, and Raffle engines.'}
            </p>
          </div>

          {/* Pillar 3: Creator & Partner Solutions */}
          <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-3 shadow-lg hover:border-amber-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900 dark:text-white">
              {isIt ? 'Soluzioni su Misura per Progetti' : 'Custom Solutions for Web3 Projects'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {isIt
                ? 'Offriamo consulenza e sviluppo su misura per collezioni, token e progetti che vogliono integrarsi e beneficiare dell’ecosistema MultiversX.'
                : 'We provide technical consulting and custom development for collections, tokens, and projects integrating with MultiversX.'}
            </p>
          </div>

        </div>
      </div>

      {/* TEAM SECTION - CHI C'È DIETRO? */}
      <div className="relative z-10 space-y-6 pt-6 border-t border-black/5 dark:border-white/10">
        <div className="text-center md:text-left space-y-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-extrabold">
            <Users className="w-3.5 h-3.5" />
            <span>{isIt ? 'Il Team • OnionXLabs' : 'The Team • OnionXLabs'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
            {isIt ? 'Chi c’è dietro?' : 'Who is behind it?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
            {isIt 
              ? 'Le menti ed i talenti che guidano la visione tecnologica e creativa di OnionXLabs e dell’ecosistema OOX.' 
              : 'The creative and engineering minds driving the technological vision of OnionXLabs and OOX.'}
          </p>
        </div>

        {/* 2 TEAM MEMBERS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* FRANCESCO (ilCriptonauta) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-purple-500/40 shadow-xl space-y-6 flex flex-col justify-between hover:border-purple-400 transition-all text-center">
            <div className="space-y-5">
              
              {/* CENTERED LARGER AVATAR */}
              <div className="flex flex-col items-center space-y-3">
                <div className="relative">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl p-1.5 bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-400 shadow-2xl">
                    <img 
                      src="/team-andrea.jpg" 
                      alt="Francesco (ilCriptonauta)" 
                      className="w-full h-full object-cover rounded-2xl bg-slate-900"
                    />
                  </div>
                </div>

                {/* CENTERED NAME, NICKNAME & ROLE */}
                <div className="pt-2 space-y-1 text-center">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                    Francesco
                  </h3>
                  <div>
                    <a 
                      href="https://x.com/ilcriptonauta" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-extrabold text-purple-600 dark:text-purple-400 hover:underline hover:text-cyan-400 transition-colors inline-block"
                    >
                      @ilcriptonauta
                    </a>
                  </div>
                  <p className="text-xs font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-wide pt-0.5">
                    Founder & Creative Director 🎨
                  </p>
                </div>
              </div>

              {/* BIO TEXT */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium text-center sm:text-left">
                {isIt
                  ? 'Founder. Illustratore e investitore EGLD dal 2018. Creatore di NFT dal 2021. Ex sistemista Apple e creativo con una profonda conoscenza degli NFT.'
                  : 'Founder. Illustrator and EGLD investor since 2018. NFT creator since 2021. Former Apple system engineer and creative with a deep knowledge of NFTs.'}
              </p>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-3 border-t border-slate-200 dark:border-white/10 text-[10px] font-bold">
              <span className="px-2.5 py-1 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20">Apple Ex-Engineer</span>
              <span className="px-2.5 py-1 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/20">EGLD OG 2018</span>
              <span className="px-2.5 py-1 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20">NFT Creator 2021</span>
            </div>
          </div>

          {/* ANDREA (Paix87) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-cyan-500/40 shadow-xl space-y-6 flex flex-col justify-between hover:border-cyan-400 transition-all text-center">
            <div className="space-y-5">
              
              {/* CENTERED LARGER AVATAR */}
              <div className="flex flex-col items-center space-y-3">
                <div className="relative">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl p-1.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 shadow-2xl">
                    <img 
                      src="/team-francesco.jpg" 
                      alt="Andrea (Paix87)" 
                      className="w-full h-full object-cover rounded-2xl bg-slate-900"
                    />
                  </div>
                </div>

                {/* CENTERED NAME, NICKNAME & ROLE */}
                <div className="pt-2 space-y-1 text-center">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                    Andrea
                  </h3>
                  <div>
                    <a 
                      href="https://x.com/paix87" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-extrabold text-cyan-600 dark:text-cyan-400 hover:underline hover:text-purple-400 transition-colors inline-block"
                    >
                      @paix87
                    </a>
                  </div>
                  <p className="text-xs font-black text-purple-600 dark:text-purple-400 uppercase tracking-wide pt-0.5">
                    Co-Founder & Software Developer 💻
                  </p>
                </div>
              </div>

              {/* BIO TEXT */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium text-center sm:text-left">
                {isIt
                  ? 'Software developer e co-founder di oox.art. Con un background che unisce progettazione strutturale e ingegneria del software (in particolare C++ e Rust), si concentra su smart contract ed applicazioni decentralizzate all\'interno dell\'ecosistema MultiversX.'
                  : 'Software developer and co-founder of oox.art. With a background combining structural design and software engineering (specifically C++ and Rust), he focuses on smart contracts and decentralized applications within the MultiversX ecosystem.'}
              </p>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-3 border-t border-slate-200 dark:border-white/10 text-[10px] font-bold">
              <span className="px-2.5 py-1 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20">Rust & C++ Lead</span>
              <span className="px-2.5 py-1 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20">Structural Engineer</span>
              <span className="px-2.5 py-1 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20">MultiversX Smart Contracts</span>
            </div>
          </div>

        </div>
      </div>

      {/* CUSTOM SOLUTIONS SECTION - TECNICHE & ARTISTICHE */}
      <div className="relative z-10 space-y-8 pt-8 border-t border-black/5 dark:border-white/10">
        
        {/* SECTION HEADER */}
        <div className="text-center md:text-left space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold tracking-wide">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isIt ? 'Servizi Custom • OnionXLabs' : 'Custom Services • OnionXLabs'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {isIt ? (
              <>Soluzioni su misura. <span className="gradient-text-cyan-purple">Sia tecniche che artistiche.</span></>
            ) : (
              <>Tailored solutions. <span className="gradient-text-cyan-purple">Both technical and artistic.</span></>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium max-w-3xl">
            {isIt
              ? 'Mettiamo a disposizione la nostra esperienza ingegneristica ed artistica per realizzare la tua visione su rete MultiversX.'
              : 'We combine our engineering expertise and artistic mastery to bring your Web3 vision to life on the MultiversX network.'}
          </p>
        </div>

        {/* 2 CUSTOM SOLUTIONS CARDS (TECHNICAL & ARTISTIC) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* CARD 1: SOLUZIONI TECNICHE (dApp & Smart Contracts) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 dark:bg-slate-950/90 border border-cyan-500/40 shadow-2xl space-y-6 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-400 transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shadow-lg">
                <Code2 className="w-7 h-7" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {isIt
                  ? 'Hai bisogno di una dApp o di uno smart contract su rete MultiversX?'
                  : 'Need a custom dApp or smart contract on MultiversX?'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                {isIt
                  ? 'Entra in contatto con noi. Comunicaci tutti i dettagli necessari e ti contatteremo con un preventivo su misura.'
                  : 'Get in touch with us. Provide us with all necessary details and we will contact you with a customized quote.'}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 relative z-10">
              <a
                href="https://t.me/onionxlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs flex items-center justify-center space-x-2 shadow-lg transition-all"
              >
                <Send className="w-4 h-4 fill-current" />
                <span>{isIt ? 'Contattaci su Telegram' : 'Contact on Telegram'}</span>
              </a>

              <a
                href="https://discord.gg/WVSMrNzqNb"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-white/10 font-black text-xs flex items-center justify-center space-x-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isIt ? 'Apri Ticket su Discord' : 'Open Ticket on Discord'}</span>
              </a>
            </div>
          </div>

          {/* CARD 2: SOLUZIONI ARTISTICHE (Collezioni NFT & Produzione) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 dark:bg-slate-950/90 border border-purple-500/40 shadow-2xl space-y-6 flex flex-col justify-between relative overflow-hidden group hover:border-purple-400 transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center shadow-lg">
                <Palette className="w-7 h-7" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {isIt
                  ? 'Vuoi creare la tua prima collezione NFT su rete MultiversX?'
                  : 'Want to create your first NFT collection on MultiversX?'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                {isIt
                  ? 'Dalla produzione alla distribuzione. Abbiamo tutti gli strumenti che ti servono per l’art direction, il minting ed il listing. Contattaci.'
                  : 'From production to distribution. We have all the tools you need for art direction, minting, and marketplace listing. Contact us.'}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 relative z-10">
              <a
                href="https://t.me/onionxlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-black text-xs flex items-center justify-center space-x-2 shadow-lg transition-all"
              >
                <Send className="w-4 h-4 fill-current" />
                <span>{isIt ? 'Crea Collezione (Telegram)' : 'Launch NFT (Telegram)'}</span>
              </a>

              <a
                href="https://discord.gg/WVSMrNzqNb"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-white/10 font-black text-xs flex items-center justify-center space-x-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isIt ? 'Parla su Discord' : 'Chat on Discord'}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
