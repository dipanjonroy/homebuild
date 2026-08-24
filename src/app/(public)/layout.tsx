import Header from "@/components/layouts/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "HomeBuild Construction | Residential & Commercial Construction Services",
  description:
    "HomeBuild Construction delivers high-quality residential and commercial construction, remodeling, renovations, and custom building solutions. We combine expert craftsmanship, transparent communication, and reliable project management to bring your vision to life.",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
