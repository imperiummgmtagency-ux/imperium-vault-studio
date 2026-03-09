import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const Terms = () => (
  <LegalPageLayout
    title="Terms"
    subtitle="By accessing or using the Imperium Management Agency website, you agree to the following terms and conditions governing use of this website and any submitted inquiries or applications."
  >
    <LegalSection title="Use of Website">
      <p>This website is provided for informational purposes and to facilitate partnership inquiries. You agree to use the website in a lawful manner and not to misuse any content, forms, or features available on the site.</p>
    </LegalSection>

    <LegalSection title="No Guarantee of Results">
      <p>Nothing on this website constitutes a guarantee of specific outcomes, revenue growth, or operational results. Past performance of any creator or partner does not guarantee future results.</p>
    </LegalSection>

    <LegalSection title="Application Review">
      <p>All applications and inquiries are reviewed selectively at the sole discretion of Imperium Management Agency. Submission of an application does not guarantee partnership, acceptance, or a response. We reserve the right to decline any inquiry without explanation.</p>
    </LegalSection>

    <LegalSection title="Confidentiality">
      <p>Information submitted through this website is treated as confidential. Similarly, any information shared by Imperium Management Agency during the review or partnership process must be treated as confidential by the applicant.</p>
    </LegalSection>

    <LegalSection title="Intellectual Property">
      <p>All content on this website, including text, design, logos, and branding, is the property of Imperium Management Agency and may not be reproduced, distributed, or used without prior written consent.</p>
    </LegalSection>

    <LegalSection title="Limitation of Liability">
      <p>Imperium Management Agency shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on any information provided herein.</p>
    </LegalSection>

    <LegalSection title="Changes to Terms">
      <p>We reserve the right to update or modify these terms at any time without prior notice. Continued use of the website following any changes constitutes acceptance of the revised terms.</p>
    </LegalSection>

    <LegalSection title="Contact Information">
      <p>For questions regarding these terms, please reach out through our website contact form or via the communication channels provided during your application process.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default Terms;
