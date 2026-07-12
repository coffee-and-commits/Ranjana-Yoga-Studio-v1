import { useTranslation } from 'react-i18next';
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { LotusDivider } from '@/components/LotusDecor';
import { SEO } from '@/components/SEO';
import { tArray } from '@/i18n/i18n';
import { Award, BookOpen, Heart } from 'lucide-react';

const ABOUT_IMG = '/images/group-img.jpeg';
const INSTRUCTOR_IMG = '/images/profile-img.jpeg';

const PILLAR_ICONS = [BookOpen, Heart, Award];

export default function About() {
  const { t } = useTranslation();
  const storyParagraphs = tArray(t, 'about.story.paragraphs');
  const instructorParagraphs = tArray(t, 'about.instructor.paragraphs');
  const pillars = tArray(t, 'about.pillars');
  const highlights = tArray(t, 'about.highlights');

  return (
    <div data-testid="about-page">
      <SEO page="about" />
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-beige/30 relative overflow-hidden">
        <div className="blob-gold top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-4">{t('about.hero.label')}</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-charcoal leading-[1.1]">
              {t('about.hero.heading')}
            </h1>
            <p className="font-jost text-base text-taupe mt-6 max-w-xl mx-auto leading-relaxed">
              {t('about.hero.desc')}
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
              <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-3">{t('about.story.label')}</p>
              <h2 className="font-cormorant text-3xl sm:text-4xl font-light tracking-tight text-charcoal mb-6">
                {t('about.story.heading')}
              </h2>
              <div className="font-jost text-base text-black leading-relaxed space-y-4">
                {storyParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
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
              <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-3">{t('about.instructor.label')}</p>
              <h2 className="font-cormorant text-3xl sm:text-4xl font-light tracking-tight text-charcoal mb-6">
                {t('about.instructor.name')}
              </h2>
              <div className="font-jost text-base text-black leading-relaxed space-y-4">
                {instructorParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
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
            {pillars.map((pillar, i) => {
              const Icon = PILLAR_ICONS[i];
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
