'use client';

import { useState } from 'react';

const tours = [
  {
    title: 'Island Getaway',
    meta: 'Beach escape • Local or international options',
    price: 'Ask for current rate',
    image: '/images/island-boat.png',
    tag: 'Featured Getaway',
    blurb: 'Tell us your dates and preferred departure city for current package options.'
  },
  {
    title: 'Group Adventure',
    meta: 'Perfect for friends, families, and small groups',
    price: 'Ask for current rate',
    image: '/images/group-boat.png',
    tag: 'Group Favorite',
    blurb: 'Great for barkada trips, reunions, and shared island experiences.'
  },
  {
    title: 'Scuba & Water Activities',
    meta: 'Sea tours • add-on experiences available',
    price: 'Ask for current rate',
    image: '/images/scuba.png',
    tag: 'Activity Add-On',
    blurb: 'Ask about diving, snorkeling, transfers, and hotel combinations.'
  }
];

const services = [
  ['✈️', 'Flights', 'Domestic and international airline booking assistance.'],
  ['🏨', 'Hotels', 'Accommodation options that match your budget and travel style.'],
  ['🗺️', 'Tour Packages', 'Ready-made and customized local and international tours.'],
  ['🛡️', 'Travel Insurance', 'Travel protection options for added peace of mind.'],
  ['🛂', 'Passport & Visa Assistance', 'Guidance and assistance for travel document requirements.'],
  ['🚐', 'Van / Car Rental', 'Transportation options for family trips, airport runs, and group tours.']
];

const destinations = [
  ['Island Adventures', '/images/island-boat.png'],
  ['Group Tours', '/images/group-boat.png'],
  ['Scuba Trips', '/images/scuba.png'],
  ['Beach Fun', '/images/group-snorkel.png']
];

const regions = [
  ['Philippines', 'Beach escapes, city breaks, family trips and group tours'],
  ['Asia', 'Japan, Korea, Singapore, Thailand, Vietnam and more'],
  ['Europe', 'Custom multi-city trips, hotels and flight assistance'],
  ['Americas & Oceania', 'Long-haul flight and itinerary planning assistance']
];

const reviews = [
  ['“Very responsive in any travel inquiry.”', 'Facebook review'],
  ['“Excellent.”', 'Facebook review'],
  ['“We’re so happy you enjoyed your Cebu–Bohol trip. Thanks for the photos and lovely feedback!”', 'Recent traveler feedback']
];

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  async function submitInquiry(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      setIsSubmitting(true);
      setFormMessage('Sending inquiry...');
      setFormSuccess(false);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name') || '',
          contact: data.get('contact') || '',
          destination: data.get('destination') || '',
          dates: data.get('dates') || '',
          travelers: data.get('travelers') || '',
          message: data.get('message') || ''
        })
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to send inquiry right now.');

      setFormSuccess(true);
      setFormMessage('Inquiry sent successfully. Nice Travel & Tours will get back to you soon.');
      form.reset();
    } catch (error) {
      setFormSuccess(false);
      setFormMessage(error.message || 'Unable to send inquiry right now.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="Nice Travel and Tours home">
            <img src="/logo.png" alt="Nice Travel & Tours logo" />
            <div>
              <strong>Nice Travel & Tours</strong>
              <span>Your travel dream is our passion</span>
            </div>
          </a>
          <nav>
            <a href="#tours">Tours</a>
            <a href="#services">Services</a>
            <a href="#destinations">Destinations</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact" className="nav-cta">Book / Inquire</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Pasig, Philippines • Personalized travel assistance</span>
            <h1>Your next trip starts with the right guide.</h1>
            <p>
              Nice Travel & Tours helps with flights, hotels, tour packages, passport support,
              and more — making travel planning simpler for families, friends, and groups.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#tours">Explore Tours</a>
              <a className="button secondary" href="https://www.facebook.com/nicetravelandtours/" target="_blank" rel="noreferrer">Message on Facebook</a>
            </div>
            <div className="hero-points">
              <span>✓ Flights & hotels</span>
              <span>✓ Local & international tours</span>
              <span>✓ Friendly travel assistance</span>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-main-photo card-shadow">
              <img src="/images/island-boat.png" alt="Traveler exploring tropical islands by boat" />
            </div>
            <div className="hero-side-stack">
              <div className="hero-mini card-shadow">
                <img src="/images/scuba.png" alt="Scuba diving travelers" />
              </div>
              <div className="hero-mini hero-note hero-feature card-shadow">
                <div className="feature-icon">✈️</div>
                <div>
                  <strong>Flights • Hotels • Tours</strong>
                  <p>One place for the main pieces of your trip.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="tours">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Featured trips</span>
              <h2>Popular tour packages</h2>
            </div>
            <p>
              Sample travel ideas from Nice Travel & Tours. Ask for current availability,
              custom dates, package inclusions, and a personalized quote.
            </p>
          </div>
          <div className="tour-grid">
            {tours.map((tour) => (
              <article className="tour-card" key={tour.title}>
                <div className="tour-image">
                  <img src={tour.image} alt={tour.title} />
                  <span>{tour.tag}</span>
                </div>
                <div className="tour-body">
                  <div>
                    <h3>{tour.title}</h3>
                    <p>{tour.meta}</p>
                    <p className="tour-blurb">{tour.blurb}</p>
                  </div>
                  <div className="tour-bottom">
                    <strong>{tour.price}</strong>
                    <a href="#contact">View / Inquire →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted" id="services">
        <div className="container">
          <div className="center-head">
            <span className="kicker">Everything in one place</span>
            <h2>What we can help with</h2>
            <p>
              Travel planning is easier when one trusted agency helps coordinate the details.
            </p>
          </div>
          <div className="service-grid">
            {services.map(([icon, title, text]) => (
              <div className="service-card" key={title}>
                <div className="service-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="container proof-grid">
          <div>
            <span className="kicker">Why Nice Travel & Tours</span>
            <h2>Real assistance. Real travelers. Real results.</h2>
            <p>
              Beyond tours and bookings, Nice Travel & Tours also helps clients with travel
              concerns and document-related support — while keeping the experience personal and easy.
            </p>
            <div className="check-grid">
              <div>✓ Friendly, personalized assistance</div>
              <div>✓ Local & international travel options</div>
              <div>✓ Group, family, and couple trips</div>
              <div>✓ Support before and after booking</div>
            </div>
            <a href="#contact" className="text-link">Tell us where you want to go →</a>
          </div>
          <div className="proof-cards">
            <figure className="proof-card card-shadow">
              <img src="/images/client-success.png" alt="Client success screenshot" />
              <figcaption>Client support and travel assistance</figcaption>
            </figure>
            <figure className="proof-card card-shadow">
              <img src="/images/passport-assistance.png" alt="Passport appointment assistance graphic" />
              <figcaption>Passport appointment and assistance services</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" id="destinations">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Get inspired</span>
              <h2>Popular destinations</h2>
            </div>
            <p>Explore favorite trips in the Philippines and abroad.</p>
          </div>
          <div className="destination-grid four-up">
            {destinations.map(([name, image]) => (
              <a href="#contact" className="destination" key={name}>
                <img src={image} alt={name} />
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section worldwide-section">
        <div className="container worldwide-grid">
          <div className="worldwide-photo card-shadow">
            <img src="/images/group-boat.png" alt="Travel group enjoying an island boat trip" />
          </div>
          <div>
            <span className="kicker">Domestic & international</span>
            <h2>From quick island escapes to worldwide adventures.</h2>
            <p>Nice Travel & Tours can help plan around your destination, budget, preferred dates, and departure city. Ask for current airline, hotel, transfer, and package options.</p>
            <div className="region-grid">
              {regions.map(([name, text]) => (
                <div className="region-card" key={name}>
                  <strong>{name}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <p className="small-note">Availability and pricing vary by travel date and supplier. Contact us for a current quote.</p>
          </div>
        </div>
      </section>

      <section className="section review-section" id="reviews">
        <div className="container">
          <div className="center-head">
            <span className="kicker">Traveler feedback</span>
            <h2>Customers remember the service.</h2>
          </div>
          <div className="review-grid">
            {reviews.map(([quote, source]) => (
              <blockquote key={quote}>
                <div className="stars">★★★★★</div>
                <p>{quote}</p>
                <footer>{source}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="kicker light">Start planning</span>
            <h2>Where do you want to go?</h2>
            <p>Send the basics and Nice Travel & Tours will help with options for your trip.</p>
            <div className="contact-details">
              <a href="mailto:nayztravelandtours@gmail.com">✉ nayztravelandtours@gmail.com</a>
              <a href="tel:+639977884297">☎ +63 997 788 4297</a>
              <a href="https://www.facebook.com/nicetravelandtours/" target="_blank" rel="noreferrer">ⓕ Nice Travel & Tours on Facebook</a>
              <span>📍 Pasig, Philippines</span>
            </div>
          </div>
          <form className="inquiry-form" onSubmit={submitInquiry}>
            <div className="field-row">
              <label>Name<input name="name" required /></label>
              <label>Email / Phone<input name="contact" required /></label>
            </div>
            <div className="field-row">
              <label>Destination<input name="destination" placeholder="e.g. Boracay, Hanoi & Sapa" /></label>
              <label>Travel dates<input name="dates" placeholder="e.g. Dec 5–10" /></label>
            </div>
            <label>Number of travelers<input name="travelers" type="number" min="1" placeholder="2" /></label>
            <label>Tell us about your trip<textarea name="message" rows="5" placeholder="Budget, preferred airport, hotel style, special requests..." /></label>
            <button className="button primary full" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</button>
            {formMessage ? <small className={formSuccess ? 'form-note success' : 'form-note error'}>{formMessage}</small> : <small>Fill out the form and it will email Nice Travel & Tours directly.</small>}
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="brand footer-brand">
            <img src="/logo.png" alt="Nice Travel & Tours" />
            <div>
              <strong>Nice Travel & Tours</strong>
              <span>Pasig, Philippines</span>
            </div>
          </div>
          <div className="footer-links">
            <a href="#tours">Tours</a>
            <a href="#services">Services</a>
            <a href="#destinations">Destinations</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="copyright">© {new Date().getFullYear()} Nice Travel & Tours</div>
        </div>
      </footer>
    </main>
  );
}
