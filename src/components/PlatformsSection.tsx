import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LayoutGrid } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const platforms = [
  {
    name: "OnlyFans",
    description: "Structured platform management built around audience support, retention, backend organization, and day-to-day operational consistency for creators who want more serious support behind their brand.",
    href: "/onlyfans-management",
    logo: "/logos/onlyfans.svg",
  },
  {
    name: "Fansly",
    description: "Platform management focused on stronger positioning, better consistency, and a more intentional role within a creator's wider digital ecosystem.",
    href: "/fansly-management",
    logo: "/logos/fansly.svg",
  },
  {
    name: "Fanvue",
    description: "Professional platform management designed to support diversification, cleaner execution, and stronger integration into the creator's overall growth structure.",
    href: "/fanvue-management",
    logo: "/logos/fanvue.svg",
  },
  {
    name: "Instagram",
    description: "Instagram management centered on profile presentation, audience-facing positioning, brand cohesion, and stronger movement into the creator's wider ecosystem.",
    href: "/instagram-management",
    logo: "/logos/instagram.svg",
  },
  {
    name: "TikTok",
    description: "TikTok management built to support visibility, content direction, audience expansion, and more structured momentum across the broader creator brand.",
    href: "/tiktok-management",
    logo: "/logos/tiktok.svg",
  },
  {
    name: "X / Twitter",
    description: "X / Twitter management focused on audience continuity, platform presence, creator positioning, and stronger alignment with broader traffic goals.",
    href: "/x-twitter-management",
    logo: "/logos/x-twitter.svg",
  },
  {
    name: "Reddit",
    description: "Reddit management approached with more structure and precision to support niche visibility, audience discovery, and ecosystem traffic.",
    href: "/reddit-management",
    logo: "/logos/reddit.svg",
  },
  {
    name: "Facebook",
    description: "Facebook management designed to strengthen broader brand visibility, audience familiarity, and platform consistency as part of a larger creator system.",
    href: "/facebook-management",
    logo: "/logos/facebook.svg",
  },
  {
    name: "Snapchat",
    description: "Snapchat management built around continuity, audience touchpoints, and stronger integration into the creator's overall communication and platform mix.",
    href: "/snapchat-management",
    logo: "/logos/snapchat.svg",
  },
  {
    name: "Multi-Platform",
    description: "Unified management across multiple platforms for creators who need stronger coordination, cleaner backend execution, and a more connected growth structure.",
    href: "/multi-platform-management",
    logo: null,
  },
];

const PlatformsSection = () => (
  <SectionWrapper id="platforms">
    <div className="text-center mb-14 md:mb-20">
      <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary/70 font-body mb-4 md:mb-5">
        Our Services
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-semibold mb-5 md:mb-6">
        Platforms We Manage
      </h2>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
        Imperium supports creators across the platforms that shape visibility, audience movement, audience development, brand control, and long-term digital positioning. Our management model is designed to bring more structure, consistency, and operational strength to the platforms that matter most, from subscription-based channels to audience-facing social platforms.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {platforms.map((platform, i) => (
        <motion.div
          key={platform.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
        >
          <Link
            to={platform.href}
            className="group relative border border-border/60 bg-card p-7 md:p-8 flex flex-col h-full hover:border-primary/40 hover:bg-card/80 transition-all duration-400 overflow-hidden"
          >
            {/* subtle gold corner accent */}
            <span className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/[0.06] to-transparent pointer-events-none" />

            <div className="mb-5">
              <span className="inline-flex items-center justify-center w-10 h-10 border border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                {platform.logo ? (
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  <LayoutGrid size={18} strokeWidth={1.5} className="text-white/80 group-hover:text-white transition-colors duration-300" />
                )}
              </span>
            </div>

            <h3 className="text-base md:text-lg font-heading font-semibold mb-2.5 text-foreground group-hover:text-primary transition-colors duration-300">
              {platform.name}
            </h3>

            <p className="text-muted-foreground/80 text-xs md:text-sm leading-relaxed mb-6 flex-1">
              {platform.description}
            </p>

            <span className="inline-flex items-center gap-2 text-primary/70 text-[11px] tracking-widest uppercase font-body group-hover:text-primary transition-colors duration-300">
              Learn More
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default PlatformsSection;
