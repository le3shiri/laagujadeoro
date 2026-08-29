import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/lib/services';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { BUSINESS } from '@/lib/business';
import { getWhatsAppUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Arreglos de Ropa en Avilés, Asturias | La Aguja de Oro',
  description:
    'Servicio profesional de arreglos y reparaciones de ropa en Avilés, Asturias. Pantalones, vestidos, chaquetas, cremalleras y mucho más. 30 años de experiencia.',
  alternates: {
    canonical: '/arreglos-de-ropa',
  },
  openGraph: {
    title: 'Arreglos de Ropa en Avilés | La Aguja de Oro',
    description:
      'Arreglos y reparaciones de todo tipo de ropa en Avilés. Sin cita previa. Precio justo. 30 años de experiencia.',
    url: `${BUSINESS.seo.siteUrl}/arreglos-de-ropa`,
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Arreglos y Reparaciones de Ropa',
  provider: {
    '@type': 'ClothingStore',
    name: BUSINESS.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.province,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.countryCode,
    },
  },
  description:
    'Arreglos y reparaciones de todo tipo de ropa: pantalones, vestidos, chaquetas, abrigos, cremalleras, botones, costuras y más. Servicio personalizado en Avilés, Asturias.',
  areaServed: {
    '@type': 'State',
    name: 'Asturias',
  },
  serviceType: 'Alteraciones y reparaciones de ropa',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BUSINESS.seo.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Arreglos de Ropa', item: `${BUSINESS.seo.siteUrl}/arreglos-de-ropa` },
  ],
};

export default function ArreglosDeRopaPage() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />

      {/* Page hero */}
      <section
        className="bg-[var(--color-surface-2)]"
        style={{ padding: 'clamp(2.5rem, 6vw, 4.5rem) 0' }}
      >
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Arreglos de ropa' },
            ]}
            className="mb-6"
          />
          <div className="max-w-3xl">
            <span className="section-label mb-3">Servicio principal</span>
            <h1 className="mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Arreglos y reparaciones de ropa
              {' '}
              <span style={{ color: 'var(--color-gold)' }}>en Avilés</span>
            </h1>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6 max-w-2xl">
              En La Aguja de Oro trabajamos con todo tipo de prendas y reparaciones.
              Más de <strong className="text-[var(--color-text)]">30 años de experiencia</strong> avalan
              cada arreglo que sale de nuestro taller en Avilés, Asturias.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
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
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What we fix */}
      <SectionWrapper background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="section-label mb-4">¿Qué arreglamos?</span>
            <AnimatedSection>
              <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Si tiene que ver con ropa, lo miramos
              </h2>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                No existe un arreglo demasiado pequeño ni demasiado complicado.
                Desde un bajo de pantalón hasta la reparación de una prenda delicada o de ceremonia,
                cada trabajo se hace con la misma atención.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                El precio no se establece por catálogo. Valoramos cada prenda individualmente
                en el taller y te decimos el coste antes de empezar. Sin sorpresas.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={1}>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Bajos de pantalón', 'Cambio de cremallera', 'Entalle de vestidos',
                'Ajuste de chaquetas', 'Arreglo de abrigos', 'Reparación de forros',
                'Costuras rotas', 'Cambio de botones', 'Ajuste de camisas',
                'Arreglo de faldas', 'Reparación de jeans', 'Prendas delicadas',
                'Trajes y americanas', 'Arreglos urgentes', 'Reparaciones difíciles',
                'Y mucho más...',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] p-2.5 rounded-lg"
                  style={{ backgroundColor: 'var(--color-surface-2)' }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: 'var(--color-gold)' }}
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Services links */}
      <SectionWrapper background="ivory" size="sm">
        <div className="text-center mb-8">
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Servicios específicos
          </h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Consulta información detallada sobre los arreglos más habituales
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.slice(0, 5).map((service) => (
            <Link
              key={service.id}
              href={`/servicios/${service.slug}`}
              className="card flex items-center gap-3 no-underline"
            >
              <span className="text-2xl" aria-hidden="true">{service.icon}</span>
              <div>
                <div className="font-semibold text-sm text-[var(--color-text)]">{service.title}</div>
                <div className="text-xs text-[var(--color-muted)] mt-0.5">{service.examples[0]}, {service.examples[1]}…</div>
              </div>
              <ArrowIcon className="w-4 h-4 ml-auto shrink-0 text-[var(--color-gold)]" />
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper background="white" size="sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            ¿Cómo funciona?
          </h2>
          <p className="text-[var(--color-muted)] mb-8">
            El proceso es sencillo y siempre transparente
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: '1', t: 'Traes tu prenda', d: 'Sin cita previa' },
              { n: '2', t: 'Valoramos juntos', d: 'Precio antes de empezar' },
              { n: '3', t: 'Acuerdo de plazo', d: 'Tú decides cuándo' },
              { n: '4', t: 'Recoges la prenda', d: 'Lista como nueva' },
            ].map((step) => (
              <div key={step.n} className="flex flex-col items-center text-center gap-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: 'var(--color-gold)' }}
                  aria-hidden="true"
                >
                  {step.n}
                </div>
                <p className="text-sm font-semibold text-[var(--color-text)]">{step.t}</p>
                <p className="text-xs text-[var(--color-muted)]">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
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
