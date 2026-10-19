import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

import { SITE, SERVICES, FAQS, TEAM_MEMBERS } from "@/content/site";

const SITE_URL = "https://my-portofolio-uhuy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "UhuyDevs — Studio Desain | Rekayasa Produk Digital",
    template: "%s | UhuyDevs",
  },
  description:
    "Studio desain dan rekayasa perangkat lunak di Solo, Indonesia. Merancang situs web bisnis, aplikasi web, dan produk digital. Performa tinggi untuk pertumbuhan jangka panjang.",
  keywords: [
    "UhuyDevs",
    "UhuyDevs Studio",
    "studio desain web",
    "jasa pembuatan website",
    "jasa pembuatan aplikasi web",
    "software house Solo",
    "software house Indonesia",
    "UI/UX design studio",
    "Next.js developer Indonesia",
    "pengembangan produk digital",
  ],
  authors: TEAM_MEMBERS.map((member) => ({ name: member.name })),
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE.name,
    title: "UhuyDevs — Studio Desain | Rekayasa Produk Digital",
    description:
      "Studio desain dan pengembangan produk digital serta pengalaman web yang dirancang untuk bertumbuh.",
  },
  twitter: {
    card: "summary_large_image",
    title: "UhuyDevs — Studio Desain | Rekayasa Produk Digital",
    description:
      "Studio desain dan pengembangan produk digital serta pengalaman web yang dirancang untuk bertumbuh.",
  },
  verification: {
    google: "googled5250cf312e6ed22",
  },
  other: {
    thumbnail: `${SITE_URL}/opengraph-image`,
  },
  icons: {
    icon: "/logo2.png",
    apple: "/logo2.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: SITE.name,
      url: SITE_URL,
      logo: `${SITE_URL}${SITE.logo}`,
      image: `${SITE_URL}/opengraph-image`,
      email: SITE.email,
      description:
        "Studio desain dan rekayasa perangkat lunak yang merancang situs web serta produk digital yang tenang, tangguh, dan berorientasi pada pertumbuhan jangka panjang bisnis Anda.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Solo",
        addressCountry: "ID",
      },
      founder: TEAM_MEMBERS.map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Layanan Digital UhuyDevs",
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE.name,
      description: SITE.tagline,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "id-ID",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "UhuyDevs — Studio Desain | Rekayasa Produk Digital",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#primaryimage`,
        url: `${SITE_URL}/opengraph-image`,
        contentUrl: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        caption: "UhuyDevs — Studio Desain | Rekayasa Produk Digital",
      },
      image: {
        "@id": `${SITE_URL}/#primaryimage`,
      },
      inLanguage: "id-ID",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${sans.variable} ${serif.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-canvas text-ink selection:bg-brand selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="min-h-screen flex flex-col bg-canvas text-ink">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}