import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-charcoal text-ivory/80">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-soft/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" className="text-gold-soft">
                <path d="M50 5 C50 5, 25 35, 50 70 C75 35, 50 5, 50 5Z" fill="currentColor" opacity="0.4"/>
                <path d="M50 10 C50 10, 15 50, 50 85 C85 50, 50 10, 50 10Z" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="font-cormorant text-xl text-ivory font-normal">Ranjana Yoga Studio</span>
            </div>
            <p className="font-jost text-sm text-ivory/50 leading-relaxed mb-4">
              Balance &bull; Heal &bull; Transform
            </p>
            <p className="font-jost text-sm text-ivory/40 leading-relaxed">
              A holistic wellness space for yoga, Ayurveda, acupressure, and marma therapy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cormorant text-lg text-ivory mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    data-testid={`footer-${link.name.toLowerCase()}`}
                    className="font-jost text-sm text-ivory/50 hover:text-gold-soft transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-cormorant text-lg text-ivory mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-soft mt-0.5 shrink-0" />
                <span className="font-jost text-sm text-ivory/50">[Studio Address], [City], [PIN]</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold-soft shrink-0" />
                <span className="font-jost text-sm text-ivory/50">[Phone Number]</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold-soft shrink-0" />
                <span className="font-jost text-sm text-ivory/50">[Email Address]</span>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-cormorant text-lg text-ivory mb-6">Studio Hours</h4>
            <div className="font-jost text-sm text-ivory/50 space-y-2 mb-6">
              <p>Morning: 6:00 AM - 9:00 AM</p>
              <p>Evening: 5:00 PM - 8:00 PM</p>
              <p>Monday - Saturday</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" data-testid="footer-instagram" className="text-ivory/40 hover:text-gold-soft transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" data-testid="footer-whatsapp" className="text-ivory/40 hover:text-gold-soft transition-colors duration-300" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-jost text-xs text-ivory/30">
            &copy; 2025 Ranjana Yoga Studio. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-jost text-xs text-ivory/30 hover:text-ivory/50 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="font-jost text-xs text-ivory/30 hover:text-ivory/50 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
