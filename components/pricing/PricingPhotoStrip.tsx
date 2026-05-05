import Image from 'next/image'

/*
  Figma node 1430:6251 — 4 photos, exact widths/heights from design.
  Photos are left-aligned; the remaining right side is intentionally empty.

  Figma sizes (desktop):
    photo-1: 235 × 292
    photo-2: 289 × 293  (image crops: h=122%, top=-22.58% to centre vertically)
    photo-3: 236 × 293
    photo-4: 235 × 292
*/

const photos = [
  {
    src: '/images/pricing/photo-1.webp',
    /* desktop */ lgW: 235, lgH: 292,
    /* tablet  */ mdW: 160, mdH: 200,
    crop: null,
  },
  {
    src: '/images/pricing/photo-2.webp',
    lgW: 289, lgH: 293,
    mdW: 197, mdH: 200,
    /* vertical centre-crop as in Figma */
    crop: { h: '122.19%', top: '-22.58%' },
  },
  {
    src: '/images/pricing/photo-3.webp',
    lgW: 236, lgH: 293,
    mdW: 161, mdH: 200,
    crop: null,
  },
  {
    src: '/images/pricing/photo-4.webp',
    lgW: 235, lgH: 292,
    mdW: 160, mdH: 200,
    crop: null,
  },
]

export default function PricingPhotoStrip() {
  return (
    <div className="w-full bg-[#f5f3ef] overflow-hidden">
      <div className="flex items-center">
        {photos.map((p, i) => (
          <div
            key={i}
            className="relative shrink-0 overflow-hidden"
            style={{
              width: `clamp(${p.mdW}px, ${(p.lgW / 1730) * 100}vw, ${p.lgW}px)`,
              height: `clamp(${p.mdH}px, ${(p.lgH / 1730) * 100}vw, ${p.lgH}px)`,
            }}
          >
            {p.crop ? (
              /* Centre-crop exactly as Figma specifies */
              <div className="absolute inset-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt=""
                  className="absolute max-w-none pointer-events-none"
                  style={{ width: '100.01%', height: p.crop.h, top: p.crop.top, left: '-0.01%' }}
                />
              </div>
            ) : (
              <Image
                src={p.src}
                alt=""
                fill
                className="object-cover object-top"
                sizes="289px"
              />
            )}
          </div>
        ))}
        {/* Right side intentionally empty — matches Figma */}
      </div>
    </div>
  )
}
