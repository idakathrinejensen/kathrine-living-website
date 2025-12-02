import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function BlogPage() {
  const posts = [
    {
      id: 1,
      title: '5 Tips til et Minimalistisk Hjem',
      excerpt:
        'Opdag hvordan du skaber et roligt og harmonisk hjem med mindre rod og mere plads til det væsentlige.',
      image: 'https://images.unsplash.com/photo-1739656442687-561985391277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGJsb2clMjBpbnNwaXJhdGlvbnxlbnwxfHx8fDE3NjQ2OTU0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '15. november 2024',
      readTime: '5 min',
      category: 'Inspiration',
    },
    {
      id: 2,
      title: 'Sådan Vælger du de Rigtige Farver',
      excerpt:
        'Lær hvordan du sammensætter farver, der passer til dit hjem og din personlighed.',
      image: 'https://images.unsplash.com/photo-1763076470404-23554ef26747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMG1hdGVyaWFscyUyMHBhbGV0dGV8ZW58MXx8fHwxNzY0Njk1MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '8. november 2024',
      readTime: '7 min',
      category: 'Guide',
    },
    {
      id: 3,
      title: 'Skandinavisk Design: Tidløs Elegance',
      excerpt:
        'Hvad kendetegner skandinavisk indretning, og hvorfor er det stadig så populært?',
      image: 'https://images.unsplash.com/photo-1722248212377-09934ba1c7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBob21lJTIwZGVjb3IlMjB0aXBzfGVufDF8fHx8MTc2NDY5NTQ4OHww&ixlib=rb-4.1.0&q=80&w=1080',
      date: '1. november 2024',
      readTime: '6 min',
      category: 'Stil',
    },
    {
      id: 4,
      title: 'Møbler der Holder Livet Ud',
      excerpt:
        'Invester i kvalitet frem for kvantitet - sådan vælger du møbler, der holder ved.',
      image: 'https://images.unsplash.com/photo-1680209080996-7f016174f2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwZGVzaWdufGVufDF8fHx8MTc2NDY4MTI3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      date: '25. oktober 2024',
      readTime: '5 min',
      category: 'Guide',
    },
    {
      id: 5,
      title: 'Belysning: Den Skjulte Helt i Indretning',
      excerpt:
        'Lær at bruge lys til at skabe stemning og fremhæve dit hjem bedst muligt.',
      image: 'https://images.unsplash.com/photo-1571164860029-856acbc24b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY0Njk1MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '18. oktober 2024',
      readTime: '8 min',
      category: 'Tips',
    },
    {
      id: 6,
      title: 'Bæredygtig Indretning: Gør en Forskel',
      excerpt:
        'Hvordan du kan indrette dig mere bæredygtigt uden at gå på kompromis med stil.',
      image: 'https://images.unsplash.com/photo-1722348673532-d4814dbf87b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMG5vcmRpY3xlbnwxfHx8fDE3NjQ2OTUyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '11. oktober 2024',
      readTime: '6 min',
      category: 'Inspiration',
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
            Blog & Inspiration
          </h1>
          <p className="text-xl">
            Tips, tricks og inspiration til dit hjem
          </p>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to={`/blog/${posts[0].id}`}
            className="block group"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-lg transition-shadow hover:shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div
                  className="inline-block px-4 py-1 rounded-full text-sm mb-4"
                  style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)' }}
                >
                  {posts[0].category}
                </div>
                <h2 className="mb-4 group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--accent)' }}>
                  {posts[0].title}
                </h2>
                <p className="mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{posts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{posts[0].readTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[var(--accent)] mt-6 group-hover:gap-4 transition-all">
                  Læs mere
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.id}`} className="block group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm backdrop-blur-md"
                      style={{ backgroundColor: 'rgba(200, 233, 255, 0.9)', color: 'var(--accent)' }}
                    >
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--accent)' }}>
                      {post.title}
                    </h3>
                    <p className="text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--primary)' }}>
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6" style={{ color: 'var(--accent)' }}>
            Få inspiration direkte i din indbakke
          </h2>
          <p className="mb-8">
            Tilmeld dig mit nyhedsbrev og få tips, trends og inspiration hver måned.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Din email"
              className="flex-1 px-6 py-3 rounded-full border-none focus:ring-2 focus:ring-[var(--accent)] outline-none"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full text-white transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              Tilmeld
            </button>
          </form>
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
            Har du brug for personlig rådgivning?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Lad os tale om dit projekt og find den bedste løsning for dig
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
