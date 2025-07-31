import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Xer Component - Test Page',
  description: 'Testseite für die Xer Komponente - eine universelle, SEO-optimierte und accessibility-freundliche React Komponente',
  keywords: ['React', 'Component', 'Accessibility', 'SEO', 'TypeScript'],
  authors: [{ name: 'Xer Component Team' }],
  creator: 'Xer Component Team',
  publisher: 'Xer Component Team',
  robots: 'index, follow',
  openGraph: {
    title: 'Xer Component - Test Page',
    description: 'Testseite für die Xer Komponente',
    type: 'website',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xer Component - Test Page',
    description: 'Testseite für die Xer Komponente',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0070f3',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        {children}
      </body>
    </html>
  );
}
