import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS } from '@/lib/business';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ZaraLogo, MangoLogo, ElCorteInglesLogo } from '@/components/ui/BrandLogos';

export function ExperienceSection() {
  return (
    <SectionWrapper background="ivory">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Image */}
        <AnimatedSection animation="fade-in">
          <div className="relative">
            {/* Photo frame */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] bg-[var(--color-surface-3)]"
              style={{ aspectRatio: '4/5', maxHeight: '540px' }}
            >
              <Image
                src="/images/hero-larbi3.jpeg"
                alt="Larbi El Achiri realizando arreglos de costura a máquina en su taller de Avilés"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              />
            </div>

            {/* Decorative gold frame offset */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl -z-10"
              style={{ border: '2px solid var(--color-gold)', opacity: 0.3 }}
              aria-hidden="true"
            />
          </div>
        </AnimatedSection>

        {/* Right: Content */}
        <div>
          <span className="section-label">Experiencia y trayectoria</span>
          <AnimatedSection delay={1}>
            <h2 className="mt-4 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Una vida dedicada
              {' '}
              <span style={{ color: 'var(--color-gold)' }}>
                a la precisión
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={2}>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              <strong className="text-[var(--color-text)]">{BUSINESS.owner.name}</strong> lleva más de{' '}
              <strong className="text-[var(--color-text)]">30 años</strong> trabajando en el mundo de la confección
              y los arreglos de ropa. Una trayectoria construida con dedicación, paciencia y un ojo muy entrenado
              para el detalle.
            </p>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              Durante aproximadamente <strong className="text-[var(--color-text)]">20 años</strong>, trabajó
              junto a grandes marcas de la moda como{' '}
              <strong className="text-[var(--color-text)]">
                {BUSINESS.owner.brands.join(', ')}
              </strong>
              , donde llegó a desempeñarse como{' '}
              <strong className="text-[var(--color-text)]">{BUSINESS.owner.role}</strong>, responsable de una
              línea de producción con más de{' '}
              <strong className="text-[var(--color-text)]">{BUSINESS.owner.teamSize} personas</strong>.
            </p>

            {/* Brand Logos mini badges */}
            <div className="flex flex-wrap items-center gap-3 my-5">
              <div className="px-3.5 py-1.5 rounded-lg bg-white border border-[var(--color-border)] shadow-xs flex items-center">
                <ZaraLogo className="h-4.5 w-auto text-[var(--color-text)]" />
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-white border border-[var(--color-border)] shadow-xs flex items-center">
                <MangoLogo className="h-3.5 w-auto text-[var(--color-text)]" />
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-white border border-[var(--color-border)] shadow-xs flex items-center">
                <ElCorteInglesLogo className="h-5 w-auto text-[var(--color-text)]" />
              </div>
            </div>

            <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
              Hoy, con toda esa experiencia, ofrece un servicio de arreglos y reparaciones de ropa
              completamente personalizado en su taller de <strong className="text-[var(--color-text)]">Avilés</strong>.
              Aquí cada prenda la trata él directamente, con el mismo cuidado y atención al detalle
              que ha marcado toda su carrera.
            </p>
          </AnimatedSection>

          {/* Key facts */}
          <AnimatedSection delay={3}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { number: '30+', label: 'años de experiencia' },
                { number: '20', label: 'años con grandes marcas' },
                { number: '+120', label: 'personas dirigidas' },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="text-center p-4 rounded-xl"
                  style={{
                    backgroundColor: 'var(--color-gold-bg)',
                    border: '1px solid var(--color-gold-border)',
                  }}
                >
                  <div className="stat-number text-2xl">{fact.number}</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1">{fact.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={4}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/experiencia" className="btn btn-primary">
                Conocer su trayectoria
              </Link>
              <Link href="/contacto" className="btn btn-outline">
                Visitar el taller
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </SectionWrapper>
  );
}

function PersonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}
