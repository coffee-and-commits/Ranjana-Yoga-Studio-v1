import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { FeesBatchDetails } from '@/components/FeesBatchDetails';
import { LotusDivider } from '@/components/LotusDecor';
import { SEO } from '@/components/SEO';
import { ArrowRight, Check } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

const YOGA_IMG = '/images/yoga.jpeg';
const WEIGHT_IMG = '/testimonials/05.webp';
const SOUND_HEALING_IMG = '/images/sound-healing.jpeg';

const SERVICE_IMAGES = {
  yoga: YOGA_IMG,
  'weight-loss': WEIGHT_IMG,
  'sound-healing': SOUND_HEALING_IMG,
};

function ServiceBlock({ service, reverse, benefitsLabel, enquireNow }) {
  return (
    <section
      id={service.id}
      data-testid={`service-${service.id}`}
      className={`py-20 lg:py-24 relative overflow-hidden ${service.id === 'weight-loss' ? 'bg-gold-pale/10' : 'bg-ivory'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
          <FadeIn direction={reverse ? 'right' : 'left'} className={reverse ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-light tracking-tight text-charcoal mb-5">
              {service.title}
            </h2>
            <p className="font-jost text-base text-black leading-relaxed mb-8">{service.desc}</p>
            <ul className="space-y-3 mb-8">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={16} className="text-gold-soft mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="font-jost text-md text-black">{f}</span>
                </li>
              ))}
            </ul>
            {service.benefits && (
              <div className="mb-8">
                <p className="font-jost text-xs tracking-[0.15em] uppercase text-black mb-3">{benefitsLabel}</p>
                <ul className="space-y-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="font-jost text-sm text-black">{b}</li>
                  ))}
                </ul>
              </div>
            )}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`service-${service.id}-cta`}
              className="inline-flex items-center gap-2 font-jost text-sm font-medium tracking-[0.08em] px-7 py-3 rounded-full bg-blush border border-gold-soft text-charcoal hover:bg-deep-rose hover:text-ivory transition-all duration-300"
            >
              {enquireNow} <ArrowRight size={16} />
            </a>
          </FadeIn>

          <FadeIn direction={reverse ? 'left' : 'right'} className={reverse ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}>
            <div className="relative">
              <div className={`absolute ${reverse ? '-bottom-4 -right-4' : '-top-4 -left-4'} w-full h-full border border-gold-soft/30 rounded-xl`} />
              <img
                src={SERVICE_IMAGES[service.id]}
                alt={service.title}
                className="w-full h-[350px] lg:h-[450px] object-cover rounded-xl relative z-10"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const { t } = useTranslation();
  const { hash } = useLocation();
  const services = t('servicesPage.items', { returnObjects: true });

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [hash]);

  return (
    <div data-testid="services-page">
      <SEO page="services" />
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-beige/30 relative overflow-hidden">
        <div className="blob-gold top-0 left-0" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-4">{t('servicesPage.hero.label')}</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-charcoal leading-[1.1]">
              {t('servicesPage.hero.heading')}
            </h1>
            <p className="font-jost text-base text-taupe mt-6 max-w-xl mx-auto leading-relaxed">
              {t('servicesPage.hero.desc')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {services.map((service, i) => (
        <div key={service.id}>
          <ServiceBlock
            service={service}
            reverse={i % 2 !== 0}
            benefitsLabel={t('servicesPage.benefitsLabel')}
            enquireNow={t('servicesPage.enquireNow')}
          />
          <LotusDivider />
        </div>
      ))}

      <FeesBatchDetails className="bg-ivory" />
    </div>
  );
}
