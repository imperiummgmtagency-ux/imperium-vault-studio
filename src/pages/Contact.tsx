import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Contact = () => {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Please confirm you understand the selective review process.");
      return;
    }
    toast.success("Application submitted. Our team will review it privately.");
    (e.target as HTMLFormElement).reset();
    setAgreed(false);
  };

  const inputClass =
    "w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors duration-300 font-body";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-heading font-semibold text-center mb-4">
              Request a Private Review
            </h1>
            <p className="text-muted-foreground text-center text-base leading-relaxed max-w-2xl mx-auto mb-16">
              Imperium Management Agency reviews creator inquiries selectively. If your brand aligns with our structure and approach, a member of our team may reach out privately.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="Full Name" required className={inputClass} />
                <input type="text" placeholder="Creator / Brand Name" required className={inputClass} />
                <input type="email" placeholder="Email Address" required className={inputClass} />
                <input type="text" placeholder="Telegram or Preferred Contact" className={inputClass} />
                <input type="text" placeholder="Primary Platform" className={inputClass} />
                <input type="text" placeholder="Monthly Revenue Range" className={inputClass} />
              </div>
              <input type="text" placeholder="Platform Links" className={inputClass} />
              <textarea
                placeholder="What are you looking for help with?"
                rows={3}
                className={inputClass + " resize-none"}
              />
              <textarea
                placeholder="Brief description of your brand"
                rows={3}
                className={inputClass + " resize-none"}
              />

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 accent-primary"
                />
                <span className="text-muted-foreground text-xs leading-relaxed group-hover:text-foreground transition-colors">
                  I understand Imperium Management Agency reviews applications selectively.
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-gold-dark transition-colors duration-300"
              >
                Request Partnership
              </button>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
