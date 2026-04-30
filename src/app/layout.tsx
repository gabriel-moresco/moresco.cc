import type { Metadata } from "next"
import { Fraunces, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"

const title = "Gabriel Moresco"
const description = "I enjoy building things."

export const metadata: Metadata = {
  metadataBase: new URL("https://moresco.cc"),
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
      <body>
        <ThemeProvider>
          <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
