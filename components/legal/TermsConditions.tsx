function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[16px] md:gap-[30px] w-full">
      <h2 className="font-black text-[18px] md:text-[20px] lg:text-[24px] text-[#1e1e20] tracking-[-0.48px] leading-[1.1]">{title}</h2>
      <div className="text-[14px] md:text-[16px] lg:text-[20px] text-[#595959] leading-normal">{children}</div>
    </div>
  )
}

export default function TermsConditions() {
  return (
    <div className="w-full bg-[#f5f3ef] pt-[82px]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
      <div className="px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[120px] max-w-[1730px] mx-auto">

        {/* Page title */}
        <div className="pb-[40px] md:pb-[60px]">
          <h1 className="font-black text-[36px] md:text-[48px] lg:text-[64px] text-[#1e1e20] uppercase leading-normal">
            Terms &amp; Conditions
          </h1>
        </div>

        <div className="flex flex-col gap-[48px] md:gap-[60px] lg:gap-[80px]">

          {/* Intro */}
          <div className="text-[14px] md:text-[16px] lg:text-[20px] text-[#595959] leading-normal space-y-4">
            <p>
              Schoolhouse Lane respects the privacy of all visitors to our website. These Terms and Conditions set out the rules governing your use of <span className="font-medium">www.schoolhouselane.co</span>. We may update these Terms and Conditions from time to time to reflect changes in our business, technology, or applicable laws and regulations. We may update our Cookie Policy from time to time to reflect any changes in technology or legislation which may affect the way in which cookies are used by us and how you as a user, can manage them.
            </p>
          </div>

          <Section title="What are cookies?">
            <div className="space-y-4">
              <p>
                These Terms and Conditions govern how users access and use the Schoolhouse Lane website and the content made available on it.
              </p>
              <p>
                By accessing the website, you agree to comply with these Terms and Conditions. Continued use of the website indicates your acceptance of any updates or changes to them.
              </p>
              <p>
                If you choose not to accept these Terms and Conditions/Cookies, or if you breach them, certain features or functionality of <span className="font-medium">www.schoolhouselane.co</span> may not be available to you or your access may be restricted.
              </p>
            </div>
          </Section>

          <Section title="Which cookies does Schoolhouse Lane use?">
            <div className="space-y-4">
              <p>
                When you use the <span className="font-medium">www.schoolhouselane.co</span> website, certain features and services are made available to enable the website to operate correctly and efficiently.
              </p>
              <p>These features support core website functionality, including:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>allowing secure access to areas of the website where applicable;</li>
                <li>maintaining continuity during your visit; and</li>
                <li>enabling the proper display and operation of website content.</li>
              </ul>
              <p>
                These core features are necessary for the operation of the website and cannot be disabled without affecting the availability or functionality of the site. They do not involve the use of personally identifiable information beyond what is required for the website to function.
              </p>
            </div>
          </Section>

          <Section title="Performance cookies">
            <div className="space-y-4">
              <p>
                We may collect aggregated and anonymised information about how visitors use the website, including which pages are viewed and how content is accessed.
              </p>
              <p>
                This information does not identify individual users and is used solely to help us understand how the website is used, which content is most relevant, and how we can improve the structure, performance and user experience of the website.
              </p>
              <p>
                You can manage or restrict certain aspects of website tracking through your browser settings. Please note that limiting such tracking may affect the functionality or performance of the website.
              </p>
            </div>
          </Section>

          <Section title="Functional cookies">
            <div className="space-y-4">
              <p>
                The website may use functionality that allows it to remember certain choices or preferences you make during your visit in order to provide a more efficient and user-friendly experience.
              </p>
              <p>This may include:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>remembering display or device preferences, such as optimising the website for mobile devices;</li>
                <li>maintaining continuity during your visit so actions are not repeated unnecessarily; and</li>
                <li>supporting interactive features where available.</li>
              </ul>
              <p>
                Any such functionality is used solely to enhance the operation of the website and does not involve the collection of unnecessary personal data. You may be able to manage or limit certain functionality through your browser or device settings, although doing so may affect the availability or performance of some features of the website.
              </p>
            </div>
          </Section>

          <Section title="Targeting and advertising cookies">
            <div className="space-y-4">
              <p>
                The website may include content, advertisements, or links provided by third-party services to enhance the experience or provide information relevant to users.
              </p>
              <p>
                These third-party services may use data about your interactions with their content to improve the relevance of information or measure the effectiveness of their services.
              </p>
              <p>
                Schoolhouse Lane does not control these third-party services and is not responsible for their practices. For information on how to manage or limit your interactions with third-party content or advertising, please refer directly to the relevant third-party service providers.
              </p>
            </div>
          </Section>

          <Section title="Other third party cookies">
            <div className="space-y-4">
              <p>
                Some content on our website may be provided or embedded by third-party services, such as videos, social media feeds, or other interactive features.
              </p>
              <p>
                Schoolhouse Lane does not control these third-party services or the way they operate, and we are not responsible for any data, content, or functionality provided by them.
              </p>
              <p>
                We recommend reviewing the terms, privacy policies, and usage guidelines of any third-party websites or services you interact with through our website.
              </p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  )
}
