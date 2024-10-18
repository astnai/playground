import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const url = "https://playground.agustinarias.com";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Playground | Agustín Arias",
  authors: [{ name: "astnai" }],
  creator: "astnai",
  icons: {
    icon: "/@icon.png",
  },
  openGraph: {
    title: "Playground | Agustín Arias",
    url: url, 
    siteName: "Playground | Agustín Arias",
    images: [
      {
        url: `${url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Playground preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Playground | Agustín Arias",
    creator: "@astnai",
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
        className={`${geistMono.variable} antialiased`}
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
