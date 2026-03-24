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

// ── Primary keyword groups (high-rank targets) ───────────
export const keywordGroups = {
  core: [
    "cleanroom certification",
    "cleanroom testing",
    "environmental compliance",
    "facility testing and certification",
    "Health Systems Sciences",
    "HSS",
    "SDVOSB certified testing company",
  ],
  usp: [
    "USP 797 certification",
    "USP 800 certification",
    "USP 825 certification",
    "pharmacy cleanroom certification",
    "compounding pharmacy testing",
    "sterile compounding compliance",
    "hazardous drug handling compliance",
  ],
  cleanroom: [
    "cleanroom performance testing",
    "ISO 14644 cleanroom classification",
    "particle count testing",
    "airflow velocity testing",
    "HEPA filter integrity testing",
    "room pressurization testing",
    "cleanroom commissioning",
  ],
  iaq: [
    "indoor air quality testing",
    "mold investigation",
    "mold assessment",
    "mold testing services",
    "indoor air quality assessment",
    "air quality monitoring",
    "IAQ testing",
  ],
  hvac: [
    "HVAC testing adjusting balancing",
    "TAB services",
    "HVAC commissioning",
    "air balancing",
    "ventilation testing",
    "ASHRAE compliance testing",
    "ductwork testing",
  ],
  biosafety: [
    "biosafety cabinet certification",
    "biosafety cabinet testing",
    "BSC certification",
    "chemical fume hood testing",
    "fume hood face velocity testing",
    "NSF 49 certification",
    "laboratory safety testing",
  ],
  hepa: [
    "HEPA filter testing",
    "HEPA filter replacement",
    "HEPA filter leak testing",
    "DOP testing",
    "filter integrity testing",
    "ULPA filter testing",
  ],
  industrialHygiene: [
    "industrial hygiene assessment",
    "exposure monitoring",
    "workplace safety assessment",
    "OSHA compliance",
    "occupational health assessment",
    "chemical exposure monitoring",
    "noise monitoring",
  ],
  hazmat: [
    "hazardous material management",
    "asbestos testing",
    "lead paint testing",
    "environmental site assessment",
    "hazmat consulting",
    "spill response planning",
    "environmental remediation",
  ],
  water: [
    "water testing services",
    "Legionella testing",
    "Legionella risk management",
    "potable water testing",
    "water compliance",
    "water management plan",
    "Legionella risk assessment",
  ],
  ehs: [
    "environmental health and safety",
    "EHS consulting",
    "EHS compliance",
    "safety program development",
    "regulatory compliance consulting",
    "workplace safety consulting",
  ],
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
    : `Environmental Compliance Experts | ${siteConfig.name}`;
  const resolvedDescription = description ?? siteConfig.description;
  const resolvedImage = image ?? siteConfig.ogImage;
  const canonicalUrl = `${siteConfig.url}${pathname}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: keywords ?? [
      ...keywordGroups.core,
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
      "environmental compliance experts",
      "certified testing company",
      "compliance solutions",
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
    icons: {
      icon: "/images/HSS-icon.png",
      shortcut: "/images/HSS-icon.png",
      apple: "/images/HSS-icon.png",
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

// ── Service Schema ───────────────────────────────────────
export function serviceSchema({
  name,
  description,
  pathname,
  provider = siteConfig.name,
  areaServed = "United States",
}: {
  name: string;
  description: string;
  pathname: string;
  provider?: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${pathname}`,
    provider: {
      "@type": "Organization",
      name: provider,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
    serviceType: name,
  };
}

// ── FAQ Schema ───────────────────────────────────────────
export function faqSchema(
  questions: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}
