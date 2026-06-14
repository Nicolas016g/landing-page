import { SalesNotifications } from "./extras/SalesNotifications";
import { StickyCTA } from "./extras/StickyCTA";
import { WhatsAppButton } from "./extras/WhatsAppButton";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { AboutSection } from "./sections/AboutSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { ContactSection } from "./sections/ContactSection";
import { CTABanner } from "./sections/CTABanner";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { MarketSection } from "./sections/MarketSection";
import { PricingSection } from "./sections/PricingSection";
import { ROISection } from "./sections/ROISection";
import { SolutionsSection } from "./sections/SolutionsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { TrustBar } from "./sections/TrustBar";

export function SiteShell() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <ROISection />
        <MarketSection />
        <SolutionsSection />
        <PricingSection />
        <CTABanner />
        <FeaturesSection />
        <TestimonialsSection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
      <SalesNotifications />
    </>
  );
}
