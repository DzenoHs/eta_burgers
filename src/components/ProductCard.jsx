import React from 'react';

export default function ProductCard({ item }) {
  const isCombo = item.category === 'combo';
  const rawPrice = Number.parseFloat(String(item.price).replace(/[^0-9,.-]/g, '').replace(',', '.'));
  const finalPrice = Number.isFinite(rawPrice) && isCombo ? rawPrice + 5 : rawPrice;
  const displayPrice = Number.isFinite(finalPrice)
    ? `${finalPrice.toFixed(2).replace('.', ',')} KM`
    : item.price;

  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#171717] shadow-[0_28px_70px_-40px_rgba(0,0,0,0.9)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#121212] via-[#191919] to-[#1f1f1f]">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,154,0,0.2),transparent_30%),radial-gradient(circle_at_75%_70%,rgba(255,106,0,0.12),transparent_25%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,239,0.06),transparent_55%,rgba(0,0,0,0.72))]" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {item.new && (
            <span className="inline-flex items-center rounded-full bg-[#D7261E] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white">
              Novo
            </span>
          )}
        </div>
      </div>
      <div className="px-6 py-6 md:px-7 md:py-7">
        {!isCombo ? (
          <p className="text-xs uppercase tracking-[0.3em] text-[#A3A3A3]">{item.categoryLabel}</p>
        ) : null}
        <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#F8F5EF]">{item.name}</h3>
        <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">{item.description}</p>
        {item.ingredients ? (
          <div className="mt-4">
            <p className="text-xs uppercase tracking-[0.28em] text-[#8FAF9B]">
              Sastojci
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#A3A3A3]">
              {item.ingredients.map((ingredient) => (
                <li key={ingredient} className="flex items-start gap-2">
                  <span className="mt-0.5 inline-block h-1.5 w-1.5 rounded-full bg-[#8FAF9B]" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xl font-semibold text-[#FF6A00]">{displayPrice}</span>
        </div>
      </div>
    </article>
  );
}
