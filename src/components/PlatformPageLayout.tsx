import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import GoldDivider from "./GoldDivider";

interface PlatformPageProps {
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroCopy: string;
  section1Heading: string;
  section1Copy: string;
  section2Heading: string;
  section2Copy: string;
  ctaHeading: string;
  ctaCopy: string;
}

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const PlatformPageLayout = ({
  metaTitle,
  metaDescription,
  heroHeading,
  heroCopy,
  section1Heading,
  section1Copy,
  section2Heading,
  section2Copy,
  ctaHeading,
  ctaCopy,
}: PlatformPageProps) => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
    <Header />

    {/* Hero */}
    <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 px-5 md:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_55%_55%_/_0.04)_0%,_transparent_70%)]" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          {...fade}
          className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-primary/70 font-body mb-5 md:mb-6"
        >
          Imperium Management Agency
        </motion.p>
        <motion.h1
          {...fade}
          transition={{ ...fade.transition, delay: 0.15 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight mb-5 md:mb-8"
        >
          {heroHeading}
        </motion.h1>
        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.3 }}
          className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          {heroCopy}
        </motion.p>
      </div>
    </section>

    <GoldDivider />

    {/* Section 1 */}
    <motion.section {...fade} className="py-16 md:py-28 px-5 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-semibold mb-4 md:mb-6">
          {section1Heading}
        </h2>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          {section1Copy}
        </p>
      </div>
    </motion.section>

    <GoldDivider />

    {/* Section 2 */}
    <motion.section {...fade} className="py-16 md:py-28 px-5 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-semibold mb-4 md:mb-6">
          {section2Heading}
        </h2>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          {section2Copy}
        </p>
      </div>
    </motion.section>

    <GoldDivider />

    {/* CTA */}
    <motion.section {...fade} className="py-20 md:py-32 px-5 md:px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-semibold mb-4 md:mb-6">
          {ctaHeading}
        </h2>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 md:mb-10">
          {ctaCopy}
        </p>
        <Link
          to="/contact"
          className="inline-block w-full sm:w-auto px-10 py-3.5 md:py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-gold-dark transition-colors duration-300"
        >
          Apply Now
        </Link>
      </div>
    </motion.section>

    {/* Internal links */}
    <GoldDivider />
    <section className="py-12 md:py-16 px-5 md:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground/60 mb-5">
          Explore Other Services
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {[
            { label: "OnlyFans", href: "/onlyfans-management" },
            { label: "Fansly", href: "/fansly-management" },
            { label: "Fanvue", href: "/fanvue-management" },
            { label: "Instagram", href: "/instagram-management" },
            { label: "TikTok", href: "/tiktok-management" },
            { label: "X / Twitter", href: "/x-twitter-management" },
            { label: "Reddit", href: "/reddit-management" },
            { label: "Multi-Platform", href: "/multi-platform-management" },
          ].map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-xs tracking-wider uppercase text-primary/70 hover:text-primary border border-border px-4 py-2 hover:border-primary/30 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default PlatformPageLayout;
