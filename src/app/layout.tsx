import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drew Bordeaux — Creative Director",
  description:
    "Creative direction for artists, brands, and the stories between. Photography, production, and hybrid filmmaking.",
  openGraph: {
    title: "Drew Bordeaux — Creative Director",
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
        className={`${instrumentSerif.variable} ${dmSans.variable} antialiased bg-neutral-950 text-neutral-50`}
      >
        {children}
      </body>
    </html>
  );
}
