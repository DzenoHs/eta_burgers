import SectionHeader from '../components/SectionHeader.jsx';
import StickyCategoryNav from '../components/StickyCategoryNav.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { menuItems } from '../data/menuData.js';

export default function ChickenCheese() {
  const items = menuItems.filter((item) => item.category === 'piletina-i-sir');

  return (
    <div className="px-4 pt-8 pb-20 md:px-6 lg:px-8">
      <SectionHeader
        highlight="Piletina i sir"
        title="Hrskavo, kremasto i pomalo neustrašivo"
        description="Ovdje se susreću punjeni sir, hrskava piletina i umaci koji drže cijelu priču na premium nivou." 
      />

      <StickyCategoryNav />

      <div className="mx-auto mt-10 grid max-w-7xl gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
