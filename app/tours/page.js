import Link from 'next/link';
import { brand, tours, destinations } from '../site-data';

export const metadata = {
  title: 'Tours & Travel Experiences',
  description: 'Explore travel ideas and custom tour planning from Nice Travel & Tours.'
};

export default function ToursPage() {
  return (
    <main>
      <header className="subpage-header">
        <div className="container nav-wrap">
          <Link href="/" className="brand">
            <img src="/logo.png" alt="Nice Travel & Tours logo" />
            <div><strong>{brand.name}</strong><span>{brand.tagline}</span></div>
          </Link>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#reviews">Reviews</Link>
            <Link className="nav-cta" href="/#contact">Plan My Trip</Link>
          </nav>
        </div>
      </header>

      <section className="catalog-hero">
        <div className="container catalog-hero-grid">
          <div>
            <span className="kicker light">Tours & experiences</span>
            <h1>Start with an idea.<br/>We’ll shape the journey.</h1>
            <p>Browse inspiration, then tell us your real dates, departure city, group size, and budget. Nice Travel & Tours will help turn it into practical options.</p>
            <Link className="button primary" href="/#contact">Request a Current Quote</Link>
          </div>
          <div className="catalog-hero-photo"><img src="/images/group-snorkel.png" alt="Travel group enjoying an island experience" /></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head editorial">
            <div><span className="kicker">Signature ideas</span><h2>Choose your travel mood.</h2></div>
            <p>These examples are intentionally flexible. Airfare, hotels, activities, and transfers can be adjusted to fit your trip.</p>
          </div>
          <div className="catalog-grid">
            {tours.map((tour) => (
              <article className="catalog-card" key={tour.slug}>
                <img src={tour.image} alt={tour.title} />
                <div className="catalog-card-body">
                  <span>{tour.eyebrow}</span>
                  <h3>{tour.title}</h3>
                  <p>{tour.description}</p>
                  <ul>{tour.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <div><strong>{tour.price}</strong><Link href="/#contact">Inquire →</Link></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section destination-section">
        <div className="container">
          <div className="center-head destination-head"><span className="kicker light">Destination inspiration</span><h2>Go near. Go far. Go your way.</h2></div>
          <div className="destination-grid">
            {destinations.map((destination, index) => (
              <Link className={`destination ${index === 0 ? 'wide' : ''}`} href="/#contact" key={destination.name}>
                <img src={destination.image} alt={destination.name} />
                <div className="destination-shade" />
                <div className="destination-copy"><span>Explore</span><h3>{destination.name}</h3><p>{destination.copy}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner"><div><span className="kicker light">Ready when you are</span><h2>Tell us the trip you actually want.</h2></div><Link className="button footer-cta" href="/#contact">Start Planning</Link></div>
      </section>
    </main>
  );
}
