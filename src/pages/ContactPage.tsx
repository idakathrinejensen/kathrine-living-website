import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'akj@kathrineliving.dk',
      link: 'mailto:akj@kathrineliving.dk',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Telefon',
      value: '+45 29 44 70 48',
      link: 'tel:+4529447048',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Adresse',
      value: 'St. Stendamsvej 5, 3400 Hillerød',
      link: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      link: 'https://www.instagram.com/kathrineliving/',
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: 'Facebook',
      link: 'https://www.facebook.com/Kathrineliving',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6" style={{ color: 'var(--accent)' }}>
            Kontakt Mig
          </h1>
          <p className="text-xl">
            Jeg ser frem til at høre om dit projekt. Udfyld formularen eller kontakt mig direkte.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-8" style={{ color: 'var(--accent)' }}>
              Send mig en besked
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Navn *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Hvilken service er du interesseret i? *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Vælg en service</option>
                  <option value="privat">Privat Indretning</option>
                  <option value="styling">Boligstyling</option>
                  <option value="farve">Farve- og Materialevalg</option>
                  <option value="online">Online Rådgivning</option>
                  <option value="andet">Andet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Besked *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Fortæl mig om dit projekt..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full px-8 py-4 rounded-full text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                {isSubmitted ? (
                  'Besked sendt! ✓'
                ) : (
                  <>
                    Send Besked
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="mb-8" style={{ color: 'var(--accent)' }}>
                Kontaktinformation
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.link}
                    target={info.label === 'Adresse' ? '_blank' : undefined}
                    rel={info.label === 'Adresse' ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)' }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                      <div style={{ color: 'var(--accent)' }}>{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6" style={{ color: 'var(--accent)' }}>
                Følg mig på sociale medier
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)' }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl" style={{ backgroundColor: 'var(--primary)' }}>
              <h3 className="mb-4" style={{ color: 'var(--accent)' }}>
                Åbningstider
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Mandag - Fredag</span>
                  <span style={{ color: 'var(--accent)' }}>9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekend</span>
                  <span style={{ color: 'var(--accent)' }}>Efter aftale</span>
                </div>
              </div>
              <p className="text-sm mt-4 text-gray-600">
                Jeg svarer typisk inden for 24 timer på hverdage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--accent)' }}>
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-white">
            Lad os skabe noget smukt sammen
          </h2>
          <p className="text-xl text-white/90">
            Jeg glæder mig til at høre fra dig og tale om dit projekt
          </p>
        </motion.div>
      </section>
    </div>
  );
}
