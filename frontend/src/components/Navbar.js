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
              <img src={'logo.png'} className='h-20'  />
              {/* <span className="font-cormorant text-xl lg:text-2xl tracking-tight text-charcoal font-normal">
                Ranjana Yoga Studio
              </span> */}
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`nav-${link.name.toLowerCase()}`}
                  className={`font-jost text-[15px] tracking-wide transition-colors duration-300 hover:text-deep-rose relative ${
                    location.pathname === link.path
                      ? 'text-charcoal nav-link-active'
                      : 'text-taupe'
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
              className="lg:hidden text-charcoal p-2"
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
