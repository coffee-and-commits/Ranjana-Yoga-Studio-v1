import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { LotusDivider } from '@/components/LotusDecor';
import { SEO } from '@/components/SEO';
import { X, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
  const { t } = useTranslation();
  const galleryImages = t('galleryPage.images', { returnObjects: true });
  const testimonials = t('galleryPage.testimonials', { returnObjects: true });
  const [lightbox, setLightbox] = useState(null);

  return (
    <div data-testid="gallery-page">
      <SEO page="gallery" />
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-beige/30 relative overflow-hidden">
        <div className="blob-pink top-0 left-0" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-4">{t('galleryPage.hero.label')}</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-charcoal leading-[1.1]">
              {t('galleryPage.hero.heading')}
            </h1>
            <p className="font-jost text-base text-taupe mt-6 max-w-xl mx-auto leading-relaxed">
              {t('galleryPage.hero.desc')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section data-testid="photo-gallery" className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <div className="masonry-grid">
            {galleryImages.map((img, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div
                  onClick={() => setLightbox(img.src)}
                  className="cursor-pointer group overflow-hidden rounded-xl"
                  data-testid={`gallery-image-${i}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ${
                      img.tall ? 'h-80 lg:h-96' : 'h-56 lg:h-64'
                    }`}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/90 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
            data-testid="lightbox"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-ivory hover:text-gold-soft transition-colors"
              data-testid="lightbox-close"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Full view"
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <LotusDivider />

      {/* Testimonials */}
      <section data-testid="gallery-testimonials" className="py-16 lg:py-24 bg-beige/20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-3">{t('galleryPage.testimonialsLabel')}</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light tracking-tight text-charcoal">{t('galleryPage.testimonialsHeading')}</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <StaggerItem key={item.name}>
                <div className="bg-ivory border border-sand/50 rounded-2xl p-8 h-full flex flex-col" data-testid={`gallery-testimonial-${item.name.toLowerCase().replace(/[\s.]/g, '-')}`}>
                  <Quote size={24} className="text-gold-pale mb-4" strokeWidth={1.5} />
                  <p className="font-jost text-sm text-charcoal leading-relaxed flex-1 mb-6">"{item.text}"</p>
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-gold-soft fill-gold-soft" />
                      ))}
                    </div>
                    <p className="font-cormorant text-lg font-semibold text-charcoal">{item.name}</p>
                    <p className="font-jost text-xs text-taupe">{item.program}</p>
                    <p className="font-jost text-xs text-gold-soft mt-1">{item.result}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
