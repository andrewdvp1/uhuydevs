import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "light" | "ghost-dark";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Ikon panah: "right" (→), "up-right" (↗), atau none. */
  icon?: "right" | "up-right" | "none";
  className?: string;
  onClick?: () => void;
}

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white pl-6 pr-2 py-2 shadow-[0_8px_24px_-8px_rgb(36_72_245/0.6)] hover:bg-brand-600 hover:shadow-[0_12px_32px_-8px_rgb(36_72_245/0.7)]",
  secondary:
    "bg-white text-ink px-6 py-3 ring-1 ring-ink/10 hover:ring-ink/25 hover:bg-white shadow-xs",
  light:
    "bg-white text-ink pl-6 pr-2 py-2 hover:bg-brand-50",
  "ghost-dark":
    "text-white px-6 py-3 ring-1 ring-white/20 hover:ring-white/40 hover:bg-white/5",
};

/** Tombol berbentuk tautan dengan beberapa varian gaya. */
export default function Button({
  href,
  children,
  variant = "primary",
  icon = "right",
  className = "",
  onClick,
}: ButtonProps) {
  const withBubble = variant === "primary" || variant === "light";

  return (
    <Link href={href} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      {icon !== "none" &&
        (withBubble ? (
          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 ${
              variant === "primary" ? "bg-white/15" : "bg-brand text-white"
            }`}
          >
            {icon === "right" ? (
              <ArrowRight className="w-4 h-4" />
            ) : (
              <ArrowUpRight className="w-4 h-4" />
            )}
          </span>
        ) : icon === "right" ? (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        ) : (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        ))}
    </Link>
  );
}

