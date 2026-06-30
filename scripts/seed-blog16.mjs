import postgres from 'postgres'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Load .env.local manually
const envPath = resolve(process.cwd(), '.env.local')
try {
  const envContent = readFileSync(envPath, 'utf8')
  for (const line of envContent.split('\n')) {
    const m = line.match(/^([^#=]+)=(.*)$/)
    if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '')
  }
} catch {}

const connectionString = process.env.POSTGRES_URL ?? process.env.DATABASE_URL
if (!connectionString) throw new Error('No POSTGRES_URL')

const sql = postgres(connectionString, { ssl: 'require', prepare: false })

const body = [
  {
    type: 'paragraph',
    dark: true,
    text: 'As a Creative Strategist who has spent two decades navigating the shifting tides of digital transformation, algorithmic targeting, and brand positioning, I\'ve noticed a curious pathology in modern boardrooms. We have become utterly obsessed with the measurable at the expense of the meaningful. In our rush to optimize the "marketing tail," we have largely forgotten how to architect the "strategic engine."'
  },
  {
    type: 'paragraph',
    text: 'If you want to understand how to fix this — how to truly build an ecosystem where creativity meets revenue growth — you don\'t look to Silicon Valley. You look to Mayfair. Specifically, to Savile Row.'
  },
  {
    type: 'paragraph',
    text: 'A few weeks ago, I found myself thinking about Martin Nicholls, the Master Cutter who spent years honing his craft at legendary houses like Gieves & Hawkes, Huntsman, and Norton & Sons, before founding Nicholls & Co. Watching a master cutter work is an exercise in profound behavioral science. It is a masterclass in what my friend Rory Sutherland calls the "psycho-logical" — the art of solving problems using human logic rather than narrow, linear spreadsheets.'
  },
  {
    type: 'paragraph',
    text: 'Modern business can learn three massive, high-leverage lessons from the specific expertise of cutters like Martin. Here is why the traditions of the Row are the ultimate defensive infrastructure for premium valuation today.'
  },
  {
    type: 'heading',
    text: '1. The Costly Signaling of the Chalk Line: Why Friction Builds Brand Value'
  },
  {
    type: 'paragraph',
    text: 'In digital commerce, we talk endlessly about "reducing friction." We want one-click checkouts, instant loading, and frictionless acquisition. But as Rory Sutherland famously observes, when you eliminate all friction, you often eliminate all perceived value.'
  },
  {
    type: 'paragraph',
    text: 'Think about the bespoke tailoring process. It requires over 30 distinct physical measurements. It demands multiple, mandatory in-person fittings over eight to ten weeks. It involves upwards of 80 hours of manual labor.'
  },
  {
    type: 'paragraph',
    text: 'By standard economic logic, this is highly inefficient. Why not use an algorithm and a 3D body scanner?'
  },
  {
    type: 'paragraph',
    text: 'Because of costly signaling. The sheer inefficiency of the process is what encodes the product with psychological value. The investment of time, the physical environment, and the individual attention of a cutter like Martin signal absolute, uncompromised quality. It alters the brain chemistry of the buyer. A suit bought via an algorithmic click is a commodity; a suit cut by Martin Nicholls is an event.'
  },
  {
    type: 'callout',
    text: 'The Commercial Lesson: If your brand infrastructure is entirely frictionless, it becomes entirely forgettable. Where are you intentionally building "meaningful friction" into your customer experience to elevate your perceived value?'
  },
  {
    type: 'image',
    src: '/images/blog-16-1.png',
    alt: 'A woman in an elegant green room, holding a teacup — editorial image evoking bespoke luxury',
    width: 1920,
    height: 800
  },
  {
    type: 'heading',
    text: '2. Solving for the Hidden Needs (The Master Cutter as Diagnostic Tool)'
  },
  {
    type: 'paragraph',
    text: 'In the corporate world, we tend to treat data as the complete truth. We look at Google Analytics or CRM fields and assume we understand the customer. But data only tells you what people are doing, never why.'
  },
  {
    type: 'paragraph',
    text: 'When a client sits down with a Master Cutter, the consultation isn\'t merely a mechanical gathering of numbers. A cutter is doing something far more sophisticated: they are practicing what we at Schoolhouse Lane call Relentless Inquiry.'
  },
  {
    type: 'rich-list',
    dark: false,
    items: [
      { lead: 'They watch ', text: 'how a person walks.' },
      { lead: 'They notice ', text: 'which shoulder sits slightly lower due to decades of sitting at a boardroom table.' },
      { lead: 'They ask ', text: 'about a person\'s lifestyle — not just "what do you do?" but "how do you move when you speak?"' }
    ]
  },
  {
    type: 'paragraph',
    text: 'Martin Nicholls didn\'t become a maestro capable of tailoring for films like Kingsman or dressing Oscar-winning actors by simply trusting the tape measure. He succeeded because a master cutter knows that a suit is an architectural illusion. By subtly shifting a seam by an eighth of an inch, or altering the drape of a chest canvas, a cutter can make a person look taller, leaner, and infinitely more authoritative.'
  },
  {
    type: 'paragraph',
    text: 'They are adjusting for human asymmetry. They are solving for the customer\'s unexpressed psychological desire — the need for presence, confidence, and status.'
  },
  {
    type: 'paragraph',
    text: 'Modern businesses rarely do this. They look at pre-made consumer segments and design products for an "average" customer who doesn\'t actually exist.'
  },
  {
    type: 'image',
    src: '/images/blog-16-0.png',
    alt: 'A man in a red velvet jacket drinking coffee surrounded by lush green plants — an image of considered luxury',
    width: 1920,
    height: 800
  },
  {
    type: 'heading',
    text: '3. The Power of Constraint: True Luxury Has Only One Address'
  },
  {
    type: 'paragraph',
    text: 'We live in an era of hyper-scalability. The dominant corporate narrative dictates that if you build something successful, you must immediately license it, franchise it, mass-produce it, and dilute it until the margin collapses.'
  },
  {
    type: 'paragraph',
    text: 'Look at how Norton & Sons or Nicholls & Co. approach scale. Norton & Sons famously boasts that their name has only ever been attached to the finest tailored clothing, with zero licenses and a singular physical address. Martin Nicholls scales his expertise not through automated replication, but through highly exclusive international Trunk Shows in New York, Hong Kong, and Japan.'
  },
  {
    type: 'paragraph',
    text: 'This isn\'t just stubborn traditionalism; it is brilliant behavioral economics. Infinite availability leads to commoditization and zero margin; strict scarcity leads to premium valuation and high margin.'
  },
  {
    type: 'blockquote',
    text: 'By intentionally limiting availability, you trigger deep-seated psychological triggers of scarcity and exclusivity. You turn a downstream marketing cost into an upstream engine for enterprise value. When availability is scarce, your margin becomes highly defensible.'
  },
  {
    type: 'heading',
    text: 'Bridging the Gap: From Savile Row to Creative Commerce'
  },
  {
    type: 'paragraph',
    text: 'At Schoolhouse Lane, we often say we exist at the intersection of creativity and revenue growth. We don\'t make pretty things that don\'t sell; we make things that sell beautifully.'
  },
  {
    type: 'paragraph',
    text: 'The genius of Savile Row is that it has never separated the two. The art is the business engine. The precise, hand-drafted pattern created by a cutter is the software-defined moat that protects the brand\'s premium valuation.'
  },
  {
    type: 'paragraph',
    text: 'Modern business doesn\'t need more optimization loops, more programmatic ad spend, or more algorithmic noise. It needs a return to the fundamentals of craft, deep behavioral empathy, and the courage to stand for something uncompromised.'
  },
  {
    type: 'paragraph',
    text: 'Sometimes, to build the ultimate digital growth engine, you have to start by learning how to wield the chalk.'
  }
]

const post = {
  slug: 'savile-row-premium-brand-value',
  title: 'The Alchemy of the Chalk Line: What Savile Row Teaches Modern Commerce About Value',
  category: 'Strategy',
  hero_image: '/images/blog-16-0.png',
  listing_image: '/images/blog-16-0.png',
  seo_title: 'What Savile Row Teaches Modern Brands About Premium Value',
  seo_description: 'A Creative Strategist\'s take on three behavioral lessons from Savile Row\'s master cutters that modern brands can apply to build premium valuation and revenue growth.',
  keywords: ['Savile Row', 'premium branding', 'brand value', 'behavioral economics', 'creative strategy', 'luxury brand strategy'],
  published_at: '2026-06-29',
  author_name: 'Darren McGrath',
  author_role: 'Partner',
  author_bio: 'A Cannes Lion-winning creative strategist with 25 years of experience building brands at the intersection of creativity and revenue growth.',
  author_image: '/images/blog/blog-author.webp',
  body: body,
  is_published: true,
}

try {
  const rows = await sql`
    INSERT INTO cms_posts (
      slug, title, category, hero_image, listing_image,
      seo_title, seo_description, keywords, published_at,
      author_name, author_role, author_bio, author_image,
      body, is_published
    ) VALUES (
      ${post.slug}, ${post.title}, ${post.category}, ${post.hero_image}, ${post.listing_image},
      ${post.seo_title}, ${post.seo_description}, ${post.keywords}, ${post.published_at},
      ${post.author_name}, ${post.author_role}, ${post.author_bio}, ${post.author_image},
      ${JSON.stringify(post.body)}::jsonb, ${post.is_published}
    )
    RETURNING id
  `
  console.log('✓ Blog post created, id =', rows[0].id)
} catch (err) {
  if (err.message?.includes('unique')) {
    const rows = await sql`
      UPDATE cms_posts SET
        title = ${post.title},
        category = ${post.category},
        hero_image = ${post.hero_image},
        listing_image = ${post.listing_image},
        seo_title = ${post.seo_title},
        seo_description = ${post.seo_description},
        keywords = ${post.keywords},
        published_at = ${post.published_at},
        author_name = ${post.author_name},
        author_role = ${post.author_role},
        author_bio = ${post.author_bio},
        author_image = ${post.author_image},
        body = ${JSON.stringify(post.body)}::jsonb,
        is_published = ${post.is_published},
        updated_at = NOW()
      WHERE slug = ${post.slug}
      RETURNING id
    `
    console.log('✓ Blog post updated, id =', rows[0].id)
  } else {
    throw err
  }
}

await sql.end()
