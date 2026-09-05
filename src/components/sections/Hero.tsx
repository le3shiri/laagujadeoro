import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS } from '@/lib/business';
import { getWhatsAppUrl } from '@/lib/utils';

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-bg)]"
      style={{ minHeight: 'clamp(520px, 85vh, 820px)' }}
      aria-label="Presentación de La Aguja de Oro"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="hero-decoration absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[var(--color-gold-bg)]"
        style={{ opacity: 0.4 }}
      />
      <div
        aria-hidden="true"
        className="hero-decoration absolute bottom-[5%] left-[-5%] w-[300px] h-[300px] bg-[var(--color-surface-2)]"
        style={{ opacity: 0.6 }}
      />

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        style={{ paddingTop: 'clamp(3rem, 8vw, 5.5rem)', paddingBottom: 'clamp(3rem, 8vw, 5.5rem)' }}
      >
        {/* Left: Text content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          {/* Location & Experience tag */}
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border"
              style={{
                color: 'var(--color-gold)',
                borderColor: 'var(--color-gold-border)',
                backgroundColor: 'var(--color-gold-bg)',
              }}
            >
              <LocationDotIcon className="w-3 h-3" />
              Av. San Agustín, 7 · Avilés, Asturias
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
            >
              <StarIcon className="w-3.5 h-3.5 text-[var(--color-gold)]" />
              Maestro sastre artesanal · 30+ años
            </span>
          </div>

          <h1
            className="mb-4 text-[var(--color-text)] tracking-tight"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.1rem, 4.5vw, 3.25rem)', lineHeight: 1.15 }}
          >
            Arreglos de ropa en Avilés{' '}
            <span style={{ color: 'var(--color-gold)', display: 'inline' }}>
              con maestría y precisión
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-[var(--color-muted)] mb-6 max-w-xl mx-auto lg:mx-0">
            Arreglos, entalles y reparaciones para todo tipo de prendas y tejidos.
            Trae tu ropa a nuestro taller, la probamos y te damos presupuesto exacto en el momento.
            <strong> Sin sorpresas y sin necesidad de cita previa.</strong>
          </p>

          {/* Key service keywords chips */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-7" aria-label="Especialidades principales">
            {[
              'Bajos de vaqueros',
              'Ajuste de vestidos',
              'Chaquetas y abrigos',
              'Cambio de cremalleras',
              'Trajes de ceremonia',
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] border border-[var(--color-border)] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp shadow-md hover:shadow-lg transition-all"
              aria-label="Escribir por WhatsApp a La Aguja de Oro"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Consultar por WhatsApp
            </a>
            <a
              href={BUSINESS.location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-[var(--color-surface-2)] transition-all"
              aria-label="Cómo llegar a La Aguja de Oro en Avilés"
            >
              <MapIcon className="w-5 h-5" />
              Cómo llegar al taller
            </a>
          </div>

          {/* Trust points list */}
          <div className="mt-6 pt-5 border-t border-[var(--color-border)] flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-[var(--color-muted)]">
            <span className="flex items-center gap-1.5 font-medium text-[var(--color-text)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
              Sin cita previa
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[var(--color-text)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
              Presupuesto en el acto
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[var(--color-text)]">
              <ClockIcon className="w-3.5 h-3.5 text-[var(--color-gold)]" />
              Arreglos en el mismo día según prenda
            </span>
          </div>
        </div>

        {/* Right: Image / visual element */}
        <div className="flex-1 w-full max-w-lg lg:max-w-md xl:max-w-lg">
          <div className="relative">
            {/* Main image frame */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] bg-[var(--color-surface-2)] group border border-[var(--color-gold-border)]"
              style={{ aspectRatio: '4/5', maxHeight: '520px' }}
            >
              <Image
                src="/images/hero-larbi.jpeg"
                alt="Larbi El Achiri cortando tejido a medida en el taller La Aguja de Oro en Avilés"
                fill
                priority
                quality={85}
                className="object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 460px"
              />

              {/* Bottom badge overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-white flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--color-gold-light)] font-bold">Atención personalizada</p>
                  <p className="text-sm font-semibold">{BUSINESS.owner.name}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-300">Taller artesanal</span>
                  <p className="text-xs font-semibold text-[var(--color-gold-light)]">Avilés, Asturias</p>
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div
              className="absolute -bottom-4 -left-4 md:-left-6 bg-white rounded-xl shadow-[var(--shadow-lg)] p-3.5 flex items-center gap-3 border border-[var(--color-gold-border)]"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--color-gold-bg)] flex items-center justify-center text-[var(--color-gold)] font-bold">
                ✂️
              </div>
              <div>
                <div className="stat-number text-xl leading-none">30+</div>
                <div className="text-[0.7rem] text-[var(--color-muted)] font-medium">años de oficio</div>
              </div>
            </div>

            {/* Brands badge */}
            <div
              className="absolute -top-4 -right-4 md:-right-6 bg-white rounded-xl shadow-[var(--shadow-md)] p-3 border border-[var(--color-border)] flex items-center gap-2"
            >
              <div className="flex -space-x-1">
                <span className="w-2 h-2 rounded-full bg-[var(--color-gold)]" />
              </div>
              <span className="text-[0.72rem] font-semibold text-[var(--color-text)]">
                Experiencia en Zara & Mango
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gold accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-30"
        aria-hidden="true"
      />
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function MapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function LocationDotIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );
}

function NeedleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M32 8 L40 32 L32 56 L24 32 Z" />
      <circle cx="32" cy="12" r="3" fill="currentColor" stroke="none" />
      <path d="M28 20 Q32 16 36 20" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}
