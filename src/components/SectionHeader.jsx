import React from 'react';

export default function SectionHeader({ title, description, highlight }) {
  return (
    <div className="mx-auto max-w-4xl">
      {highlight ? (
        <p className="text-sm uppercase tracking-[0.3em] text-[#FF6A00]">{highlight}</p>
      ) : null}
      <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#F8F5EF] sm:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[#A3A3A3]">{description}</p>
    </div>
  );
}
