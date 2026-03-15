import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";

const highlights = [
  {
    num: "01",
    title: "Private, Selective Partnerships",
    description:
      "We are intentional about who we work with and how we work. Our structure is designed for creators looking for a more serious level of support, privacy, and long-term brand consideration.",
  },
  {
    num: "02",
    title: "Multi-Platform Infrastructure",
    description:
      "From audience-facing platforms to monetization channels, we help bring stronger alignment, cleaner execution, and more connected oversight across the creator ecosystem.",
  },
  {
    num: "03",
    title: "Operational Strength Behind the Brand",
    description:
      "As creators grow, so does the complexity behind the business. Our role is to help reduce disorder, strengthen systems, and support a more controlled operating structure behind the brand.",
  },
];

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
      <motion.h2
        {...fade}
        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-semibold mb-5 md:mb-8"
      >
        Built for Creators Who Want More Than Surface-Level Management
      </motion.h2>
      <motion.p
        {...fade}
        transition={{ ...fade.transition, delay: 0.15 }}
        className="text-muted-foreground text-base md:text-lg leading-relaxed"
      >
        Imperium was built for creators who need more than occasional support or
        generic agency involvement. Our model is centered on structure, privacy,
        operational consistency, and platform-wide oversight that helps creators
        navigate growth with more control and less fragmentation. We work
        selectively, operate with discretion, and focus on building serious
        systems around the creators we support.
      </motion.p>
    </div>

    <div className="max-w-3xl mx-auto">
      {highlights.map((item, i) => (
        <motion.div
          key={item.num}
          {...fade}
          transition={{ ...fade.transition, delay: 0.1 * i }}
        >
          <div className="flex items-start gap-5 md:gap-12 py-7 md:py-10">
            <span className="text-3xl md:text-5xl font-body font-extralight tracking-wide text-primary shrink-0 leading-none pt-1">
              {item.num}
            </span>
            <div>
              <h3 className="text-lg md:text-2xl font-heading font-semibold text-foreground mb-2 md:mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </div>
          {i < highlights.length - 1 && <div className="h-px line-gold" />}
        </motion.div>
      ))}
    </div>

    <motion.div
      {...fade}
      transition={{ ...fade.transition, delay: 0.35 }}
      className="text-center mt-12 md:mt-16"
    >
      <Link
        to="/about-imperium"
        className="inline-block w-full sm:w-auto px-10 py-3.5 md:py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-gold-dark transition-colors duration-300"
      >
        Learn More About Imperium
      </Link>
    </motion.div>
  </SectionWrapper>
);

export default AboutSection;
