import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drew Bordeaux \u2014 Creative Director",
  description:
    "Creative direction for artists, brands, and the stories between. Photography, production, and hybrid filmmaking.",
  openGraph: {
    title: "Drew Bordeaux \u2014 Creative Director",
    description:
      "Creative direction for artists, brands, and the stories between.",
    type: "website",
    url: "https://drewbordeaux.com",
    images: [
      {
        url: "https://drewbordeaux.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
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
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
