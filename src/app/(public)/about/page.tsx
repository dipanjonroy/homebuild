import { Metadata } from "next";

import HeroSection from "@/components/sections/aboutPage/HeroSection"

export const metadata:Metadata = {
  title:"About"
}

export default function AboutPage() {
  return (
    <>
      <HeroSection/>
    </>
  );
}