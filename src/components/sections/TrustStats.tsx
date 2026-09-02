import { BUSINESS } from '@/lib/business';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { BrandLogosShowcase } from '@/components/ui/BrandLogos';

const TRUST_STATS = [
  {
    number: '30+',
    label: 'años de experiencia',
    detail: 'en arreglos y confección',
  },
  {
    number: '20',
    label: 'años con grandes marcas',
    detail: 'Zara · Mango · El Corte Inglés',
  },
  {
    number: '+120',
    label: 'personas bajo su dirección',
    detail: 'como Jefe de línea',
  },
  {
    number: '100%',
    label: 'atención personalizada',
    detail: 'Larbi valora cada prenda en persona',
  },
];

export function TrustStats() {
  return (
    <SectionWrapper background="ivory" size="sm">
      <div className="text-center mb-10">
        <span className="section-label mx-auto">
          Por qué confiar en nosotros
        </span>
        <AnimatedSection>
          <h2 className="mt-3" style={{ fontFamily: 'var(--font-display)' }}>
            Una trayectoria que habla por sí sola
          </h2>
          <p className="mt-3 text-[var(--color-muted)] max-w-xl mx-auto">
            Detrás de cada arreglo hay décadas de experiencia profesional, precisión y dedicación al trabajo bien hecho.
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] rounded-xl overflow-hidden shadow-[var(--shadow-sm)]">
        {TRUST_STATS.map((stat, index) => (
          <AnimatedSection
            key={stat.label}
            delay={(index + 1) as 1 | 2 | 3 | 4}
            className="bg-white p-6 md:p-8 text-center flex flex-col items-center justify-center"
          >
            <div className="stat-number mb-1">{stat.number}</div>
            <div className="font-semibold text-[var(--color-text)] text-sm md:text-base mb-1">
              {stat.label}
            </div>
            <div className="text-xs text-[var(--color-muted)] leading-relaxed">
              {stat.detail}
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Brand logos showcase */}
      <AnimatedSection className="mt-10 pt-6 border-t border-[var(--color-border)]">
        <div className="text-center mb-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
            Trayectoria profesional junto a referentes de la moda
          </span>
        </div>
        <BrandLogosShowcase variant="compact" showDisclaimer={false} />
      </AnimatedSection>
    </SectionWrapper>
  );
}
