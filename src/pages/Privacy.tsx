import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const Privacy = () => (
  <LegalPageLayout
    title="Privacy Policy"
    subtitle="Imperium Management Agency values privacy, discretion, and responsible handling of information. This Privacy Policy explains how information may be collected, used, and protected when individuals interact with the Imperium Management Agency website."
  >
    <LegalSection title="Information We Collect">
      <p>Information may be collected when individuals voluntarily submit details through application or contact forms on the website. This may include:</p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Name</li>
        <li>Email address</li>
        <li>Creator or brand name</li>
        <li>Social media or platform links</li>
        <li>Contact information such as Telegram or other messaging platforms</li>
        <li>General information about a creator's brand or business</li>
      </ul>
      <p className="mt-3">Only information provided directly through the website is collected.</p>
    </LegalSection>

    <LegalSection title="How Information Is Used">
      <p>Submitted information may be used to:</p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Review creator partnership inquiries</li>
        <li>Communicate regarding potential collaboration</li>
        <li>Evaluate whether a partnership may be a suitable fit</li>
        <li>Improve communication and operational processes</li>
      </ul>
      <p className="mt-3">Submitted information is reviewed privately and is not publicly disclosed.</p>
    </LegalSection>

    <LegalSection title="Confidentiality">
      <p>Imperium Management Agency understands that creators often value discretion. Information shared through this website is handled with professional confidentiality and is not publicly displayed or shared without permission.</p>
    </LegalSection>

    <LegalSection title="Data Protection">
      <p>Reasonable measures are taken to protect submitted information from unauthorized access or misuse.</p>
      <p>While no online system can guarantee complete security, Imperium Management Agency takes appropriate steps to safeguard information provided through the website.</p>
    </LegalSection>

    <LegalSection title="Third-Party Services">
      <p>Certain tools or services used to operate the website (such as hosting providers, form tools, or analytics platforms) may process limited technical data necessary for website functionality.</p>
      <p>Imperium Management Agency does not sell personal information to third parties.</p>
    </LegalSection>

    <LegalSection title="Your Rights">
      <p>Individuals may request clarification or removal of submitted information by contacting Imperium Management Agency directly.</p>
    </LegalSection>

    <LegalSection title="Updates to This Policy">
      <p>This Privacy Policy may be updated periodically to reflect improvements or operational changes. Updates will be reflected on this page.</p>
    </LegalSection>

    <LegalSection title="Contact">
      <p>For privacy-related questions, inquiries may be directed through the contact page of this website.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default Privacy;
