"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { fadeUp, revealOnScroll } from "@/lib/animations";
import { FAQ_INTRO, FAQS, SITE } from "@/content/site";
import { Eyebrow } from "@/components/ui/SectionHeader";
import Lines from "@/components/ui/Lines";

/** Section FAQ — akordeon */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="pt-32 sm:pt-36 pb-24 md:pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <motion.div {...revealOnScroll("-80px")} className="lg:col-span-5 space-y-5">
          <motion.div variants={fadeUp}>
            <Eyebrow>{FAQ_INTRO.eyebrow}</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] text-ink"
          >
            <Lines lines={FAQ_INTRO.titleLines} accentClassName="text-brand" />
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-ink/60 leading-relaxed max-w-md">
            {FAQ_INTRO.description}
          </motion.p>
          <motion.a
            variants={fadeUp}
            href={`mailto:${SITE.email}`}
            className="inline-block text-sm font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors"
          >
            {SITE.email}
          </motion.a>
        </motion.div>

        <motion.div {...revealOnScroll("-60px")} className="lg:col-span-7 space-y-3">
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                className={`rounded-3xl transition-colors duration-300 ${
                  open ? "bg-white ring-1 ring-ink/[0.07] shadow-xs" : "bg-white/50 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-6 text-left px-6 sm:px-7 py-5 sm:py-6 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-semibold tracking-tight text-ink">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      open ? "bg-brand text-white rotate-45" : "bg-canvas text-ink"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 sm:px-7 pb-6 -mt-1 text-[15px] text-ink/60 leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

