import Image from 'next/image'
import Link from 'next/link'

const teamImages = [
  'https://www.figma.com/api/mcp/asset/39e7e9f7-b437-4914-9da6-f9767bb52654',
  'https://www.figma.com/api/mcp/asset/f046fb36-4222-42b4-8e3b-a50e7dd3b9a8',
  'https://www.figma.com/api/mcp/asset/342086e5-fbf9-4744-b675-cd6f20f3e485',
  'https://www.figma.com/api/mcp/asset/3044d102-79c0-4e56-a4df-2cbac3f36320',
  'https://www.figma.com/api/mcp/asset/5f25efd4-6ebd-41be-a082-f6a26a5a2f99',
  'https://www.figma.com/api/mcp/asset/0b0b6e9f-3c83-4d8b-8833-a325c104df0c',
  'https://www.figma.com/api/mcp/asset/99e53d75-59b2-4e33-ac1b-1b3a184926e8',
  'https://www.figma.com/api/mcp/asset/c071f11e-2294-4eea-a9a7-710ba450b174',
  'https://www.figma.com/api/mcp/asset/0a90100b-ed1a-40d2-965b-bdd66d925f73',
]

export default function Team() {
  return (
    <section className="bg-[#f5f3ef] py-12 md:py-20">
      <h2 className="font-black text-[36px] md:text-[64px] leading-[0.9] tracking-[-1px] md:tracking-[-1.28px] uppercase text-[#1e1e20] text-right px-5 md:px-[90px] mb-8">
        People behind everything
      </h2>

      {/* Scrollable strip on mobile, full width on desktop */}
      <div className="flex overflow-x-auto gap-px scrollbar-hide">
        {teamImages.map((src, i) => (
          <div key={i} className="relative w-[140px] h-[400px] md:w-[200px] md:h-[759px] shrink-0">
            <Image src={src} alt={`Team member ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="px-5 md:px-[90px] mt-8 flex flex-col gap-5 max-w-[535px]">
        <p className="text-[16px] md:text-[20px] leading-[1.37] text-[#1e1e20]">
          A small, senior team of strategists, creatives, and brand architects. We bring deep expertise and genuine curiosity to every brief.
        </p>
        <Link href="/jobs" className="inline-flex items-center gap-3 w-fit border border-[#1e1e20] rounded-full px-5 py-2 text-[14px] md:text-[16px] font-medium uppercase hover:bg-[#1e1e20] hover:text-white transition-colors">
          See Open Roles
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  )
}
