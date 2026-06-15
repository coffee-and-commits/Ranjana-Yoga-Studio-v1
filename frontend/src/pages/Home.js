import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { LotusDivider } from '@/components/LotusDecor';
import { ArrowRight, ArrowDown, Leaf, Waves, Plus, Star, Quote, Instagram, MessageCircle } from 'lucide-react';

const HERO_FIGURE = '/images/Hero_Banner.png';
const GALLERY_IMAGES = [
  '/images/image-1.jpeg',
  '/images/image-2.jpeg',
  '/images/image-3.jpg',
  '/images/image-4.jpeg',
  '/images/group-img.jpeg',
  '/images/_1851.JPG.jpeg', 
  '/images/_6505.JPG.jpeg',
  '/images/_6608.JPG.jpeg',
  '/images/_6770.JPG.jpeg',
];




const services = [
  { icon: Leaf, title: "Yoga for Women's Health & Wellness", desc: "Specially designed yoga practices to support hormonal balance and help manage PCOD, PCOS, thyroid imbalance, irregular periods, and fertility-related concerns — naturally and safely." },
  { icon: Leaf, title: "Weight Loss Yoga Program", desc: 'Structured yoga sessions focused on fat loss, improving metabolism, and building strength — in a safe and sustainable way.' },
  { icon: Waves, title: 'Beginner to Intermediate Yoga Classes', desc: 'Step-by-step guided sessions suitable for beginners and intermediate levels, focusing on flexibility, strength, and mindful movement.' },
  // { icon: Plus, title: 'Marma Therapy', desc: 'An ancient Indian energy-healing practice that stimulates vital points for deep restoration.' },
];

const testimonials = [
  { name: 'Priya S.', text: 'Ranjana Studio completely changed my relationship with my body. I lost 8 kgs in 3 months \u2014 but more importantly, I finally feel calm and strong.', program: 'Weight Loss Program' },
  { name: 'Meena R.', text: 'The personalized attention here is unlike any gym or studio I\'ve visited. The marma therapy sessions have been life-changing for my stress levels.', program: 'Marma Therapy' },
  { name: 'Anita D.', text: 'Such a peaceful, warm environment. The Ayurveda sessions combined with yoga have genuinely improved my digestion and sleep.', program: 'Ayurveda & Yoga' },
];

const whyUsCards = [
  {
    category: 'Personalized',
    title: 'Small, Personalized Batches',
    desc: 'So you get proper attention in every session',
    image: 'images/17.jpeg'
  },
  {
    category: 'Holistic',
    title: 'Beginner-friendly approach',
    desc: 'Simple, easy-to-follow practices for all levels',
    image: 'images/image-3.JPEG'
  },
  {
    category: 'Sustainable',
    title: 'Focus on real results',
    desc: ' supporting weight loss, strength, and stress relief',
    image: 'images/image-4.jpeg'
  },
];

// inset  offset-x  offset-y  blur  spread  color
// offset-x: 0 = no horizontal shift
// offset-y: negative = shadow origin at bottom (fades bottom edge)
//           positive = shadow origin at top    (fades top edge)
// offset-x: positive = shadow origin at left  (fades left edge)
//           negative = shadow origin at right  (fades right edge)
const FIGURE_EDGE_FADER = [
  'inset   0    -30px  60px  30px  #FDF8F2', // bottom edge
  'inset   0     40px  80px  40px  #FDF8F2', // top edge
  'inset  10px    0    80px  30px  #FDF8F2', // left edge
  'inset -60px    0    80px  30px  #FDF8F2', // right edge
].join(', ');

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Layer 1: Background decorative elements (slowest)
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);
  const bgTextY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Layer 2: Figure (medium parallax)
  const figureY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const figureOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  // Layer 3: Text & CTAs (fastest - foreground)
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={ref} data-testid="hero-section" className="relative h-screen overflow-hidden bg-ivory">

      {/* === LAYER 1: RICH BACKGROUND (slowest parallax) === */}
      <motion.div style={{ y: bgY, opacity: bgOpacity }} className="absolute inset-0 z-0">
        {/* Atmospheric gradient blobs */}
        <div className="absolute top-[5%] right-[15%] w-[500px] h-[500px] rounded-full opacity-25" style={{
          background: 'radial-gradient(circle, rgba(242,196,206,0.4) 0%, transparent 70%)'
        }} />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full opacity-20" style={{
          background: 'radial-gradient(circle, rgba(237,216,154,0.35) 0%, transparent 70%)'
        }} />
        <div className="absolute top-[30%] left-[40%] w-[600px] h-[600px] rounded-full opacity-10" style={{
          background: 'radial-gradient(circle, rgba(214,228,235,0.5) 0%, transparent 70%)'
        }} />

        {/* Decorative gold circle outlines */}
        <div className="absolute top-[8%] right-[8%] w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] rounded-full border border-gold-soft/[0.06]" />
        <div className="absolute top-[12%] right-[12%] w-[250px] h-[250px] lg:w-[380px] lg:h-[380px] rounded-full border border-gold-soft/[0.08]" />
        <div className="absolute bottom-[15%] left-[3%] w-[200px] h-[200px] rounded-full border border-blush/[0.1]" />

        {/* Thin gold horizontal lines */}
        <div className="absolute top-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-soft/[0.07] to-transparent" />
        <div className="absolute top-[75%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-soft/[0.05] to-transparent" />

        {/* Vertical thin gold lines on sides */}
        <div className="absolute top-[15%] bottom-[15%] left-[6%] w-px bg-gradient-to-b from-transparent via-gold-soft/[0.06] to-transparent" />
        <div className="absolute top-[15%] bottom-[15%] right-[6%] w-px bg-gradient-to-b from-transparent via-gold-soft/[0.06] to-transparent" />

        {/* Small lotus motif top-right */}
        <svg className="absolute top-[18%] right-[18%] w-16 h-16 text-gold-soft/[0.08]" viewBox="0 0 100 100" fill="none">
          <path d="M50 10 C50 10, 25 40, 50 75 C75 40, 50 10, 50 10Z" fill="currentColor" />
          <path d="M25 50 C25 50, 45 30, 50 65 C55 30, 75 50, 75 50" fill="currentColor" opacity="0.6" />
        </svg>
      </motion.div>

      {/* === LARGE FADED BACKGROUND TEXT (parallax layer 1.5) === */}
      <motion.div
        style={{ y: bgTextY, opacity: bgOpacity }}
        className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="font-cormorant text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[24rem] xl:text-[28rem] font-light tracking-tight text-charcoal/[0.03] leading-none whitespace-nowrap">
          Ranjana
        </span>
      </motion.div>

      {/* === LAYER 2: CENTERED FIGURE (mid-ground parallax) === */}
      <motion.div
        style={{ y: figureY, opacity: figureOpacity }}
        className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none"
      >
        <div className="relative">
          <img
            src={HERO_FIGURE}
            alt="Yoga meditation pose"
            className="w-auto mb-[220px] md:mb-0 h-[62vh] sm:h-[65vh] lg:h-[75vh] object-contain object-bottom max-w-none select-none block"
            data-testid="hero-figure"
          />
          {/* Edge faders - precisely on the image boundaries */}
          {/* <div className="absolute inset-0 pointer-events-none" style={{
            boxShadow: FIGURE_EDGE_FADER
          }} /> */}
        </div>
      </motion.div>

      {/* === LAYER 3: TEXT & CTAs (foreground, fastest parallax) === */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        <div className="h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-10 lg:pb-12">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-jost text-[10px] sm:text-xs md:text-lg tracking-[0.25em] uppercase text-black mb-3 pointer-events-auto"
          >
            Ranjana Yoga Studio
          </motion.p>

          {/* Main headline - shorter, bolder, overlapping figure */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-cormorant text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4rem] xl:text-[5rem] font-normal tracking-tight text-charcoal leading-[0.92] max-w-[85%] sm:max-w-[65%] lg:max-w-[55%] pointer-events-auto"
          >
            A <span className="text-deep-rose italic">Space</span> to Heal,<br />
            <span className="text-deep-rose italic">Breathe</span> & Transform.
          </motion.h1>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex items-end justify-between mt-5 lg:mt-8 pointer-events-auto flex-wrap gap-3"
          >
            {/* CTAs + scroll */}
            <div className="flex items-center gap-3">
              <Link
                to="/upcoming-event"
                data-testid="hero-explore-classes"
                className="font-jost text-sm font-medium tracking-[0.06em] px-7 py-3 rounded-full bg-blush border border-gold-soft text-charcoal hover:bg-deep-rose hover:text-ivory transition-all duration-300"
              >
                Upcoming Event
              </Link>
              <button
                data-testid="hero-book-trial"
                onClick={() => document.getElementById('weight-loss-section').scrollIntoView({ behavior: 'smooth' })}
                className="font-jost text-sm font-medium tracking-[0.06em] px-7 py-3 rounded-full bg-ivory border border-sand text-charcoal hover:bg-beige transition-all duration-300"
              >
                Weight Loss Program
              </button>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2.2 }}
                whileHover={{ y: 0 }}
                className="w-10 h-10 rounded-full border border-sand/70 flex items-center justify-center ml-1 cursor-pointer hover:bg-beige/50 transition-colors"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                data-testid="hero-scroll-down"
              >
                <ArrowDown size={16} className="text-charcoal/50" strokeWidth={1.5} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function StatsSection() {
  return (
    <section data-testid="stats-section" className="py-20 lg:py-24 bg-ivory relative overflow-hidden">
      <div className="blob-gold top-0 right-0" />
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="font-jost text-xs md:text-xl font-semibold tracking-[0.2em] uppercase text-gold-soft mb-4">Welcome to Ranjana Yoga Studio</p>
          <p className="font-jost text-base text-black max-w-2xl mx-auto leading-relaxed">
            <b> We believe wellness is not a destination &ndash; it is a way of living.</b> <br /> At Ranjana Yoga Studio, we create a space where every individual can slow down, reconnect, and rebuild &ndash; through movement, breath, and the healing traditions of yoga and Ayurveda.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { value: '200+', label: 'Lives Transformed' },
            { value: '5+', label: 'Years of Experience' },
            { value: 'Small Group', label: 'Session' },
            { value: '14.1k+', label: 'Youtube Subscribers', href: 'https://www.youtube.com/@ranjanayogastudio_offical' },
            { value: '129k+', label: 'Instagram Followers', href: 'https://www.instagram.com/yogicsoul_ranj?igsh=c2h4d3pibGVtZjQw' },
            { value: '102K+', label: 'Facebook Friends', href:'https://www.facebook.com/share/14awhk3o9Q7/' },
          ].map((stat) => (
            <StaggerItem key={stat.label} className="text-center mb-1 0">
              {stat.href ? (
                <a href={stat.href} target="_blank" rel="noopener noreferrer" className="group block">
                  <p className="font-cormorant text-5xl lg:text-6xl font-light text-black group-hover:text-deep-rose transition-colors duration-300">{stat.value}</p>
                  <div className="w-8 h-px bg-gold-soft/40 mx-auto my-3" />
                  <p className="font-jost text-xl tracking-wide text-black group-hover:text-deep-rose transition-colors duration-300">{stat.label}</p>
                </a>
              ) : (
                <>
                  <p className="font-cormorant text-5xl lg:text-6xl font-light text-black">{stat.value}</p>
                  <div className="w-8 h-px bg-gold-soft/40 mx-auto my-3" />
                  <p className="font-jost text-xl tracking-wide text-black">{stat.label}</p>
                </>
              )}
            </StaggerItem>
          ))}

          <div className="col-span-1 sm:col-span-3 text-center mt-4">
            <p className="font-jost text-base text-black leading-relaxed">
              Be a part of a growing wellness family of 2 Lakh +<br />
              Follow us for daily yoga practices, healing tips and real transformations.
            </p>
          </div>
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

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

const TRANSFORMATION_IMAGES = [
  '/testimonials/01.webp',
  '/testimonials/02.webp',
  '/testimonials/03.webp',
  '/testimonials/04.webp',
  '/testimonials/05.webp',
];

function WeightLossSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TRANSFORMATION_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="weight-loss-section" data-testid="weight-loss-section" className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left" className="order-2 lg:order-1">
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-dark mb-3">Our Speciality</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light tracking-tight text-charcoal mb-6 leading-[1.15]">
              Weight Loss Program
            </h2>
            <p className="font-jost text-base text-black leading-relaxed mb-8">
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
              <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden z-10">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={TRANSFORMATION_IMAGES[current]}
                    alt={`Transformation ${current + 1}`}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </AnimatePresence>
              </div>
              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4 relative z-10">
                {TRANSFORMATION_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-gold-soft' : 'w-1.5 bg-sand'}`}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section data-testid="why-us-section" className="bg-beige/30 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT COLUMN - Sticky */}
          <div className="lg:sticky lg:top-28 lg:self-start py-16 lg:py-24">
            <AnimatedSection>
              <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft/70 mb-5">Why Us</p>
              <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-charcoal leading-[1.05] mb-8">
                Why Ranjana<br />Yoga Studio?
              </h2>
              <p className="font-jost text-sm text-black leading-relaxed mb-10 max-w-sm">
                We create a space where every individual can slow down, reconnect, and rebuild through ancient healing traditions.
              </p>
              <Link
                to="/services"
                data-testid="why-us-cta"
                className="inline-flex font-jost text-sm font-medium tracking-[0.06em] px-8 py-3 rounded-full border border-sand text-charcoal hover:bg-beige transition-all duration-300"
              >
                explore services
              </Link>
            </AnimatedSection>
          </div>

          {/* RIGHT COLUMN - Scrolling cards */}
          <div className="py-10 lg:py-20 space-y-16 lg:space-y-20">
            {whyUsCards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <div data-testid={`why-us-card-${i}`}>
                  <div className="overflow-hidden rounded-xl mb-5">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-56 sm:h-72 lg:h-80 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="font-jost text-xs tracking-[0.15em] uppercase text-taupe mb-2">{card.category}</p>
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-normal tracking-tight text-charcoal mb-3">{card.title}</h3>
                  <p className="font-jost text-sm text-black leading-relaxed max-w-lg">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={sectionRef} data-testid="testimonials-section" className="relative overflow-hidden bg-charcoal text-ivory">
      {/* Parallax background image */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 z-0">
        <img
          src="/images/testimonial-bg.jpeg"
          alt="Yoga background"
          className="w-full h-[130%] object-cover opacity-20"
        />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/70 z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft/60 mb-3">Testimonials</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-light tracking-tight text-ivory/90">What Our Members Say</h2>
        </AnimatedSection>

        {/* Active testimonial */}
        <div className="min-h-[280px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              data-testid={`testimonial-active`}
            >
              <Quote size={40} className="text-gold-soft/30 mb-6" strokeWidth={1} />
              <blockquote className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-light text-ivory/90 leading-[1.3] mb-8 max-w-3xl">
                "{testimonials[active].text}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-gold-soft/40" />
                <div>
                  <p className="font-jost text-sm font-medium text-ivory/80 tracking-wide">{testimonials[active].name}</p>
                  <p className="font-jost text-xs text-ivory/40">{testimonials[active].program}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center gap-3 mt-12" data-testid="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              data-testid={`testimonial-dot-${i}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-gold-soft' : 'bg-ivory/20 hover:bg-ivory/40'
                }`}
            />
          ))}
          <span className="font-jost text-xs text-ivory/30 ml-4">
            {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>
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
            className="font-jost text-sm font-medium tracking-[0.08em] px-6 py-2.5 rounded-full bg-blush border border-gold-soft text-charcoal hover:bg-deep-rose hover:text-ivory transition-all duration-300"
          >
            Book Your Session
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
