import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'RUBBER 24 - Vývoj a výroba gumových komponentov na mieru';
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
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Left side - Logo */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          {/* Large "24" Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '200px',
                height: '200px',
                background: '#1a1a1a',
                borderRadius: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <span
                style={{
                  fontSize: '120px',
                  fontWeight: 900,
                  color: '#ffffff',
                  letterSpacing: '-8px',
                }}
              >
                24
              </span>
              <div
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '40px',
                  right: '40px',
                  height: '12px',
                  background: '#E63946',
                  borderRadius: '6px',
                }}
              />
            </div>
          </div>
        </div>

        {/* Right side - Text content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flex: 1.5,
            marginLeft: '60px',
          }}
        >
          <div
            style={{
              fontSize: '96px',
              fontWeight: 900,
              color: '#1a1a1a',
              lineHeight: 1.1,
              marginBottom: '20px',
              display: 'flex',
            }}
          >
            RUBBER 24
          </div>
          <div
            style={{
              fontSize: '36px',
              color: '#6C757D',
              lineHeight: 1.4,
              maxWidth: '600px',
              display: 'flex',
            }}
          >
            Vývoj a výroba gumových komponentov na mieru
          </div>
          <div
            style={{
              marginTop: '40px',
              fontSize: '28px',
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
