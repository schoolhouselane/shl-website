import Image from 'next/image'
import Link from 'next/link'
import GetGrowthModal from './GetGrowthModal'

const services = ['Strategy', 'Brand Identity', 'Campaigns', 'Websites', 'AI Creative', 'Gallery & Videos']
const social = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/schoolhouselane' },
  { name: 'Behance', href: 'https://behance.net/schoolhouselane' },
  { name: 'Instagram', href: 'https://instagram.com/schoolhouselane' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1e1e20] px-5 md:px-[90px] py-[90px] md:py-[180px] font-manrope">
      <div className="border-b border-white/20 pb-8 md:pb-12 mb-8 md:mb-12">
        <p className="font-bold text-[28px] md:text-[48px] leading-normal uppercase text-white md:text-right">
          We exist at the intersection of creativity and revenue growth
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Services */}
        <div className="flex flex-col gap-5">
          {services.map((s) => (
            <Link key={s} href="/services" className="text-[16px] md:text-[18px] text-white capitalize hover:opacity-70 transition-opacity">{s}</Link>
          ))}
        </div>

        {/* CTA + Social */}
        <div className="flex flex-col gap-6">
          <p className="font-bold text-[24px] md:text-[32px] uppercase text-white">We Can Make You Better</p>
          <div className="flex flex-col gap-4">
            {social.map((s) => (
              <Link key={s.name} href={s.href} className="flex items-center gap-2 group">
                <p className="text-[16px] md:text-[18px] text-white group-hover:opacity-70 transition-opacity">{s.name}</p>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </Link>
            ))}
          </div>
          <Link href="/contact" className="flex items-center gap-3 w-fit border border-white rounded-full px-6 py-3 text-[16px] font-medium uppercase text-white hover:bg-white hover:text-[#1e1e20] transition-colors">
            Book a call
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <GetGrowthModal />
        </div>

        {/* Logo + work preview — right */}
        <div className="flex flex-col gap-4 w-full md:w-[242px] md:items-end">
          <Image src="/logo.png" alt="Schoolhouse Lane" width={150} height={60} className="object-contain brightness-0 invert md:ml-auto" />
          <div className="relative w-full md:w-[242px] h-[200px] md:h-[296px] rounded-sm overflow-hidden">
            <Image src="/images/work-1.png" alt="Work preview" fill className="object-cover" />
          </div>
          <Link href="/work" className="flex items-center gap-4">
            <p className="font-semibold text-[16px] md:text-[18px] uppercase text-white">See All of Our Work</p>
            <div className="flex items-center justify-center bg-white rounded-full w-[44px] h-[44px] md:w-[55px] md:h-[55px] shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </div>
          </Link>
        </div>
      </div>

      <div className="border-t border-white/20 mt-12 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Link href="mailto:hello@schoolhouselane.co" className="text-[14px] md:text-[16px] text-white lowercase border-b border-white/50 w-fit hover:opacity-70">
          hello@schoolhouselane.co
        </Link>
        <div className="flex gap-6">
          <Link href="https://instagram.com/schoolhouselane" className="font-bold text-[14px] md:text-[16px] text-white border-b border-white/50">@SchoolhouseLane</Link>
          <Link href="/privacy" className="font-bold text-[14px] md:text-[16px] text-white border-b border-white/50">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
