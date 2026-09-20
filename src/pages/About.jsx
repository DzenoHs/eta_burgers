import SectionHeader from '../components/SectionHeader.jsx';
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
          </div>
        </div>
      </div>
    </div>
  );
}
