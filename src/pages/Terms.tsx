import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const Terms = () => (
  <LegalPageLayout
    title="Terms of Service"
    metaTitle="Terms of Service | Imperium Management Agency"
    metaDescription="Terms of Service for using the Imperium Management Agency website. Read about acceptable use, intellectual property, limitations, and partnership inquiry terms."
    canonicalPath="/terms"
    subtitle="By accessing or using the Imperium Management Agency website, you acknowledge and agree to the following terms. Please read them carefully before using the site or submitting any information."
  >
    <LegalSection title="1. Acceptance of Terms">
      <p>By accessing, browsing, or using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you should discontinue use of the website immediately.</p>
    </LegalSection>

    <LegalSection title="2. Informational Purpose">
      <p>The content presented on this website — including descriptions of services, processes, and operational capabilities — is intended for general informational purposes only. It does not constitute a contractual offer, legal advice, financial guidance, or a binding commitment of any kind.</p>
      <p>Imperium Management Agency reserves the right to update, modify, or remove any content on the website at any time without prior notice.</p>
    </LegalSection>

    <LegalSection title="3. Acceptable Use">
      <p>Visitors agree to use this website responsibly and in accordance with all applicable laws. The following activities are prohibited:</p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Using the website for any unlawful, fraudulent, or harmful purpose</li>
        <li>Attempting to gain unauthorized access to any part of the website or its systems</li>
        <li>Interfering with the proper functioning of the website or its infrastructure</li>
        <li>Submitting false, misleading, or spam content through any forms or communication channels</li>
        <li>Scraping, harvesting, or collecting data from the website without authorization</li>
      </ul>
      <p className="mt-3">Imperium Management Agency reserves the right to restrict access to any individual who violates these terms.</p>
    </LegalSection>

    <LegalSection title="4. Partnership Inquiries & Applications">
      <p>Submitting an application, inquiry, or any form of communication through this website does not guarantee acceptance, partnership, engagement, or any business relationship with Imperium Management Agency.</p>
      <p>All partnership inquiries are reviewed selectively and at the sole discretion of Imperium Management Agency. Submission of an inquiry does not create a client relationship, contractual obligation, or expectation of service.</p>
      <p>Imperium Management Agency is under no obligation to respond to every inquiry and reserves the right to decline any application without providing a reason.</p>
    </LegalSection>

    <LegalSection title="5. No Guarantee of Results">
      <p>Imperium Management Agency may provide operational support, strategic guidance, content management, and creator growth services. However, individual outcomes may vary significantly based on numerous factors beyond the agency's control.</p>
      <p>No guarantees of income, revenue, follower growth, engagement rates, platform performance, or any other specific result are made through use of this website or any services described herein. Past performance or case studies referenced on the website do not guarantee future results.</p>
    </LegalSection>

    <LegalSection title="6. Intellectual Property">
      <p>All content on this website — including but not limited to text, graphics, logos, branding, images, design elements, page layouts, and proprietary methodologies — is the property of Imperium Management Agency and is protected by applicable intellectual property laws.</p>
      <p>Without prior written permission, visitors may not:</p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Copy, reproduce, or duplicate website content for commercial or public use</li>
        <li>Modify, adapt, or create derivative works based on website materials</li>
        <li>Distribute, publish, or transmit website content through any medium</li>
        <li>Use the Imperium Management Agency name, logo, or branding without authorization</li>
      </ul>
      <p className="mt-3">Limited personal, non-commercial use of the website for informational purposes is permitted, provided no content is altered or misrepresented.</p>
    </LegalSection>

    <LegalSection title="7. Limitation of Liability">
      <p>To the fullest extent permitted by applicable law, Imperium Management Agency, its owners, employees, affiliates, and agents shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from:</p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Use of or inability to use this website</li>
        <li>Reliance on any information or content presented on the website</li>
        <li>Unauthorized access to or alteration of submitted information</li>
        <li>Any errors, omissions, or inaccuracies in website content</li>
        <li>Service interruptions, technical issues, or website downtime</li>
      </ul>
      <p className="mt-3">Use of this website is at the visitor's own risk and discretion.</p>
    </LegalSection>

    <LegalSection title="8. Third-Party Links & Services">
      <p>This website may contain links to third-party websites, platforms, tools, or services that are not owned, operated, or controlled by Imperium Management Agency. These links are provided for convenience and reference only.</p>
      <p>Imperium Management Agency does not endorse, guarantee, or assume responsibility for the accuracy, content, privacy practices, or security of any third-party websites or services. Visitors access third-party links at their own risk.</p>
    </LegalSection>

    <LegalSection title="9. Modifications to Terms & Services">
      <p>Imperium Management Agency reserves the right to update, revise, or modify these Terms of Service at any time without prior notice. Changes will be reflected on this page with an updated effective date.</p>
      <p>Continued use of the website following any modifications constitutes acceptance of the revised terms. Visitors are encouraged to review these terms periodically.</p>
      <p>Imperium Management Agency also reserves the right to modify, suspend, or discontinue any aspect of its services or website at any time without liability.</p>
    </LegalSection>

    <LegalSection title="10. Indemnification">
      <p>By using this website, you agree to indemnify and hold harmless Imperium Management Agency, its owners, employees, and affiliates from any claims, damages, losses, or expenses (including reasonable legal fees) arising out of your use of the website, violation of these terms, or infringement of any third-party rights.</p>
    </LegalSection>

    <LegalSection title="11. Governing Law">
      <p>These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from or related to the use of this website or these terms shall be resolved through appropriate legal channels in the relevant jurisdiction.</p>
    </LegalSection>

    <LegalSection title="12. Severability">
      <p>If any provision of these Terms of Service is found to be invalid, unlawful, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it enforceable while preserving its original intent.</p>
    </LegalSection>

    <LegalSection title="13. Contact">
      <p>Questions, concerns, or inquiries regarding these Terms of Service may be directed through the contact page of this website. Imperium Management Agency will make reasonable efforts to respond to inquiries in a timely manner.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default Terms;
