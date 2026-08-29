import { BUSINESS } from '@/lib/business';
import { getWhatsAppUrl } from '@/lib/utils';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function FinalCTA() {
  return (
    <SectionWrapper background="dark">
      <div className="max-w-3xl mx-auto text-center">
        {/* Gold line */}
        <div
          className="w-16 h-px mx-auto mb-6"
          style={{ backgroundColor: 'var(--color-gold)' }}
          aria-hidden="true"
        />

        <AnimatedSection>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Trae tu prenda.{' '}
            <span style={{ color: 'var(--color-gold)' }}>
              La valoramos en el taller.
            </span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
            Sin cita previa. Sin tarifas sorpresa. Sin compromisos.
            Visítanos en {BUSINESS.address.city} o escríbenos por WhatsApp
            y te explicamos cómo funciona.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={1} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            aria-label="Escribir por WhatsApp a La Aguja de Oro"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Escribir por WhatsApp
          </a>
          <a
            href={BUSINESS.location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              backgroundColor: 'transparent',
              border: '1.5px solid rgba(255,255,255,0.3)',
              color: 'white',
            }}
            aria-label="Cómo llegar a La Aguja de Oro"
          >
            <MapIcon className="w-5 h-5" />
            Cómo llegar
          </a>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="btn"
            style={{
              backgroundColor: 'transparent',
              border: '1.5px solid rgba(255,255,255,0.3)',
              color: 'white',
            }}
          >
            <PhoneIcon className="w-5 h-5" />
            {BUSINESS.phone}
          </a>
        </AnimatedSection>

        <AnimatedSection delay={2} className="mt-8">
          <address className="not-italic text-sm text-gray-500">
            {BUSINESS.address.street} · {BUSINESS.address.postalCode} {BUSINESS.address.city}, {BUSINESS.address.province}
          </address>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function MapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}
