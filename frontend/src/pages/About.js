import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { LotusDivider } from '@/components/LotusDecor';
import { Award, BookOpen, Heart } from 'lucide-react';

const ABOUT_IMG = '/images/group-img.jpeg';
const INSTRUCTOR_IMG = '/images/profile-img.jpeg';

const pillars = [
  { num: '01', title: 'Balance', desc: 'Wellness begins when all aspects of your life \u2013 physical, mental, and emotional \u2013 are in harmony.', icon: BookOpen },
  { num: '02', title: 'Heal', desc: 'Your body knows how to heal. Our role is to create the right conditions and guide you back to wholeness.', icon: Heart },
  { num: '03', title: 'Transform', desc: 'Real transformation is sustainable. We help you build habits and awareness that last a lifetime.', icon: Award },
];

const highlights = [
  { label: 'Session Types', value: 'Yoga, Ayurveda, Acupressure, Marma Therapy, Weight Loss' },
  { label: 'Batch Size', value: 'Small, personalized groups' },
  { label: 'Levels', value: 'Beginner & Intermediate' },
  { label: 'Approach', value: 'Holistic \u2013 mind, body & spirit' },
  { label: 'Focus', value: 'Long-term, natural wellness' },
];

export default function About() {
  return (
    <div data-testid="about-page">
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-beige/30 relative overflow-hidden">
        <div className="blob-gold top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-4">About Us</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-charcoal leading-[1.1]">
              About Ranjana Yoga Studio
            </h1>
            <p className="font-jost text-base text-taupe mt-6 max-w-xl mx-auto leading-relaxed">
              A sanctuary for healing, movement, and inner harmony.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section data-testid="our-story" className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute -bottom-4 -left-4 w-full h-full border border-gold-soft/30 rounded-xl" />
                <img src={ABOUT_IMG} alt="Yoga studio" className="w-full h-[400px] lg:h-[500px] object-cover rounded-xl relative z-10" />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-3">Our Story</p>
              <h2 className="font-cormorant text-3xl sm:text-4xl font-light tracking-tight text-charcoal mb-6">
                More Than a Studio &ndash; A Space to Heal
              </h2>
              <div className="font-jost text-base text-taupe leading-relaxed space-y-4">
                <p>
                  Ranjana Yoga Studio was created with a simple belief — true wellness comes from balance in body and mind.
                </p>
                <p>
                  We offer a calm and supportive space for everyone, with a special focus on helping women manage stress, hormonal imbalances, and overall well-being.
                </p>
                <p>
                  With small, personalized batches, every individual receives the attention and care they truly need — making each session effective, comfortable, and deeply nurturing.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <LotusDivider />

      {/* Instructor */}
      <section data-testid="instructor-section" className="py-20 lg:py-24 bg-beige/20 relative overflow-hidden">
        <div className="blob-pink -bottom-40 right-0" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-3">Our Expert</p>
              <h2 className="font-cormorant text-3xl sm:text-4xl font-light tracking-tight text-charcoal mb-6">
                Ranjana Kumain
              </h2>
              <div className="font-jost text-base text-taupe leading-relaxed space-y-4">
                <p>
                  After completing my MBA in HR and working in a multinational company, I felt a deeper calling towards yoga — something that brought real balance and purpose into my life.
                  What started as a simple practice soon became a passion. I pursued my Master’s in Yoga and completed a 400-hour teacher training in Rishikesh, along with certifications in prenatal and postnatal yoga.
                </p>
                <p>
                  For the past 3+ years, I have been guiding individuals — especially women — to manage stress, improve health, and feel more confident and balanced in their bodies.
                  My work has been recognized with an International Women’s Day award, and my yoga practices have also been featured in newspaper articles — reaching and inspiring a wider community.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Certified Yoga Instructor', 'Ayurveda Practitioner', 'Marma Therapist'].map((cert) => (
                  <span key={cert} className="font-jost text-xs tracking-wide px-4 py-1.5 rounded-full bg-gold-pale/30 text-charcoal border border-gold-soft/20">
                    {cert}
                  </span>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border border-gold-soft/30 rounded-xl" />
                <img src={INSTRUCTOR_IMG} alt="Instructor" className="w-full h-[400px] lg:h-[500px] object-cover rounded-xl relative z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      {/* <section data-testid="philosophy-section" className="py-20 lg:py-24 bg-ivory relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light tracking-tight text-charcoal">What We Believe In</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={pillar.title} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-blush/30 flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-gold-soft" strokeWidth={1.5} />
                  </div>
                  <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-2">{pillar.num}.</p>
                  <h3 className="font-cormorant text-2xl font-semibold text-charcoal mb-3">{pillar.title}</h3>
                  <p className="font-jost text-sm text-taupe leading-relaxed">{pillar.desc}</p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section> */}

      <LotusDivider />

      {/* Studio Highlights */}
      {/* <section data-testid="highlights-section" className="py-20 lg:py-24 bg-beige/30 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light tracking-tight text-charcoal">Studio Highlights</h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-0">
            {highlights.map((h) => (
              <StaggerItem key={h.label}>
                <div className="flex items-start justify-between py-5 border-b border-sand/50">
                  <span className="font-jost text-sm font-medium text-charcoal">{h.label}</span>
                  <span className="font-jost text-sm text-taupe text-right max-w-xs">{h.value}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}
    </div>
  );
}
