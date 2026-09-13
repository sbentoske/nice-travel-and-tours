import './globals.css';
import './visual-fixes.css';
import './service-icons.css';

export const metadata = {
  title: {
    default: 'Nice Travel & Tours | Personalized Travel Planning',
    template: '%s | Nice Travel & Tours'
  },
  description: 'Personalized flights, hotels, tours, transfers, passport and visa assistance, and custom travel planning from Nice Travel & Tours in Pasig, Philippines.',
  keywords: ['travel agency Philippines', 'Pasig travel agency', 'tour packages', 'flight booking assistance', 'custom itinerary Philippines', 'Nice Travel and Tours'],
  applicationName: 'Nice Travel & Tours',
  openGraph: {
    title: 'Nice Travel & Tours',
    description: 'Travel beautifully. We’ll handle the details.',
    type: 'website',
    locale: 'en_PH'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nice Travel & Tours',
    description: 'Travel beautifully. We’ll handle the details.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b1d2a'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
