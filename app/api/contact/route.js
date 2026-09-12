function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(request) {
  try {
    const { name, contact, destination, dates, travelers, message, website } = await request.json();

    // Honeypot: real visitors never see or fill this field.
    if (website) return Response.json({ ok: true });

    const cleanName = String(name || '').trim().slice(0, 120);
    const cleanContact = String(contact || '').trim().slice(0, 180);
    const cleanDestination = String(destination || '').trim().slice(0, 180);
    const cleanDates = String(dates || '').trim().slice(0, 120);
    const cleanTravelers = String(travelers || '').trim().slice(0, 30);
    const cleanMessage = String(message || '').trim().slice(0, 4000);

    if (cleanName.length < 2 || cleanContact.length < 3) {
      return Response.json({ error: 'Please enter your name and a way to contact you.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    if (!apiKey || !to) {
      return Response.json({ error: 'Email service is not configured yet.' }, { status: 500 });
    }

    const subjectDestination = cleanDestination ? `: ${cleanDestination}` : '';
    const plainText = [
      `Name: ${cleanName}`,
      `Contact: ${cleanContact}`,
      `Destination: ${cleanDestination || '-'}`,
      `Travel dates: ${cleanDates || '-'}`,
      `Travelers: ${cleanTravelers || '-'}`,
      '',
      'Message:',
      cleanMessage || '-'
    ].join('\n');

    const html = `
      <div style="font-family:Arial,sans-serif;background:#f4f7fa;padding:28px;color:#122334">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #dde5ec">
          <div style="background:#0b1d2a;color:#ffffff;padding:24px 28px">
            <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#9fe1dc;font-weight:700">Nice Travel &amp; Tours</div>
            <h1 style="font-size:26px;margin:8px 0 0">New travel inquiry</h1>
          </div>
          <div style="padding:28px">
            <table style="width:100%;border-collapse:collapse;font-size:15px">
              <tr><td style="padding:9px 0;color:#64748b;width:145px">Name</td><td style="padding:9px 0;font-weight:700">${escapeHtml(cleanName)}</td></tr>
              <tr><td style="padding:9px 0;color:#64748b">Contact</td><td style="padding:9px 0">${escapeHtml(cleanContact)}</td></tr>
              <tr><td style="padding:9px 0;color:#64748b">Destination</td><td style="padding:9px 0">${escapeHtml(cleanDestination || '-')}</td></tr>
              <tr><td style="padding:9px 0;color:#64748b">Travel dates</td><td style="padding:9px 0">${escapeHtml(cleanDates || '-')}</td></tr>
              <tr><td style="padding:9px 0;color:#64748b">Travelers</td><td style="padding:9px 0">${escapeHtml(cleanTravelers || '-')}</td></tr>
            </table>
            <div style="margin-top:22px;border-top:1px solid #e4e9ee;padding-top:22px">
              <div style="font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:#64748b;font-weight:700;margin-bottom:8px">Trip notes</div>
              <div style="font-size:15px;line-height:1.7;white-space:pre-wrap">${escapeHtml(cleanMessage || '-')}</div>
            </div>
          </div>
        </div>
      </div>`;

    const payload = {
      from: `Nice Travel & Tours Website <${from}>`,
      to: [to],
      subject: `New travel inquiry${subjectDestination}`,
      text: plainText,
      html
    };

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanContact)) {
      payload.reply_to = cleanContact;
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await resendResponse.json();
    if (!resendResponse.ok) {
      console.error('Resend error:', result);
      return Response.json({ error: 'Unable to send inquiry right now. Please try again shortly.' }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Unable to send inquiry right now. Please try again shortly.' }, { status: 500 });
  }
}
