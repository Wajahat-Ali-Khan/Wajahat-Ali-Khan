import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CursorTrail } from "@/components/CursorTrail";
import { allProfileSkills } from "@/lib/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wajahat Ali Khan — Principal Python & GenAI Solutions Consultant",
  description:
    "Principal Python & GenAI Solutions Consultant specializing in high-throughput backends, production RAG pipelines, multi-tenant SaaS, and cloud-native architectures.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Wajahat Ali Khan — Principal Python & GenAI Solutions Consultant",
    description:
      "High-throughput backends, cost-optimized GenAI & RAG systems, and cloud-native architectures.",
    images: [{ url: "/og-image.png", width: 1200, height: 960, alt: "Wajahat Ali Khan Logo" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wajahat Ali Khan — Principal Python & GenAI Solutions Consultant",
    description:
      "High-throughput backends, cost-optimized GenAI & RAG systems, and cloud-native architectures.",
    images: ["/og-image.png"],
  },
  keywords: [
    "Wajahat Ali Khan",
    "Python Consultant",
    "AI Solutions Architect",
    "GenAI",
    "RAG",
    "FastAPI",
    "Django",
    "Backend Architect",
    ...allProfileSkills,
  ],
};

// JSON-LD Person — verified credentials & professional links
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wajahat Ali Khan",
  jobTitle: "Principal Python & GenAI Solutions Consultant",
  email: "mailto:wajahatkhanofficials@gmail.com",
  sameAs: [
    "https://linkedin.com/in/wajahataliofficials",
    "https://github.com/Wajahat-Ali-Khan",
    "https://twitter.com/AKWajahat",
  ],
  knowsAbout: allProfileSkills,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Karachi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans" suppressHydrationWarning>
        <CursorTrail />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
