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
import type { ServiceCategory } from '@/types';

// Extended data for each sub-page
const SERVICE_DETAIL: Record<string, {
  title: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  body: string[];
  tipText: string;
  relatedIds: string[];
}> = {
  'arreglos-de-pantalones': {
    title: 'Arreglos de Pantalones',
    metaTitle: 'Arreglo de Pantalones en Avilés | Bajos, Entalle y Cremalleras',
    metaDesc: 'Arreglo de bajos originales en vaqueros, entalle de cintura y pierna, cambio de cremallera y reparaciones en Avilés. Sin cita previa. Presupuesto sin compromiso.',
    h1: 'Arreglos de pantalones en Avilés',
    intro: 'El pantalón es la prenda que más arreglos necesita en el día a día. En nuestro taller de Avilés realizamos desde el bajo original de tus vaqueros favoritos hasta el entalle completo de pantalones de vestir con acabado de sastrería.',
    body: [
      'Bajos de pantalón (original, con dobladillo o invisible): ajustamos la longitud exacta a tus zapatos respetando el hilo, desgastes y puntadas originales del fabricante.',
      'Entalle de cintura, caderas y pernera: adaptamos la prenda a tu figura para que quede cómoda y estilizada.',
      'Cambio de cremallera: sustitución rápida por cremalleras metálicas resistentes o cremalleras de espiral en vaqueros y pantalones de pinzas.',
      'Reparación de entrepierna y costuras rotas: refuerzos interiores discretos para alargar la vida útil del pantalón sin que se note.',
      'Ajuste de tiros y bolsillos: modificaciones anatómicas para un ajuste impecable.',
    ],
    tipText: 'Trae los zapatos o zapatillas con los que sueles usar el pantalón para medir la altura perfecta del bajo.',
    relatedIds: ['vestidos', 'chaquetas-abrigos', 'cremalleras'],
  },
  'arreglos-de-vestidos': {
    title: 'Arreglos de Vestidos',
    metaTitle: 'Arreglo de Vestidos en Avilés | Fiesta, Ceremonia y Diario',
    metaDesc: 'Ajuste a medida, entalle de silueta y arreglos de vestidos de fiesta, ceremonia, novia y diario en Avilés. 30 años de experiencia en alta confección.',
    h1: 'Arreglos de vestidos en Avilés',
    intro: 'Un vestido que sienta a la perfección realza tu estilo. En La Aguja de Oro adaptamos vestidos de diario, prendas delicadas de seda y espectaculares vestidos de fiesta y ceremonia con acabado artesanal.',
    body: [
      'Subida de dobladillos y acortado: corte uniforme y remallado adaptado a tejidos fluidos, tul, encaje, gasa o satén.',
      'Entallado lateral y de cintura: ajuste milimétrico al cuerpo respetando pinzas, cremalleras y forros.',
      'Ajuste de tirantes, hombros y escote: modificación para asegurar una sujeción cómoda y una caída natural.',
      'Vestidos de novia, fiesta y madrina: trabajo minucioso y personalizado para tus ocasiones más especiales.',
      'Reparación de forros y sustitución de cremalleras invisibles: soluciones limpias para prendas delicadas.',
    ],
    tipText: 'Para vestidos de fiesta o ceremonia, recomendamos acudir con el calzado y la ropa interior que llevarás el día del evento.',
    relatedIds: ['pantalones', 'cremalleras', 'otros'],
  },
  'arreglos-de-chaquetas-y-abrigos': {
    title: 'Arreglos de Chaquetas y Abrigos',
    metaTitle: 'Arreglo de Chaquetas y Abrigos en Avilés | Sastrería y Forros',
    metaDesc: 'Arreglo de chaquetas, americanas, abrigos y trajes en Avilés. Acortado de mangas con botones, entalle de cuerpo y cambio de forros. Maestría de sastre.',
    h1: 'Arreglos de chaquetas y abrigos en Avilés',
    intro: 'Las americanas, abrigos y prendas de sastrería requieren una técnica impecable. Aplicamos más de 30 años de experiencia para transformar y adaptar tus abrigos y trajes respetando su estructura y hombros originales.',
    body: [
      'Acortado de mangas de chaqueta: mantenimiento de la hilera de botones, ojales y forro original del puño.',
      'Entalle de cuerpo y costados: estilizamos la silueta de abrigos y americanas para un porte moderno y elegante.',
      'Sustitución y reparación de forros interiores: renovación integral del forro con materiales de alta calidad y tacto suave.',
      'Cambio y recolocación de botones: fijación reforzada y ojales a medida para prendas pesadas.',
      'Ajuste de hombreras y espalda: corrección postural de la prenda para evitar arrugas y tiranteces.',
    ],
    tipText: 'Las americanas y abrigos estructurados se valoran sobre tu cuerpo en el taller para garantizar la máxima comodidad de movimiento.',
    relatedIds: ['pantalones', 'cremalleras', 'reparaciones'],
  },
  'cambio-de-cremalleras': {
    title: 'Cambio de Cremalleras',
    metaTitle: 'Cambio de Cremalleras en Avilés | Cazadoras, Pantalones y Abrigos',
    metaDesc: 'Cambio y reparación de cremalleras en Avilés. Cremalleras metálicas, invisibles, de doble carro y cursores en pantalones, plumíferos y bolsos.',
    h1: 'Cambio de cremalleras en Avilés',
    intro: 'Una cremallera rota tiene fácil solución. En nuestro taller sustituimos cremalleras dañadas o atascadas en todo tipo de prendas y accesorios con la máxima rapidez y durabilidad.',
    body: [
      'Cremalleras de pantalones y jeans: colocación de cremalleras metálicas reforzadas de primera calidad.',
      'Cremalleras de cazadoras, abrigos y plumíferos: sustitución por cremalleras de dientes gruesos, plástico inyectado o doble carro.',
      'Cremalleras invisibles en vestidos y faldas: costura limpia y oculta que preserva la estética original.',
      'Reparación de cursores y tiradores: si los dientes están intactos, reparamos el carro sin necesidad de descoser la prenda entera.',
      'Cremalleras de bolsos, mochilas y fundas: soluciones resistentes para accesorios de uso intensivo.',
    ],
    tipText: 'Disponemos de una amplia variedad de colores, medidas y acabados en el taller para igualar el aspecto de tu prenda.',
    relatedIds: ['pantalones', 'chaquetas-abrigos', 'reparaciones'],
  },
  'reparacion-de-ropa': {
    title: 'Reparación de Ropa',
    metaTitle: 'Reparación de Ropa en Avilés | Costuras, Desgarros y Zurcido',
    metaDesc: 'Reparación profesional de costuras abiertas, agujeros, roturas y desgarros en ropa en Avilés. Da una segunda vida a tus prendas favoritas.',
    h1: 'Reparación de ropa en Avilés',
    intro: 'Antes de tirar una prenda de calidad, dale una segunda vida. Con técnicas avanzadas de sastrería y zurcido, reparamos desgarros, roces y daños en tejidos finos o gruesos.',
    body: [
      'Costuras abiertas y descosidos: repaso y sellado de uniones con hilos de máxima resistencia.',
      'Zurcido de roturas y desgarros: disimulamos el daño integrando el hilo con la trama del tejido.',
      'Refuerzo de zonas de rozadura: prevención y arreglo de desgaste en codos, entrepiernas y fondillos.',
      'Colocación de parches, coderas y apliques decorativos: soluciones estéticas para prendas informales y de trabajo.',
      'Reparación de prendas térmicas y técnicas: cuidado especial en tejidos impermeables o con relleno.',
    ],
    tipText: 'Acude al taller en cuanto notes un pequeño descosido para evitar que el desgarro se haga mayor.',
    relatedIds: ['cremalleras', 'chaquetas-abrigos', 'otros'],
  },
};

interface ServiceSubPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.filter((s) => s.id !== 'otros').map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServiceSubPageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = SERVICE_DETAIL[slug];
  if (!detail) return {};
  return {
    title: detail.metaTitle,
    description: detail.metaDesc,
    alternates: { canonical: `/servicios/${slug}` },
    openGraph: {
      title: detail.metaTitle,
      description: detail.metaDesc,
      url: `${BUSINESS.seo.siteUrl}/servicios/${slug}`,
    },
  };
}

export default async function ServiceSubPage({ params }: ServiceSubPageProps) {
  const { slug } = await params;
  const detail = SERVICE_DETAIL[slug];
  const service = SERVICES.find((s) => s.slug === slug);

  if (!detail || !service) {
    return (
      <SectionWrapper background="white">
        <div className="text-center py-16">
          <h1>Página no encontrada</h1>
          <Link href="/servicios" className="btn btn-primary mt-4">Ver todos los servicios</Link>
        </div>
      </SectionWrapper>
    );
  }

  const relatedServices = SERVICES.filter((s) => detail.relatedIds.includes(s.id));

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: detail.title,
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
    description: detail.metaDesc,
    areaServed: { '@type': 'State', name: 'Asturias' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: BUSINESS.seo.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${BUSINESS.seo.siteUrl}/servicios` },
      { '@type': 'ListItem', position: 3, name: detail.title, item: `${BUSINESS.seo.siteUrl}/servicios/${slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />

      {/* Hero */}
      <section
        className="bg-[var(--color-surface-2)]"
        style={{ padding: 'clamp(2.5rem, 6vw, 4.5rem) 0' }}
      >
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Servicios', href: '/servicios' },
              { label: detail.title },
            ]}
            className="mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-4xl mb-4 block" aria-hidden="true">{service.icon}</span>
            <h1 className="mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              {detail.h1}
            </h1>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              {detail.intro}
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

      {/* Content */}
      <SectionWrapper background="white">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              ¿Qué incluye este servicio?
            </h2>
            <ul className="space-y-4" role="list">
              {detail.body.map((item, i) => {
                const [bold, ...rest] = item.split(':');
                return (
                  <li
                    key={i}
                    className="flex gap-3 p-4 rounded-xl"
                    style={{ backgroundColor: 'var(--color-surface-2)' }}
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold mt-0.5"
                      style={{ backgroundColor: 'var(--color-gold)' }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      <strong className="text-[var(--color-text)]">{bold}:</strong>
                      {rest.join(':')}
                    </p>
                  </li>
                );
              })}
            </ul>

            {/* Tip box */}
            <div
              className="mt-8 p-5 rounded-xl"
              style={{
                backgroundColor: 'var(--color-gold-bg)',
                border: '1px solid var(--color-gold-border)',
              }}
            >
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                <strong className="text-[var(--color-gold)]">💡 A tener en cuenta: </strong>
                {detail.tipText}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact card */}
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: 'var(--color-dark)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <h3
                className="text-white text-lg font-semibold mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                ¿Necesitas este arreglo?
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Trae tu prenda al taller. Te damos el precio en el momento, sin compromiso.
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full justify-center text-sm"
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={BUSINESS.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full justify-center text-sm"
                  style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}
                >
                  Cómo llegar
                </a>
              </div>
            </div>

            {/* Pricing note */}
            <div
              className="rounded-xl p-5"
              style={{ border: '1px solid var(--color-border)' }}
            >
              <h3
                className="text-base font-semibold mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                ¿Cuánto cuesta?
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Cada arreglo es diferente. El precio se determina en el taller después de ver
                la prenda. Así podemos darte un presupuesto real y ajustado al trabajo concreto.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <SectionWrapper background="ivory" size="sm">
          <h2 className="text-center mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Otros servicios relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.id}
                href={`/servicios/${s.slug}`}
                className="card flex items-center gap-3 no-underline"
              >
                <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                <span className="font-medium text-sm text-[var(--color-text)]">{s.title}</span>
                <ArrowIcon className="w-4 h-4 ml-auto shrink-0 text-[var(--color-gold)]" />
              </Link>
            ))}
          </div>
        </SectionWrapper>
      )}

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
