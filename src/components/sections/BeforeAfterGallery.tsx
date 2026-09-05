import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getWhatsAppUrl } from '@/lib/utils';
import Link from 'next/link';

const PROCESS_SHOWCASE = [
  {
    step: '01',
    title: 'Evaluación y Medición',
    desc: 'Valoramos el tipo de tela, caída y ajuste exacto sobre tu cuerpo para marcar la línea perfecta.',
    image: '/images/hero-larbi.jpeg',
    alt: 'Larbi El Achiri cortando tela y tomando medidas en el taller La Aguja de Oro',
  },
  {
    step: '02',
    title: 'Ajuste con Maquinaria Industrial',
    desc: 'Uso de maquinaria profesional remalladora y de puntada invisible para acabados idénticos a los de fábrica.',
    image: '/images/hero-larbi2.jpeg',
    alt: 'Larbi ajustando máquina industrial para arreglos textiles',
  },
  {
    step: '03',
    title: 'Costura y Acabado Final',
    desc: 'Puntadas limpias, refuerzo de costuras y planchado profesional para que la prenda quede como recién comprada.',
    image: '/images/hero-larbi3.jpeg',
    alt: 'Larbi cosiendo prenda a máquina en La Aguja de Oro Avilés',
  },
];

export function BeforeAfterGallery() {
  return (
    <SectionWrapper background="white">
      <div className="text-center mb-12">
        <span className="section-label mx-auto">Precisión en cada paso</span>
        <AnimatedSection>
          <h2 className="mt-3" style={{ fontFamily: 'var(--font-display)' }}>
            Cómo transformamos tu prenda
          </h2>
          <p className="mt-3 text-[var(--color-muted)] max-w-xl mx-auto">
            Desde el corte inicial hasta la última costura. Cuidamos cada detalle con la técnica
            y el rigor aprendidos durante 30 años en la alta confección.
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROCESS_SHOWCASE.map((item, index) => (
          <AnimatedSection
            key={item.step}
            delay={(index + 1) as 1 | 2 | 3}
            className="group flex flex-col"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-md)] aspect-[4/5] bg-[var(--color-surface-2)] mb-5 border border-[var(--color-gold-border)]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                quality={80}
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 30vw, 360px"
              />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-[var(--color-gold-light)] font-bold text-xs px-3 py-1.5 rounded-lg border border-[var(--color-gold-border)]">
                Paso {item.step}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              {item.title}
            </h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">
              {item.desc}
            </p>
          </AnimatedSection>
        ))}
      </div>

      {/* Guarantee & Call to Action box */}
      <AnimatedSection className="mt-12">
        <div
          className="rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            backgroundColor: 'var(--color-gold-bg)',
            border: '1px solid var(--color-gold-border)',
          }}
        >
          <div className="text-center md:text-left max-w-xl">
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--color-text)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              ¿Tienes una prenda que no te queda como quieres?
            </h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Tráela a nuestro taller en Avilés. Te probamos la prenda, te asesoramos y te damos presupuesto exacto sin ningún compromiso.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm"
            >
              Consultar por WhatsApp
            </a>
            <Link href="/contacto" className="btn btn-outline text-sm">
              Ver taller y horarios
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
