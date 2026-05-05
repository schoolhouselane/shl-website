import Image from 'next/image'

const logos = [
  { src: '/images/pricing/logo-lavit.svg',      alt: 'Lavit Sports',   w: 75,  h: 43  },
  { src: '/images/pricing/logo-datadirect.svg',  alt: 'DataDirect',     w: 137, h: 37  },
  { src: '/images/pricing/logo-shelby.svg',      alt: 'Shelby',         w: 157, h: 30  },
  { src: '/images/pricing/logo-manwipes.svg',    alt: 'Man Wipes',      w: 75,  h: 64  },
  { src: '/images/pricing/logo-vivo.svg',        alt: 'Vivo Hotels',    w: 99,  h: 59  },
  { src: '/images/pricing/logo-itv.svg',         alt: 'ITV OddsFinder', w: 136, h: 44  },
  { src: '/images/pricing/logo-funteron.svg',    alt: 'Funteron',       w: 87,  h: 80  },
  { src: '/images/pricing/logo-hubbcat.png',     alt: 'Hubbcat',        w: 144, h: 64  },
]

export default function PricingLogos() {
  return (
    <section className="bg-[#f5f3ef] border-b border-[#1e1e20]/10 px-4 md:px-6 lg:px-[90px] py-[28px] md:py-[36px]">
      {/* Desktop: one row, evenly spaced */}
      <div className="hidden md:flex items-center justify-between gap-[20px] lg:gap-[40px]">
        {logos.map((logo) => (
          <div key={logo.alt} className="flex items-center justify-center shrink-0">
            {/* SVG logos rendered via img for natural colour rendering */}
            {logo.src.endsWith('.svg') ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                style={{ width: logo.w, height: logo.h, objectFit: 'contain' }}
              />
            ) : (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className="object-contain"
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile: 2-column grid */}
      <div className="grid grid-cols-4 gap-x-[16px] gap-y-[24px] items-center md:hidden">
        {logos.map((logo) => (
          <div key={logo.alt} className="flex items-center justify-center">
            {logo.src.endsWith('.svg') ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ maxWidth: '100%', maxHeight: 36, objectFit: 'contain' }}
              />
            ) : (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className="object-contain max-h-[36px] w-auto"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
