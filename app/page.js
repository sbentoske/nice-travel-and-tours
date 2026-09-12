'use client';

const tours = [
  {
    title: 'Hanoi & Sapa',
    meta: 'Vietnam package • May 29 – Jun 1 • Cebu departure',
    price: '₱40,888 / person',
    image: '/images/hanoi-sapa.png',
    tag: 'Featured International',
    blurb: '4-day all-in package with airfare, hotel stay, and guided itinerary.'
  },
  {
    title: 'Boracay Escape',
    meta: '3D2N island getaway',
    price: 'From ₱3,536',
    image: '/images/boracay-promo.png',
    tag: 'Beach Favorite',
    blurb: 'A quick tropical break with hotel, transfers, and beach time.'
  },
  {
    title: 'Baguio Tour',
    meta: '3 days / 2 nights • seasonal schedules',
    price: 'From ₱2,899',
    image: '/images/baguio-tour.png',
    tag: 'Popular Local Tour',
    blurb: 'Cool-weather sightseeing, gardens, food spots, and group fun.'
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
  ['Boracay', '/images/boracay-promo.png'],
  ['Baguio', '/images/baguio-tour.png'],
  ['Hanoi & Sapa', '/images/hanoi-sapa.png'],
  ['Island Adventures', '/images/scuba.png']
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
  function submitInquiry(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Travel inquiry: ${data.get('destination') || 'New trip'}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail / Phone: ${data.get('contact')}\nDestination: ${data.get('destination')}\nTravel dates: ${data.get('dates')}\nTravelers: ${data.get('travelers')}\n\nMessage:\n${data.get('message')}`
    );
    window.location.href = `mailto:nayztravelandtours@gmail.com?subject=${subject}&body=${body}`;
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
              Real packages and promos from Nice Travel & Tours. Ask for current availability,
              custom dates, or a personalized quote.
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
            <button className="button primary full" type="submit">Send Inquiry</button>
            <small>This opens your email app with the inquiry details filled in.</small>
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
