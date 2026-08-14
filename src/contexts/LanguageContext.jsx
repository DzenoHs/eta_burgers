import React, { createContext, useContext, useMemo, useState } from 'react';
import translations from '../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(null);

  const value = useMemo(() => {
    const t = (path) => {
      // robust lookup: when encountering a node with language branches (bs/en),
      // select the current language and continue resolving remaining parts.
      const parts = path.split('.');
      let node = translations;
      for (let i = 0; i < parts.length; i++) {
        if (!node) return undefined;

        // if node already has language branches, pick the current language branch
        if (node.bs || node.en) {
          node = node[lang] ?? node.bs ?? node.en;
        }

        node = node[parts[i]];
      }

      // final fallback if the node itself is a language branch
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
      // English: use dot decimal
      return `${price.toFixed(2)} KM`;
    };

    return { lang, setLang, t, translateMenuItem, formatPrice };
  }, [lang]);

  // when no language selected, show a full-screen language selector / loading screen
  if (!lang) {
    return (
      <LanguageContext.Provider value={value}>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080808] text-[#F8F5EF]">
              <div className="mx-auto w-full max-w-lg p-8 text-center">
                <img src="/etaLOGOPNG%20(2).png" alt="ETA logo" className="mx-auto mb-6 h-40 w-40 object-contain logo-animate" />
                <h2 className="mb-6 text-3xl font-semibold">{value.t('ui.languageTitle')}</h2>
                <div className="flex items-center justify-center gap-6">
                  <button
                    className="rounded-md border border-white/10 px-8 py-4 text-lg font-semibold uppercase"
                    onClick={() => setLang('bs')}
                  >
                    {value.t('ui.bsFull')}
                  </button>
                  <button
                    className="rounded-md border border-white/10 bg-[#1f5a3a] px-8 py-4 text-lg font-semibold uppercase text-[#F8F5EF]"
                    onClick={() => setLang('en')}
                  >
                    {value.t('ui.enFull')}
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
