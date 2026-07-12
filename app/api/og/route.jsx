import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Ứng dụng Đạo Cao Đài';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f172a', // Brand Dark Slate color
            padding: '40px 80px',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Subtle background decoration */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              right: '20px',
              bottom: '20px',
              border: '2px solid rgba(2, 132, 199, 0.2)',
              borderRadius: '12px',
              pointerEvents: 'none',
            }}
          />

          {/* CaoDaiON Official Logo */}
          <img
            src="https://www.caodaion.com/caodaion-logo.png"
            style={{
              width: '140px',
              height: '140px',
              marginBottom: '24px',
            }}
            alt="CaoDaiON Logo"
          />

          {/* Dynamic Page Title */}
          <div
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              color: '#f8fafc',
              fontFamily: 'sans-serif',
              lineHeight: 1.4,
              marginBottom: '20px',
              maxWidth: '90%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {title}
          </div>

          {/* Brand Subtitle Footer */}
          <div
            style={{
              fontSize: '24px',
              color: '#38bdf8', // Bright blue accent
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: '600',
            }}
          >
            CaoDaiON - Ứng dụng Đạo Cao Đài
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error('Error generating OG image:', e);
    return new Response(`Failed to generate dynamic OG image`, { status: 500 });
  }
}
