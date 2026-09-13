import { readFileSync } from 'node:fs';

const images = {
  'great-britain': new URL('../../../../package-images/great-britain.b64', import.meta.url),
  'chongqing-chengdu': new URL('../../../../package-images/chongqing-chengdu.b64', import.meta.url),
  'bangkok': new URL('../../../../package-images/bangkok.b64', import.meta.url),
  'dubai': new URL('../../../../package-images/dubai.b64', import.meta.url),
  'hanoi-sapa': new URL('../../../../package-images/hanoi-sapa.b64', import.meta.url),
  'indochina-tricity': new URL('../../../../package-images/indochina-tricity.b64', import.meta.url),
  'bali': new URL('../../../../package-images/bali.b64', import.meta.url),
  'boracay': new URL('../../../../package-images/boracay.b64', import.meta.url),
  'singapore-malaysia': new URL('../../../../package-images/singapore-malaysia.b64', import.meta.url),
  'bangkok-city-escape': new URL('../../../../package-images/bangkok-city-escape.b64', import.meta.url)
};

export async function GET(_request, { params }) {
  const { slug } = await params;
  const file = images[slug];
  if (!file) return new Response('Not found', { status: 404 });

  try {
    const base64 = readFileSync(file, 'utf8').trim();
    return new Response(Buffer.from(base64, 'base64'), {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}
