import { AnimatedSection } from '@/components/AnimatedSection';

const WHATSAPP_HREF = 'https://wa.me/917409508399';

export function FeesBatchDetails({ className = '' }) {
  return (
    <section data-testid="fees-batch-details" className={`py-16 lg:py-20 ${className}`}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="bg-ivory border border-sand/50 rounded-2xl p-8 lg:p-10">
            <h2 className="font-cormorant text-2xl sm:text-3xl font-light text-black mb-5">
              Fees &amp; Batch Details
            </h2>
            <p className="font-jost text-sm text-black leading-relaxed mb-3">
              Fees may vary based on batch type and availability.
            </p>
            <p className="font-jost text-sm text-black leading-relaxed mb-8">
              For complete details and to choose the right batch for you, connect with us on WhatsApp.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="fees-batch-whatsapp"
              className="inline-flex items-center gap-2 font-jost text-sm font-medium tracking-[0.08em] px-8 py-3 rounded-full bg-blush border border-gold-soft text-charcoal hover:bg-deep-rose hover:text-ivory transition-all duration-300"
            >
              👉 Chat on WhatsApp ⭐
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
