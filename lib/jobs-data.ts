export type JobSection = {
  heading: string
  items: string[]
}

export type JobDetails = {
  intro: string
  role: string
  sections: JobSection[]
  why: string
  howToApply: string
}

export type Job = {
  id: string
  number: string
  title: string
  category: string
  location: string
  workMode?: string
  type: string
  description: string
  boldWord: string
  details?: JobDetails
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
  {
    id: 'project-manager',
    number: '03',
    title: 'Project Manager',
    category: 'Operations',
    location: 'Remote',
    type: 'FULL-TIME',
    description: ' who can hold together the chaos of creative work without squeezing the life out of it. You run the timeline, own the client relationship, and keep the team sharp and focused — without becoming the reason the work suffers.',
    boldWord: 'Project Manager',
  },
  {
    id: 'designer',
    number: '04',
    title: 'Designer',
    category: 'Design',
    location: 'Remote',
    type: 'FULL-TIME',
    description: ' who thinks before they open Figma. You bring a point of view to every brief, know when to push back, and understand that the best creative decisions are made well before a single pixel hits the screen.',
    boldWord: 'Designer',
  },
  {
    id: 'developer',
    number: '05',
    title: 'Developer',
    category: 'Engineering',
    location: 'Remote',
    type: 'FULL-TIME',
    description: ' who takes pride in the invisible work — the performance, the precision, the code nobody applauds but everyone notices when it\'s wrong. You bridge design and reality without cutting corners.',
    boldWord: 'Developer',
  },
  {
    id: 'business-development-manager-kosovo',
    number: '06',
    title: 'Business Development Manager',
    category: 'Business Dev',
    location: 'Pristina, Kosovo',
    workMode: 'Hybrid',
    type: 'FULL-TIME',
    description: ' who opens doors, builds pipeline, and turns Kosovo\'s most ambitious founders and marketing leaders into long-term partners — as the first impression of Schoolhouse Lane in an entire market.',
    boldWord: 'Business Development Manager',
    details: {
      intro: 'We exist at the intersection of creativity and revenue growth. Schoolhouse Lane is a Creative Commerce agency. We\'ve transformed 80+ brands across hospitality, fintech, consumer, wellness, and fashion — building brand strategy, identity, campaigns, and websites that don\'t just look good, but move enterprise value. We pair human craft with AI-powered creative, design, and development to work faster and push further, and we treat brand as an upstream strategic asset, not a downstream cost. Now we\'re expanding in Kosovo, and we\'re looking for a Business Development Manager to open doors, build pipeline, and turn the region\'s most ambitious companies into long-term partners.',
      role: 'This is a hunter role. You\'ll own the top of our funnel in Kosovo — identifying the right founders, marketing leaders, and CEOs, starting conversations that matter, and bringing qualified opportunities to the table. You\'ll be the first impression of Schoolhouse Lane for an entire market, so you\'ll need equal parts commercial instinct and genuine curiosity about the businesses you approach.',
      sections: [
        {
          heading: 'What you\'ll do',
          items: [
            'Research and map the Kosovo market — sectors, companies, and decision-makers worth pursuing',
            'Build and run outbound prospecting across LinkedIn, email, events, and your own network',
            'Qualify leads and book discovery calls and demos for the senior team',
            'Develop relationships with founders, marketing teams, and investors, understanding their growth challenges before pitching anything',
            'Represent Schoolhouse Lane at local events, meetups, and industry gatherings',
            'Keep a clean, disciplined pipeline in our CRM and report on activity and conversion',
            'Work closely with our strategists and client services team to shape proposals that win',
          ],
        },
        {
          heading: 'What you bring',
          items: [
            '2+ years in business development, sales, or partnerships — ideally in marketing, creative, digital, or B2B services',
            'Deep knowledge of the Kosovo business landscape and a real network (or the drive to build one fast)',
            'Fluent Albanian and strong English; written and spoken',
            'A consultative approach — you listen first and sell second',
            'Comfort with outbound and rejection; you treat "no" as data, not defeat',
            'Organised, self-directed, and accountable to your numbers',
          ],
        },
        {
          heading: 'Bonus points',
          items: [
            'Existing relationships with founders, agencies, or marketing leaders in the region',
            'Experience selling creative, branding, or AI-driven services',
            'A point of view on where Kosovo\'s brands are heading',
          ],
        },
      ],
      why: 'You\'ll join a senior, international team (Dublin, Pristina, Lahore, São Paulo) of strategists, creatives, and brand architects who genuinely care about the work. We operate by clear principles — Be Curious, Be Great, Discipline, Communication, Human Respect — and we mean them. You\'ll have the autonomy to build something from the ground up and the support of a team that\'s done it before. There\'s no cure for curiosity here, and we like it that way.',
      howToApply: 'Send a short note on why this role fits you, plus your CV or LinkedIn, to hello@schoolhouselane.ai. Tell us about one company in Kosovo you think we should be talking to, and why.',
    },
  },
]

export const testimonials: Testimonial[] = [
  {
    quote: '"Working at Schoolhouse Lane has truly shaped me as a designer. The environment constantly inspires creativity, challenges me to think differently, and gives me the space to grow with every project. Being surrounded by a team that values ideas and innovation makes every day feel meaningful and rewarding."',
    name: 'Marigona Culaj',
    role: 'Graphic Designer',
  },
  {
    quote: '"Being a designer means being an overthinker. In Schoolhouse Lane, that\'s not something you have to hide. It\'s exactly what\'s valued. The extra thought, the questioning, the constant refining… it\'s all part of doing meaningful work here."',
    name: 'Erblina Shala',
    role: 'Creative Specialist',
  },
  {
    quote: '"I\'ve worked in SEO long enough to know that good results don\'t come from tools or templates — they come from being in the right environment. Schoolhouse Lane gives me the freedom to actually think, test, and build strategies that work. The team is sharp, the work is real, and you can see the impact. That\'s everything."',
    name: 'Kamran Hussain',
    role: 'SEO Specialist',
  },
  {
    quote: '"Working at Schoolhouse Lane as a graphic designer has been an incredibly rewarding experience. It\'s a place where creativity is genuinely valued, and I\'m given the freedom to explore ideas and bring concepts to life. The collaborative environment and supportive team make every project enjoyable, while also pushing me to grow professionally. It\'s inspiring to be part of a space that blends design, purpose, and a strong sense of community."',
    name: 'Ermir Kryeziu',
    role: 'Graphic Designer',
  },
  {
    quote: '"Being a developer at Schoolhouse Lane means staying curious, disciplined, and always striving to do great work. There\'s a strong balance between structure and creativity, encouraging us to think smart within real world constraints. Clear communication and mutual respect make collaboration seamless and meaningful. It\'s an environment where you\'re supported to grow and consistently deliver your best."',
    name: 'Hassan Butt',
    role: 'Software Engineer',
  },
  {
    quote: '"At Schoolhouse, we work in a people-first environment where the company\'s top priority is keeping things stress-free for everyone. When you aren\'t overwhelmed, you naturally do better work. Kind environment, brilliant team."',
    name: 'Shalale Mammadli',
    role: 'Project Manager',
  },
  {
    quote: '"Being a Client Services Manager at Schoolhouse Lane means turning client needs into seamless solutions. It\'s rewarding to work with a collaborative team that\'s dedicated to delivering real value and building lasting partnerships."',
    name: 'Tea Sebenik',
    role: 'Client Services Manager',
  },
  {
    quote: '"Being a graphic designer at Schoolhouse Lane means constantly pushing my creative limits. Every project helps me grow and reach my full potential in branding and web design, all while working with an amazing and supportive team."',
    name: 'Leona Bobi',
    role: 'Graphic Designer',
  },
]
