import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GoldDivider from "@/components/GoldDivider";
import WhyImperium from "@/components/WhyImperium";
import WhatWeHelp from "@/components/WhatWeHelp";
import PlatformsSection from "@/components/PlatformsSection";
import OperationalInfrastructure from "@/components/OperationalInfrastructure";
import ApproachSection from "@/components/ApproachSection";
import AboutSection from "@/components/AboutSection";
import PrivacySection from "@/components/PrivacySection";
import SelectiveSection from "@/components/SelectiveSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import PartnershipAvailability from "@/components/PartnershipAvailability";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SITE_URL, OG_IMAGE, SITE_NAME } from "@/lib/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description:
    "Private creator management agency providing operational infrastructure, multi-platform oversight, and growth strategy for serious creators.",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Imperium Management Agency offers private, selective creator management with multi-platform infrastructure, monetization strategy, and operational support.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who does Imperium typically work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We partner with established creators who are already active across one or more platforms and are looking for structured management support — whether that means refining their growth strategy, improving operational systems, or scaling more efficiently.",
      },
    },
    {
      "@type": "Question",
      name: "Does Imperium guarantee specific results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No responsible agency can guarantee income outcomes. What we focus on is building stronger systems, sharper strategy, and more consistent execution — the foundations that drive sustainable, long-term growth.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Imperium selective about partnerships?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quality partnerships require genuine alignment in goals, work ethic, and expectations. By being intentional about who we work with, we ensure every partnership receives the focus and resources it deserves.",
      },
    },
    {
      "@type": "Question",
      name: "Why aren't your creators listed publicly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many of the creators we work with prefer to keep their management arrangements private. We respect and support that preference as part of our commitment to operating with discretion.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after I submit an application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every application is reviewed personally by our team. If there's a strong potential fit based on your goals and current position, we'll reach out to schedule an introductory conversation — typically within a few business days.",
      },
    },
    {
      "@type": "Question",
      name: "Is my information kept private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. All submissions and conversations are handled with full confidentiality. Your information is never shared publicly or with third parties.",
      },
    },
    {
      "@type": "Question",
      name: "How does Imperium approach discretion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Imperium takes a thoughtful and professional approach to discretion. We understand that for many partnerships, privacy, brand protection, and clear boundaries matter. Our approach is intentional and designed to support a more professional experience overall.",
      },
    },
  ],
};

const AuthorityStatement = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="py-10 md:py-16 px-5 md:px-6 text-center"
  >
    <p className="text-xs md:text-sm text-muted-foreground/60 italic tracking-wide max-w-2xl mx-auto">
      Many creators we work with operate under private agreements and prefer confidential partnerships.
    </p>
  </motion.div>
);

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Helmet>
      <title>Imperium Management Agency | Private Creator Management &amp; Multi-Platform Support</title>
      <meta
        name="description"
        content="Imperium Management Agency is a private creator management company offering multi-platform infrastructure, monetization strategy, and operational support for serious creators."
      />
      <link rel="canonical" href={SITE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content="Imperium Management Agency | Private Creator Management" />
      <meta
        property="og:description"
        content="Private creator management agency providing operational infrastructure, multi-platform oversight, and growth strategy for serious creators."
      />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Imperium Management Agency | Private Creator Management" />
      <meta
        name="twitter:description"
        content="Private creator management agency providing operational infrastructure, multi-platform oversight, and growth strategy for serious creators."
      />
      <meta name="twitter:image" content={OG_IMAGE} />
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Header />
    <HeroSection />
    <GoldDivider />
    <WhyImperium />
    <GoldDivider />
    <AboutSection />
    <GoldDivider />
    <WhatWeHelp />
    <GoldDivider />
    <PlatformsSection />
    <GoldDivider />
    <OperationalInfrastructure />
    <GoldDivider />
    <ApproachSection />
    <GoldDivider />
    <PrivacySection />
    <GoldDivider />
    <SelectiveSection />
    <GoldDivider />
    <AuthorityStatement />
    <GoldDivider />
    <ProcessSection />
    <GoldDivider />
    <PartnershipAvailability />
    <GoldDivider />
    <CTASection />
    <GoldDivider />
    <FAQSection />
    <GoldDivider />
    {/* Start the Conversation CTA */}
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28 px-5 md:px-6 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-semibold mb-4 md:mb-6">
          Start the Conversation
        </h2>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-3 md:mb-4">
          Imperium Management Agency reviews creator partnerships selectively.
        </p>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-3 md:mb-4">
          If your brand aligns with our operational approach and growth philosophy, you may submit a partnership request for review.
        </p>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 md:mb-10">
          All inquiries are handled privately.
        </p>
        <Link
          to="/contact"
          className="inline-block w-full sm:w-auto px-10 py-3.5 md:py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-gold-dark transition-colors duration-300"
        >
          Request Partnership
        </Link>
      </div>
    </motion.section>
    <Footer />
  </div>
);

export default Index;
