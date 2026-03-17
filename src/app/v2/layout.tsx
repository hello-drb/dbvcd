import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drew Bordeaux — Creative Director | Brand Strategy, Photography, Production",
  description:
    "Drew Bordeaux is a New York-based creative director working with artists, authors, and founders. Brand strategy, visual identity, photography, and production through Silver Rush Productions.",
  keywords: [
    "Drew Bordeaux",
    "creative director",
    "brand strategy",
    "visual identity",
    "photography",
    "music production",
    "New York creative director",
    "artist branding",
    "Silver Rush Productions",
    "DrewImages Studio",
    "Silver Rush Media",
  ],
  authors: [{ name: "Drew Bordeaux" }],
  creator: "Drew Bordeaux",
  openGraph: {
    title: "Drew Bordeaux — Creative Director",
    description:
      "Brand strategy, visual identity, photography, and production for artists, authors, and founders.",
    type: "website",
    url: "https://drewbordeaux.com",
    siteName: "Drew Bordeaux",
    locale: "en_US",
    images: [
      {
        url: "https://drewbordeaux.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Drew Bordeaux — Creative Director",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drew Bordeaux — Creative Director",
    description:
      "Brand strategy, visual identity, photography, and production for artists, authors, and founders.",
    images: ["https://drewbordeaux.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://drewbordeaux.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* JSON-LD Structured Data for SEO + AI discoverability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://drewbordeaux.com/#drew",
                name: "Drew Bordeaux",
                url: "https://drewbordeaux.com",
                jobTitle: "Creative Director",
                description:
                  "New York-based creative director working with artists, authors, and founders on brand strategy, visual identity, photography, and production.",
                sameAs: [
                  "https://instagram.com/drewimages",
                  "https://linkedin.com/in/drewbordeaux",
                  "https://drewbordeaux.substack.com",
                ],
                worksFor: {
                  "@type": "Organization",
                  name: "Silver Rush Productions",
                  url: "https://drewbordeaux.com",
                },
                knowsAbout: [
                  "Creative Direction",
                  "Brand Strategy",
                  "Photography",
                  "Music Production",
                  "Visual Identity",
                  "Art Direction",
                ],
                memberOf: {
                  "@type": "Organization",
                  name: "Recording Academy",
                },
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "NY",
                  addressCountry: "US",
                },
              },
              {
                "@type": "Organization",
                "@id": "https://drewbordeaux.com/#org",
                name: "Silver Rush Productions",
                url: "https://drewbordeaux.com",
                founder: {
                  "@id": "https://drewbordeaux.com/#drew",
                },
                subOrganization: [
                  {
                    "@type": "Organization",
                    name: "DrewImages.Studio",
                    url: "https://drewimages.studio",
                    description:
                      "Creative direction and photography for artists, founders, and creative teams.",
                  },
                  {
                    "@type": "Organization",
                    name: "Silver Rush Media",
                    url: "https://silverrushmedia.com",
                    description:
                      "Brand strategy, visual identity, and websites for professionals and businesses.",
                  },
                  {
                    "@type": "Organization",
                    name: "Sudden Flight Records",
                    url: "https://suddenflightrecords.com",
                    description:
                      "Music production, label services, and sonic identity for independent artists.",
                  },
                ],
              },
              {
                "@type": "WebSite",
                url: "https://drewbordeaux.com",
                name: "Drew Bordeaux",
                description:
                  "Creative direction for artists, authors, and founders. Brand strategy, visual identity, photography, and production.",
                publisher: {
                  "@id": "https://drewbordeaux.com/#org",
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
