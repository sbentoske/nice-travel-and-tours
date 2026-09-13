import { brand } from '../site-data';
import styles from './passport.module.css';

export const metadata = {
  title: 'Passport Assistance',
  description: 'Personal passport assistance from Nice Travel & Tours for appointments, document preparation, renewals, first-time applications, and friendly step-by-step support.'
};

const services = [
  ['Appointment Guidance', 'We help you understand and prepare for your DFA passport appointment.'],
  ['Document Checklist', 'Get a clear list of common documents to prepare for your situation.'],
  ['Renewal Support', 'Assistance for expired or expiring passports with clear next steps.'],
  ['New Application Help', 'First-time applicant? We’ll walk you through the usual process step by step.'],
  ['Courier & Submission Support', 'Guidance on document submission and available delivery options.'],
  ['Friendly Customer Care', 'Real people, ready to assist you with patience and care.']
];

const steps = [
  ['1', 'Get in Touch', 'Send us a message or inquiry. Tell us how we can help with your passport.'],
  ['2', 'Get Guidance', 'We’ll explain the usual requirements, appointment steps, and documents to prepare.'],
  ['3', 'Be Ready to Travel', 'Complete the official process and look forward to new adventures.']
];

function Icon({ type }) {
  const common = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const icons = {
    calendar: <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/><path d="m9 15 2 2 4-4"/></svg>,
    file: <svg {...common}><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></svg>,
    refresh: <svg {...common}><path d="M20 7v5h-5"/><path d="M4 17v-5h5"/><path d="M7.5 7.5A7 7 0 0 1 19 10M5 14a7 7 0 0 0 11.5 2.5"/></svg>,
    user: <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/><path d="M19 5v6M16 8h6"/></svg>,
    package: <svg {...common}><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 7 8 4 8-4v10l-8 4-8-4V7Z"/></svg>,
    heart: <svg {...common}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>,
    shield: <svg {...common}><path d="M12 3 5 6v5c0 4.6 2.8 8.5 7 10 4.2-1.5 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-5"/></svg>,
    plane: <svg {...common}><path d="M22 2 9 13"/><path d="m22 2-7 20-4-9-9-4Z"/></svg>,
    globe: <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>
  };
  return icons[type] || icons.file;
}

export default function PassportPage() {
  const serviceIcons = ['calendar','file','refresh','user','package','heart'];
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.navWrap}>
          <a className={styles.brand} href="/"><img src="/logo.png" alt="Nice Travel & Tours logo"/><div><strong>{brand.name}</strong><span>{brand.tagline}</span></div></a>
          <nav className={styles.nav}><a href="/">Home</a><a href="/#services">Services</a><a href="/#destinations">Destinations</a><a href="/#reviews">Reviews</a><a href="/#contact">Contact</a><a className={styles.navCta} href="/#contact">Get in Touch →</a></nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>Nice Travel & Tours</span>
            <h1>Passport assistance,<br/><em>made simple.</em></h1>
            <p>From first-time applications to renewals, we’re here to help. Get personal guidance, appointment assistance, document support and step-by-step service — so you can travel with confidence.</p>
            <a className={styles.primary} href="/#contact">Ask About Passport Help →</a>
            <div className={styles.trust}><span><Icon type="shield"/>Trusted Service</span><span><Icon type="user"/>Personal Assistance</span><span><Icon type="plane"/>Travel with Confidence</span></div>
          </div>
          <div className={styles.heroImageWrap}>
            <img src="https://images.pexels.com/photos/32176062/pexels-photo-32176062/free-photo-of-close-up-of-filipino-pasaportes-at-airport.jpeg?auto=compress&dpr=1&w=1260" alt="Filipino passports at an airport"/>
            <div className={styles.heroNote}>More journeys<br/>ahead.</div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}><div className={styles.container}>
        <div className={styles.sectionTitleRow}><div><span className={styles.kickerDark}>Our passport assistance services</span><h2>Complete Support for a Hassle-Free Process</h2></div><p>Real People.<br/>Real Assistance.<br/>Real Journeys.</p></div>
        <div className={styles.serviceGrid}>{services.map(([title, copy], i) => <article className={styles.serviceCard} key={title}><div className={styles.serviceIcon}><Icon type={serviceIcons[i]}/></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div></section>

      <section className={styles.storySection}><div className={styles.container}><div className={styles.storyGrid}>
        <div className={styles.customerPhoto}><img src="/images/passport-success.jpg" alt="Customer proudly holding his Philippine passport"/><div className={styles.photoQuote}>Passport received.<br/>Another journey begins.</div></div>
        <div className={styles.storyCopy}><span className={styles.kickerDark}>Real people. Real journeys.</span><h2>Another Happy Traveler</h2><p>There’s something special about finally having your passport in hand. We’re proud to help make the steps leading up to that moment easier, clearer, and more personal.</p><div className={styles.stars}>★★★★★</div></div>
        <aside className={styles.quotePanel}><div className={styles.bigQuote}>“</div><p>Your next journey starts with a valid passport. We’re here to help you get there.</p><strong>Nice Travel & Tours</strong><span>Your travel partner every step of the way.</span></aside>
      </div></div></section>

      <section className={styles.processSection} id="how-it-works"><div className={styles.container}><div className={styles.processHead}><span className={styles.kickerDark}>How it works</span><h2>Just 3 Simple Steps</h2></div><div className={styles.steps}>{steps.map(([num,title,copy]) => <article key={num}><span>{num}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>

      <section className={styles.ctaSection}><div className={styles.ctaOverlay}/><div className={styles.ctaInner}><div className={styles.ctaScript}>Same Passport.<br/>A Bigger World.</div><div className={styles.ctaCenter}><h2>Let Us Help with Your Passport Today</h2><a href="/#contact">Ask About Passport Help →</a></div><div className={styles.ctaIcons}><span><Icon type="plane"/>Explore More</span><span><Icon type="globe"/>Travel Further</span><span><Icon type="heart"/>Create Brighter Tomorrows</span></div></div></section>

      <section className={styles.notice}><strong>Important:</strong> Nice Travel & Tours provides assistance and guidance. Official requirements, appointments, processing times, approvals, and passport issuance are controlled by the relevant government authority.</section>
    </main>
  );
}
