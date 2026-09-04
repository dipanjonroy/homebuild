"use client";

import { useEffect, useState } from "react";
import Logo from "../Logo";
import Mainmenu from "../menus/Mainmenu";
import Mainbutton from "../ui/buttons/Mainbutton";
import MobileMenuButton from "../ui/buttons/MobileMenuButton";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useNotFoundStore } from "@/store/NotFoundStore";

export default function Header() {
  const lenis = useLenis();
  const pathName = usePathname();

  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { isNotFound } = useNotFoundStore();

  // Is Service Page
  const isServicePage = pathName.startsWith("/services/");

  useEffect(() => {
    if (!lenis) return;

    let lastScroll = window.scrollY;
    const heroSection = document.querySelector<HTMLElement>(".scroll-height");

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const heroHeight = heroSection?.offsetHeight ?? 0;

      const isScrollingDown = currentScroll > lastScroll;
      const isScrollingUp = currentScroll < lastScroll;

      if (heroHeight) {
        setScrolled(currentScroll > heroHeight);
      } else {
        setScrolled(currentScroll > 80);
      }

      if (
        isScrollingDown &&
        (isServicePage || currentScroll >= heroHeight - 150)
      ) {
        setShowHeader(false);
      }

      if (isScrollingUp) {
        setShowHeader(true);
      }

      lastScroll = currentScroll;
    };

    lenis.on("scroll", handleScroll);

    return () => lenis.off("scroll", handleScroll);
  }, [lenis, pathName, isServicePage]);

  // Is Black
  const isBlack = scrolled || isNotFound || isServicePage;

  return (
    <div
      className={`fixed top-0 w-full z-50 px-6 lg:px-20 transition-transform duration-600 ${showHeader ? "translate-y-0" : "-translate-y-50"} ${scrolled ? "white-bg shadow-lg" : ""} `}
    >
      <div className="flex-center-between">
        {/* Header Logo */}
        <Logo
          className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"
          sizes="(min-width:1024px) 80px, (min-width:768px) 72px, 64px"
          variant={isBlack ? "black" : "white"}
        />

        {/* Header Navigation */}
        <div
          className={`hidden lg:block ${isBlack ? "black-text" : "white-text"}`}
        >
          <Mainmenu />
        </div>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Mainbutton
            btnName="Contact"
            url="/contact"
            variant={isBlack ? "black" : "white"}
          />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden overflow-hidden">
          <MobileMenuButton />
        </div>
      </div>
    </div>
  );
}
