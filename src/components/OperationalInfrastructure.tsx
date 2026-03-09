import SectionWrapper from "./SectionWrapper";
import { MessageSquare, DollarSign, Users, FileText, Settings } from "lucide-react";

const items = [
  { icon: MessageSquare, text: "Messaging operations structure" },
  { icon: DollarSign, text: "Monetization strategy optimization" },
  { icon: Users, text: "Fan conversion systems" },
  { icon: FileText, text: "Content workflow organization" },
  { icon: Settings, text: "Backend management support" },
];

const OperationalInfrastructure = () => (
  <SectionWrapper id="infrastructure">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6">
        Creator Operations Infrastructure
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Imperium Management Agency focuses on building strong operational systems behind creator brands. Our goal is to help creators operate more efficiently while improving monetization structure and long-term scalability.
      </p>
    </div>
    <div className="max-w-2xl mx-auto space-y-0">
      {items.map((item) => (
        <div
          key={item.text}
          className="flex items-center gap-5 py-5 border-b border-border/40 last:border-b-0 group"
        >
          <item.icon className="w-5 h-5 text-primary/70 flex-shrink-0 group-hover:text-primary transition-colors duration-300" />
          <span className="text-foreground text-base tracking-wide font-body">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default OperationalInfrastructure;
