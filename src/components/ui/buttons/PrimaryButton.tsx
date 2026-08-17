"use client";

import { GoArrowRight } from "react-icons/go";

type MainButtonProps = {
  btnName: string;
  variant?: string;
  onClick: () => void;
};

export default function PrimaryButton({
  btnName,
  variant,
  onClick,
}: MainButtonProps) {
  const btnClass =
    variant === "black" ? "black-bg white-text" : variant === "gray" ? "bg-gray-200 black-text" : "white-bg black-text";
  const iconClass =
    variant === "black" ? "white-bg black-text" : "black-bg white-text";
  return (
    <button
      className={`${btnClass} ps-6 pe-1.5 py-2 rounded-full inline-flex-center gap-2 group cursor-pointer`}
      onClick={onClick}
    >
      <span className="relative h-6 overflow-hidden">
        <span className="block text-base font-medium transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
          {btnName}
        </span>
        <span className="text-base font-medium absolute inset-0 translate-y-full duration-300 ease-in-out group-hover:translate-y-0">
          {btnName}
        </span>
      </span>
      <span className={`${iconClass} w-8 h-8 flex-center rounded-full`}>
        {
          <GoArrowRight className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out" />
        }
      </span>
    </button>
  );
}
