import { normalizeTags } from '@/lib/blog-categories'
import type { BlogPost } from '@/lib/blog-data'

interface Props {
  post: Pick<BlogPost, 'category' | 'tags'>
  /**
   * `card`    — inside the #1e1e20 listing card, above the title (Figma 2753:2821)
   * `article` — article title row, above the byline (Figma SHL_Blogs detail)
   */
  variant?: 'card' | 'article'
  className?: string
}

/**
 * Plain text, not a pill — Figma renders the tag as regular-weight copy above
 * the card title and as small uppercase copy above the article byline. The pill
 * treatment in this design system belongs to the filter chips.
 *
 * A post can carry several tags; they render as one middot-separated line so
 * the card keeps the single-line slot the design allows for.
 */
export default function CategoryTag({ post, variant = 'card', className = '' }: Props) {
  const tags = normalizeTags(post.tags?.length ? post.tags : post.category)

  const tone =
    variant === 'card'
      ? 'font-normal text-[13px] md:text-[16px] text-white'
      : 'font-normal text-[12px] md:text-[14px] lg:text-[16px] uppercase text-[#777]'

  return <p className={`${tone} leading-normal ${className}`}>{tags.join(' · ')}</p>
}
