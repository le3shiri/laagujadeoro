import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { BUSINESS } from '@/lib/business';
import { getWhatsAppUrl } from '@/lib/utils';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Experiencia y Trayectoria | La Aguja de Oro, Avilés',
  description:
    'Conoce la trayectoria de Larbi El Achiri: 30 años de experiencia en arreglos de ropa, 20 años con Zara, Mango y El Corte Inglés. Hoy, en su taller de Avilés.',
  alternates: {
    canonical: '/experiencia',
  },
  openGraph: {
    title: 'Experiencia | La Aguja de Oro — Avilés, Asturias',
    description:
      '30 años de experiencia en arreglos de ropa. Trayectoria profesional con Zara, Mango y El Corte Inglés. Ahora al servicio de los clientes de Avilés y Asturias.',
    url: `${BUSINESS.seo.siteUrl}/experiencia`,
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: BUSINESS.owner.name,
  jobTitle: 'Maestro sastre y propietario',
  worksFor: {
    '@type': 'ClothingStore',
    name: BUSINESS.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.province,
      addressCountry: BUSINESS.address.countryCode,
    },
  },
  description: `Más de ${BUSINESS.owner.yearsExperience} años de experiencia en arreglos y confección de ropa. Experiencia profesional junto a grandes marcas de la moda como ${BUSINESS.owner.brands.join(', ')}.`,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BUSINESS.seo.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Experiencia', item: `${BUSINESS.seo.siteUrl}/experiencia` },
  ],
};

export default function ExperienciaPage() {
  return (
    <>
      <JsonLd data={[personSchema, breadcrumbSchema]} />

      {/* Hero */}
      <section
        className="bg-[var(--color-surface-2)]"
        style={{ padding: 'clamp(2.5rem, 6vw, 4.5rem) 0' }}
      >
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Experiencia' },
            ]}
            className="mb-6"
          />
          <div className="max-w-3xl">
            <span className="section-label mb-3">Trayectoria</span>
            <h1 className="mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Una vida dedicada
              {' '}
              <span style={{ color: 'var(--color-gold)' }}>
                a la precisión
              </span>
            </h1>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Detrás de La Aguja de Oro hay una historia de más de 30 años de trabajo,
              aprendizaje y dedicación al mundo de la confección y los arreglos de ropa.
            </p>
          </div>
        </div>
      </section>

      {/* Main story */}
      <SectionWrapper background="white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <AnimatedSection animation="fade-in">
            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-lg)]"
                style={{ aspectRatio: '3/4', maxHeight: '560px' }}
              >
                <div
                  className="w-full h-full img-placeholder bg-[var(--color-surface-3)] flex flex-col items-center justify-center gap-3"
                  aria-label="Larbi El Achiri, propietario de La Aguja de Oro, en su taller de Avilés"
                >
                  <PersonIcon className="w-24 h-24 text-[var(--color-gold)] opacity-20" />
                  <span className="text-xs text-[var(--color-muted-light)] text-center px-4">
                    Foto de Larbi El Achiri<br />
                    <em>(Coloca tu imagen en /public/images/larbi-experiencia.jpg)</em>
                  </span>
                </div>
              </div>
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl -z-10"
                style={{ border: '2px solid var(--color-gold)', opacity: 0.25 }}
                aria-hidden="true"
              />
            </div>
          </AnimatedSection>

          {/* Story */}
          <div>
            <AnimatedSection delay={1}>
              <h2 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                {BUSINESS.owner.name}
              </h2>
              <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Larbi lleva más de <strong className="text-[var(--color-text)]">30 años</strong> trabajando
                  en el mundo de la confección y los arreglos de ropa. Una carrera construida desde
                  abajo, con muchas horas de trabajo y un ojo cada vez más exigente para el detalle.
                </p>
                <p>
                  Durante aproximadamente <strong className="text-[var(--color-text)]">20 años</strong> trabajó
                  a nivel profesional junto a algunas de las marcas más reconocidas de la moda en España:{' '}
                  <strong className="text-[var(--color-text)]">Zara, Mango y El Corte Inglés</strong>.
                  En esa etapa llegó a desempeñarse como{' '}
                  <strong className="text-[var(--color-text)]">{BUSINESS.owner.role}</strong>, con
                  responsabilidad sobre una línea de producción de más de{' '}
                  <strong className="text-[var(--color-text)]">{BUSINESS.owner.teamSize} personas</strong>.
                </p>
                <p>
                  Toda esa experiencia —la precisión técnica, el conocimiento de los tejidos,
                  la comprensión del proceso productivo de la moda— es lo que hoy pone al servicio
                  de cada cliente que trae una prenda a su taller de Avilés.
                </p>
                <p>
                  Aquí no hay intermediarios. Larbi recibe la prenda, la valora, hace el arreglo
                  y la devuelve. Con el mismo nivel de exigencia que aplicó durante décadas en
                  entornos de producción industrial, pero con la atención cercana de un taller
                  de barrio.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2} className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/arreglos-de-ropa" className="btn btn-primary">
                Ver servicios
              </Link>
              <Link href="/contacto" className="btn btn-outline">
                Visitar el taller
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </SectionWrapper>

      {/* Key facts timeline */}
      <SectionWrapper background="ivory">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-center mb-10" style={{ fontFamily: 'var(--font-display)' }}>
              Una trayectoria en cifras
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                stat: '30+',
                label: 'años de experiencia',
                detail: 'Más de tres décadas trabajando con todo tipo de prendas, tejidos y clientes.',
              },
              {
                stat: '20',
                label: 'años con grandes marcas de la moda',
                detail: `Experiencia profesional junto a ${BUSINESS.owner.brands.join(', ')}: desde los procesos de confección hasta el control de calidad.`,
              },
              {
                stat: '+120',
                label: 'personas bajo su responsabilidad',
                detail: `Como ${BUSINESS.owner.role}, gestionó equipos de más de 120 personas en líneas de producción de alta exigencia.`,
              },
              {
                stat: '1',
                label: 'taller, atención directa y personal',
                detail: 'Hoy trabaja solo, atendiendo personalmente a cada cliente y cada prenda. La experiencia industrial al servicio de la atención personalizada.',
              },
            ].map((fact, index) => (
              <AnimatedSection
                key={fact.stat}
                delay={(Math.min(index + 1, 4)) as 1 | 2 | 3 | 4}
                className="flex gap-6 p-6 rounded-xl bg-white shadow-[var(--shadow-sm)]"
                style={{ border: '1px solid var(--color-border)' } as React.CSSProperties}
              >
                <div className="text-center shrink-0 min-w-[4rem]">
                  <div className="stat-number text-2xl md:text-3xl">{fact.stat}</div>
                </div>
                <div>
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {fact.label}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {fact.detail}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Brands mention */}
      <SectionWrapper background="white" size="sm">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm text-[var(--color-muted)] mb-4 uppercase tracking-widest font-semibold">
              Experiencia profesional junto a grandes marcas de la moda
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {BUSINESS.owner.brands.map((brand) => (
                <span
                  key={brand}
                  className="text-xl md:text-2xl font-bold text-[var(--color-muted-light)]"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
                >
                  {brand}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-[var(--color-muted-light)]">
              Menciones de trayectoria profesional. Estas empresas no avalan ni recomiendan actualmente La Aguja de Oro.
            </p>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}

function PersonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}
