import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "HSS Team",
  description:
    "Meet the Health Systems Sciences team — certified professionals with deep expertise in cleanroom certification, industrial hygiene, environmental health, and healthcare facility compliance.",
  pathname: "/about/hss-team",
});

const leadership = [
  {
    name: "David Ausdemore",
    title: "Founder and Technical Director",
    image: "https://hssciences.com/wp-content/uploads/2025/11/David-Ausdemore.webp",
    cvUrl: "https://hssciences.com/wp-content/uploads/2025/11/Ausdemore-CV-Summary-2018.pdf",
    bio: [
      "David Ausdemore is a certified Professional Engineer and Certified Industrial Hygienist with over 25 years of experience managing health, safety, and environmental programs for the U.S. Federal Government.",
      "He has led major initiatives for the CDC, including global health system strengthening and laboratory safety across more than a dozen countries. His background also includes senior roles in the U.S. Air Force, where he oversaw environmental compliance and large-scale hazardous waste cleanup projects.",
      "He is a retired Captain from the U.S. Public Health Service.",
    ],
  },
  {
    name: "Collin Nelson",
    title: "Operations Manager / Director of Built Environments",
    image: "https://hssciences.com/wp-content/uploads/2026/01/Collin-nelson.png",
    bio: [
      "Collin has been with Health Systems Sciences for three years assisting with USP/NSF client certifications and conducting client and project management. As a project manager and CETA certified technician, he understands the needs and intricacies of the Healthcare industry.",
      "With over 25 years as a certified asbestos and lead professional within public and private sectors, Collin has extensive knowledge conducting asbestos, lead, and hazardous material surveys, designs, project management and oversight in built environments, acting as a liaison between clients and state/federal regulatory agencies.",
      "Collin has vast experience conducting indoor air quality assessments, specializing in microbial (bacterial and fungal) investigations and mold remediation projects. In addition, with his industrial hygiene experience, he has performed multitudes of OSHA exposure assessments and environmental regulatory investigations including air, water and materials testing.",
      "In his free time, you'll find him doing anything outdoors and nature related, wood working and designing/building projects of all kinds.",
    ],
  },
  {
    name: "Brooke Honey",
    title: "Operations",
    image: "https://hssciences.com/wp-content/uploads/2025/11/Brooke-Honey.webp",
    bio: [
      "Brooke brings over 8 years of experience in operations, resource management, and business transformation — helping organizations align people, processes, and technology to deliver measurable results.",
      "Before joining HSS, Brooke held leadership roles in Distribution Operations at Pacific Gas & Electric (PG&E), where she led Lean Six Sigma initiatives, and partnered with executive leaders to drive efficiency and safety improvements company wide. Brooke managed both the tactical and strategic execution of electric distribution projects across California's South Bay and San Francisco regions.",
      "Known for her passion for continuous improvement, Brooke believes that operational excellence starts with empowering people and building systems that make their work easier and more impactful. She is currently pursuing her MBA at NC State University and a Chief of Staff certification through the Chief of Staff Association.",
    ],
  },
  {
    name: "Brian Falcon",
    title: "Cleanroom & Certification Specialist",
    image: "https://hssciences.com/wp-content/uploads/2025/11/Brian-Falcon.webp",
    bio: [
      "With over 15 years of experience in the controlled environment and cleanroom certification industry, Brian Falcon brings a deep technical understanding and unwavering commitment to quality and service. Formerly CETA-certified for USP 797 and 800 compliance and NEBB-accredited as a Cleanroom Performance Technician, Brian has worked extensively across healthcare, laboratory, and pharmaceutical settings.",
      "Brian's career includes time with both large national certification firms and specialized regional service providers, giving him a unique perspective on customer care, quality assurance, and operational excellence.",
      "At HSS, Brian applies his vast knowledge of USP 797/800, ISO 14644, CETA CAG-003-2006, and VA/DoD directives to help healthcare and research facilities maintain compliance and confidence in their critical environment programs.",
      "Outside of work, Brian enjoys spending time with friends and family, cooking, and being outdoors with his Lab, Kona.",
    ],
  },
];

const supportTeam = [
  {
    name: "Jayma Ausdemore",
    title: "HR, Communications & Operations",
    image: null,
    bio: [
      "Jayma Ausdemore is an operations and communications professional with over six years of experience in organizational leadership, human resources, and program development. She supports key internal and external functions across HR, digital communications, and operational systems.",
      "Her work includes developing standard operating procedures, ensuring multi-state compliance, streamlining payroll processes, and contributing to brand strategy.",
      "Before joining HSS, Jayma served as an Economic Development Consultant for the Nebraska Department of Economic Development, where she built partnerships between communities and businesses. She also spent several years in higher education, leading engagement initiatives and improving processes to enhance student and staff experiences.",
    ],
  },
  {
    name: "Alfred Hutchinson",
    title: "Field Technician — CNBT & NSF Certified",
    image: "https://hssciences.com/wp-content/uploads/2025/12/Alfred.webp",
    bio: [
      "With a strong foundation in biomedical equipment repair, Alfred transitioned into the specialized field of Health System Sciences, bringing hands-on expertise and a passion for precision in medical and research environments.",
      "Certified as a CNBT and NSF specialist in biosafety cabinets and pharmacy cleanrooms, he has extensive experience servicing and maintaining a wide range of equipment across healthcare and research settings. He particularly enjoys mentoring and training colleagues.",
      "At HSS, he has expanded his skills into environmental testing for cleanrooms and research facilities, contributing to high-stakes projects that demand accuracy and reliability.",
    ],
  },
  {
    name: "Hamilton McInnis",
    title: "Field Technician — CNBT Certified",
    image: "https://hssciences.com/wp-content/uploads/2025/12/Hamilton.webp",
    bio: [
      "Hamilton is a CNBT-certified field technician with a wide variety of experiences in servicing technology. Following a passion in taking machines apart and putting them back together, he started his career in helpdesk IT, learning how to think on his feet to diagnose and resolve problems for unfamiliar hardware and software.",
      "These skills transferred well to working in the field, identifying devices that are running into issues and finding a solution on the fly.",
    ],
  },
  {
    name: "Santiago Sabogal",
    title: "Operations Support",
    image: "https://hssciences.com/wp-content/uploads/2025/12/Santiago-Sabogal.webp",
    bio: [
      "Santiago is a proactive and thoughtful professional who values clear communication, integrity, and genuine connection. He strives to bring structure and calm to fast-paced environments while treating everyone with kindness and respect.",
      "He takes ownership of his work, follows through on commitments, and genuinely enjoys helping others stay organized — anticipating needs before they become problems and turning complex situations into clear, manageable plans.",
    ],
  },
  {
    name: "Caroline Mwango",
    title: "Finance & Administrative Assistant",
    image: "https://hssciences.com/wp-content/uploads/2025/12/Caroline-Mwango.webp",
    bio: [
      "Carol is a Business Management graduate with extensive experience in both in-office and remote roles as a Finance and Administrative Assistant. Her career began as a Management Trainee, and over time she worked across different departments, gaining a broad understanding of how they contribute to overall business success.",
      "For the past ten years, Carol has worked as a freelancer supporting start-ups, nonprofits, and established businesses across industries such as energy, building automation, construction, accounting, and e-commerce. She specializes in finance and bookkeeping, ensuring compliance with GAAP and relevant industry regulations.",
    ],
  },
  {
    name: "Ruben Molina",
    title: "Business Development Analyst",
    image: "https://hssciences.com/wp-content/uploads/2025/12/Ruben-Molina-1.webp",
    bio: [
      "Ruben Molina is an MBA-qualified professional with over 13 years of experience in logistics, operations, and business intelligence. In his role at HSS he focuses on managing and analyzing data from proposals, ensuring accurate submissions, and performing historical reviews to uncover opportunities for future applications.",
      "His technical toolkit includes Power BI, Excel/Google Sheets, SAP, QuickBooks, and cloud-based platforms, complemented by strong interpersonal and problem-solving skills that translate data into actionable strategies.",
    ],
  },
  {
    name: "Diego Castedo",
    title: "Field Engineer Support Coordinator",
    image: "https://hssciences.com/wp-content/uploads/2025/12/Diego-Castedo-1.webp",
    bio: [
      "Diego Castedo is a Civil Engineer with extensive experience in construction management, field coordination, and process optimization. At HSS he supports nationwide field operations by managing scheduling, logistics, procurement, and asset control within Microsoft Dynamics 365 and FileMaker Pro.",
      "Before joining HSS, Diego developed a solid background in residential and commercial construction, where he implemented Lean Construction and the Last Planner System to improve planning, communication, and performance.",
    ],
  },
];

export default function HssTeamPage() {
  const pageSchema = webPageSchema({
    title: "HSS Team — Health Systems Sciences",
    description:
      "Meet the Health Systems Sciences leadership and support team — certified professionals delivering cleanroom, EH&S, and healthcare compliance services nationwide.",
    pathname: "/about/hss-team",
  });
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About", href: "/about/company-overview" },
    { name: "HSS Team", href: "/about/hss-team" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_0%,oklch(0.35_0.08_255/0.3),transparent)]" aria-hidden="true" />
        <Container className="relative">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            About HSS
          </span>
          <h1
            className="font-bold leading-tight text-white"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            HSS Team
          </h1>
          <div className="mt-5 h-1 w-14 rounded-full bg-gold" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Health Systems Sciences LLC has established itself as a trusted leader in advancing
            healthcare performance through data-driven strategies, compliance support, and
            specialized training. Guided by a forward-thinking leadership team, HSS delivers
            nationwide solutions that combine scientific expertise with practical implementation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact-quote"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-gold/90 hover:shadow-lg"
            >
              Contact Us <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/about/company-overview"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              Company Overview
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Leadership ─────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Leadership</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              HSS Team
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          </div>

          <div className="space-y-16">
            {leadership.map((member) => {
              const isCollin = member.name === "Collin Nelson";
              const isLeftImage = member.name === "Collin Nelson" || member.name === "Brian Falcon";
              return (
              <div
                key={member.name}
                className={`grid items-start gap-10 ${
                  isLeftImage ? "lg:grid-cols-[300px_1fr]" : "lg:grid-cols-[1fr_300px]"
                }`}
              >
                {/* Image — left for Collin & Brian, right for others */}
                {isLeftImage && (
                  <div>
                    <div className="overflow-hidden rounded-2xl border border-border shadow-md">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-[300px] w-full object-cover object-top"
                      />
                    </div>
                  </div>
                )}

                {/* Bio */}
                <div>
                  <h3 className="font-bold text-foreground" style={{ fontSize: "1.25rem" }}>
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold">
                    {member.title}
                  </p>
                  <div className="mt-4 h-px w-12 rounded-full bg-gold/40" />
                  <div className="mt-4 space-y-3">
                    {member.bio.map((para, pi) => (
                      <p key={pi} className="text-sm leading-relaxed text-muted-foreground">
                        {para}
                      </p>
                    ))}
                  </div>
                  {member.cvUrl && (
                    <a
                      href={member.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                    >
                      Detailed CV <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>

                {/* Image — right for non-left-image members */}
                {!isLeftImage && (
                  <div>
                    <div className="overflow-hidden rounded-2xl border border-border shadow-md">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-[300px] w-full object-cover object-top"
                      />
                    </div>
                  </div>
                )}
              </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Support Team ───────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Staff</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Support Team
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {supportTeam.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {member.image ? (
                  <div className="overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-56 w-full items-center justify-center bg-primary/5">
                    <span className="text-4xl font-bold text-primary/20">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-bold text-foreground" style={{ fontSize: "1rem" }}>
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-gold">
                    {member.title}
                  </p>
                  <div className="mt-3 h-px w-8 rounded-full bg-gold/40" />
                  <div className="mt-3 space-y-2">
                    {member.bio.map((para, pi) => (
                      <p key={pi} className="text-xs leading-relaxed text-muted-foreground line-clamp-4">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
              Work With Our Team
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Reach out to discuss your facility's compliance, certification, or EH&S program
              needs — our team is ready to help.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-quote"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Contact Us <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-accent"
              >
                View Careers
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
