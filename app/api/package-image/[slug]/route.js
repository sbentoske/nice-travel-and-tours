const images = {
  'great-britain': 'great-britain.b64',
  'chongqing-chengdu': 'chongqing-chengdu.b64',
  'bangkok': 'bangkok.b64',
  'dubai': 'dubai.b64',
  'hanoi-sapa': 'hanoi-sapa.b64',
  'indochina-tricity': 'indochina-tricity.b64',
  'bali': 'bali.b64',
  'boracay': 'boracay.b64',
  'singapore-malaysia': 'singapore-malaysia.b64',
  'bangkok-city-escape': 'bangkok-city-escape.b64'
};

export async function GET(_request, { params }) {
  const { slug } = await params;
  const file = images[slug];
  if (!file) return new Response('Not found', { status: 404 });

  try {
    const response = await fetch(`https://raw.githubusercontent.com/sbentoske/nice-travel-and-tours/main/package-images/${file}`, {
      cache: 'force-cache'
    });
    if (!response.ok) return new Response('Not found', { status: 404 });

    const base64 = (await response.text()).trim();
    return new Response(Buffer.from(base64, 'base64'), {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400'
      }
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}
