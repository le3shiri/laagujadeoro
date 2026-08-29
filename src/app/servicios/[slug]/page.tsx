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
    metaTitle: 'Arreglos de Pantalones en Avilés | La Aguja de Oro',
    metaDesc: 'Arreglo de bajos, entalle, cambio de cremallera y todo tipo de reparaciones de pantalones en Avilés. Sin cita previa. Precio justo.',
    h1: 'Arreglos de pantalones en Avilés',
    intro: 'El pantalón es una de las prendas que más se usa y la que más arreglos necesita a lo largo del tiempo. En La Aguja de Oro nos encargamos de cualquier modificación o reparación que necesite tu pantalón.',
    body: [
      'Bajos de pantalón: uno de los arreglos más habituales. Tanto si el pantalón es demasiado largo como si necesita un acabado especial, lo ajustamos a tu medida.',
      'Entalle de cintura y caderas: si el pantalón te queda bien de largo pero ancho de cintura o de cadera, lo modificamos para que se ajuste perfectamente a tu cuerpo.',
      'Cambio de cremallera: si la cremallera está rota o no cierra bien, la sustituimos por una nueva. Lo hacemos en todo tipo de pantalones, incluidos vaqueros.',
      'Costuras abiertas y reparaciones: si el pantalón tiene costuras sueltas, agujeros o desgarros, los reparamos para que la prenda quede como nueva.',
      'Ajuste de bajos en diferentes tipos de acabado: recto, con dobladillo, al corte... según las características del tejido y el estilo de la prenda.',
    ],
    tipText: 'El precio depende del tipo de arreglo y el tejido. Trae tu pantalón y te decimos el precio en el momento, sin compromiso.',
    relatedIds: ['vestidos', 'chaquetas-abrigos', 'cremalleras'],
  },
  'arreglos-de-vestidos': {
    title: 'Arreglos de Vestidos',
    metaTitle: 'Arreglos de Vestidos en Avilés | La Aguja de Oro',
    metaDesc: 'Ajuste, entalle y reparaciones de vestidos en Avilés. Vestidos de diario, ceremonia, novia y prendas delicadas. 30 años de experiencia.',
    h1: 'Arreglos de vestidos en Avilés',
    intro: 'Un vestido que sienta bien marca la diferencia. En La Aguja de Oro arreglamos todo tipo de vestidos, desde los de uso diario hasta los más delicados, incluyendo vestidos de ceremonia.',
    body: [
      'Acortado y subida de dobladillo: si el vestido es demasiado largo, lo acortamos con el acabado adecuado para el tipo de tejido y el diseño de la prenda.',
      'Entalle lateral y ajuste de silueta: si el vestido queda ancho o necesita adaptarse mejor a tu figura, modificamos las costuras para que luzca como si estuviera hecho a medida.',
      'Ajuste de tirantes y escote: para que la prenda no se mueva y siempre esté en su sitio.',
      'Vestidos de novia y ceremonia: trabajamos con prendas delicadas con la misma atención y cuidado que el trabajo requiere. Antes de hacer cualquier modificación en una prenda especial, lo hablamos contigo detenidamente.',
      'Reparación de costuras y forros: si el forro está roto o las costuras se han abierto, lo reparamos con el mismo material o con el más parecido posible.',
    ],
    tipText: 'Para prendas de ceremonia o especiales, te recomendamos traer el vestido con tiempo suficiente antes de la fecha del evento.',
    relatedIds: ['pantalones', 'cremalleras', 'otros'],
  },
  'arreglos-de-chaquetas-y-abrigos': {
    title: 'Arreglos de Chaquetas y Abrigos',
    metaTitle: 'Arreglos de Chaquetas y Abrigos en Avilés | La Aguja de Oro',
    metaDesc: 'Arreglo de chaquetas, americanas y abrigos en Avilés. Acortado de mangas, entalle, reparación de forros y cambio de botones. 30 años de experiencia.',
    h1: 'Arreglos de chaquetas y abrigos en Avilés',
    intro: 'Las chaquetas y los abrigos son prendas de inversión. En La Aguja de Oro les damos una segunda vida con arreglos precisos que respetan el corte original de la prenda.',
    body: [
      'Acortado de mangas: una de las modificaciones más habituales en chaquetas y abrigos. Lo hacemos manteniendo el acabado y la forma original del puño.',
      'Entalle de abrigos y chaquetas: si la prenda te queda grande o quieres un corte más ajustado, modificamos los costados y la cintura para que luzca mejor.',
      'Reparación y sustitución de forros: los forros son lo que más se estropea con el uso. Si está roto o desgastado, lo reparamos o lo sustituimos por uno nuevo.',
      'Cambio de botones: si los botones están dañados o quieres cambiar el aspecto de la prenda, los sustituimos por otros del mismo tamaño o de tu elección.',
      'Ajuste de hombros y espalda: modificaciones más técnicas que se valoran individualmente según el tipo de chaqueta y el arreglo necesario.',
    ],
    tipText: 'Las chaquetas con estructura interna (americanas, blazers) requieren un trabajo más detallado. Las valoramos en el taller antes de darte el precio.',
    relatedIds: ['pantalones', 'cremalleras', 'reparaciones'],
  },
  'cambio-de-cremalleras': {
    title: 'Cambio de Cremalleras',
    metaTitle: 'Cambio de Cremalleras en Avilés | La Aguja de Oro',
    metaDesc: 'Cambio y reparación de cremalleras en todo tipo de prendas en Avilés. Pantalones, chaquetas, abrigos, bolsos y más. Sin cita previa.',
    h1: 'Cambio de cremalleras en Avilés',
    intro: 'Una cremallera rota no significa que haya que tirar la prenda. En La Aguja de Oro sustituimos cremalleras en todo tipo de prendas con precisión y rapidez.',
    body: [
      'Cremalleras de pantalón: uno de los arreglos más solicitados. Sustituimos la cremallera rota por una nueva del mismo tipo y medida.',
      'Cremalleras de chaqueta y abrigo: incluyendo cremalleras de dos sentidos y cierres más complejos. El trabajo se adapta al tipo de prenda.',
      'Cremalleras invisibles: muy habituales en vestidos y faldas. Las sustituimos manteniendo el acabado limpio y discreto.',
      'Cremalleras de bolsos: también trabajamos con bolsos y accesorios cuando la reparación es compatible con nuestro tipo de trabajo.',
      'Reparación del cursor o tirón: si la cremallera todavía funciona pero el cursor está roto o suelto, en muchos casos se puede arreglar sin necesidad de cambiar toda la cremallera.',
    ],
    tipText: 'El tipo de cremallera, el material de la prenda y el acceso al tejido determinan el coste. Lo valoramos en el taller.',
    relatedIds: ['pantalones', 'chaquetas-abrigos', 'reparaciones'],
  },
  'reparacion-de-ropa': {
    title: 'Reparación de Ropa',
    metaTitle: 'Reparación de Ropa en Avilés | La Aguja de Oro',
    metaDesc: 'Reparación de costuras, agujeros, desgarros y daños en todo tipo de ropa en Avilés. Atención personalizada. 30 años de experiencia.',
    h1: 'Reparación de ropa en Avilés',
    intro: 'Antes de tirar una prenda, merece la pena ver si se puede reparar. En La Aguja de Oro trabajamos con todo tipo de daños y desperfectos en ropa, por pequeños o complicados que sean.',
    body: [
      'Costuras abiertas o rotas: volvemos a coser las costuras que se han abierto con el mismo hilo o el más parecido disponible.',
      'Agujeros y desgarros: en muchos casos podemos reparar un agujero de forma que quede imperceptible o con muy poca visibilidad, según el tejido.',
      'Reparación de forros: los forros de abrigos, chaquetas y pantalones son los que más sufren con el uso diario. Los reparamos o sustituimos.',
      'Refuerzo de zonas desgastadas: codos, rodillas, axilas... las zonas que más rozan pueden reforzarse antes de que se rompan del todo.',
      'Reparaciones delicadas: telas finas, tejidos especiales, prendas de abrigo con relleno... las valoramos con cuidado antes de proponer la solución más adecuada.',
    ],
    tipText: 'Cuanto antes se repara un daño, más opciones hay. No esperes a que empeore: trae la prenda y lo valoramos.',
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
