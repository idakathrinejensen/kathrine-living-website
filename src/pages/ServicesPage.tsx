import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, Sparkles, Palette, Video, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ServicesPage() {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Privat Indretning',
      slug: 'privat-indretning',
      description: 'Skræddersyet indretning af private boliger med fokus på funktion og æstetik.',
      details: [
        'Komplet indretning af dit hjem',
        'Personlig stil og funktionalitet',
        'Møbel- og belysningsvalg',
        'Tegningsmateriale og visualiseringer',
      ],
      image: 'https://images.unsplash.com/photo-1571164860029-856acbc24b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY0Njk1MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Boligstyling',
      slug: 'boligstyling',
      description: 'Gør din bolig salgsklar med professionel styling, der fremhæver rummenes potentiale.',
      details: [
        'Styling til salg eller udlejning',
        'Optimering af rumoplevelsen',
        'Udlån af inventar og tilbehør',
        'Styling til fotografering',
      ],
      image: 'https://images.unsplash.com/photo-1758977404579-1d9ca0d6dc90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc3RhZ2luZyUyMHNjYW5kaW5hdmlhbnxlbnwxfHx8fDE3NjQ2OTUzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Farve- og Materialevalg',
      slug: 'farve-materialevalg',
      description: 'Professionel rådgivning om farver, materialer og overflader til dit projekt.',
      details: [
        'Farvesammensætninger',
        'Materialevalg til gulve og vægge',
        'Overflader og teksturer',
        'Moodboards og inspirationsmateriale',
      ],
      image: 'https://images.unsplash.com/photo-1763076470404-23554ef26747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMG1hdGVyaWFscyUyMHBhbGV0dGV8ZW58MXx8fHwxNzY0Njk1MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Online Rådgivning',
      slug: 'online-raadgivning',
      description: 'Fleksibel og praktisk rådgivning via video - perfekt til mindre projekter.',
      details: [
        'Videokonsultation fra dit hjem',
        'Skræddersyede anbefalinger',
        'Opfølgning og moodboards',
        'Fleksibel og prisvenlig løsning',
      ],
      image: 'https://images.unsplash.com/photo-1760346547318-7e309662467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbGwlMjBvbmxpbmUlMjBtZWV0aW5nfGVufDF8fHx8MTc2NDY5NTMyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1542904990-579199bba13a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdWx0YXRpb24lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjQ2OTUzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-white" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Mine Services
          </motion.h1>
          <motion.p
            className="text-white/90 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Skræddersyede indretningsløsninger til dit hjem
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)' }}
                >
                  {service.icon}
                </div>
                <h2 className="mb-4" style={{ color: 'var(--accent)' }}>
                  {service.title}
                </h2>
                <p className="mb-6 text-lg">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: 'var(--accent)' }}
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[var(--accent)] hover:gap-4 transition-all"
                >
                  Læs mere
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <motion.div
                  className="rounded-3xl overflow-hidden aspect-[4/3]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Teaser */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--primary)' }}>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6" style={{ color: 'var(--accent)' }}>
            Hvordan foregår et samarbejde?
          </h2>
          <p className="text-lg mb-8">
            Jeg guider dig gennem hele processen fra første møde til færdigt resultat. 
            Læs mere om min arbejdsproces og se, hvad du kan forvente.
          </p>
          <Link
            to="/proces"
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:gap-4 transition-all"
          >
            Se min proces
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
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
            Har du brug for hjælp til dit projekt?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Kontakt mig for en uforpligtende snak om dine ønsker og behov
          </p>
          <Link
            to="/kontakt"
            className="inline-block px-8 py-4 rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)' }}
          >
            Kontakt Mig
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
