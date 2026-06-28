import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { label: 'Početna', to: '/' },
  { label: 'Meni', to: '/meni' },
  { label: 'O nama', to: '/o-nama' },
  { label: 'Kontakt', to: '/kontakt' },
];

export default function Layout() {
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
                src="/Logo ETA.pdf"
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

          <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.22em] md:flex">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.to} end={item.to === '/'} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/meni"
            className="hidden rounded-full border border-[#1f5a3a] bg-[#123322] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#F8F5EF] transition hover:bg-[#1f5a3a] md:inline-flex"
          >
            Pogledaj meni
          </NavLink>
        </div>
      </header>

      <main className="pb-24 md:pb-32">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-[#080808] px-4 py-8 text-sm text-[#A7A7A7] md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-[#F8F5EF]">ETA Burger Bar</p>
            <p className="mt-1 max-w-md text-sm text-[#A7A7A7]">
              Burgeri, pomfrit i street food kombinacije pripremljene za pravi zalogaj.
            </p>
          </div>

          <p className="text-xs uppercase tracking-[0.16em]">
            © 2026 ETA Burger Bar
          </p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-[#080808]/95 px-3 py-2 text-[#F8F5EF] backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-7xl gap-1 text-[10px] font-semibold uppercase tracking-[0.14em]">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/'}
              className={mobileNavClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}