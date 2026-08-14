import ProductCard from '../components/ProductCard.jsx';
import { menuItems } from '../data/menuData.js';
import { useLanguage } from '../contexts/LanguageContext';

export default function Menu() {
  const comboItems = menuItems.filter((item) => item.category === 'combo');
  const chickenItems = menuItems.filter((item) => item.category === 'piletina-i-sir');
  const pancakeItems = menuItems.filter((item) => item.category === 'palacinci');
  const sideItems = menuItems.filter((item) => item.category === 'prilozi');

  const chickenPreview = [
    {
      id: 'pohovana-piletina-preview',
      label: 'Pohovana piletina',
      image: 'https://images.unsplash.com/photo-1605475127295-3a692f1a2fba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'chicken-nuggets-preview',
      label: 'Chicken Nuggets',
      image: 'https://images.unsplash.com/photo-1607335487491-d432a62f2d7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'pohovani-sir-preview',
      label: 'Pohovani sir',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
  ];

  const pancakePreview = [
    {
      id: 'dubai-palacinka-preview',
      label: 'Dubai palačinka',
      image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'pistacija-palacinka-preview',
      label: 'Pistacija palačinka',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'raffaelo-palacinka-preview',
      label: 'Raffaelo palačinka',
      image: 'https://images.unsplash.com/photo-1511688878355-9c4f627aba61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
  ];

  const sidePreview = [
    {
      id: 'pomfrit-preview',
      label: 'Pomfrit',
      image: 'https://images.unsplash.com/photo-1559622212-3f0f03ddbaf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'kecap-preview',
      label: 'Kečap',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'majoneza-preview',
      label: 'Majoneza',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
  ];

  const { t } = useLanguage();

  return (
    <div className="px-4 pt-8 pb-20 md:px-6 lg:px-8">
      <div className="mx-auto mt-10 grid max-w-7xl gap-8">
        <section className="rounded-[40px] border border-white/10 bg-[#171717] p-6 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
          <p className="text-sm uppercase tracking-[0.32em] text-[#FF6A00] text-center md:text-left">{t('nav.viewMenu')}</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#F8F5EF] sm:text-4xl text-center md:text-left">{t('pages.menuChoose')}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#burgers" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#F8F5EF] transition hover:bg-white/10">{t('pages.burgers')}</a>
            <a href="#piletina" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#F8F5EF] transition hover:bg-white/10">{t('pages.chicken')}</a>
            <a href="#palacinci" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#F8F5EF] transition hover:bg-white/10">{t('pages.pancakes')}</a>
            <a href="#prilozi" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#F8F5EF] transition hover:bg-white/10">{t('pages.sides')}</a>
          </div>
        </section>

        <section id="burgers" className="scroll-mt-24 rounded-[40px] border border-white/10 bg-[#171717] p-6 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
          <h2 className="text-2xl font-semibold text-[#F8F5EF] text-center md:text-left">{t('pages.burgers')}</h2>
          <p className="mt-2 text-sm text-[#A3A3A3] text-center md:text-left">{t('pages.menuIntro')}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {comboItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section id="piletina" className="scroll-mt-24 rounded-[40px] border border-white/10 bg-[#171717] p-6 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
          <h2 className="text-2xl font-semibold text-[#F8F5EF] text-center md:text-left">{t('pages.chicken')}</h2>
          <p className="mt-2 text-sm text-[#A3A3A3] text-center md:text-left">Hrskava piletina i prženi sir, servirani uz prateće priloge.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {chickenItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section id="palacinci" className="scroll-mt-24 rounded-[40px] border border-white/10 bg-[#171717] p-6 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
          <h2 className="text-2xl font-semibold text-[#F8F5EF] text-center md:text-left">{t('pages.pancakes')}</h2>
          <p className="mt-2 text-sm text-[#A3A3A3] text-center md:text-left">Slatke palačinke sa premium kremovima i voćnim dodacima.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {pancakeItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section id="prilozi" className="scroll-mt-24 rounded-[40px] border border-white/10 bg-[#171717] p-6 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
          <h2 className="text-2xl font-semibold text-[#F8F5EF] text-center md:text-left">{t('pages.sides')}</h2>
          <p className="mt-2 text-sm text-[#A3A3A3] text-center md:text-left">Dodaci koji upotpunjuju svaki obrok.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {sideItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
