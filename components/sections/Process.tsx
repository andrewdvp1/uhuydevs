"use client";

import { motion } from "framer-motion";
import { fadeUp, revealOnScroll } from "@/lib/animations";
import { PROCESS_INTRO, PROCESS_STEPS } from "@/content/site";
import SectionHeader from "@/components/ui/SectionHeader";

/** Section Proses Kerja — linimasa 4 tahap */
export default function Process() {
  return (
    <section
      id="process"
      className="relative bg-white py-24 md:py-32 px-6 md:px-12 rounded-t-[40px] md:rounded-t-[56px] ring-1 ring-ink/[0.05]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader {...PROCESS_INTRO} className="mb-16 md:mb-20" />

        <motion.ol
          {...revealOnScroll("-60px")}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {/* Garis penghubung (desktop) */}
          <div
            className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent"
            aria-hidden
          />

          {PROCESS_STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.step}
                variants={fadeUp}
                className="group relative rounded-3xl bg-canvas p-7 flex flex-col transition-all duration-500 hover:bg-white hover:ring-1 hover:ring-ink/[0.07] hover:shadow-[0_30px_60px_-30px_rgb(11_21_51/0.25)]"
              >
                <div className="flex items-center justify-between">
                  <span className="relative z-10 w-12 h-12 rounded-2xl bg-white ring-1 ring-ink/[0.07] shadow-xs flex items-center justify-center text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white group-hover:ring-brand">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-[44px] font-semibold tracking-tight leading-none text-ink/[0.07] transition-colors duration-500 group-hover:text-brand/15">
                    {item.step}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed">{item.description}</p>

                <div className="mt-auto pt-7 flex items-center justify-between gap-3 text-[11px]">
                  <span className="font-medium text-ink/70 bg-white rounded-full px-3 py-1 ring-1 ring-ink/5">
                    {item.deliverable}
                  </span>
                  <span className="font-mono text-ink/40 whitespace-nowrap">{item.duration}</span>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
