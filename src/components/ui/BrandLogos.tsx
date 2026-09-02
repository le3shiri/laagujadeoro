import React from 'react';

/**
 * High-quality vector brand logos for Zara, Mango, and El Corte Inglés
 */

export function ZaraLogo({ className = 'h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 38"
      fill="currentColor"
      className={className}
      aria-label="Logo de ZARA"
      role="img"
    >
      <text
        x="50%"
        y="32"
        textAnchor="middle"
        fontFamily="'Didot', 'Bodoni MT', 'Cinzel', 'Playfair Display', Georgia, serif"
        fontSize="38"
        fontWeight="800"
        letterSpacing="0.28em"
        fill="currentColor"
      >
        ZARA
      </text>
    </svg>
  );
}

export function MangoLogo({ className = 'h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 32"
      fill="currentColor"
      className={className}
      aria-label="Logo de MANGO"
      role="img"
    >
      <text
        x="50%"
        y="25"
        textAnchor="middle"
        fontFamily="'Montserrat', 'Futura', 'Helvetica Neue', Arial, sans-serif"
        fontSize="24"
        fontWeight="900"
        letterSpacing="0.32em"
        fill="currentColor"
      >
        MANGO
      </text>
    </svg>
  );
}

export function ElCorteInglesLogo({ className = 'h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 48"
      className={className}
      aria-label="Logo de El Corte Inglés"
      role="img"
    >
      {/* Triangle Badge */}
      <polygon points="4,44 4,4 52,24" fill="#008450" />
      {/* Stylized Triangulated signature symbol */}
      <text
        x="18"
        y="29"
        fontFamily="'Brush Script MT', 'Dancing Script', 'Brush Script Std', cursive"
        fontSize="17"
        fontWeight="bold"
        fill="#ffffff"
        fontStyle="italic"
      >
        ECI
      </text>
      {/* Brand Text */}
      <text
        x="60"
        y="22"
        fontFamily="'Playfair Display', 'Baskerville', 'Georgia', serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="0.04em"
        fill="currentColor"
      >
        El Corte Inglés
      </text>
      <text
        x="60"
        y="37"
        fontFamily="sans-serif"
        fontSize="8"
        fontWeight="600"
        letterSpacing="0.18em"
        fill="currentColor"
        opacity="0.75"
      >
        GRANDES ALMACENES
      </text>
    </svg>
  );
}

export interface BrandItem {
  id: string;
  name: string;
  role: string;
  years: string;
  logo: React.ReactNode;
  description: string;
}

export const BRANDS_DATA: BrandItem[] = [
  {
    id: 'zara',
    name: 'Zara (Inditex)',
    role: 'Jefe de Línea de Producción',
    years: 'Confección industrial',
    logo: <ZaraLogo className="w-auto h-7 text-[var(--color-text)] group-hover:text-[var(--color-gold)] transition-colors" />,
    description: 'Control riguroso de calidad en producción en cadena, patronaje y remates de precisión para la firma insignia de Inditex.',
  },
  {
    id: 'mango',
    name: 'Mango',
    role: 'Confección y Acabados',
    years: 'Moda y sastrería',
    logo: <MangoLogo className="w-auto h-6 text-[var(--color-text)] group-hover:text-[var(--color-gold)] transition-colors" />,
    description: 'Técnicas avanzadas de patronaje, ensamblaje de prendas finas y confección de vestidos y sastrería femenina.',
  },
  {
    id: 'el-corte-ingles',
    name: 'El Corte Inglés',
    role: 'Sastrería y Arreglos',
    years: 'Alta confección',
    logo: <ElCorteInglesLogo className="w-auto h-9 text-[var(--color-text)] group-hover:text-[var(--color-gold)] transition-colors" />,
    description: 'Estándares de excelencia en sastrería tradicional, transformación de prendas a medida y atención al detalle más exigente.',
  },
];

export function BrandLogosShowcase({
  variant = 'cards',
  showDisclaimer = true,
}: {
  variant?: 'cards' | 'banner' | 'compact';
  showDisclaimer?: boolean;
}) {
  if (variant === 'banner') {
    return (
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 py-6 px-4">
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100 transform hover:scale-105 duration-300">
            <ZaraLogo className="h-7 w-auto text-[var(--color-text)]" />
          </div>
          <div className="w-px h-6 bg-[var(--color-border)] hidden sm:block" />
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100 transform hover:scale-105 duration-300">
            <MangoLogo className="h-6 w-auto text-[var(--color-text)]" />
          </div>
          <div className="w-px h-6 bg-[var(--color-border)] hidden sm:block" />
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100 transform hover:scale-105 duration-300">
            <ElCorteInglesLogo className="h-8 w-auto text-[var(--color-text)]" />
          </div>
        </div>
        {showDisclaimer && (
          <p className="text-center text-[0.7rem] text-[var(--color-muted-light)] mt-2">
            Trayectoria profesional histórica previa a la apertura de La Aguja de Oro.
          </p>
        )}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 py-4">
        <div className="px-5 py-3 rounded-xl bg-white shadow-sm border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-gold-border)] transition-colors">
          <ZaraLogo className="h-6 w-auto text-[var(--color-text)]" />
        </div>
        <div className="px-5 py-3 rounded-xl bg-white shadow-sm border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-gold-border)] transition-colors">
          <MangoLogo className="h-5 w-auto text-[var(--color-text)]" />
        </div>
        <div className="px-5 py-3 rounded-xl bg-white shadow-sm border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-gold-border)] transition-colors">
          <ElCorteInglesLogo className="h-7 w-auto text-[var(--color-text)]" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BRANDS_DATA.map((brand) => (
          <div
            key={brand.id}
            className="group p-6 rounded-2xl bg-white border border-[var(--color-border)] hover:border-[var(--color-gold-border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="h-14 flex items-center justify-start border-b border-[var(--color-surface-3)] pb-4 mb-4">
                {brand.logo}
              </div>
              <div className="inline-block text-[0.7rem] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[var(--color-gold-bg)] text-[var(--color-gold)] mb-2">
                {brand.role}
              </div>
              <h3 className="font-semibold text-base text-[var(--color-text)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {brand.name}
              </h3>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                {brand.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[0.75rem] text-[var(--color-muted-light)]">
              <span>Especialidad</span>
              <span className="font-medium text-[var(--color-text-secondary)]">{brand.years}</span>
            </div>
          </div>
        ))}
      </div>
      {showDisclaimer && (
        <p className="text-center text-xs text-[var(--color-muted-light)]">
          Mención de trayectoria profesional histórica. Marcas registradas pertenecientes a sus respectivos titulares.
        </p>
      )}
    </div>
  );
}
