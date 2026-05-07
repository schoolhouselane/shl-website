// ─── Content model ────────────────────────────────────────────────────────────

export type ContentBlock =
  | { type: 'paragraph'; text?: string; parts?: Array<{ text: string; bold?: boolean }>; dark?: boolean }
  | { type: 'heading'; text: string }
  | { type: 'blockquote'; text: string }
  | { type: 'image'; src: string; alt: string; width?: number; height?: number }
  | { type: 'image-pair'; src1: string; alt1: string; src2: string; alt2: string }
  | { type: 'callout'; text: string }
  | { type: 'rich-list'; items: Array<{ lead: string; text: string; leadBold?: boolean }>; dark?: boolean }
  | { type: 'ordered-list'; items: Array<{ lead: string; text: string }> }
  | { type: 'quote-banner'; src: string; text: string }

// ─── Shared types ─────────────────────────────────────────────────────────────

export interface RelatedArticle {
  slug: string
  title: string
  excerpt: string
  thumbnail: string
}

export interface BlogAuthor {
  name: string
  role: string
  bio: string
  image: string
}

export interface JournalCard {
  slug: string
  title: string
  excerpt?: string
  image: string
}

export interface BlogPost {
  slug: string
  title: string
  category: string
  heroImage: string
  listingImage?: string
  seoTitle?: string
  seoDescription?: string
  keywords?: string[]
  publishedAt: string
  author: BlogAuthor
  body?: ContentBlock[]
  relatedArticles: RelatedArticle[]
  journalCards: JournalCard[]
}

// ─── Authors ──────────────────────────────────────────────────────────────────

const DARREN: BlogAuthor = {
  name: 'Darren McGrath',
  role: 'Partner',
  bio: 'A Cannes Lion-winning creative strategist with 25 years of experience building brands and leading teams across global markets.',
  image: '/images/blog/blog-author.png',
}

// ─── Blog posts ───────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  // ── Article 1 ──────────────────────────────────────────────────────────────
  {
    slug: 'remote-working-whatsapp',
    title: 'Remote Working is Not the Problem, WhatsApp Is',
    category: 'Leadership',
    heroImage: '/images/blog/blog-hero.png',
    listingImage: '/images/blog/blog-telephones.jpg',
    seoTitle: 'Remote Working is Not the Problem, WhatsApp Is — Schoolhouse Lane',
    seoDescription:
      "In 25 years as an ad man, Darren McGrath has seen every shift in how teams work. His conclusion: remote work isn't the productivity problem — instant messaging is.",
    keywords: ['remote work', 'leadership', 'communication', 'WhatsApp', 'team productivity', 'brand strategy', 'Schoolhouse Lane'],
    publishedAt: '2026-03-20',
    author: DARREN,
    body: [
      {
        type: 'paragraph',
        dark: true,
        text: "In my twenty five years as an ad man, I've witnessed countless shifts in how we work. Technologies come and go, platforms evolve, and yet the central challenge of leadership remains strikingly human: how to communicate clearly, align teams, and drive real productivity.",
      },
      {
        type: 'paragraph',
        dark: true,
        text: "The pandemic accelerated remote and hybrid work models, and since then, much has been said about the productivity pitfalls of working from home. But I've come to believe we're diagnosing the wrong issue. Remote work isn't the problem, instant messaging is.",
      },
      {
        type: 'paragraph',
        dark: true,
        text: `Slack, Teams, WhatsApp — these tools were designed for speed. But in our quest for efficiency, we've unwittingly created a culture of low touch, low context communication that often leads to the abdication of responsibility. A quick "FYI" or a thumbs-up emoji doesn't equal clarity. It doesn't build trust. And it certainly doesn't drive accountability.`,
      },
      { type: 'blockquote', text: "We've confused short messaging with clear communication." },
      { type: 'heading', text: 'The Illusion of Communication' },
      {
        type: 'paragraph',
        text: `Think about it: how often have you seen a critical project update buried in a chat thread? Or watched a decision get "made" because someone sent a "👍" without truly engaging? This isn't collaboration, it's communication theater.`,
      },
      {
        type: 'paragraph',
        text: "When messages are stripped of tone, context, and consequence, responsibility diffuses. People assume someone else will act. Follow up becomes optional. And leaders are left with blind spots — places where things fall apart not because of malice, but because of ambiguity.",
      },
      { type: 'heading', text: 'Leadership in the Age of Low Touch Communication' },
      {
        type: 'paragraph',
        text: "This is where emotional intelligence isn't just a nice to have, it's the core competency of modern leadership. Leaders today must be able to:",
      },
      {
        type: 'callout',
        text: `\u00b7 Read between the lines of silent chats and unanswered threads.\n\u00b7 Sense disengagement even when the "online" indicator is green.\n\u00b7 Create clarity where tools create clutter.\n\u00b7 Restore human connection where technology has made interaction transactional.`,
      },
      {
        type: 'paragraph',
        text: `Productivity blind spots now hide in plain sight: in the unread channel, the hastily closed ticket, the assumption that "someone's got it." It's not that people aren't working, it's that they're working in the dark, without the context, clarity, or confidence they need to truly own their outcomes.`,
      },
      { type: 'image', src: '/images/blog/blog-article-body.png', alt: 'Remote working and communication' },
      { type: 'heading', text: 'From Low Touch to High Clarity' },
      {
        type: 'paragraph',
        text: "At Schoolhouse Lane, we work with leadership teams to build brands and businesses that are aligned from the inside out. And alignment doesn't happen in a chat window. It happens in intentional conversation, structured collaboration, and a shared understanding of what clarity actually looks like.",
      },
      { type: 'paragraph', text: "Here's what we advise our clients:" },
      {
        type: 'ordered-list',
        items: [
          { lead: 'Default to deliberate communication.', text: ' Replace FYIs with clear asks. Replace assumptions with confirmation.' },
          { lead: "Reinforce the 'why.'", text: " Context is everything. Don't just share the what, explain the why, again and again." },
          { lead: 'Create rituals of reconnection.', text: ' Use video. Pick up the phone. Host regular syncs that are about more than task updates.' },
          { lead: 'Model ownership.', text: " As a leader, your communication sets the tone. Choose clarity over speed, especially when it matters most." },
        ],
      },
      { type: 'heading', text: 'The Way Forward' },
      {
        type: 'paragraph',
        text: "Remote work is here to stay — and that's a good thing. It offers flexibility, access to talent, and freedom from the confines of location. But we must not let the tools designed to connect us become the very things that disconnect us from purpose, clarity, and each other.",
      },
      {
        type: 'paragraph',
        text: "The next generation of leadership won't be measured by who responds the fastest, but by who communicates the clearest. Who builds trust, not just threads. Who sees the human behind the handle.",
      },
      {
        type: 'paragraph',
        text: "Because at the end of the day, productivity isn't about presence — it's about purpose. And purpose can't be summed up in a DM.",
      },
      {
        type: 'paragraph',
        text: "Schoolhouse Lane helps leaders build brands and teams that are aligned, accountable, and resilient in the face of change. If you're ready to turn communication from a blind spot into a superpower, let's talk.",
      },
      { type: 'quote-banner', src: '/images/blog/blog-quote-bg.png', text: 'The bridge between confusion and clarity is communication' },
    ],
    relatedArticles: [
      { slug: 'compounding-effect', title: 'The Compounding Effect Nobody Talks About', excerpt: "Performance marketing has a ceiling. Once you've saturated your addressable audience...", thumbnail: '/images/blog/blog-related-1.png' },
      { slug: 'creative-commerce', title: 'Creative Commerce: Where Imagination Meets Revenue', excerpt: "Performance marketing has a ceiling. Once you've saturated your addressable audience...", thumbnail: '/images/blog/blog-related-2.png' },
      { slug: 'brand-measurable-asset', title: 'Why Brand Is Your Most Measurable Asset', excerpt: "Performance marketing has a ceiling. Once you've saturated your addressable audience...", thumbnail: '/images/blog/blog-related-3.png' },
    ],
    journalCards: [
      { slug: 'creative-commerce', title: 'Creative Commerce: Where Imagination Meets Revenue', excerpt: "We don't just build identities. We build ecosystems where every touchpoint accelerates business growth.", image: '/images/blog/blog-journal-1.png' },
      { slug: 'brand-measurable-asset', title: 'Why Brand Is Your Most Measurable Asset', excerpt: "Great brands aren't built on campaigns. They're built on the belief that what you make is worth making.", image: '/images/blog/blog-journal-2.png' },
      { slug: 'compounding-effect', title: 'The Compounding Effect Nobody Talks About', excerpt: "Performance marketing has a ceiling. Once you've saturated your addressable audience, brand is the only lever left.", image: '/images/blog/blog-journal-3.png' },
    ],
  },

  // ── Article 2 — from Figma ──────────────────────────────────────────────────
  {
    slug: 'is-ai-killing-seo',
    title: "Is AI Killing SEO? Here's What 15 Years in the Trenches Has Taught Me",
    category: 'SEO',
    heroImage: '/images/blog/seo-hero.jpg',
    seoTitle: "Is AI Killing SEO? Here's What 15 Years in the Trenches Has Taught Me — Schoolhouse Lane",
    seoDescription:
      "After 15 years in SEO, Darren McGrath has seen every death-of-SEO prediction come and go. Here's why AI isn't killing SEO — and what you should actually do about it.",
    keywords: ['SEO', 'AI', 'search', 'digital marketing', 'brand visibility', 'Schoolhouse Lane', 'content strategy'],
    publishedAt: '2026-04-10',
    author: { ...DARREN, image: '/images/blog/seo-author.jpg' },
    body: [
      {
        type: 'paragraph',
        dark: true,
        text: "I've been doing this long enough to have heard the death knell for SEO more times than I care to count.",
      },
      {
        type: 'paragraph',
        dark: true,
        text: 'Social media was going to make search irrelevant. Facebook Ads were the new golden ticket. Voice search was the revolution. Now it\'s AI writing the final eulogy.',
      },
      {
        type: 'paragraph',
        dark: true,
        text: "I'm still here. SEO is still here. And the fundamentals haven't changed nearly as much as the panic merchants would have you believe.",
      },
      { type: 'heading', text: 'The Pattern I Keep Seeing' },
      {
        type: 'paragraph',
        text: 'Every technological shift brings the same hot takes and rushed pivots from people who mistake change for extinction.',
      },
      {
        type: 'paragraph',
        text: "What I've learned after fifteen years is this: the fundamentals rarely die. They just put on different clothes.",
      },
      { type: 'blockquote', text: "AI hasn't killed SEO. It's forced it to share the stage." },
      { type: 'heading', text: "What's Actually Happening" },
      {
        type: 'paragraph',
        text: "Yes, behaviour is shifting. People are asking ChatGPT questions they used to type into Google. They're getting instant answers instead of scrolling through ten results pages.",
      },
      {
        type: 'paragraph',
        text: "But search never was just Google. It was always about visibility -- being found when someone needs what you offer. The mechanism changes. The principle doesn't.",
      },
      {
        type: 'paragraph',
        text: 'Right now, your content needs to work for two readers: the human who still Googles "best project management tools," and the AI system scraping and citing sources to answer that same question.',
      },
      {
        type: 'paragraph',
        text: 'Traditional search still dominates discovery. Google processes billions of queries daily. People still click through. Buying decisions still happen after multiple touchpoints.',
      },
      {
        type: 'paragraph',
        text: "What's changed is you can no longer afford to ignore how AI interprets your presence.",
      },
      { type: 'image', src: '/images/blog/seo-inline-1.jpg', alt: 'AI and SEO landscape' },
      { type: 'heading', text: 'Your Website Is No Longer the Whole Story' },
      {
        type: 'paragraph',
        text: 'For years, SEO meant obsessing over your site -- your meta tags, backlinks, domain authority.',
      },
      {
        type: 'paragraph',
        text: "AI doesn't just rank pages. It synthesises information from everywhere: your website, reviews on Trustpilot, Reddit discussions, your YouTube channel, forum threads, that podcast interview you did last year.",
      },
      {
        type: 'paragraph',
        text: 'The conversation about your business happens whether you control it or not. AI is listening to all of it.',
      },
      {
        type: 'paragraph',
        text: "For founders and freelancers, this is liberating. You don't need to outspend competitors on content farms. You need clarity, consistency, and a clear point of view that shows up wherever your audience is looking.",
      },
      { type: 'heading', text: "The Credibility Question Hasn't Changed" },
      {
        type: 'paragraph',
        text: 'Nobody trusts sketchy operations. When AI decides which businesses to reference, it gravitates toward signals of legitimacy: real addresses, proper contact information, functional websites, coherent brand messaging.',
      },
      {
        type: 'paragraph',
        text: "I've watched startups handicap themselves by cutting corners -- personal Gmail addresses, hidden home addresses, checkout processes that feel off.",
      },
      {
        type: 'paragraph',
        text: 'When visibility depends on trust signals, professionalism becomes infrastructure.',
      },
      { type: 'heading', text: "The Real Danger Isn't AI -- It's Paralysis" },
      {
        type: 'paragraph',
        text: `Founders read conflicting advice. They're told SEO is dead, then told it's essential. They hear they must be "AI-native" but don't know what that means. So they freeze.`,
      },
      { type: 'paragraph', text: "The answer isn't either/or. It's both." },
      {
        type: 'paragraph',
        text: 'SEO builds long-term authority -- the slow compound interest of visibility. AI optimisation builds present-tense relevance. You need both. They reinforce each other.',
      },
      { type: 'image', src: '/images/blog/seo-inline-2.jpg', alt: 'SEO and AI working together' },
      { type: 'heading', text: "What I'd Do If I Were Starting Today" },
      {
        type: 'rich-list',
        items: [
          { lead: "Don't abandon SEO fundamentals.", text: " Quality content and sensible technical hygiene still matter. They're just table stakes now." },
          { lead: "Don't chase every AI trend.", text: ' Understand where your audience actually looks and be present there.' },
          { lead: 'Prioritise clarity over cleverness.', text: ' AI systems reward clear, direct information. So do humans.' },
          { lead: 'Build credibility deliberately. Real business foundations.', text: " Signals that tell both algorithms and people you're legitimate." },
          { lead: 'Stay consistent.', text: ' Most businesses fail at this simple requirement.' },
        ],
      },
      { type: 'heading', text: "The Work Hasn't Changed As Much As You Think" },
      {
        type: 'paragraph',
        text: "I've watched Google Dance, Panda, Penguin, Hummingbird, BERT, and now AI overviews. Each sparked panic. None killed the underlying game.",
      },
      {
        type: 'paragraph',
        text: "What's always mattered: being useful, building genuine authority, maintaining consistent signals, understanding how people look for solutions.",
      },
      { type: 'paragraph', text: 'The mechanics evolve. The principles endure.' },
      { type: 'heading', text: "SEO Isn't Dead. It's Growing Up." },
      {
        type: 'paragraph',
        text: 'AI is forcing a return to fundamentals: be credible, be clear, be consistent. Build things people actually want to find.',
      },
      { type: 'callout', text: "That's not the death of SEO. That's what it was supposed to be all along." },
    ],
    relatedArticles: [
      { slug: 'brand-measurable-asset', title: 'Why Brand Is Your Most Measurable Asset', excerpt: "In my twenty five years as an ad man, I've witnessed countless shifts in how we work.", thumbnail: '/images/blog/seo-related-1.jpg' },
      { slug: 'creative-commerce', title: 'Eddie Jordan Foundation. Engaging in delusion or fuelling change?', excerpt: "Sitting in Soho while London's finest scurry through their morning I find myself listening to Keith O'Loughlin", thumbnail: '/images/blog/seo-related-2.jpg' },
      { slug: 'compounding-effect', title: 'Creative Commerce. Where Imagination Meets Revenue', excerpt: 'In the relentless pursuit of growth, many modern enterprises have fallen into the "efficiency trap."', thumbnail: '/images/blog/seo-related-3.jpg' },
    ],
    journalCards: [
      { slug: 'creative-commerce', title: 'Creative Commerce: Where Imagination Meets Revenue', excerpt: "We don't just build identities. We build ecosystems where every touchpoint accelerates business growth.", image: '/images/blog/seo-related-3.jpg' },
      { slug: 'brand-measurable-asset', title: 'Why Brand Is Your Most Measurable Asset', excerpt: "The companies that treat brand as strategy not decoration consistently outperform on enterprise value. Here's why.", image: '/images/blog/seo-journal-2.jpg' },
      { slug: 'remote-working-whatsapp', title: 'Remote Working is Not the Problem, WhatsApp Is', excerpt: "In my twenty five years as an ad man, I've witnessed countless shifts in how we work. Technologies come and go...", image: '/images/blog/seo-journal-3.jpg' },
    ],
  },

  // ── Article 3 — CEO's Blueprint ────────────────────────────────────────────
  {
    slug: 'ceos-blueprint-ai-marketing',
    title: "The CEO's Blueprint: 5 Strategic Mandates for Integrating AI into Marketing",
    category: 'AI Strategy',
    heroImage: '/images/blog/ceo-blueprint-hero.jpg',
    listingImage: '/images/blog/ceo-blueprint-hero.jpg',
    seoTitle: "The CEO's Blueprint: 5 Strategic Mandates for Integrating AI into Marketing — Schoolhouse Lane",
    seoDescription: "For the modern CEO, the AI conversation has shifted from 'what is it?' to 'how does it accelerate enterprise value?' Here are five mandates every leader needs.",
    keywords: ['AI marketing', 'CEO strategy', 'brand strategy', 'AI integration', 'vision-led growth', 'Schoolhouse Lane'],
    publishedAt: '2026-04-10',
    author: DARREN,
    body: [
      {
        type: 'paragraph',
        dark: true,
        text: "For the modern CEO, the conversation around AI has shifted from \"what is it?\" to \"how does it accelerate enterprise value?\" In an era of algorithmic noise, simply using AI to produce more content is a recipe for mediocrity. At Schoolhouse Lane, we believe the most powerful engine for growth isn't a spreadsheet or a prompt—it's a question.",
      },
      {
        type: 'paragraph',
        dark: true,
        parts: [
          { text: 'To transform brand from a downstream marketing cost into an upstream strategic engine, CEOs must move beyond efficiency and toward ' },
          { text: 'Vision-Led Value Creation.', bold: true },
        ],
      },
      {
        type: 'paragraph',
        dark: true,
        text: 'Here are the five mandates for any CEO looking to integrate AI into their marketing strategy to drive outsized returns.',
      },
      { type: 'image', src: '/images/blog/blog-brand-inline-1.jpg', alt: 'AI and marketing strategy' },
      { type: 'heading', text: '1. Shift AI Strategy "Upstream"' },
      {
        type: 'paragraph',
        text: 'Most organizations use AI as a "decoration" tool—a way to generate assets faster once decisions are already made. A strategic CEO must move AI integration "upstream" to the boardroom level.',
      },
      {
        type: 'callout',
        text: '· The Action: Use AI-accelerated insights during the discovery phase to unearth latent potential within the organization.\n· The Goal: Turn brand into a high-leverage strategic asset that drives premium valuations during exits or capital raises.',
      },
      { type: 'heading', text: '2. Move from Efficiency to Vision-Led Value' },
      {
        type: 'paragraph',
        text: "Efficiency—doing the same things faster—is a race to the bottom. AI's true power lies in its ability to architect the infrastructure that allows a company to live its most ambitious stories.",
      },
      {
        type: 'callout',
        text: "· The Action: Audit your marketing spend to ensure AI is being used to design new products and business divisions, not just \"feed the machine\".\n· The Goal: Transition from \"good enough\" to the exceptional.",
      },
      { type: 'heading', text: '3. Implement a "Creative Commerce" Ecosystem' },
      {
        type: 'paragraph',
        text: "Individual AI assets are meaningless if they don't accelerate the business goal. CEOs must demand a methodology where imagination meets revenue.",
      },
      {
        type: 'callout',
        text: '· The Action: Ensure your team is building a "Creative Commerce" ecosystem where every AI touchpoint, from initial strategy to the final checkout, is unified under a single organising principle.\n· The Goal: Make your most intangible asset your most measurable advantage.',
      },
      { type: 'heading', text: '4. Champion Diversity of Thought as a Competitive Advantage' },
      {
        type: 'paragraph',
        text: 'In an automated world, the "human" becomes the ultimate differentiator. AI can optimise, but it cannot replicate the emotional intelligence and altruistic view required to capture hearts and minds.',
      },
      {
        type: 'callout',
        text: '· The Action: Hire and partner with teams that prioritise the emotional, the ethical, and the real.\n· The Goal: Align profit with purpose and people to build a brand that captures market share and long-term loyalty.',
      },
      { type: 'heading', text: '5. Practice Conscious Capitalism through Technology' },
      {
        type: 'paragraph',
        text: 'AI should not just be a tool for margin improvement; it should be a force for good.',
      },
      {
        type: 'callout',
        text: "· The Action: Mandate that AI integration aligns with the company's core values and ethical standards.\n· The Goal: Build a brand that isn't just an industry player, but a pioneering force that delivers outsized returns through ethical innovation.",
      },
      { type: 'heading', text: 'The Verdict: There is No Cure for Curiosity' },
      {
        type: 'paragraph',
        text: "As a CEO, your role is to ensure that AI serves the relentless inquiry and rigorous strategy of your business. By following these five mandates, you ensure that AI doesn't just create noise—it creates enterprise value.",
      },
      {
        type: 'paragraph',
        parts: [{ text: 'Is your brand-led strategy architected for the AI era?', bold: true }],
      },
      {
        type: 'blockquote',
        text: 'Schoolhouse Lane: The Brand-Led Value Creation Agency. We bridge the gap between imagination and business success.',
      },
      { type: 'image', src: '/images/blog/blog-brand-inline-2.jpg', alt: 'Brand-led value creation' },
    ],
    relatedArticles: [
      { slug: 'brand-measurable-asset', title: 'Why Brand Is Your Most Measurable Asset', excerpt: "In the traditional corporate world, brand is often dismissed as a downstream marketing cost.", thumbnail: '/images/blog/blog-related-1.png' },
      { slug: 'remote-working-whatsapp', title: 'Remote Working is Not the Problem, WhatsApp Is', excerpt: "In my twenty five years as an ad man, I've witnessed countless shifts in how we work.", thumbnail: '/images/blog/blog-telephones.jpg' },
      { slug: 'creative-commerce', title: 'Creative Commerce: Where Imagination Meets Revenue', excerpt: "We don't just build identities. We build ecosystems where every touchpoint accelerates business growth.", thumbnail: '/images/blog/blog-creative-commerce.jpg' },
    ],
    journalCards: [
      { slug: 'is-ai-killing-seo', title: "Is AI Killing SEO? Here's What 15 Years in the Trenches Has Taught Me", excerpt: "I've been doing this long enough to have heard the death knell for SEO more times than I care to count.", image: '/images/blog/seo-hero.jpg' },
      { slug: 'brand-measurable-asset', title: 'Why Brand Is Your Most Measurable Asset', excerpt: "The companies that treat brand as strategy not decoration consistently outperform on enterprise value. Here's why.", image: '/images/blog/blog-brand-asset.jpg' },
      { slug: 'remote-working-whatsapp', title: 'Remote Working is Not the Problem, WhatsApp Is', excerpt: "In my twenty five years as an ad man, I've witnessed countless shifts in how we work. Technologies come and go...", image: '/images/blog/blog-telephones.jpg' },
    ],
  },

  // ── Article 4 — AI for the Ambitious SME ──────────────────────────────────
  {
    slug: 'ai-for-the-ambitious-sme',
    title: 'AI for the Ambitious SME: 5 Steps to Compete with the Giants',
    category: 'AI Strategy',
    heroImage: '/images/blog/blog5-hero.webp',
    listingImage: '/images/blog/blog5-listing.webp',
    seoTitle: 'AI for the Ambitious SME: 5 Steps to Compete with the Giants — Schoolhouse Lane',
    seoDescription: 'For SME owners, AI is a leveller. Discover 5 steps to move AI upstream in your business — from decorating to strategising — and compete with enterprise giants.',
    keywords: ['AI for SME', 'brand strategy', 'creative commerce', 'SME growth', 'AI marketing', 'vision-led value', 'Schoolhouse Lane'],
    publishedAt: '2026-05-05',
    author: DARREN,
    body: [
      {
        type: 'paragraph',
        parts: [
          { text: 'For an SME business owner, the arrival of AI-powered creative production is a leveling of the playing field. In the past, “upstream” strategic branding was the luxury of enterprise giants. Today, AI provides the leverage to transform your brand from a downstream marketing cost into an engine for growth.' },
        ],
      },
      {
        type: 'paragraph',
        text: 'At Schoolhouse Lane, we believe the most powerful engine for growth isn’t a spreadsheet—it’s a question. For an SME, the question isn’t “how do I save money with AI?” but “how do I use AI to create a measurable advantage?”.',
      },
      {
        type: 'paragraph',
        parts: [
          { text: 'Here is how SME owners can strategically integrate AI to drive ' },
          { text: 'Vision-Led Value Creation', bold: true },
          { text: '.' },
        ],
      },
      { type: 'image', src: '/images/blog/blog5-inline1.webp', alt: 'AI-powered creative production for SMEs', width: 988, height: 773 },
      { type: 'heading', text: '1. Stop “Decorating” and Start Strategizing' },
      {
        type: 'paragraph',
        text: 'Most SMEs use AI to generate social media posts or images for decisions they’ve already made. To win, you must move AI “upstream”.',
      },
      {
        type: 'rich-list',
        dark: true,
        items: [
          { lead: 'The Action: ', text: 'Use AI to help unearth the latent potential within your organisation—finding the unique “curiosity” that sets you apart from competitors.' },
          { lead: 'The Goal: ', text: 'Build a brand that captures hearts and minds, not just market share.' },
        ],
      },
      { type: 'heading', text: '2. Focus on Creative Commerce' },
      {
        type: 'paragraph',
        text: 'For an SME, every dollar must perform. You don’t just need a “look”; you need an ecosystem.',
      },
      {
        type: 'rich-list',
        dark: true,
        items: [
          { lead: 'The Action: ', text: 'Implement a Creative Commerce methodology where every AI-generated touchpoint—from your brand story to your checkout page—accelerates your business goals.' },
          { lead: 'The Goal: ', text: 'Turn your brand into a tangible business strategy that drives revenue.' },
        ],
      },
      { type: 'heading', text: '3. Prioritize the Human Connection' },
      {
        type: 'paragraph',
        text: 'In a world of “algorithmic noise,” being human is your competitive advantage.',
      },
      {
        type: 'rich-list',
        dark: true,
        items: [
          { lead: 'The Action: ', text: 'Use AI to handle the heavy lifting of production, but ensure the final output reflects an altruistic, ethical, and real perspective.' },
          { lead: 'The Goal: ', text: 'Build trust through emotional intelligence—something a pure algorithm can never replicate.' },
        ],
      },
      { type: 'heading', text: '4. Solve Problems Through Relentless Inquiry' },
      {
        type: 'paragraph',
        text: 'SMEs thrive on agility. Use AI to stay curious about your customers’ changing needs.',
      },
      {
        type: 'rich-list',
        dark: true,
        items: [
          { lead: 'The Action: ', text: 'Use AI-driven insights to navigate complex category shifts and design new products or services with pioneer-level speed.' },
          { lead: 'The Goal: ', text: 'Stay ahead of the curve by treating discovery as a path to fulfilment.' },
        ],
      },
      { type: 'heading', text: '5. Align Profit with Purpose (Conscious Capitalism)' },
      {
        type: 'paragraph',
        text: 'Modern customers want to buy from businesses that stand for something.',
      },
      {
        type: 'rich-list',
        dark: true,
        items: [
          { lead: 'The Action: ', text: 'Use AI to communicate your core organising principle clearly across all channels.' },
          { lead: 'The Goal: ', text: 'Aligning profit with purpose doesn’t just feel good—it delivers outsized returns.' },
        ],
      },
      { type: 'heading', text: 'The Verdict: Curiosity is Your Greatest Asset' },
      {
        type: 'paragraph',
        text: 'As an SME owner, you have the adventurous spirit required to innovate. AI is simply the infrastructure that allows you to live that ambition. By shifting from efficiency-based value to vision-led value, you ensure your business isn’t just “good enough”—it’s exceptional.',
      },
      {
        type: 'paragraph',
        parts: [{ text: 'Is your SME using AI to survive, or to create enterprise value?', bold: true }],
      },
      { type: 'blockquote', text: 'Schoolhouse Lane: The Brand-Led Value Creation Agency. Because there is no cure for curiosity.' },
      { type: 'image', src: '/images/blog/blog5-inline2.webp', alt: 'Brand-led value creation in action', width: 988, height: 414 },
    ],
    relatedArticles: [
      { slug: 'brand-measurable-asset', title: 'Why Brand Is Your Most Measurable Asset', excerpt: "In my twenty five years as an ad man, I've witnessed countless shifts in how we work.", thumbnail: '/images/blog/blog-related-3.png' },
      { slug: 'remote-working-whatsapp', title: 'Remote Working is Not the Problem, WhatsApp Is', excerpt: "In my twenty five years as an ad man, I've witnessed countless shifts in how we work.", thumbnail: '/images/blog/blog-telephones.jpg' },
      { slug: 'creative-commerce', title: 'Eddie Jordan Foundation. Engaging in delusion or fuelling change?', excerpt: "Sitting in Soho while London’s finest scurry through their morning I find myself listening to Keith O’Loughlin", thumbnail: '/images/blog/blog-eddie-jordan.jpg' },
    ],
    journalCards: [
      { slug: 'is-ai-killing-seo', title: "Is AI Killing SEO? Here's What 15 Years in the Trenches Has Taught Me", excerpt: "I've been doing this long enough to have heard the death knell for SEO more times than I care to count.", image: '/images/blog/seo-hero.jpg' },
      { slug: 'brand-measurable-asset', title: 'Why Brand Is Your Most Measurable Asset', excerpt: "The companies that treat brand as strategy not decoration consistently outperform on enterprise value. Here's why.", image: '/images/blog/blog-brand-asset.jpg' },
      { slug: 'remote-working-whatsapp', title: 'Remote Working is Not the Problem, WhatsApp Is', excerpt: "In my twenty five years as an ad man, I've witnessed countless shifts in how we work. Technologies come and go...", image: '/images/blog/blog-telephones.jpg' },
    ],
  },

]

// ─── Placeholder stubs ────────────────────────────────────────────────────────

const PLACEHOLDER_POSTS: BlogPost[] = [
  {
    slug: 'brand-measurable-asset',
    title: 'Why Brand Is Your Most Measurable Asset',
    category: 'Branding',
    heroImage: '/images/blog-1.png',
    listingImage: '/images/blog-1.png',
    seoTitle: 'Why Brand Is Your Most Measurable Asset — Schoolhouse Lane',
    seoDescription: 'In the traditional corporate world, brand is often dismissed as a "downstream" marketing cost — a coat of paint applied after the real business decisions have been made.',
    keywords: ['brand strategy', 'enterprise value', 'creative commerce', 'brand equity', 'Schoolhouse Lane'],
    publishedAt: '2026-03-15',
    author: DARREN,
    body: [
      {
        type: 'paragraph',
        dark: true,
        text: 'In the traditional corporate world, brand is often dismissed as a "downstream" marketing cost—a coat of paint applied after the real business decisions have been made. At Schoolhouse Lane, we believe this is a fundamental misunderstanding of value creation. In an era of algorithmic noise, the most powerful engine for growth isn\'t a spreadsheet; it\'s a question.',
      },
      {
        type: 'paragraph',
        dark: true,
        text: 'When you shift your perspective to view brand as business strategy made tangible, it ceases to be a subjective expense and becomes your most measurable advantage.',
      },
      { type: 'heading', text: 'Moving from Decoration to Strategy' },
      {
        type: 'paragraph',
        text: 'Most agencies "decorate" decisions that are already finalized. Our approach is "upstream," positioning brand as a primary lever for accelerating enterprise value.',
      },
      {
        type: 'paragraph',
        text: 'By treating brand as the core organising principle, businesses can:',
      },
      {
        type: 'callout',
        text: '\u00b7 Drive Premium Valuations: Investors don\'t just buy cash flow; they buy the certainty of future growth that a potent brand promises during exits or capital raises.\n\u00b7 Navigate Category Shifts: A brand-led strategy provides the agility to pivot with human-centric insight when a market fluctuates.\n\u00b7 Unify Internal Culture: Brand acts as a North Star, aligning diverse teams under a single, potent vision.',
      },
      { type: 'heading', text: 'Creative Commerce: The Methodology of ROI' },
      {
        type: 'paragraph',
        text: 'We bridge the gap between imagination and business success through Creative Commerce. This isn\'t about vague awareness; it\'s about building ecosystems where every touchpoint—from high-level strategy to the final checkout—accelerates business goals.',
      },
      {
        type: 'paragraph',
        text: 'By aligning profit with purpose and people, we move beyond capturing market share to capturing hearts and minds. This alignment is the core of Conscious Capitalism: the conviction that being a force for good delivers outsized returns.',
      },
      { type: 'image', src: '/images/blog/blog-brand-inline-1.jpg', alt: 'Brand strategy and creative commerce' },
      { type: 'heading', text: 'Diversity of Thought as a Competitive Advantage' },
      {
        type: 'paragraph',
        text: 'At Schoolhouse Lane, we operate at the intersection of relentless inquiry and rigorous strategy. Our competitive advantage lies in our diversity of thought, allowing us to unearth latent potential within an organization that a standard, linear approach would miss.',
      },
      {
        type: 'paragraph',
        text: 'We don\'t just tell stories; we architect the infrastructure that allows ambitious companies to live them.',
      },
      { type: 'heading', text: 'Is your brand working as a strategic engine?' },
      {
        type: 'paragraph',
        text: 'If your brand is currently a line item under "marketing expenses" rather than a driver of "enterprise value," it\'s time to ask a better question. Through discovery and creativity, we transform your most intangible asset into your most measurable lever for growth.',
      },
      {
        type: 'blockquote',
        text: 'Schoolhouse Lane: The Brand-Led Value Creation Agency. Because there is no cure for curiosity.',
      },
      { type: 'image', src: '/images/blog/blog-brand-inline-2.jpg', alt: 'Brand as measurable asset' },
    ],
    relatedArticles: [
      { slug: 'remote-working-whatsapp', title: 'Remote Working is Not the Problem, WhatsApp Is', excerpt: "In my twenty five years as an ad man, I've witnessed countless shifts in how we work.", thumbnail: '/images/blog/blog-telephones.jpg' },
      { slug: 'is-ai-killing-seo', title: "Is AI Killing SEO? Here's What 15 Years in the Trenches Has Taught Me", excerpt: "I've been doing this long enough to have heard the death knell for SEO more times than I care to count.", thumbnail: '/images/blog/blog-seo.jpg' },
    ],
    journalCards: [
      { slug: 'creative-commerce', title: 'Creative Commerce: Where Imagination Meets Revenue', excerpt: "We don't just build identities. We build ecosystems where every touchpoint accelerates business growth.", image: '/images/blog/blog-creative-commerce.jpg' },
      { slug: 'is-ai-killing-seo', title: "Is AI Killing SEO? Here's What 15 Years in the Trenches Has Taught Me", excerpt: "I've been doing this long enough to have heard the death knell for SEO more times than I care to count.", image: '/images/blog/blog-seo.jpg' },
      { slug: 'remote-working-whatsapp', title: 'Remote Working is Not the Problem, WhatsApp Is', excerpt: "In my twenty five years as an ad man, I've witnessed countless shifts in how we work. Technologies come and go...", image: '/images/blog/blog-telephones.jpg' },
    ],
  },
  {
    slug: 'creative-commerce',
    title: 'Creative Commerce: Where Imagination Meets Revenue',
    category: 'Strategy',
    heroImage: '/images/blog-2.png',
    listingImage: '/images/blog/blog-creative-listing.webp',
    seoTitle: 'Creative Commerce: Where Imagination Meets Revenue — Schoolhouse Lane',
    seoDescription: 'In the relentless pursuit of growth, many modern enterprises have fallen into the "efficiency trap." True growth doesn\'t come from doing the same things more efficiently.',
    keywords: ['creative commerce', 'brand strategy', 'vision-led growth', 'conscious capitalism', 'Schoolhouse Lane'],
    publishedAt: '2026-03-10',
    author: DARREN,
    body: [
      {
        type: 'paragraph',
        dark: true,
        text: 'In the relentless pursuit of growth, many modern enterprises have fallen into the "efficiency trap." They focus on squeezing margins, optimising algorithms, and refining spreadsheets. But at Schoolhouse Lane, we believe the most powerful engine for growth isn\'t a spreadsheet—it\'s a question. True growth doesn\'t come from doing the same things more efficiently; it comes from shifting from efficiency-based value to vision-led value creation.',
      },
      {
        type: 'paragraph',
        dark: true,
        text: 'This shift is the foundation of Creative Commerce.',
      },
      { type: 'image', src: '/images/blog/blog-creative-inline-1.jpg', alt: 'Creative Commerce in action' },
      { type: 'heading', text: 'From Efficiency to Vision. The New Competitive Advantage' },
      {
        type: 'paragraph',
        text: 'Efficiency is a race to the bottom. In a world of "good enough," optimisation eventually plateaus. Vision-led value creation, however, is limitless. It treats brand not as a downstream marketing cost, but as an upstream strategic engine.',
      },
      {
        type: 'paragraph',
        text: 'While others "decorate" decisions already made, we use curiosity to unearth the latent potential within an organisation. By aligning profit with purpose and people, we build brands that don\'t just capture market share, but capture hearts and minds. This is where diversity of thought becomes a competitive advantage, allowing us to see the "human" in an era of algorithmic noise.',
      },
      { type: 'heading', text: 'Building Ecosystems. Not Just Identities.' },
      {
        type: 'paragraph',
        text: 'We don\'t just build identities, we build ecosystems. Creative Commerce is our methodology for making brand strategy tangible. It ensures that every touchpoint—from the high-level strategy to the final checkout—accelerates the business goals of our clients.',
      },
      {
        type: 'paragraph',
        text: 'By treating brand as business strategy made tangible, we ensure your most intangible asset becomes your most measurable advantage. This ecosystem approach allows ambitious companies to:',
      },
      {
        type: 'callout',
        text: '\u00b7 Navigate Category Shifts: Move with agility and human-centric insight.\n\u00b7 Design and Launch: Create new products and business divisions with clarity.\n\u00b7 Drive Premium Valuations: Use brand as a primary lever for accelerating enterprise value during exits or capital raises.',
      },
      { type: 'heading', text: 'The Philosophy. There Is No Cure for Curiosity' },
      {
        type: 'paragraph',
        text: 'At the intersection of relentless inquiry and rigorous strategy, we find the "exceptional". We are a human agency with an altruistic view of the world, operating on the conviction of Conscious Capitalism. We believe businesses can—and should—be a force for good while delivering outsized returns.',
      },
      {
        type: 'paragraph',
        text: 'Creative Commerce is the bridge between imagination and business success. We don\'t just tell stories; we architect the infrastructure that allows companies to live them.',
      },
      { type: 'heading', text: 'Shift Your Strategy Upstream' },
      {
        type: 'paragraph',
        text: 'Is your brand a marketing tool or a high-leverage strategic asset? If you are ready to move beyond efficiency and toward a vision that drives real enterprise value, it\'s time to explore the power of Creative Commerce.',
      },
      {
        type: 'blockquote',
        text: 'Schoolhouse Lane: There is no cure for curiosity.',
      },
      { type: 'image', src: '/images/blog/blog-creative-inline-2.jpg', alt: 'Vision-led value creation' },
    ],
    relatedArticles: [
      { slug: 'brand-measurable-asset', title: 'Why Brand Is Your Most Measurable Asset', excerpt: 'In the traditional corporate world, brand is often dismissed as a downstream marketing cost.', thumbnail: '/images/blog/blog-brand-asset.jpg' },
      { slug: 'remote-working-whatsapp', title: 'Remote Working is Not the Problem, WhatsApp Is', excerpt: "In my twenty five years as an ad man, I've witnessed countless shifts in how we work.", thumbnail: '/images/blog/blog-telephones.jpg' },
    ],
    journalCards: [
      { slug: 'is-ai-killing-seo', title: "Is AI Killing SEO? Here's What 15 Years in the Trenches Has Taught Me", excerpt: "I've been doing this long enough to have heard the death knell for SEO more times than I care to count.", image: '/images/blog/blog-seo.jpg' },
      { slug: 'brand-measurable-asset', title: 'Why Brand Is Your Most Measurable Asset', excerpt: "The companies that treat brand as strategy not decoration consistently outperform on enterprise value. Here's why.", image: '/images/blog/blog-brand-asset.jpg' },
      { slug: 'remote-working-whatsapp', title: 'Remote Working is Not the Problem, WhatsApp Is', excerpt: "In my twenty five years as an ad man, I've witnessed countless shifts in how we work. Technologies come and go...", image: '/images/blog/blog-telephones.jpg' },
    ],
  },

  // ── The Founder's Dilemma ────────────────────────────────────────────────────
  {
    slug: 'founders-dilemma-enterprise-value-ai',
    title: "The Founder's Dilemma: Scaling Enterprise Value in the Age of AI",
    category: 'Strategy',
    heroImage: '/images/blog-8.png',
    listingImage: '/images/blog-8-0.png',
    seoTitle: "The Founder's Dilemma: Scaling Enterprise Value in the Age of AI — Schoolhouse Lane",
    seoDescription: "For founders eyeing an exit or Series B, brand is your most measurable advantage. Discover how to use AI to drive enterprise value — not just efficiency.",
    keywords: ['enterprise value', 'AI marketing', 'brand strategy', 'founder', 'creative commerce', 'Schoolhouse Lane'],
    publishedAt: '2026-05-01',
    author: DARREN,
    body: [
      {
        type: 'paragraph',
        parts: [
          { text: 'For founders and entrepreneurs, the primary objective is clear: ' },
          { text: 'Enterprise Value (EV) creation', bold: true },
          { text: '. Whether you are eyeing an eventual exit, preparing for a Series B, or launching a new business division, your brand is not just a logo—it is your most measurable advantage.' },
        ],
      },
      {
        type: 'paragraph',
        parts: [
          { text: "In a world of \"good enough,\" the integration of AI into your marketing strategy is no longer a choice; it is a strategic mandate. However, the most powerful engine for growth isn't the AI itself—it's the question you ask it. To move the needle on valuation, founders must shift from " },
          { text: 'efficiency-led execution', bold: true },
          { text: ' to ' },
          { text: 'vision-led value creation', bold: true },
          { text: '.' },
        ],
      },
      { type: 'image', src: '/images/blog-8-1.png', alt: 'AI creative strategy', width: 988, height: 453 },
      { type: 'heading', text: '1. Shift AI "Upstream" to Drive Valuation' },
      { type: 'paragraph', text: 'Most startups use AI to "decorate" decisions already made—generating social posts or ad copy as a downstream cost. Strategic founders move AI "upstream".' },
      {
        type: 'rich-list',
        dark: true,
        items: [
          { lead: 'The Action:  ', text: 'Use AI-powered insights to unearth the latent potential within your organization during the discovery phase.' },
          { lead: 'The Goal: ', text: 'Build the clarity and alignment necessary to drive premium valuations during capital raises.' },
        ],
      },
      { type: 'heading', text: '2. Move from Content Production to "Creative Commerce"' },
      { type: 'paragraph', text: 'Founders cannot afford to waste capital on "algorithmic noise". Every touchpoint must perform.' },
      {
        type: 'rich-list',
        dark: true,
        items: [
          { lead: 'The Action:  ', text: 'Adopt a Creative Commerce methodology, where AI accelerates everything from the high-level strategy to the final checkout.' },
          { lead: 'The Goal: ', text: 'Create a tangible ecosystem where imagination meets revenue.' },
        ],
      },
      { type: 'heading', text: '3. Leverage Diversity of Thought as Your Edge' },
      { type: 'paragraph', text: 'In an automated world, the "human" is the ultimate differentiator. While competitors use AI to blend in, founders must use it to stand out.' },
      {
        type: 'rich-list',
        dark: true,
        items: [
          { lead: 'The Action:  ', text: 'Partner with an agency that views diversity of thought as a competitive advantage.' },
          { lead: 'The Goal: ', text: 'Prioritize the emotional, the ethical, and the real to capture both market share and hearts.' },
        ],
      },
      { type: 'heading', text: '4. Architect the Infrastructure, Don\'t Just Tell Stories' },
      { type: 'paragraph', text: 'Founders often fall into the trap of selling a story before they have the infrastructure to support it.' },
      {
        type: 'rich-list',
        dark: true,
        items: [
          { lead: 'The Action:  ', text: 'Use AI to architect the infrastructure that allows your ambitious company to live its brand story.' },
          { lead: 'The Goal: ', text: 'Transform your brand from a marketing tool into a high-leverage strategic asset.' },
        ],
      },
      { type: 'heading', text: '5. Practice Conscious Capitalism' },
      { type: 'paragraph', text: 'We believe businesses can, and should, be a force for good while delivering outsized returns.' },
      {
        type: 'rich-list',
        dark: true,
        items: [
          { lead: 'The Action:  ', text: 'Use AI to align your profit with purpose and people.' },
          { lead: 'The Goal: ', text: 'Build a brand that captures minds and ensures long-term loyalty in a shifting category.' },
        ],
      },
      { type: 'heading', text: 'The Verdict: No Cure for Curiosity' },
      { type: 'paragraph', text: 'As a founder, your adventurous and pioneering spirit is what built your business. AI is the fuel that allows that spirit to scale. By treating brand as business strategy made tangible, you ensure your intangible assets become your greatest measurable advantage.' },
      {
        type: 'paragraph',
        parts: [{ text: 'Are you using AI to survive the noise, or to architect the exceptional?', bold: true }],
      },
      { type: 'blockquote', text: 'Schoolhouse Lane: The Brand-Led Value Creation Agency. Because there is no cure for curiosity.' },
      { type: 'image', src: '/images/blog-8-2.png', alt: 'Creative strategy in practice', width: 988, height: 269 },
    ],
    relatedArticles: [
      { slug: 'brand-measurable-asset', title: 'Why Brand Is Your Most Measurable Asset', excerpt: "In my twenty five years as an ad man, I've witnessed countless shifts in how we work.", thumbnail: '/images/blog/blog-related-3.png' },
      { slug: 'remote-working-whatsapp', title: 'Remote Working is Not the Problem, WhatsApp Is', excerpt: "In my twenty five years as an ad man, I've witnessed countless shifts in how we work.", thumbnail: '/images/blog/blog-telephones.jpg' },
      { slug: 'is-ai-killing-seo', title: 'Eddie Jordan Foundation. Engaging in delusion or fuelling change?', excerpt: "Sitting in Soho while London's finest scurry through their morning I find myself listening to Keith O'Loughlin", thumbnail: '/images/blog/blog-eddie-jordan.jpg' },
    ],
    journalCards: [
      { slug: 'is-ai-killing-seo', title: "Is AI Killing SEO? Here's What 15 Years in the Trenches Has Taught Me", excerpt: "I've been doing this long enough to have heard the death knell for SEO more times than I care to count.", image: '/images/blog/seo-hero.jpg' },
      { slug: 'brand-measurable-asset', title: 'Why Brand Is Your Most Measurable Asset', excerpt: "The companies that treat brand as strategy not decoration consistently outperform on enterprise value. Here's why.", image: '/images/blog/blog-brand-asset.jpg' },
      { slug: 'remote-working-whatsapp', title: 'Remote Working is Not the Problem, WhatsApp Is', excerpt: "In my twenty five years as an ad man, I've witnessed countless shifts in how we work. Technologies come and go...", image: '/images/blog/blog-telephones.jpg' },
    ],
  },
]

export const allBlogPosts: BlogPost[] = [...blogPosts, ...PLACEHOLDER_POSTS].sort((a, b) => {
  if (a.slug === 'creative-commerce') return -1
  if (b.slug === 'creative-commerce') return 1
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
})

export function getBlogPost(slug: string): BlogPost | undefined {
  return allBlogPosts.find((p) => p.slug === slug)
}
