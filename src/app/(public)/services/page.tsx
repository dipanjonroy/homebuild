import HeroSection from "@/components/sections/HeroSection";

const heading = "Construction Services Designed Around Your Vision";
const text =
  "From new construction and renovations to complete remodeling, we provide dependable construction services tailored to your needs. Our team combines quality craftsmanship, thoughtful planning, and attention to detail to deliver spaces built for lasting value and everyday living.";

export default function page() {
  return (
    <>
      <HeroSection
        img="/Service-page-hero-image.jpg"
        badge="Our Services"
        headline={heading}
        text={text}
      />
    </>
  );
}
