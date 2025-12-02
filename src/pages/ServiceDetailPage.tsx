import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ServiceDetailPage() {
  const { slug } = useParams();

  // Mock data - in a real app, this would come from an API
  const services: Record<string, any> = {
    'privat-indretning': {
      title: 'Privat Indretning',
      subtitle: 'Skab dit drømmehjem med skræddersyede løsninger',
      description:
        'Jeg hjælper dig med at skabe et hjem, der passer perfekt til din livsstil, smag og behov. Fra konceptudvikling til færdig styling - jeg følger dig hele vejen.',
      image: 'https://images.unsplash.com/photo-1571164860029-856acbc24b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY0Njk1MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Omfattende konsultation i dit hjem',
        'Udvikling af skræddersyet designkoncept',
        'Farve-, materiale- og stilvalg',
        'Møbel- og belysningsanbefaling',
        'Tegninger og visualiseringer',
        'Koordinering med leverandører',
        'Styling og opsætning',
        'Opfølgning efter projektet',
      ],
      process: [
        {
          step: '1',
          title: 'Indledende møde',
          description: 'Vi mødes i dit hjem og taler om dine ønsker og behov.',
        },
        {
          step: '2',
          title: 'Konceptudvikling',
          description: 'Jeg udvikler et unikt designkoncept med moodboards og farvepaletter.',
        },
        {
          step: '3',
          title: 'Detaljering',
          description: 'Valg af møbler, belysning, tekstiler og tilbehør.',
        },
        {
          step: '4',
          title: 'Implementering',
          description: 'Koordinering, indkøb, levering og styling af dit hjem.',
        },
      ],
      price: 'Fra 15.000 kr.',
      ideal: [
        'Dig der ønsker komplet indretning af dit hjem',
        'Familier der skal have nyt hjem til at fungere optimalt',
        'Parforholdet der vil skabe deres første fælles hjem',
        'Dig der renoverer og vil have en helhedsløsning',
      ],
    },
    boligstyling: {
      title: 'Boligstyling',
      subtitle: 'Gør din bolig salgsklar og attraktiv',
      description:
        'Professionel styling af din bolig til salg eller udlejning. Jeg fremhæver rummenes potentiale og skaber en oplevelse, der tiltrækker købere.',
      image: 'https://images.unsplash.com/photo-1758977404579-1d9ca0d6dc90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc3RhZ2luZyUyMHNjYW5kaW5hdmlhbnxlbnwxfHx8fDE3NjQ2OTUzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Besigtigelse og analyse af boligen',
        'Rådgivning om depersonalisering',
        'Styling med egne eller lejede møbler',
        'Optimering af rumoplevelsen',
        'Fotoklar præsentation',
        'Styling til visninger',
        'Nedtagning efter salg',
        'Professionelt resultat der sælger',
      ],
      process: [
        {
          step: '1',
          title: 'Besigtigelse',
          description: 'Jeg besøger boligen og laver en plan for styling.',
        },
        {
          step: '2',
          title: 'Forberedelse',
          description: 'Vi fjerner personlige ting og forbereder rummene.',
        },
        {
          step: '3',
          title: 'Styling',
          description: 'Jeg styler boligen med møbler, tekstiler og dekoration.',
        },
        {
          step: '4',
          title: 'Fotografering',
          description: 'Boligen er klar til professionel fotografering og salg.',
        },
      ],
      price: 'Fra 8.000 kr.',
      ideal: [
        'Dig der skal sælge din bolig',
        'Ejendomsmæglere der vil tilbyde styling',
        'Udlejere der vil optimere udlejningspotentialet',
        'Byggefirmaer med showboliger',
      ],
    },
    'farve-materialevalg': {
      title: 'Farve- og Materialevalg',
      subtitle: 'Find den perfekte kombination til dit rum',
      description:
        'Jeg hjælper dig med at vælge farver, materialer og overflader, der skaber harmoni og sammenhæng i dit hjem. Perfekt til renoveringsprojekter eller opfriskning.',
      image: 'https://images.unsplash.com/photo-1763076470404-23554ef26747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMG1hdGVyaWFscyUyMHBhbGV0dGV8ZW58MXx8fHwxNzY0Njk1MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Besøg i hjemmet eller online konsultation',
        'Skræddersyet farvepalette',
        'Materialeforslag til gulve, vægge og lofter',
        'Anbefalinger til overflader',
        'Detaljeret inspirationsmateriale',
        'Produktliste og leverandører',
        'Prøver og samples',
        'Opfølgning under projektet',
      ],
      process: [
        {
          step: '1',
          title: 'Konsultation',
          description: 'Vi taler om stil, ønsker og budget.',
        },
        {
          step: '2',
          title: 'Farveanalyse',
          description: 'Jeg udvikler en farvepalette der passer til dig og rummene.',
        },
        {
          step: '3',
          title: 'Materialevalg',
          description: 'Forslag til gulve, vægge, tekstiler og overflader.',
        },
        {
          step: '4',
          title: 'Leverance',
          description: 'Du modtager komplet materiale med indkøbslister.',
        },
      ],
      price: 'Fra 5.000 kr.',
      ideal: [
        'Dig der er midt i en renovering',
        'Dig der vil male og opfriske',
        'Dig der mangler overblik og inspiration',
        'Dig der vil undgå dyre fejlvalg',
      ],
    },
    'online-raadgivning': {
      title: 'Online Rådgivning',
      subtitle: 'Fleksibel hjælp via video',
      description:
        'Få professionel indretningsrådgivning fra dit eget hjem via video. Perfekt til mindre projekter, farvevalg eller når du har brug for sparring.',
      image: 'https://images.unsplash.com/photo-1760346547318-7e309662467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbGwlMjBvbmxpbmUlMjBtZWV0aW5nfGVufDF8fHx8MTc2NDY5NTMyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Videokonsultation på 60 minutter',
        'Gennemgang af dine rum',
        'Skræddersyede anbefalinger',
        'Moodboard og inspirationsmateriale',
        'Indkøbsliste med links',
        'Opfølgning via email',
        'Fleksibel tidspunkt',
        'Prisvenlig løsning',
      ],
      process: [
        {
          step: '1',
          title: 'Booking',
          description: 'Book en tid der passer dig.',
        },
        {
          step: '2',
          title: 'Forberedelse',
          description: 'Send mig billeder og info om dit projekt.',
        },
        {
          step: '3',
          title: 'Videomøde',
          description: 'Vi mødes online og taler om løsninger.',
        },
        {
          step: '4',
          title: 'Opfølgning',
          description: 'Du modtager moodboard og anbefalinger via email.',
        },
      ],
      price: '750 kr./time',
      ideal: [
        'Dig der bor langt væk',
        'Dig der har brug for hurtig rådgivning',
        'Dig med et mindre budget',
        'Dig der vil have sparring og inspiration',
      ],
    },
  };

  const service = services[slug || ''] || services['privat-indretning'];

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="pt-32 pb-8 px-6 max-w-7xl mx-auto">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-[var(--accent)] hover:gap-4 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Tilbage til services
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6" style={{ color: 'var(--accent)' }}>
              {service.title}
            </h1>
            <h3 className="mb-6">{service.subtitle}</h3>
            <p className="text-lg mb-8">{service.description}</p>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-3xl" style={{ color: 'var(--accent)' }}>
                {service.price}
              </span>
              <span className="text-gray-500">per projekt</span>
            </div>
            <Link
              to="/kontakt"
              className="inline-block px-8 py-4 rounded-full text-white transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              Få et tilbud
            </Link>
          </motion.div>

          <motion.div
            className="rounded-3xl overflow-hidden aspect-[4/3]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ImageWithFallback
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-center mb-12"
            style={{ color: 'var(--accent)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Hvad er inkluderet?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {service.features.map((feature: string, index: number) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 bg-white rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Check
                  className="w-5 h-5 flex-shrink-0 mt-1"
                  style={{ color: 'var(--accent)' }}
                />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-center mb-16"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sådan forløber processen
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step: any, index: number) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                {step.step}
              </div>
              <h4 className="mb-3" style={{ color: 'var(--accent)' }}>
                {step.title}
              </h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 px-6" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-center mb-12"
            style={{ color: 'var(--accent)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Er dette noget for dig?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {service.ideal.map((item: string, index: number) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 bg-white rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
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
          <h2 className="mb-6 text-white">Klar til at komme i gang?</h2>
          <p className="text-xl mb-8 text-white/90">
            Kontakt mig for et uforpligtende tilbud på dit projekt
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
              to="/priser"
              className="inline-flex items-center gap-2 text-white hover:gap-4 transition-all"
            >
              Se alle priser
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
