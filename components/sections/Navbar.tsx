"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_CTA, NAV_LINKS, SITE } from "@/content/site";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label={`${SITE.name} — beranda`}>
      {/* Jika ingin menggunakan gambar logo */}
      <Image
        src={SITE.logo ?? "/logo.svg"}
        alt={SITE.name}
        width={32}
        height={32}
        className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-105"
      />
      <span className={`font-bold text-[17px] tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        {SITE.name}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sectionHref, setSectionHref] = useState<string>("");

  // Ubah tampilan navbar ketika halaman di-scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      if (pathname === "/" && window.scrollY < 240) {
        setSectionHref("");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Sorot tautan sesuai section yang sedang terlihat di halaman Beranda (/)
  useEffect(() => {
    if (pathname !== "/") return;

    const hashLinks = NAV_LINKS.filter((l) => l.href.startsWith("/#"));
    const sections = hashLinks
      .map((l) => document.querySelector(l.href.slice(1)))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setSectionHref(`/#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  const activeHref = pathname === "/" ? sectionHref : pathname;
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-3 sm:pt-4">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? "bg-white/80 backdrop-blur-xl ring-1 ring-ink/[0.07] shadow-[0_8px_32px_-12px_rgb(11_21_51/0.18)] h-14 pl-5 pr-2"
            : "bg-transparent h-16 px-2"
        }`}
      >
        <Logo />

        {/* Navigasi Tengah (Desktop) */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => {
            const active = activeHref === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${
                  active ? "text-ink" : "text-ink/55 hover:text-ink"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-ink/[0.06]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA Kanan (Desktop) */}
        <Link
          href={NAV_CTA.href}
          className={`hidden md:inline-flex items-center gap-2 text-white text-[13px] font-semibold pl-4 pr-3 py-2.5 rounded-full transition-colors duration-300 group ${
            pathname === NAV_CTA.href ? "bg-brand" : "bg-ink hover:bg-brand"
          }`}
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-400" />
          </span>
          {NAV_CTA.label}
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>

        {/* Tombol Menu Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-ink bg-ink/[0.05] hover:bg-ink/10 transition-colors"
          aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Dropdown Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mt-2 mx-auto max-w-7xl rounded-3xl bg-white/95 backdrop-blur-xl ring-1 ring-ink/[0.07] shadow-xl p-3"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-medium text-ink hover:bg-ink/[0.04]"
              >
                {link.label}
                <ArrowRight className="w-4 h-4 text-ink/30" />
              </Link>
            ))}
            <Link
              href={NAV_CTA.href}
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 bg-brand text-white text-sm font-semibold px-4 py-3.5 rounded-2xl"
            >
              {NAV_CTA.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
