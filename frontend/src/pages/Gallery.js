import { useState } from 'react';
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { LotusDivider } from '@/components/LotusDecor';
import { X, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  { src: '/images/image-1.jpeg', alt: 'Yoga session', tall: true },
  { src: '/images/image-2.jpeg', alt: 'Yoga practice', tall: false },
  { src: '/images/image-3.jpg', alt: 'Yoga pose', tall: false },
  { src: '/images/image-4.jpeg', alt: 'Yoga class', tall: true },
  { src: '/images/group-img.jpeg', alt: 'Group yoga session', tall: false },
  { src: '/images/_1851.JPG.jpeg', alt: 'Studio session', tall: true },
  { src: '/images/_6505.JPG.jpeg', alt: 'Yoga practice', tall: false },
  { src: '/images/_6608.JPG.jpeg', alt: 'Studio yoga', tall: false },
  { src: '/images/_6770.JPG.jpeg', alt: 'Yoga class', tall: true },
  { src: '/images/_6818.JPG.jpeg', alt: 'Meditation session', tall: false },
  { src: '/images/_6835.JPG.jpeg', alt: 'Yoga pose', tall: true },
  { src: '/images/_6846.JPG.jpeg', alt: 'Studio practice', tall: false },
  { src: '/images/17.jpeg', alt: 'Yoga practice', tall: false },
  { src: '/images/WhatsApp%20Image%202026-03-25%20at%2012.55.43%20PM.jpeg', alt: 'Studio moment', tall: false },
  { src: '/gallery/05.jpeg', alt: 'Yoga studio', tall: true },
  { src: '/gallery/07.jpeg', alt: 'Yoga class', tall: false },
  { src: '/gallery/08.jpeg', alt: 'Studio session', tall: false },
  { src: '/gallery/09.jpeg', alt: 'Yoga practice', tall: true },
  { src: '/gallery/12.jpeg', alt: 'Yoga pose', tall: false },
  { src: '/gallery/13.jpeg', alt: 'Studio yoga', tall: true },
  { src: '/gallery/14.jpeg', alt: 'Yoga session', tall: false },
  { src: '/gallery/15.jpeg', alt: 'Yoga class', tall: false },
  { src: '/gallery/16.jpeg', alt: 'Meditation practice', tall: true },
  { src: '/gallery/17.jpeg', alt: 'Studio practice', tall: false },
  { src: '/gallery/18.jpeg', alt: 'Yoga pose', tall: false },
  { src: '/gallery/19.jpeg', alt: 'Yoga session', tall: true },
  { src: '/gallery/20.jpeg', alt: 'Studio yoga', tall: false },
  { src: '/gallery/21.jpeg', alt: 'Yoga class', tall: false },
  { src: '/gallery/22.jpeg', alt: 'Meditation session', tall: true },
  { src: '/gallery/23.jpeg', alt: 'Studio practice', tall: false },
];

const testimonials = [
  { name: 'Priya S.', text: 'Ranjana Studio completely changed my relationship with my body. I lost 8 kgs in 3 months \u2014 but more importantly, I finally feel calm and strong.', program: 'Weight Loss Program', result: 'Lost 8 kgs in 3 months' },
  { name: 'Meena R.', text: 'The personalized attention here is unlike any gym or studio I\'ve visited. The marma therapy sessions have been life-changing for my stress levels.', program: 'Marma Therapy', result: 'Stress-free lifestyle' },
  { name: 'Anita D.', text: 'Such a peaceful, warm environment. The Ayurveda sessions combined with yoga have genuinely improved my digestion and sleep.', program: 'Ayurveda & Yoga', result: 'Better digestion & sleep' },
  { name: 'Sunita K.', text: 'I joined with severe back pain and was hesitant about yoga. After 2 months, not only is my pain reduced, but I feel more energetic than I have in years.', program: 'Yoga Classes', result: 'Reduced chronic back pain' },
  { name: 'Rekha M.', text: 'The small batch size makes all the difference. The instructor knows my strengths and weaknesses, and every session feels tailored to me.', program: 'Yoga Classes', result: 'Personalized growth' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div data-testid="gallery-page">
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-beige/30 relative overflow-hidden">
        <div className="blob-pink top-0 left-0" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-4">Gallery & Stories</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-charcoal leading-[1.1]">
              Moments of Transformation
            </h1>
            <p className="font-jost text-base text-taupe mt-6 max-w-xl mx-auto leading-relaxed">
              A glimpse into our studio, our community, and the journeys that unfold here.
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
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-3">Testimonials</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light tracking-tight text-charcoal">Real Stories. Real Results.</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="bg-ivory border border-sand/50 rounded-2xl p-8 h-full flex flex-col" data-testid={`gallery-testimonial-${t.name.toLowerCase().replace(/[\s.]/g, '-')}`}>
                  <Quote size={24} className="text-gold-pale mb-4" strokeWidth={1.5} />
                  <p className="font-jost text-sm text-charcoal leading-relaxed flex-1 mb-6">"{t.text}"</p>
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-gold-soft fill-gold-soft" />
                      ))}
                    </div>
                    <p className="font-cormorant text-lg font-semibold text-charcoal">{t.name}</p>
                    <p className="font-jost text-xs text-taupe">{t.program}</p>
                    <p className="font-jost text-xs text-gold-soft mt-1">{t.result}</p>
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
