import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoldDivider from "@/components/GoldDivider";

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const sections = [
  {
    heading: "Who We Are",
    copy: "Imperium was built for a new standard of creator management — one that takes the business behind the brand as seriously as the brand itself. We understand that as creators expand across platforms, audiences, and revenue channels, the operational weight behind the business becomes harder to manage without stronger infrastructure. Our role is to help bring structure to that complexity through more intentional systems, better oversight, and a more serious level of support.",
  },
  {
    heading: "How We Operate",
    copy: "Our approach is centered on structure, consistency, privacy, and long-term positioning. Rather than offering surface-level assistance, we focus on helping build a more organized ecosystem around the creator. That can include platform management, audience-facing alignment, backend coordination, operational consistency, and stronger integration across the moving parts that support the brand. We believe better management comes from stronger systems, not louder promises.",
  },
  {
    heading: "Why Clients Choose Imperium",
    copy: "Creators who work with Imperium are often looking for something more refined than standard agency support. They want stronger operations, more serious infrastructure, better alignment across platforms, and a team that understands the importance of privacy and execution at a higher level. Our structure is built for creators who value discretion, professionalism, and a management model that supports long-term brand control rather than short-term noise.",
  },
  {
    heading: "Private by Design",
    copy: "Not every part of a serious creator business belongs on public display. Imperium operates with a more private and selective model because discretion matters — both for the creators we support and for the long-term strength of the brands involved. In many cases, privacy is not a preference but part of operating responsibly within a more serious creator ecosystem. That is why our public presence is intentional, controlled, and built around trust rather than overexposure.",
  },
  {
    heading: "Built for Long-Term Strength",
    copy: "We are not interested in creating the appearance of structure. We are interested in building the real thing. As creators scale, stronger systems become more valuable than louder branding. Imperium is designed to support creators who want a more stable, connected, and professionally managed foundation behind their business — one that can support growth with more clarity, more control, and less fragmentation over time.",
  },
];

const AboutImperium = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Helmet>
      <title>About Imperium | Private Creator Management Agency</title>
      <meta
        name="description"
        content="Learn about Imperium Management Agency — a private, selective creator management company built around structure, discretion, and serious long-term support."
      />
    </Helmet>
    <Header />

    {/* Secondary nav */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-20 md:pt-24">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 font-body text-[10px] md:text-xs tracking-[0.15em] uppercase text-foreground/60 hover:text-primary transition-colors duration-300"
      >
        <ArrowLeft size={14} className="text-primary/50" />
        Main Page
      </Link>
    </div>

    {/* Hero */}
    <section className="relative pt-8 md:pt-16 pb-16 md:pb-24 px-5 md:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_55%_55%_/_0.04)_0%,_transparent_70%)]" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          {...fade}
          className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-primary/70 font-body mb-5 md:mb-6"
        >
          About Imperium
        </motion.p>
        <motion.h1
          {...fade}
          transition={{ ...fade.transition, delay: 0.15 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight mb-5 md:mb-8"
        >
          Private Creator Management Built Around Structure, Discretion, and
          Serious Support
        </motion.h1>
        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.3 }}
          className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          Imperium is a private creator management company built for creators
          who want more than surface-level assistance. Our model is designed
          around stronger systems, cleaner execution, and a more structured
          approach to platform management, backend operations, and long-term
          brand support. We work selectively, prioritize discretion, and focus
          on helping creators operate with more control as their ecosystem
          becomes more complex.
        </motion.p>
      </div>
    </section>

    {/* Content sections */}
    {sections.map((section, i) => (
      <div key={section.heading}>
        <GoldDivider />
        <motion.section {...fade} className="py-16 md:py-28 px-5 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-semibold mb-4 md:mb-6">
              {section.heading}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {section.copy}
            </p>
          </div>
        </motion.section>
      </div>
    ))}

    {/* CTA */}
    <GoldDivider />
    <motion.section {...fade} className="py-20 md:py-32 px-5 md:px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-semibold mb-4 md:mb-6">
          Learn More About Working With Imperium
        </h2>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 md:mb-10">
          If you are looking for a more serious, more private, and more
          structured approach to creator management, we invite you to request
          partnership and learn whether Imperium is the right fit for your next
          stage of growth.
        </p>
        <Link
          to="/contact"
          className="inline-block w-full sm:w-auto px-10 py-3.5 md:py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-gold-dark transition-colors duration-300"
        >
          Request Partnership
        </Link>
      </div>
    </motion.section>

    <Footer />
  </div>
);

export default AboutImperium;
