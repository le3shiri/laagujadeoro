import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const VALUE_PROPS = [
  {
    icon: <TagIcon className="w-6 h-6" />,
    title: 'Precio justo y transparente',
    description:
      'Valoramos cada prenda en el taller y te damos el precio antes de empezar. Sin tarifas ocultas, sin sorpresas. El precio lo determina el arreglo, no una lista cerrada.',
  },
  {
    icon: <ClockIcon className="w-6 h-6" />,
    title: 'Tu tiempo importa',
    description:
      'El plazo de entrega lo acuerdas tú. Hacemos lo posible por respetar el tiempo acordado para que tengas tu prenda cuando la necesitas.',
  },
  {
    icon: <HandIcon className="w-6 h-6" />,
    title: 'Atención personal, siempre',
    description:
      'Larbi atiende personalmente cada arreglo. No hay intermediarios. La misma persona que recibe tu prenda es quien la trabaja y te la devuelve.',
  },
];

export function PricingPhilosophy() {
  return (
    <SectionWrapper background="gold-tint">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="section-label mx-auto">Cómo trabajamos</span>
          <AnimatedSection>
            <h2 className="mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Claro desde el primer momento
            </h2>
            <p className="mt-3 text-[var(--color-muted)] max-w-xl mx-auto">
              Cada arreglo es diferente. Por eso no publicamos precios fijos.
              Lo que sí te garantizamos es un presupuesto claro antes de comenzar.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {VALUE_PROPS.map((prop, index) => (
            <AnimatedSection
              key={prop.title}
              delay={(index + 1) as 1 | 2 | 3}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-[var(--shadow-sm)]"
              style={{ border: '1px solid var(--color-gold-border)' } as React.CSSProperties}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[var(--color-gold)]"
                style={{ backgroundColor: 'var(--color-gold-bg)', border: '1px solid var(--color-gold-border)' }}
                aria-hidden="true"
              >
                {prop.icon}
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {prop.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {prop.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

        {/* Process steps */}
        <AnimatedSection>
          <div
            className="rounded-xl p-8 bg-white shadow-[var(--shadow-sm)]"
            style={{ border: '1px solid var(--color-border)' }}
          >
            <h3 className="text-lg font-semibold mb-6 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              ¿Cómo es el proceso?
            </h3>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list">
              {[
                { step: '1', text: 'Traes tu prenda al taller' },
                { step: '2', text: 'Larbi la valora y te da el precio' },
                { step: '3', text: 'Acuerdas la fecha de entrega' },
                { step: '4', text: 'Recoges tu prenda como nueva' },
              ].map((item) => (
                <li
                  key={item.step}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0"
                    style={{ backgroundColor: 'var(--color-gold)' }}
                    aria-hidden="true"
                  >
                    {item.step}
                  </div>
                  <span className="text-sm text-[var(--color-muted)] leading-snug">{item.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}

function TagIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function HandIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m0 0l3.9-3.9" />
    </svg>
  );
}
