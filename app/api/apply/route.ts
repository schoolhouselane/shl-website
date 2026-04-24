import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Server configuration error — missing API key' }, { status: 500 })
  }
  const resend = new Resend(process.env.RESEND_API_KEY)

  const formData = await req.formData()

  const role     = formData.get('role') as string
  const name     = formData.get('name') as string
  const email    = formData.get('email') as string
  const phone    = formData.get('phone') as string | null
  const linkedin = formData.get('linkedin') as string | null
  const portfolio = formData.get('portfolio') as string | null
  const cover    = formData.get('cover') as string
  const cvFile   = formData.get('cv') as File | null

  if (!name || !email || !cover) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const attachments: { filename: string; content: Buffer }[] = []

  if (cvFile && cvFile.size > 0) {
    const bytes = await cvFile.arrayBuffer()
    attachments.push({
      filename: cvFile.name,
      content: Buffer.from(bytes),
    })
  }

  const html = `
    <h2 style="font-family:sans-serif;margin-bottom:24px">New Application — ${role}</h2>
    <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%">
      <tr><td style="padding:8px 16px 8px 0;color:#666;white-space:nowrap;vertical-align:top"><strong>Role</strong></td><td style="padding:8px 0">${role}</td></tr>
      <tr><td style="padding:8px 16px 8px 0;color:#666;white-space:nowrap;vertical-align:top"><strong>Full Name</strong></td><td style="padding:8px 0">${name}</td></tr>
      <tr><td style="padding:8px 16px 8px 0;color:#666;white-space:nowrap;vertical-align:top"><strong>Email</strong></td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
      ${phone ? `<tr><td style="padding:8px 16px 8px 0;color:#666;white-space:nowrap;vertical-align:top"><strong>Phone</strong></td><td style="padding:8px 0">${phone}</td></tr>` : ''}
      ${linkedin ? `<tr><td style="padding:8px 16px 8px 0;color:#666;white-space:nowrap;vertical-align:top"><strong>LinkedIn</strong></td><td style="padding:8px 0"><a href="${linkedin}">${linkedin}</a></td></tr>` : ''}
      ${portfolio ? `<tr><td style="padding:8px 16px 8px 0;color:#666;white-space:nowrap;vertical-align:top"><strong>Portfolio</strong></td><td style="padding:8px 0"><a href="${portfolio}">${portfolio}</a></td></tr>` : ''}
      <tr><td style="padding:8px 16px 8px 0;color:#666;white-space:nowrap;vertical-align:top"><strong>Cover Letter</strong></td><td style="padding:8px 0;white-space:pre-wrap">${cover}</td></tr>
      <tr><td style="padding:8px 16px 8px 0;color:#666;white-space:nowrap;vertical-align:top"><strong>CV</strong></td><td style="padding:8px 0">${cvFile && cvFile.size > 0 ? `${cvFile.name} (attached)` : 'Not provided'}</td></tr>
    </table>
  `

  const { error } = await resend.emails.send({
    from: 'Applications <careers@schoolhouselane.co>',
    to: 'projects@schoolhouselane.co',
    replyTo: email,
    subject: `New Application: ${role} — ${name}`,
    html,
    attachments,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send application' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
