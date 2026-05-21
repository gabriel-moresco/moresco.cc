import type { Metadata } from "next"
import { Fraunces, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"

const title = "Gabriel Moresco"
const description = "I enjoy building things."
const url = "https://moresco.cc"
const profileImage = `${url}/static/gabriel.jpg`

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${url}/#website`,
      url,
      name: title,
      alternateName: "moresco.cc",
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${url}/#profile`,
      url,
      name: title,
      description,
      isPartOf: {
        "@id": `${url}/#website`,
      },
      inLanguage: "en",
      mainEntity: {
        "@id": `${url}/#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${url}/#person`,
      name: title,
      alternateName: "gabriel-moresco",
      jobTitle: "Software Engineer",
      description:
        "Software Engineer from Brazil with 8+ years of experience building web, mobile, and AI products.",
      image: profileImage,
      url,
      email: "mailto:gabriel.moresco25@gmail.com",
      sameAs: [
        "https://github.com/gabriel-moresco",
        "https://linkedin.com/in/gabriel-moresco",
      ],
      knowsAbout: [
        "Software Engineering",
        "Product Engineering",
        "Web Applications",
        "Mobile Applications",
        "AI Products",
        "Startups",
        "B2B2C Products",
        "Next.js",
      ],
    },
  ],
}

const jsonLd = JSON.stringify(structuredData).replace(/</g, "\\u003c")

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "./",
    siteName: title,
    images: {
      url: "/og.png",
      type: "image/png",
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    images: {
      url: "/og.png",
      type: "image/png",
      width: 1200,
      height: 630,
    },
  },
}

export const viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
}

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-mono",
        jetbrainsMono.variable,
        fraunces.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </head>
      <body>
        <ThemeProvider>
          <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
