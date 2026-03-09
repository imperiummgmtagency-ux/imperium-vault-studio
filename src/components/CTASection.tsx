import SectionWrapper from "./SectionWrapper";

const CTASection = () => (
  <SectionWrapper id="cta">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
        If You're Serious About Scaling, Start The Conversation
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-10">
        Imperium partners with creators who want stronger systems, clearer strategy, and a more professional operational structure. Submit an application and our team will review it privately.
      </p>
      <a
        href="#apply"
        className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-gold-dark transition-colors duration-300"
      >
        Submit Application
      </a>
    </div>
  </SectionWrapper>
);

export default CTASection;
