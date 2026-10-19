// ============================================================================
// KOMPONEN PLACEHOLDER GAMBAR
// Otomatis menampilkan petunjuk path jika string gambar masih kosong
// ============================================================================
import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface ImageSlotProps {
  src: string;
  alt: string;
  pathHint: string;
  className?: string;
  aspectClass?: string;
  darkPlaceholder?: boolean;
  /** Tampilkan placeholder ringkas (tanpa teks alt) untuk slot kecil. */
  compact?: boolean;
  priority?: boolean;
  sizes?: string;
}

export default function ImageSlot({
  src,
  alt,
  pathHint,
  className = "",
  aspectClass = "aspect-square",
  darkPlaceholder = false,
  compact = false,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: ImageSlotProps) {
  if (src && src.trim() !== "") {
    const trimmed = src.trim();
    const normalizedSrc =
      trimmed.startsWith("/") ||
      trimmed.startsWith("http://") ||
      trimmed.startsWith("https://") ||
      trimmed.startsWith("data:")
        ? trimmed
        : `/${trimmed}`;

    return (
      <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
        <Image
          src={normalizedSrc}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center p-6 text-center ${aspectClass} ${
        darkPlaceholder
          ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] text-white/70"
          : "bg-gradient-to-br from-brand-50 via-white to-brand-100 text-ink/60"
      } ${className}`}
    >
      {/* Pola titik halus */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      {/* Cahaya lembut */}
      <div
        className={`absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full blur-3xl pointer-events-none ${
          darkPlaceholder ? "bg-brand/30" : "bg-brand/15"
        }`}
      />
      <div className="relative z-10 flex flex-col items-center max-w-xs">
        <div
          className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-3 ring-1 ${
            darkPlaceholder
              ? "bg-white/10 ring-white/15"
              : "bg-white text-brand ring-ink/5 shadow-sm"
          }`}
        >
          <ImageIcon className="w-5 h-5" />
        </div>
        {!compact && <p className="text-xs font-medium mb-2 opacity-80">{alt}</p>}
        <code
          className={`text-[10px] font-mono px-2.5 py-1 rounded-full ring-1 ${
            darkPlaceholder
              ? "bg-black/20 ring-white/10 text-brand-200"
              : "bg-white/80 ring-ink/10 text-brand"
          }`}
        >
          {pathHint}
        </code>
      </div>
    </div>
  );
}
