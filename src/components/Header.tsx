import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Hjem' },
    { path: '/om-mig', label: 'Om mig' },
    { path: '/services', label: 'Services' },
    { path: '/projekter', label: 'Projekter' },
    { path: '/proces', label: 'Proces' },
    { path: '/priser', label: 'Priser' },
    { path: '/blog', label: 'Blog' },
    { path: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            src="/assets/Kathrine_Living_logo_neg.png"
            alt="Kathrine Living logo"
            className="h-24 w-auto transition-all"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            style={{
              filter: isScrolled ? 'invert(1)' :'invert(0)',
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-sm tracking-wide transition-colors ${
                location.pathname === item.path
                  ? 'text-[var(--accent)]'
                  : isScrolled
                  ? 'text-gray-600 hover:text-[var(--accent)]'
                  : 'text-white hover:text-[var(--primary)]'
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--accent)]"
                  layoutId="activeNav"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" style={{ color: 'var(--accent)' }} />
          ) : (
            <Menu
              className="w-6 h-6"
              style={{ color: isScrolled ? 'var(--accent)' : 'white' }}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-[72px] bg-white z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col p-6 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xl transition-colors ${
                    location.pathname === item.path
                      ? 'text-[var(--accent)]'
                      : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}