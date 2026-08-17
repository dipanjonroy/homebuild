import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import ModalLayout from "@/components/modals/ModalLayout";
import ToastContainer from "@/components/toast/ToastContainer";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${interFont.variable} ${manropeFont.variable} antialiased`}
    >
      <body>
        {children}
        <ModalLayout />
        <ToastContainer/>
      </body>
    </html>
  );
}
