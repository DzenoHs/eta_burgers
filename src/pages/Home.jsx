import { useEffect, useState } from 'react';
import Menu from './Menu.jsx';

const titles = ['burgeri koji dižu standard', 'burgers that raise the standard'];

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId;
    const interval = window.setInterval(() => {
      setIsVisible(false);
      timeoutId = window.setTimeout(() => {
        setTitleIndex((current) => (current === 0 ? 1 : 0));
        setIsVisible(true);
      }, 220);
    }, 4200);

    return () => {
      window.clearInterval(interval);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#080808]">
      <section className="relative min-h-[620px] overflow-hidden bg-[#080808] md:min-h-[720px]">
        <img
          src="/hero-burger.webp"
          alt="ETA Burger Bar burger"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/35 to-black/25" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center justify-center px-4 py-20 text-center md:min-h-[720px] md:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8FAF9B] md:text-sm">
              ETA Burger Bar
            </p>

            <div className="mt-5 flex min-h-[4.5rem] items-center justify-center sm:min-h-[5.5rem] lg:min-h-[6.5rem]">
              <h1 className="text-center text-5xl font-black uppercase leading-[0.95] tracking-tight text-[#F8F5EF] sm:text-6xl lg:text-8xl">
                <span
                  className={`block transition-all duration-700 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  {titles[titleIndex]}
                </span>
              </h1>
            </div>

            <div className="mt-9">
              <a
                href="#meni"
                className="inline-flex items-center justify-center rounded-full bg-[#1f5a3a] px-9 py-4 text-xs font-black uppercase tracking-[0.22em] text-[#F8F5EF] transition hover:bg-[#2b704b] sm:text-sm"
              >
                Pogledaj meni
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="meni" className="scroll-mt-24 bg-[#080808]">
        <Menu />
      </div>
    </div>
  );
}
