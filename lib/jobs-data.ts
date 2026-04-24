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
