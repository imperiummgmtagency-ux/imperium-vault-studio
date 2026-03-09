import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
    {/* Subtle radial glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_55%_55%_/_0.04)_0%,_transparent_70%)]" />
    
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <span className="text-xs tracking-[0.35em] uppercase text-primary/80 font-body font-medium">
          Imperium Management Agency
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold leading-tight mb-8 text-foreground"
      >
        Private Infrastructure For Serious Creators
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto mb-6 leading-relaxed"
      >
        Imperium Management Agency works with creators who want stronger systems, better structure, and a more professional operational environment. Our partnerships focus on efficiency, discretion, and long-term creator growth.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="text-sm md:text-base text-muted-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        Built for creators operating at scale who want stronger systems behind their brand.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
      >
        <a
          href="#apply"
          className="px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-gold-dark transition-colors duration-300"
        >
          Request Partnership
        </a>
        <a
          href="#why"
          className="px-8 py-4 border border-gold-subtle text-foreground font-body text-sm tracking-wider uppercase hover:bg-secondary transition-colors duration-300"
        >
          Learn More
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.0 }}
        className="text-xs tracking-[0.2em] uppercase text-muted-foreground"
      >
        Private partnerships&nbsp;&nbsp;•&nbsp;&nbsp;Confidential creator relationships&nbsp;&nbsp;•&nbsp;&nbsp;Professional growth infrastructure
      </motion.p>
    </div>
  </section>
);

export default HeroSection;
