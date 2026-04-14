import Image from 'next/image'

export default function WorkGallery() {
  return (
    <section className="bg-[#f5f3ef] py-[60px] md:py-[120px] px-5 md:px-[90px]">

      {/* Mobile: simple 2-col grid */}
      <div className="grid grid-cols-2 gap-[8px] md:hidden">
        {[
          { src: '/images/gallery-1.png', aspect: '1/1' },
          { src: '/images/gallery-2.png', aspect: '1/1' },
          { src: '/images/work-4.png',    aspect: '1/1' },
          { src: '/images/gallery-4.png', aspect: '1/1' },
        ].map(({ src, aspect }) => (
          <div key={src} className="relative overflow-hidden" style={{ aspectRatio: aspect }}>
            <Image src={src} alt="SHL Work" fill className="object-cover" sizes="50vw" />
          </div>
        ))}
      </div>

      {/* Desktop: masonry multi-column layout */}
      <div className="hidden md:flex gap-[12px] items-stretch w-full overflow-hidden">

        {/* Col 1 — tall single */}
        <div className="relative flex-[2] min-h-[420px] overflow-hidden">
          <Image
            src="/images/gallery-1.png"
            alt="SHL Work"
            fill
            className="object-cover"
            sizes="25vw"
          />
        </div>

        {/* Col 2 — two stacked */}
        <div className="flex flex-col gap-[12px] flex-[2]">
          <div className="relative overflow-hidden" style={{ aspectRatio: '1 / 0.6' }}>
            <Image
              src="/images/gallery-2.png"
              alt="SHL Work"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative overflow-hidden flex-1 min-h-[100px]">
            <Image
              src="/images/gallery-3.png"
              alt="SHL Work"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        </div>

        {/* Col 3 — narrow tall */}
        <div className="relative flex-1 min-h-[420px] overflow-hidden">
          <Image
            src="/images/work-3.png"
            alt="SHL Work"
            fill
            className="object-cover"
            sizes="15vw"
          />
        </div>

        {/* Col 4 — two stacked */}
        <div className="flex flex-col gap-[12px] flex-[2]">
          <div className="flex gap-[12px] flex-1">
            <div className="relative overflow-hidden flex-1">
              <Image
                src="/images/work-4.png"
                alt="SHL Work"
                fill
                className="object-cover"
                sizes="15vw"
              />
            </div>
            <div className="relative overflow-hidden flex-[2.5]">
              <Image
                src="/images/gallery-4.png"
                alt="SHL Work"
                fill
                className="object-cover"
                sizes="20vw"
              />
            </div>
          </div>
          <div className="relative overflow-hidden min-h-[160px]">
            <Image
              src="/images/work-5.png"
              alt="SHL Work"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
