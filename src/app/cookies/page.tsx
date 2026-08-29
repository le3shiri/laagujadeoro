import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

export const metadata: Metadata = {
  title: 'Política de Cookies | La Aguja de Oro',
  description: 'Política de cookies de La Aguja de Oro, taller de arreglos de ropa en Avilés, Asturias.',
  alternates: { canonical: '/cookies' },
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <SectionWrapper background="white">
      <div className="max-w-2xl mx-auto prose prose-sm">
        <h1 style={{ fontFamily: 'var(--font-display)' }}>Política de Cookies</h1>

        <h2 style={{ fontFamily: 'var(--font-display)' }}>¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo
          cuando los visitas. Permiten que el sitio recuerde información sobre tu visita para mejorar
          tu experiencia.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)' }}>Cookies que usamos</h2>
        <p>
          Este sitio web puede utilizar cookies técnicas estrictamente necesarias para su correcto
          funcionamiento. Estas cookies no recogen información personal identificable y no requieren
          consentimiento.
        </p>
        <p>
          En caso de que en el futuro se implementen cookies analíticas o de terceros
          (como Google Analytics o Google Maps), esta política se actualizará para reflejarlo
          y se solicitará el consentimiento correspondiente.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)' }}>Control de cookies</h2>
        <p>
          Puedes configurar tu navegador para bloquear o eliminar cookies. Consulta la ayuda
          de tu navegador para ver cómo gestionarlas. Ten en cuenta que deshabilitar cookies
          puede afectar al funcionamiento del sitio.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)' }}>Más información</h2>
        <p>
          Para más información sobre el tratamiento de datos, consulta nuestra{' '}
          <a href="/privacidad" style={{ color: 'var(--color-gold)' }}>Política de Privacidad</a>{' '}
          o nuestro <a href="/aviso-legal" style={{ color: 'var(--color-gold)' }}>Aviso Legal</a>.
        </p>

        <p className="text-[var(--color-muted)] text-xs mt-8">
          Última actualización: {new Date().getFullYear()}
        </p>
      </div>
    </SectionWrapper>
  );
}
