import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/90 backdrop-blur-xl shadow-sm border-b border-sand/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" className="text-gold-soft">
                <path d="M50 5 C50 5, 25 35, 50 70 C75 35, 50 5, 50 5Z" fill="currentColor" opacity="0.4"/>
                <path d="M50 10 C50 10, 15 50, 50 85 C85 50, 50 10, 50 10Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M30 55 C30 55, 45 35, 50 65 C55 35, 70 55, 70 55" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.5"/>
              </svg>
              <span className={`font-cormorant text-xl lg:text-2xl tracking-tight font-normal transition-colors duration-500 ${
                scrolled ? 'text-charcoal' : isHome ? 'text-ivory/90' : 'text-charcoal'
              }`}>
                Ranjana Yoga Studio
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`nav-${link.name.toLowerCase()}`}
                  className={`font-jost text-[15px] tracking-wide transition-colors duration-300 relative ${
                    location.pathname === link.path
                      ? scrolled ? 'text-charcoal nav-link-active' : isHome ? 'text-ivory nav-link-active' : 'text-charcoal nav-link-active'
                      : scrolled ? 'text-taupe hover:text-deep-rose' : isHome ? 'text-ivory/60 hover:text-ivory' : 'text-taupe hover:text-deep-rose'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                data-testid="nav-book-trial"
                className="font-jost text-sm font-medium tracking-[0.08em] px-6 py-2.5 rounded-full bg-blush border border-gold-soft text-charcoal hover:bg-deep-rose hover:text-ivory transition-all duration-300"
              >
                Book a Trial
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors duration-500 ${
                scrolled ? 'text-charcoal' : isHome ? 'text-ivory' : 'text-charcoal'
              }`}
              data-testid="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory flex flex-col items-center justify-center"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className={`font-cormorant text-3xl tracking-tight transition-colors duration-300 ${
                      location.pathname === link.path ? 'text-deep-rose' : 'text-charcoal'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/contact"
                  className="font-jost text-sm font-medium tracking-[0.08em] px-8 py-3 rounded-full bg-blush border border-gold-soft text-charcoal"
                >
                  Book a Trial
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
