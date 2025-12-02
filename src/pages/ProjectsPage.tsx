import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('alle');

  const filters = [
    { id: 'alle', label: 'Alle Projekter' },
    { id: 'privat', label: 'Privat Indretning' },
    { id: 'styling', label: 'Boligstyling' },
    { id: 'farve', label: 'Farve & Materialer' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Moderne Familievilla',
      category: 'privat',
      categoryLabel: 'Privat Indretning',
      location: 'Hellerup',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1571164860029-856acbc24b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY0Njk1MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Komplet indretning af familievilla med fokus på funktionalitet og nordisk æstetik.',
    },
    {
      id: 2,
      title: 'Minimalistisk Soveværelse',
      category: 'privat',
      categoryLabel: 'Privat Indretning',
      location: 'København K',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1722348673532-d4814dbf87b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMG5vcmRpY3xlbnwxfHx8fDE3NjQ2OTUyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Roligt og harmonisk soveværelse med naturlige materialer og bløde farver.',
    },
    {
      id: 3,
      title: 'Nordisk Køkkenrenovering',
      category: 'farve',
      categoryLabel: 'Farve & Materialer',
      location: 'Lyngby',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1515877131530-5693bde51d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwc2NhbmRpbmF2aWFufGVufDF8fHx8MTc2NDY5NTI0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Moderne køkken med tidløse materialer og gennemtænkt funktionalitet.',
    },
    {
      id: 4,
      title: 'Lejlighed til Salg',
      category: 'styling',
      categoryLabel: 'Boligstyling',
      location: 'Frederiksberg',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1758977404579-1d9ca0d6dc90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc3RhZ2luZyUyMHNjYW5kaW5hdmlhbnxlbnwxfHx8fDE3NjQ2OTUzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Professionel styling af lejlighed med fokus på at fremhæve rummenes potentiale.',
    },
    {
      id: 5,
      title: 'Hyggelig Entre',
      category: 'privat',
      categoryLabel: 'Privat Indretning',
      location: 'Hillerød',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1744659883777-1af2183e13b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaG9tZSUyMGVudHJhbmNlfGVufDF8fHx8MTc2NDY5NTI0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Indbydende entre med smart opbevaring og nordisk charme.',
    },
    {
      id: 6,
      title: 'Farvepalette til Renovering',
      category: 'farve',
      categoryLabel: 'Farve & Materialer',
      location: 'Roskilde',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1763076470404-23554ef26747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMG1hdGVyaWFscyUyMHBhbGV0dGV8ZW58MXx8fHwxNzY0Njk1MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Skræddersyet farve- og materialesammensætning til hele boligen.',
    },
  ];

  const filteredProjects =
    activeFilter === 'alle'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
            src="https://images.unsplash.com/photo-1571164860029-856acbc24b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY0Njk1MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Projects"
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
            Mine Projekter
          </motion.h1>
          <motion.p
            className="text-white/90 text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Se et udvalg af mine seneste indretningsprojekter
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeFilter === filter.id
                  ? 'text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={
                activeFilter === filter.id
                  ? { backgroundColor: 'var(--accent)' }
                  : {}
              }
            >
              {filter.label}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link to={`/projekter/${project.id}`} className="group block">
                <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-4">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm mb-1 opacity-90">{project.categoryLabel}</p>
                    <h3 className="text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-white/80">{project.description}</p>
                  </div>
                </div>
                <div className="px-2">
                  <h4 className="mb-1" style={{ color: 'var(--accent)' }}>
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {project.location} • {project.year}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
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
            Lad os skabe dit næste projekt sammen
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Kontakt mig for at høre mere om, hvordan jeg kan hjælpe dig
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
