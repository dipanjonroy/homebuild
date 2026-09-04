import { services } from "@/components/sections/ServicesSection/Services";
import BookingButton from "@/components/ui/buttons/BookingButton";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(
    (item) => slug.toString() === item.url.toString(),
  );

  if (!service) return notFound();

  return {
    title: service?.heading,
    description: service?.text,
    openGraph: {
      images: [service?.img?.src],
    },
  };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.url.toString() }));
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.url.toString() === slug.toString(),
  );

  if (!service) return notFound();
  return (
    <section className="w-full pt-50">
      <div className="site-container">
        <div>
          <div className="flex-col-center">
            <h1>{service.heading}</h1>
            <p>{service.text}</p>
            <BookingButton variant="black"/>
          </div>
        </div>
      </div>
    </section>
  );
}
