import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: '404 - Seite nicht gefunden',
  description: 'Die angeforderte Seite konnte nicht gefunden werden.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Seite nicht gefunden</h2>
      <p style={{ fontSize: '1rem', color: 'var(--secondary)' }}>
        Die angeforderte Seite konnte nicht gefunden werden.
      </p>
    </div>
  );
} 