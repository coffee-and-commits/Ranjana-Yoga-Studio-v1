import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { LotusDivider } from '@/components/LotusDecor';
import { ArrowRight, Calendar, Clock, MapPin, Users } from 'lucide-react';

const events = [
  {
    title: 'Yoga Carnival',
    date: 'June 21, 2026 — International Yoga Day',
    time: '',
    location: '',
    spots: '',
    desc: 'Inner Harmony Festival — Ranjana Yoga Studio as Yoga Partner alongside MAX Healthcare & Akaaya Events. DM for more info: 9899861888',
    image: '/event/event-1.jpeg',
  },
];

export default function UpcomingEvent() {
  return (
    <div data-testid="upcoming-event-page">
      {/* Page Header */}
      <section className="pt-36 pb-16 bg-ivory relative overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full opacity-20" style={{
          background: 'radial-gradient(circle, rgba(242,196,206,0.5) 0%, transparent 70%)'
        }} />
        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-jost text-xs tracking-[0.25em] uppercase text-gold-soft mb-4">What's On</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-charcoal leading-[1.0] mb-6">
              Upcoming Events
            </h1>
            <p className="font-jost text-base text-taupe max-w-xl leading-relaxed">
              Join us for workshops, programs, and open sessions designed to help you begin or deepen your wellness journey.
            </p>
          </motion.div>
        </div>
      </section>

      <LotusDivider />

      {/* Events List */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <StaggerContainer className="space-y-16">
            {events.map((event, i) => (
              <StaggerItem key={event.title} delay={i * 0.1}>
                <div
                  data-testid={`event-card-${i}`}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
                >
                  {/* Image */}
                  <div className={`relative ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="absolute -top-3 -right-3 w-full h-full border border-gold-soft/25 rounded-xl" />
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full object-contain rounded-xl relative z-10"
                    />
                  
                  </div>

                  {/* Details */}
                  <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                    <h2 className="font-cormorant text-3xl sm:text-4xl font-light tracking-tight text-charcoal mb-4 leading-[1.15]">
                      {event.title}
                    </h2>
                    <p className="font-jost text-sm text-taupe leading-relaxed mb-6">{event.desc}</p>

                    <ul className="space-y-2.5 mb-8">
                      {[
                        { Icon: Calendar, text: event.date },
                        { Icon: Clock, text: event.time },
                        { Icon: MapPin, text: event.location },
                        { Icon: Users, text: event.spots },
                      ].filter(({ text }) => text).map(({ Icon, text }) => (
                        <li key={text} className="flex items-center gap-3">
                          <Icon size={15} className="text-gold-soft flex-shrink-0" strokeWidth={1.5} />
                          <span className="font-jost text-sm text-charcoal">{text}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 font-jost text-sm font-medium tracking-[0.08em] px-7 py-3 rounded-full bg-blush border border-gold-soft text-charcoal hover:bg-deep-rose hover:text-ivory transition-all duration-300"
                    >
                      Reserve My Spot <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

                {i < events.length - 1 && (
                  <div className="mt-16 h-px bg-gradient-to-r from-transparent via-sand/60 to-transparent" />
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-beige/40">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-cormorant text-4xl font-light tracking-tight text-charcoal mb-4">
              Don't See What You're Looking For?
            </h2>
            <p className="font-jost text-sm text-taupe mb-8 leading-relaxed">
              We regularly add new workshops and programs. Get in touch and we'll let you know about upcoming sessions that match your goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-jost text-sm font-medium tracking-[0.08em] px-8 py-3.5 rounded-full bg-blush border border-gold-soft text-charcoal hover:bg-deep-rose hover:text-ivory transition-all duration-300"
            >
              Contact Us <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
