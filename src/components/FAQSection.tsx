import SectionWrapper from "./SectionWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Who do you work with?", a: "We typically work with creators who are already active and looking to strengthen their systems and growth strategy." },
  { q: "Do you guarantee results?", a: "No agency can responsibly guarantee income results. Imperium focuses on improving systems, structure, and strategy." },
  { q: "Why are you selective with partnerships?", a: "We believe strong partnerships require focus and alignment, which is why we review every application carefully." },
  { q: "Why don't you show creators publicly?", a: "Many creators value privacy and confidentiality. We respect that preference." },
  { q: "What happens after I apply?", a: "Applications are reviewed by our team. If there appears to be a potential fit, we will reach out to schedule a conversation." },
  { q: "Is my information private?", a: "Yes. All submissions are handled confidentially." },
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
