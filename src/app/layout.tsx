import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PeakReady | Train Smarter. Recover Better. Race Ready.",
  description: "PeakReady is the premier MTB endurance training app. Sync with Strava, get AI-guided plans, and crush your goal events.",
  alternates: {
    canonical: "https://www.peakready.app"
  },
  openGraph: {
    title: "PeakReady - AI MTB Training",
    description: "Smarter training plans, readiness, and Strava sync for MTB riders.",
    url: "https://www.peakready.app",
    siteName: "PeakReady"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth dark`}>
      <body className="antialiased min-h-screen flex flex-col bg-brand-darker text-slate-100 font-sans">
        <Script id="hubspot-tracking" src="https://js.hs-scripts.com/8066413.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
