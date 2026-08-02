'use client';

import { Sparkles, Globe } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t, getLocalized } = useLanguage();

  return (
    <footer className="w-full border-t border-black/5 dark:border-white/10 glass-card mt-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/oox-logo-dark.png" 
                alt="OOX" 
                className="h-10 sm:h-12 w-auto hidden dark:block object-contain" 
              />
              <img 
                src="/oox-logo-light.png" 
                alt="OOX" 
                className="h-10 sm:h-12 w-auto block dark:hidden object-contain" 
              />
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                features
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://x.com/OOX_Marketplace"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-500/10 hover:bg-cyan-500/20 text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="X (ex Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://discord.gg/WVSMrNzqNb"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-500/10 hover:bg-cyan-500/20 text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="Discord"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a
                href="https://t.me/onionxlabs"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-500/10 hover:bg-cyan-500/20 text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
              <a
                href="https://oox.art"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-500/10 hover:bg-cyan-500/20 text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Ecosystem Info */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-4">
              {t('footer.ecosystemTitle')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://oox.art" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-cyan-400 transition-colors flex items-center space-x-1">
                  <span>OOX Marketplace</span>
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://multiversx.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Multiversx
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} OOX features. {t('footer.rights')} • Created by OnionXLabs</p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t('footer.status')}</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
