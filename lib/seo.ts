import type { Metadata } from "next";

export const siteConfig = {
  name: "Health Systems Sciences",
  shortName: "HSS",
  description:
    "Delivering certified testing, validation, and compliance solutions for cleanrooms, healthcare, manufacturing, laboratories and other critical environments across the built environment.",
  url: "https://hssciences.com",
  ogImage: "https://hssciences.com/images/og-image.jpg",
  phone: "(507) 594-9395",
  email: "certify@hssciences.com",
  linkedIn:
    "https://www.linkedin.com/company/health-systems-sciences-llc/",
  address: {
    street: "150 Washington Avenue, Suite 201",
    city: "Santa Fe",
    state: "NM",
    zip: "87501",
    country: "US",
  },
  founder: "Dave Ausdemore",
  foundingDate: "2015",
} as const;

// ── Next.js Metadata helper ──────────────────────────────
export function constructMetadata({
  title,
  description,
  image,
  pathname = "/",
  noIndex = false,
  keywords,
}: {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  noIndex?: boolean;
  keywords?: string[];
} = {}): Metadata {
  const resolvedTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — Certified Testing, Compliance & Validation`;
  const resolvedDescription = description ?? siteConfig.description;
  const resolvedImage = image ?? siteConfig.ogImage;
  const canonicalUrl = `${siteConfig.url}${pathname}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: keywords ?? [
      "cleanroom certification",
      "USP 797",
      "USP 800",
      "indoor air quality",
      "industrial hygiene",
      "HVAC testing",
      "biosafety cabinet testing",
      "HEPA filter testing",
      "pharmacy certification",
      "environmental health and safety",
      "facility testing",
      "Health Systems Sciences",
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [resolvedImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
          },
        },
  };
}

// ── JSON-LD Schema Helpers ───────────────────────────────

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    foundingDate: siteConfig.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [siteConfig.linkedIn],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/og-image.jpg`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    openingHours: "Mo-Fr 08:00-17:00",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Testing & Certification Services",
      itemListElement: [
        offerItem("Cleanroom Performance Testing"),
        offerItem("Pharmacy Cleanroom USP Certification"),
        offerItem("Biosafety Cabinet & Fume Hood Testing"),
        offerItem("HVAC Testing & Balancing"),
        offerItem("Indoor Air & Mold Assessment"),
        offerItem("Industrial Hygiene Assessment"),
      ],
    },
  };
}

function offerItem(name: string) {
  return {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
    },
  };
}

export function webPageSchema({
  title,
  description,
  pathname = "/",
}: {
  title: string;
  description: string;
  pathname?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${siteConfig.url}${pathname}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}
