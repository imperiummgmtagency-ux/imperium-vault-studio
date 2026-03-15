import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-12 md:py-16 px-5 md:px-6">
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-8">
        <div className="text-center md:text-left">
          <h4 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-1.5 md:mb-2">
            Imperium Management Agency
          </h4>
          <p className="text-muted-foreground text-xs max-w-xs">
            Private creator management and multi-platform operational support for serious creators.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex gap-6 md:gap-8 text-xs text-muted-foreground tracking-wide uppercase">
          <Link to="/about-imperium" className="hover:text-primary transition-colors duration-300">About</Link>
          <Link to="/contact" className="hover:text-primary transition-colors duration-300">Contact</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors duration-300">Privacy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors duration-300">Terms</Link>
        </nav>
      </div>

      {/* Service links for internal linking */}
      <nav aria-label="Platform services" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] md:text-xs text-muted-foreground/50 tracking-wider uppercase">
        <Link to="/onlyfans-management" className="hover:text-primary/70 transition-colors duration-300">OnlyFans</Link>
        <Link to="/fansly-management" className="hover:text-primary/70 transition-colors duration-300">Fansly</Link>
        <Link to="/fanvue-management" className="hover:text-primary/70 transition-colors duration-300">Fanvue</Link>
        <Link to="/instagram-management" className="hover:text-primary/70 transition-colors duration-300">Instagram</Link>
        <Link to="/tiktok-management" className="hover:text-primary/70 transition-colors duration-300">TikTok</Link>
        <Link to="/x-twitter-management" className="hover:text-primary/70 transition-colors duration-300">X / Twitter</Link>
        <Link to="/reddit-management" className="hover:text-primary/70 transition-colors duration-300">Reddit</Link>
        <Link to="/facebook-management" className="hover:text-primary/70 transition-colors duration-300">Facebook</Link>
        <Link to="/snapchat-management" className="hover:text-primary/70 transition-colors duration-300">Snapchat</Link>
        <Link to="/multi-platform-management" className="hover:text-primary/70 transition-colors duration-300">Multi-Platform</Link>
      </nav>

      <p className="text-muted-foreground/50 text-xs tracking-wide">
        © Imperium Management Agency — All rights reserved
      </p>
    </div>
  </footer>
);

export default Footer;
