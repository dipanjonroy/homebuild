import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

type MainButtonProps = {
  btnName: string;
  url: string;
  variant?: string;
};

export default function Mainbutton({ btnName, url, variant }: MainButtonProps) {
  const btnClass =
    variant === "black" ? "black-bg white-text" : "white-bg black-text";
  const iconClass =
    variant === "black" ? "white-bg black-text" : "black-bg white-text";
  return (
    <Link
      href={url}
      className={`${btnClass} ps-6 pe-1.5 py-1.5 rounded-full inline-flex-center gap-2 group`}
    >
      <span className="relative h-6 overflow-hidden">
        <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
          {btnName}
        </span>
        <span className="absolute inset-0 translate-y-full duration-300 ease-in-out group-hover:translate-y-0">
          {btnName}
        </span>
      </span>
      <span className={`${iconClass} w-6 h-6 flex-center rounded-full`}>
        {
          <GoArrowRight className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out" />
        }
      </span>
    </Link>
  );
}
