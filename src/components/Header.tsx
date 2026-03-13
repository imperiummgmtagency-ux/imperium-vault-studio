import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imperiumLogo from "@/assets/imperium-logo.png";

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
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-14 md:h-16">
        {/* Logo text */}
        <span className="font-heading text-base md:text-xl font-semibold tracking-wide text-foreground">
          IMPERIUM
        </span>

        {/* Center logo — hidden on very small screens */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img src={imperiumLogo} alt="Imperium Management Agency" className="h-8 md:h-12 w-auto" />
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="px-2.5 md:px-5 py-2 bg-primary text-primary-foreground font-body text-[8px] sm:text-[10px] md:text-xs tracking-widest uppercase rounded-sm hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
        >
          Request Partnership
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
