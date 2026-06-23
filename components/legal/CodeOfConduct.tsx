function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[16px] md:gap-[30px] w-full">
      <h2 className="font-black text-[18px] md:text-[20px] lg:text-[24px] text-[#1e1e20] tracking-[-0.48px] leading-[1.1]">{title}</h2>
      <div className="text-[14px] md:text-[16px] lg:text-[20px] text-[#595959] leading-normal">{children}</div>
    </div>
  )
}

export default function CodeOfConduct() {
  return (
    <div className="w-full bg-[#f5f3ef] pt-[82px]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
      <div className="px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[120px] max-w-[1730px] mx-auto">

        {/* Page title */}
        <div className="pb-[40px] md:pb-[60px]">
          <h1 className="font-black text-[36px] md:text-[48px] lg:text-[64px] text-[#1e1e20] uppercase leading-normal">
            Code of Conduct
          </h1>
        </div>

        <div className="flex flex-col gap-[48px] md:gap-[60px] lg:gap-[80px]">

          {/* Intro */}
          <div className="text-[14px] md:text-[16px] lg:text-[20px] text-[#595959] leading-normal space-y-4">
            <p>At Schoolhouse Lane, we believe great work happens when people feel respected, heard, and free to bring their best thinking forward.</p>
            <p>
              <strong className="text-[#595959]">Our Code of Conduct</strong> sets out the standards we expect from everyone who interacts with Schoolhouse Lane, including our team, clients, partners, collaborators, suppliers, and visitors to our website or digital platforms.
            </p>
            <p>We are committed to creating a professional, inclusive, and respectful environment where creativity, curiosity, and collaboration can thrive.</p>
          </div>

          <Section title="Our Standards">
            <div className="space-y-4">
              <p>We expect everyone engaging with Schoolhouse Lane to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Treat others with respect, courtesy, and professionalism.</li>
                <li>Communicate honestly, clearly, and constructively.</li>
                <li>Respect different perspectives, backgrounds, experiences, and ideas.</li>
                <li>Work collaboratively and in good faith.</li>
                <li>Protect confidential information shared during projects, conversations, or business relationships.</li>
                <li>Use our website, content, platforms, and communication channels responsibly.</li>
                <li>Act with integrity in all professional interactions.</li>
              </ul>
            </div>
          </Section>

          <Section title="Unacceptable Behaviour">
            <div className="space-y-4">
              <p>We do not tolerate behaviour that is harmful, abusive, discriminatory, or unprofessional. This includes, but is not limited to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Harassment, bullying, intimidation, or threats.</li>
                <li>Discrimination based on race, ethnicity, nationality, gender, age, disability, religion, sexual orientation, or any other protected characteristic.</li>
                <li>Offensive, abusive, or inappropriate language.</li>
                <li>Deliberate disruption of meetings, projects, communication channels, or digital platforms.</li>
                <li>Sharing confidential, private, or sensitive information without permission.</li>
                <li>Misuse of Schoolhouse Lane&rsquo;s website, forms, systems, intellectual property, or digital assets.</li>
                <li>Spam, fraudulent activity, impersonation, or illegal behaviour.</li>
                <li>Any conduct that damages trust, safety, or the professional environment we aim to maintain.</li>
              </ul>
            </div>
          </Section>

          <Section title="Working With Clients and Partners">
            <div className="space-y-4">
              <p>We value strong, transparent relationships with our clients and partners. We expect all parties to engage with mutual respect, clear communication, and a shared commitment to doing good work.</p>
              <p>This means being honest about expectations, timelines, responsibilities, feedback, approvals, and deliverables. Constructive challenge is welcome. Disrespectful behaviour is not.</p>
            </div>
          </Section>

          <Section title="Digital and Website Use">
            <div className="space-y-4">
              <p>Visitors using the Schoolhouse Lane website or contacting us through digital forms, email, or other online channels must do so responsibly.</p>
              <p>You must not attempt to misuse, damage, interfere with, or gain unauthorised access to our website, systems, data, forms, accounts, or connected services.</p>
              <p>You must also not use our website or communication channels to send spam, malicious content, false information, abusive messages, or unlawful material.</p>
            </div>
          </Section>

          <Section title="Inclusion and Respect">
            <div className="space-y-4">
              <p>Schoolhouse Lane values diversity of thought, background, experience, and perspective. We believe better ideas are created when people feel safe to contribute openly and respectfully.</p>
              <p>We are committed to maintaining an environment where people are judged by the quality of their contribution, their integrity, and their willingness to collaborate.</p>
            </div>
          </Section>

          <Section title="Confidentiality">
            <div className="space-y-4">
              <p>During the course of our work, we may exchange business, creative, strategic, technical, or personal information. We expect all parties to respect confidentiality and handle sensitive information with care.</p>
              <p>Confidential information should not be shared, published, copied, or used outside its intended purpose without clear permission.</p>
            </div>
          </Section>

          {/* Reporting Concerns */}
          <div className="flex flex-col gap-[12px] w-full">
            <h2 className="font-black text-[18px] md:text-[20px] lg:text-[24px] text-[#111] tracking-[-0.48px] leading-[1.1]">
              Reporting Concerns
            </h2>
            <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#595959] leading-normal">
              If you experience or witness behaviour that goes against this Code of Conduct, please contact us at:
            </p>
            <div className="flex gap-[17px] items-center">
              <div className="bg-[#111] w-[3px] h-[40px] shrink-0 rounded-full" />
              <p className="font-bold text-[16px] md:text-[18px] lg:text-[20px] text-[#1f1f1f] leading-normal">
                <a href="mailto:hello@schoolhouselane.co" className="hover:opacity-70 transition-opacity">
                  hello@schoolhouselane.co
                </a>
              </p>
            </div>
            <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#595959] leading-normal">
              We will review concerns fairly and take appropriate action where necessary.
            </p>
          </div>

          <Section title="Consequences of Violations">
            <p>
              Any breach of this Code of Conduct may result in appropriate action, depending on the nature and severity of the issue. This may include ending communication, restricting access to our services or platforms, terminating a working relationship, or taking further action where required by law.
            </p>
          </Section>

          <Section title="Updates to This Code">
            <div className="space-y-4">
              <p>We may update this Code of Conduct from time to time to reflect changes in our business, services, or legal requirements.</p>
              <p>By using our website, working with us, or engaging with Schoolhouse Lane, you agree to follow this Code of Conduct.</p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  )
}
