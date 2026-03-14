import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";

const platforms = [
  {
    title: "OnlyFans Management",
    description:
      "Strategic account management built around monetization, fan conversion, retention, messaging systems, and creator infrastructure. We help streamline the backend so creators can operate at a higher level with more consistency and less friction.",
    href: "/onlyfans-management",
  },
  {
    title: "Fansly Management",
    description:
      "Management support for creators looking to strengthen monetization, diversify platform presence, and improve operational consistency. We help position Fansly as part of a broader long-term growth system, not just a secondary page.",
    href: "/fansly-management",
  },
  {
    title: "Instagram Growth",
    description:
      "Profile positioning, audience presentation, and funnel-focused strategy designed to strengthen inbound traffic and brand value. Instagram plays a major role in first impressions, reach, and conversion flow when handled correctly.",
    href: "/instagram-growth-management",
  },
  {
    title: "TikTok Growth",
    description:
      "Short-form growth strategy focused on visibility, audience expansion, and conversion potential. We help creators structure content direction and platform presence in a way that supports reach while strengthening overall monetization pathways.",
    href: "/tiktok-growth-management",
  },
  {
    title: "Multi-Platform Management",
    description:
      "For creators operating across multiple channels, we build unified management systems that support traffic flow, brand consistency, monetization, and day-to-day execution across platforms without fragmentation.",
    href: "/multi-platform-creator-management",
  },
];

const PlatformsSection = () => (
  <SectionWrapper id="platforms">
    <div className="text-center mb-12 md:mb-16">
      <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-primary/70 font-body mb-4 md:mb-5">
        Our Services
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-semibold mb-5 md:mb-6">
        Platforms We Manage
      </h2>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
        Imperium supports creators across the platforms that matter most for visibility, audience growth, monetization, and long-term brand control. Our systems are built to support creators at every stage, from top-of-funnel social traffic to paid subscription conversion and backend management.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {platforms.map((platform, i) => (
        <motion.div
          key={platform.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group border border-border bg-card p-6 md:p-8 flex flex-col justify-between hover:border-primary/30 transition-colors duration-300"
        >
          <div>
            <h3 className="text-lg md:text-xl font-heading font-semibold mb-3 md:mb-4 text-foreground">
              {platform.title}
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
              {platform.description}
            </p>
          </div>
          <Link
            to={platform.href}
            className="inline-block text-center w-full py-3 border border-primary/30 text-primary text-xs tracking-widest uppercase font-body hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default PlatformsSection;
