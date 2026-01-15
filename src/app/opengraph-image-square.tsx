import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'RUBBER 24 - Vývoj a výroba gumových komponentov na mieru';
export const size = {
  width: 1200,
  height: 1200,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '100px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '60px',
          }}
        >
          <div
            style={{
              width: '300px',
              height: '300px',
              background: '#1a1a1a',
              borderRadius: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <span
              style={{
                fontSize: '180px',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-12px',
              }}
            >
              24
            </span>
            <div
              style={{
                position: 'absolute',
                bottom: '50px',
                left: '60px',
                right: '60px',
                height: '16px',
                background: '#E63946',
                borderRadius: '8px',
              }}
            />
          </div>
        </div>

        {/* Text content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '96px',
              fontWeight: 900,
              color: '#1a1a1a',
              lineHeight: 1.1,
              marginBottom: '30px',
              display: 'flex',
            }}
          >
            RUBBER 24
          </div>
          <div
            style={{
              fontSize: '42px',
              color: '#6C757D',
              lineHeight: 1.4,
              maxWidth: '800px',
              display: 'flex',
              textAlign: 'center',
            }}
          >
            Vývoj a výroba gumových komponentov na mieru
          </div>
          <div
            style={{
              marginTop: '50px',
              fontSize: '36px',
              color: '#E63946',
              fontWeight: 600,
              display: 'flex',
            }}
          >
            rubber24.sk
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
