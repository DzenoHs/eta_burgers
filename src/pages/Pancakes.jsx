import SectionHeader from '../components/SectionHeader.jsx';
import StickyCategoryNav from '../components/StickyCategoryNav.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { menuItems } from '../data/menuData.js';

export default function Pancakes() {
  const items = menuItems.filter((item) => item.category === 'palacinci');

  return (
    <div className="px-4 pt-8 pb-20 md:px-6 lg:px-8">
      <SectionHeader
        highlight="Palačinci"
        title="Slatki dodatak u istom ozbiljnom tonu"
        description="Topli deserti i kontrastne teksture, ali i dalje u mračnom, premium ramu brenda." 
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
