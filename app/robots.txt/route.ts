const BASE_URL = 'https://schoolhouselane.ai'

// Hand-written rather than using the MetadataRoute.Robots helper, because that
// helper can only emit the standard directives and we also want to advertise
// llms.txt. Unknown directives are ignored by crawlers per the robots.txt spec,
// so the Llms line is safe for conventional bots.
const BODY = `User-Agent: *
Allow: /
Disallow: /cursor-demo
Disallow: /page-2

Sitemap: ${BASE_URL}/sitemap.xml

# Structured summary of this site for AI assistants and LLMs
Llms: ${BASE_URL}/llms.txt
`

export function GET() {
  return new Response(BODY, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}
