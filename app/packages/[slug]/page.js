import { notFound } from 'next/navigation';
import { brand } from '../../site-data';
import { getPackage, packages } from '../package-data';
import styles from './package-detail.module.css';

export function generateStaticParams() {
  return packages.map(({ slug }) => ({ slug }));
}

export default async function PackageDetailPage({ params }) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) notFound();

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
            <a href="/passport">Passport Assistance</a>
            <a href="/#services">Travel Services</a>
            <a href="/#contact" className={styles.navCta}>Plan My Trip</a>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <a href="/packages" className={styles.back}>← All Tour Packages</a>
          <span className={styles.kicker}>{pkg.eyebrow}</span>
          <h1>{pkg.title}</h1>
          <p>Contact us for the latest pricing, travel dates, and availability.</p>
          <a className={styles.heroCta} href="/#contact">Ask About This Package →</a>
        </div>
      </section>

      <section className={styles.detailSection}>
        <div className={styles.detailGrid}>
          <div className={styles.flyerCard}>
            <img src={pkg.image} alt={`${pkg.title} sample tour package details`} />
          </div>
          <aside className={styles.info}>
            <span className={styles.kicker}>Sample itinerary</span>
            <h2>Interested in this trip?</h2>
            <p>{pkg.description}</p>
            <div className={styles.highlights}>
              {pkg.highlights.map((item) => <span key={item}>✓ {item}</span>)}
            </div>
            <div className={styles.note}>Schedules, inclusions and availability can change. We’ll help confirm the current options for your travel dates.</div>
            <a className={styles.primary} href="/#contact">Ask About This Package</a>
            <a href={`mailto:${brand.email}`} className={styles.contactLink}>✉ {brand.email}</a>
            <a href="tel:+639977884297" className={styles.contactLink}>☎ {brand.phone}</a>
          </aside>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div><strong>{brand.name}</strong><br/><small>{brand.tagline}</small></div>
          <a href="/packages">← Browse all tour packages</a>
          <small>Sample itinerary only. Current schedules, pricing and availability may vary.</small>
        </div>
      </footer>
    </main>
  );
}
