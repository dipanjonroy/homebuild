import { Metadata } from "next";

import HeroSection from "@/components/sections/aboutpage/HeroSection"
import AboutSection from "@/components/sections/aboutpage/AboutSection"

export const metadata:Metadata = {
  title:"About"
}

export default function AboutPage() {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
    </>
  );
}