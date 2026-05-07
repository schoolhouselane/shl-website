import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import Providers from "@/components/Providers";
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
    default: "Schoolhouse Lane | Creative Commerce & Brand Marketing Agency",
    template: "%s | Schoolhouse Lane",
  },
  description:
    "Schoolhouse Lane is a brand strategy and digital marketing agency that turns creative thinking into commercial results. Identity, campaigns, ecommerce, and AI creative.",
  openGraph: {
    title: "Schoolhouse Lane | Creative Commerce & Brand Marketing Agency",
    description:
      "Schoolhouse Lane is a brand strategy and digital marketing agency that turns creative thinking into commercial results. Identity, campaigns, ecommerce, and AI creative.",
    url: "https://schoolhouselane.co",
    siteName: "Schoolhouse Lane",
    type: "website",
    locale: "en_IE",
    images: [
      {
        url: "/images/hero-1.webp",
        width: 1200,
        height: 630,
        alt: "Schoolhouse Lane — Creative Commerce Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schoolhouse Lane | Creative Commerce & Brand Marketing Agency",
    description:
      "Schoolhouse Lane is a brand strategy and digital marketing agency that turns creative thinking into commercial results. Identity, campaigns, ecommerce, and AI creative.",
    images: ["/images/hero-1.webp"],
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
  image: "https://schoolhouselane.co/images/hero-1.webp",
  description:
    "Schoolhouse Lane is an AI-powered Creative-as-a-Service (CaaS) platform — your marketing team's dedicated creative team. We deliver brand identity, AI creative, campaigns, ecommerce advertising, and strategy through AI-powered workflows built for speed, scale, and craft.",
  email: "hello@schoolhouselane.co",
  foundingDate: "2018",
  knowsAbout: [
    "AI-Powered Creative Production",
    "Creative-as-a-Service (CaaS)",
    "Brand Identity Design",
    "AI Creative Campaigns",
    "Ecommerce Advertising",
    "Generative AI Creative",
    "DTC Brand Strategy",
    "Brand Strategy",
    "Website Development",
    "Commerce Marketing",
  ],
  serviceType: [
    "AI-Powered Creative Production",
    "Creative-as-a-Service (CaaS)",
    "Brand Identity Design",
    "AI Creative Campaigns",
    "Ecommerce Advertising",
    "AI-Assisted Website Development",
    "DTC Brand Strategy",
    "Brand Strategy",
    "Generative AI Creative",
    "Commerce Marketing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI-Powered Creative Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Informed Brand Strategy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Brand Identity" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Generative AI Creative Production" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Campaigns & Creative Direction" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Assisted Websites & Digital Experiences" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Enhanced Photography & Video" } },
    ],
  },
  address: [
    { "@type": "PostalAddress", streetAddress: "24A Baggot Street Upper", addressLocality: "Dublin", addressCountry: "IE" },
    { "@type": "PostalAddress", streetAddress: "M568+R6G, Tringë Smajli", addressLocality: "Pristina", addressCountry: "XK" },
    { "@type": "PostalAddress", streetAddress: "Overseas Enclave", addressLocality: "Lahore", addressCountry: "PK" },
    { "@type": "PostalAddress", streetAddress: "R. Caetés, 763 - Perdizes", addressLocality: "São Paulo", addressCountry: "BR" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/schoolhouselane",
    "https://www.behance.net/schoolhouselane",
    "https://www.instagram.com/schoolhouselane_",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://schoolhouselane.co/#website",
  name: "Schoolhouse Lane",
  url: "https://schoolhouselane.co",
  description: "AI-powered Creative-as-a-Service platform — brand identity, AI creative, ecommerce advertising, campaigns, and strategy built for marketing teams that need speed and scale.",
  publisher: { "@id": "https://schoolhouselane.co/#organization" },
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
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preload" as="style" href="https://assets.calendly.com/assets/external/widget.css" />
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body className="font-[var(--font-inter)]">
        <Providers>
          {children}
        </Providers>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
