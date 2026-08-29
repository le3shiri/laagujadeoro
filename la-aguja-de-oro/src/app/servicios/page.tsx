import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/lib/services';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { BUSINESS } from '@/lib/business';
import { getWhatsAppUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Servicios de Arreglos de Ropa | La Aguja de Oro, Avilés',
  description:
    'Todos los servicios de arreglos y reparaciones de ropa en Avilés: pantalones, vestidos, chaquetas, abrigos, cremalleras, botones y mucho más.',
  alternates: {
    canonical: '/servicios',
  },
  openGraph: {
    title: 'Servicios | La Aguja de Oro — Arreglos en Avilés',
    description:
      'Todo tipo de arreglos y reparaciones de ropa en Avilés, Asturias. Visita nuestro taller o escríbenos por WhatsApp.',
    url: `${BUSINESS.seo.siteUrl}/servicios`,
  },
};

export default function ServiciosPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="bg-[var(--color-surface-2)]"
        style={{ padding: 'clamp(2.5rem, 6vw, 4.5rem) 0' }}
      >
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Servicios' },
            ]}
            className="mb-6"
          />
          <div className="max-w-2xl">
            <span className="section-label mb-3">Lo que hacemos</span>
            <h1 className="mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Servicios de arreglos
              {' '}
              <span style={{ color: 'var(--color-gold)' }}>y reparaciones</span>
            </h1>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Trabajamos con todo tipo de prendas. Cada arreglo se valora individualmente
              en el taller y te decimos el precio antes de empezar.
            </p>
          </div>
        </div>
      </section>

      {/* Services full grid */}
      <SectionWrapper background="white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <AnimatedSection
              key={service.id}
              delay={(Math.min(index + 1, 5)) as 1 | 2 | 3 | 4 | 5}
              className="card"
            >
              <div className="text-3xl mb-4" aria-hidden="true">{service.icon}</div>
              <h2
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {service.title}
              </h2>
              <p className="text-sm text-[var(--color-muted)] mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1 mb-5" role="list">
                {service.examples.map((example) => (
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
              {service.id !== 'otros' && (
                <Link
                  href={`/servicios/${service.slug}`}
                  className="text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-gold-dark)] inline-flex items-center gap-1 transition-colors"
                >
                  Más información
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              )}
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-12 text-center">
          <div
            className="inline-block rounded-xl p-8 max-w-2xl"
            style={{
              backgroundColor: 'var(--color-gold-bg)',
              border: '1px solid var(--color-gold-border)',
            }}
          >
            <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              ¿Tienes una prenda que arreglar?
            </h3>
            <p className="text-[var(--color-muted)] text-sm mb-5">
              Consúltanos sin compromiso. Valoramos el arreglo en el taller y te damos el precio antes de empezar.
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
              <a
                href={BUSINESS.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Cómo llegar al taller
              </a>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
