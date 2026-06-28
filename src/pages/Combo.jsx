import SectionHeader from '../components/SectionHeader.jsx';
import StickyCategoryNav from '../components/StickyCategoryNav.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { menuItems } from '../data/menuData.js';

export default function Combo() {
  const items = menuItems.filter((item) => item.category === 'combo');

  return (
    <div className="px-4 pt-8 pb-20 md:px-6 lg:px-8">
      <SectionHeader
        highlight="Combo ponude"
        title="Premium kombinacije za svaku narudžbu"
        description="Velike kartice, fokus na porcije i brend premium estetiku. Combo ponude su kreirane za ozbiljno objedovanje bez kompromisa." 
      />

      <StickyCategoryNav />

      <div className="mx-auto mt-10 max-w-7xl space-y-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
