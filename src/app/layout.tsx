import type { Metadata } from "next";
import { Unbounded, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brand } from "@/data/site";

const display = Unbounded({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  title: `${brand.name} — Creative Studio`,
  description:
    "Aethos Media is a hands-on creative studio building thoughtful, strategic brand and web experiences for ambitious companies.",
  openGraph: {
    title: `${brand.name} — Creative Studio`,
    description:
      "A hands-on creative studio building thoughtful, strategic brand and web experiences for ambitious companies.",
    url: siteUrl,
    siteName: brand.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — Creative Studio`,
    description:
      "A hands-on creative studio building thoughtful, strategic brand and web experiences for ambitious companies.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
        <ThemeProvider>
          <Preloader />
          <CustomCursor />
          <div className="grain" />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
