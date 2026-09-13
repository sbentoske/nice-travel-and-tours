export const packages = [
  {
    slug: 'great-britain',
    title: 'Great Britain',
    eyebrow: 'England • Scotland • Wales',
    duration: 'Multi-city Europe itinerary',
    image: '/api/package-image/great-britain',
    description: 'A broad Great Britain journey built around London, historic cities, Scotland, scenic rail experiences and classic landmarks.',
    highlights: ['London city touring', 'Edinburgh & the Highlands', 'Historic castles & landmarks', 'Scenic rail experiences']
  },
  {
    slug: 'chongqing-chengdu',
    title: 'Chongqing & Chengdu',
    eyebrow: 'China',
    duration: '5-day sample itinerary',
    image: '/api/package-image/chongqing-chengdu',
    description: 'A fast-paced city adventure combining Chongqing’s striking skyline and rail experiences with Chengdu’s culture and neighborhoods.',
    highlights: ['Chongqing city sights', 'Rail transit experiences', 'Local food & shopping', 'Chengdu city time']
  },
  {
    slug: 'bangkok',
    title: 'Bangkok',
    eyebrow: 'Thailand',
    duration: '4-day sample itinerary',
    image: '/api/package-image/bangkok',
    description: 'A compact Bangkok getaway with hotel stay, airport transfers and time to enjoy Thailand’s temples, shopping and city life.',
    highlights: ['Bangkok city tour', 'Hotel accommodation', 'Airport transfers', 'Free time for exploring']
  },
  {
    slug: 'dubai',
    title: 'Dubai',
    eyebrow: 'United Arab Emirates',
    duration: '4-day sample itinerary',
    image: '/api/package-image/dubai',
    description: 'Modern city sights paired with memorable experiences including desert adventure, cruising and private touring.',
    highlights: ['Half-day city tour', 'Marina dinner cruise', 'Desert safari & BBQ', 'Private tour & transfers']
  },
  {
    slug: 'hanoi-sapa',
    title: 'Hanoi & Sapa',
    eyebrow: 'Vietnam',
    duration: '4-day sample itinerary',
    image: '/api/package-image/hanoi-sapa',
    description: 'A blend of Hanoi city life and Sapa’s mountain scenery, markets, cultural stops and natural attractions.',
    highlights: ['Hanoi city highlights', 'Fansipan', 'Cat Cat Waterfalls', 'Sapa markets & scenery']
  },
  {
    slug: 'indochina-tricity',
    title: 'Indochina Tri-City',
    eyebrow: 'Thailand • Cambodia • Vietnam',
    duration: '6-day sample itinerary',
    image: '/api/package-image/indochina-tricity',
    description: 'A regional adventure connecting Bangkok, Siem Reap and Ho Chi Minh City with temples, heritage sites and guided touring.',
    highlights: ['Bangkok', 'Angkor-area temples', 'Siem Reap', 'Ho Chi Minh City']
  },
  {
    slug: 'bali',
    title: 'Bali, Indonesia',
    eyebrow: 'Indonesia',
    duration: '4-day sample itinerary',
    image: '/api/package-image/bali',
    description: 'An easy tropical escape with airfare, transfers, hotel accommodation, breakfast and time to explore Bali at your pace.',
    highlights: ['Roundtrip airfare', 'Hotel stay', 'Daily breakfast', 'Optional island touring']
  },
  {
    slug: 'boracay',
    title: 'Boracay, Philippines',
    eyebrow: 'Philippines',
    duration: 'Island escape',
    image: '/api/package-image/boracay',
    description: 'A relaxed Boracay beach package with accommodation, breakfast and plenty of free time for optional water activities.',
    highlights: ['Beach accommodation', 'Daily breakfast', 'Free time', 'Optional island activities']
  },
  {
    slug: 'singapore-malaysia',
    title: 'Singapore & Malaysia',
    eyebrow: 'Twin-city itinerary',
    duration: '6-day sample itinerary',
    image: '/api/package-image/singapore-malaysia',
    description: 'Two destinations in one trip, combining Singapore city highlights with Kuala Lumpur sightseeing and comfortable transfers.',
    highlights: ['Singapore city tour', 'Kuala Lumpur city tour', 'Hotel accommodation', 'Roundtrip transfers']
  },
  {
    slug: 'bangkok-city-escape',
    title: 'Bangkok City Escape',
    eyebrow: 'Thailand',
    duration: '4-day sample itinerary',
    image: '/api/package-image/bangkok-city-escape',
    description: 'A second Bangkok option focused on comfortable accommodation, breakfast, transfers and a guided introduction to the city.',
    highlights: ['City sightseeing', 'Daily breakfast', 'Airport transfers', 'Licensed tour guide']
  }
];

export function getPackage(slug) {
  return packages.find((pkg) => pkg.slug === slug);
}
