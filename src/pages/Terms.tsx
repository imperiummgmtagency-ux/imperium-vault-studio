import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

const Terms = () => (
  <LegalPageLayout
    title="Terms of Use"
    subtitle="By accessing or using the Imperium Management Agency website, you agree to the following terms governing use of the website and submission of information."
  >
    <LegalSection title="Website Use">
      <p>The information provided on this website is intended for general informational purposes regarding Imperium Management Agency and its services.</p>
      <p>Visitors agree to use the website responsibly and not for any unlawful or harmful activity.</p>
    </LegalSection>

    <LegalSection title="Partnership Applications">
      <p>Submitting an application or inquiry through this website does not guarantee acceptance, partnership, or engagement with Imperium Management Agency.</p>
      <p>All partnership inquiries are reviewed selectively and privately.</p>
    </LegalSection>

    <LegalSection title="No Guarantee of Results">
      <p>Imperium Management Agency may provide operational support, strategic guidance, and creator management services. However, individual results may vary and no guarantees of income, revenue, or performance are made through use of this website.</p>
    </LegalSection>

    <LegalSection title="Intellectual Property">
      <p>All content on this website — including text, branding, and design — is the property of Imperium Management Agency and may not be copied, reproduced, or redistributed without permission.</p>
    </LegalSection>

    <LegalSection title="Limitation of Liability">
      <p>Imperium Management Agency is not liable for any damages or losses resulting from the use of this website or reliance on information presented here.</p>
      <p>Use of the website is at the visitor's discretion.</p>
    </LegalSection>

    <LegalSection title="Updates to Terms">
      <p>These terms may be updated periodically to reflect operational or legal changes. Continued use of the website constitutes acceptance of the current terms.</p>
    </LegalSection>

    <LegalSection title="Contact">
      <p>Questions regarding these terms may be directed through the contact page of this website.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default Terms;
