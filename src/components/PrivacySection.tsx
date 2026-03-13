import SectionWrapper from "./SectionWrapper";

const PrivacySection = () => (
  <SectionWrapper id="privacy">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-semibold mb-4 md:mb-6">
        Not Everything Valuable Needs To Be Public
      </h2>
      <div className="space-y-5 md:space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
        <p>
          Many creators we work with prefer private partnerships and operate under confidential agreements. Because of this, Imperium does not publicly display creator portfolios, earnings claims, or client lists.
        </p>
        <p>
          Our focus is building strong operational systems, improving efficiency, and maintaining professional long-term partnerships behind the scenes.
        </p>
        <p>
          Privacy and discretion remain core principles of how Imperium operates.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default PrivacySection;
