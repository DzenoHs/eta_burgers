import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const navItems = [
  { key: 'home', to: '/' },
  { key: 'menu', to: '/meni' },
  { key: 'about', to: '/o-nama' },
  { key: 'contact', to: '/kontakt' },
];

export default function Layout() {
  const { t, lang, setLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navLinkClass = ({ isActive }) =>
    `relative transition ${
      isActive
        ? 'text-[#F8F5EF] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-[#1f5a3a]'
        : 'text-[#A7A7A7] hover:text-[#F8F5EF]'
    }`;

  const mobileNavClass = ({ isActive }) =>
    `flex-1 rounded-2xl px-2 py-2 text-center transition ${
      isActive
        ? 'bg-[#123322] text-[#F8F5EF]'
        : 'text-[#A7A7A7] hover:text-[#F8F5EF]'
    }`;

  return (
    <div className="min-h-screen bg-[#080808] text-[#F8F5EF]">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#080808]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
          <NavLink to="/" className="inline-flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#101010] md:h-12 md:w-12">
              <img
                src="/etaLOGOPNG%20(2).png"
                alt="ETA Burger Bar logo"
                className="h-full w-full object-contain p-1.5"
              />
            </span>

            <span className="leading-tight">
              <span className="block text-sm font-bold uppercase tracking-[0.28em] text-[#F8F5EF]">
                ETA
              </span>
              <span className="block text-xs font-medium uppercase tracking-[0.18em] text-[#8FAF9B]">
                Burger Bar
              </span>
            </span>
          </NavLink>

          {/** desktop nav */}
          <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.22em] md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navLinkClass}>
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <NavLink
              to="/meni"
              className="rounded-full border border-[#1f5a3a] bg-[#123322] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#F8F5EF] transition hover:bg-[#1f5a3a] md:inline-flex"
            >
              {t('nav.viewMenu')}
            </NavLink>

            {/* language toggle */}
            <div className="flex items-center gap-2">
              <button
                aria-label="BS"
                className={`rounded px-3 py-1 text-sm ${lang === 'bs' ? 'opacity-100 font-bold' : 'opacity-70'}`}
                onClick={() => setLang('bs')}
              >
                BS
              </button>
              <span className="text-[#A3A3A3]">|</span>
              <button
                aria-label="EN"
                className={`rounded px-3 py-1 text-sm ${lang === 'en' ? 'opacity-100 font-bold' : 'opacity-70'}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>
          </div>

          {/* mobile hamburger */}
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen((s) => !s)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0b0b0b]"
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M0 1.75H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M0 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M0 12.25H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 md:hidden">
          <div className="mx-auto h-full max-w-sm bg-[#111111] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-lg">ETA</p>
              </div>
              <button onClick={() => setMobileOpen(false)} className="text-sm text-[#A3A3A3]">Zatvori</button>
            </div>
            <nav className="mt-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="text-lg font-semibold">
                  {t(`nav.${item.key}`)}
                </NavLink>
              ))}
            </nav>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  setLang('bs');
                  setMobileOpen(false);
                }}
                className={`rounded px-3 py-2 text-sm ${lang === 'bs' ? 'opacity-100 font-bold' : 'opacity-80'}`}
              >
                {t('ui.bsFull')}
              </button>
              <button
                onClick={() => {
                  setLang('en');
                  setMobileOpen(false);
                }}
                className={`rounded px-3 py-2 text-sm ${lang === 'en' ? 'opacity-100 font-bold' : 'opacity-80'}`}
              >
                {t('ui.enFull')}
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="pb-24 md:pb-32">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-[#080808] px-4 py-6 text-sm text-[#A7A7A7] md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-[#F8F5EF]">ETA Burger Bar</p>
            <p className="mt-1 max-w-md text-sm text-[#A7A7A7]">{t('footer.description')}</p>
            <div className="mt-2 text-sm text-[#A3A3A3]">
              <p className="font-semibold">{t('contact.openingHours')}</p>
              <p className="mt-1">{t('contact.mondayFriday')}</p>
              <p>{t('contact.sunday')}</p>
            </div>
          </div>

          <p className="text-xs uppercase tracking-[0.16em]">{t('footer.copyright')}</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-[#080808]/95 px-3 py-2 text-[#F8F5EF] backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <div className="flex w-full gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={mobileNavClass}>
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="BS"
              className={`rounded px-3 py-2 text-sm ${lang === 'bs' ? 'opacity-100 font-bold' : 'opacity-70'}`}
              onClick={() => setLang('bs')}
            >
              BS
            </button>
            <button
              aria-label="EN"
              className={`rounded px-3 py-2 text-sm ${lang === 'en' ? 'opacity-100 font-bold' : 'opacity-70'}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}