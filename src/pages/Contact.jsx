import SectionHeader from '../components/SectionHeader.jsx';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="px-4 pt-8 pb-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          highlight={t('contact.highlight')}
          title={t('contact.title')}
          description={t('contact.description')}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_0.95fr]">
          <div className="rounded-[40px] border border-white/10 bg-[#171717] p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
            <h2 className="text-3xl font-semibold text-[#F8F5EF]">{t('contact.openingHours')}</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[#A3A3A3]">
              <p><span className="font-semibold text-[#F8F5EF]">{t('contact.mondayFriday')}</span></p>
              <p><span className="font-semibold text-[#F8F5EF]">{t('contact.saturday')}</span></p>
              <p><span className="font-semibold text-[#F8F5EF]">{t('contact.sunday')}</span></p>
            </div>
          </div>

          <div className="rounded-[40px] border border-white/10 bg-[#171717] p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)]">
            <h2 className="text-3xl font-semibold text-[#F8F5EF]">{t('contact.locationTitle')}</h2>
            <p className="mt-6 text-sm leading-7 text-[#A3A3A3]">{t('contact.locationText')}</p>
            <div className="mt-8 space-y-4 text-sm text-[#A3A3A3]">
              <p><span className="font-semibold text-[#F8F5EF]">{t('contact.instagram')}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
