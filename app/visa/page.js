import { brand } from '../site-data';
import styles from './visa.module.css';

export const metadata = {
  title: 'Visa Assistance',
  description: 'Visa and passport assistance from Nice Travel & Tours, including application guidance, document preparation support, appointment guidance, and travel planning.'
};

const visaTypes = [
  ['Tourist visas', 'Guidance for leisure travel applications, supporting documents, itineraries, and appointment steps.'],
  ['Spousal / family visas', 'General application support and document-preparation guidance for family-based travel needs.'],
  ['Student visas', 'Help organizing application requirements, appointments, and travel-related supporting documents.'],
  ['Passport assistance', 'Online appointment guidance and practical help understanding common passport application steps.']
];

const destinations = ['USA', 'Canada', 'Schengen / Europe', 'Japan', 'South Korea', 'China', 'United Kingdom', 'UAE / Dubai', 'Australia', 'New Zealand', 'Egypt', 'Turkey'];

const steps = [
  ['01', 'Tell us your plans', 'Share your destination, visa type, travel dates, and current application status.'],
  ['02', 'Review the requirements', 'We help you understand the usual documents, forms, appointments, and travel details involved.'],
  ['03', 'Prepare your application', 'Get practical guidance while you organize documents and complete the required steps.'],
  ['04', 'Stay supported', 'We remain available for travel planning and general application support as you move through the process.']
];

function Icon({ type }) {
  const common = { width: 27, height: 27, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  if (type === 'passport') return <svg {...common}><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9 10h6M12 7c1 1.6 1 4.4 0 6M8 17h8"/></svg>;
  if (type === 'file') return <svg {...common}><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></svg>;
  if (type === 'calendar') return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/><path d="m9 15 2 2 4-4"/></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.3 2.3 4.8-5"/></svg>;
}

export default function VisaPage() {
  return (
    <main className={styles.page}>
      <div className={styles.topStrip}>Personal travel planning • Philippines & worldwide • Service-first care from first question to homecoming</div>
      <header className={styles.header}>
        <div className={styles.navWrap}>
          <a className={styles.brand} href="/">
            <img src="/logo.png" alt="Nice Travel & Tours logo" />
            <div><strong>{brand.name}</strong><span>{brand.tagline}</span></div>
          </a>
          <nav className={styles.nav}>
            <a href="/#tours">Tours</a><a href="/#destinations">Destinations</a><a href="/#services">Services</a><a className={styles.active} href="/visa">Visa Assistance</a><a href="/#reviews">Reviews</a><a className={styles.navCta} href="/#contact">Ask About a Visa</a>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>Visa & passport assistance</span>
            <h1>Less confusion. More confidence in your next step.</h1>
            <p>Nice Travel & Tours provides friendly, practical assistance with common visa and passport application steps — from understanding requirements to organizing documents and appointments.</p>
            <div className={styles.heroActions}><a className={styles.primary} href="/#contact">Ask About Visa Assistance</a><a className={styles.secondary} href="#how-it-works">How it works</a></div>
            <div className={styles.trust}><span>✓ Personal guidance</span><span>✓ Clear next steps</span><span>✓ No approval promises</span></div>
          </div>
          <aside className={styles.heroCard}>
            <div className={styles.cardIcon}><Icon type="passport" /></div>
            <span className={styles.cardLabel}>Support for common applications</span>
            <h2>Tourist, spousal, student & passport assistance</h2>
            <p>Tell us where you are going and what type of application you need help with. We’ll explain how Nice Travel & Tours can assist.</p>
            <a href="/#contact">Start with a question →</a>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><div><span className={styles.kickerDark}>Ways we can help</span><h2>Practical support through the process.</h2></div><p>Visa rules vary by destination and applicant. Our role is to help make the process easier to understand and easier to organize.</p></div>
          <div className={styles.serviceGrid}>
            {visaTypes.map(([title, copy], i) => <article className={styles.serviceCard} key={title}><div className={styles.serviceIcon}><Icon type={['passport','file','calendar','check'][i]} /></div><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className={styles.destinationSection}>
        <div className={styles.container}>
          <div className={styles.destinationGrid}>
            <div><span className={styles.kicker}>Destinations</span><h2>Common visa destinations we assist with.</h2><p>Availability and requirements can change. Contact us for the destination you are interested in, even if it is not shown here.</p></div>
            <div className={styles.countryGrid}>{destinations.map(country => <span key={country}>{country}</span>)}</div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="how-it-works">
        <div className={styles.container}>
          <div className={styles.centerHead}><span className={styles.kickerDark}>Simple, human support</span><h2>How visa assistance works.</h2><p>You do not have to figure out every step alone.</p></div>
          <div className={styles.steps}>{steps.map(([num,title,copy]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className={styles.noticeSection}>
        <div className={styles.container}>
          <div className={styles.notice}><div className={styles.noticeIcon}><Icon type="file" /></div><div><span className={styles.kickerDark}>Important to know</span><h2>Visa approval is never guaranteed.</h2><p>Nice Travel & Tours provides application assistance and travel-planning support. Final requirements, processing times, decisions, and visa issuance are controlled by the relevant embassy, consulate, immigration authority, or government agency. We cannot guarantee approval.</p></div></div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.cta}><span className={styles.kicker}>Ready when you are</span><h2>Tell us which visa you need help with.</h2><p>Send your destination, visa type, intended travel dates, and any questions you already have. We’ll personally review your inquiry.</p><a className={styles.primaryLight} href="/#contact">Ask About Visa Assistance</a></div>
      </section>

      <footer className={styles.footer}><div className={styles.footerInner}><div className={styles.brand}><img src="/logo.png" alt="Nice Travel & Tours"/><div><strong>{brand.name}</strong><span>{brand.tagline}</span></div></div><div><a href="/">Home</a><a href="/#services">Services</a><a href="/#contact">Contact</a></div><small>© {new Date().getFullYear()} Nice Travel & Tours</small></div></footer>
    </main>
  );
}
