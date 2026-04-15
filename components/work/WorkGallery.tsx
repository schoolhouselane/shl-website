import Image from 'next/image'

export default function WorkGallery() {
  return (
    <section className="bg-[#f5f3ef] pt-[80px] pb-[60px] md:pb-[120px]">
      <div className="flex gap-[16px] items-stretch px-5 md:px-[90px]">

        {/* Col 1 — tall portrait */}
        <div className="relative overflow-hidden h-[300px] md:h-[460px]" style={{ flex: '239 239 0' }}>
          <Image src="/images/work-life-1.png" alt="Life at SHL" fill className="object-cover object-center" sizes="(max-width: 768px) 40vw, 15vw" />
        </div>

        {/* Col 2 — two stacked */}
        <div className="flex flex-col gap-[16px] h-[300px] md:h-[460px]" style={{ flex: '553 553 0' }}>
          <div className="relative overflow-hidden" style={{ flex: '219 219 0' }}>
            <Image src="/images/work-life-2.png" alt="Life at SHL" fill className="object-cover object-center" sizes="(max-width: 768px) 60vw, 35vw" />
          </div>
          <div className="relative overflow-hidden" style={{ flex: '228 228 0' }}>
            <Image src="/images/work-life-3.png" alt="Life at SHL" fill className="object-cover object-center" sizes="(max-width: 768px) 60vw, 35vw" />
          </div>
        </div>

        {/* Col 3 — tall, hidden on mobile */}
        <div className="relative overflow-hidden h-[300px] md:h-[460px] hidden sm:block" style={{ flex: '407 407 0' }}>
          <Image src="/images/work-life-4.png" alt="Life at SHL" fill className="object-cover object-center" sizes="26vw" />
        </div>

        {/* Col 4 — two stacked, hidden on mobile */}
        <div className="flex flex-col gap-[16px] h-[300px] md:h-[460px] hidden md:flex" style={{ flex: '299 299 0' }}>
          <div className="relative overflow-hidden" style={{ flex: '296 296 0' }}>
            <Image src="/images/work-life-5.png" alt="Life at SHL" fill className="object-cover object-top" sizes="19vw" />
          </div>
          <div className="relative overflow-hidden" style={{ flex: '144 144 0' }}>
            <Image src="/images/work-life-6.png" alt="Life at SHL" fill className="object-cover object-top" sizes="19vw" />
          </div>
        </div>

      </div>
    </section>
  )
}
