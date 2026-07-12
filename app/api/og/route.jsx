import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Lời tựa của Thánh Ngôn Hiệp Tuyển';
    const description = searchParams.get('description') || 'Trời đất sanh vạn vật, tuy hình chất khác nhau chớ Thiên tính vẫn đồng một cội. Con người là tối linh, mang xác phàm trược trọng nên dễ mờ ám chơn linh, phải noi theo Chánh Giáo...';

    // Slice description to fit the design nicely
    const slicedDescription = description.length > 180 
      ? description.substring(0, 177).trim() + '...' 
      : description;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            backgroundColor: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Radial Gradients Background (Alternative to CSS filter blur for Satori) */}
          <svg
            width="1200"
            height="630"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          >
            <defs>
              <radialGradient id="yellow-blob" cx="10%" cy="10%" r="50%">
                <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="blue-blob" cx="70%" cy="110%" r="60%">
                <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="red-blob" cx="95%" cy="30%" r="45%">
                <stop offset="0%" stopColor="#FECACA" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FECACA" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1200" height="630" fill="#ffffff" />
            <rect width="1200" height="630" fill="url(#yellow-blob)" />
            <rect width="1200" height="630" fill="url(#blue-blob)" />
            <rect width="1200" height="630" fill="url(#red-blob)" />
          </svg>

          {/* Left Column: Logo */}
          <div
            style={{
              width: '40%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 2,
            }}
          >
            <svg
              style={{
                width: '320px',
                height: '320px',
              }}
              viewBox="0 0 1920 1920"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1685.33" y="1280" width="213.333" height="725.332" transform="rotate(90 1685.33 1280)" fill="#4285F4"></rect>
              <path d="M601.607 853.332V1066.67L98.1416 1066.67L98.1416 853.332L601.607 853.332Z" fill="#FBBC05"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M1327.38 73.0755C1210.9 24.8311 1086.07 0 960.001 0L960.001 213.333C960.001 213.333 960.001 213.333 960.001 213.333C1372.37 213.333 1706.67 547.626 1706.67 959.998C1706.67 1372.37 1372.37 1706.66 960.001 1706.66C960.001 1706.66 960.001 1706.66 960 1706.66L960 1920C1086.07 1920 1210.9 1895.17 1327.38 1846.92C1443.85 1798.68 1549.68 1727.96 1638.82 1638.82C1727.97 1549.68 1798.68 1443.85 1846.92 1327.37C1895.17 1210.9 1920 1086.07 1920 959.999C1920 833.93 1895.17 709.096 1846.92 592.623C1798.68 476.151 1727.97 370.321 1638.82 281.177C1549.68 192.033 1443.85 121.32 1327.38 73.0755Z" fill="#EA4335"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M2.4076e-05 959.997C2.29393e-05 1128.51 44.3579 1294.06 128.615 1440L313.368 1333.33C247.834 1219.82 213.334 1091.06 213.334 959.997C213.334 828.93 247.835 700.172 313.368 586.664L959.998 959.997L959.999 959.997L313.368 586.664L128.615 479.998C44.3579 625.936 2.52127e-05 791.482 2.4076e-05 959.997Z" fill="#FBBC05"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M960.003 1493.33C854.519 1493.33 751.405 1462.05 663.699 1403.45C575.993 1344.84 507.634 1261.55 467.268 1164.1C426.901 1066.64 416.339 959.406 436.918 855.95C457.497 752.494 508.292 657.463 582.88 582.875C657.468 508.287 752.498 457.492 855.955 436.913C959.411 416.335 1066.65 426.897 1164.1 467.263C1261.55 507.63 1344.85 575.988 1403.45 663.695C1462.06 751.401 1493.33 854.515 1493.33 959.998L1280 959.998C1280 783.267 1136.73 639.998 960.003 639.998C783.272 639.998 640.004 783.267 640.004 959.998C640.004 1136.73 783.272 1280 960.003 1280V1493.33Z" fill="#4285F4"></path>
              <rect x="853.335" y="959.998" width="213.333" height="426.666" fill="#4285F4"></rect>
              <circle cx="960.002" cy="959.999" r="106.666" fill="#FBBC05"></circle>
              <circle cx="960.004" cy="1813.33" r="106.666" fill="#FBBC05"></circle>
              <circle cx="960.002" cy="1386.66" r="106.666" fill="#4285F4"></circle>
              <circle cx="1386.67" cy="959.999" r="106.666" fill="#EA4335"></circle>
              <circle cx="960.002" cy="106.666" r="106.666" fill="#4285F4"></circle>
              <circle cx="220.993" cy="1386.66" r="106.666" transform="rotate(60 220.993 1386.66)" fill="#EA4335"></circle>
              <circle cx="220.433" cy="533.014" r="106.666" transform="rotate(30 220.433 533.014)" fill="#4285F4"></circle>
            </svg>
          </div>

          {/* Right Column: Text */}
          <div
            style={{
              width: '60%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingRight: '80px',
              zIndex: 2,
            }}
          >
            {/* Tagline */}
            <div
              style={{
                fontFamily: 'sans-serif',
                fontSize: '18px',
                fontWeight: '700',
                color: '#2563EB',
                textTransform: 'uppercase',
                letterSpacing: '4px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#2563EB',
                  borderRadius: '2px',
                  marginRight: '16px',
                }}
              />
              Ứng dụng Đạo Cao Đài
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: 'serif',
                fontSize: '56px',
                fontWeight: '800',
                color: '#0F172A',
                margin: 0,
                lineHeight: 1.25,
                letterSpacing: '-1px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {title}
            </h1>

            {/* Subtitle / Description */}
            {slicedDescription ? (
              <p
                style={{
                  fontFamily: 'sans-serif',
                  fontSize: '22px',
                  fontWeight: '400',
                  color: '#475569',
                  margin: '20px 0 0 0',
                  lineHeight: 1.6,
                  display: 'flex',
                }}
              >
                {slicedDescription}
              </p>
            ) : null}

            {/* Footer URL Box */}
            <div
              style={{
                marginTop: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                padding: '12px 24px',
                borderRadius: '100px',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                alignSelf: 'flex-start',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: '8px' }}
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <span
                style={{
                  fontFamily: 'sans-serif',
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#0F172A',
                  letterSpacing: '0.5px',
                }}
              >
                caodaion.com
              </span>
            </div>
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
