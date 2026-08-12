"use client";

import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

export default function HeroButton() {
  return (
    <PrimaryButton
      btnName="Book Free Consultation"
      onClick={() => console.log("Click")}
    />
  );
}
