function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

async function sendResendEmail(apiKey, payload) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  return { response, result };
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

    const inquiryPayload = {
      from: `Nice Travel & Tours Website <${from}>`,
      to: [to],
      subject: `New travel inquiry${subjectDestination}`,
      text: plainText,
      html
    };

    if (isEmail(cleanContact)) {
      inquiryPayload.reply_to = cleanContact;
    }

    const inquirySend = await sendResendEmail(apiKey, inquiryPayload);

    if (!inquirySend.response.ok) {
      console.error('Resend inquiry error:', inquirySend.result);
      return Response.json({ error: 'Unable to send inquiry right now. Please try again shortly.' }, { status: 502 });
    }

    // If the visitor supplied an email address, immediately confirm that their inquiry was received.
    if (isEmail(cleanContact)) {
      const acknowledgementText = [
        `Hi ${cleanName},`,
        '',
        'Thank you for contacting Nice Travel & Tours. We received your travel inquiry and will personally review the details you sent.',
        '',
        'Great customer service matters to us. We want you to feel looked after from your first question through the planning of your trip.',
        '',
        cleanDestination ? `Destination: ${cleanDestination}` : '',
        cleanDates ? `Travel dates: ${cleanDates}` : '',
        '',
        'We’ll be in touch with you soon.',
        '',
        'Nice Travel & Tours',
        'Your travel dream is our passion'
      ].filter(Boolean).join('\n');

      const acknowledgementHtml = `
        <div style="font-family:Arial,sans-serif;background:#f4f7fa;padding:28px;color:#122334">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #dde5ec">
            <div style="background:#0b1d2a;color:#ffffff;padding:24px 28px">
              <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#9fe1dc;font-weight:700">Nice Travel &amp; Tours</div>
              <h1 style="font-size:26px;margin:8px 0 0">We received your inquiry</h1>
            </div>
            <div style="padding:28px;font-size:15px;line-height:1.7">
              <p style="margin-top:0">Hi ${escapeHtml(cleanName)},</p>
              <p>Thank you for contacting Nice Travel &amp; Tours. We received your travel inquiry and will personally review the details you sent.</p>
              <div style="background:#eef8f7;border-left:4px solid #20b7aa;padding:16px 18px;margin:22px 0;border-radius:8px">
                <strong>Customer care is at the heart of how we work.</strong><br />We want you to feel looked after from your first question through the planning of your trip.
              </div>
              ${cleanDestination ? `<p><strong>Destination:</strong> ${escapeHtml(cleanDestination)}</p>` : ''}
              ${cleanDates ? `<p><strong>Travel dates:</strong> ${escapeHtml(cleanDates)}</p>` : ''}
              <p>We’ll be in touch with you soon.</p>
              <p style="margin-bottom:0"><strong>Nice Travel &amp; Tours</strong><br /><span style="color:#64748b">Your travel dream is our passion</span></p>
            </div>
          </div>
        </div>`;

      const acknowledgementPayload = {
        from: `Nice Travel & Tours <${from}>`,
        to: [cleanContact],
        reply_to: to,
        subject: 'We received your Nice Travel & Tours inquiry',
        text: acknowledgementText,
        html: acknowledgementHtml
      };

      const acknowledgementSend = await sendResendEmail(apiKey, acknowledgementPayload);
      if (!acknowledgementSend.response.ok) {
        // Do not fail the customer's original inquiry if only the acknowledgement fails.
        console.error('Resend acknowledgement error:', acknowledgementSend.result);
      }
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Unable to send inquiry right now. Please try again shortly.' }, { status: 500 });
  }
}
