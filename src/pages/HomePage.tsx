import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Home, Palette, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  const services = [
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Privat Indretning',
      description: 'Skab dit drømmehjem med personlige og funktionelle løsninger.',
      link: '/services/privat-indretning',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Boligstyling',
      description: 'Gør din bolig salgsklar med professionel styling.',
      link: '/services/boligstyling',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Farve- og Materialevalg',
      description: 'Find den perfekte kombination til dit rum.',
      link: '/services/farve-materialevalg',
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Moderne Familievilla',
      category: 'Privat Indretning',
      image: 'https://images.unsplash.com/photo-1571164860029-856acbc24b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY0Njk1MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Minimalistisk Soveværelse',
      category: 'Boligstyling',
      image: 'https://images.unsplash.com/photo-1722348673532-d4814dbf87b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMG5vcmRpY3xlbnwxfHx8fDE3NjQ2OTUyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Nordisk Køkken',
      category: 'Farve & Materialer',
      image: 'https://images.unsplash.com/photo-1515877131530-5693bde51d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwc2NhbmRpbmF2aWFufGVufDF8fHx8MTc2NDY5NTI0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1571164860029-856acbc24b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY0Njk1MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            className="text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Skab det hjem, du drømmer om
          </motion.h1>
          <motion.p
            className="text-white/90 text-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Professionel indretningsarkitekt med passion for minimalistisk nordisk design
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              to="/projekter"
              className="px-8 py-4 rounded-full transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)' }}
            >
              Se Projekter
            </Link>
            <Link
              to="/kontakt"
              className="px-8 py-4 bg-white text-[var(--accent)] rounded-full transition-all hover:scale-105"
            >
              Kontakt Mig
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6" style={{ color: 'var(--accent)' }}>
            Velkommen til Kathrine Living
          </h2>
          <p className="text-lg mb-8">
            Jeg skaber harmoniske og funktionelle indretningsløsninger, der passer til din livsstil. 
            Med fokus på skandinavisk æstetik og tidløs elegance hjælper jeg dig med at realisere dit drømmehjem.
          </p>
          <Link
            to="/om-mig"
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:gap-4 transition-all"
          >
            Læs mere om mig
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4" style={{ color: 'var(--accent)' }}>
              Mine Services
            </h2>
            <p className="max-w-2xl mx-auto">
              Jeg tilbyder skræddersyede indretningsløsninger til både private og erhverv
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={service.link} className="block group">
                  <div className="bg-white rounded-3xl p-8 h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)' }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="mb-4" style={{ color: 'var(--accent)' }}>
                      {service.title}
                    </h3>
                    <p className="mb-6">{service.description}</p>
                    <div className="flex items-center gap-2 text-[var(--accent)] group-hover:gap-4 transition-all">
                      Læs mere
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[var(--accent)] hover:gap-4 transition-all"
            >
              Se alle services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4" style={{ color: 'var(--accent)' }}>
            Udvalgte Projekter
          </h2>
          <p className="max-w-2xl mx-auto">
            Se et udpluk af mine seneste indretningsprojekter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/projekter/${project.id}`} className="group block">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm mb-2 opacity-80">{project.category}</p>
                    <h4>{project.title}</h4>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/projekter"
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:gap-4 transition-all"
          >
            Se alle projekter
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--accent)' }}>
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-white">
            Klar til at forvandle dit hjem?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Lad os skabe dit drømmehjem sammen. Book en uforpligtende konsultation i dag.
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
