"use client";

import { useMobileMenuStore } from "@/store/MobileMenuStore";
import Logo from "../Logo";
import { IoMdClose } from "react-icons/io";
import { menus } from "@/libs/menuitems";
import Link from "next/link";
import Mainbutton from "../ui/buttons/Mainbutton";

export default function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenuStore();

  if (!isMobileMenuOpen) return null;
  return (
    <div className="fixed h-svh white-bg inset-0 px-6 pt-3 z-100">
      <div className="w-full flex-col-center gap-20">
        <div className="w-full flex-center-between border-b border-gray-300 pb-4">
          <Logo variant="black" className="w-16 h-16" sizes="64px" />
          <button
            className="w-10 h-10 black-bg flex-center rounded cursor-pointer"
            onClick={closeMobileMenu}
          >
            <IoMdClose className="white-text text-2xl" />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-col-center gap-8 ">
          {menus.map((menu, index) => (
            <Link href={menu.url} key={index}>
              {menu.item}
            </Link>
          ))}
        </nav>

        {/* Button */}
        <Mainbutton btnName="Contac" url="/contact" variant="black" />
      </div>
    </div>
  );
}
