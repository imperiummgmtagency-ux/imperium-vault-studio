import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const PLATFORM_OPTIONS = [
  "OnlyFans",
  "Fansly",
  "Instagram",
  "TikTok",
  "Multiple Platforms",
  "Other",
];

const EXPERIENCE_OPTIONS = [
  "Less than 3 months",
  "3–12 months",
  "1–3 years",
  "3+ years",
];

const Contact = () => {
  const [agreed, setAgreed] = useState(false);
  const [platform, setPlatform] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Please confirm you understand the selective review process.");
      return;
    }
    toast.success("Application submitted. Our team will review it privately.");
    (e.target as HTMLFormElement).reset();
    setAgreed(false);
    setPlatform("");
    setExperience("");
  };

  const inputClass =
    "w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors duration-300 font-body rounded-none appearance-none";

  const selectClass =
    "w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors duration-300 font-body rounded-none appearance-none cursor-pointer";

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
            <Link to="/" className="inline-block text-primary hover:text-primary/80 text-sm font-body tracking-wide transition-colors duration-300 mb-7">
              ← Back to Home
            </Link>
            <h1 className="text-3xl md:text-5xl font-heading font-semibold text-center mb-4">
              Request a Private Review
            </h1>
            <p className="text-muted-foreground text-center text-base leading-relaxed max-w-2xl mx-auto mb-4">
              Imperium Management Agency reviews creator inquiries selectively.
            </p>
            <p className="text-muted-foreground text-center text-base leading-relaxed max-w-2xl mx-auto mb-4">
              If your brand aligns with our operational approach and partnership structure, a member of our team may reach out privately to continue the conversation.
            </p>
            <p className="text-muted-foreground text-center text-base leading-relaxed max-w-2xl mx-auto mb-4">
              All submissions are reviewed confidentially.
            </p>
            <p className="text-muted-foreground text-center text-base leading-relaxed max-w-2xl mx-auto mb-16">
              Please provide accurate information so the inquiry can be reviewed appropriately.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" required className={inputClass} />
                <input type="text" placeholder="Creator / Brand Name" required className={inputClass} />
                <input type="email" placeholder="Email Address" required className={inputClass} />
                <input type="text" placeholder="Telegram or Preferred Contact" className={inputClass} />

                <div className="relative">
                  <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className={`${selectClass} ${!platform ? "text-muted-foreground" : "text-foreground"}`}
                  >
                    <option value="" disabled>Primary Platform</option>
                    {PLATFORM_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-secondary text-foreground">{opt}</option>
                    ))}
                  </select>
                </div>

                <input type="text" placeholder="Approximate Monthly Creator Revenue" className={inputClass} />
              </div>

              <input
                type="text"
                placeholder="Creator Profile Links — OnlyFans, Instagram, TikTok, or other platforms"
                className={inputClass}
              />

              <div className="relative">
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className={`${selectClass} ${!experience ? "text-muted-foreground" : "text-foreground"}`}
                >
                  <option value="" disabled>How long have you been creating content?</option>
                  {EXPERIENCE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-secondary text-foreground">{opt}</option>
                  ))}
                </select>
              </div>

              <textarea
                placeholder="What areas are you looking to improve or optimize?"
                rows={3}
                className={inputClass + " resize-none"}
              />
              <textarea
                placeholder="Tell us briefly about your creator brand and audience"
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

            {/* Alternative Contact */}
            <div className="mt-20 pt-16 border-t border-border">
              <h2 className="text-xl md:text-2xl font-heading font-semibold mb-4">
                Alternative Contact
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                If you prefer not to complete the application form at this time, you may also reach out directly by email.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                Partnership inquiries may be sent to:
              </p>
              <a
                href="mailto:admin@imperiummgmtagency.com"
                className="text-primary hover:text-primary/80 text-sm font-body tracking-wide transition-colors duration-300"
              >
                admin@imperiummgmtagency.com
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                Please include relevant details about your creator brand, platform presence, and current stage so the inquiry can be reviewed appropriately.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
