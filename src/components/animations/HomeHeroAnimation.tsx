"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function HomeHeroAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!contentRef.current) return;

      const tl = gsap.timeline();

      tl.from(".hero-badge", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".hero-cta",
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-brand-text",
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        );

      gsap.from(".hero-char", {
        y: 20,
        filter: "blur(10px)",
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.03,
      });
    },
    { scope: contentRef },
  );
  return (
    <div ref={contentRef} className="pointer-event-none">
      {children}
    </div>
  );
}
