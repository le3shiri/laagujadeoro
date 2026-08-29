import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQ_ITEMS } from '@/lib/faq';
import { BUSINESS } from '@/lib/business';
import { getWhatsAppUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | La Aguja de Oro, Avilés',
  description:
    'Preguntas frecuentes sobre los arreglos de ropa en La Aguja de Oro. Precios, plazos, tipos de arreglos, cómo contactar y cómo llegar al taller de Avilés.',
  alternates: {
    canonical: '/preguntas-frecuentes',
  },
  openGraph: {
    title: 'Preguntas Frecuentes | La Aguja de Oro — Avilés',
    description: 'Resuelve todas tus dudas sobre los arreglos de ropa en La Aguja de Oro, Avilés.',
    url: `${BUSINESS.seo.siteUrl}/preguntas-frecuentes`,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BUSINESS.seo.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Preguntas Frecuentes', item: `${BUSINESS.seo.siteUrl}/preguntas-frecuentes` },
  ],
};

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema]} />

      {/* Hero */}
      <section
        className="bg-[var(--color-surface-2)]"
        style={{ padding: 'clamp(2.5rem, 6vw, 4.5rem) 0' }}
      >
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Preguntas frecuentes' },
            ]}
            className="mb-6"
          />
          <div className="max-w-2xl">
            <span className="section-label mb-3">FAQ</span>
            <h1 className="mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Preguntas
              {' '}
              <span style={{ color: 'var(--color-gold)' }}>frecuentes</span>
            </h1>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Aquí encontrarás respuesta a las dudas más habituales sobre nuestros servicios,
              precios, plazos y cómo funciona el taller.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={FAQ_ITEMS} />

          <AnimatedSection className="mt-12 p-6 rounded-xl text-center"
            style={{ backgroundColor: 'var(--color-surface-2)', border: '1px solid var(--color-border)' } as React.CSSProperties}
          >
            <h2 className="text-xl mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              ¿No encuentras respuesta a tu pregunta?
            </h2>
            <p className="text-[var(--color-muted)] text-sm mb-5">
              Escríbenos por WhatsApp o pásate directamente por el taller. Sin cita previa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Escribir por WhatsApp
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
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}
