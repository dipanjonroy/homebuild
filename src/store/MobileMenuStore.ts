import { create } from "zustand";

interface MobileMenuStoreProps {
  isMobileMenuOpen: boolean;

  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useMobileMenuStore = create<MobileMenuStoreProps>((set) => ({
  isMobileMenuOpen: false,

  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}));
