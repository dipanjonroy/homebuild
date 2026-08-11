"use client";

import { useModalStore } from "@/store/ModalStore";
import { gsap } from "@/libs/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function ModalLayout() {
  const { isModalOpen, modal, align } = useModalStore();

  const overlayRef = useRef<HTMLDivElement>(null);

  // Align class
  let alignClass;

  if (align === "right") {
    alignClass = "flex-end";
  } else if (align === "left") {
    alignClass = "flex-start";
  } else {
    alignClass = "flex-center";
  }

  useGSAP(() => {
    if (!overlayRef.current) return;

    if (isModalOpen) {
      gsap.set(overlayRef.current, { display: "block" });
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power1.in" },
      );
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power1.out",
        onComplete: () => {
          gsap.set(overlayRef.current, { display: "none" });
        },
      });
    }
  }, [isModalOpen]);

  return (
    <div
      ref={overlayRef}
      style={{ display: "none" }}
      className="fixed inset-0 bg-(--color-foreground)/80 backdrop-blur-sm z-100"
    >
      <div className={`w-full h-full ${alignClass}`}>{modal}</div>
    </div>
  );
}
