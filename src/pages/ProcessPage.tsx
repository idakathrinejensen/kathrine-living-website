import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MessageCircle, Lightbulb, PenTool, Rocket, ArrowRight } from 'lucide-react';

export function ProcessPage() {
  const steps = [
    {
      number: '01',
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Første Møde',
      description:
        'Vi mødes og taler om dit projekt, dine ønsker og din vision. Jeg lytter til dine behov og giver dig mine første tanker.',
      details: [
        'Uforpligtende konsultation',
        'Gennemgang af rum og behov',
        'Diskussion af budget og tidsramme',
        'Præsentation af mine services',
      ],
    },
    {
      number: '02',
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Konceptudvikling',
      description:
        'Jeg udvikler et skræddersyet koncept baseret på vores møde. Du modtager et moodboard med farver, materialer og stil.',
      details: [
        'Moodboards og inspirationsmateriale',
        'Farve- og materialeforslag',
        'Stilretning og designkoncept',
        'Præsentation og feedback',
      ],
    },
    {
      number: '03',
      icon: <PenTool className="w-8 h-8" />,
      title: 'Detaljering',
      description:
        'Når konceptet er godkendt, arbejder jeg videre med detaljer som møbler, belysning, tekstiler og tilbehør.',
      details: [
        'Møbel- og belysningsvalg',
        'Tekstiler og tilbehør',
        'Tegninger og visualiseringer',
        'Indkøbslister og leverandører',
      ],
    },
    {
      number: '04',
      icon: <Rocket className="w-8 h-8" />,
      title: 'Implementering',
      description:
        'Nu bliver drømmen til virkelighed. Jeg følger projektet og sikrer, at alt bliver som planlagt.',
      details: [
        'Koordinering af leverandører',
        'Opsætning og styling',
        'Kvalitetskontrol',
        'Afsluttende gennemgang',
      ],
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
            Min Proces
          </h1>
          <p className="text-xl">
            Fra første møde til færdigt resultat - sådan forløber et samarbejde med mig
          </p>
        </motion.div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Number & Icon */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center gap-6 mb-6">
                    <div
                      className="text-8xl opacity-10"
                      style={{ color: 'var(--accent)' }}
                    >
                      {step.number}
                    </div>
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor: 'var(--primary)',
                        color: 'var(--accent)',
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>
                  <h2 className="mb-4" style={{ color: 'var(--accent)' }}>
                    {step.title}
                  </h2>
                  <p className="text-lg mb-8">{step.description}</p>
                </div>

                {/* Details */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div
                    className="bg-white rounded-3xl p-8 shadow-lg"
                    style={{ borderLeft: `4px solid var(--primary)` }}
                  >
                    <h4 className="mb-6" style={{ color: 'var(--accent)' }}>
                      Hvad kan du forvente?
                    </h4>
                    <ul className="space-y-4">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: 'var(--accent)' }}
                          />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 bottom-0 w-0.5 h-24 transform translate-y-full -translate-x-1/2 bg-gradient-to-b from-gray-200 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--primary)' }}>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6" style={{ color: 'var(--accent)' }}>
            Tidshorisont
          </h2>
          <p className="text-lg mb-8">
            Et typisk indretningsprojekt tager mellem 4-12 uger afhængigt af projektets størrelse og kompleksitet. 
            Mindre projekter som farverådgivning eller online konsultation kan gennemføres på 1-2 uger.
          </p>
          <p className="text-lg">
            Jeg tilpasser altid processen efter dit behov og din tidsplan.
          </p>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center mb-16" style={{ color: 'var(--accent)' }}>
            Ofte Stillede Spørgsmål
          </h2>
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-gray-50">
              <h4 className="mb-3" style={{ color: 'var(--accent)' }}>
                Hvor meget koster det?
              </h4>
              <p>
                Prisen afhænger af projektets omfang og kompleksitet. Jeg tilbyder både timepris og faste pakker. 
                Kontakt mig for et uforpligtende tilbud baseret på dit projekt.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50">
              <h4 className="mb-3" style={{ color: 'var(--accent)' }}>
                Skal jeg købe alle møblerne selv?
              </h4>
              <p>
                Jeg kan hjælpe med både indkøb og koordinering. Du vælger selv, om du vil handle selv eller få hjælp til hele processen.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50">
              <h4 className="mb-3" style={{ color: 'var(--accent)' }}>
                Arbejder du også med erhvervskunder?
              </h4>
              <p>
                Ja, jeg har erfaring med både private og erhverv. Kontakt mig for at høre mere om erhvervsløsninger.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50">
              <h4 className="mb-3" style={{ color: 'var(--accent)' }}>
                Kan jeg få online rådgivning?
              </h4>
              <p>
                Ja, jeg tilbyder online konsultation via video. Det er en fleksibel og prisvenlig løsning til mindre projekter.
              </p>
            </div>
          </div>
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
          <h2 className="mb-6 text-white">Klar til at komme i gang?</h2>
          <p className="text-xl mb-8 text-white/90">
            Lad os tage den første snak om dit projekt
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
              Se priser
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
