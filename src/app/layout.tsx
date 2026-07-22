import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

// Fonte serifada/humanista para títulos (acolhimento)
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
});

// Sans-serif limpa para corpo (competência)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const description =
  "Psicóloga clínica online para todo o Brasil e presencial em Jacareí - SP. Terapia Cognitivo-Comportamental (TCC) com especialização pelo IPQ-HCFMUSP (USP). Atendimento a adolescentes, adultos, crianças e idosos.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Psicóloga Clínica | Terapia Cognitivo-Comportamental`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "psicóloga online",
    "terapia online",
    "psicóloga Jacareí",
    "Terapia Cognitivo-Comportamental",
    "TCC",
    "psicóloga adolescentes",
    "psicóloga adultos",
    "ansiedade",
    "depressão",
    site.crp,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: `${site.name} — Psicóloga`,
    title: `${site.name} — Psicóloga Clínica | TCC`,
    description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${site.name} — Psicóloga Clínica`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Psicóloga Clínica | TCC`,
    description,
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: site.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Dados estruturados (schema.org) — ajudam no "maior alcance" (SEO local).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Psychologist", "MedicalBusiness", "Person"],
  name: site.name,
  jobTitle: "Psicóloga Clínica",
  description,
  url: site.url,
  telephone: `+55 ${site.phoneDisplay}`,
  // Online atende todo o Brasil; presencial em Jacareí - SP.
  areaServed: [
    { "@type": "Country", name: "Brasil" },
    { "@type": "City", name: "Jacareí" },
    { "@type": "AdministrativeArea", name: "Vale do Paraíba, SP" },
  ],
  availableService: {
    "@type": "MedicalTherapy",
    name: "Terapia Cognitivo-Comportamental (TCC)",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jacareí",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Terapia Cognitivo-Comportamental",
    "Ansiedade",
    "Depressão",
    "Regulação emocional",
  ],
  sameAs: [site.instagramUrl],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
