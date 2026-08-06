import { useMobileMenuStore } from "@/store/MobileMenuStore";
import Logo from "./Logo";
import Mainmenu from "./menus/Mainmenu";
import MobileMenu from "./menus/MobileMenu";
import Mainbutton from "./ui/buttons/Mainbutton";
import MobileMenuButton from "./ui/buttons/MobileMenuButton";

export default function Header() {
  return (
    <div className="fixed top-3 w-full z-50 px-6 lg:px-20">
      <div className="flex-center-between">
        {/* Header Logo */}
        <Logo
          className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"
          sizes="(min-width:1024px) 80px, (min-width:768px) 72px, 64px"
        />

        {/* Header Navigation */}
        <div className="hidden lg:block white-text">
          <Mainmenu />
        </div>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Mainbutton btnName="Contact" url="/contact" />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden overflow-hidden">
          <MobileMenuButton />
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
