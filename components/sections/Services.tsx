"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, revealOnScroll } from "@/lib/animations";
import { SERVICES, SERVICES_INTRO, type Service } from "@/content/site";
import SectionHeader from "@/components/ui/SectionHeader";

/** Section Layanan */
export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader {...SERVICES_INTRO} className="mb-16 md:mb-20" />

        <motion.div
          {...revealOnScroll("-60px")}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.number} service={service} featured={i === 0} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, featured }: { service: Service; featured: boolean }) {
  const { number, title, description, tags, icon: Icon } = service;

  // Efek "spotlight" mengikuti kursor
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      variants={fadeUp}
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-3xl p-8 lg:p-9 flex flex-col min-h-[420px] transition-all duration-500 hover:-translate-y-1 ${
        featured
          ? "bg-ink text-white shadow-[0_30px_60px_-30px_rgb(11_21_51/0.6)]"
          : "bg-white text-ink ring-1 ring-ink/[0.07] hover:shadow-[0_30px_60px_-30px_rgb(11_21_51/0.25)]"
      }`}
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), ${
            featured ? "rgb(36 72 245 / 0.35)" : "rgb(36 72 245 / 0.08)"
          }, transparent 60%)`,
        }}
      />

      <div className="relative flex items-start justify-between">
        <span
          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${
            featured ? "bg-brand text-white" : "bg-brand-50 text-brand"
          }`}
        >
          <Icon className="w-5 h-5" />
        </span>
        <span className={`font-mono text-xs ${featured ? "text-white/40" : "text-ink/35"}`}>
          {number}
        </span>
      </div>

      <div className="relative mt-auto pt-16">
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p
          className={`mt-3 text-[15px] leading-relaxed ${
            featured ? "text-white/65" : "text-ink/60"
          }`}
        >
          {description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-[11px] font-medium px-3 py-1 rounded-full ${
                featured ? "bg-white/10 text-white/80" : "bg-canvas text-ink/65 ring-1 ring-ink/5"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Link
        href="/contact"
        aria-label={`Diskusikan layanan ${title}`}
        className={`absolute top-8 right-8 lg:top-9 lg:right-9 w-10 h-10 rounded-full flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ${
          featured ? "bg-white text-ink" : "bg-ink text-white"
        }`}
      >
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
