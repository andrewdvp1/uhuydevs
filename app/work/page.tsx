import type { Metadata } from "next";
import Work from "@/components/sections/Work";

export const metadata: Metadata = {
  title: "Karya & Studi Kasus",
  description:
    "Sekilas kolaborasi unggulan UhuyDevs — dari strategi brand, perancangan pengalaman pengguna, hingga rekayasa produk digital berperforma tinggi.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return <Work />;
}

