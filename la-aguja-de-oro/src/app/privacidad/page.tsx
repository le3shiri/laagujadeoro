import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { BUSINESS } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Política de Privacidad | La Aguja de Oro',
  description: 'Política de privacidad de La Aguja de Oro, taller de arreglos de ropa en Avilés, Asturias.',
  alternates: { canonical: '/privacidad' },
  robots: { index: false },
};

export default function PrivacidadPage() {
  return (
    <SectionWrapper background="white">
      <div className="max-w-2xl mx-auto prose prose-sm">
        <h1 style={{ fontFamily: 'var(--font-display)' }}>Política de Privacidad</h1>

        <p className="text-[var(--color-muted)] text-sm italic mb-8">
          Esta política de privacidad está pendiente de revisión legal. Completa los datos marcados
          entre corchetes antes de publicar el sitio.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)' }}>Responsable del tratamiento</h2>
        <ul>
          <li><strong>Nombre:</strong> {BUSINESS.owner.name}</li>
          <li><strong>Nombre comercial:</strong> {BUSINESS.name}</li>
          <li><strong>Dirección:</strong> {BUSINESS.address.full}</li>
          <li><strong>Contacto:</strong> {BUSINESS.phone}</li>
          <li><strong>NIF:</strong> [COMPLETAR]</li>
        </ul>

        <h2 style={{ fontFamily: 'var(--font-display)' }}>Datos que recopilamos</h2>
        <p>
          Este sitio web no dispone de formularios de contacto ni sistemas de registro.
          Los datos que el usuario facilita voluntariamente a través de WhatsApp o por teléfono
          se usan exclusivamente para atender su consulta y prestar el servicio solicitado.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)' }}>Finalidad del tratamiento</h2>
        <p>
          Los datos facilitados se utilizan para gestionar consultas sobre arreglos de ropa,
          acordar precios y plazos de entrega, y comunicarse con el cliente en relación con el servicio.
          No se usan para comunicaciones comerciales ni se ceden a terceros.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)' }}>Base legal</h2>
        <p>
          El tratamiento se basa en la ejecución de un servicio solicitado por el usuario
          y el consentimiento del interesado al ponerse en contacto con nosotros.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)' }}>Derechos del interesado</h2>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión y portabilidad
          contactando directamente con nosotros en {BUSINESS.phone} o por escrito a {BUSINESS.address.full}.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)' }}>Cookies</h2>
        <p>
          Este sitio web puede utilizar cookies técnicas necesarias para su funcionamiento.
          Consulta nuestra <a href="/cookies" style={{ color: 'var(--color-gold)' }}>Política de Cookies</a> para más información.
        </p>

        <p className="text-[var(--color-muted)] text-xs mt-8">
          Última actualización: {new Date().getFullYear()}
        </p>
      </div>
    </SectionWrapper>
  );
}
