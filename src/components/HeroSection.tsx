import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center px-5 md:px-6 overflow-hidden pt-14 md:pt-0">
    {/* Subtle radial glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_55%_55%_/_0.04)_0%,_transparent_70%)]" />
    
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6 md:mb-8"
      >
        <span className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.35em] uppercase text-primary/80 font-body font-medium">
          Imperium Management Agency
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-semibold leading-[1.15] md:leading-tight mb-6 md:mb-8 text-foreground"
      >
        Private Infrastructure For Serious Creators
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-base md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed px-2"
      >
        Imperium provides the operational systems, monetization strategy, and private support structure behind high-earning creator businesses.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-5 md:mb-6 px-4 sm:px-0"
      >
        <Link
          to="/contact"
          className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-gold-dark transition-colors duration-300 text-center"
        >
          Request Partnership
        </Link>
        <a
          href="#why"
          className="w-full sm:w-auto px-8 py-3.5 md:py-4 border border-gold-subtle text-foreground font-body text-sm tracking-wider uppercase hover:bg-secondary transition-colors duration-300 text-center"
        >
          Learn More
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-xs text-muted-foreground/50 font-body mb-12 md:mb-16"
      >
        Built for creators operating at scale.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase text-muted-foreground/60"
      >
        Private Partnerships&nbsp;&nbsp;•&nbsp;&nbsp;Discreet Operations&nbsp;&nbsp;•&nbsp;&nbsp;Creator Infrastructure
      </motion.p>
    </div>
  </section>
);

export default HeroSection;
