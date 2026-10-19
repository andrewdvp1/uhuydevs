// ============================================================================
// HALAMAN UTAMA (HOME + LAYANAN + PROSES)
// - Ubah teks / gambar / tautan  -> content/site.ts
// - Ubah tampilan sebuah section  -> components/sections/*.tsx
// - Komponen kecil yang dipakai ulang -> components/ui/*.tsx
// - Variasi animasi               -> lib/animations.ts
// - Warna & font (design tokens)  -> app/globals.css
// ============================================================================
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";

export default function CompanyProfilePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
    </>
  );
}