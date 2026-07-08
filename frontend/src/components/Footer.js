import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone } from 'lucide-react';
import { WHATSAPP_URL, INSTAGRAM_URL } from '@/lib/constants';

const FOOTER_LINK_KEYS = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'services', path: '/services' },
  { key: 'schedule', path: '/schedule' },
  { key: 'gallery', path: '/gallery' },
  { key: 'upcomingEvent', path: '/upcoming-event' },
  { key: 'contact', path: '/contact' },
];

export default function Footer() {
  const { t } = useTranslation();

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
                <path d="M50 5 C50 5, 25 35, 50 70 C75 35, 50 5, 50 5Z" fill="currentColor" opacity="0.4" />
                <path d="M50 10 C50 10, 15 50, 50 85 C85 50, 50 10, 50 10Z" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="font-cormorant text-xl text-ivory font-normal">{t('footer.brand')}</span>
            </div>
            <p className="font-jost text-sm text-ivory/50 leading-relaxed mb-4">
              {t('footer.tagline')}
            </p>
            <p className="font-jost text-sm text-ivory/40 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cormorant text-lg text-ivory mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {FOOTER_LINK_KEYS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    data-testid={`footer-${t(`common.navLinks.${link.key}`).toLowerCase()}`}
                    className="font-jost text-sm text-ivory/50 hover:text-gold-soft transition-colors duration-300"
                  >
                    {t(`common.navLinks.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-cormorant text-lg text-ivory mb-6">{t('footer.contactTitle')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-soft mt-0.5 shrink-0" />
                <span className="font-jost text-sm text-ivory/50">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold-soft shrink-0" />
                <span className="font-jost text-sm text-ivory/50">{t('footer.phone')}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-cormorant text-lg text-ivory mb-6">{t('footer.followUs')}</h4>
            <div className="flex flex-col gap-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" data-testid="footer-instagram" className="flex items-center gap-3 text-ivory/50 hover:text-gold-soft transition-colors duration-300 group">
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span className="font-jost text-sm">{t('footer.instagram')}</span>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp" className="flex items-center gap-3 text-ivory/50 hover:text-gold-soft transition-colors duration-300 group">
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="font-jost text-sm">{t('footer.whatsapp')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-jost text-xs text-ivory/30">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-4">
            <span className="font-jost text-xs text-ivory/30 hover:text-ivory/50 cursor-pointer transition-colors">{t('footer.privacyPolicy')}</span>
            <span className="font-jost text-xs text-ivory/30 hover:text-ivory/50 cursor-pointer transition-colors">{t('footer.terms')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
