import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-16 px-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <h4 className="font-heading text-xl font-semibold text-foreground mb-2">
          Imperium Management Agency
        </h4>
        <p className="text-muted-foreground text-xs max-w-xs">
          Private creator management and operational support for serious creators.
        </p>
      </div>
      <div className="flex gap-8 text-xs text-muted-foreground tracking-wide uppercase">
        <Link to="/privacy" className="hover:text-primary transition-colors duration-300">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-primary transition-colors duration-300">Terms</Link>
        <Link to="/contact" className="hover:text-primary transition-colors duration-300">Contact</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
