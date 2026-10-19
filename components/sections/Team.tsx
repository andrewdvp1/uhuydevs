"use client";

import { motion } from "framer-motion";
import { fadeUp, revealOnScroll } from "@/lib/animations";
import { TEAM_FOOTER, TEAM_INTRO, TEAM_MEMBERS } from "@/content/site";
import ImageSlot from "@/components/ui/ImageSlot";
import SectionHeader from "@/components/ui/SectionHeader";

/** Section Tim (kartu gelap) */
export default function Team() {
  return (
    <section id="team" className="pt-28 sm:pt-32 pb-16 md:pb-24 px-3 sm:px-4">
      <div className="relative overflow-hidden rounded-[32px] md:rounded-[48px] bg-night text-white py-24 md:py-32 px-6 md:px-12">
        {/* Latar dekoratif */}
        <div className="absolute inset-0 bg-grid-dark mask-radial pointer-events-none" aria-hidden />
        <div
          className="absolute -top-32 right-0 w-[600px] h-[500px] rounded-full bg-brand/25 blur-[120px] pointer-events-none"
          aria-hidden
        />

        <div className="relative max-w-7xl mx-auto">
          <SectionHeader {...TEAM_INTRO} dark className="mb-16" />

          <motion.div
            {...revealOnScroll("-60px")}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.article
                key={member.name}
                variants={fadeUp}
                className="group rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-2 transition-colors duration-500 hover:bg-white/[0.06] hover:ring-white/20"
              >
                <div className="relative overflow-hidden rounded-[20px]">
                  <ImageSlot
                    src={member.image}
                    alt={member.name}
                    pathHint={member.hint}
                    aspectClass="aspect-[4/4.6]"
                    darkPlaceholder
                    compact
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  {/* Bio muncul saat hover (desktop) */}
                  <div className="absolute inset-0 hidden lg:flex items-end p-5 bg-gradient-to-t from-night via-night/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-[13px] leading-relaxed text-white/85 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <div className="px-3 pt-4 pb-3">
                  <h3 className="text-base font-semibold">{member.name}</h3>
                  <p className="mt-0.5 text-xs font-mono text-brand-300">{member.role}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/55 lg:hidden">
                    {member.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-white/55">
            <span>{TEAM_FOOTER.location}</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-1.5 font-mono text-[11px] text-white/85">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {TEAM_FOOTER.highlight}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
