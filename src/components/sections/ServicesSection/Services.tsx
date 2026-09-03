import StackCard from "@/components/animations/StackCard";
import ServiceCard from "./ServiceCard";

const services = [
  {
    img: {
      src: "/homepage/residential-service.jpg",
      alt: "Residential Service",
    },
    heading: "Residential Construction",
    text: "We build high-quality homes designed around your lifestyle, combining modern design, durable materials, and expert craftsmanship.",
    points: [
      "Custom home building",
      "New home construction",
      "Interior & Exterior finishing",
    ],
    url: "residential-construction",
  },
  {
    img: {
      src: "/homepage/commercial-service.jpg",
      alt: "Commercial Service",
    },
    heading: "Commercial Construction",
    text: "From office spaces to retail buildings, we deliver efficient and reliable construction solutions that meet your business needs.",
    points: [
      "Office & Retail Spaces",
      "New home construction",
      "Large-Scale Construction Projects",
    ],
    url: "commercial-construction",
  },
  {
    img: {
      src: "/homepage/remodeling-service.jpg",
      alt: "Renovation Service",
    },
    heading: "Renovation & Remodeling",
    text: "Transform your existing space with our professional renovation services, improving functionality, comfort, and value.",
    points: [
      "Kitchen & Bathroom Remodeling",
      "Home Extensions & Upgrades",
      "Structural Improvements",
    ],
    url: "renovation-remodeling",
  },
  {
    img: {
      src: "/homepage/design-build-service.jpg",
      alt: "Design & Build Service",
    },
    heading: "Design & Build Services",
    text: "From initial concepts to final completion, we manage every stage of your project with a seamless and stress-free approach.",
    points: [
      "Architectural Planning",
      "Material Selection & Guidance",
      "Complete Project Execution",
    ],
    url: "design-build-services",
  },
];

export default function Services() {
  return (
    <div className="w-full">
      <StackCard>
        <div className="cards space-y-50">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} reverse={idx % 2 !== 0} />
          ))}
        </div>
      </StackCard>
    </div>
  );
}
