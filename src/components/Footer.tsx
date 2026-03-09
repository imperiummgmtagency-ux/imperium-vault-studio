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
        <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
        <span className="hover:text-primary transition-colors cursor-pointer">Terms</span>
        <span className="hover:text-primary transition-colors cursor-pointer">Contact</span>
      </div>
    </div>
  </footer>
);

export default Footer;
