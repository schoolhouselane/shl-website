import Image from 'next/image'
import Link from 'next/link'

const workImages = [
  'https://www.figma.com/api/mcp/asset/037f5b45-018d-445b-a857-e924af1de751',
  'https://www.figma.com/api/mcp/asset/02223ef0-f9e5-4ffa-8df8-672768ac433b',
  'https://www.figma.com/api/mcp/asset/28deab52-7461-4f52-8654-7f8f0d77bf87',
  'https://www.figma.com/api/mcp/asset/a5c6d5c2-87d5-42ed-bc0d-a1dd6c71edd0',
  'https://www.figma.com/api/mcp/asset/f37df2d1-2f0e-47c4-ad0c-1772479dd6a8',
  'https://www.figma.com/api/mcp/asset/4ff9f032-d852-40aa-89cb-d3066c886377',
]

export default function SelectedWork() {
  return (
    <section className="px-5 md:px-[90px] py-12 md:py-20 bg-[#f5f3ef]">
      <div className="mb-8 md:mb-10">
        <h2 className="font-black text-[36px] md:text-[64px] leading-[0.9] tracking-[-1px] md:tracking-[-1.28px] uppercase text-[#1e1e20]">
          Selected Work<br />That Delivered Growth
        </h2>
        <p className="mt-4 text-[16px] md:text-[20px] leading-[1.37] text-[#1e1e20] max-w-[565px]">
          Our work spans brand strategy, identity, campaigns, and digital. Each project is chosen because it pushed something forward.
        </p>
      </div>

      {/* Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {workImages.map((src, i) => (
          <div key={i} className="relative h-[260px] sm:h-[320px] md:h-[420px] rounded-sm overflow-hidden">
            <Image src={src} alt={`Work ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end gap-5">
        <div className="flex-1">
          <p className="font-semibold text-[20px] md:text-[24px] leading-[0.9] tracking-[-0.48px] uppercase text-[#1e1e20] max-w-[403px]">
            Brand Strategy &amp; Positioning
          </p>
          <p className="mt-3 text-[15px] md:text-[16px] leading-[1.71] text-[#1e1e20]">
            Transforming brand from a marketing cost into a high-leverage strategic asset for growth.
          </p>
        </div>
        <Link href="/work" className="flex items-center gap-3 w-fit border border-[#1e1e20] rounded-full px-5 py-2 text-[14px] md:text-[16px] font-medium uppercase hover:bg-[#1e1e20] hover:text-white transition-colors">
          View Case Study
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  )
}
