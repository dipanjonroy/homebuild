
import { notFound } from "next/navigation";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "404-Page not found",
};

export default function CatchError() {
  
  return notFound();
}
