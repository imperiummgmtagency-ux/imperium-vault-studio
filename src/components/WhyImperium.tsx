import SectionWrapper from "./SectionWrapper";
import { Shield, Target, TrendingUp, Lock } from "lucide-react";

const features = [
  { icon: Target, title: "Strategy", description: "We help creators operate with clear direction, consistency, and long-term brand positioning." },
  { icon: TrendingUp, title: "Systems", description: "Structured workflows and backend organization designed to improve efficiency and execution." },
  { icon: Shield, title: "Optimization", description: "Focused improvements across monetization flow, conversion strategy, and account performance." },
  { icon: Lock, title: "Discretion", description: "We prioritize privacy and professionalism in every partnership." },
];

const WhyImperium = () => (
  <SectionWrapper id="why">
    <h2 className="text-3xl md:text-5xl font-heading font-semibold text-center mb-6">
      Serious Creators Need More Than Hype
    </h2>
    <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
      Many creators eventually reach a point where growth requires stronger systems, clearer structure, and more efficient operations. Imperium Management Agency provides the infrastructure and support that allows creators to operate at a higher level.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((f) => (
        <div
          key={f.title}
          className="p-8 bg-card border border-border hover:border-primary/30 transition-colors duration-500 group"
        >
          <f.icon className="w-6 h-6 text-primary mb-5 group-hover:text-gold-light transition-colors duration-500" />
          <h3 className="text-xl font-heading font-semibold mb-3">{f.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">{f.description}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default WhyImperium;
