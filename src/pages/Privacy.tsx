import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const Privacy = () => (
  <LegalPageLayout
    title="Privacy Policy"
    subtitle="Imperium Management Agency values privacy, discretion, and responsible handling of submitted information. This Privacy Policy explains how we collect, use, and protect information shared through our website."
  >
    <LegalSection title="Information We Collect">
      <p>We may collect personal information you voluntarily provide when submitting an application or inquiry through our website. This includes your name, email address, platform links, revenue details, and any other information you choose to share.</p>
    </LegalSection>

    <LegalSection title="How We Use Information">
      <p>Information submitted is used exclusively to evaluate potential partnerships, communicate with applicants, and improve our internal processes. We do not sell, rent, or share your information with third parties for marketing purposes.</p>
    </LegalSection>

    <LegalSection title="Communications">
      <p>If you submit an application or inquiry, we may contact you via email or the preferred contact method you provide. Communications will be limited to matters directly related to your submission and potential partnership.</p>
    </LegalSection>

    <LegalSection title="Confidentiality">
      <p>We treat all submitted information with discretion. Details about applicants, partners, and internal operations are handled confidentially and are not disclosed publicly.</p>
    </LegalSection>

    <LegalSection title="Data Protection">
      <p>We implement reasonable administrative and technical measures to protect the information you provide. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
    </LegalSection>

    <LegalSection title="Third-Party Services">
      <p>Our website may use third-party tools for hosting, analytics, or form processing. These services may collect limited technical data such as IP addresses and browser information in accordance with their own privacy policies.</p>
    </LegalSection>

    <LegalSection title="Your Rights">
      <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us. We will respond to such requests within a reasonable timeframe.</p>
    </LegalSection>

    <LegalSection title="Contact Information">
      <p>For privacy-related inquiries, please reach out through our website contact form or via the communication channels provided during your application process.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default Privacy;
