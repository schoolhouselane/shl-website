import Image from 'next/image'

const testimonials = [
  {
    name: 'Adam Ferris',
    company: 'DataDirect',
    photo: '/images/pricing/person-adam.webp',
    quote: '"Within 60 days of the rebrand, our close rate on enterprise deals went from 28% to 47%. Turns out our old brand was doing the selling against us."',
  },
  {
    name: 'Tim Whyte',
    company: 'Vivo Hotels',
    photo: '/images/pricing/person-tim.webp',
    quote: '"Schoolhouse Lane gave us the brand that finally matched the quality of our product. We raised our Series A three months after the rebrand — investors noticed immediately."',
  },
  {
    name: 'Alan Bates',
    company: 'CEO at Hubbcat',
    photo: '/images/pricing/person-alan.webp',
    quote: '"Working with Schoolhouse Lane transformed how we present ourselves to the market. Our brand finally reflects the level of expertise and innovation we deliver. The impact was immediate and measurable."',
  },
]

export default function PricingTestimonials() {
  return (
    <section className="bg-[#1e1e20] px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[120px]">
      <h2 className="font-black text-[22px] md:text-[40px] lg:text-[56px] uppercase text-white leading-[1.05] tracking-tight mb-[32px] md:mb-[60px] lg:mb-[80px] max-w-[700px]">
        What happens when<br />your brand gets serious.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[20px] lg:gap-[52px]">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-[16px] md:rounded-[20px] px-[20px] py-[20px] md:px-[24px] md:py-[22px] flex flex-col gap-[16px] md:gap-[12px]"
          >
            {/* Author */}
            <div className="flex items-center gap-[14px]">
              <div className="relative w-[64px] h-[64px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] shrink-0">
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  className="object-cover object-center rounded-full"
                  sizes="90px"
                />
              </div>
              <div>
                <p className="font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#1e1e20]">{t.name}</p>
                <p className="text-[13px] md:text-[14px] lg:text-[16px] text-[#1e1e20] italic font-extralight">{t.company}</p>
              </div>
            </div>
            {/* Quote */}
            <p className="font-bold italic text-[14px] md:text-[16px] lg:text-[24px] text-[#1e1e20] leading-snug">
              {t.quote}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
