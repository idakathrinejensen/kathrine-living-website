import { motion } from 'motion/react';
import { Heart, Star, Award, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Passion',
      description: 'Jeg brænder for at skabe smukke og funktionelle rum.',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Kvalitet',
      description: 'Høj kvalitet og detaljeorientering i hvert projekt.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Erfaring',
      description: 'Mange års erfaring med indretningsprojekter.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Samarbejde',
      description: 'Jeg lytter til dine ønsker og behov.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDU5MTc1MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Kathrine"
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
            Om Mig
          </motion.h1>
          <motion.p
            className="text-white/90 text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Indretningsarkitekt med passion for nordisk design
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6" style={{ color: 'var(--accent)' }}>
              Velkommen til min verden af indretning
            </h2>
            <p className="mb-6">
              Jeg er Kathrine, indretningsarkitekt med en passion for at skabe rum, der både er smukke og funktionelle. 
              Mit fokus er skandinavisk minimalisme – hvor hvert element har en mening, og hvor ro og harmoni er i centrum.
            </p>
            <p className="mb-6">
              Min tilgang er personlig og lydhør. Jeg tror på, at et hjem skal afspejle dem, der bor i det. 
              Derfor tager jeg altid udgangspunkt i dine ønsker, behov og livsstil, når vi sammen skaber dit drømmehjem.
            </p>
            <p>
              Med mange års erfaring og et skarpt øje for detaljer hjælper jeg dig med alt fra farve- og materialevalg 
              til komplette indretningsprojekter – både private boliger og erhverv.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl overflow-hidden aspect-[3/4]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDU5MTc1MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kathrine Living"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              Mine Værdier
            </h2>
            <p className="max-w-2xl mx-auto">
              Det, jeg bygger mit arbejde på
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-3xl p-8 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)' }}
                >
                  {value.icon}
                </div>
                <h4 className="mb-3" style={{ color: 'var(--accent)' }}>
                  {value.title}
                </h4>
                <p className="text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-8" style={{ color: 'var(--accent)' }}>
            Min Designfilosofi
          </h2>
          <p className="text-lg mb-6">
            Jeg tror på, at mindre er mere. At funktionalitet og æstetik går hånd i hånd. 
            At kvalitet varer ved. Og at et godt hjem skal være en kilde til ro og inspiration i hverdagen.
          </p>
          <p className="text-lg">
            Skandinavisk design handler ikke kun om stil – det handler om en livskvalitet. 
            Det handler om at skabe rum, hvor du kan trække vejret, finde balance og være dig selv.
          </p>
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
            Lad os skabe noget smukt sammen
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Jeg ser frem til at høre om dit projekt
          </p>
          <a
            href="/kontakt"
            className="inline-block px-8 py-4 rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)' }}
          >
            Kontakt Mig
          </a>
        </motion.div>
      </section>
    </div>
  );
}
