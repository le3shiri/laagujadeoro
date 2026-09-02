import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { BrandLogosShowcase } from '@/components/ui/BrandLogos';
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
                className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] bg-[var(--color-surface-3)]"
                style={{ aspectRatio: '3/4', maxHeight: '560px' }}
              >
                <Image
                  src="/images/hero-larbi3.jpeg"
                  alt="Larbi El Achiri trabajando en la máquina de coser en La Aguja de Oro, Avilés"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                />
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

      {/* Workshop in action photo gallery */}
      <SectionWrapper background="white">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="section-label mx-auto">El arte del oficio</span>
          <AnimatedSection>
            <h2 className="mt-3 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              El taller en imágenes
            </h2>
            <p className="text-[var(--color-muted)] text-sm">
              Cada prenda pasa por un proceso meticuloso: desde la toma de medidas hasta la puntada final con maquinaria profesional.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedSection delay={1} className="group">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-md)] bg-[var(--color-surface-2)] aspect-[4/5]">
              <Image
                src="/images/hero-larbi.jpeg"
                alt="Larbi cortando tejido con tijeras de sastre"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-gold-light)]">Paso 1</span>
                <h3 className="text-base font-semibold">Corte y patronaje a medida</h3>
                <p className="text-xs text-gray-200 mt-1">Medición milimétrica y corte manual adaptado a tu silueta.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={2} className="group">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-md)] bg-[var(--color-surface-2)] aspect-[4/5]">
              <Image
                src="/images/hero-larbi2.jpeg"
                alt="Larbi calibrando la máquina overlock industrial"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-gold-light)]">Paso 2</span>
                <h3 className="text-base font-semibold">Maquinaria profesional</h3>
                <p className="text-xs text-gray-200 mt-1">Ajuste y enhebrado de remalladoras industriales para acabados de fábrica.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={3} className="group">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-md)] bg-[var(--color-surface-2)] aspect-[4/5]">
              <Image
                src="/images/tienda.jpeg"
                alt="Fachada del taller La Aguja de Oro en Avilés"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-gold-light)]">Atención directa</span>
                <h3 className="text-base font-semibold">Taller en Avilés</h3>
                <p className="text-xs text-gray-200 mt-1">Av. San Agustín, 7. Trato cercano, honesto y sin cita previa.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Brands showcase */}
      <SectionWrapper background="ivory">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label mx-auto">Grandes firmas</span>
            <AnimatedSection>
              <h2 className="mt-3 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Experiencia con las grandes marcas
              </h2>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Durante dos décadas, Larbi formó parte de los equipos de confección y patronaje de las marcas de moda más exigentes de España.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={1}>
            <BrandLogosShowcase variant="cards" showDisclaimer={true} />
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
