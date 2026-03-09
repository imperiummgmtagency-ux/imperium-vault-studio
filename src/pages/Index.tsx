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
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

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
    <FAQSection />
    <GoldDivider />
    <CTASection />
    <GoldDivider />
    <PartnershipAvailability />
    <GoldDivider />
    <ApplicationForm />
    <Footer />
  </div>
);

export default Index;
