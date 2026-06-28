import SectionHeader from '../components/SectionHeader.jsx';
import StickyCategoryNav from '../components/StickyCategoryNav.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { menuItems } from '../data/menuData.js';

export default function Burgers() {
  const items = menuItems.filter((item) => item.category === 'burgeri');

  return (
    <div className="px-4 pt-8 pb-20 md:px-6 lg:px-8">
      <SectionHeader
        highlight="Burgeri"
        title="Smash burgeri s fokusom na teksturu i ukus"
        description="Svaka kreacija je balansirana tako da izgleda oštro, zvuči moćno i jednostavno se pamti." 
      />

      <StickyCategoryNav />

      <div className="mx-auto mt-10 max-w-7xl space-y-8">
        <div className="rounded-[40px] border border-white/10 bg-[#171717] p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
          <p className="text-sm uppercase tracking-[0.35em] text-[#A3A3A3]">Filter</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-3xl bg-[#121212] p-4 text-sm text-[#A3A3A3]">Dodatni uglovi su suptilni, fokus je na čistoći okusa.</div>
            <div className="rounded-3xl bg-[#121212] p-4 text-sm text-[#A3A3A3]">Premium sir, dobro pečeno meso i tajni burger sos.</div>
            <div className="rounded-3xl bg-[#121212] p-4 text-sm text-[#A3A3A3]">Svaka porcija je balansirana za veliki dojam bez razbacanosti.</div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
