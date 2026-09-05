import { ImageResponse } from 'next/og';
import { BUSINESS } from '@/lib/business';

export const alt = 'La Aguja de Oro — Taller de Arreglos de Ropa en Avilés, Asturias';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#111111',
          padding: '60px 70px',
          color: '#ffffff',
          border: '8px solid #B8902A',
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#B8902A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
              }}
            >
              ✂️
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffffff' }}>
                La Aguja <span style={{ color: '#D4AF37' }}>de Oro</span>
              </span>
              <span style={{ fontSize: '16px', color: '#9CA3AF', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Sastrería & Costura Artesanal
              </span>
            </div>
          </div>
          <div
            style={{
              backgroundColor: 'rgba(184, 144, 42, 0.2)',
              border: '2px solid #B8902A',
              color: '#D4AF37',
              padding: '10px 24px',
              borderRadius: '9999px',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            Avilés, Asturias
          </div>
        </div>

        {/* Center Main Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '52px',
              fontWeight: 'bold',
              lineHeight: 1.15,
              color: '#FFFFFF',
            }}
          >
            Arreglos de Ropa en Avilés
          </div>
          <div style={{ fontSize: '24px', color: '#D1D5DB' }}>
            Más de 30 años de experiencia · Pantalones, vestidos, chaquetas, abrigos y cremalleras.
          </div>
        </div>

        {/* Bottom Footer Details */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '20px',
          }}
        >
          <div style={{ display: 'flex', gap: '28px', fontSize: '18px', color: '#9CA3AF' }}>
            <span>📍 Av. San Agustín, 7</span>
            <span>⚡ Sin cita previa</span>
            <span>📞 +34 654 151 623</span>
          </div>
          <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#D4AF37' }}>
            laagujadeoro.es
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
