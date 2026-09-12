'use client';

import { useState } from 'react';
import { brand, tours, destinations, services, testimonials, faqs } from './site-data';

const iconMap = {
  plane: '✈', hotel: '▣', map: '⌖', shield: '◈', passport: '▤', car: '◆'
};

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
      setFormMessage('Inquiry received. Nice Travel & Tours will personally follow up with you soon.');
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
      <div className="top-strip">Personal travel planning • Philippines & worldwide • Service-first care from first question to homecoming</div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="Nice Travel and Tours home">
            <img src="/logo.png" alt="Nice Travel & Tours logo" />
            <div>
              <strong>{brand.name}</strong>
              <span>{brand.tagline}</span>
            </div>
          </a>
          <nav>
            <a href="#tours">Tours</a>
            <a href="#destinations">Destinations</a>
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="nav-cta">Plan My Trip</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-overlay" />
        <img className="hero-bg" src="/images/island-boat.png" alt="Traveler exploring tropical islands by boat" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow light">Boutique travel planning from Pasig, Philippines</span>
            <h1>Travel beautifully.<br />We’ll handle the details.</h1>
            <p>
              Flights, hotels, handpicked tours, transfers, and travel assistance — backed by attentive, personal customer care before, during, and after your planning.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Start Planning</a>
              <a className="button glass" href="#tours">Explore Experiences</a>
            </div>
            <div className="trust-row">
              <span>✓ Personalized help</span>
              <span>✓ Thoughtful communication</span>
              <span>✓ Human support from start to finish</span>
            </div>
          </div>
          <aside className="hero-planner card-shadow">
            <span className="planner-kicker">Quick trip brief</span>
            <h2>Tell us where you want to go.</h2>
            <p>We’ll personally review your plans and respond with options tailored to your trip.</p>
            <div className="planner-grid">
              <a href="#contact"><strong>Destination</strong><span>Beach, city, country</span></a>
              <a href="#contact"><strong>Travel dates</strong><span>Exact or flexible</span></a>
              <a href="#contact"><strong>Travelers</strong><span>Solo, couple, family, group</span></a>
              <a href="#contact"><strong>Budget</strong><span>Comfortable range is enough</span></a>
            </div>
            <a className="button dark full" href="#contact">Build My Trip</a>
          </aside>
        </div>
      </section>

      <section className="signal-bar">
        <div className="container signal-grid">
          <div><strong>Flights</strong><span>Domestic & international</span></div>
          <div><strong>Hotels</strong><span>Practical to premium</span></div>
          <div><strong>Tours</strong><span>Custom & curated</span></div>
          <div><strong>Customer Care</strong><span>Personal help throughout</span></div>
        </div>
      </section>

      <section className="section" id="tours">
        <div className="container">
          <div className="section-head editorial">
            <div>
              <span className="kicker">Curated journeys</span>
              <h2>Trips that feel made for you.</h2>
            </div>
            <p>Every itinerary starts with your dates, departure city, priorities, and budget. These are inspiration points — not rigid packages.</p>
          </div>
          <div className="tour-grid premium">
            {tours.map((tour, index) => (
              <article className={`tour-card ${index === 0 ? 'feature' : ''}`} key={tour.slug}>
                <div className="tour-image">
                  <img src={tour.image} alt={tour.title} />
                  <div className="tour-shade" />
                  <span className="tour-chip">{tour.eyebrow}</span>
                  <div className="tour-image-copy">
                    <h3>{tour.title}</h3>
                    <p>{tour.duration}</p>
                  </div>
                </div>
                <div className="tour-body">
                  <p className="tour-blurb">{tour.description}</p>
                  <div className="feature-list">
                    {tour.features.map((feature) => <span key={feature}>{feature}</span>)}
                  </div>
                  <div className="tour-bottom">
                    <strong>{tour.price}</strong>
                    <a href="#contact">Plan this trip →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section destination-section" id="destinations">
        <div className="container">
          <div className="center-head destination-head">
            <span className="kicker light">Ideas worth packing for</span>
            <h2>Where will you go next?</h2>
            <p>Island weekends, multi-city adventures, and long-haul journeys — all with one point of contact.</p>
          </div>
          <div className="destination-grid">
            {destinations.map((destination, index) => (
              <a className={`destination ${index === 0 ? 'wide' : ''}`} href="#contact" key={destination.name}>
                <img src={destination.image} alt={destination.name} />
                <div className="destination-shade" />
                <div className="destination-copy">
                  <span>Explore</span>
                  <h3>{destination.name}</h3>
                  <p>{destination.copy}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head editorial">
            <div>
              <span className="kicker">One trusted point of contact</span>
              <h2>More than a booking. A smoother trip.</h2>
            </div>
            <p>Instead of juggling suppliers and websites, let one travel partner help coordinate the major pieces — and stay available when you need a real person.</p>
          </div>
          <div className="service-grid premium-services">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{iconMap[service.icon]}</div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="container story-grid">
          <div className="story-photo large card-shadow">
            <img src="/images/group-boat.png" alt="Travelers enjoying a group boat trip" />
          </div>
          <div className="story-copy">
            <span className="kicker">Service is the difference</span>
            <h2>Customer care is part of the trip.</h2>
            <p>At Nice Travel & Tours, good customer service is not an extra. It is central to the experience. We believe travelers deserve thoughtful answers, clear communication, personal attention, and someone who genuinely cares whether the trip goes well.</p>
            <div className="stat-grid">
              <div><strong>Responsive</strong><span>communication</span></div>
              <div><strong>Personal</strong><span>attention</span></div>
              <div><strong>Human</strong><span>help when it matters</span></div>
            </div>
            <a href="#contact" className="text-link">Talk with us about your trip →</a>
          </div>
        </div>
      </section>

      <section className="section review-section" id="reviews">
        <div className="container">
          <div className="center-head">
            <span className="kicker">Traveler feedback</span>
            <h2>Service travelers remember.</h2>
            <p>Great travel planning is about more than reservations. It is about how you are treated along the way.</p>
          </div>
          <div className="review-grid">
            {testimonials.map((item) => (
              <blockquote key={item.quote}>
                <div className="stars">★★★★★</div>
                <p>“{item.quote.replace(/[“”]/g, '')}”</p>
                <footer>{item.source}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <div>
            <span className="kicker">Good to know</span>
            <h2>Common questions, clear answers.</h2>
            <p>Still unsure? Send an inquiry. A real person will review what you send and help you figure out the next step.</p>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}<span>+</span></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="kicker light">Start with a conversation</span>
            <h2>Your next trip starts here.</h2>
            <p>Send the basics. Every inquiry is personally reviewed so we can help turn your plans into practical travel options.</p>
            <div className="contact-details">
              <a href={`mailto:${brand.email}`}>✉ {brand.email}</a>
              <a href="tel:+639977884297">☎ {brand.phone}</a>
              <a href={brand.facebook} target="_blank" rel="noreferrer">ⓕ Nice Travel & Tours on Facebook</a>
              <span>📍 {brand.location}</span>
            </div>
            <div className="contact-note">You should never feel like just another booking number. We care about the questions, details, and follow-through that make travel feel easier.</div>
          </div>
          <form className="inquiry-form premium-form" onSubmit={submitInquiry}>
            <div className="form-header">
              <span>Trip inquiry</span>
              <h3>Tell us a little about your plans.</h3>
            </div>
            <div className="field-row">
              <label>Name<input name="name" autoComplete="name" required /></label>
              <label>Email / Phone<input name="contact" autoComplete="email" required /></label>
            </div>
            <div className="field-row">
              <label>Destination<input name="destination" placeholder="e.g. Boracay, Japan, Europe" /></label>
              <label>Travel dates<input name="dates" placeholder="Exact or flexible" /></label>
            </div>
            <label>Number of travelers<input name="travelers" type="number" min="1" placeholder="2" /></label>
            <label>What would make this trip great?<textarea name="message" rows="5" placeholder="Departure city, budget range, hotel style, activities, special requests..." /></label>
            <button className="button primary full" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send My Inquiry'}</button>
            {formMessage ? <small className={formSuccess ? 'form-note success' : 'form-note error'}>{formMessage}</small> : <small>We’ll use your details only to respond to this travel inquiry. If you provide an email address, we’ll immediately confirm that we received it.</small>}
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-top">
          <div className="brand footer-brand">
            <img src="/logo.png" alt="Nice Travel & Tours" />
            <div>
              <strong>{brand.name}</strong>
              <span>{brand.tagline}</span>
            </div>
          </div>
          <p>Thoughtful travel planning and personal customer care for the Philippines and beyond.</p>
          <a className="button footer-cta" href="#contact">Plan a Trip</a>
        </div>
        <div className="container footer-bottom">
          <div className="footer-links">
            <a href="#tours">Tours</a>
            <a href="#destinations">Destinations</a>
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="copyright">© {new Date().getFullYear()} Nice Travel & Tours • Pasig, Philippines</div>
        </div>
      </footer>
    </main>
  );
}
