import SectionWrapper from "./SectionWrapper";

const items = [
  { num: "01", title: "Strategy", description: "We help creators operate with clear direction, consistency, and long-term brand positioning." },
  { num: "02", title: "Systems", description: "Structured workflows and backend organization designed to improve efficiency and execution." },
  { num: "03", title: "Optimization", description: "Focused improvements across monetization flow, conversion strategy, and account performance." },
  { num: "04", title: "Discretion", description: "We prioritize privacy and professionalism in every partnership." },
];

const WhyImperium = () => (
  <SectionWrapper id="why">
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-semibold text-center mb-6">
      Serious Creators Need More Than Hype
    </h2>
    <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-20 text-lg leading-relaxed">
      Many creators eventually reach a point where growth requires stronger systems, clearer structure, and more efficient operations. Imperium Management Agency provides the support and operational framework that allows creators to operate at a higher level.
    </p>
    <div className="max-w-3xl mx-auto">
      {items.map((item, i) => (
        <div key={item.num}>
          <div className="flex items-start gap-8 md:gap-12 py-10">
            <span className="text-4xl md:text-5xl font-heading font-light text-primary shrink-0 leading-none pt-1">
              {item.num}
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </div>
          {i < items.length - 1 && <div className="h-px line-gold" />}
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default WhyImperium;
