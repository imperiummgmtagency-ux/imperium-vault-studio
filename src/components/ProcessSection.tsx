import SectionWrapper from "./SectionWrapper";

const steps = [
  { num: "01", title: "Application", desc: "Creators submit a partnership application through our website." },
  { num: "02", title: "Review", desc: "Our team reviews the creator's brand, goals, and current stage." },
  { num: "03", title: "Private Consultation", desc: "If there is a potential fit, we schedule a private conversation to discuss details." },
  { num: "04", title: "Potential Onboarding", desc: "If both sides agree the partnership is a strong fit, onboarding begins." },
];

const ProcessSection = () => (
  <SectionWrapper id="process">
    <h2 className="text-3xl md:text-5xl font-heading font-semibold text-center mb-16">
      Our Partnership Process
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((s) => (
        <div key={s.num} className="relative">
          <span className="text-5xl font-heading font-bold text-primary/20 mb-4 block">{s.num}</span>
          <h3 className="text-lg font-heading font-semibold mb-3">{s.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProcessSection;
