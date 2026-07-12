import { ImageResponse } from '@vercel/og';
import React from 'react';

export const config = {
  runtime: 'nodejs',
};

export default async function handler(req, res) {
  try {
    // Construct a full URL using the host header to safely parse query parameters in Node.js
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const title = url.searchParams.get('title') || 'Ứng dụng Đạo Cao Đài';

    // Using React.createElement instead of JSX to avoid transpilation errors on Vercel
    const element = React.createElement(
      'div',
      {
        style: {
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
        },
      },
      // Subtle background decoration
      React.createElement('div', {
        style: {
          position: 'absolute',
          top: '20px',
          left: '20px',
          right: '20px',
          bottom: '20px',
          border: '2px solid rgba(2, 132, 199, 0.2)',
          borderRadius: '12px',
          pointerEvents: 'none',
        },
      }),
      // CaoDaiON Official Logo
      React.createElement('img', {
        src: 'https://www.caodaion.com/caodaion-logo.png',
        style: {
          width: '140px',
          height: '140px',
          marginBottom: '24px',
        },
        alt: 'CaoDaiON Logo',
      }),
      // Dynamic Page Title
      React.createElement(
        'div',
        {
          style: {
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
          },
        },
        title
      ),
      // Brand Subtitle Footer
      React.createElement(
        'div',
        {
          style: {
            fontSize: '24px',
            color: '#38bdf8', // Bright blue accent
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: '600',
          },
        },
        'CaoDaiON - Ứng dụng Đạo Cao Đài'
      )
    );

    const imageResponse = new ImageResponse(element, {
      width: 1200,
      height: 630,
    });

    // Set standard PNG headers
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=86400, must-revalidate');

    // Read the ImageResponse stream and write it directly to Node's HTTP response
    const reader = imageResponse.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
    res.end();
  } catch (e) {
    console.error('Error generating OG image:', e);
    res.status(500).send('Failed to generate dynamic OG image');
  }
}
