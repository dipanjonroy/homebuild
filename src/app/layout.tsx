import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layouts/header";
import ModalLayout from "@/components/modals/ModalLayout";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const manropeFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title:
    "HomeBuild Construction | Residential & Commercial Construction Services",
  description:
    "HomeBuild Construction delivers high-quality residential and commercial construction, remodeling, renovations, and custom building solutions. We combine expert craftsmanship, transparent communication, and reliable project management to bring your vision to life.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${interFont.variable} ${manropeFont.variable} antialiased`}
    >
      <body>
        {/* Header Section */}
        <Header />
        {children}
        <ModalLayout/>
      </body>
    </html>
  );
}
