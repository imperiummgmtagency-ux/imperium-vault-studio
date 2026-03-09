import HeroSection from "@/components/HeroSection";
import GoldDivider from "@/components/GoldDivider";
import WhyImperium from "@/components/WhyImperium";
import WhatWeHelp from "@/components/WhatWeHelp";
import PrivacySection from "@/components/PrivacySection";
import SelectiveSection from "@/components/SelectiveSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import PartnershipAvailability from "@/components/PartnershipAvailability";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <HeroSection />
    <GoldDivider />
    <WhyImperium />
    <GoldDivider />
    <WhatWeHelp />
    <GoldDivider />
    <PrivacySection />
    <GoldDivider />
    <SelectiveSection />
    <GoldDivider />
    <ProcessSection />
    <GoldDivider />
    <FAQSection />
    <GoldDivider />
    <CTASection />
    <GoldDivider />
    <ApplicationForm />
    <Footer />
  </div>
);

export default Index;
