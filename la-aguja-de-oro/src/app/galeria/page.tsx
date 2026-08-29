import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { BUSINESS } from '@/lib/business';
import { getWhatsAppUrl } from '@/lib/utils';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Galería de Trabajos | La Aguja de Oro, Avilés',
  description:
    'Galería de arreglos y reparaciones realizados en La Aguja de Oro. Antes y después, detalles del trabajo y el taller de Avilés, Asturias.',
  alternates: {
    canonical: '/galeria',
  },
  openGraph: {
    title: 'Galería | La Aguja de Oro — Resultados Reales',
    description:
      'Ve el resultado de los arreglos de ropa realizados en La Aguja de Oro. Antes/después, detalles de trabajo y taller en Avilés.',
    url: `${BUSINESS.seo.siteUrl}/galeria`,
  },
};

// Photo placeholders — replace with real images in /public/images/galeria/
const GALLERY_SECTIONS = [
  {
    id: 'antes-despues',
    title: 'Antes y después',
    description: 'El resultado habla por sí solo.',
    items: [
      { alt: 'Arreglo de pantalón: antes y después del ajuste de bajo', filename: 'pantalon-antes-despues.jpg' },
      { alt: 'Ajuste de vestido: entalle lateral antes y después', filename: 'vestido-antes-despues.jpg' },
      { alt: 'Reparación de chaqueta: forro roto antes y nuevo después', filename: 'chaqueta-antes-despues.jpg' },
      { alt: 'Cambio de cremallera en abrigo: antes y después', filename: 'abrigo-cremallera-antes-despues.jpg' },
    ],
  },
  {
    id: 'taller',
    title: 'El taller',
    description: 'El espacio donde se trabaja cada prenda.',
    items: [
      { alt: 'Interior del taller La Aguja de Oro en Avilés', filename: 'taller-interior.jpg' },
      { alt: 'Máquina de coser profesional en el taller', filename: 'maquina-de-coser.jpg' },
      { alt: 'Herramientas de costura en el taller de La Aguja de Oro', filename: 'herramientas-taller.jpg' },
      { alt: 'Larbi El Achiri trabajando en el taller de Avilés', filename: 'larbi-taller.jpg' },
    ],
  },
  {
    id: 'detalles',
    title: 'Detalles del trabajo',
    description: 'La precisión en cada puntada.',
    items: [
      { alt: 'Detalle de costura perfecta en pantalón arreglado', filename: 'detalle-costura.jpg' },
      { alt: 'Detalle de cremallera nueva instalada en prenda', filename: 'detalle-cremallera.jpg' },
      { alt: 'Detalle de bajo de vestido ajustado a medida', filename: 'detalle-bajo-vestido.jpg' },
      { alt: 'Detalle de reparación de forro en chaqueta', filename: 'detalle-forro.jpg' },
    ],
  },
];

export default function GaleriaPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-[var(--color-surface-2)]"
        style={{ padding: 'clamp(2.5rem, 6vw, 4.5rem) 0' }}
      >
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Galería' },
            ]}
            className="mb-6"
          />
          <div className="max-w-2xl">
            <span className="section-label mb-3">Trabajos reales</span>
            <h1 className="mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              El trabajo habla
              {' '}
              <span style={{ color: 'var(--color-gold)' }}>por sí solo</span>
            </h1>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Aquí puedes ver algunos de los arreglos y reparaciones realizados en La Aguja de Oro.
              Fotos del taller, del proceso y de los resultados antes y después.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery sections */}
      {GALLERY_SECTIONS.map((section, sectionIndex) => (
        <SectionWrapper
          key={section.id}
          background={sectionIndex % 2 === 0 ? 'white' : 'ivory'}
          id={section.id}
        >
          <AnimatedSection className="mb-8">
            <h2 style={{ fontFamily: 'var(--font-display)' }}>{section.title}</h2>
            <p className="mt-2 text-[var(--color-muted)]">{section.description}</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {section.items.map((item, index) => (
              <AnimatedSection
                key={item.filename}
                delay={(Math.min(index + 1, 4)) as 1 | 2 | 3 | 4}
                className="rounded-xl overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow"
              >
                <div
                  className="img-placeholder bg-[var(--color-surface-3)]"
                  style={{ aspectRatio: '1', minHeight: '160px' }}
                  role="img"
                  aria-label={item.alt}
                >
                  <div className="flex flex-col items-center justify-center w-full h-full text-center p-3 gap-1">
                    <CameraIcon className="w-6 h-6 text-[var(--color-muted-light)] opacity-50" />
                    <span className="text-[0.6rem] text-[var(--color-muted-light)]">
                      {item.filename}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </SectionWrapper>
      ))}

      {/* CTA to add real photos */}
      <SectionWrapper background="gold-tint" size="sm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            ¿Quieres ver el resultado de tu arreglo?
          </h2>
          <p className="text-[var(--color-muted)] mb-6">
            Trae tu prenda al taller. Valoramos el arreglo en persona y te decimos el precio antes de empezar.
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
            <Link href="/contacto" className="btn btn-outline">
              Ver cómo llegar
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
  );
}
