"use client";

import { useModalStore } from "@/store/ModalStore";
import ReactLenis, { useLenis } from "lenis/react";
import { useEffect } from "react";

const LenisScrollReset = () => {
  const lenis = useLenis();

  const { isModalOpen } = useModalStore();

  useEffect(() => {
    if (!lenis) return;

    lenis.scrollTo(0, { immediate: true });
  }, [lenis]);

  useEffect(() => {
    if (isModalOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [lenis, isModalOpen]);

  return null;
};

export default function SmoothScroller({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{ lerp: 0.04 }}>
      <LenisScrollReset />
      {children}
    </ReactLenis>
  );
}
