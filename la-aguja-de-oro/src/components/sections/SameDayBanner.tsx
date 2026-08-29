import { getWhatsAppUrl } from '@/lib/utils';

export function SameDayBanner() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="same-day-heading"
      style={{
        background: 'linear-gradient(135deg, var(--color-dark) 0%, #1a1610 100%)',
        padding: 'clamp(3rem, 6vw, 5rem) 0',
      }}
    >
      {/* Gold texture accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(184,144,42,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Icon */}
          <div
            className="shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{
              backgroundColor: 'rgba(184,144,42,0.15)',
              border: '1px solid rgba(184,144,42,0.3)',
            }}
            aria-hidden="true"
          >
            <ClockIcon className="w-10 h-10 text-[var(--color-gold)]" />
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-2 inline-block"
              style={{ color: 'var(--color-gold)' }}
            >
              Rapidez
            </span>
            <h2
              id="same-day-heading"
              className="text-white text-2xl md:text-3xl font-semibold mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ¿Lo necesitas para hoy?
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Algunos arreglos pueden realizarse{' '}
              <strong className="text-white">el mismo día</strong>, según el tipo de trabajo y la disponibilidad del momento.
              Trae tu prenda al taller y lo valoramos juntos.
            </p>
          </div>

          {/* CTA */}
          <div className="shrink-0">
            <a
              href={getWhatsAppUrl('Hola, necesito un arreglo urgente. ¿Podría ser para hoy?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary whitespace-nowrap"
              aria-label="Consultar arreglo urgente por WhatsApp"
            >
              Consultar disponibilidad
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
