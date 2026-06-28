import { NavLink } from 'react-router-dom';
import { categories } from '../data/menuData.js';

export default function StickyCategoryNav() {
  return (
    <div className="sticky top-[4.8rem] z-20 md:top-24 bg-[#0d0d0d] border-b border-white/10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-3 text-sm md:px-6">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={category.path}
            end
            className={({ isActive }) =>
              `whitespace-nowrap rounded-full border px-4 py-2 font-semibold transition ${
                isActive ? 'border-[#FF6A00] bg-[#FF6A00]/10 text-[#F8F5EF]' : 'border-white/10 text-[#A3A3A3] hover:border-[#FF6A00] hover:text-[#F8F5EF]'
              }`
            }
          >
            {category.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
