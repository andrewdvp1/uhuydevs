// ============================================================================
// KONTEN SITUS (BAHASA INDONESIA)
// Semua teks, tautan, dan path gambar halaman ada di file ini.
// Ubah konten di sini — tidak perlu menyentuh komponen JSX.
//
// Catatan:
// - Properti `...Lines` berupa array; setiap item dirender sebagai baris baru.
// - Bungkus kata dengan *bintang* untuk menampilkan aksen huruf serif miring,
//   contoh: "Akar yang *kuat.*"
// ============================================================================
import {
  Layout,
  Sparkles,
  Layers,
  Search,
  PenTool,
  Code2,
  Rocket,
  type LucideIcon,
} from "lucide-react";

// ----------------------------------------------------------------------------
// INFO UMUM
// ----------------------------------------------------------------------------
export const SITE = {
  name: "UhuyDevs",
  logo: "/logo2.png",
  //logoInitial: "U",
  email: "hello@uhuydevs.site",
  location: "Solo, Indonesia",
  tagline: "Kode yang matang. Ruang untuk bertumbuh.",
  copyright: "© 2026 UhuyDevs Studio. Seluruh hak cipta dilindungi.",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};

// ----------------------------------------------------------------------------
// KONFIGURASI PATH GAMBAR (Ganti string kosong "" dengan path gambar Anda)
// Contoh: "/images/hero-terrarium.jpg" (simpan file di folder /public)
// ----------------------------------------------------------------------------
export const IMAGE_PATHS = {
  heroImage: "/screen2.png", // TODO: Masukkan path gambar Hero (Terrarium tanaman)
  projects: {
    verdant: "/verdant.png", // TODO: Masukkan path gambar proyek utama "Verdant"
  },
  team: {
    christ: "/dio.jpg", // TODO: Masukkan path foto anggota tim 1
    andrew: "/andrew.jpg", // TODO: Masukkan path foto anggota tim 2
    edric: "/edric2.jpg", // TODO: Masukkan path foto anggota tim 3
    michael: "/mich.jpg", // TODO: Masukkan path foto anggota tim 4
  },
};

// ----------------------------------------------------------------------------
// NAVIGASI
// ----------------------------------------------------------------------------
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Layanan", href: "/#services" },
  { label: "Karya", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "FAQ", href: "/faq" },
];

export const NAV_CTA = {
  label: "Mulai Proyek",
  href: "/contact",
};

// ----------------------------------------------------------------------------
// 1. HERO
// ----------------------------------------------------------------------------
export const HERO = {
  badge: "Menerima 2 proyek baru · Kuartal IV 2026",
  titleLines: ["Ide cemerlang.", "Akar yang *kuat.*", "Digital lebih *baik.*"],
  description:
    "Studio desain dan rekayasa perangkat lunak yang merancang situs web. Serta produk digital yang tenang, tangguh, dan berorientasi pada pertumbuhan jangka panjang bisnis.",
  primaryCta: { label: "Mulai proyek bersama", href: "/contact" },
  secondaryCta: { label: "Lihat studi kasus", href: "/work" },
  image: {
    src: IMAGE_PATHS.heroImage,
    hint: "IMAGE_PATHS.heroImage",
    alt: "Project Culina Aplikasi Pesan Otomatis",
    badge: "UhuyDevs · Sejak 2024",
  },
  /** Kartu mengambang di sekitar gambar hero. */
  floatingCards: {
    rating: { value: "4.9", label: "Rata-rata ulasan klien", reviews: "dari 40+ ulasan" },
    metric: { value: "+142%", label: "Rata-rata kenaikan konversi" },
  },
  /** Statistik singkat di bawah CTA. */
  stats: [
    { value: "2", label: "Tahun pengalaman" },
    { value: "10+", label: "Proyek diluncurkan" },
    { value: "98%", label: "Klien kembali" },
  ],
};

// ----------------------------------------------------------------------------
// LOGO KLIEN (marquee di bawah hero)
// ----------------------------------------------------------------------------
export const CLIENTS = {
  label: "Dipercaya oleh brand & startup yang sedang bertumbuh",
  names: [
    "Almamater Coffee",
    "Smartfolks",
    "Kopi Nyantai",
    "NexaCore Technologies",
    "Lumbung Rasa",
    "Modern Photo",
    "Terra Studio",
    "Sabila Travel",
  ],
};

// ----------------------------------------------------------------------------
// HEADER SETIAP SECTION
// ----------------------------------------------------------------------------
export interface SectionIntro {
  eyebrow: string;
  titleLines: string[];
  description: string;
}

// ----------------------------------------------------------------------------
// 2. LAYANAN
// ----------------------------------------------------------------------------
export const SERVICES_INTRO: SectionIntro = {
  eyebrow: "Layanan Kami",
  titleLines: ["Dari sebatas benih ide", "menjadi *produk nyata.*"],
  description:
    "Kami bekerja sama dengan pendiri bisnis dan tim profesional sejak tahap perencanaan konsep hingga perilisan — memadukan desain strategis dengan kode yang bersih dan andal.",
};

export interface Service {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Pengalaman Web",
    description:
      "Situs web bisnis dan platform identitas brand yang cepat, ekspresif, serta dirancang dengan alur cerita yang jernih dan kualitas teknis jangka panjang.",
    tags: ["Design System", "Next.js", "Animasi Interaktif"],
    icon: Layout,
  },
  {
    number: "02",
    title: "Produk Digital",
    description:
      "Aplikasi web dan antarmuka pengguna (UI/UX) yang menyederhanakan alur kerja kompleks sehingga terasa mudah dan nyaman digunakan setiap hari.",
    tags: ["UI/UX Produk", "Prototyping", "Full-stack"],
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Fondasi Tangguh",
    description:
      "Arsitektur frontend yang skalabel, pustaka komponen yang aksesibel, serta optimalisasi performa tinggi untuk mendukung pertumbuhan bisnis Anda.",
    tags: ["TypeScript", "Aksesibilitas", "Skalabilitas"],
    icon: Layers,
  },
];

// ----------------------------------------------------------------------------
// 3. KARYA / PORTOFOLIO (studi kasus utama)
// ----------------------------------------------------------------------------
export const WORK_INTRO: SectionIntro = {
  eyebrow: "Studi Kasus Pilihan",
  titleLines: ["Ide yang *diwujudkan.*"],
  description:
    "Sekilas kolaborasi unggulan kami — dari strategi brand, perancangan pengalaman belanja, hingga rekayasa e-commerce berperforma tinggi.",
};

export interface FeaturedProject {
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageHint: string;
  imageAlt: string;
  /** Detail singkat proyek (ditampilkan sebagai daftar meta). */
  meta: { label: string; value: string }[];
  /** Hasil terukur proyek. */
  results: { value: string; label: string }[];
  brand: {
    wordmark: string;
    headlineLines: string[];
  };
  /** Konten mockup browser. */
  mockup: {
    domain: string;
    headline: string;
    blurb: string;
    cta: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  link: { label: string; href: string };
}

/** Proyek utama — ditampilkan sebagai studi kasus lebar penuh. */
export const FEATURED_PROJECT: FeaturedProject = {
  title: "Verdant — rumah bagi pecinta tanaman",
  description:
    "Identitas visual, pengalaman belanja e-commerce kustom, dan sistem panduan perawatan tanaman interaktif untuk brand tanaman hias yang sedang berkembang pesat.",
  tags: ["Strategi Brand", "Desain UI/UX", "Next.js Commerce"],
  image: IMAGE_PATHS.projects.verdant,
  imageHint: "IMAGE_PATHS.projects.verdant",
  imageAlt: "Tampilan proyek e-commerce tanaman Verdant",
  meta: [
    { label: "Klien", value: "Verdant Co." },
    { label: "Industri", value: "E-commerce" },
    { label: "Durasi", value: "14 minggu" },
    { label: "Tahun", value: "2025" },
  ],
  results: [
    { value: "+142%", label: "Konversi checkout" },
    { value: "0.8s", label: "Waktu muat (LCP)" },
    { value: "3.2×", label: "Pelanggan berulang" },
  ],
  brand: {
    wordmark: "verdant.",
    headlineLines: ["Lebih banyak hijau.", "Lebih terasa rumah."],
  },
  mockup: {
    domain: "verdant.co",
    headline: "Beri ruang untuk tumbuh.",
    blurb:
      "Tanaman hias pilihan yang dirawat sepenuh hati, dikirim langsung dari rumah kaca kami ke ruang tamu Anda.",
    cta: "Jelajahi Koleksi",
  },
  testimonial: {
    quote:
      "UhuyDevs tidak sekadar membangun toko online — mereka memahami cerita brand kami dan menerjemahkannya menjadi pengalaman yang membuat pelanggan betah berlama-lama.",
    author: "Nadia Pratama",
    role: "Founder, Verdant Co.",
  },
  link: { label: "Diskusikan proyek serupa", href: "/contact" },
};

// ----------------------------------------------------------------------------
// 4. TIM
// ----------------------------------------------------------------------------
export const TEAM_INTRO: SectionIntro = {
  eyebrow: "Siapa Kami",
  titleLines: ["Empat talenta.", "Satu *dedikasi* karya."],
  description:
    "Tanpa perantara berlapis. Anda berkolaborasi langsung dengan desainer dan engineer berpengalaman yang mengerjakan produk Anda setiap harinya.",
};

export const TEAM_FOOTER = {
  location: "Berbasis di Indonesia & berkolaborasi bersama klien global.",
  highlight: "100% Tim Senior · Kolaborasi Langsung",
};

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  hint: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Christ Adio",
    role: "Direktur Desain",
    bio: "Merancang sistem visual, kejelasan identitas brand, dan antarmuka yang tenang dengan pengalaman studio lebih dari satu dekade.",
    image: IMAGE_PATHS.team.christ,
    hint: "IMAGE_PATHS.team.christ",
  },
  {
    name: "Andrew Eden",
    role: "Lead Engineer",
    bio: "Membangun arsitektur frontend yang tangguh, integrasi API yang rapi, serta pengalaman web interaktif yang mulus.",
    image: IMAGE_PATHS.team.andrew,
    hint: "IMAGE_PATHS.team.andrew",
  },
  {
    name: "Edric Christian",
    role: "Desainer Produk",
    bio: "Mengubah permasalahan produk yang rumit menjadi alur pengguna yang intuitif, prototipe interaktif, dan sistem yang berpusat pada manusia.",
    image: IMAGE_PATHS.team.edric,
    hint: "IMAGE_PATHS.team.edric",
  },
  {
    name: "Michael Gunawan",
    role: "Creative Developer",
    bio: "Menjembatani desain dan rekayasa perangkat lunak melalui animasi yang luwes, mikro-interaksi, dan penyempurnaan performa.",
    image: IMAGE_PATHS.team.michael,
    hint: "IMAGE_PATHS.team.michael",
  },
];

// ----------------------------------------------------------------------------
// 5. PROSES
// ----------------------------------------------------------------------------
export const PROCESS_INTRO: SectionIntro = {
  eyebrow: "Cara Kami Bekerja",
  titleLines: ["Langkah terarah.", "Progres *transparan.*"],
  description:
    "Karya terbaik lahir ketika setiap pihak memahami arah dan tahapan yang sedang berjalan. Proses kami tenang, terstruktur, dan mengutamakan komunikasi terbuka.",
};

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
  duration: string;
  icon: LucideIcon;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Menanam Benih",
    description:
      "Kami mendengarkan dengan saksama, menyelaraskan tujuan bisnis, dan memetakan inti permasalahan sebelum membuat sketsa atau menulis baris kode.",
    deliverable: "Riset & Arah Strategi",
    duration: "1–2 minggu",
    icon: Search,
  },
  {
    step: "02",
    title: "Membentuk Pengalaman",
    description:
      "Kami mengeksplorasi arah visual, memetakan perjalanan pengguna, dan menyusun prototipe interaktif yang dapat Anda uji sejak dini.",
    deliverable: "Arsitektur & Desain UI/UX",
    duration: "2–4 minggu",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Membangun dengan Presisi",
    description:
      "Kode TypeScript yang bersih, tata letak responsif, dan animasi halus dikerjakan secara transparan melalui iterasi mingguan yang terukur.",
    deliverable: "Pengembangan Produksi",
    duration: "4–8 minggu",
    icon: Code2,
  },
  {
    step: "04",
    title: "Merawat & Bertumbuh",
    description:
      "Kami meluncurkan produk dengan penuh keyakinan, memantau performa nyata di lapangan, dan mendampingi evolusi produk Anda ke depannya.",
    deliverable: "Peluncuran & Pemeliharaan",
    duration: "Berkelanjutan",
    icon: Rocket,
  },
];

// ----------------------------------------------------------------------------
// 6. FAQ
// ----------------------------------------------------------------------------
export const FAQ_INTRO: SectionIntro = {
  eyebrow: "Pertanyaan Umum",
  titleLines: ["Hal yang sering", "*ditanyakan.*"],
  description:
    "Belum menemukan jawaban yang Anda cari? Kirimkan pesan dan kami akan menjelaskannya secara langsung.",
};

export const FAQS: { question: string; answer: string }[] = [
  {
    question: "Berapa lama waktu pengerjaan sebuah proyek?",
    answer:
      "Website company profile umumnya selesai dalam 4–6 minggu, sedangkan produk digital atau aplikasi web berkisar 8–16 minggu tergantung kompleksitas fitur. Linimasa detail kami sampaikan setelah sesi discovery.",
  },
  {
    question: "Bagaimana sistem pembayaran dan kontraknya?",
    answer:
      "Kami bekerja dengan kontrak tertulis dan pembayaran bertahap berdasarkan milestone (umumnya 40% – 30% – 30%), sehingga Anda selalu membayar untuk progres yang sudah terlihat.",
  },
  {
    question: "Apakah kami mendapatkan akses penuh ke kode sumber?",
    answer:
      "Tentu. Seluruh kode sumber, aset desain, dan dokumentasi menjadi milik Anda sepenuhnya setelah proyek selesai, lengkap dengan sesi serah terima kepada tim internal.",
  },
  {
    question: "Apakah tersedia dukungan setelah peluncuran?",
    answer:
      "Ya. Setiap proyek mencakup garansi perbaikan 30 hari, dan kami menyediakan paket pemeliharaan bulanan untuk pembaruan fitur, pemantauan performa, serta keamanan.",
  },
];

// ----------------------------------------------------------------------------
// 7. KONTAK
// ----------------------------------------------------------------------------
export const CONTACT = {
  eyebrow: "Hubungi Kami",
  titleLines: ["Mari tumbuhkan", "sesuatu yang", "*bernilai.*"],
  description:
    "Punya rencana proyek baru, atau ingin mendiskusikan langkah digital berikutnya? Ceritakan sedikit tentang apa yang sedang Anda bangun — kami membaca setiap pesan.",
  emailLabel: "Email langsung",
  highlights: [
    { label: "Waktu respons", value: "1–2 hari kerja" },
    { label: "Sesi konsultasi", value: "Gratis, 30 menit" },
  ],
  form: {
    title: "Ceritakan tentang proyek Anda",
    subtitle:
      "Lengkapi informasi singkat di bawah ini dan tim kami akan segera menghubungi Anda.",
    fields: {
      name: { label: "Nama Anda", placeholder: "Budi Santoso" },
      email: { label: "Alamat Email", placeholder: "budi@perusahaan.com" },
      company: {
        label: "Perusahaan / Organisasi",
        placeholder: "PT Nusantara Digital (Opsional)",
      },
      service: {
        label: "Layanan yang dibutuhkan",
        options: [
          "Website Company Profile / Landing Page",
          "Aplikasi Web / Produk Digital",
          "Design System & Pengembangan Frontend",
          "Kemitraan Studio Penuh (End-to-End)",
        ],
      },
      budget: {
        label: "Estimasi Anggaran",
        options: [
          "Rp 5 Juta – Rp 15 Juta",
          "Rp 15 Juta – Rp 35 Juta",
          "Di atas Rp 35 Juta",
          "Belum ditentukan",
        ],
      },
      details: {
        label: "Detail Proyek",
        placeholder:
          "Ceritakan tujuan proyek, target waktu peluncuran, serta gambaran fitur yang ingin Anda wujudkan...",
      },
    },
    submitLabel: "Kirim Pesan",
    successMessage: "Terima kasih! Pesan Anda berhasil terkirim.",
    privacyNote: "Data Anda aman dan tidak akan dibagikan kepada pihak ketiga.",
  },
};

// ----------------------------------------------------------------------------
// FOOTER
// ----------------------------------------------------------------------------
export const FOOTER = {
  ctaLines: ["Siap membangun", "sesuatu yang *hebat?*"],
  columns: [
    {
      title: "Navigasi",
      links: [
        { label: "Layanan", href: "/#services" },
        { label: "Proses", href: "/#process" },
        { label: "Karya", href: "/work" },
        { label: "Studio", href: "/studio" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Layanan",
      links: [
        { label: "Pengalaman Web", href: "/#services" },
        { label: "Produk Digital", href: "/#services" },
        { label: "Design System", href: "/#services" },
        { label: "Konsultasi", href: "/contact" },
      ],
    },
  ],
};
