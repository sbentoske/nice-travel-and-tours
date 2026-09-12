import './globals.css';

export const metadata = {
  title: 'Nice Travel & Tours | Flights, Tours & Travel Assistance',
  description: 'Personalized flights, tours, hotels, travel assistance, and holiday packages from Nice Travel & Tours in Pasig, Philippines.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
