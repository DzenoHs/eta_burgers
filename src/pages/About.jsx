import SectionHeader from '../components/SectionHeader.jsx';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="px-4 pt-8 pb-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          highlight={t('about.highlight')}
          title={t('about.title')}
          description={t('about.description')}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_0.95fr]">
          <div className="rounded-[40px] border border-white/10 bg-[#171717] p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
            <h2 className="text-3xl font-semibold text-[#F8F5EF]">{t('about.whyTitle')}</h2>
            <p className="mt-5 text-base leading-8 text-[#A3A3A3]">{t('about.whyText')}</p>
            <p className="mt-5 text-base leading-8 text-[#A3A3A3]">{t('about.approachText')}</p>
            <p className="mt-5 text-base leading-8 text-[#A3A3A3]">{t('about.approachText')}</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-[40px] border border-white/10 bg-[#171717] p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
              <p className="text-sm uppercase tracking-[0.35em] text-[#FF6A00]">{t('about.approachTitle')}</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#F8F5EF]">{t('about.approachTitle')}</h3>
              <p className="mt-4 text-sm leading-7 text-[#A3A3A3]">{t('about.approachText')}</p>
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
              {t('pages.homeCTA')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
