import Link from 'next/link';
import { SERVICES } from '@/lib/services';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getWhatsAppUrl } from '@/lib/utils';

interface ServicesGridProps {
  limit?: number;
  showCTA?: boolean;
}

export function ServicesGrid({ limit, showCTA = true }: ServicesGridProps) {
  const displayServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <SectionWrapper background="white">
      <div className="text-center mb-12">
        <span className="section-label mx-auto">Nuestros servicios en Avilés</span>
        <AnimatedSection>
          <h2 className="mt-3" style={{ fontFamily: 'var(--font-display)' }}>
            Especialistas en arreglos y confección a medida
          </h2>
          <p className="mt-3 text-[var(--color-muted)] max-w-2xl mx-auto">
            Trabajamos con todo tipo de prendas y tejidos: pantalones, vestidos de fiesta, abrigos, cremalleras y arreglos urgentes. Consúltanos sin compromiso.
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayServices.map((service, index) => (
          <AnimatedSection
            key={service.id}
            delay={(Math.min(index + 1, 5)) as 1 | 2 | 3 | 4 | 5}
            className="card group cursor-default"
          >
            <div className="text-3xl mb-4" aria-hidden="true">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              {service.title}
            </h3>
            <p className="text-sm text-[var(--color-muted)] mb-4 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-1" role="list">
              {service.examples.slice(0, 4).map((example) => (
                <li
                  key={example}
                  className="text-xs text-[var(--color-muted)] flex items-center gap-2"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: 'var(--color-gold)' }}
                    aria-hidden="true"
                  />
                  {example}
                </li>
              ))}
            </ul>
            <Link
              href={`/servicios/${service.slug}`}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-gold-dark)] transition-colors"
            >
              Ver más
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        ))}
      </div>

      {showCTA && (
        <AnimatedSection className="mt-12 text-center">
          <div
            className="inline-block rounded-xl p-8 max-w-2xl"
            style={{
              backgroundColor: 'var(--color-gold-bg)',
              border: '1px solid var(--color-gold-border)',
            }}
          >
            <h3
              className="text-xl font-semibold mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ¿Tienes una prenda que necesitas arreglar?
            </h3>
            <p className="text-[var(--color-muted)] text-sm mb-5">
              Trabajamos con todo tipo de prendas y marcas. Trae tu ropa al taller en Avilés y la valoramos en persona con presupuesto previo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Consultar por WhatsApp
              </a>
              <Link href="/servicios" className="btn btn-outline">
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </AnimatedSection>
      )}
    </SectionWrapper>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
