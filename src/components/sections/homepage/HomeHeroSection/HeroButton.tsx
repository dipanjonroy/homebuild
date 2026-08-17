"use client";

import BookingModal from "@/components/modals/BookingModal";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { useModalStore } from "@/store/ModalStore";

export default function HeroButton() {
  const {openModal} = useModalStore();
  return (
    <PrimaryButton
      btnName="Book Free Consultation"
      onClick={()=>openModal("booking-modal",<BookingModal/>)}
    />
  );
}
