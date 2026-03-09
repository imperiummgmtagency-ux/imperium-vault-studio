import { useState, FormEvent } from "react";
import SectionWrapper from "./SectionWrapper";
import { toast } from "sonner";

const ApplicationForm = () => {
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
    <SectionWrapper id="apply">
      <p className="text-xs tracking-[0.2em] uppercase text-primary/70 text-center mb-6 font-body">
        Imperium reviews creator partnerships selectively to ensure strong alignment and operational focus.
      </p>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-semibold text-center mb-4">
        Request Partnership Review
      </h2>
      <p className="text-muted-foreground text-center mb-12 text-base leading-relaxed max-w-2xl mx-auto">
        Imperium reviews applications selectively. If your brand appears to align with our structure and approach, a member of our team may reach out to continue the conversation.
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input type="text" placeholder="Full Name" required className={inputClass} />
          <input type="text" placeholder="Creator / Brand Name" required className={inputClass} />
          <input type="email" placeholder="Email Address" required className={inputClass} />
          <input type="text" placeholder="Telegram or Preferred Contact" className={inputClass} />
          <input type="text" placeholder="Primary Platform" className={inputClass} />
          <input type="text" placeholder="Current Monthly Revenue Range" className={inputClass} />
        </div>
        <input type="text" placeholder="Platform Links" className={inputClass} />
        <textarea
          placeholder="What are you currently looking for help with?"
          rows={3}
          className={inputClass + " resize-none"}
        />
        <textarea
          placeholder="Tell us briefly about your brand"
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
    </SectionWrapper>
  );
};

export default ApplicationForm;
