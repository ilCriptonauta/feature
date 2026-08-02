'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { DICTIONARY, Language } from './dictionary';

export interface LocalizedString {
  it: string;
  en: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (keyPath: string) => string;
  getLocalized: (obj?: LocalizedString | string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('oox_lang') as Language | null;
    if (saved === 'it' || saved === 'en') {
      setLanguageState(saved);
    } else {
      setLanguageState('en');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('oox_lang', lang);
  };

  const t = (keyPath: string): string => {
    const keys = keyPath.split('.');
    let current: any = DICTIONARY[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to Italian
        let fallback: any = DICTIONARY['it'];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            return keyPath;
          }
        }
        return typeof fallback === 'string' ? fallback : keyPath;
      }
    }
    return typeof current === 'string' ? current : keyPath;
  };

  const getLocalized = (obj?: LocalizedString | string): string => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[language] || obj.it || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalized }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
