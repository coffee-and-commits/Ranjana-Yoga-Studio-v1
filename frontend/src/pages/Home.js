import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { LotusDivider } from '@/components/LotusDecor';
import { ArrowRight, Leaf, Waves, Plus, Heart, Users, Sparkles, Star, Quote } from 'lucide-react';

const HERO_FIGURE = 'https://customer-assets.emergentagent.com/job_creative-web-build-4/artifacts/rnrh1gjm_yoga.png';
const WEIGHT_IMG = 'https://images.pexels.com/photos/4056612/pexels-photo-4056612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1612215033461-f2185845eb4d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBvdXRkb29yfGVufDB8fHx8MTc3NDYwMzEwOHww&ixlib=rb-4.1.0&q=85',
  'https://images.pexels.com/photos/5201529/pexels-photo-5201529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.unsplash.com/photo-1663820108880-74a416c819da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwyfHx3b21hbiUyMHlvZ2ElMjBvdXRkb29yfGVufDB8fHx8MTc3NDYwMzEwOHww&ixlib=rb-4.1.0&q=85',
  'https://images.pexels.com/photos/4908556/pexels-photo-4908556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/6648802/pexels-photo-6648802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.unsplash.com/photo-1767611120077-3697335ec748?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHBlYWNlZnVsJTIwc3R1ZGlvfGVufDB8fHx8MTc3NDYwMzI2OXww&ixlib=rb-4.1.0&q=85',
];

const services = [
  { icon: Leaf, title: 'Yoga Classes', desc: 'Beginner & intermediate sessions focused on strength, flexibility, and mindful movement.' },
  { icon: Leaf, title: 'Ayurveda', desc: 'Traditional healing practices that restore balance through natural therapies and lifestyle guidance.' },
  { icon: Waves, title: 'Acupressure', desc: 'Targeted pressure-point therapy to relieve stress, pain, and energy blockages.' },
  { icon: Plus, title: 'Marma Therapy', desc: 'An ancient Indian energy-healing practice that stimulates vital points for deep restoration.' },
];

const testimonials = [
  { name: 'Priya S.', text: 'Ranjana Studio completely changed my relationship with my body. I lost 8 kgs in 3 months \u2014 but more importantly, I finally feel calm and strong.', program: 'Weight Loss Program' },
  { name: 'Meena R.', text: 'The personalized attention here is unlike any gym or studio I\'ve visited. The marma therapy sessions have been life-changing for my stress levels.', program: 'Marma Therapy' },
  { name: 'Anita D.', text: 'Such a peaceful, warm environment. The Ayurveda sessions combined with yoga have genuinely improved my digestion and sleep.', program: 'Ayurveda & Yoga' },
];

const whyUs = [
  { icon: Users, title: 'Small, Personalized Batches', desc: 'We keep our batches small so every member receives focused guidance and meaningful progress.' },
  { icon: Heart, title: 'Holistic Approach', desc: 'We go beyond physical fitness \u2013 combining yoga with Ayurveda, acupressure, and marma therapy for complete well-being.' },
  { icon: Sparkles, title: 'Natural & Long-Term Results', desc: 'Our methods are rooted in ancient wisdom and modern understanding \u2013 building habits, not dependency.' },
];

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Layer 1: Background decorative text (slowest - furthest away)
  const bgTextY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const bgTextOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Layer 2: Figure (medium speed - mid-ground)
  const figureY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const figureScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.02]);

  // Layer 3: Foreground text & CTA (fastest - closest to viewer)
  const fgTextY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const fgOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  // Gold glow behind figure
  const glowScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);

  return (
    <section ref={ref} data-testid="hero-section" className="relative h-screen overflow-hidden bg-[#1a1714]">
      {/* === LAYER 1: Background atmosphere (slowest parallax) === */}
      <motion.div style={{ y: bgTextY, opacity: bgTextOpacity }} className="absolute inset-0 z-0">
        {/* Radial warm glow behind figure */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-[700px] h-[700px] lg:w-[900px] lg:h-[900px] rounded-full"
            style={{ scale: glowScale, background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, rgba(242,196,206,0.06) 40%, transparent 70%)' }}
          />
        </div>
        {/* Large decorative background word */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-cormorant text-[12rem] sm:text-[16rem] lg:text-[22rem] font-light tracking-tight text-ivory/[0.03] leading-none">
            Balance
          </span>
        </div>
        {/* Thin gold decorative lines */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
          <div className="max-w-6xl mx-auto px-10 flex items-center justify-between">
            <div className="w-px h-40 bg-gradient-to-b from-transparent via-gold-soft/20 to-transparent" />
            <div className="w-px h-40 bg-gradient-to-b from-transparent via-gold-soft/20 to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* === LAYER 2: Figure (medium parallax) === */}
      <motion.div
        style={{ y: figureY, scale: figureScale }}
        className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none"
      >
        <img
          src={HERO_FIGURE}
          alt="Yoga meditation pose"
          className="w-auto h-[50vh] sm:h-[65vh] lg:h-[80vh] object-contain object-bottom max-w-none select-none"
          data-testid="hero-figure"
        />
      </motion.div>

      {/* === LAYER 3: Foreground text & CTA (fastest parallax) === */}
      <motion.div
        style={{ y: fgTextY, opacity: fgOpacity }}
        className="absolute inset-0 z-20 flex items-start lg:items-center justify-center pointer-events-none pt-24 lg:pt-0"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left text block */}
            <div className="text-center lg:text-left pointer-events-auto">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-jost text-xs tracking-[0.25em] uppercase text-gold-soft/80 mb-5"
              >
                Ranjana Yoga Studio
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9 }}
                className="font-cormorant text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-ivory/95 leading-[1.05]"
              >
                Start Your<br />
                <span className="text-blush">Journey</span> to<br />
                Inner Peace
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="h-px bg-gold-soft/40 mt-6 mb-5 mx-auto lg:mx-0"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="font-jost text-sm sm:text-base text-ivory/50 max-w-md mx-auto lg:mx-0 leading-relaxed"
              >
                A holistic wellness space where yoga meets Ayurveda, acupressure, and the ancient wisdom of marma therapy.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-8"
              >
                <Link
                  to="/services"
                  data-testid="hero-explore-classes"
                  className="font-jost text-sm font-medium tracking-[0.08em] px-8 py-3 rounded-full bg-blush border border-gold-soft text-charcoal hover:bg-deep-rose hover:text-ivory transition-all duration-300"
                >
                  Explore Classes
                </Link>
                <Link
                  to="/contact"
                  data-testid="hero-book-trial"
                  className="font-jost text-sm font-medium tracking-[0.08em] px-8 py-3 rounded-full bg-transparent border-[1.5px] border-gold-soft/60 text-gold-soft hover:bg-gold-pale/10 transition-all duration-300"
                >
                  Book a Free Trial
                </Link>
              </motion.div>
            </div>

            {/* Right side - intentionally empty to let figure show through */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </motion.div>

      {/* Tagline badge - bottom center, above figure */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-gold-soft/30" />
          <span className="font-jost text-[11px] tracking-[0.3em] uppercase text-ivory/30">
            Balance &bull; Heal &bull; Transform
          </span>
          <div className="w-8 h-px bg-gold-soft/30" />
        </div>
      </motion.div>

      {/* Dark-to-light transition at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-ivory z-30 pointer-events-none" />
    </section>
  );
}

function StatsSection() {
  return (
    <section data-testid="stats-section" className="py-20 lg:py-24 bg-ivory relative overflow-hidden">
      <div className="blob-gold top-0 right-0" />
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-4">Welcome to Ranjana Yoga Studio</p>
          <p className="font-jost text-base text-taupe max-w-2xl mx-auto leading-relaxed">
            We believe wellness is not a destination &ndash; it is a way of living. At Ranjana Yoga Studio, we create a space where every individual can slow down, reconnect, and rebuild &ndash; through movement, breath, and the healing traditions of yoga and Ayurveda.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { value: '200+', label: 'Happy Members' },
            { value: '10+', label: 'Years of Experience' },
            { value: 'Small', label: 'Personalized Batches' },
          ].map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <p className="font-cormorant text-5xl lg:text-6xl font-light text-charcoal">{stat.value}</p>
              <div className="w-8 h-px bg-gold-soft/40 mx-auto my-3" />
              <p className="font-jost text-sm text-taupe tracking-wide">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section data-testid="services-overview" className="py-20 lg:py-24 bg-beige/50 relative overflow-hidden">
      <div className="blob-pink -bottom-40 -left-40" />
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-3">Discover</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-light tracking-tight text-charcoal">What We Offer</h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <div className="bg-beige border border-sand rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full" data-testid={`service-card-${service.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <Icon size={28} className="text-gold-soft mb-5" strokeWidth={1.5} />
                  <h3 className="font-cormorant text-xl font-semibold text-charcoal mb-3">{service.title}</h3>
                  <p className="font-jost text-sm text-taupe leading-relaxed">{service.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-12" delay={0.3}>
          <Link
            to="/services"
            data-testid="view-all-services"
            className="inline-flex items-center gap-2 font-jost text-sm tracking-[0.08em] text-gold-soft hover:text-deep-rose transition-colors duration-300"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

function WeightLossSection() {
  return (
    <section data-testid="weight-loss-section" className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left" className="order-2 lg:order-1">
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-3">Our Speciality</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light tracking-tight text-charcoal mb-6 leading-[1.15]">
              Transform Your Body, Naturally.
            </h2>
            <p className="font-jost text-base text-taupe leading-relaxed mb-8">
              Our dedicated weight loss batches combine the power of yoga with personalized diet guidance &ndash; designed to boost your metabolism, build real strength, and create results that last. No shortcuts. No extremes. Just a sustainable, science-backed, and deeply natural approach to a healthier you.
            </p>
            <ul className="space-y-3 mb-8">
              {['Power Yoga Sessions', 'Guided Diet Support', 'Metabolism Boosting Routines', 'Small Batch \u2013 Personal Attention'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-soft" />
                  <span className="font-jost text-sm text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              data-testid="weight-loss-cta"
              className="inline-flex items-center gap-2 font-jost text-sm font-medium tracking-[0.08em] px-7 py-3 rounded-full bg-blush border border-gold-soft text-charcoal hover:bg-deep-rose hover:text-ivory transition-all duration-300"
            >
              Learn About Weight Loss Program <ArrowRight size={16} />
            </Link>
          </FadeIn>

          <FadeIn direction="right" className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border border-gold-soft/30 rounded-xl" />
              <img
                src={WEIGHT_IMG}
                alt="Weight loss yoga"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-xl relative z-10"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section data-testid="why-us-section" className="py-20 lg:py-24 bg-beige/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-cormorant text-4xl sm:text-5xl font-light tracking-tight text-charcoal">Why Ranjana Yoga Studio?</h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {whyUs.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-blush/30 flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-gold-soft" strokeWidth={1.5} />
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-charcoal mb-3">{item.title}</h3>
                <p className="font-jost text-sm text-taupe leading-relaxed">{item.desc}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section data-testid="testimonials-section" className="py-20 lg:py-24 bg-ivory relative overflow-hidden">
      <div className="blob-pink top-10 right-0" />
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-3">Testimonials</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-light tracking-tight text-charcoal">What Our Members Say</h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="bg-beige border border-sand rounded-2xl p-8 h-full flex flex-col" data-testid={`testimonial-${t.name.toLowerCase().replace(/[\s.]/g, '-')}`}>
                <Quote size={24} className="text-gold-pale mb-4" strokeWidth={1.5} />
                <p className="font-jost text-sm text-charcoal leading-relaxed flex-1 mb-6">"{t.text}"</p>
                <div>
                  <div className="w-8 h-px bg-gold-soft/40 mb-3" />
                  <p className="font-cormorant text-lg font-semibold text-charcoal">{t.name}</p>
                  <p className="font-jost text-xs text-taupe">{t.program}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section data-testid="cta-banner" className="py-20 lg:py-28 bg-blush/20 relative overflow-hidden">
      <div className="blob-pink top-0 left-1/2 -translate-x-1/2" />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <AnimatedSection>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-light tracking-tight text-charcoal mb-4">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="font-jost text-base text-taupe mb-10">
            Your first step is free. Book a complimentary trial session today.
          </p>
          <Link
            to="/contact"
            data-testid="cta-book-trial"
            className="inline-flex font-jost text-sm font-medium tracking-[0.08em] px-10 py-3.5 rounded-full bg-blush border border-gold-soft text-charcoal hover:bg-deep-rose hover:text-ivory transition-all duration-300"
          >
            Book My Free Trial
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

function GalleryStrip() {
  return (
    <section data-testid="gallery-strip" className="py-16 bg-ivory overflow-hidden">
      <AnimatedSection className="text-center mb-10">
        <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-2">@ranjanayogastudio</p>
        <Link to="/gallery" className="font-jost text-sm text-taupe hover:text-deep-rose transition-colors inline-flex items-center gap-1">
          View Gallery <ArrowRight size={14} />
        </Link>
      </AnimatedSection>
      <div className="flex animate-marquee">
        {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
          <div key={i} className="flex-shrink-0 w-56 h-56 mx-2">
            <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover rounded-xl" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div data-testid="home-page">
      <HeroSection />
      <StatsSection />
      <LotusDivider />
      <ServicesSection />
      <WeightLossSection />
      <LotusDivider />
      <WhyUsSection />
      <TestimonialsSection />
      <CTABanner />
      <GalleryStrip />
    </div>
  );
}
