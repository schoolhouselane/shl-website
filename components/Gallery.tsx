import Image from 'next/image'

export default function Gallery() {
  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] pb-[90px] md:pb-[180px]">
      <Image
        src="/images/gallery-hero.png"
        alt="Gallery & Videos"
        width={1729}
        height={1092}
        className="w-full h-auto rounded-sm"
      />
    </section>
  )
}
