"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeUp, revealOnScroll } from "@/lib/animations";
import { FEATURED_PROJECT, WORK_INTRO } from "@/content/site";
import ImageSlot from "@/components/ui/ImageSlot";
import SectionHeader from "@/components/ui/SectionHeader";
import Lines from "@/components/ui/Lines";
import Button from "@/components/ui/Button";

/** Section Karya — satu studi kasus utama */
export default function Work() {
  return (
    <section
      id="work"
      className="relative mt-24 sm:mt-28 bg-white py-20 md:py-28 px-6 md:px-12 rounded-t-[40px] md:rounded-t-[56px] ring-1 ring-ink/[0.05]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader {...WORK_INTRO} className="mb-14 md:mb-16" />
        <FeaturedCaseStudy />
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// Studi kasus utama: showcase visual + detail, hasil, dan testimoni
// ----------------------------------------------------------------------------
function FeaturedCaseStudy() {
  const project = FEATURED_PROJECT;
  const { brand, mockup, meta, results, testimonial } = project;

  return (
    <div className="space-y-5">
      {/* Showcase visual */}
      <motion.div
        {...revealOnScroll("-60px", fadeUp)}
        className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#E7F0E4] via-[#EEF3EA] to-[#DCE8D6] p-6 sm:p-10 lg:p-14"
      >
        {/* Ornamen latar */}
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#2F5D3A]/10 blur-3xl" aria-hidden />
        <div className="absolute -left-10 bottom-0 w-72 h-72 rounded-full bg-white/60 blur-3xl" aria-hidden />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Presentasi brand */}
          <div className="lg:col-span-4">
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/70 text-[#1F3D27] ring-1 ring-[#1F3D27]/10 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-4xl sm:text-5xl font-serif italic text-[#1F3D27]">
              {brand.wordmark}
            </div>
            <p className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight leading-snug text-[#1F3D27]">
              <Lines lines={brand.headlineLines} />
            </p>
          </div>

          {/* Mockup browser */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-white shadow-[0_40px_80px_-30px_rgb(31_61_39/0.45)] ring-1 ring-black/5 overflow-hidden transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:rotate-[-0.4deg]">
              {/* Bilah browser */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-black/5 bg-[#FAFAF8]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-[11px] font-mono text-black/45 bg-black/[0.04] px-4 py-1 rounded-md">
                    {mockup.domain}
                  </span>
                </div>
                <span className="w-10" />
              </div>
              {/* Isi halaman */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 p-5 sm:p-7 items-center">
                <div className="sm:col-span-5 space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2F5D3A]">
                    Koleksi Musim Ini
                  </span>
                  <h4 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1F3D27] leading-tight">
                    {mockup.headline}
                  </h4>
                  <p className="text-xs text-black/55 leading-relaxed">{mockup.blurb}</p>
                  <span className="inline-block bg-[#1F3D27] text-white text-[11px] font-medium px-4 py-2 rounded-full">
                    {mockup.cta}
                  </span>
                </div>
                <div className="sm:col-span-7">
                  <ImageSlot
                    src={project.image}
                    alt={project.imageAlt}
                    pathHint={project.imageHint}
                    aspectClass="aspect-[16/11]"
                    className="rounded-xl"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Detail studi kasus */}
      <motion.div
        {...revealOnScroll("-60px")}
        className="grid grid-cols-1 lg:grid-cols-12 gap-5"
      >
        {/* Ringkasan + meta */}
        <motion.div
          variants={fadeUp}
          className="lg:col-span-5 rounded-[28px] bg-canvas p-8 lg:p-10 flex flex-col"
        >
          <h3 className="text-2xl sm:text-[28px] font-semibold tracking-tight text-ink leading-tight">
            {project.title}
          </h3>
          <p className="mt-4 text-[15px] text-ink/60 leading-relaxed">{project.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 pt-8 border-t border-ink/10">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-[11px] font-mono uppercase tracking-wider text-ink/40">
                  {m.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-auto pt-10">
            <Button href={project.link.href}>{project.link.label}</Button>
          </div>
        </motion.div>

        {/* Hasil + testimoni */}
        <div className="lg:col-span-7 grid grid-cols-1 gap-5">
          <motion.dl variants={fadeUp} className="grid grid-cols-3 gap-5">
            {results.map((r) => (
              <div
                key={r.label}
                className="rounded-[24px] bg-white ring-1 ring-ink/[0.07] p-5 sm:p-7 flex flex-col-reverse justify-end"
              >
                <dt className="mt-3 text-xs sm:text-[13px] text-ink/55">{r.label}</dt>
                <dd className="text-3xl sm:text-[42px] font-semibold tracking-[-0.03em] text-gradient leading-none">
                  {r.value}
                </dd>
              </div>
            ))}
          </motion.dl>

          <motion.figure
            variants={fadeUp}
            className="relative overflow-hidden rounded-[28px] bg-ink text-white p-8 lg:p-10"
          >
            <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-brand/40 blur-3xl" aria-hidden />
            <Quote className="relative w-8 h-8 text-brand-300" />
            <blockquote className="relative mt-5 text-lg sm:text-xl leading-relaxed text-white/90">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="relative mt-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-300 to-brand flex items-center justify-center text-sm font-semibold">
                {testimonial.author.charAt(0)}
              </span>
              <span>
                <span className="block text-sm font-semibold">{testimonial.author}</span>
                <span className="block text-xs text-white/50">{testimonial.role}</span>
              </span>
            </figcaption>
          </motion.figure>
        </div>
      </motion.div>
    </div>
  );
}
