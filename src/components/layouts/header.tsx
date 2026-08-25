"use client";

import { useEffect, useState } from "react";
import Logo from "../Logo";
import Mainmenu from "../menus/Mainmenu";
import Mainbutton from "../ui/buttons/Mainbutton";
import MobileMenuButton from "../ui/buttons/MobileMenuButton";
import { useLenis } from "lenis/react";

export default function Header() {
  const lenis = useLenis();

  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (!lenis) return;

    let lastScroll = window.scrollY;
    const heroSection = document.getElementById("home-hero");

    if (!heroSection) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const heroHeight = heroSection?.offsetHeight;

      setScrolled(currentScroll > heroHeight);

      if (currentScroll > lastScroll && currentScroll >= heroHeight - 150) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScroll = currentScroll;
    };

    lenis.on("scroll", handleScroll);

    return () => lenis.off("scroll", handleScroll);
  }, [lenis]);

  return (
    <div
      className={`fixed top-0 w-full z-50 px-6 lg:px-20 transition-transform duration-600 ${showHeader ? "translate-y-0" : "-translate-y-50"} ${scrolled ? "white-bg shadow-lg" : ""} `}
    >
      <div className="flex-center-between">
        {/* Header Logo */}
        <Logo
          className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"
          sizes="(min-width:1024px) 80px, (min-width:768px) 72px, 64px"
          variant={scrolled ? "black" : "white"}
        />

        {/* Header Navigation */}
        <div
          className={`hidden lg:block ${scrolled ? "black-text" : "white-text"}`}
        >
          <Mainmenu />
        </div>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Mainbutton
            btnName="Contact"
            url="/contact"
            variant={scrolled ? "black" : "white"}
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
