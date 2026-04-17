import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://schoolhouselane.co"),
  title: {
    default: "Schoolhouse Lane — Creative Commerce Agency",
    template: "%s — Schoolhouse Lane",
  },
  description:
    "We exist at the intersection of creativity and revenue growth. A senior team of brand strategists, creatives, and architects transforming brand from a cost into a strategic growth engine.",
  openGraph: {
    title: "Schoolhouse Lane — Creative Commerce Agency",
    description:
      "We exist at the intersection of creativity and revenue growth. Brand strategy, identity, campaigns, and websites that convert.",
    url: "https://schoolhouselane.co",
    siteName: "Schoolhouse Lane",
    type: "website",
    locale: "en_IE",
    images: [
      {
        url: "/images/hero-1.png",
        width: 1200,
        height: 630,
        alt: "Schoolhouse Lane — Creative Commerce Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schoolhouse Lane — Creative Commerce Agency",
    description:
      "We exist at the intersection of creativity and revenue growth. Brand strategy, identity, campaigns, and websites that convert.",
    images: ["/images/hero-1.png"],
  },
  alternates: {
    canonical: "https://schoolhouselane.co",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://schoolhouselane.co/#organization",
  name: "Schoolhouse Lane",
  alternateName: "SHL",
  url: "https://schoolhouselane.co",
  logo: {
    "@type": "ImageObject",
    url: "https://schoolhouselane.co/logo.svg",
    width: 122,
    height: 48,
  },
  image: "https://schoolhouselane.co/images/hero-1.png",
  description:
    "Schoolhouse Lane is a Creative Commerce agency existing at the intersection of creativity and revenue growth. We transform brand from a marketing cost into a high-leverage strategic asset.",
  email: "hello@schoolhouselane.co",
  foundingDate: "2019",
  knowsAbout: [
    "Brand Identity",
    "Brand Strategy",
    "Creative Direction",
    "Digital Marketing",
    "Website Design",
    "Growth Consulting",
    "Campaign Strategy",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Creative Commerce Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity & Positioning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Campaigns & Creative Direction" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Websites & Digital Experiences" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Creative & Innovation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Strategy & Growth Consulting" } },
    ],
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "24A Baggot Street Upper",
      addressLocality: "Dublin",
      addressCountry: "IE",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/schoolhouselane",
    "https://www.behance.net/schoolhouselane",
    "https://www.instagram.com/schoolhouselane",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://schoolhouselane.co/#website",
  name: "Schoolhouse Lane",
  url: "https://schoolhouselane.co",
  publisher: { "@id": "https://schoolhouselane.co/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://schoolhouselane.co/work?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-[var(--font-inter)]">{children}</body>
    </html>
  );
}
