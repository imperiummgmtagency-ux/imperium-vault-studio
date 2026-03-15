import SectionWrapper from "./SectionWrapper";

const steps = [
  { num: "01", title: "Application", desc: "Creators submit a partnership application through our website." },
  { num: "02", title: "Review", desc: "Our team reviews the creator's brand, goals, and current stage." },
  { num: "03", title: "Private Consultation", desc: "If there is a potential fit, we schedule a private conversation to discuss details." },
  { num: "04", title: "Potential Onboarding", desc: "If both sides agree the partnership is a strong fit, onboarding begins." },
];

const ProcessSection = () => (
  <SectionWrapper id="process">
    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-semibold text-center mb-10 md:mb-16">
      Our Partnership Process
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
      {steps.map((s) => (
        <div key={s.num} className="relative">
          <span className="text-4xl md:text-5xl font-body font-extralight tracking-wide text-primary/20 mb-3 md:mb-4 block">{s.num}</span>
          <h3 className="text-base md:text-lg font-heading font-semibold mb-2 md:mb-3">{s.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProcessSection;
