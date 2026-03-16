export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const serviceHubs = [
  "Albuquerque, NM",
  "Phoenix, AZ",
  "San Diego, CA",
  "Denver, CO",
  "Minneapolis, MN",
  "New Orleans, LA",
  "Raleigh-Durham, NC",
  "Austin, TX",
  "New York City, NY",
  "Boston, MA",
] as const;

export const certifications = [
  { name: "CETA", src: "/images/certifications/ceta.png" },
  { name: "SDVOSB", src: "/images/certifications/sdvosb.png" },
  { name: "NSF", src: "/images/certifications/nsf.png" },
  { name: "BGEC CPSA", src: "/images/certifications/bgec.png" },
  { name: "NCEES", src: "/images/certifications/ncees.png" },
  { name: "EPA Certified", src: "/images/certifications/epa.png" },
] as const;

export const clients = [
  { name: "Hennepin County", src: "/images/clients/hennepin.png" },
  { name: "FDA", src: "/images/clients/fda.png" },
  { name: "University of Minnesota", src: "/images/clients/umn.png" },
  { name: "NCEES", src: "/images/clients/ncees.png" },
  { name: "University of New Mexico", src: "/images/clients/unm.png" },
  { name: "Ridgeview", src: "/images/clients/ridgeview.png" },
  { name: "River's Edge", src: "/images/clients/rivers-edge.png" },
  { name: "Mankato Clinic", src: "/images/clients/mankato.png" },
  { name: "Missouri DHSS", src: "/images/clients/mdhss.png" },
  { name: "US Veterans Affairs", src: "/images/clients/va.png" },
  { name: "US Air Force", src: "/images/clients/usaf.png" },
  { name: "US Navy", src: "/images/clients/usn.png" },
] as const;

export const services = [
  {
    title: "Comprehensive Cleanroom Certifications",
    description:
      "From pharmacies to hospitals and high-tech: one standard of excellence — certifying pharmacies, operating rooms and cleanrooms across healthcare, technology, and industry.",
    image: "/images/services/cleanroom.jpg",
    href: "/services",
  },
  {
    title: "Mold & Indoor Air Quality Investigations",
    description:
      "Lab-verified mold and indoor air quality investigations. On-site expert evaluation backed with laboratory data provides results you can trust.",
    image: "/images/services/air-quality.jpg",
    href: "/services",
  },
  {
    title: "Ventilation Verification & Validation",
    description:
      "Specialized ventilation verification and validation — measuring and balancing ventilation flow to meet ASHRAE standards for airflow, air exchanges and room pressure differentials.",
    image: "/images/services/ventilation.jpg",
    href: "/services",
  },
  {
    title: "Industrial Hygiene & Worker Safety",
    description:
      "Delivering OSHA compliance with exposure monitoring, safety, and trusted results.",
    image: "/images/services/industrial-hygiene.jpg",
    href: "/services",
  },
] as const;

export const footerLinks = {
  services: [
    { label: "Services", href: "/services" },
    { label: "Pharmacy Certification", href: "/services" },
    { label: "Customized Solutions", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Sitemap", href: "/sitemap" },
  ],
} as const;
