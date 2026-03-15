import { useState, FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { SITE_URL, OG_IMAGE, SITE_NAME } from "@/lib/seo";

const PLATFORM_OPTIONS = [
  "OnlyFans Management",
  "Fansly Management",
  "Fanvue Management",
  "Instagram Management",
  "TikTok Management",
  "X / Twitter Management",
  "Reddit Management",
  "Facebook Management",
  "Snapchat Management",
  "Multi-Platform Management",
  "Other",
];

const CONTACT_METHOD_OPTIONS = [
  "Telegram",
  "WhatsApp",
  "Phone",
  "Instagram",
  "Email",
  "Other",
];

const CONTACT_METHOD_CONFIG: Record<string, { label: string; placeholder: string }> = {
  Telegram: { label: "Telegram Username", placeholder: "@username" },
  WhatsApp: { label: "WhatsApp Number", placeholder: "+1 (555) 555-5555" },
  Phone: { label: "Phone Number", placeholder: "+1 (555) 555-5555" },
  Instagram: { label: "Instagram Username", placeholder: "@username" },
  Email: { label: "Email Address", placeholder: "name@email.com" },
  Other: { label: "Preferred Contact Details", placeholder: "" },
};

const REVENUE_OPTIONS = [
  "Less than $5k / month",
  "$5k – $10k / month",
  "$10k – $25k / month",
  "$25k – $50k / month",
  "$50k – $100k / month",
  "$100k+ / month",
  "Prefer not to say",
];

const HELP_OPTIONS = [
  "Account growth strategy",
  "Chat / fan messaging systems",
  "Monetization optimization",
  "Content strategy",
  "Operational support",
  "Scaling an existing creator brand",
  "General guidance",
  "Other",
];

const RequiredAsterisk = () => (
  <span className="text-primary ml-1 text-xs">*</span>
);

const OptionalTag = () => (
  <span className="text-muted-foreground/50 ml-1.5 text-xs font-normal">(optional)</span>
);

const FieldError = ({ message }: { message: string }) => (
  <p className="text-primary/80 text-xs mt-1.5 font-body">{message}</p>
);

const Contact = () => {
  const [agreed, setAgreed] = useState(false);
  const [platform, setPlatform] = useState("");
  const [revenue, setRevenue] = useState("");
  const [helpAreas, setHelpAreas] = useState<string[]>([]);
  const [contactMethod, setContactMethod] = useState("");
  const [contactDetail, setContactDetail] = useState("");
  const [fullName, setFullName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [email, setEmail] = useState("");
  const [platformHandle, setPlatformHandle] = useState("");
  const [helpOtherDetail, setHelpOtherDetail] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleHelpArea = (area: string) => {
    setHelpAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = "Please complete this required field.";
    if (!email.trim()) newErrors.email = "Please complete this required field.";
    if (!contactMethod) newErrors.contactMethod = "Please complete this required field.";
    if (contactMethod && !contactDetail.trim()) newErrors.contactDetail = "Please complete this required field.";
    if (!platform) newErrors.platform = "Please complete this required field.";
    return newErrors;
  };

  const resetForm = () => {
    setAgreed(false);
    setPlatform("");
    setRevenue("");
    setHelpAreas([]);
    setContactMethod("");
    setContactDetail("");
    setFullName("");
    setBrandName("");
    setEmail("");
    setPlatformHandle("");
    setHelpOtherDetail("");
    setAdditionalNotes("");
    setErrors({});
    setSubmitted(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please complete all required fields.");
      return;
    }

    if (!agreed) {
      newErrors.agreed = "Please confirm before submitting your request.";
      setErrors({ ...newErrors });
      toast.error("Please confirm before submitting your request.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("submit-contact-form", {
        body: {
          full_name: fullName,
          brand_name: brandName,
          email,
          contact_method: contactMethod,
          contact_detail: contactDetail,
          platform,
          platform_handle: platformHandle,
          revenue,
          help_areas: helpAreas,
          help_other_detail: helpOtherDetail,
          additional_notes: additionalNotes,
        },
      });

      if (error) throw error;

      resetForm();
      setShowConfirmation(true);
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const borderError = "border-primary/60 shadow-[0_0_8px_hsl(43_55%_55%/0.15)]";

  const inputClass = (errorKey?: string) =>
    `w-full bg-secondary border px-4 py-3.5 md:py-3 text-base md:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:shadow-[0_0_8px_hsl(43_55%_55%/0.15)] transition-all duration-300 font-body rounded-none appearance-none ${
      submitted && errorKey && errors[errorKey] ? borderError : "border-border"
    }`;

  const selectClass = (errorKey?: string) =>
    `w-full bg-secondary border px-4 py-3.5 md:py-3 text-base md:text-sm text-foreground focus:outline-none focus:border-primary/60 focus:shadow-[0_0_8px_hsl(43_55%_55%/0.15)] transition-all duration-300 font-body rounded-none appearance-none cursor-pointer ${
      submitted && errorKey && errors[errorKey] ? borderError : "border-border"
    }`;

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-24 md:pt-32 pb-16 md:pb-24 px-5 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-semibold mb-6">
                Request Received
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto mb-8">
                Your request has been submitted for review. If your brand aligns with our current partnership structure, a member of our team may reach out privately.
              </p>
              <Link
                to="/"
                className="inline-block text-primary hover:text-primary/80 text-sm font-body tracking-wide transition-colors duration-300"
              >
                ← Back to Home
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Request Creator Management Partnership — Imperium Management Agency</title>
        <meta name="description" content="Submit a confidential partnership inquiry to Imperium Management Agency. We review creator applications selectively and respond privately to aligned brands." />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <meta property="og:title" content="Request a Partnership — Imperium Management Agency" />
        <meta property="og:description" content="Submit a confidential partnership inquiry. We review creator applications selectively and respond privately." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Header />
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 px-5 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-block text-primary hover:text-primary/80 text-sm font-body tracking-wide transition-colors duration-300 mb-7">
              ← Back to Home
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-semibold text-center mb-4">
              Request a Private Review
            </h1>
            <p className="text-muted-foreground text-center text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-3 md:mb-4">
              Imperium Management Agency reviews creator inquiries selectively.
            </p>
            <p className="text-muted-foreground text-center text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-3 md:mb-4">
              If your brand aligns with our operational approach and partnership structure, a member of our team may reach out privately to continue the conversation.
            </p>
            <p className="text-muted-foreground text-center text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-3 md:mb-4">
              All submissions are reviewed confidentially.
            </p>
            <p className="text-muted-foreground text-center text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 md:mb-16">
              Please provide accurate information so the inquiry can be reviewed appropriately.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
                {/* Full Name */}
                <div>
                  <label className="text-xs text-muted-foreground font-body mb-1.5 block">
                    Full Name<RequiredAsterisk />
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={inputClass("fullName")}
                  />
                  {submitted && errors.fullName && <FieldError message={errors.fullName} />}
                </div>

                {/* Brand Name */}
                <div>
                  <label className="text-xs text-muted-foreground font-body mb-1.5 block">
                    Creator / Brand Name<OptionalTag />
                  </label>
                  <input
                    type="text"
                    placeholder="Creator / Brand Name"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className={inputClass()}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs text-muted-foreground font-body mb-1.5 block">
                    Email Address<RequiredAsterisk />
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass("email")}
                  />
                  {submitted && errors.email && <FieldError message={errors.email} />}
                </div>

                {/* Contact Method */}
                <div>
                  <label className="text-xs text-muted-foreground font-body mb-1.5 block">
                    Contact Method<RequiredAsterisk />
                  </label>
                  <div className={`flex flex-col sm:flex-row border focus-within:border-primary/60 focus-within:shadow-[0_0_8px_hsl(43_55%_55%/0.15)] transition-all duration-300 ${
                    submitted && (errors.contactMethod || errors.contactDetail) ? borderError : "border-border"
                  }`}>
                    <div className="relative shrink-0">
                      <select
                        value={contactMethod}
                        onChange={(e) => { setContactMethod(e.target.value); setContactDetail(""); }}
                        className={`bg-secondary text-base md:text-sm font-body pl-3 pr-7 py-3.5 md:py-3 border-b sm:border-b-0 sm:border-r border-border focus:outline-none appearance-none cursor-pointer w-full sm:w-auto ${!contactMethod ? "text-muted-foreground" : "text-foreground"}`}
                      >
                        <option value="" disabled>Contact via</option>
                        {CONTACT_METHOD_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-secondary text-foreground">{opt}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
                    </div>
                    <input
                      type="text"
                      placeholder={contactMethod ? (CONTACT_METHOD_CONFIG[contactMethod]?.placeholder || "Enter your details") : "Enter your username or number"}
                      value={contactDetail}
                      onChange={(e) => setContactDetail(e.target.value)}
                      className="flex-1 bg-secondary px-4 py-3.5 md:py-3 text-base md:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none font-body min-w-0"
                    />
                  </div>
                  {submitted && errors.contactMethod && <FieldError message={errors.contactMethod} />}
                  {submitted && !errors.contactMethod && errors.contactDetail && <FieldError message={errors.contactDetail} />}
                </div>

                {/* Primary Platform */}
                <div>
                  <label className="text-xs text-muted-foreground font-body mb-1.5 block">
                    Primary Platform<RequiredAsterisk />
                  </label>
                  <div className="relative">
                    <select
                      value={platform}
                      onChange={(e) => setPlatform(e.target.value)}
                      className={`${selectClass("platform")} ${!platform ? "text-muted-foreground" : "text-foreground"}`}
                    >
                      <option value="" disabled>Primary Platform</option>
                      {PLATFORM_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-secondary text-foreground">{opt}</option>
                      ))}
                    </select>
                  </div>
                  {submitted && errors.platform && <FieldError message={errors.platform} />}
                </div>

                {/* Revenue */}
                <div>
                  <label className="text-xs text-muted-foreground font-body mb-1.5 block">
                    Approximate Monthly Revenue<OptionalTag />
                  </label>
                  <div className="relative">
                    <select
                      value={revenue}
                      onChange={(e) => setRevenue(e.target.value)}
                      className={`${selectClass()} ${!revenue ? "text-muted-foreground" : "text-foreground"}`}
                    >
                      <option value="" disabled>Approximate Monthly Creator Revenue</option>
                      {REVENUE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-secondary text-foreground">{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs text-muted-foreground font-body mb-1.5 block">
                  Primary Platform Handle<OptionalTag />
                </label>
                <input
                  type="text"
                  placeholder="@username"
                  value={platformHandle}
                  onChange={(e) => setPlatformHandle(e.target.value)}
                  className={inputClass()}
                />
              </div>

              {/* Multi-select help areas */}
              <div>
                <p className="text-sm text-muted-foreground mb-3 font-body">
                  What areas are you looking to improve or optimize?{" "}
                  <span className="text-muted-foreground/60">(optional — select all that apply)</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {HELP_OPTIONS.map((area) => {
                    const selected = helpAreas.includes(area);
                    return (
                      <button
                        key={area}
                        type="button"
                        onClick={() => toggleHelpArea(area)}
                        className={`text-left px-4 py-3 md:py-2.5 text-sm font-body border transition-all duration-300 ${
                          selected
                            ? "border-primary/60 bg-primary/10 text-foreground shadow-[0_0_8px_hsl(43_55%_55%/0.12)]"
                            : "border-border bg-secondary text-muted-foreground hover:border-primary/30 hover:text-foreground"
                        }`}
                      >
                        {area}
                      </button>
                    );
                  })}
                </div>
                {helpAreas.includes("Other") && (
                  <input
                    type="text"
                    placeholder="Tell us briefly"
                    value={helpOtherDetail}
                    onChange={(e) => setHelpOtherDetail(e.target.value)}
                    className={inputClass() + " mt-3"}
                  />
                )}
              </div>

              <div>
                <label className="text-xs text-muted-foreground font-body mb-1.5 block">
                  Additional Notes<OptionalTag />
                </label>
                <textarea
                  placeholder="Anything you'd like to add?"
                  rows={3}
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className={inputClass() + " resize-none"}
                />
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 accent-primary"
                  />
                  <span className="text-muted-foreground text-xs leading-relaxed group-hover:text-foreground transition-colors">
                    I confirm that I am 18 years of age or older, that the information provided is accurate to the best of my knowledge, and that submitting this form does not guarantee acceptance or partnership.<RequiredAsterisk />
                  </span>
                </label>
                {submitted && errors.agreed && <FieldError message={errors.agreed} />}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 md:py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-gold-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
              >
                {isSubmitting ? "Submitting..." : "Submit for Review"}
              </button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-14 md:mt-20 pt-10 md:pt-16 border-t border-border">
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
