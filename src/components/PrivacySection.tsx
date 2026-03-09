import SectionWrapper from "./SectionWrapper";

const PrivacySection = () => (
  <SectionWrapper id="privacy">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
        Not Everything Valuable Needs To Be Public
      </h2>
      <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
        <p>
          Many creators we work with prefer privacy and discretion. Because of this, Imperium does not build its reputation around public name-dropping or exposing creator identities.
        </p>
        <p>
          Some partnerships operate under confidential agreements, and we respect that standard fully.
        </p>
        <p>
          Our focus is not public attention — it is strong systems, clear communication, and long-term creator partnerships built on trust.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default PrivacySection;
