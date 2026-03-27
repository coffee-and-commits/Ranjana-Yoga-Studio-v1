import { useState } from 'react';
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { LotusDivider } from '@/components/LotusDecor';
import { X, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1612215033461-f2185845eb4d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBvdXRkb29yfGVufDB8fHx8MTc3NDYwMzEwOHww&ixlib=rb-4.1.0&q=85', alt: 'Yoga session', tall: true },
  { src: 'https://images.pexels.com/photos/5201529/pexels-photo-5201529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', alt: 'Meditation', tall: false },
  { src: 'https://images.unsplash.com/photo-1663820108880-74a416c819da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwyfHx3b21hbiUyMHlvZ2ElMjBvdXRkb29yfGVufDB8fHx8MTc3NDYwMzEwOHww&ixlib=rb-4.1.0&q=85', alt: 'Outdoor yoga', tall: false },
  { src: 'https://images.pexels.com/photos/4908556/pexels-photo-4908556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', alt: 'Therapy session', tall: true },
  { src: 'https://images.pexels.com/photos/6648802/pexels-photo-6648802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', alt: 'Peaceful meditation', tall: false },
  { src: 'https://images.unsplash.com/photo-1767611120077-3697335ec748?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHBlYWNlZnVsJTIwc3R1ZGlvfGVufDB8fHx8MTc3NDYwMzI2OXww&ixlib=rb-4.1.0&q=85', alt: 'Yoga pose', tall: true },
  { src: 'https://images.pexels.com/photos/6193612/pexels-photo-6193612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', alt: 'Studio atmosphere', tall: false },
  { src: 'https://images.unsplash.com/photo-1622587133988-70349a7942c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwc3VubGlnaHR8ZW58MHx8fHwxNzc0NjAzMTA3fDA&ixlib=rb-4.1.0&q=85', alt: 'Instructor session', tall: false },
  { src: 'https://images.unsplash.com/photo-1761971975973-cbb3e59263de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHx5b2dhJTIwc3R1ZGlvJTIwc3VubGlnaHR8ZW58MHx8fHwxNzc0NjAzMTA3fDA&ixlib=rb-4.1.0&q=85', alt: 'Studio sunlight', tall: true },
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
