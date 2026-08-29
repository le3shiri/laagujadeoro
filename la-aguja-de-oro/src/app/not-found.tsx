import type { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS } from '@/lib/business';
import { getWhatsAppUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Página no encontrada | La Aguja de Oro',
  description: 'Esta página no está disponible. Vuelve al inicio o contacta con La Aguja de Oro.',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center"
      style={{ minHeight: '60vh', padding: 'clamp(3rem, 8vw, 6rem) 1rem' }}
      aria-labelledby="not-found-heading"
    >
      <div
        className="text-8xl font-bold mb-4"
        style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-display)', opacity: 0.3 }}
        aria-hidden="true"
      >
        404
      </div>
      <h1
        id="not-found-heading"
        className="text-2xl md:text-3xl mb-3"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Esta página no está disponible
      </h1>
      <p className="text-[var(--color-muted)] mb-8 max-w-md">
        La página que buscas no existe o ha sido movida.
        Puedes volver al inicio o contactar directamente con nosotros.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/" className="btn btn-primary">
          Volver al inicio
        </Link>
        <Link href="/servicios" className="btn btn-outline">
          Ver servicios
        </Link>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </section>
  );
}
