import { Metadata } from "next";

import HeroSection from "@/components/sections/aboutpage/HeroSection"
import AboutSection from "@/components/sections/aboutpage/AboutSection"
import MissionVisionSection from "@/components/sections/aboutpage/MissionVisionSection"

export const metadata:Metadata = {
  title:"About"
}

export default function AboutPage() {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <MissionVisionSection/>
    </>
  );
}