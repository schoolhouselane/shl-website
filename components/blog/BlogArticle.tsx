'use client'
import Image from 'next/image'
import { useState } from 'react'
import type { BlogPost } from '@/lib/blog-data'

function ArrowUpRight({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

interface Props {
  post: BlogPost
}

export default function BlogArticle({ post }: Props) {
  const [copied, setCopied] = useState(false)

  function copyLink() {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const articleUrl = typeof window !== 'undefined' ? window.location.href : ''
  const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`
  const xShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(post.title)}`

  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] pt-[24px] md:pt-[60px] lg:pt-[120px] pb-[60px] lg:pb-[120px]">

      {/* Title row */}
      <div className="pb-[24px] md:pb-[40px] lg:pb-[60px]">
        {/* Mobile: byline above title */}
        <p className="md:hidden text-[12px] font-normal uppercase text-[#777] mb-[8px]">
          by {post.author.name}
        </p>
        <div className="flex items-start justify-between gap-[24px]">
          <h1 className="font-black text-[28px] md:text-[40px] lg:text-[64px] uppercase text-[#1e1e20] leading-none">
            {post.title}
          </h1>
          {/* Tablet + desktop: byline right side, w-fit avoids cascade bug */}
          <div className="hidden md:flex border-r border-[#1e1e20] items-start pt-[6px] pr-[20px] shrink-0 w-fit">
            <p className="font-normal text-[13px] lg:text-[16px] uppercase text-[#1e1e20] whitespace-nowrap">
              by {post.author.name}
            </p>
          </div>
        </div>
      </div>

      {/* Two-column layout: sidebar hidden on mobile */}
      <div className="flex flex-col md:flex-row md:gap-[28px] lg:gap-0 items-stretch">

        {/* ── Main content ── */}
        <div className="flex flex-col gap-[28px] lg:gap-[40px] w-full md:max-w-[629px] lg:max-w-[988px] shrink-0">

          {/* Intro paragraphs */}
          <div className="flex flex-col gap-[12px]">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
              In my twenty five years as an ad man, I've witnessed countless shifts in how we work. Technologies come and go, platforms evolve, and yet the central challenge of leadership remains strikingly human: how to communicate clearly, align teams, and drive real productivity.
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
              The pandemic accelerated remote and hybrid work models, and since then, much has been said about the productivity pitfalls of working from home. But I've come to believe we're diagnosing the wrong issue. Remote work isn't the problem, instant messaging is.
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
              Slack, Teams, WhatsApp, these tools were designed for speed. But in our quest for efficiency, we've unwittingly created a culture of low touch, low context communication that often leads to the abdication of responsibility. A quick "FYI" or a thumbs-up emoji doesn't equal clarity. It doesn't build trust. And it certainly doesn't drive accountability.
            </p>
            {/* Blockquote */}
            <div className="flex gap-[12px] md:gap-[17px] items-center">
              <div className="w-[3px] shrink-0 self-stretch bg-[#111]" />
              <p className="font-bold text-[16px] md:text-[18px] lg:text-[20px] text-[#1e1e20]">
                We've confused short messaging with clear communication.
              </p>
            </div>
          </div>

          {/* Section: The Illusion of Communication */}
          <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[30px]">
            <h2 className="font-black text-[18px] md:text-[20px] lg:text-[24px] text-[#111] tracking-[-0.48px]">
              The Illusion of Communication
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
              Think about it: how often have you seen a critical project update buried in a chat thread? Or watched a decision get "made" because someone sent a "👍" without truly engaging? This isn't collaboration, it's communication theater.
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
              When messages are stripped of tone, context, and consequence, responsibility diffuses. People assume someone else will act. Follow up becomes optional. And leaders are left with blind spots — places where things fall apart not because of malice, but because of ambiguity.
            </p>
          </div>

          {/* Section: Leadership in the Age of Low Touch */}
          <div className="flex flex-col gap-[12px]">
            <h2 className="font-black text-[18px] md:text-[20px] lg:text-[24px] text-[#111] tracking-[-0.48px]">
              Leadership in the Age of Low Touch Communication
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
              This is where emotional intelligence isn't just a nice to have, it's the core competency of modern leadership. Leaders today must be able to:
            </p>
            {/* Dark callout */}
            <div className="bg-[#1e1e20] p-[12px]">
              <p className="font-extrabold text-[14px] md:text-[16px] lg:text-[20px] text-white leading-relaxed">
                · Read between the lines of silent chats and unanswered threads.<br />
                · Sense disengagement even when the "online" indicator is green.<br />
                · Create clarity where tools create clutter.<br />
                · Restore human connection where technology has made interaction transactional.
              </p>
            </div>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
              Productivity blind spots now hide in plain sight: in the unread channel, the hastily closed ticket, the assumption that "someone's got it." It's not that people aren't working, it's that they're working in the dark, without the context, clarity, or confidence they need to truly own their outcomes.
            </p>
          </div>

          {/* In-article image */}
          <div className="relative w-full aspect-[988/453] overflow-hidden">
            <Image
              src="/images/blog/blog-article-body.png"
              alt="Remote working and communication"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 629px, 988px"
            />
          </div>

          {/* Section: From Low Touch to High Clarity */}
          <div className="flex flex-col gap-[12px]">
            <h2 className="font-black text-[18px] md:text-[20px] lg:text-[24px] text-[#111] tracking-[-0.48px]">
              From Low Touch to High Clarity
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
              At Schoolhouse Lane, we work with leadership teams to build brands and businesses that are aligned from the inside out. And alignment doesn't happen in a chat window. It happens in intentional conversation, structured collaboration, and a shared understanding of what clarity actually looks like.
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
              Here's what we advise our clients:
            </p>
            <ol className="list-decimal pl-[21px] md:pl-[30px] flex flex-col gap-[12px]">
              <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
                <span className="font-bold text-[#1e1e20]">Default to deliberate communication.</span>{' '}Replace FYIs with clear asks. Replace assumptions with confirmation.
              </li>
              <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
                <span className="font-bold text-[#1e1e20]">Reinforce the "why."</span>{' '}Context is everything. Don't just share the what, explain the why, again and again.
              </li>
              <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
                <span className="font-bold text-[#1e1e20]">Create rituals of reconnection.</span>{' '}Use video. Pick up the phone. Host regular syncs that are about more than task updates.
              </li>
              <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
                <span className="font-bold text-[#1e1e20]">Model ownership.</span>{' '}As a leader, your communication sets the tone. Choose clarity over speed, especially when it matters most.
              </li>
            </ol>
          </div>

          {/* Section: The Way Forward */}
          <div className="flex flex-col gap-[12px]">
            <h2 className="font-black text-[18px] md:text-[20px] lg:text-[24px] text-[#111] tracking-[-0.48px]">
              The Way Forward
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
              Remote work is here to stay — and that's a good thing. It offers flexibility, access to talent, and freedom from the confines of location. But we must not let the tools designed to connect us become the very things that disconnect us from purpose, clarity, and each other.
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
              The next generation of leadership won't be measured by who responds the fastest, but by who communicates the clearest. Who builds trust, not just threads. Who sees the human behind the handle.
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
              Because at the end of the day, productivity isn't about presence — it's about purpose. And purpose can't be summed up in a DM.
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#595959]">
              Schoolhouse Lane helps leaders build brands and teams that are aligned, accountable, and resilient in the face of change. If you're ready to turn communication from a blind spot into a superpower, let's talk.
            </p>
          </div>

          {/* Quote banner */}
          <div className="relative w-full overflow-hidden min-h-[160px] md:min-h-[200px] lg:h-[269px] flex items-center px-[16px] md:px-[20px] lg:px-[30px] py-[24px] md:py-[30px] lg:py-0">
            <Image
              src="/images/blog/blog-quote-bg.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 629px, 988px"
            />
            <div className="relative z-10 flex items-start gap-[16px] md:gap-[40px] lg:gap-[100px] w-full">
              <div className="relative h-[22px] md:h-[28px] lg:h-[34px] w-[55px] md:w-[70px] lg:w-[86px] shrink-0">
                <Image src="/logo-white.svg" alt="SHL" fill className="object-contain object-left" sizes="86px" />
              </div>
              <p className="font-black text-[22px] md:text-[28px] lg:text-[48px] leading-tight text-[#f2d836] uppercase tracking-[-1.6px] text-right" style={{ textShadow: '3px 1px 4px #f64343' }}>
                The bridge between confusion and clarity is{' '}
                <span className="text-[32px] md:text-[40px] lg:text-[80px] leading-[0.9] block">communication</span>
              </p>
            </div>
          </div>

        </div>

        {/* ── Sidebar — hidden on mobile ── */}
        <aside className="hidden md:flex flex-col gap-[40px] flex-1 border-l border-[#d0d0d0] pl-[16px] lg:pl-[29px]">

          {/* Share */}
          <div className="flex flex-col gap-[8px]">
            <p className="text-[9px] font-extrabold text-[#ababab] tracking-[1.44px] uppercase">
              Share this article
            </p>
            <a
              href={linkedInShare}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-black flex items-center gap-[4px] py-[8px] hover:opacity-60 transition-opacity"
            >
              <span className="text-[14px] lg:text-[16px] text-[#1e1e20] whitespace-nowrap">Share on LinkedIn</span>
              <ArrowUpRight size={20} />
            </a>
            <a
              href={xShare}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-black flex items-center gap-[4px] py-[8px] w-fit hover:opacity-60 transition-opacity"
            >
              <span className="text-[14px] lg:text-[16px] text-[#1e1e20] whitespace-nowrap">Share on X</span>
              <ArrowUpRight size={20} />
            </a>
            <button
              onClick={copyLink}
              className="border-b border-black flex items-center gap-[4px] py-[8px] w-fit hover:opacity-60 transition-opacity cursor-pointer"
            >
              <span className="text-[14px] lg:text-[16px] text-[#1e1e20] whitespace-nowrap">
                {copied ? 'Copied!' : 'Copy link'}
              </span>
              <ArrowUpRight size={20} />
            </button>
          </div>

          {/* Related articles */}
          <div className="flex flex-col gap-[18px]">
            <p className="text-[9px] font-extrabold text-[#ababab] tracking-[1.44px] uppercase">
              Related Articles
            </p>
            <div className="flex flex-col gap-[24px]">
              {post.relatedArticles.map((article, i) => (
                <div key={article.slug}>
                  <a href={`/blog/${article.slug}`} className="flex gap-[12px] items-center group">
                    <div className="relative shrink-0 w-[90px] h-[90px] lg:w-[114px] lg:h-[114px] overflow-hidden">
                      <Image
                        src={article.thumbnail}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 1280px) 90px, 114px"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] lg:gap-[12px] flex-1">
                      <p className="font-black text-[14px] lg:text-[18px] text-[#111] leading-[1.1] tracking-[-0.36px]">
                        {article.title}
                      </p>
                      <p className="text-[13px] lg:text-[15px] text-[#595959] leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </a>
                  {i < post.relatedArticles.length - 1 && (
                    <div className="mt-[24px] border-b border-[#e0e0e0]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* About the writer */}
          <div className="flex flex-col gap-[18px]">
            <p className="text-[9px] font-extrabold text-[#ababab] tracking-[1.44px] uppercase">
              About the Writer
            </p>
            <div className="flex gap-[12px] items-start">
              <div className="relative shrink-0 w-[90px] h-[88px] lg:w-[115px] lg:h-[113px] overflow-hidden bg-[#313131]">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1280px) 90px, 115px"
                />
              </div>
              <div className="flex flex-col gap-[8px] lg:gap-[12px] flex-1">
                <div className="flex flex-col gap-[4px]">
                  <p className="font-bold text-[15px] lg:text-[18px] text-[#111] leading-[1.1] tracking-[-0.36px]">
                    {post.author.name}
                  </p>
                  <p className="text-[9px] font-extrabold text-[#ababab] tracking-[1.44px] uppercase">
                    {post.author.role}
                  </p>
                </div>
                <p className="text-[13px] lg:text-[15px] text-[#595959] leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>

        </aside>
      </div>
    </section>
  )
}
