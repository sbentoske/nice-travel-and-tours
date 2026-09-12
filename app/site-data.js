export const brand = {
  name: 'Nice Travel & Tours',
  tagline: 'Your travel dream is our passion',
  location: 'Pasig, Philippines',
  email: 'nayztravelandtours@gmail.com',
  phone: '+63 997 788 4297',
  facebook: 'https://www.facebook.com/nicetravelandtours/'
};

export const tours = [
  {
    slug: 'island-getaway',
    title: 'Island Getaway',
    eyebrow: 'Philippines • Beach Escape',
    duration: 'Flexible dates',
    price: 'Ask for current rate',
    image: '/images/island-boat.png',
    description: 'A sun-soaked island escape built around your dates, departure city, and preferred hotel style.',
    features: ['Flights on request', 'Hotel options', 'Transfers', 'Custom activities']
  },
  {
    slug: 'group-adventure',
    title: 'Group Adventure',
    eyebrow: 'Friends • Families • Barkada',
    duration: 'Custom itinerary',
    price: 'Ask for current rate',
    image: '/images/group-boat.png',
    description: 'Easy group planning with coordinated transport, lodging, activities, and one point of contact.',
    features: ['Group-friendly', 'Transport coordination', 'Shared activities', 'Flexible budgets']
  },
  {
    slug: 'ocean-adventure',
    title: 'Ocean Adventure',
    eyebrow: 'Scuba • Snorkel • Sea',
    duration: 'Add-on or package',
    price: 'Ask for current rate',
    image: '/images/scuba.png',
    description: 'Add memorable water experiences to your trip, from snorkeling days to diving excursions.',
    features: ['Activity planning', 'Hotel combinations', 'Transfers', 'Local coordination']
  }
];

export const destinations = [
  { name: 'Philippine Islands', copy: 'Turquoise water, easy escapes, unforgettable weekends.', image: '/images/island-boat.png' },
  { name: 'Bohol & Cebu', copy: 'Culture, beaches, food, and easy multi-stop itineraries.', image: '/images/group-snorkel.png' },
  { name: 'Vietnam', copy: 'City energy, mountain scenery, food, and guided experiences.', image: '/images/hanoi-sapa.png' },
  { name: 'Worldwide', copy: 'International flights, hotels, and custom itinerary support.', image: '/images/group-boat.png' }
];

export const services = [
  { icon: 'plane', title: 'Flights', copy: 'Domestic and international flight planning with options that fit your schedule and budget.' },
  { icon: 'hotel', title: 'Hotels', copy: 'Handpicked accommodation options from practical stays to special-occasion escapes.' },
  { icon: 'map', title: 'Tours & Itineraries', copy: 'Ready-made and custom trips with sightseeing, transfers, activities, and local support.' },
  { icon: 'shield', title: 'Travel Insurance', copy: 'Coverage options for added confidence before and during your trip.' },
  { icon: 'passport', title: 'Passport & Visa Assistance', copy: 'Friendly guidance through common travel-document requirements and appointment steps.' },
  { icon: 'car', title: 'Transport', copy: 'Van, car, airport transfer, and group transportation planning when available.' }
];

export const testimonials = [
  { quote: 'Very responsive in any travel inquiry.', source: 'Facebook review' },
  { quote: 'Excellent.', source: 'Facebook review' },
  { quote: 'We’re so happy you enjoyed your Cebu–Bohol trip. Thanks for the photos and lovely feedback!', source: 'Recent traveler feedback' }
];

export const faqs = [
  { q: 'Can you create a custom itinerary?', a: 'Yes. Share your destination, dates, group size, departure city, and budget range and we can build options around your trip.' },
  { q: 'Do you handle flights and hotels separately?', a: 'Yes. You can ask for flights only, hotels only, or combine them with tours, transfers, and activities.' },
  { q: 'Why do prices say “Ask for current rate”?', a: 'Airfare, hotel inventory, supplier rates, and foreign exchange can change quickly. We quote current pricing for your actual travel dates.' },
  { q: 'Can you help with passport or visa requirements?', a: 'Nice Travel & Tours can assist with common requirements and appointment guidance. Final requirements and approvals remain with the relevant government authority.' }
];
