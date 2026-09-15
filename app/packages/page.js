import { brand } from '../site-data';
import { packages } from './package-data';
import { getPackageCover } from './package-covers';
import styles from './packages.module.css';

export const metadata = {
  title: 'Example Tour Packages',
  description: 'Explore sample Nice Travel & Tours itineraries for Europe, Asia, beaches, cities and multi-country adventures. Contact us for current pricing, schedules and availability.'
};

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
            <p>Browse sample itineraries across Europe, Asia, city escapes and beach getaways. Choose a trip that inspires you, then contact us for the latest pricing, travel dates and availability.</p>
          </div>
          <aside className={styles.heroCard}>
            <strong>Find a trip you love.</strong>
            <span>Open any package to see its detailed sample itinerary, then send us the package name and your preferred travel dates.</span>
            <a href="/#contact">Plan My Trip →</a>
          </aside>
        </div>
      </section>

      <section className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.kicker}>10 travel ideas</span>
            <h2>Choose a starting point.</h2>
            <p>Each package is a sample itinerary. Click any card for the full trip details and current options.</p>
          </div>

          <div className={styles.grid}>
            {packages.map((pkg) => {
              const cover = getPackageCover(pkg.slug);
              return (
                <a className={styles.card} href={`/packages/${pkg.slug}`} key={pkg.slug}>
                  <div className={styles.cardImage}>
                    <img src={cover?.src || pkg.image} alt={`${pkg.title} destination`} loading="lazy" />
                  </div>
                  <div className={styles.cardBody}>
                    <div>
                      <span className={styles.eyebrow}>{pkg.eyebrow}</span>
                      <h3>{pkg.title}</h3>
                    </div>
                    <div className={styles.meta}><span>{pkg.duration}</span><span>Sample itinerary</span></div>
                    <p>{pkg.description}</p>
                    <div className={styles.highlights}>{pkg.highlights.map((item) => <span key={item}>{item}</span>)}</div>
                    <div className={styles.cardCta}>
                      <strong>Contact us for latest pricing & availability</strong>
                      <span className={styles.view}>View Details →</span>
                    </div>
                  </div>
                </a>
              );
            })}
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
