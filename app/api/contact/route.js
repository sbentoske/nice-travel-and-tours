export async function POST(request) {
  try {
    const { name, contact, destination, dates, travelers, message } = await request.json();

    if (!name || !contact) {
      return Response.json({ error: 'Name and contact are required.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    if (!apiKey || !to) {
      return Response.json({ error: 'Email service is not configured yet.' }, { status: 500 });
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: `Nice Travel & Tours Website <${from}>`,
        to: [to],
        subject: `New travel inquiry${destination ? `: ${destination}` : ''}`,
        text: [
          `Name: ${name}`,
          `Contact: ${contact}`,
          `Destination: ${destination || '-'}`,
          `Travel dates: ${dates || '-'}`,
          `Travelers: ${travelers || '-'}`,
          '',
          'Message:',
          message || '-'
        ].join('\n')
      })
    });

    const result = await resendResponse.json();
    if (!resendResponse.ok) {
      console.error('Resend error:', result);
      return Response.json({ error: 'Unable to send inquiry right now.' }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Unable to send inquiry right now.' }, { status: 500 });
  }
}
