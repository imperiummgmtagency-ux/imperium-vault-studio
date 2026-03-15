import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const Privacy = () => (
  <LegalPageLayout
    title="Privacy Policy"
    metaTitle="Privacy Policy | Imperium Management Agency"
    metaDescription="How Imperium Management Agency collects, uses, stores, and protects information submitted through this website. Read our full privacy practices."
    canonicalPath="/privacy"
    subtitle="Imperium Management Agency is committed to responsible handling of information. This Privacy Policy explains how information may be collected, used, stored, and protected when individuals interact with this website."
  >
    <LegalSection title="1. Information We Collect">
      <p>Information may be collected when individuals voluntarily submit details through application forms, contact forms, or other inquiry methods available on the website. This may include:</p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Full name or stage/brand name</li>
        <li>Email address</li>
        <li>Phone number or messaging platform contact details (e.g., Telegram, WhatsApp)</li>
        <li>Social media handles and platform links</li>
        <li>Information about a creator's brand, content, or business</li>
        <li>Monthly revenue ranges or business metrics voluntarily disclosed</li>
        <li>Any additional notes or details provided in free-text fields</li>
      </ul>
      <p className="mt-3">Only information that is voluntarily provided directly through the website is collected. Imperium Management Agency does not collect information from external sources without consent.</p>
    </LegalSection>

    <LegalSection title="2. Cookies, Analytics & Site Tracking">
      <p>This website may use cookies, analytics tools, and similar technologies to understand how visitors interact with the site. This may include:</p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Pages visited and time spent on the site</li>
        <li>Referring websites or sources</li>
        <li>Browser type, device type, and operating system</li>
        <li>General geographic region (not precise location)</li>
      </ul>
      <p className="mt-3">This data is collected in aggregate and is used solely to improve website performance, user experience, and operational decision-making. It is not used to personally identify individual visitors.</p>
    </LegalSection>

    <LegalSection title="3. How Information Is Used">
      <p>Information submitted through this website may be used to:</p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Review and evaluate creator partnership inquiries</li>
        <li>Respond to questions, requests, or submitted applications</li>
        <li>Communicate regarding potential collaboration opportunities</li>
        <li>Assess whether a partnership may be a suitable fit</li>
        <li>Improve internal communication, outreach, and operational workflows</li>
        <li>Maintain records of inquiries for business purposes</li>
      </ul>
      <p className="mt-3">Information submitted through the website is reviewed privately and is not publicly disclosed, displayed, or made available to other visitors or users of the site.</p>
    </LegalSection>

    <LegalSection title="4. Confidentiality & Discretion">
      <p>Imperium Management Agency understands that creators often place a high value on privacy and discretion. All information shared through this website is treated with professional confidentiality.</p>
      <p>Personal details, business metrics, and partnership inquiries are handled internally and are not shared publicly or with unauthorized parties. Discretion is a core principle of how Imperium Management Agency operates.</p>
    </LegalSection>

    <LegalSection title="5. Data Storage & Protection">
      <p>Reasonable administrative, technical, and organizational measures are taken to protect submitted information from unauthorized access, alteration, disclosure, or destruction.</p>
      <p>Data submitted through the website may be stored using secure hosting providers, cloud infrastructure, and encrypted database systems. While no method of electronic storage or transmission is completely secure, Imperium Management Agency takes appropriate steps to safeguard information in accordance with industry standards.</p>
      <p>Submitted information is retained only for as long as necessary to fulfill the purposes described in this policy or as required by applicable law.</p>
    </LegalSection>

    <LegalSection title="6. Third-Party Services & Service Providers">
      <p>Certain third-party tools and services may be used to operate and maintain the website. These may include:</p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Website hosting and infrastructure providers</li>
        <li>Form processing and submission handling tools</li>
        <li>Analytics platforms for understanding site traffic and usage</li>
        <li>Email delivery and communication services</li>
      </ul>
      <p className="mt-3">These service providers may process limited technical or operational data necessary for website functionality. Imperium Management Agency does not sell, rent, or trade personal information to third parties for marketing or advertising purposes.</p>
    </LegalSection>

    <LegalSection title="7. Third-Party Links">
      <p>This website may contain links to external websites, platforms, or services that are not owned or controlled by Imperium Management Agency. These links are provided for convenience and informational purposes only.</p>
      <p>Imperium Management Agency is not responsible for the privacy practices, content, or security of any third-party websites. Visitors are encouraged to review the privacy policies of any external sites they visit.</p>
    </LegalSection>

    <LegalSection title="8. Your Rights">
      <p>Individuals who have submitted information through this website may:</p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Request clarification about what information has been collected</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion or removal of previously submitted information</li>
        <li>Withdraw consent for future communications at any time</li>
      </ul>
      <p className="mt-3">Requests may be subject to verification of identity and applicable legal requirements. Imperium Management Agency will respond to valid requests in a reasonable timeframe.</p>
    </LegalSection>

    <LegalSection title="9. Children's Privacy">
      <p>This website is not directed at individuals under the age of 18. Imperium Management Agency does not knowingly collect information from minors. If it is determined that information has been inadvertently collected from a minor, it will be promptly deleted.</p>
    </LegalSection>

    <LegalSection title="10. Updates to This Policy">
      <p>This Privacy Policy may be updated periodically to reflect changes in practices, technology, legal requirements, or operational improvements. Any changes will be reflected on this page with an updated effective date.</p>
      <p>Continued use of the website following any updates constitutes acceptance of the revised policy.</p>
    </LegalSection>

    <LegalSection title="11. Contact">
      <p>For privacy-related questions, concerns, or requests regarding personal information, individuals may reach out through the contact page of this website. Imperium Management Agency is committed to addressing privacy inquiries promptly and professionally.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default Privacy;
