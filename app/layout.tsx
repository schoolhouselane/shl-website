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
  title: "Schoolhouse Lane — Creative Commerce Agency",
  description: "We exist at the intersection of creativity and revenue growth. A senior team of brand strategists, creatives, and architects transforming brand from a cost into a strategic growth engine.",
  metadataBase: new URL('https://schoolhouselane.co'),
  openGraph: {
    title: "Schoolhouse Lane — Creative Commerce Agency",
    description: "We exist at the intersection of creativity and revenue growth.",
    url: "https://schoolhouselane.co",
    siteName: "Schoolhouse Lane",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Schoolhouse Lane — Creative Commerce Agency",
    description: "We exist at the intersection of creativity and revenue growth.",
  },
  alternates: {
    canonical: "https://schoolhouselane.co",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Schoolhouse Lane",
  "alternateName": "SHL",
  "url": "https://schoolhouselane.co",
  "logo": {
    "@type": "ImageObject",
    "url": "https://schoolhouselane.co/logo.svg",
    "width": 122,
    "height": 48,
  },
  "description": "Schoolhouse Lane is a Creative Commerce agency existing at the intersection of creativity and revenue growth. We transform brand from a marketing cost into a high-leverage strategic asset.",
  "email": "hello@schoolhouselane.co",
  "sameAs": [
    "https://linkedin.com/company/schoolhouselane",
    "https://behance.net/schoolhouselane",
    "https://instagram.com/schoolhouselane",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Schoolhouse Lane",
  "url": "https://schoolhouselane.co",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="font-[var(--font-inter)]">{children}</body>
    </html>
  );
}
