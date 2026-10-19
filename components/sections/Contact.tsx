"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CircleCheck, Lock } from "lucide-react";
import { fadeUp, revealOnScroll } from "@/lib/animations";
import { CONTACT, SITE } from "@/content/site";
import Lines from "@/components/ui/Lines";

/** Kelas bersama untuk semua input, select, dan textarea di form. */
const inputClass =
  "w-full px-4 py-3 text-sm text-ink bg-canvas rounded-xl ring-1 ring-ink/[0.08] placeholder:text-ink/35 transition-all duration-200 hover:ring-ink/15 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand";

/** Section Kontak — kartu biru brand dengan form */
export default function Contact() {
  return (
    <section id="contact" className="pt-28 sm:pt-32 px-3 sm:px-4 pb-24 md:pb-32">
      <div className="relative overflow-hidden max-w-7xl mx-auto rounded-[32px] md:rounded-[48px] bg-brand text-white p-6 sm:p-10 lg:p-16">
        {/* Latar dekoratif */}
        <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-70" aria-hidden />
        <div className="absolute -left-40 -bottom-40 w-[520px] h-[520px] rounded-full bg-[#6B7DFF]/50 blur-[120px]" aria-hidden />
        <div className="absolute -right-20 -top-40 w-[420px] h-[420px] rounded-full bg-brand-700/60 blur-[100px]" aria-hidden />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Kolom Kiri: Ajakan & Info */}
          <motion.div {...revealOnScroll()} className="lg:col-span-5 lg:pt-4">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-white/90"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              {CONTACT.eyebrow}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-4xl sm:text-5xl lg:text-[60px] font-semibold tracking-[-0.035em] leading-[1.02]"
            >
              <Lines lines={CONTACT.titleLines} accentClassName="text-brand-200" />
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 text-base text-white/75 leading-relaxed max-w-md">
              {CONTACT.description}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-3 max-w-md">
              {CONTACT.highlights.map((h) => (
                <div key={h.label} className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-4 backdrop-blur">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-white/55">{h.label}</p>
                  <p className="mt-1 text-sm font-semibold">{h.value}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/55 block">
                {CONTACT.emailLabel}
              </span>
              <a
                href={`mailto:${SITE.email}`}
                className="group mt-1 inline-flex items-center gap-2 text-xl sm:text-2xl font-semibold tracking-tight hover:text-brand-100 transition-colors"
              >
                <span>{SITE.email}</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Kolom Kanan: Kartu Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-white text-ink rounded-[28px] p-6 sm:p-9 shadow-[0_40px_80px_-30px_rgb(6_11_31/0.5)]"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// Form kontak
// TODO: Sambungkan handleSubmit ke backend / layanan email.
// ----------------------------------------------------------------------------
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { form } = CONTACT;
  const { fields } = form;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <h3 className="text-xl font-semibold tracking-tight">{form.title}</h3>
      <p className="mt-1.5 text-sm text-ink/55">{form.subtitle}</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field id="name" label={fields.name.label} required>
            <input id="name" name="name" type="text" required autoComplete="name" placeholder={fields.name.placeholder} className={inputClass} />
          </Field>
          <Field id="email" label={fields.email.label} required>
            <input id="email" name="email" type="email" required autoComplete="email" placeholder={fields.email.placeholder} className={inputClass} />
          </Field>
        </div>

        <Field id="company" label={fields.company.label}>
          <input id="company" name="company" type="text" autoComplete="organization" placeholder={fields.company.placeholder} className={inputClass} />
        </Field>

        <ChipGroup name="service" label={fields.service.label} options={fields.service.options} />

        <ChipGroup name="budget" label={fields.budget.label} options={fields.budget.options} />

        <Field id="details" label={fields.details.label} required>
          <textarea
            id="details"
            name="details"
            rows={4}
            required
            placeholder={fields.details.placeholder}
            className={`${inputClass} resize-none`}
          />
        </Field>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <p className="inline-flex items-center gap-1.5 text-xs text-ink/45">
            <Lock className="w-3.5 h-3.5" />
            {form.privacyNote}
          </p>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2.5 bg-ink hover:bg-brand text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full transition-colors duration-300 cursor-pointer"
          >
            <span>{form.submitLabel}</span>
            <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              role="status"
              className="flex items-center gap-2 rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/15 px-4 py-3 text-sm font-medium"
            >
              <CircleCheck className="w-4 h-4" />
              {form.successMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </>
  );
}

/** Pilihan berbentuk chip (radio) — lebih cepat dipilih dibanding dropdown. */
function ChipGroup({ name, label, options }: { name: string; label: string; options: string[] }) {
  const labelId = `${name}-label`;
  return (
    <div>
      <span id={labelId} className="block text-[13px] font-semibold text-ink mb-2">
        {label}
      </span>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-labelledby={labelId}>
      {options.map((option, i) => (
        <label key={option} className="cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option}
            defaultChecked={i === 0}
            className="peer sr-only"
          />
          <span className="inline-block text-[13px] font-medium px-3.5 py-2 rounded-full bg-canvas text-ink/65 ring-1 ring-ink/[0.08] transition-all hover:ring-ink/20 peer-checked:bg-brand-50 peer-checked:text-brand peer-checked:ring-brand peer-focus-visible:ring-2 peer-focus-visible:ring-brand">
            {option}
          </span>
        </label>
      ))}
      </div>
    </div>
  );
}

/** Label + kontrol form. */
function Field({
  id,
  label,
  required = false,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-semibold text-ink mb-2">
        {label}
        {required && <span className="text-brand ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
