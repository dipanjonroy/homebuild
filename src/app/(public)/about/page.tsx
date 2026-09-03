import { Metadata } from "next";

import HeroSection from "@/components/sections/aboutpage/HeroSection"
import AboutSection from "@/components/sections/aboutpage/AboutSection"
import MissionVisionSection from "@/components/sections/aboutpage/MissionVisionSection"

import ProcessSection from "@/components/sections/homepage/ProcessSection";
import TeamSection from "@/components/sections/homepage/TeamSection";
import CtaSection from "@/components/sections/homepage/CTASection";

export const metadata:Metadata = {
  title:"About"
}

export default function AboutPage() {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <MissionVisionSection/>
      <ProcessSection/>
      <TeamSection/>
      <CtaSection className="section-padding"/>
    </>
  );
}