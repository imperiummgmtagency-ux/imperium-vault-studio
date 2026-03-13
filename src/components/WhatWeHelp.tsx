import SectionWrapper from "./SectionWrapper";

const items = [
  "Account positioning strategy",
  "Content structure and scheduling guidance",
  "Fan conversion strategy",
  "Monetization flow optimization",
  "Messaging system structure",
  "Posting consistency frameworks",
  "Operational workflow support",
  "Brand positioning guidance",
  "Growth consulting",
  "Creator business infrastructure",
];

const WhatWeHelp = () => (
  <SectionWrapper id="services">
    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-semibold text-center mb-4 md:mb-6">
      Operational Support For Modern Creators
    </h2>
    <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10 md:mb-16 text-base md:text-lg leading-relaxed">
      Imperium Management Agency provides structured support designed to strengthen creator operations, improve efficiency, and refine growth strategy.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3 md:gap-4 py-2.5 md:py-3 px-4 md:px-5 border-l-2 border-primary/20 hover:border-primary/60 transition-colors duration-500">
          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
          <span className="text-secondary-foreground text-sm">{item}</span>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default WhatWeHelp;
