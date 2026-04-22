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
  seoTitle?: string
  seoDescription?: string
  keywords?: string[]
  publishedAt: string
  author: BlogAuthor
  relatedArticles: RelatedArticle[]
  journalCards: JournalCard[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'remote-working-whatsapp',
    title: 'Remote Working is Not the Problem, WhatsApp Is',
    category: 'Leadership',
    heroImage: '/images/blog/blog-hero.png',
    seoTitle: 'Remote Working is Not the Problem, WhatsApp Is — Schoolhouse Lane',
    seoDescription: "In 25 years as an ad man, Darren McGrath has seen every shift in how teams work. His conclusion: remote work isn't the productivity problem — instant messaging is.",
    keywords: ['remote work', 'leadership', 'communication', 'WhatsApp', 'team productivity', 'brand strategy', 'Schoolhouse Lane'],
    publishedAt: '2026-03-20',
    author: {
      name: 'Darren McGrath',
      role: 'Partner',
      bio: 'A Cannes Lion-winning creative strategist with 25 years of experience building brands and leading teams across global markets.',
      image: '/images/blog/blog-author.png',
    },
    relatedArticles: [
      {
        slug: 'compounding-effect',
        title: 'The Compounding Effect Nobody Talks About',
        excerpt: "Performance marketing has a ceiling. Once you've saturated your addressable audience\u2026",
        thumbnail: '/images/blog/blog-related-1.png',
      },
      {
        slug: 'creative-commerce',
        title: 'Creative Commerce: Where Imagination Meets Revenue',
        excerpt: "Performance marketing has a ceiling. Once you've saturated your addressable audience\u2026",
        thumbnail: '/images/blog/blog-related-2.png',
      },
      {
        slug: 'brand-measurable-asset',
        title: 'Why Brand Is Your Most Measurable Asset',
        excerpt: "Performance marketing has a ceiling. Once you've saturated your addressable audience\u2026",
        thumbnail: '/images/blog/blog-related-3.png',
      },
    ],
    journalCards: [
      {
        slug: 'creative-commerce',
        title: 'Creative Commerce: Where Imagination Meets Revenue',
        excerpt: "We don't just build identities. We build ecosystems where every touchpoint accelerates business growth.",
        image: '/images/blog/blog-journal-1.png',
      },
      {
        slug: 'brand-measurable-asset',
        title: 'Why Brand Is Your Most Measurable Asset',
        excerpt: "Great brands aren't built on campaigns. They're built on the belief that what you make is worth making.",
        image: '/images/blog/blog-journal-2.png',
      },
      {
        slug: 'compounding-effect',
        title: 'The Compounding Effect Nobody Talks About',
        excerpt: "Performance marketing has a ceiling. Once you've saturated your addressable audience, brand is the only lever left.",
        image: '/images/blog/blog-journal-3.png',
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
