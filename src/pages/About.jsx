import SectionHeader from '../components/SectionHeader.jsx';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="px-4 pt-8 pb-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          highlight="O nama"
          title="ETA Burger Bar je premium street food sa filozofijom"
          description="Kratka priča o premium burgerima, pažljivo biranim sastojcima i modernom street food stavu bez kompromisa." 
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_0.95fr]">
          <div className="rounded-[40px] border border-white/10 bg-[#171717] p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
            <h2 className="text-3xl font-semibold text-[#F8F5EF]">Zašto ETA?</h2>
            <p className="mt-5 text-base leading-8 text-[#A3A3A3]">ETA je odgovor na sve one koji žele ozbiljan burger brend s jedinstvenim vizuelnim identitetom. Ne želi se uklopiti u šarene fast food kliseje, već izlazi iz mračnog, premium ugođaja gdje svaki sastojak ima svoj prostor.</p>
            <p className="mt-5 text-base leading-8 text-[#A3A3A3]">Naši smash burgeri su dizajnirani tako da imaju jak utjecaj u svakom zalogaju: hrskava tekstura, intenzivni umaci, kvalitetno meso i sezonirane priloge. To je kombinacija koju očekujete od ozbiljnog restorana ali u street food formatu.</p>
            <p className="mt-5 text-base leading-8 text-[#A3A3A3]">Često radimo posebne combo selekcije kojima smo dali dodatnu pozornost, jer znamo da premium klijent želi objed koji je kompletan i sofisticiran, ali i brz.</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-[40px] border border-white/10 bg-[#171717] p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
              <p className="text-sm uppercase tracking-[0.35em] text-[#FF6A00]">Pristup</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#F8F5EF]">Kvalitet sastojaka</h3>
              <p className="mt-4 text-sm leading-7 text-[#A3A3A3]">Svakodnevno radimo s premium namirnicama, lokalnim sirom i svježim pecivom. Svaki burger nosi tu pažnju u sebi.</p>
            </div>
            <div className="rounded-[40px] border border-white/10 bg-[#171717] p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
              <p className="text-sm uppercase tracking-[0.35em] text-[#FF6A00]">Filozofija</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#F8F5EF]">Smash burger koncept</h3>
              <p className="mt-4 text-sm leading-7 text-[#A3A3A3]">Svaki burger je pripremljen brzo, ali sa jasnim smjerom: maksimum okusa bez vizuelnog prenatrpanja.</p>
            </div>
            <div className="rounded-[40px] border border-white/10 bg-[#171717] p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
              <p className="text-sm uppercase tracking-[0.35em] text-[#FF6A00]">Brand</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#F8F5EF]">Premium identitet</h3>
              <p className="mt-4 text-sm leading-7 text-[#A3A3A3]">Tamna paleta, snažni naslovi i samo akcenti žute i narančaste boje čine ETA brend ozbiljnim i luksuznim.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[40px] border border-white/10 bg-[#171717] p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
          <p className="text-sm uppercase tracking-[0.35em] text-[#FF6A00]">Odjeljak</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-[32px] bg-[#121212] p-6">
              <p className="font-semibold text-[#F8F5EF]">Serioznost u detaljima</p>
              <p className="mt-3 text-sm leading-7 text-[#A3A3A3]">Ne koristimo nepotrebne ikone, već gradimo dojam s tipografijom i rasporedom. Svaka stranica ima svoj ritam.</p>
            </div>
            <div className="rounded-[32px] bg-[#121212] p-6">
              <p className="font-semibold text-[#F8F5EF]">Brand dosljednost</p>
              <p className="mt-3 text-sm leading-7 text-[#A3A3A3]">Svaka ruta je namjenska, bez osjećaja "sve na istoj stranici". Dugoročno, ovo je ozbiljan brend site.</p>
            </div>
          </div>
          <div className="mt-8 text-right">
            <Link to="/meni" className="inline-flex rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#0d0d0d] transition hover:bg-[#f07a1a]">
              Pogledaj menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
