import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // always start with null so loading/language selector shows on every full load
  const [lang, setLang] = useState(null);
  const [savedLang, setSavedLang] = useState(null);

  useEffect(() => {
    try {
      const s = window.localStorage.getItem('lang');
      if (s) setSavedLang(s);
    } catch (e) {
      // ignore
    }
  }, []);

  const setLanguage = (l) => {
    setLang(l);
    try {
      window.localStorage.setItem('lang', l);
      setSavedLang(l);
    } catch (e) {
      // ignore
    }
  };

  const resetLanguage = () => {
    setLang(null);
    try {
      window.localStorage.removeItem('lang');
      setSavedLang(null);
    } catch (e) {
      // ignore
    }
  };

  const t = (path) => {
    const parts = path.split('.');
    let node = translations;
    for (let i = 0; i < parts.length; i++) {
      if (!node) return undefined;
      if (node.bs || node.en) {
        node = node[lang] ?? node.bs ?? node.en;
      }
      node = node[parts[i]];
    }
    if (node && (node.bs || node.en)) return node[lang] ?? node.bs;
    return node;
  };

  const translateMenuItem = (item) => {
    const trans = translations.menu?.[item.id]?.[lang];
    const name = trans?.name ?? item.name;
    const description = trans?.description ?? item.description;
    const categoryLabel = item.categoryLabel;
    return { ...item, name, description, categoryLabel };
  };

  const formatPrice = (rawPrice) => {
    const price = Number.parseFloat(String(rawPrice).replace(/[^0-9,.-]/g, '').replace(',', '.'));
    if (!Number.isFinite(price)) return rawPrice;
    if (lang === 'bs') {
      return `${price.toFixed(2).replace('.', ',')} KM`;
    }
    return `${price.toFixed(2)} KM`;
  };

  const value = { lang, setLang: setLanguage, resetLanguage, t, translateMenuItem, formatPrice };

  // when no language selected, show a full-screen language selector / loading screen
  if (!lang) {
    return (
      <LanguageContext.Provider value={value}>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080808] text-[#F8F5EF]">
              <div className="mx-auto w-full max-w-lg p-8 text-center">
                <img src="/etaLOGOPNG%20(2).png" alt="ETA logo" className="mx-auto mb-6 h-40 w-40 object-contain logo-animate" />
            <h2 className="mb-6 text-3xl font-semibold">{t('ui.languageTitle')}</h2>
            <div className="flex items-center justify-center gap-6">
              <button
                className={`rounded-md border px-8 py-4 text-lg font-semibold uppercase ${savedLang === 'bs' ? 'border-white/60' : 'border-white/10'}`}
                onClick={() => setLanguage('bs')}
              >
                {t('ui.bsFull')}
              </button>
              <button
                className={`rounded-md border px-8 py-4 text-lg font-semibold uppercase ${savedLang === 'en' ? 'bg-[#1f5a3a] text-[#F8F5EF]' : 'border-white/10'}`}
                onClick={() => setLanguage('en')}
              >
                {t('ui.enFull')}
              </button>
            </div>
              </div>
            </div>
      </LanguageContext.Provider>
    );
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};

export default LanguageContext;
