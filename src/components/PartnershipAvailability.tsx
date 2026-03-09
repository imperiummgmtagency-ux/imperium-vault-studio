import SectionWrapper from "./SectionWrapper";

const PartnershipAvailability = () => (
  <SectionWrapper id="availability">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
        Partnership Availability
      </h2>
      <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10">
        <p>
          Imperium Management Agency reviews a limited number of creator partnerships at any given time in order to maintain operational quality and focus.
        </p>
        <p>
          Because of this, we selectively review applications to determine if a partnership may be a strong fit.
        </p>
      </div>
      <div className="inline-flex items-center gap-3 border border-primary/20 px-6 py-3">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs tracking-[0.2em] uppercase text-primary/80 font-body">
          Application Status: Currently Accepting A Limited Number Of Creators
        </span>
      </div>
    </div>
  </SectionWrapper>
);

export default PartnershipAvailability;
