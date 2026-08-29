import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

// Before/After pairs — replace with real images in /public/images/before-after/
const BEFORE_AFTER_ITEMS = [
  {
    id: 'pantalon-1',
    label: 'Arreglo de pantalón',
    beforeAlt: 'Pantalón antes del arreglo, con bajo demasiado largo',
    afterAlt: 'Pantalón después del arreglo, con bajo ajustado a la medida',
  },
  {
    id: 'vestido-1',
    label: 'Ajuste de vestido',
    beforeAlt: 'Vestido antes del ajuste, con costados anchos',
    afterAlt: 'Vestido después del ajuste, entallado correctamente',
  },
  {
    id: 'chaqueta-1',
    label: 'Reparación de chaqueta',
    beforeAlt: 'Chaqueta antes de la reparación, con forro roto',
    afterAlt: 'Chaqueta después de la reparación, con forro nuevo impecable',
  },
];

export function BeforeAfterGallery() {
  return (
    <SectionWrapper background="white">
      <div className="text-center mb-12">
        <span className="section-label mx-auto">Resultados reales</span>
        <AnimatedSection>
          <h2 className="mt-3" style={{ fontFamily: 'var(--font-display)' }}>
            El trabajo habla por sí solo
          </h2>
          <p className="mt-3 text-[var(--color-muted)] max-w-xl mx-auto">
            La mejor manera de demostrar la calidad es mostrando el resultado.
            Cada prenda recibe la misma atención y cuidado.
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BEFORE_AFTER_ITEMS.map((item, index) => (
          <AnimatedSection
            key={item.id}
            delay={(index + 1) as 1 | 2 | 3}
            className="space-y-2"
          >
            <p className="text-center text-sm font-semibold text-[var(--color-text)]">
              {item.label}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {/* Before */}
              <div className="before-after-card">
                <div
                  className="img-placeholder bg-[var(--color-surface-3)]"
                  style={{ aspectRatio: '3/4', minHeight: '200px' }}
                  role="img"
                  aria-label={item.beforeAlt}
                >
                  <div className="flex items-center justify-center w-full h-full text-center p-4">
                    <span className="text-xs text-[var(--color-muted-light)]">
                      Antes<br />
                      <em className="text-[0.65rem]">/images/before-after/{item.id}-before.jpg</em>
                    </span>
                  </div>
                </div>
                <span className="before-after-label">Antes</span>
              </div>
              {/* After */}
              <div className="before-after-card">
                <div
                  className="img-placeholder bg-[var(--color-surface-3)]"
                  style={{ aspectRatio: '3/4', minHeight: '200px' }}
                  role="img"
                  aria-label={item.afterAlt}
                >
                  <div className="flex items-center justify-center w-full h-full text-center p-4">
                    <span className="text-xs text-[var(--color-muted-light)]">
                      Después<br />
                      <em className="text-[0.65rem]">/images/before-after/{item.id}-after.jpg</em>
                    </span>
                  </div>
                </div>
                <span className="before-after-label gold">Después</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-10 text-center">
        <p className="text-sm text-[var(--color-muted)] italic">
          Aquí irán las fotos reales del trabajo de Larbi. Las imágenes antes/después son el
          mejor argumento de venta para un taller de arreglos.
        </p>
      </AnimatedSection>
    </SectionWrapper>
  );
}
