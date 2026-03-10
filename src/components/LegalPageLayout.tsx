import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const LegalPageLayout = ({ title, subtitle, children }: LegalPageLayoutProps) => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-block text-primary hover:text-primary/80 text-sm font-body tracking-wide transition-colors duration-300 mb-7">
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-heading font-semibold text-center mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground text-center text-base leading-relaxed max-w-2xl mx-auto mb-16">
              {subtitle}
            </p>
          )}
          <div className="space-y-12">{children}</div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export const LegalSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-4 border-l-2 border-primary/40 pl-4">
      {title}
    </h2>
    <div className="text-muted-foreground text-sm leading-relaxed space-y-3 pl-6">{children}</div>
  </section>
);

export default LegalPageLayout;
