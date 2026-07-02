import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { FeesBatchDetails } from '@/components/FeesBatchDetails';
import { LotusDivider } from '@/components/LotusDecor';
import { ArrowRight, Check } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

const YOGA_IMG = '/images/yoga.jpeg';
const WEIGHT_IMG = '/testimonials/05.webp';
const SOUND_HEALING_IMG = '/images/sound-healing.jpeg';

const services = [
  {
    id: 'yoga',
    title: 'Yoga Classes',
    badge: 'Beginner & Intermediate',
    image: YOGA_IMG,
    desc: 'Our yoga sessions are thoughtfully designed for individuals at both beginner and intermediate levels. Whether you are stepping onto the mat for the first time or looking to deepen your existing practice, our classes offer a structured, mindful, and progressive experience. Each session focuses on building strength, improving flexibility, releasing tension, and cultivating a quiet, focused mind.',
    features: ['Beginner and Intermediate Yoga','Kids Yoga', 'Women wellness yoga'],
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss Program',
    badge: 'Our Speciality',
    image: WEIGHT_IMG,
    highlight: true,
    desc: 'Our dedicated weight loss program is one of our most sought-after offerings. We combine the intensity of Power Yoga with personalized dietary guidance to create a program that is both effective and sustainable. Unlike crash diets or extreme routines, our approach works with your body \u2013 building metabolism, endurance, and a genuine relationship with healthy living.',
    features: ['Dedicated weight loss batches', 'Power yoga combined with diet support', 'Metabolism-focused routines', 'Progress tracking', 'Small batch \u2013 personal attention guaranteed'],
  },
  {
    id: 'sound-healing',
    title: 'Sound Healing',
    badge: 'Ancient Healing',
    image: SOUND_HEALING_IMG,
    desc: 'Experience deep relaxation and inner balance through the healing vibrations of sound.',
    features: ['One-to-One Sound Healing Sessions', 'Group Sound Healing Sessions', 'Aura Cleansing', 'Chakra Balancing'],
    benefits: ['- Stress Relief', '- Emotional Balance', '- Mental Clarity', '- Better Sleep', '- Inner Peace & Well-being'],
  }
];

function ServiceBlock({ service, reverse }) {
  return (
    <section
      id={service.id}
      data-testid={`service-${service.id}`}
      className={`py-20 lg:py-24 relative overflow-hidden ${service.highlight ? 'bg-gold-pale/10' : 'bg-ivory'}`}
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
                <p className="font-jost text-xs tracking-[0.15em] uppercase text-black mb-3">Benefits</p>
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
              Enquire Now <ArrowRight size={16} />
            </a>
          </FadeIn>

          <FadeIn direction={reverse ? 'left' : 'right'} className={reverse ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}>
            <div className="relative">
              <div className={`absolute ${reverse ? '-bottom-4 -right-4' : '-top-4 -left-4'} w-full h-full border border-gold-soft/30 rounded-xl`} />
              <img
                src={service.image}
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
  const { hash } = useLocation();

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
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-beige/30 relative overflow-hidden">
        <div className="blob-gold top-0 left-0" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-4">What We Offer</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-charcoal leading-[1.1]">
              Yoga Program
            </h1>
            <p className="font-jost text-base text-taupe mt-6 max-w-xl mx-auto leading-relaxed">
              Every practice we offer is rooted in ancient wisdom &ndash; and designed for your modern life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {services.map((service, i) => (
        <div key={service.id}>
          <ServiceBlock service={service} reverse={i % 2 !== 0} />
          <LotusDivider />
        </div>
      ))}

      <FeesBatchDetails className="bg-ivory" />
    </div>
  );
}
