import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Mulai Proyek & Kontak",
  description:
    "Ceritakan rencana proyek baru atau kebutuhan produk digital Anda bersama tim UhuyDevs Studio. Sesi konsultasi awal gratis.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}

