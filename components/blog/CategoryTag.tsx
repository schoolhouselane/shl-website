import { normalizeCategory } from '@/lib/blog-categories'

interface Props {
  category: string
  /**
   * `card`    — inside the #1e1e20 listing card, above the title (Figma 2753:2821)
   * `article` — article title row, above the byline (Figma SHL_Blogs detail)
   */
  variant?: 'card' | 'article'
  className?: string
}

/**
 * Plain text label, not a pill — Figma renders the category as regular-weight
 * copy above the card title, and as small uppercase copy above the article
 * byline. The pill treatment in this design system belongs to the filter chips.
 */
export default function CategoryTag({ category, variant = 'card', className = '' }: Props) {
  const label = normalizeCategory(category)

  const tone =
    variant === 'card'
      ? 'font-normal text-[13px] md:text-[16px] text-white'
      : 'font-normal text-[12px] md:text-[14px] lg:text-[16px] uppercase text-[#777]'

  return <p className={`${tone} leading-normal ${className}`}>{label}</p>
}
