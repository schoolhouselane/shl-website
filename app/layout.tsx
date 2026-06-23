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
  metadataBase: new URL("https://schoolhouselane.ai"),
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
    url: "https://schoolhouselane.ai",
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
    canonical: "https://schoolhouselane.ai",
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
  "@id": "https://schoolhouselane.ai/#organization",
  name: "Schoolhouse Lane",
  alternateName: "SHL",
  url: "https://schoolhouselane.ai",
  logo: {
    "@type": "ImageObject",
    url: "https://schoolhouselane.ai/logo.svg",
    width: 122,
    height: 48,
  },
  image: "https://schoolhouselane.ai/images/hero-1.webp",
  description:
    "Schoolhouse Lane is a Creative Commerce agency existing at the intersection of creativity and revenue growth. We transform brand from a marketing cost into a high-leverage strategic asset.",
  email: "hello@schoolhouselane.ai",
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
    "https://www.instagram.com/schoolhouselane_",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://schoolhouselane.ai/#website",
  name: "Schoolhouse Lane",
  url: "https://schoolhouselane.ai",
  publisher: { "@id": "https://schoolhouselane.ai/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://schoolhouselane.ai/work?q={search_term_string}",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-35PR0C7C4Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-35PR0C7C4Y');
          `}
        </Script>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
