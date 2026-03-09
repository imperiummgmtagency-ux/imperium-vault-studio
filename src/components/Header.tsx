import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-foreground/[0.08]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-lg md:text-xl font-semibold tracking-wide text-foreground hover:brightness-125 transition-all duration-300"
        >
          IMPERIUM
        </a>

        {/* CTA */}
        <a
          href="#apply"
          className="px-5 py-2 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:bg-gold-light transition-colors duration-300"
        >
          Request Partnership
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
