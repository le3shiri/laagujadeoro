import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { BUSINESS } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Aviso Legal | La Aguja de Oro',
  description: 'Aviso legal de La Aguja de Oro, taller de arreglos de ropa en Avilés, Asturias.',
  alternates: { canonical: '/aviso-legal' },
  robots: { index: false },
};

export default function AvisoLegalPage() {
  return (
    <SectionWrapper background="white">
      <div className="max-w-2xl mx-auto prose prose-sm">
        <h1 style={{ fontFamily: 'var(--font-display)' }}>Aviso Legal</h1>

        <p className="text-[var(--color-muted)] text-sm italic mb-8">
          Este aviso legal está pendiente de completar con los datos registrales del titular.
          Por favor, completa los datos marcados entre corchetes antes de publicar el sitio.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)' }}>Titular del sitio web</h2>
        <ul>
          <li><strong>Nombre o razón social:</strong> {BUSINESS.owner.name}</li>
          <li><strong>Nombre comercial:</strong> {BUSINESS.name}</li>
          <li><strong>Domicilio:</strong> {BUSINESS.address.full}</li>
          <li><strong>Teléfono:</strong> {BUSINESS.phone}</li>
          <li><strong>NIF / CIF:</strong> [COMPLETAR]</li>
        </ul>

        <h2 style={{ fontFamily: 'var(--font-display)' }}>Objeto y ámbito de aplicación</h2>
        <p>
          El presente aviso legal regula el acceso y el uso del sitio web de {BUSINESS.name},
          cuya finalidad es ofrecer información sobre los servicios de arreglos y reparaciones
          de ropa que se prestan en el taller situado en {BUSINESS.address.city}, Asturias.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)' }}>Propiedad intelectual</h2>
        <p>
          Los contenidos de este sitio web, incluyendo textos, imágenes y diseño, son propiedad
          de {BUSINESS.owner.name} o de sus legítimos titulares. Queda prohibida su reproducción
          total o parcial sin autorización previa.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)' }}>Responsabilidad</h2>
        <p>
          {BUSINESS.name} no se responsabiliza de la información contenida en sitios web de terceros
          a los que pueda enlazar este sitio. El uso de este sitio web es responsabilidad exclusiva
          del usuario.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)' }}>Ley aplicable</h2>
        <p>
          El presente aviso legal se rige por la legislación española vigente.
          Para cualquier controversia derivada del uso de este sitio web,
          las partes se someten a los juzgados y tribunales de Asturias.
        </p>

        <p className="text-[var(--color-muted)] text-xs mt-8">
          Última actualización: {new Date().getFullYear()}
        </p>
      </div>
    </SectionWrapper>
  );
}
