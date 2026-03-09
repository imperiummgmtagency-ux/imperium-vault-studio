import SectionWrapper from "./SectionWrapper";

const PrivacySection = () => (
  <SectionWrapper id="privacy">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
        Not Everything Valuable Needs To Be Public
      </h2>
      <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
        <p>
          Many creators we work with operate under private agreements and prefer to keep their partnerships confidential.
        </p>
        <p>
          Because of this, Imperium does not publicly display creator portfolios, earnings claims, or case studies. Our focus is building strong systems, improving operational efficiency, and maintaining professional long-term partnerships behind the scenes.
        </p>
        <p>
          Discretion and privacy are core parts of how we operate.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default PrivacySection;
