import HomeHeroSection from "@/components/sections/homepage/HomeHeroSection";
import BrandLogoSection from "@/components/sections/homepage/BrandLogoSection";
import AboutSection from "@/components/sections/homepage/AboutSection";
import ServicesSection from "@/components/sections/homepage/ServicesSection";
import PortfolioSection from "@/components/sections/homepage/PortfolioSection";
import ProcessSection from "@/components/sections/homepage/ProcessSection";
import WhyChooseSection from "@/components/sections/homepage/WhyChooseSection";

export default function Homepage() {
  return (
    <>
      <HomeHeroSection />
      <BrandLogoSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <WhyChooseSection />
    </>
  );
}
