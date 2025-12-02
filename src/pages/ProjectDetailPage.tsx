import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Tag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProjectDetailPage() {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const project = {
    id,
    title: 'Moderne Familievilla',
    category: 'Privat Indretning',
    location: 'Hellerup',
    year: '2024',
    client: 'Privat kunde',
    scope: 'Komplet indretning af stue, køkken og soveværelser',
    description:
      'Dette projekt var en komplet transformation af en familievilla i Hellerup. Kunden ønskede et moderne, minimalistisk udtryk med fokus på funktionalitet og tidløs elegance. Vi arbejdede med en lys farvepalette og naturlige materialer for at skabe ro og harmoni i hjemmet.',
    challenge:
      'Udfordringen var at skabe sammenhæng mellem de forskellige rum, samtidig med at hvert rum skulle have sin egen identitet. Derudover skulle løsningen være familievenlig og praktisk i hverdagen.',
    solution:
      'Vi valgte en skandinavisk tilgang med lyse farver, træelementer og smart opbevaring. Møblerne blev nøje udvalgt for at kombinere funktionalitet med æstetik. Resultatet er et hjem, der er både smukt og let at leve i.',
    images: [
      'https://images.unsplash.com/photo-1571164860029-856acbc24b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY0Njk1MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1515877131530-5693bde51d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwc2NhbmRpbmF2aWFufGVufDF8fHx8MTc2NDY5NTI0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1722348673532-d4814dbf87b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMG5vcmRpY3xlbnwxfHx8fDE3NjQ2OTUyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1744659883777-1af2183e13b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaG9tZSUyMGVudHJhbmNlfGVufDF8fHx8MTc2NDY5NTI0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    tags: ['Minimalistisk', 'Skandinavisk', 'Familievenlig', 'Tidløst'],
  };

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="pt-32 pb-8 px-6 max-w-7xl mx-auto">
        <Link
          to="/projekter"
          className="inline-flex items-center gap-2 text-[var(--accent)] hover:gap-4 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Tilbage til projekter
        </Link>
      </div>

      {/* Hero Image */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <motion.div
          className="relative aspect-[21/9] rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ImageWithFallback
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Project Info */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6" style={{ color: 'var(--accent)' }}>
                {project.title}
              </h1>
              <p className="text-lg mb-8">{project.description}</p>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-3" style={{ color: 'var(--accent)' }}>
                    Udfordringen
                  </h3>
                  <p>{project.challenge}</p>
                </div>

                <div>
                  <h3 className="mb-3" style={{ color: 'var(--accent)' }}>
                    Løsningen
                  </h3>
                  <p>{project.solution}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg space-y-6 sticky top-32">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Tag className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                  <span className="text-sm text-gray-500">Kategori</span>
                </div>
                <p style={{ color: 'var(--accent)' }}>{project.category}</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                  <span className="text-sm text-gray-500">Lokation</span>
                </div>
                <p style={{ color: 'var(--accent)' }}>{project.location}</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                  <span className="text-sm text-gray-500">År</span>
                </div>
                <p style={{ color: 'var(--accent)' }}>{project.year}</p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-3">Omfang</p>
                <p className="text-sm">{project.scope}</p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-3">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <motion.h2
          className="mb-12"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projektgalleri
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {project.images.slice(1).map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ImageWithFallback
                src={image}
                alt={`${project.title} - Billede ${index + 2}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
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
            Lad os skabe dit næste projekt sammen
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Kontakt mig for at høre mere om, hvordan jeg kan hjælpe dig
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/kontakt"
              className="px-8 py-4 rounded-full transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)' }}
            >
              Kontakt Mig
            </Link>
            <Link
              to="/projekter"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full transition-all hover:bg-white/20"
            >
              Se flere projekter
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
