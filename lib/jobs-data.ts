export type Job = {
  id: string
  number: string
  title: string
  category: string
  location: string
  type: string
  description: string
  boldWord: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export const jobs: Job[] = [
  {
    id: 'senior-copywriter',
    number: '01',
    title: 'Senior Copywriter',
    category: 'Copywriter',
    location: 'Remote',
    type: 'FULL-TIME',
    description: ' who understands that words aren\'t just "decoration" — they are the architecture of enterprise value.',
    boldWord: 'Senior Copywriter',
  },
  {
    id: 'senior-brand-strategist',
    number: '02',
    title: 'Senior Brand Strategist',
    category: 'Strategy',
    location: 'Remote',
    type: 'FULL-TIME',
    description: ' who rejects "good enough" in favor of the exceptional. You won\'t just "decorate" decisions already made; you will use curiosity to unearth latent potential within organizations, architecting the infrastructure that allows ambitious companies to live their stories.',
    boldWord: 'Senior Brand Strategist',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote: '"Working at Schoolhouse Lane has truly shaped me as a designer. The environment constantly inspires creativity, challenges me to think differently, and gives me the space to grow with every project. Being surrounded by a team that values ideas and innovation makes every day feel meaningful and rewarding."',
    name: 'Marigona Culaj',
    role: 'Graphic Designer',
  },
  {
    quote: '"I\'ve worked at big networks and small studios. This is the only place where the work is consistently excellent and the business outcomes are the proof. Both, every time."',
    name: 'Leona Bobi',
    role: 'Graphic Designer',
  },
]
