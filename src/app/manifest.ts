import type { MetadataRoute } from 'next';
import { BUSINESS } from '@/lib/business';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'La Aguja de Oro — Arreglos de Ropa en Avilés',
    short_name: 'La Aguja de Oro',
    description: BUSINESS.seo.defaultDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#FBF9F4',
    theme_color: '#B8902A',
    lang: 'es',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
