import { brand } from '../site-data';
import styles from './packages.module.css';

export const metadata = {
  title: 'Example Tour Packages',
  description: 'Explore sample Nice Travel & Tours itineraries for Europe, Asia, beaches, cities and multi-country adventures. Contact us for current pricing, schedules and availability.'
};

const packages = [
  {
    title: 'Great Britain',
    eyebrow: 'England • Scotland • Wales',
    duration: 'Multi-city Europe itinerary',
    tone: 'uk',
    description: 'A broad Great Britain journey built around London, historic cities, Scotland, scenic rail experiences and classic landmarks.',
    highlights: ['London city touring', 'Edinburgh & the Highlands', 'Historic castles & landmarks', 'Scenic rail experiences']
  },
  {
    title: 'Chongqing & Chengdu',
    eyebrow: 'China',
    duration: '5-day sample itinerary',
    tone: 'china',
    description: 'A fast-paced city adventure combining Chongqing’s striking skyline and rail experiences with Chengdu’s culture and neighborhoods.',
    highlights: ['Chongqing city sights', 'Rail transit experiences', 'Local food & shopping', 'Chengdu city time']
  },
  {
    title: 'Bangkok',
    eyebrow: 'Thailand',
    duration: '4-day sample itinerary',
    tone: 'bangkok',
    description: 'A compact Bangkok getaway with hotel stay, airport transfers and time to enjoy Thailand’s temples, shopping and city life.',
    highlights: ['Bangkok city tour', 'Hotel accommodation', 'Airport transfers', 'Free time for exploring']
  },
  {
    title: 'Dubai',
    eyebrow: 'United Arab Emirates',
    duration: '4-day sample itinerary',
    tone: 'dubai',
    description: 'Modern city sights paired with memorable experiences including desert adventure, cruising and private touring.',
    highlights: ['Half-day city tour', 'Marina dinner cruise', 'Desert safari & BBQ', 'Private tour & transfers']
  },
  {
    title: 'Hanoi & Sapa',
    eyebrow: 'Vietnam',
    duration: '4-day sample itinerary',
    tone: 'vietnam',
    description: 'A blend of Hanoi city life and Sapa’s mountain scenery, markets, cultural stops and natural attractions.',
    highlights: ['Hanoi city highlights', 'Fansipan', 'Cat Cat Waterfalls', 'Sapa markets & scenery']
  },
  {
    title: 'Indochina Tri-City',
    eyebrow: 'Thailand • Cambodia • Vietnam',
    duration: '6-day sample itinerary',
    tone: 'indochina',
    description: 'A regional adventure connecting Bangkok, Siem Reap and Ho Chi Minh City with temples, heritage sites and guided touring.',
    highlights: ['Bangkok', 'Angkor-area temples', 'Siem Reap', 'Ho Chi Minh City']
  },
  {
    title: 'Bali, Indonesia',
    eyebrow: 'Indonesia',
    duration: '4-day sample itinerary',
    tone: 'bali',
    description: 'An easy tropical escape with airfare, transfers, hotel accommodation, breakfast and time to explore Bali at your pace.',
    highlights: ['Roundtrip airfare', 'Hotel stay', 'Daily breakfast', 'Optional island touring']
  },
  {
    title: 'Boracay',
    eyebrow: 'Philippines',
    duration: 'Island escape',
    tone: 'boracay',
    description: 'A relaxed Boracay beach package with accommodation, breakfast and plenty of free time for optional water activities.',
    highlights: ['Beach accommodation', 'Daily breakfast', 'Free time', 'Optional island activities']
  },
  {
    title: 'Singapore & Malaysia',
    eyebrow: 'Twin-city itinerary',
    duration: '6-day sample itinerary',
    tone: 'singapore',
    description: 'Two destinations in one trip, combining Singapore city highlights with Kuala Lumpur sightseeing and comfortable transfers.',
    highlights: ['Singapore city tour', 'Kuala Lumpur city tour', 'Hotel accommodation', 'Roundtrip transfers']
  },
  {
    title: 'Bangkok City Escape',
    eyebrow: 'Thailand',
    duration: '4-day sample itinerary',
    tone: 'thai',
    description: 'A second Bangkok option focused on comfortable accommodation, breakfast, transfers and a guided introduction to the city.',
    highlights: ['City sightseeing', 'Daily breakfast', 'Airport transfers', 'Licensed tour guide']
  }
];

export default function PackagesPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.navWrap}>
          <a className={styles.brand} href="/">
            <img src="/logo.png" alt="Nice Travel & Tours logo" />
            <div><strong>{brand.name}</strong><span>{brand.tagline}</span></div>
          </a>
          <nav className={styles.nav}>
            <a href="/">Home</a>
            <a href="/packages">Tour Packages</a>
            <a href="/#services">Services</a>
            <a href="/passport">Passport Assistance</a>
            <a href="/#reviews">Reviews</a>
            <a href="/#contact" className={styles.navCta}>Plan My Trip</a>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <span className={styles.kicker}>Explore • Experience • Belong</span>
            <h1>Example Tour Packages</h1>
            <p>Browse real trip ideas Nice Travel & Tours has offered or worked with before. These are examples to inspire your next journey — schedules, inclusions and availability can change.</p>
          </div>
          <aside className={styles.heroCard}>
            <strong>Current pricing changes.</strong>
            <span>That’s why we removed old dates and prices. Tell us which package interests you and we’ll help with the latest available options.</span>
            <a href="/#contact">Contact us for latest pricing →</a>
          </aside>
        </div>
      </section>

      <section className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.kicker}>10 travel ideas</span>
            <h2>Choose a starting point.</h2>
            <p>Each itinerary can be a starting point for a conversation. Ask about current travel dates, pricing, inclusions, departure cities and customization.</p>
          </div>

          <div className={styles.grid}>
            {packages.map((pkg) => (
              <article className={styles.card} key={`${pkg.title}-${pkg.eyebrow}`}>
                <div className={`${styles.cardTop} ${styles[pkg.tone]}`}>
                  <span>{pkg.eyebrow}</span>
                  <h3>{pkg.title}</h3>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.meta}><span>{pkg.duration}</span><span>Sample itinerary</span></div>
                  <p>{pkg.description}</p>
                  <div className={styles.highlights}>{pkg.highlights.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className={styles.cardCta}>
                    <strong>Contact us for latest pricing & availability</strong>
                    <a href="/#contact">Ask about this trip →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.customCta}>
            <div>
              <h2>Need something different?</h2>
              <p>Nice Travel & Tours can help shape a trip around your destination, departure city, travel dates, group size and priorities.</p>
            </div>
            <a href="/#contact">Build My Trip →</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div><strong>{brand.name}</strong><br/><small>{brand.tagline}</small></div>
          <div><a href={`mailto:${brand.email}`}>{brand.email}</a> &nbsp; • &nbsp; <a href="tel:+639977884297">{brand.phone}</a></div>
          <small>Sample itineraries only. Current schedules, pricing and availability may vary.</small>
        </div>
      </footer>
    </main>
  );
}
