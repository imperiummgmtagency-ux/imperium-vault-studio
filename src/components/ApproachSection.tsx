import SectionWrapper from "./SectionWrapper";

const ApproachSection = () => (
  <SectionWrapper id="approach">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-semibold mb-4 md:mb-6">
        Our Approach
      </h2>
      <div className="space-y-5 md:space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
        <p>
          Imperium Management Agency focuses on building structured systems behind creator brands rather than short-term growth tactics.
        </p>
        <p>
          Our goal is to help creators operate with stronger infrastructure, improved monetization flow, and more efficient backend operations.
        </p>
        <p>
          By focusing on long-term systems and professional structure, creators are able to scale their brand more sustainably.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default ApproachSection;
