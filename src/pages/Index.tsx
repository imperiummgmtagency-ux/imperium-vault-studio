import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GoldDivider from "@/components/GoldDivider";
import WhyImperium from "@/components/WhyImperium";
import WhatWeHelp from "@/components/WhatWeHelp";
import OperationalInfrastructure from "@/components/OperationalInfrastructure";
import ApproachSection from "@/components/ApproachSection";
import PrivacySection from "@/components/PrivacySection";
import SelectiveSection from "@/components/SelectiveSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import PartnershipAvailability from "@/components/PartnershipAvailability";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AuthorityStatement = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="py-16 px-6 text-center"
  >
    <p className="text-sm md:text-base text-muted-foreground/60 italic tracking-wide max-w-2xl mx-auto">
      Many creators we work with operate under private agreements and prefer confidential partnerships.
    </p>
  </motion.div>
);

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <HeroSection />
    <GoldDivider />
    <WhyImperium />
    <GoldDivider />
    <WhatWeHelp />
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
    <FAQSection />
    <GoldDivider />
    <CTASection />
    <GoldDivider />
    {/* Start the Conversation CTA */}
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-28 px-6 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
          Start the Conversation
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed mb-4">
          Imperium Management Agency reviews creator partnerships selectively.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mb-4">
          If your brand aligns with our operational approach and growth philosophy, you may submit a partnership request for review.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mb-10">
          All inquiries are handled privately.
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-gold-dark transition-colors duration-300"
        >
          Request Partnership
        </Link>
      </div>
    </motion.section>
    <Footer />
  </div>
);

export default Index;
