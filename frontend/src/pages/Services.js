import { Link } from 'react-router-dom';
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { FeesBatchDetails } from '@/components/FeesBatchDetails';
import { LotusDivider } from '@/components/LotusDecor';
import { ArrowRight, Check } from 'lucide-react';

const YOGA_IMG = 'https://images.unsplash.com/photo-1612215033461-f2185845eb4d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBvdXRkb29yfGVufDB8fHx8MTc3NDYwMzEwOHww&ixlib=rb-4.1.0&q=85';
const WEIGHT_IMG = 'https://images.pexels.com/photos/4056612/pexels-photo-4056612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
const AYURVEDA_IMG = 'https://images.pexels.com/photos/5201529/pexels-photo-5201529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
const ACUPRESSURE_IMG = 'https://images.pexels.com/photos/4908556/pexels-photo-4908556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
const MARMA_IMG = 'https://images.pexels.com/photos/6648802/pexels-photo-6648802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const services = [
  {
    id: 'yoga',
    title: 'Yoga Classes',
    badge: 'Beginner & Intermediate',
    image: YOGA_IMG,
    desc: 'Our yoga sessions are thoughtfully designed for individuals at both beginner and intermediate levels. Whether you are stepping onto the mat for the first time or looking to deepen your existing practice, our classes offer a structured, mindful, and progressive experience. Each session focuses on building strength, improving flexibility, releasing tension, and cultivating a quiet, focused mind.',
    features: ['Hatha, Vinyasa & Power Yoga', 'Pranayama (Breathwork)', 'Guided Meditation', 'Postural alignment guidance', 'Personal modifications based on ability'],
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
    id: 'ayurveda',
    title: 'Ayurveda',
    badge: 'Ancient Healing',
    image: AYURVEDA_IMG,
    desc: 'Ayurveda \u2013 the ancient Indian science of life \u2013 offers a deeply personalised approach to health. Rather than treating symptoms in isolation, Ayurveda looks at the root cause of imbalance in your body, diet, and lifestyle, and helps restore harmony from within. Our Ayurveda sessions include personalized constitution (dosha) assessment, dietary recommendations, lifestyle guidance, and traditional therapeutic practices.',
    features: ['Personalized dosha assessment', 'Dietary recommendations', 'Lifestyle guidance', 'Traditional therapeutic practices', 'Holistic health restoration'],
  },
  {
    id: 'acupressure',
    title: 'Acupressure Therapy',
    badge: 'Pressure Point Healing',
    image: ACUPRESSURE_IMG,
    desc: 'Acupressure works on the same principles as acupuncture \u2013 using precise pressure on specific energy points along the body\u2019s meridians to release blockages, reduce pain, and restore energy flow. Our acupressure sessions can help with stress and anxiety, headaches and migraines, digestive issues, chronic pain, and overall energy and vitality.',
    features: ['Stress and anxiety relief', 'Headache & migraine treatment', 'Digestive issue support', 'Chronic pain management', 'Energy & vitality restoration'],
  },
  {
    id: 'marma',
    title: 'Marma Therapy',
    badge: 'Energy Restoration',
    image: MARMA_IMG,
    desc: 'Marma therapy is one of Ayurveda\u2019s most powerful healing modalities. Marma points are vital energy junctions located throughout the body \u2013 each one governing specific physical and psychological functions. By gently stimulating these 107 marma points, this therapy supports deep relaxation, emotional release, hormonal balance, and the restoration of prana (life energy) flow throughout the body.',
    features: ['Deep relaxation', 'Emotional release', 'Hormonal balance', 'Prana (life energy) restoration', '107 marma point stimulation'],
  },
];

function ServiceBlock({ service, reverse }) {
  return (
    <section
      data-testid={`service-${service.id}`}
      className={`py-20 lg:py-24 relative overflow-hidden ${service.highlight ? 'bg-gold-pale/10' : 'bg-ivory'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
          <FadeIn direction={reverse ? 'right' : 'left'} className={reverse ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}>
            <span className="inline-block font-jost text-xs tracking-[0.15em] uppercase px-4 py-1.5 rounded-full bg-gold-pale/30 text-gold-soft border border-gold-soft/20 mb-5">
              {service.badge}
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-light tracking-tight text-charcoal mb-5">
              {service.title}
            </h2>
            <p className="font-jost text-base text-taupe leading-relaxed mb-8">{service.desc}</p>
            <ul className="space-y-3 mb-8">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={16} className="text-gold-soft mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="font-jost text-sm text-charcoal">{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              data-testid={`service-${service.id}-cta`}
              className="inline-flex items-center gap-2 font-jost text-sm font-medium tracking-[0.08em] px-7 py-3 rounded-full bg-blush border border-gold-soft text-charcoal hover:bg-deep-rose hover:text-ivory transition-all duration-300"
            >
              Enquire Now <ArrowRight size={16} />
            </Link>
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

function FeeStructure() {
  return (
    <section data-testid="fee-structure" className="py-20 lg:py-24 bg-beige/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-3">Investment in Health</p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-charcoal mb-4">Pricing & Plans</h2>
          <p className="font-jost text-base text-taupe leading-relaxed max-w-xl mx-auto">
            Transparent pricing for our transformative programs. Choose the path that aligns with your wellness goals.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* General Fees */}
          <StaggerItem>
            <div className="bg-ivory border border-gold-soft/30 rounded-2xl p-8 lg:p-10 h-full relative shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1">
              <h3 className="font-cormorant text-2xl font-medium text-charcoal mb-6 border-b border-sand/50 pb-4">
                💰 General Fee Structure
              </h3>
              <ul className="space-y-5">
                <li className="flex justify-between items-center border-b border-sand/20 pb-4">
                  <span className="font-jost text-[15px] text-charcoal font-medium">Offline Classes</span>
                  <span className="font-cormorant text-xl text-gold-soft font-semibold tracking-wide">₹1800<span className="text-sm text-taupe font-jost font-normal tracking-wide">/mo</span></span>
                </li>
                <li className="flex justify-between items-center border-b border-sand/20 pb-4">
                  <span className="font-jost text-[15px] text-charcoal font-medium">Online Group Classes</span>
                  <span className="font-cormorant text-xl text-gold-soft font-semibold tracking-wide">₹1500<span className="text-sm text-taupe font-jost font-normal tracking-wide">/mo</span></span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <span className="font-jost text-[15px] text-charcoal font-medium flex flex-col">
                    Online Personalized
                    <span className="text-xs text-taupe font-normal mt-1 italic tracking-wide">Limited Seats</span>
                  </span>
                  <span className="font-cormorant text-xl text-gold-soft font-semibold tracking-wide">₹2500<span className="text-sm text-taupe font-jost font-normal tracking-wide">/mo</span></span>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Weight Loss Programs */}
          <StaggerItem>
            <div className="bg-gold-pale/10 border border-gold-soft/50 rounded-2xl p-8 lg:p-10 h-full relative shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1">
              <h3 className="font-cormorant text-2xl font-medium text-charcoal mb-6 border-b border-gold-soft/30 pb-4">
                🔥 Weight Loss Programs
              </h3>
              <ul className="space-y-5">
                <li className="flex justify-between items-center border-b border-gold-soft/20 pb-4">
                  <span className="font-jost text-[15px] text-charcoal font-medium">Group Batch</span>
                  <span className="font-cormorant text-2xl text-charcoal font-semibold tracking-wide">₹2500<span className="text-sm text-taupe font-jost font-normal tracking-wide">/mo</span></span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <span className="font-jost text-[15px] text-charcoal font-medium flex flex-col">
                    Personalized
                    <span className="text-xs text-taupe font-normal mt-1 italic tracking-wide">1-on-1 Focus</span>
                  </span>
                  <span className="font-cormorant text-2xl text-charcoal font-semibold tracking-wide">₹3500<span className="text-sm text-taupe font-jost font-normal tracking-wide">/mo</span></span>
                </li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div data-testid="services-page">
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-beige/30 relative overflow-hidden">
        <div className="blob-gold top-0 left-0" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-4">What We Do</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-charcoal leading-[1.1]">
              Our Services
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

      <FeeStructure />

      <FeesBatchDetails className="bg-ivory" />
    </div>
  );
}
