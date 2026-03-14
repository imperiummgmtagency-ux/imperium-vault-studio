import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Layers, Star, Camera, Music2, AtSign, MessageCircle, LayoutGrid } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const platforms = [
  {
    name: "OnlyFans",
    description: "Subscription platform management focused on monetization, backend systems, and creator operations.",
    href: "/onlyfans-management",
    icon: Heart,
  },
  {
    name: "Fansly",
    description: "Strategic platform management for diversification, positioning, and long-term monetization support.",
    href: "/fansly-management",
    icon: Star,
  },
  {
    name: "Fanvue",
    description: "Management support for creators expanding into additional monetization channels with stronger operational structure.",
    href: "/fanvue-management",
    icon: Layers,
  },
  {
    name: "Instagram",
    description: "Audience-facing platform management built around positioning, visibility, and brand presentation.",
    href: "/instagram-management",
    icon: Camera,
  },
  {
    name: "TikTok",
    description: "Short-form platform management designed to support reach, momentum, and creator visibility.",
    href: "/tiktok-management",
    icon: Music2,
  },
  {
    name: "X / Twitter",
    description: "Platform management focused on presence, audience movement, and creator ecosystem support.",
    href: "/x-twitter-management",
    icon: AtSign,
  },
  {
    name: "Reddit",
    description: "Management support for audience discovery, niche visibility, and supplemental traffic flow.",
    href: "/reddit-management",
    icon: MessageCircle,
  },
  {
    name: "Multi-Platform",
    description: "Unified management across multiple channels for creators scaling with more complexity and opportunity.",
    href: "/multi-platform-management",
    icon: LayoutGrid,
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
        Imperium supports creators across monetization platforms and growth channels with structured management systems designed for consistency, scale, and long-term brand control.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {platforms.map((platform, i) => {
        const Icon = platform.icon;
        return (
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
                <span className="inline-flex items-center justify-center w-10 h-10 border border-primary/20 text-primary/80 group-hover:border-primary/50 group-hover:text-primary transition-colors duration-300">
                  <Icon size={18} strokeWidth={1.5} />
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
        );
      })}
    </div>
  </SectionWrapper>
);

export default PlatformsSection;
