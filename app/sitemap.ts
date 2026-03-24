import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hssciences.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/about/company-overview`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/about/hss-team`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact-quote`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/request-form-page`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/careers`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/careers/apply-now`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/customized-solutions`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const servicePages = [
    "/cleanroom-performance-testing-certification",
    "/usp-797-usp-800-cleanroom-certification-services",
    "/pharmacy-certification-services/clean-room-cabinet",
    "/remote-surface-sampling",
    "/biosafety-cabinet-and-chemical-fume-hood",
    "/medical-facility-room-validation-services",
    "/hvac-testing-adjusting-balancing",
    "/hepa-filter-testing-replacement-services",
    "/mold-investigation-indoor-air-quality-assessment",
    "/hazardous-material-management",
    "/water-testing-and-compliance",
    "/industrial-hygiene-assessment-exposure-monitoring",
    "/services/environmental-health-and-safety-2",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = [
    "/hazardous-material-management-guide",
    "/biosafety-cabinets-vs-fume-hoods",
    "/professional-mold-visual-inspection",
    "/mold-testing-for-homes",
    "/mold-inspection-testing-guide",
    "/industrial-hygiene-workplace-safety",
    "/hepa-filter-testing-guide",
    "/hvac-duct-testing",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
