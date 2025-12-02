import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-[var(--accent)] text-white mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl mb-4">
              <span className="text-white">Kathrine</span>
              <span className="text-[var(--primary)] ml-1">Living</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Professionel indretningsarkitekt med passion for minimalistisk nordisk design og funktionelle løsninger.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4 text-white">Nyttige Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/om-mig" className="text-white/70 hover:text-[var(--primary)] transition-colors text-sm">
                Om mig
              </Link>
              <Link to="/services" className="text-white/70 hover:text-[var(--primary)] transition-colors text-sm">
                Services
              </Link>
              <Link to="/projekter" className="text-white/70 hover:text-[var(--primary)] transition-colors text-sm">
                Projekter
              </Link>
              <Link to="/kontakt" className="text-white/70 hover:text-[var(--primary)] transition-colors text-sm">
                Kontakt
              </Link>
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4 text-white">Kontakt</h4>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <p>Kathrine Living</p>
              <p>St. Strandamsvej 5</p>
              <p>3400 Hillerød</p>
              <a href="mailto:aki@kathrineliving.dk" className="hover:text-[var(--primary)] transition-colors">
                aki@kathrineliving.dk
              </a>
              <a href="tel:+4544707048" className="hover:text-[var(--primary)] transition-colors">
                +45 44 70 70 48
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[var(--primary)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[var(--primary)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:aki@kathrineliving.dk"
                className="text-white/70 hover:text-[var(--primary)] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Kathrine Living. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
}