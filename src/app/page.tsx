import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { TrustStats } from '@/components/sections/TrustStats';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { SameDayBanner } from '@/components/sections/SameDayBanner';
import { BeforeAfterGallery } from '@/components/sections/BeforeAfterGallery';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { PricingPhilosophy } from '@/components/sections/PricingPhilosophy';
import { FaqSection } from '@/components/sections/FaqSection';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { BUSINESS } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Arreglos de Ropa en Avilés | La Aguja de Oro',
  description:
    'Arreglos y reparaciones de todo tipo de ropa en Avilés, Asturias. 30 años de experiencia. Pantalones, vestidos, chaquetas, cremalleras y más. Sin cita previa.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: BUSINESS.seo.siteUrl,
    title: 'La Aguja de Oro | Arreglos de Ropa en Avilés, Asturias',
    description:
      'Arreglos y reparaciones de todo tipo de ropa en Avilés, Asturias. 30 años de experiencia. Trae tu prenda y te valoramos el arreglo sin compromiso.',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['ClothingStore', 'ProfessionalService'],
  name: BUSINESS.name,
  description: BUSINESS.schema.description,
  url: BUSINESS.seo.siteUrl,
  telephone: BUSINESS.phone,
  image: [
    `${BUSINESS.seo.siteUrl}/images/tienda.jpeg`,
    `${BUSINESS.seo.siteUrl}/images/logo.png`,
    `${BUSINESS.seo.siteUrl}/images/hero-larbi.jpeg`,
  ],
  logo: `${BUSINESS.seo.siteUrl}/images/logo.png`,
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
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Asturias',
  },
  priceRange: BUSINESS.schema.priceRange,
  currenciesAccepted: BUSINESS.schema.currenciesAccepted,
  paymentAccepted: BUSINESS.schema.paymentAccepted,
  hasMap: BUSINESS.location.googleMapsUrl,
  sameAs: [],
  founder: {
    '@type': 'Person',
    name: BUSINESS.owner.name,
    jobTitle: 'Maestro sastre y artesano',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Arreglos de Ropa en Avilés',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Arreglos de Pantalones',
          description: 'Bajos de pantalón, entalle de cintura, cambio de cremallera y reparaciones.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Arreglos de Vestidos',
          description: 'Ajuste a medida, subida de dobladillos, entalles y vestidos de fiesta y ceremonia.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Chaquetas y Abrigos',
          description: 'Acortado de mangas, entalle de cuerpo, forros y cambio de botones.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cambio de Cremalleras',
          description: 'Sustitución de cremalleras en pantalones, abrigos, chaquetas, faldas y bolsos.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reparación de Ropa',
          description: 'Costuras abiertas, desgarros, agujeros y refuerzos en prendas desgastadas.',
        },
      },
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BUSINESS.name,
  url: BUSINESS.seo.siteUrl,
  inLanguage: 'es',
  description: BUSINESS.seo.defaultDescription,
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, websiteSchema]} />
      <Hero />
      <TrustStats />
      <ServicesGrid limit={6} showCTA />
      <SameDayBanner />
      <BeforeAfterGallery />
      <ExperienceSection />
      <PricingPhilosophy />
      <FaqSection showAll={false} />
      <FinalCTA />
    </>
  );
}
