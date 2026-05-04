import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { fullName, email, companySize, service } = await req.json()

  const { error } = await resend.emails.send({
    from: 'Demo Requests <onboarding@resend.dev>',
    to: 'projects@schoolhouselane.co',
    replyTo: email,
    subject: `New demo request from ${fullName}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px">
        <h2 style="font-size:20px;font-weight:900;text-transform:uppercase;margin:0 0 24px">New demo request</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#777;width:140px">Name</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">${fullName}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#777">Email</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#777">Company size</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">${companySize}</td></tr>
          <tr><td style="padding:10px 0;color:#777">Service interest</td><td style="padding:10px 0;font-weight:600">${service}</td></tr>
        </table>
      </div>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
