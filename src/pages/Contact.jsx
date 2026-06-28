import SectionHeader from '../components/SectionHeader.jsx';

export default function Contact() {
  return (
    <div className="px-4 pt-8 pb-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          highlight="Kontakt"
          title="Dođi, nazovi ili prati nas"
          description="Radno vrijeme, lokacija i društvene mreže jasno postavljeni kroz elegantan, premium kontaktni page." 
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_0.95fr]">
          <div className="rounded-[40px] border border-white/10 bg-[#171717] p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
            <h2 className="text-3xl font-semibold text-[#F8F5EF]">Radno vrijeme</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[#A3A3A3]">
              <p><span className="font-semibold text-[#F8F5EF]">Ponedjeljak - Petak:</span> 11:00 - 22:00</p>
              <p><span className="font-semibold text-[#F8F5EF]">Subota:</span> 12:00 - 23:00</p>
              <p><span className="font-semibold text-[#F8F5EF]">Nedjelja:</span> 12:00 - 21:00</p>
            </div>
          </div>

          <div className="rounded-[40px] border border-white/10 bg-[#171717] p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
            <h2 className="text-3xl font-semibold text-[#F8F5EF]">Lokacija</h2>
            <p className="mt-6 text-sm leading-7 text-[#A3A3A3]">ETA Burger Bar, centar grada, tamni grill stil. Mjesto gdje premium street food dobiva ozbiljan izgled.</p>
            <div className="mt-8 space-y-4 text-sm text-[#A3A3A3]">
              <p><span className="font-semibold text-[#F8F5EF]">Telefon:</span> +387 61 123 456</p>
              <p><span className="font-semibold text-[#F8F5EF]">Instagram:</span> @eta_burgerbar</p>
              <p><span className="font-semibold text-[#F8F5EF]">Email:</span> info@eta-burgerbar.ba</p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[40px] border border-white/10 bg-[#171717] p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
          <h3 className="text-2xl font-semibold text-[#F8F5EF]">Mapa</h3>
          <div className="mt-6 h-80 rounded-[32px] bg-[#121212] border border-white/10 p-8 text-[#A3A3A3]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#FF6A00]">Google Maps placeholder</p>
            <div className="mt-8 rounded-[28px] border border-dashed border-white/10 bg-[#0d0d0d] p-8 text-center text-sm text-[#A3A3A3]">Ovdje se može dodati interaktivna mapa ili iframe kada bude spremna.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
