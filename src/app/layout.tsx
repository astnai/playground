import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "v0 playground",
  description: "Explore innovative web experiments and mini-demos in the v0 playground. Discover cutting-edge projects using Three.js, React, and more.",
  keywords: "v0 playground, web experiments, 3D projects, interactive demos, front-end development",
  authors: [{ name: "astnai" }],
  creator: "astnai",
  openGraph: {
    title: "v0 playground",
    description: "Explore innovative web experiments and mini-demos in the v0 playground.",
    url: "https://v0-playground.example.com",
    siteName: "v0 playground",
    images: [
      {
        url: "https://v0-playground.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "v0 playground preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "v0 playground",
    description: "Explore innovative web experiments and mini-demos in the v0 playground.",
    creator: "@astnai",
    images: ["https://v0-playground.example.com/twitter-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
