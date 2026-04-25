import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { V0Provider } from "@/lib/context"
import dynamic from "next/dynamic"

const V0Setup = dynamic(() => import("@/components/v0-setup"))

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
})

const isV0 = process.env["VERCEL_URL"]?.includes("vusercontent.net") ?? false

export const metadata: Metadata = {
  metadataBase: new URL('https://trackt.club'),
  title: {
    template: "%s | Trackt",
    default: "Trackt - Run, Compete, Own Your Ground",
  },
  description:
    "Every run claims real streets, every route builds your club's map, and every step shows real progress. Running is no longer just fitness - it's a game of playing, competing, and owning your ground.",
  keywords: ["running", "fitness", "tracking", "competition", "running club", "street running", "progress tracking", "running app"],
  authors: [{ name: "Trackt" }],
  creator: "Trackt",
  publisher: "Trackt",
  openGraph: {
    title: "Trackt - Run, Compete, Own Your Ground",
    description: "Every run claims real streets, every route builds your club's map, and every step shows real progress. Running is no longer just fitness - it's a game of playing, competing, and owning your ground.",
    url: "https://trackt.club",
    siteName: "Trackt",
    images: [
      {
        url: "/trackt-logo.svg",
        width: 200,
        height: 200,
        alt: "Trackt Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trackt - Run, Compete, Own Your Ground",
    description: "Every run claims real streets, every route builds your club's map, and every step shows real progress.",
    images: ["/trackt-logo.svg"],
    creator: "@trackt_club",
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
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(geistSans.variable, geistMono.variable, instrumentSerif.variable)}>
        <V0Provider isV0={isV0}>
          {children}
          {isV0 && <V0Setup />}
        </V0Provider>
      </body>
    </html>
  )
}
