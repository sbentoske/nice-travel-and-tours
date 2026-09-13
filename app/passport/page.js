import { brand } from '../site-data';
import styles from './passport.module.css';

export const metadata = {
  title: 'Passport Assistance',
  description: 'Personal passport assistance from Nice Travel & Tours, including appointment guidance, document checklists, renewal support, new application help, and friendly step-by-step service.'
};

const services = [
  ['Appointment Guidance', 'Help understanding and preparing for passport appointment steps.'],
  ['Document Checklist', 'A clear checklist of common documents to prepare for your situation.'],
  ['Renewal Support', 'Practical guidance for expired, expiring, or renewal passport needs.'],
  ['New Application Help', 'Step-by-step assistance for first-time passport applicants.'],
  ['Submission Support', 'General guidance on document submission and available delivery options.'],
  ['Friendly Customer Care', 'Patient, personal help from a real person throughout the process.']
];

const steps = [
  ['1', 'Get in touch', 'Tell us what kind of passport help you need and where you are in the process.'],
  ['2', 'Get guidance', 'We help you understand the common requirements, appointment steps, and documents to prepare.'],
  ['3', 'Move forward with confidence', 'Complete the required government steps knowing you have someone to ask when questions come up.']
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
    passport: <svg {...common}><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9 10h6M12 7c1 1.6 1 4.4 0 6M8 17h8"/></svg>
  };
  return icons[type] || icons.passport;
}

export default function PassportPage() {
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
            <a href="/">Home</a>
            <a href="/#services">Services</a>
            <a className={styles.active} href="/passport">Passport Assistance</a>
            <a href="/#reviews">Reviews</a>
            <a className={styles.navCta} href="/#contact">Get in Touch</a>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>Passport assistance</span>
            <h1>Passport help, made simpler.</h1>
            <p>From first-time applications to renewals, Nice Travel & Tours offers personal guidance, appointment help, document support, and clear next steps so the process feels easier to manage.</p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href="/#contact">Ask About Passport Help</a>
              <a className={styles.secondary} href="#how-it-works">How it works</a>
            </div>
            <div className={styles.trust}><span>✓ Personal assistance</span><span>✓ Clear guidance</span><span>✓ Customer care throughout</span></div>
          </div>

          <aside className={styles.heroVisual}>
            <div className={styles.passportCard}>
              <div className={styles.passportIcon}><Icon type="passport" /></div>
              <span>Philippine passport assistance</span>
              <strong>Guidance for applications, renewals & appointments</strong>
            </div>
            <div className={styles.heroBadge}>Real people. Real assistance.</div>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div><span className={styles.kickerDark}>Our passport assistance services</span><h2>Support for a smoother process.</h2></div>
            <p>We help make the process easier to understand and organize while keeping the final government requirements and decisions where they belong — with the proper authorities.</p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map(([title, copy], index) => {
              const iconTypes = ['calendar','file','refresh','user','package','heart'];
              return <article className={styles.serviceCard} key={title}><div className={styles.serviceIcon}><Icon type={iconTypes[index]} /></div><h3>{title}</h3><p>{copy}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className={styles.successSection}>
        <div className={styles.container}>
          <div className={styles.successGrid}>
            <div className={styles.customerPhoto}>
              <img src="/images/passport-success.png" alt="Happy customer holding a Philippine passport" />
            </div>
            <div className={styles.successCopy}>
              <span className={styles.kickerDark}>Real people. Real journeys.</span>
              <h2>A passport in hand changes what feels possible.</h2>
              <p>That moment when the passport finally arrives is worth celebrating. Nice Travel & Tours is here to make the steps leading up to it feel clearer, more personal, and less stressful.</p>
              <div className={styles.quoteCard}>
                <strong>Customer care matters here.</strong>
                <span>Questions are welcome. Details matter. Follow-through matters.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection} id="how-it-works">
        <div className={styles.container}>
          <div className={styles.centerHead}><span className={styles.kickerDark}>How it works</span><h2>Three simple steps.</h2><p>Start with a conversation. We’ll help you understand what comes next.</p></div>
          <div className={styles.steps}>{steps.map(([num,title,copy]) => <article key={num}><span>{num}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </div>
      </section>

      <section className={styles.noticeSection}>
        <div className={styles.container}>
          <div className={styles.notice}><div className={styles.noticeIcon}><Icon type="file" /></div><div><span className={styles.kickerDark}>Important to know</span><h2>Passport issuance is handled by the government.</h2><p>Nice Travel & Tours provides assistance and guidance. Official requirements, appointments, processing times, approvals, and passport issuance are controlled by the relevant government authority. We cannot guarantee processing times or issuance.</p></div></div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.cta}><span className={styles.kicker}>Ready when you are</span><h2>Let us help with your passport questions.</h2><p>Tell us whether this is a new application, renewal, appointment question, or document concern. We’ll personally review what you send.</p><a className={styles.primaryLight} href="/#contact">Ask About Passport Help</a></div>
      </section>

      <footer className={styles.footer}><div className={styles.footerInner}><div className={styles.brand}><img src="/logo.png" alt="Nice Travel & Tours"/><div><strong>{brand.name}</strong><span>{brand.tagline}</span></div></div><div><a href="/">Home</a><a href="/#services">Services</a><a href="/#contact">Contact</a></div><small>© {new Date().getFullYear()} Nice Travel & Tours</small></div></footer>
    </main>
  );
}
