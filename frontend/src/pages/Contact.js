import { useState } from 'react';
import { AnimatedSection, FadeIn } from '@/components/AnimatedSection';
import { LotusDivider } from '@/components/LotusDecor';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Clock, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: 'Badrish colony, Lane no 6, House no 168, Near Ambiwala Gurudwara, Dharmpur (Danda), Dehradun' },
  { icon: Phone, label: 'Phone', value: '7409508399, 7452024056', href: 'tel:+917409508399' },
  { icon: Mail, label: 'Email', value: '[Email Address]' },
  { icon: MessageCircle, label: 'WhatsApp', value: '[WhatsApp Number]' },
  { icon: Instagram, label: 'Instagram', value: '@yogicsoul_ranj', href: 'https://www.instagram.com/yogicsoul_ranj?igsh=c2h4d3pibGVtZjQw' },
  { icon: Clock, label: 'Studio Hours', value: 'Morning: 5.30 AM - 9.15 AM | Evening: 5.30 PM - 8.30 PM' },
];

const interests = [
  'Yoga Classes',
  'Weight Loss Program',
  'Ayurveda',
  'Acupressure',
  'Marma Therapy',
  'General Enquiry',
];

const batchTimes = ['Morning', 'Evening', 'Flexible'];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', interest: '', batchTime: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [interestOpen, setInterestOpen] = useState(false);
  const [batchOpen, setBatchOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', interest: '', batchTime: '', message: '' });
    }, 4000);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div data-testid="contact-page">
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-beige/30 relative overflow-hidden">
        <div className="blob-gold top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-4">Get in Touch</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-charcoal leading-[1.1]">
              Let's Connect
            </h1>
            <p className="font-jost text-base text-taupe mt-6 max-w-xl mx-auto leading-relaxed">
              Have a question, or ready to begin? We'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section data-testid="contact-content" className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <FadeIn direction="left">
              <div>
                <h2 className="font-cormorant text-3xl font-light tracking-tight text-charcoal mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4" data-testid={`contact-${item.label.toLowerCase()}`}>
                        <div className="w-10 h-10 rounded-full bg-blush/30 flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-gold-soft" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="font-jost text-xs tracking-[0.1em] uppercase text-taupe mb-1">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="font-jost text-sm text-charcoal hover:text-gold-soft transition-colors inline-block">
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-jost text-sm text-charcoal">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Map */}
                <div className="mt-10 rounded-2xl overflow-hidden border border-sand/50" data-testid="google-map">
                  <div className="w-full h-64 bg-beige flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={32} className="text-gold-soft mx-auto mb-3" strokeWidth={1.5} />
                      <p className="font-jost text-sm text-taupe">Google Map Embed</p>
                      <p className="font-jost text-xs text-taupe/60 mt-1">[Provide Google Maps link to embed]</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn direction="right">
              <div className="bg-beige/50 border border-sand/50 rounded-2xl p-8 lg:p-10">
                <h2 className="font-cormorant text-3xl font-light tracking-tight text-charcoal mb-2">Send Us a Message</h2>
                <p className="font-jost text-sm text-taupe mb-8">We'll get back to you within 24 hours.</p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-16"
                      data-testid="form-success"
                    >
                      <CheckCircle size={48} className="text-gold-soft mx-auto mb-4" strokeWidth={1.5} />
                      <h3 className="font-cormorant text-2xl text-charcoal mb-2">Thank you for reaching out!</h3>
                      <p className="font-jost text-sm text-taupe">We will get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      data-testid="contact-form"
                    >
                      {/* Name */}
                      <div>
                        <label className="font-jost text-xs tracking-[0.1em] uppercase text-taupe mb-2 block">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Your full name"
                          data-testid="input-name"
                          className="w-full font-jost text-sm px-5 py-3 rounded-lg bg-ivory border border-sand/50 text-charcoal placeholder:text-taupe/50 focus:outline-none focus:border-gold-soft transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="font-jost text-xs tracking-[0.1em] uppercase text-taupe mb-2 block">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="Your mobile number"
                          data-testid="input-phone"
                          className="w-full font-jost text-sm px-5 py-3 rounded-lg bg-ivory border border-sand/50 text-charcoal placeholder:text-taupe/50 focus:outline-none focus:border-gold-soft transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="font-jost text-xs tracking-[0.1em] uppercase text-taupe mb-2 block">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="Your email (optional)"
                          data-testid="input-email"
                          className="w-full font-jost text-sm px-5 py-3 rounded-lg bg-ivory border border-sand/50 text-charcoal placeholder:text-taupe/50 focus:outline-none focus:border-gold-soft transition-colors"
                        />
                      </div>

                      {/* Interest Dropdown */}
                      <div className="relative">
                        <label className="font-jost text-xs tracking-[0.1em] uppercase text-taupe mb-2 block">Interested In *</label>
                        <div
                          onClick={() => { setInterestOpen(!interestOpen); setBatchOpen(false); }}
                          data-testid="dropdown-interest"
                          className="w-full font-jost text-sm px-5 py-3 rounded-lg bg-ivory border border-sand/50 text-charcoal cursor-pointer flex items-center justify-between"
                        >
                          <span className={formData.interest ? 'text-charcoal' : 'text-taupe/50'}>
                            {formData.interest || 'Select a service'}
                          </span>
                          <svg className={`w-4 h-4 text-taupe transition-transform ${interestOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                        <AnimatePresence>
                          {interestOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              className="absolute top-full left-0 right-0 mt-1 bg-ivory border border-sand/50 rounded-lg shadow-lg z-20 overflow-hidden"
                              data-testid="dropdown-interest-options"
                            >
                              {interests.map((opt) => (
                                <div
                                  key={opt}
                                  onClick={() => { handleChange('interest', opt); setInterestOpen(false); }}
                                  className="font-jost text-sm px-5 py-2.5 cursor-pointer hover:bg-blush/20 text-charcoal transition-colors"
                                  data-testid={`interest-option-${opt.toLowerCase().replace(/\s/g, '-')}`}
                                >
                                  {opt}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Batch Time Dropdown */}
                      <div className="relative">
                        <label className="font-jost text-xs tracking-[0.1em] uppercase text-taupe mb-2 block">Preferred Batch Time</label>
                        <div
                          onClick={() => { setBatchOpen(!batchOpen); setInterestOpen(false); }}
                          data-testid="dropdown-batch"
                          className="w-full font-jost text-sm px-5 py-3 rounded-lg bg-ivory border border-sand/50 text-charcoal cursor-pointer flex items-center justify-between"
                        >
                          <span className={formData.batchTime ? 'text-charcoal' : 'text-taupe/50'}>
                            {formData.batchTime || 'Select a batch time'}
                          </span>
                          <svg className={`w-4 h-4 text-taupe transition-transform ${batchOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                        <AnimatePresence>
                          {batchOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              className="absolute top-full left-0 right-0 mt-1 bg-ivory border border-sand/50 rounded-lg shadow-lg z-20 overflow-hidden"
                              data-testid="dropdown-batch-options"
                            >
                              {batchTimes.map((opt) => (
                                <div
                                  key={opt}
                                  onClick={() => { handleChange('batchTime', opt); setBatchOpen(false); }}
                                  className="font-jost text-sm px-5 py-2.5 cursor-pointer hover:bg-blush/20 text-charcoal transition-colors"
                                  data-testid={`batch-option-${opt.toLowerCase()}`}
                                >
                                  {opt}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="font-jost text-xs tracking-[0.1em] uppercase text-taupe mb-2 block">Message</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Any specific questions or health concerns..."
                          rows={4}
                          data-testid="input-message"
                          className="w-full font-jost text-sm px-5 py-3 rounded-lg bg-ivory border border-sand/50 text-charcoal placeholder:text-taupe/50 focus:outline-none focus:border-gold-soft transition-colors resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        data-testid="submit-button"
                        className="w-full font-jost text-sm font-medium tracking-[0.08em] px-8 py-3.5 rounded-full bg-blush border border-gold-soft text-charcoal hover:bg-deep-rose hover:text-ivory transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Send size={16} />
                        Send Enquiry
                      </button>

                      <p className="font-jost text-xs text-taupe/60 text-center">
                        Your information is safe with us and will never be shared with third parties.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <LotusDivider />
    </div>
  );
}
