export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const clearImages = {
  'dubai': '/images/packages/dubai.webp',
  'hanoi-sapa': '/images/packages/hanoi-sapa.webp',
  'indochina-tricity': '/images/packages/indochina-tricity.webp'
};

const images = {
  'great-britain': 'great-britain.b64',
  'chongqing-chengdu': 'chongqing-chengdu.b64',
  'bangkok': 'bangkok.b64',
  'bali': 'bali.b64',
  'boracay': 'boracay.b64',
  'singapore-malaysia': 'singapore-malaysia.b64',
  'bangkok-city-escape': 'bangkok-city-escape.b64'
};

export async function GET(request, { params }) {
  const { slug } = await params;

  if (clearImages[slug]) {
    return Response.redirect(new URL(clearImages[slug], request.url), 307);
  }

  const file = images[slug];
  if (!file) return new Response('Not found', { status: 404 });

  try {
    const response = await fetch(`https://raw.githubusercontent.com/sbentoske/nice-travel-and-tours/main/package-images/${file}`, {
      cache: 'no-store'
    });
    if (!response.ok) return new Response('Not found', { status: 404 });

    const base64 = (await response.text()).trim();
    const bytes = Buffer.from(base64, 'base64');
    const contentType = base64.startsWith('UklG') ? 'image/webp' : 'image/jpeg';

    return new Response(bytes, {
      headers: {
        'Content-Type': contentType,
        'Content-Length': String(bytes.length),
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    console.error('Package image load failed:', error);
    return new Response('Not found', { status: 404 });
  }
}
