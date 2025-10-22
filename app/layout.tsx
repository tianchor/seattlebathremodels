import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { GoogleAnalytics } from "@/components/google-analytics"
import "./globals.css"

export const metadata: Metadata = {
  title: "Seattle Bath Remodels | Bathroom Renovations",
  description:
    "Transform your bathroom with Seattle's premier remodeling experts. Walk-in tubs, accessible showers, and complete bathroom renovations.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`font-sans ${GeistSans.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
