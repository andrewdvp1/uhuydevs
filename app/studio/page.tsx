import type { Metadata } from "next";
import Team from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "Studio & Tim",
  description:
    "Kenali tim desainer dan engineer senior di balik UhuyDevs Studio yang berkolaborasi langsung membangun produk digital Anda.",
  alternates: {
    canonical: "/studio",
  },
};

export default function StudioPage() {
  return <Team />;
}

