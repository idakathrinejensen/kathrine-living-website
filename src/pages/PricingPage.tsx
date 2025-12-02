import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export function PricingPage() {
  const packages = [
    {
      name: 'Online Rådgivning',
      price: '750 kr.',
      period: 'per time',
      description: 'Perfekt til mindre projekter og hurtig vejledning',
      features: [
        'Videokonsultation',
        'Skræddersyede anbefalinger',
        'Moodboard',
        'Opfølgning via email',
      ],
      popular: false,
    },
    {
      name: 'Farve & Materialer',
      price: 'Fra 5.000 kr.',
      period: 'per projekt',
      description: 'Komplet farve- og materialeguide til dit hjem',
      features: [
        'Besøg i hjemmet',
        'Farvepalette og materialeforslag',
        'Detaljeret inspirationsmateriale',
        'Indkøbsliste og leverandører',
        'Opfølgning',
      ],
      popular: false,
    },
    {
      name: 'Komplet Indretning',
      price: 'Fra 15.000 kr.',
      period: 'per projekt',
      description: 'Fuld indretningsløsning fra start til slut',
      features: [
        'Omfattende konsultation',
        'Komplet designkoncept',
        'Møbel- og belysningsvalg',
        'Tegninger og visualiseringer',
        'Koordinering af leverandører',
        'Styling og opsætning',
      ],
      popular: true,
    },
    {
      name: 'Boligstyling',
      price: 'Fra 8.000 kr.',
      period: 'per projekt',
      description: 'Gør din bolig salgsklar med professionel styling',
      features: [
        'Besigtigelse af bolig',
        'Styling til salg eller fotografering',
        'Udlån af inventar og tilbehør',
        'Opsætning og nedtagning',
        'Fotoklar præsentation',
      ],
      popular: false,
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
            Priser & Pakker
          </h1>
          <p className="text-xl">
            Transparente priser og fleksible løsninger tilpasset dit projekt
          </p>
        </motion.div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {pkg.popular && (
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm text-white"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  Mest populær
                </div>
              )}
              <div
                className={`bg-white rounded-3xl p-8 h-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.popular ? 'ring-2 ring-[var(--accent)]' : ''
                }`}
              >
                <h3 className="mb-2" style={{ color: 'var(--accent)' }}>
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl" style={{ color: 'var(--accent)' }}>
                    {pkg.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">{pkg.period}</span>
                </div>
                <p className="text-sm mb-6 text-gray-600">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--accent)' }}
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className={`block text-center px-6 py-3 rounded-full transition-all ${
                    pkg.popular
                      ? 'text-white hover:scale-105'
                      : 'bg-gray-100 text-[var(--accent)] hover:bg-gray-200'
                  }`}
                  style={pkg.popular ? { backgroundColor: 'var(--accent)' } : {}}
                >
                  Kontakt for tilbud
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hourly Rate */}
      <section className="py-16 px-6" style={{ backgroundColor: 'var(--primary)' }}>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6" style={{ color: 'var(--accent)' }}>
            Fleksibel Timepris
          </h2>
          <p className="text-lg mb-4">
            Ønsker du en mere fleksibel løsning? Jeg tilbyder også en timepris på <strong>1.200 kr./time</strong> 
            til projekter, der ikke passer ind i en fast pakke.
          </p>
          <p className="text-lg">
            Denne løsning er ideel til mindre opgaver, opfølgning eller specialprojekter.
          </p>
        </motion.div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center mb-16" style={{ color: 'var(--accent)' }}>
            Hvad er inkluderet?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)' }}
              >
                <Check className="w-8 h-8" />
              </div>
              <h4 className="mb-3" style={{ color: 'var(--accent)' }}>
                Professionel Rådgivning
              </h4>
              <p className="text-sm">
                Erfaren vejledning baseret på dine ønsker og behov
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)' }}
              >
                <Check className="w-8 h-8" />
              </div>
              <h4 className="mb-3" style={{ color: 'var(--accent)' }}>
                Skræddersyede Løsninger
              </h4>
              <p className="text-sm">
                Hvert projekt tilpasses individuelt til dig og dit hjem
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)' }}
              >
                <Check className="w-8 h-8" />
              </div>
              <h4 className="mb-3" style={{ color: 'var(--accent)' }}>
                Opfølgning
              </h4>
              <p className="text-sm">
                Jeg følger op og sikrer, at du er tilfreds med resultatet
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Payment Terms */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-3xl p-8"
        >
          <h3 className="mb-6 text-center" style={{ color: 'var(--accent)' }}>
            Betalingsbetingelser
          </h3>
          <div className="space-y-4">
            <p>
              <strong>Depositum:</strong> Ved accept af tilbud betales et depositum på 50% af det samlede beløb.
            </p>
            <p>
              <strong>Restbeløb:</strong> Betales ved projektets afslutning eller efter aftale.
            </p>
            <p>
              <strong>Tilkøb:</strong> Eventuelle tilkøb eller ændringer faktureres løbende eller ved projektets afslutning.
            </p>
            <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
              Alle priser er ekskl. moms. Der kan forekomme rejseudgifter ved projekter uden for Nordsjælland.
            </p>
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
          <h2 className="mb-6 text-white">Få et uforpligtende tilbud</h2>
          <p className="text-xl mb-8 text-white/90">
            Kontakt mig for at høre mere om priser og muligheder for dit projekt
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
