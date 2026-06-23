'use client'
import { useState } from 'react'

function ArrowUpRight({ className = '' }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

function AccordionSection({
  num,
  title,
  subtitle,
  children,
}: {
  num: string
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(true)

  return (
    <div className="border-b border-[rgba(30,30,32,0.3)] py-[20px] md:py-[30px] w-full">
      <p className="font-black text-[14px] md:text-[16px] text-[#1e1e20] tracking-[-0.64px] mb-[12px] md:mb-0">{num}</p>
      <div className="flex items-start justify-between gap-4 mt-0 md:mt-0">
        <div className="flex flex-col gap-[8px] md:gap-[12px] flex-1">
          <p className="font-black text-[16px] md:text-[18px] lg:text-[20px] text-[#1e1e20] uppercase leading-normal">{title}</p>
          <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#1e1e20] leading-normal">{subtitle}</p>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="border border-[#1e1e20] flex items-center justify-center rounded-full w-[44px] h-[44px] md:w-[55px] md:h-[55px] shrink-0 hover:bg-[#1e1e20] hover:text-white transition-colors"
          aria-label={open ? 'Collapse section' : 'Expand section'}
        >
          <ArrowUpRight className={`transition-transform duration-200 ${open ? 'rotate-0' : 'rotate-90'}`} />
        </button>
      </div>

      {open && (
        <div className="mt-[24px] md:mt-[30px] text-[14px] md:text-[16px] lg:text-[20px] text-[#595959] leading-normal space-y-4">
          {children}
        </div>
      )}
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[16px] md:gap-[30px] w-full">
      <h2 className="font-black text-[18px] md:text-[20px] lg:text-[24px] text-[#1e1e20] tracking-[-0.48px] leading-[1.1]">{title}</h2>
      <div className="text-[14px] md:text-[16px] lg:text-[20px] text-[#595959] leading-normal">{children}</div>
    </div>
  )
}

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-[#f5f3ef] pt-[82px]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
      <div className="px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[120px] max-w-[1730px] mx-auto">

        {/* Page title */}
        <div className="pb-[40px] md:pb-[60px]">
          <h1 className="font-black text-[36px] md:text-[48px] lg:text-[64px] text-[#1e1e20] uppercase leading-normal">
            Privacy Policy
          </h1>
        </div>

        <div className="flex flex-col gap-[48px] md:gap-[60px] lg:gap-[80px]">

          {/* About us */}
          <Section title="About us">
            <p>
              This website is operated by Schoolhouse Lane, Dublin, Ireland, is a wholly owned subsidiary of Orange, Brown &amp; Blue Limited (the &ldquo;Parent Company&rdquo;). We are an independent brand strategy agency. We provide business services to our corporate clients, including research studies into public and/or consumer sentiment about their business, their products and/or the sector in which they belong.
            </p>
          </Section>

          {/* Who does this apply to */}
          <Section title="Who does this privacy notice apply to?">
            <div className="space-y-4">
              <p>
                This website is operated by Schoolhouse Lane, Dublin, Ireland, is a wholly owned subsidiary of Orange, Brown &amp; Blue Limited (the &ldquo;Parent Company&rdquo;). We are an independent brand strategy agency. We provide business services to our corporate clients, including research studies into public and/or consumer sentiment about their business, their products and/or the sector in which they belong.
              </p>
              <p>
                This privacy notice applies to individuals who access, browse and use our website, www.schoolhouselane.co. Its aim is to give you information on how we collect and process your personal data through your use of the website, including any personal data you may provide when you contact us or sign up to our newsletter or from your browsing activity on our website.
              </p>
              <p>This website is not intended for children and we do not knowingly collect data relating to children.</p>
              <p>This privacy notice also applies to our corporate clients and their staff who may use our website and who engage our corporate services.</p>
              <p>
                It is important that you read this privacy notice together with any other privacy notice or fair processing policy we may provide on specific occasions when we are collecting or processing personal data about you so that you are aware of how and why we are using your personal data.
              </p>
            </div>
          </Section>

          {/* Research participation */}
          <Section title="This privacy notice does not relate to research participation">
            <div className="space-y-4">
              <p>
                Orange Brown &amp; Blue Limited is not a &lsquo;controller&rsquo; of, and this privacy notice does not relate to the processing of, personal data of individuals who participate (Participant) in market research studies we manage and carry out on behalf of our corporate clients (Research Client).
              </p>
              <p>
                The third party fieldwork agency who recruits and contracts with Participants is a controller of Participants&rsquo; personal data. Participants should consult their fieldwork agency&rsquo;s privacy notices to understand their data protection practices.
              </p>
              <p>
                A Research Client whose identity is made known to Participants by the fieldwork agency and/or in any research participant form we provide and/or any form of consent we provide is also a controller of Participants&rsquo; personal data. Please see the Participant Privacy Notice www.schoolhouselane.co published on our website and/or made available to Participants before their participation in a research project begins.
              </p>
            </div>
          </Section>

          {/* Third party links */}
          <Section title="Third party links">
            <p>
              Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third party websites and are not responsible for their privacy notices. When you leave our website, we encourage you to read the privacy notices of every website you visit.
            </p>
          </Section>

          {/* Numbered accordion sections */}
          <div className="flex flex-col w-full">
            <AccordionSection
              num="01"
              title="Types of personal data we process"
              subtitle={`"Personal data" means information about an individual from which that person can be identified. It does not include data where an individual's identity has been removed (anonymous data).`}
            >
              <p>
                Throughout this privacy notice we use the term <strong>&ldquo;processing&rdquo;</strong> to refer to all activities involving your personal data, including collecting, handling, storing, sharing, accessing, using, transferring, erasing and disposing of it.
              </p>
              <p>
                The personal data we collect about you depends on the particular activities carried out through our website and whether or not we are providing brand strategy of other corporate services to you or your employer. Typically we collect and process the following kinds of personal data:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>Identity and Contact Data</strong> including your title, name, address, contact details and any personal data provided when contacting us and, in the case of our clients, any personal data provided in the course of us providing our services.</li>
                <li><strong>Financial Data</strong> includes bank account and other information necessary for processing payments and fraud prevention, including payment card numbers, security code numbers, other related billing information and credit related data relating to our clients.</li>
                <li><strong>Transaction Data</strong> includes details about payments to and from our clients and personal data relating to the administration, management and performance of the corporate services provided to our clients.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access our website.</li>
                <li><strong>Usage Data</strong> includes the services you viewed or searched for, page response times, download errors, length of visits and page interaction information (such as scrolling, clicks, and mouse-overs).</li>
                <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing communications from us and your communication preferences.</li>
              </ul>
              <p>
                We also collect, use and share aggregated data such as statistical or demographic data for various purposes. Aggregated data may be derived from your personal data but is not considered personal data in law as this data does not directly or indirectly reveal your identity.
              </p>
              <p>
                We do <strong>not</strong> collect any <strong>special categories of personal data</strong> about you (this is personal data that reveals racial or ethnic origin, political opinions, religious or philosophical beliefs or trade union membership; genetic data; biometric data for the purpose of uniquely identifying an individual or data concerning health or sexual orientation). Nor do we collect any information about criminal convictions and offences.
              </p>
              <p>
                Where we need to collect personal data by law, or under the terms of a contract we have with you, and you do not provide that personal data when requested, we may not be able to perform the contract we have or are trying to enter into with you.
              </p>
            </AccordionSection>

            <AccordionSection
              num="02"
              title="How your personal data is received"
              subtitle="We may receive your personal data through various means including"
            >
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Direct interactions:</strong> You may give us your Identity and Contact Data by filling in website forms or by corresponding with us by post, phone, email, SMS, social media or otherwise. This includes personal data you provide when you subscribe to our publications including our newsletters; request marketing to be sent to you; enter a competition, promotion or survey; give us feedback or contact us.
                </li>
                <li>
                  <strong>Automated technologies or interactions:</strong> As you interact with our website, we collect Technical Data and Usage Data including details of your device, browsing actions and patterns, searches, sections view, traffic data, web logs and other communication data and the resources that you access. We collect this personal data by using cookies, server logs and other similar technologies.
                </li>
                <li>
                  <strong>Third party sources:</strong> We may also receive personal data about you from third parties, as set out below.
                </li>
              </ul>
              <p>
                Technical Data from the following parties: analytics providers such as Google Analytics; Identity and Contact Data, Financial and Transaction Data from providers of technical and payment services such as PayPal. Identity and Contact Data from publicly available sources such as the Companies Registration Office (CRO).
              </p>
            </AccordionSection>

            <AccordionSection
              num="03"
              title="How we use your personal data"
              subtitle="We have set out below a description of the ways we typically process your personal data and the legal grounds we rely on to do so."
            >
              <p>
                <strong>Purpose / Activity — Type of Data — Grounds for processing</strong>
              </p>
              <p>To respond to any queries you submit through the website, telephone, social media or other electronic means.</p>
              <p>Identity and Contact Data — Necessary for our legitimate interests (for running our business and to develop new business).</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Necessary for the performance of a contract with you or in order to take steps at your request prior to entering into a contract.</li>
                <li>To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data).</li>
                <li>Necessary for our legitimate interests (for running our business, provision of administration and IT services to us, network security, to identify and prevent fraud and in the context of a business reorganisation or group restructuring exercise).</li>
                <li>Necessary to comply with a legal obligation.</li>
                <li>To manage our relationship with you which will include notifying you about changes to our terms or privacy notice and asking you to provide feedback or take a survey.</li>
                <li>Necessary to comply with a legal obligation.</li>
                <li>Necessary for our legitimate interests (to keep our records updated).</li>
                <li>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you.</li>
              </ul>
              <p>
                Generally, we do not rely on consent as a legal grounds for processing your personal data although we will request your consent before sending direct marketing communications to you via email or text message.
              </p>
              <p>
                <strong>Marketing:</strong> We would like to send you information about our services, insights and offers, which may be of interest to you. Where we have your consent or it is in our legitimate interests to do so, we may do this by email, post, telephone, text message (SMS) or automated call.
              </p>
              <p>We will only ask whether you would like us to send you marketing messages when you subscribe to our mailing list on our website.</p>
              <p>If you have previously agreed to being contacted in this way, you can unsubscribe at any time by using the &lsquo;unsubscribe&rsquo; link in emails or by contacting us using the information set out in section 14 below.</p>
            </AccordionSection>

            <AccordionSection
              num="04"
              title="Disclosure of your personal data"
              subtitle="We have set out below a description of the ways we typically process your personal data and the legal grounds we rely on to do so."
            >
              <p>Except as set out in this privacy notice, we do not disclose to any third party personal data that we collect from you or you provide to us. We may have to share personal data with the parties set out below for the purposes set out in the table above.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Internal third parties:</strong> Companies (i.e. a parent company, a subsidiary company and/or a parent of another subsidiary company) for the provision of and administration of our website and to assist us in providing our corporate services to clients.
                </li>
                <li>
                  <strong>External third parties:</strong> Companies that provide products and services to us such as professional advisors, IT systems suppliers and support, data storage, IT developers, analytics companies, website hosting providers and other service providers.
                </li>
                <li>
                  <strong>Public and Government Authorities:</strong> Entities that regulate or have jurisdiction over us. We will disclose personal data in order to comply with any legal obligation, if we are ordered to do so by a court of competent jurisdiction, law enforcement, regulatory or administrative authorities or in order to enforce a contract with you or to protect our rights, property or safety and that of our staff, clients, website users and/or others.
                </li>
                <li>
                  <strong>Corporate activity:</strong> Third parties to whom we may choose to sell, transfer or merge parts of our business or our assets. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this privacy notice.
                </li>
              </ul>
              <p>
                We require all third parties, who we disclose personal data which we collect under this privacy notice, to respect the security of personal data and to treat it in accordance with the law.
              </p>
            </AccordionSection>
          </div>

          {/* International transfers */}
          <Section title="International transfers">
            <p>Your personal data will not be transferred outside of the European Economic Area.</p>
          </Section>

          {/* Updating personal data */}
          <Section title="Updating your personal data">
            <p>It is important that the personal data we hold about you is accurate and current. Please keep us informed, using the information provided below if any of your personal data changes during your relationship with us.</p>
          </Section>

          {/* Data security */}
          <Section title="Data security">
            <p>
              We have appropriate security measures in place to prevent personal data from being accidentally lost or used or accessed in an unauthorised way. We limit access to your personal data to those who have a genuine business need to know it. Those processing your personal data will do so only in an authorised manner and are subject to obligations of confidentiality. You recognise that no entity can keep personal data fully secure. If you have reason to believe that any of your personal data is no longer secure, please notify us immediately by contacting us using the information provided in section 13 below.
            </p>
          </Section>

          {/* Data retention */}
          <Section title="Data retention">
            <p>
              We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect of our relationship with you. In some circumstances we will anonymise your personal data (so that it can no longer be associated with you) for statistical purposes, in which case we may use this information indefinitely without further notice to you.
            </p>
          </Section>

          {/* Legal rights */}
          <Section title="Your legal rights">
            <div className="space-y-4">
              <p>Under certain circumstances, by law you may have the right to:</p>
              <ul className="list-disc space-y-3 pl-6">
                <li><strong>Request access to your personal data</strong> (commonly known as a &ldquo;data subject access request&rdquo;). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.</li>
                <li><strong>Request correction of the personal data that we hold about you.</strong> This enables you to have any incomplete or inaccurate personal data we hold about you corrected.</li>
                <li><strong>Request erasure of your personal data.</strong> This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it.</li>
                <li><strong>Object to processing of your personal data</strong> where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground.</li>
                <li><strong>Request restriction of processing of your personal data.</strong> This enables you to ask us to suspend the processing of your personal data in certain scenarios.</li>
                <li><strong>Request the transfer of your personal data</strong> to you or to a third party in a structured, commonly used, machine-readable format.</li>
                <li><strong>Right to withdraw consent:</strong> If you provided your consent to the processing of your personal data for a specific purpose, you have the right to withdraw your consent for that specific processing at any time.</li>
              </ul>
              <p>
                In order to exercise one or more of your rights in respect of your personal data, please contact us in writing using the information provided in section 14 below.
              </p>
              <p>
                You have the right to make a complaint at any time to the Data Protection Commission, the Irish supervisory authority for data protection issues (www.dataprotection.ie).
              </p>
            </div>
          </Section>

          {/* Changes to privacy notice */}
          <div className="flex flex-col gap-[12px] w-full">
            <h2 className="font-black text-[18px] md:text-[20px] lg:text-[24px] text-[#111] tracking-[-0.48px] leading-[1.1]">
              Changes to this privacy notice
            </h2>
            <div className="flex gap-[17px] items-start">
              <div className="bg-[#111] w-[3px] self-stretch shrink-0 rounded-full" />
              <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#1f1f1f] leading-normal">
                <span className="font-light">We will change this privacy notice from time to time and any changes will be contained in a revised privacy notice posted on the website. This version of the privacy notice was last updated on </span>
                <strong>23 June 2026</strong>
                <span className="font-light"> and historic versions can be obtained by contacting us.</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
