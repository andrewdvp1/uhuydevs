import type { Metadata } from "next";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Pertanyaan Umum (FAQ)",
  description:
    "Jawaban atas pertanyaan yang sering diajukan seputar durasi pengerjaan proyek, sistem pembayaran, kepemilikan kode sumber, dan dukungan pasca-peluncuran di UhuyDevs.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return <FAQ />;
}

