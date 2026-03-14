import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import imperiumLogo from "@/assets/imperium-logo.png";

const platformLinks = [
  { label: "OnlyFans Management", href: "/onlyfans-management" },
  { label: "Fansly Management", href: "/fansly-management" },
  { label: "Fanvue Management", href: "/fanvue-management" },
  { label: "Instagram Management", href: "/instagram-management" },
  { label: "TikTok Management", href: "/tiktok-management" },
  { label: "X / Twitter Management", href: "/x-twitter-management" },
  { label: "Reddit Management", href: "/reddit-management" },
  { label: "Multi-Platform Management", href: "/multi-platform-management" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

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
        {/* Logo text + Platforms dropdown */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/" className="font-heading text-base md:text-xl font-semibold tracking-wide text-foreground">
            IMPERIUM
          </Link>

          {/* Platforms dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1 font-body text-[8px] sm:text-[9px] md:text-xs tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Platforms We Manage
              <ChevronDown
                size={12}
                className={`text-primary/60 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-2 w-64 bg-card border border-primary/15 shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.15)] py-2 z-[60]"
                >
                  {platformLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-5 py-2.5 font-body text-[11px] md:text-xs tracking-wider text-foreground/80 hover:text-primary hover:bg-primary/5 hover:pl-6 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden sm:block">
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
