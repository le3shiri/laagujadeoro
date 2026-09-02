import type { Metadata } from 'next';
import Image from 'next/image';
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
    'Galería de fotos de La Aguja de Oro: taller en Avilés, maestro sastre en acción, patronaje, maquinaria y resultados de arreglos y confección.',
  alternates: {
    canonical: '/galeria',
  },
  openGraph: {
    title: 'Galería | La Aguja de Oro — Resultados Reales',
    description:
      'Ve el taller, la maquinaria y el trabajo de confección y arreglos de ropa en La Aguja de Oro en Avilés, Asturias.',
    url: `${BUSINESS.seo.siteUrl}/galeria`,
  },
};

const REAL_WORKSHOP_PHOTOS = [
  {
    title: 'Fachada y taller en Avilés',
    subtitle: 'Av. San Agustín, 7',
    src: '/images/tienda.jpeg',
    alt: 'Fachada exterior de La Aguja de Oro en Avilés con sus horarios y servicios',
    span: 'col-span-1 md:col-span-2 aspect-[16/10]',
  },
  {
    title: 'Corte y patronaje',
    subtitle: 'Técnica manual y medición precisa',
    src: '/images/hero-larbi.jpeg',
    alt: 'Larbi El Achiri cortando tela sobre la mesa de trabajo',
    span: 'col-span-1 aspect-[4/5]',
  },
  {
    title: 'Maquinaria industrial especializada',
    subtitle: 'Remallado y enhebrado de precisión',
    src: '/images/hero-larbi2.jpeg',
    alt: 'Larbi preparando la máquina de coser industrial',
    span: 'col-span-1 aspect-[4/5]',
  },
  {
    title: 'Costura y confección',
    subtitle: 'Más de 30 años de maestría',
    src: '/images/hero-larbi3.jpeg',
    alt: 'Larbi cosiendo una prenda a máquina en su taller',
    span: 'col-span-1 md:col-span-2 aspect-[16/10]',
  },
];

const SERVICE_GALLERY_SAMPLES = [
  { title: 'Arreglo de pantalones', desc: 'Bajos originales, entalles y cinturas', tag: 'Pantalones' },
  { title: 'Ajuste de vestidos', desc: 'Entallado lateral, tirantes y dobladillos', tag: 'Vestidos' },
  { title: 'Chaquetas y abrigos', desc: 'Arreglo de hombros, mangas y forros', tag: 'Sastrería' },
  { title: 'Cambio de cremalleras', desc: 'Cremalleras invisibles, metálicas y reforzadas', tag: 'Reparación' },
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
            <span className="section-label mb-3">Galería fotográfica</span>
            <h1 className="mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              El taller y la artesanía
              {' '}
              <span style={{ color: 'var(--color-gold)' }}>en imágenes</span>
            </h1>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Conoce las instalaciones de La Aguja de Oro en Avilés, el proceso de trabajo y la dedicación
              con la que cuidamos cada prenda.
            </p>
          </div>
        </div>
      </section>

      {/* Real Photos Section */}
      <SectionWrapper background="white">
        <AnimatedSection className="mb-8">
          <span className="section-label">Instalaciones y oficio</span>
          <h2 className="mt-2" style={{ fontFamily: 'var(--font-display)' }}>
            El taller por dentro y por fuera
          </h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Fotografías reales de nuestro espacio de trabajo y de Larbi El Achiri en plena labor.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_WORKSHOP_PHOTOS.map((photo, index) => (
            <AnimatedSection
              key={photo.src}
              delay={(Math.min(index + 1, 4)) as 1 | 2 | 3 | 4}
              className={`rounded-2xl overflow-hidden shadow-[var(--shadow-md)] relative group bg-[var(--color-surface-2)] border border-[var(--color-gold-border)] ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-gold-light)]">
                  {photo.subtitle}
                </span>
                <h3 className="text-lg font-semibold text-white mt-0.5">
                  {photo.title}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Services and craftsmanship types */}
      <SectionWrapper background="ivory">
        <AnimatedSection className="mb-8">
          <span className="section-label">Especialidades</span>
          <h2 className="mt-2" style={{ fontFamily: 'var(--font-display)' }}>
            Tipos de arreglos habituales
          </h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Trabajamos con todo tipo de telas: lana, seda, punto, cuero, vaquero y prendas técnicas.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_GALLERY_SAMPLES.map((sample, idx) => (
            <AnimatedSection
              key={sample.title}
              delay={(Math.min(idx + 1, 4)) as 1 | 2 | 3 | 4}
              className="card bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-block px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider rounded-md bg-[var(--color-gold-bg)] text-[var(--color-gold)] border border-[var(--color-gold-border)] mb-3">
                {sample.tag}
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {sample.title}
              </h3>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                {sample.desc}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

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
