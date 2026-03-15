import SectionWrapper from "./SectionWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Who does Imperium typically work with?", a: "We partner with established creators who are already active across one or more platforms and are looking for structured management support — whether that means refining their growth strategy, improving operational systems, or scaling more efficiently." },
  { q: "Does Imperium guarantee specific results?", a: "No responsible agency can guarantee income outcomes. What we focus on is building stronger systems, sharper strategy, and more consistent execution — the foundations that drive sustainable, long-term growth." },
  { q: "Why is Imperium selective about partnerships?", a: "Quality partnerships require genuine alignment in goals, work ethic, and expectations. By being intentional about who we work with, we ensure every partnership receives the focus and resources it deserves." },
  { q: "Why aren't your creators listed publicly?", a: "Many of the creators we work with prefer to keep their management arrangements private. We respect and support that preference as part of our commitment to operating with discretion." },
  { q: "What happens after I submit an application?", a: "Every application is reviewed personally by our team. If there's a strong potential fit based on your goals and current position, we'll reach out to schedule an introductory conversation — typically within a few business days." },
  { q: "Is my information kept private?", a: "Absolutely. All submissions and conversations are handled with full confidentiality. Your information is never shared publicly or with third parties." },
  { q: "How does Imperium approach discretion?", a: "Imperium takes a thoughtful and professional approach to discretion. We understand that for many partnerships, privacy, brand protection, and clear boundaries matter. Because of that, not every aspect of how we operate or who we work with is presented publicly. Our approach is intentional and designed to support a more professional experience overall." },
];

const FAQSection = () => (
  <SectionWrapper id="faq">
    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-semibold text-center mb-10 md:mb-16">
      Frequently Asked Questions
    </h2>
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border px-0">
            <AccordionTrigger className="text-left font-body text-sm md:text-base hover:text-primary transition-colors duration-300 py-4 md:py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4 md:pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </SectionWrapper>
);

export default FAQSection;
