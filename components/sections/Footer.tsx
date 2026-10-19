import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { FOOTER, NAV_CTA, SITE } from "@/content/site";
import Lines from "@/components/ui/Lines";
import Button from "@/components/ui/Button";
import { Logo } from "./Navbar";

/** Footer (latar gelap) */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white rounded-t-[32px] md:rounded-t-[48px]">
      <div className="absolute inset-0 bg-grid-dark mask-radial pointer-events-none" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-brand/20 blur-[120px] pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-10">
        {/* CTA besar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-16 md:pb-20 border-b border-white/10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.04]">
            <Lines lines={FOOTER.ctaLines} accentClassName="text-brand-300" />
          </h2>
          <Button href={NAV_CTA.href} variant="light">
            {NAV_CTA.label}
          </Button>
        </div>

        {/* Kolom tautan */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 py-14">
          <div className="col-span-2 md:col-span-5 space-y-5">
            <Logo dark />
            <p className="text-sm text-white/55 max-w-xs leading-relaxed">{SITE.tagline}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-brand-300 transition-colors"
            >
              {SITE.email}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {FOOTER.columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h3 className="text-[11px] font-mono uppercase tracking-[0.14em] text-white/40">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <h3 className="text-[11px] font-mono uppercase tracking-[0.14em] text-white/40">Sosial</h3>
            <ul className="mt-5 space-y-3">
              {SITE.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Wordmark raksasa */}
        <div
          className="select-none pointer-events-none text-center font-bold tracking-[-0.06em] leading-[0.8] text-[22vw] lg:text-[240px] bg-gradient-to-b from-white/[0.14] to-white/0 bg-clip-text text-transparent"
          aria-hidden
        >
          {SITE.name}
        </div>

        {/* Baris bawah */}
        <div className="mt-6 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/45">
          <p>{SITE.copyright}</p>
          <div className="flex items-center gap-6">
            <span>{SITE.location}</span>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
            >
              Kembali ke atas
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
