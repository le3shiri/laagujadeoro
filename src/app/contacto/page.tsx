import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { BUSINESS } from '@/lib/business';
import { getWhatsAppUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contacto | La Aguja de Oro — Arreglos de Ropa en Avilés',
  description:
    'Encuentra La Aguja de Oro en Av. San Agustín, 7, Avilés, Asturias. Contacta por WhatsApp o teléfono: +34 654 151 623. Sin cita previa.',
  alternates: {
    canonical: '/contacto',
  },
  openGraph: {
    title: 'Contacto | La Aguja de Oro — Avilés, Asturias',
    description: 'Contacta con La Aguja de Oro por WhatsApp o teléfono. Taller en Av. San Agustín, 7, Avilés. Sin cita previa.',
    url: `${BUSINESS.seo.siteUrl}/contacto`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BUSINESS.seo.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Contacto', item: `${BUSINESS.seo.siteUrl}/contacto` },
  ],
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contacto y Ubicación — La Aguja de Oro',
  description: 'Información de contacto, ubicación del taller en Avilés y horarios de atención.',
  url: `${BUSINESS.seo.siteUrl}/contacto`,
  mainEntity: {
    '@type': 'ClothingStore',
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.province,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.location.lat,
      longitude: BUSINESS.location.lng,
    },
    openingHoursSpecification: BUSINESS.hours.specification,
    hasMap: BUSINESS.location.googleMapsUrl,
  },
};

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, contactPageSchema]} />

      {/* Hero */}
      <section
        className="bg-[var(--color-surface-2)]"
        style={{ padding: 'clamp(2.5rem, 6vw, 4.5rem) 0' }}
      >
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Contacto' },
            ]}
            className="mb-6"
          />
          <div className="max-w-2xl">
            <span className="section-label mb-3">Visítanos o escríbenos</span>
            <h1 className="mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Cómo llegar
              {' '}
              <span style={{ color: 'var(--color-gold)' }}>a La Aguja de Oro</span>
            </h1>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Estamos en Avilés, Asturias. Puedes venir directamente al taller sin cita previa
              o escribirnos primero por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Main contact section */}
      <SectionWrapper background="white">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <AnimatedSection>
              <h2 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Información de contacto
              </h2>
            </AnimatedSection>

            <div className="space-y-6">
              {/* Address */}
              <AnimatedSection delay={1} className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-[var(--color-gold)]"
                  style={{ backgroundColor: 'var(--color-gold-bg)', border: '1px solid var(--color-gold-border)' }}
                  aria-hidden="true"
                >
                  <LocationIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    Dirección
                  </h3>
                  <address className="not-italic text-[var(--color-muted)] text-sm leading-relaxed">
                    {BUSINESS.address.street}<br />
                    {BUSINESS.address.postalCode} {BUSINESS.address.city}<br />
                    {BUSINESS.address.province}, {BUSINESS.address.country}
                  </address>
                  <a
                    href={BUSINESS.location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-gold-dark)] transition-colors"
                  >
                    Cómo llegar con Google Maps
                    <ArrowIcon className="w-4 h-4" />
                  </a>
                </div>
              </AnimatedSection>

              {/* WhatsApp */}
              <AnimatedSection delay={2} className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.2)' }}
                  aria-hidden="true"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    WhatsApp
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm mb-2">
                    La forma más rápida de contactar. Escríbenos con tu consulta y te respondemos.
                  </p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp text-sm px-4 py-2"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Escribir por WhatsApp
                  </a>
                </div>
              </AnimatedSection>

              {/* Phone */}
              <AnimatedSection delay={3} className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-[var(--color-gold)]"
                  style={{ backgroundColor: 'var(--color-gold-bg)', border: '1px solid var(--color-gold-border)' }}
                  aria-hidden="true"
                >
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    Teléfono
                  </h3>
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="text-[var(--color-text)] text-lg font-semibold hover:text-[var(--color-gold)] transition-colors"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </AnimatedSection>

              {/* No appointment needed */}
              <AnimatedSection delay={4}>
                <div
                  className="p-4 rounded-xl"
                  style={{
                    backgroundColor: 'var(--color-gold-bg)',
                    border: '1px solid var(--color-gold-border)',
                  }}
                >
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    <strong className="text-[var(--color-gold)]">✓ Sin cita previa.</strong>{' '}
                    Puedes venir directamente al taller. Si quieres asegurarte antes de venir,
                    escríbenos por WhatsApp.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Map & Storefront */}
          <AnimatedSection animation="fade-in" className="w-full space-y-6">
            <div>
              <h2 className="mb-4 text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                Nuestro taller en Avilés
              </h2>
              {/* Storefront photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-md)] aspect-[16/10] bg-[var(--color-surface-2)] mb-6 border border-[var(--color-gold-border)]">
                <Image
                  src="/images/tienda.jpeg"
                  alt="Fachada del taller de arreglos La Aguja de Oro en Av. San Agustín 7, Avilés"
                  fill
                  priority
                  quality={80}
                  className="object-cover object-center hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium border border-white/20 flex items-center gap-1.5">
                  <LocationIcon className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  Fachada en Av. San Agustín, 7 (Avilés)
                </div>
              </div>

              <h3 className="mb-3 text-base font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                Ubicación en el mapa
              </h3>
              <div
                className="rounded-xl overflow-hidden shadow-[var(--shadow-md)]"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <iframe
                  src={BUSINESS.location.embedUrl}
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de La Aguja de Oro en Avilés, Asturias"
                />
              </div>
              <div className="mt-3 flex justify-between items-center">
                <p className="text-xs text-[var(--color-muted)]">
                  Av. San Agustín, 7 · 33401 Avilés, Asturias
                </p>
                <a
                  href={BUSINESS.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-gold-dark)] inline-flex items-center gap-1 transition-colors"
                >
                  Ver en Google Maps
                  <ArrowIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* How it works reminder */}
      <SectionWrapper background="ivory" size="sm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            Cuando llegues al taller
          </h2>
          <p className="text-[var(--color-muted)] text-sm leading-relaxed">
            Trae tu prenda y Larbi la valorará en persona. Te dirá qué se puede hacer, cómo
            quedará y cuánto costará, antes de empezar. Tú decides el plazo de entrega y
            nosotros hacemos lo posible por cumplirlo.
          </p>
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
