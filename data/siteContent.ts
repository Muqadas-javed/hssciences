// ────────────────────────────────────────────────────────────
// siteContent.ts – Structured content extracted from https://hssciences.com/
// Content is verbatim from the live site. Only the UI will be redesigned.
// ────────────────────────────────────────────────────────────

export const siteContent = {
  // ── Global ────────────────────────────────────────────────
  global: {
    siteName: "Health Systems Sciences",
    logoAlt: "Health-Systems-Science-Primary-Logo-Retina",
    tagline: "CERTIFIED TESTING. MEASURABLE PERFORMANCE. TRUSTED PARTNERSHIP.",
    phone: "(507) 594-9395",
    email: "certify@hssciences.com",
    linkedIn:
      "https://www.linkedin.com/company/health-systems-sciences-llc/?viewAsMember=true",
    copyright: "© Health Systems Sciences LLC. All rights reserved.",
    corporateOffice: {
      label: "HSS Corporate Office",
      street: "150 Washington Avenue, Suite 201",
      city: "Santa Fe",
      state: "NM",
      zip: "87501",
    },
    serviceHubs: [
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
    ],
  },

  // ── Navigation ────────────────────────────────────────────
  navigation: {
    primary: [
      { label: "Services", href: "/services" },
      { label: "About us", href: "/about/company-overview" },
      { label: "Contact Us", href: "/contact-quote" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
    footerAdditionalLinks: [
      { label: "Services", href: "/services" },
      { label: "About us", href: "/about/company-overview" },
      { label: "Contact Us", href: "/contact-quote" },
      { label: "Careers", href: "/careers" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Sitemap", href: "/sitemap" },
      { label: "Blog", href: "/blog" },
    ],
  },

  // ── Home Page ─────────────────────────────────────────────
  home: {
    hero: {
      heading: "CERTIFIED TESTING. MEASURABLE PERFORMANCE. TRUSTED PARTNERSHIP.",
      subheading:
        "Delivering certified testing, validation, and compliance solutions for cleanrooms, healthcare, manufacturing, laboratories and other critical environments across the built environment.",
      cta: {
        label: "DOWNLOAD: WHAT YOUR CERTIFIER MAY NOT BE TELLING YOU",
        href: "/download-your-copy",
      },
    },

    serviceCards: [
      {
        image: "/images/services/cleanroom.jpg",
        imageAlt: "Pharmacy Test",
        imageSrc:
          "https://hssciences.com/wp-content/uploads/2025/11/111.jpg",
        heading:
          "FROM PHARMACIES TO HOSPITALS AND HIGH-TECH: COMPREHENSIVE CLEANROOM CERTIFICATIONS",
        subheading:
          "ONE STANDARD OF EXCELLENCE—CERTIFYING PHARMACIES, OPERATING ROOMS AND CLEANROOMS ACROSS HEALTHCARE, TECHNOLOGY, AND INDUSTRY.",
      },
      {
        image: "/images/services/air-quality.jpg",
        imageAlt: "Pharmacy Test",
        imageSrc:
          "https://hssciences.com/wp-content/uploads/2025/11/112.jpg",
        heading: "LAB-VERIFIED MOLD AND INDOOR AIR QUALITY INVESTIGATIONS",
        subheading:
          "ON SITE EXPERT EVALUATION BACKED WITH LABORATORY DATA PROVIDES RESULTS YOU CAN TRUST.",
      },
      {
        image: "/images/services/ventilation.jpg",
        imageAlt: "Pharmacy Test",
        imageSrc:
          "https://hssciences.com/wp-content/uploads/2025/11/113.jpg",
        heading: "SPECIALIZED VENTILATION VERIFICATION AND VALIDATION",
        subheading:
          "MEASURING AND BALANCING VENTILATION FLOW TO MEET ASHRAE STANDARDS FOR AIRFLOW, AIR EXCHANGES AND ROOM PRESSURE DIFFERENTIALS.",
      },
      {
        image: "/images/services/industrial-hygiene.jpg",
        imageAlt: "Pharmacy Test",
        imageSrc:
          "https://hssciences.com/wp-content/uploads/2025/11/114.jpg",
        heading: "INDUSTRIAL HYGIENE AND WORKER SAFETY SERVICES",
        subheading:
          "DELIVERING OSHA COMPLIANCE WITH EXPOSURE MONITORING, SAFETY, AND TRUSTED RESULTS.",
      },
    ],

    certifications: {
      heading: "CERTIFICATION & ACCREDITATION",
      items: [
        {
          name: "CETA",
          alt: "CETA logo - Certification and Testing Association.",
          src: "/images/CETA.png",
        },
        {
          name: "SDVOSB",
          alt: "SDVOSB Service Disabled Veteran Owned Small Business certification seal.",
          src: "/images/SDVOSB.jpg",
        },
        {
          name: "NSF",
          alt: "NSF logo - National Sanitation Foundation certification mark.",
          src: "/images/NSF.webp",
        },
        {
          name: "BGEC CPSA",
          alt: "Board for Global EHS Credentials CPSA Certification Seal.",
          src: "/images/BGEC.webp",
        },
        {
          name: "NCEES",
          alt: "NCEES logo - National Council of Examiners for Engineering and Surveying emblem.",
          src: "/images/NCEES.png",
        },
        {
          name: "EPA Certified",
          alt: "EPA Certified Seal by Mainstream Engineering - Environmental Protection Agency Certification",
          src: "/images/EPACertified.webp",
        },
      ],
    },

    totalSolutions: {
      heading: "TOTAL SOLUTIONS PROVIDER",
      paragraph:
        "Industrial Hygiene Services from Health Systems Sciences can help ensure your facility meets health, safety and environmental standards. HSS can help you safeguard worker health and manage associated risks in your operation.",
      cta: {
        label: "DISCOVER SOLUTIONS >>",
        href: "/customized-solutions",
      },
    },

    pharmacyCertification: {
      heading: "PHARMACY CERTIFICATION SERVICES",
      paragraph:
        "Health Systems Sciences is a complete Pharmacy Certification Service provider. From cabinet testing to clean room certification, HSS technical knowledge and broad experience to ensure your meeting performance standards and maintaining compliance.",
      cta: {
        label: "VIEW CERTIFICATION SERVICES >>",
        href: "/pharmacy-certification-services/clean-room-cabinet",
      },
    },

    clients: {
      heading: "MEET SOME OF OUR CLIENTS",
      items: [
        {
          name: "Hennepin County",
          alt: "Hennepin County logo",
          src: "/images/HennepinCounty.png",
        },
        {
          name: "FDA",
          alt: "U.S. Food and Drug Administration logo",
          src: "/images/FDA-new.png",
        },
        {
          name: "University of Minnesota",
          alt: "University of Minnesota logo",
          src: "/images/Minnesota.png",
        },
        {
          name: "NCEES",
          alt: "NCEES - National Council of Examiners for Engineering and Surveying logo",
          src: "/images/NCEES1.png",
        },
        
        {
          name: "University of New Mexico",
          alt: "University of New Mexico logo",
          src: "/images/UniversityofNewMexico.png",
        },
        {
          name: "Ridgeview",
          alt: "Ridgeview Medical Center logo",
          src: "/images/RIDGEVIEW.png",
        },
        {
          name: "River's Edge",
          alt: "River's Edge Hospital logo",
          src: "/images/River'sEdge.png",
        },
        {
          name: "Mankato Clinic",
          alt: "Mankato Clinic logo",
          src: "/images/MANKATO.png",
        },
        {
          name: "Missouri DHSS",
          alt: "Missouri Department of Health and Senior Services logo",
          src: "/images/MDHSS.png",
        },
        {
          name: "US Veterans Affairs",
          alt: "U.S. Department of Veterans Affairs logo",
          src: "/images/VA.png",
        },
        {
          name: "US Air Force",
          alt: "U.S. Air Force logo",
          src: "/images/US-AIRFORCE.png",
        },
        {
          name: "US Navy",
          alt: "U.S. Navy logo",
          src: "/images/USNavy.png",
        },
        
      ],
    },

    expertise: {
      heading: "EXPERTISE THAT INSTILLS CONFIDENCE",
      paragraph:
        "The Health Systems Sciences team is highly skilled, multi-disciplinary and has years of real world experience. HSS technicians can help you provide a clean and safe environment for workers, products and patients. In addition, HSS has the knowledge to offer technical insight and project management solutions enabling business efficiency and compliance.",
      cta: {
        label: "LEARN MORE ABOUT THE HSS ADVANTAGE",
        href: "/about/company-overview",
      },
    },

    workerSafety: {
      heading: "WORKER SAFETY",
      paragraph:
        "Health Systems Sciences background and expertise goes well beyond pharmacy services and standard IH functions. With core competencies that extend to biosafety, hazardous material management, specialized training and more.",
      cta: {
        label: "FIND OUT WHAT HSS CAN DO FOR YOU",
        href: "/services/environmental-health-and-safety-2",
      },
    },

    quoteForm: {
      heading: "Get Started with a Quote",
      paragraph:
        "Fill out the form below to request a personalized quote. One of our specialists will review your information and get back to you promptly with details tailored to your facility's needs. We're here to help you meet your compliance, testing, and safety goals, quickly and efficiently.",
      fields: [
        { name: "name", label: "Name", required: true },
        { name: "email", label: "Email", required: true },
        { name: "phone", label: "Phone Number", required: true },
        { name: "state", label: "State", required: true },
        { name: "city", label: "City", required: true },
        { name: "serviceDetails", label: "Service Details", required: true },
      ],
      submitLabel: "Request a quote",
    },
  },

  // ── Services Page ─────────────────────────────────────────
  services: {
    hero: {
      heading: "OUR EXPERTISE",
      subheading:
        "Specialized services to improve the performance and health of the Critical and Built Environments",
      catalogTitle: "Health Systems Sciences (HSS) – Service Catalog",
    },

    catalog: [
      {
        title: "Cleanroom Performance Testing & Certification",
        description:
          "Comprehensive testing of controlled environments verifies air cleanliness, airflow velocity, pressure differentials, and recovery times. Testing ensures ISO classification compliance through precise particle counting and airflow analysis. Complete documentation and traceable results support certification and quality audits.",
        standards:
          "ISO 14644-1/2/3, IEST-RP-CC006, ASHRAE 170",
        facilities:
          "Pharmaceutical manufacturing, research laboratories, semiconductor production, biotechnology facilities, aerospace cleanrooms",
        href: "/cleanroom-performance-testing-certification",
      },
      {
        title: "Mold Investigation & Indoor Air Quality Assessment",
        description:
          "Indoor environments are evaluated for particulates, VOCs, humidity, and microbial contamination. Assessments include moisture mapping, surface and air sampling, and laboratory analysis to identify contamination sources. Recommendations support remediation, prevention, and improved indoor environmental quality.",
        standards:
          "EPA IAQ Guidelines, AIHA Z9.5, CDC Mold Remediation, ASTM D7338",
        facilities:
          "Commercial buildings, schools, residential properties, healthcare facilities, government buildings",
        href: "/mold-investigation-indoor-air-quality-assessment",
      },
      {
        title: "Industrial Hygiene Assessment & Exposure Monitoring",
        description:
          "Workplace environments are assessed for exposure to airborne contaminants, particulates, and chemical vapors. Sampling and analysis identify potential health hazards and support corrective actions. Results provide compliance verification and guidance for safer, healthier work conditions.",
        standards:
          "OSHA 1910, NIOSH Manual of Analytical Methods, AIHA Guidelines, ACGIH TLVs",
        facilities:
          "Manufacturing plants, laboratories, healthcare facilities, maintenance shops, educational institutions",
        href: "/industrial-hygiene-assessment-exposure-monitoring",
      },
      {
        title: "USP 797 & USP 800 Cleanroom Certification Services",
        description:
          "Sterile and hazardous drug compounding areas are certified for USP compliance. Testing includes HEPA integrity, airflow direction, pressurization, and particle counts to maintain product quality and patient safety. Documentation provides reliable, traceable certification aligned with regulatory requirements.",
        standards:
          "USP <797>, USP <800>, USP <825>, CETA CAG-003/005, ISO 14644",
        facilities:
          "Hospital and retail pharmacies, compounding centers, outpatient clinics, oncology units, nuclear medicine facilities",
        href: "/usp-797-usp-800-cleanroom-certification-services",
      },
      {
        title: "HVAC Testing, Adjusting & Balancing",
        description:
          "Testing, adjusting, and balancing (TAB) services measure and optimize supply, return, and exhaust airflows to meet design and performance criteria. Proper balancing improves energy efficiency, comfort, and air distribution. Reports document verified compliance with design intent and system specifications.",
        standards:
          "ASHRAE 111, NEBB TAB Procedures, AABC TAB Manual, SMACNA",
        facilities:
          "Hospitals, universities, laboratories, commercial buildings, clean manufacturing environments",
        href: "/hvac-testing-adjusting-balancing",
      },
      {
        title: "Medical Facility & Room Validation Services",
        description:
          "Ventilation performance is verified in operating rooms, isolation rooms, and other clinical environments. Testing confirms proper airflow direction, pressurization, air exchange rates, temperature, and humidity for infection control and occupant comfort. Documentation supports compliance with healthcare ventilation and facility standards.",
        standards:
          "ASHRAE 170, FGI Guidelines, CDC HVAC Guidelines",
        facilities:
          "Hospitals, surgical centers, patient isolation suites, dental clinics, treatment and procedure rooms",
        href: "/medical-facility-room-validation-services",
      },
      {
        title: "Water Testing and Compliance",
        description:
          "Water systems are evaluated for Legionella, Coliform/E. Coli, lead, copper, and other contaminants. Sampling, analysis, and mitigation planning reduce risks and support compliance with health and safety regulations. Routine monitoring ensures ongoing protection for patients, staff, and occupants.",
        standards:
          "CDC Legionella Toolkit, AAMI TIR34, EPA Lead and Copper Rule, ASHRAE 188",
        facilities:
          "Hospitals, long-term care facilities, commercial buildings, hotels, industrial water systems, dialysis centers",
        href: "/water-testing-and-compliance",
      },
      {
        title: "Biosafety Cabinet and Chemical Fume Hood",
        description:
          "Certification and testing confirm containment, operator protection, and airflow performance of biosafety cabinets, fume hoods, and laminar flow devices. Testing includes velocity measurement, HEPA integrity verification, and smoke visualization. Results ensure compliance with NSF and ASHRAE standards for laboratory safety.",
        standards:
          "NSF 49, ASHRAE 110, ANSI AIHA Z9.5, CETA CAG-002",
        facilities:
          "Research and diagnostic laboratories, universities, biotechnology facilities, hospital labs, pharmaceutical manufacturing sites",
        href: "/biosafety-cabinet-and-chemical-fume-hood",
      },
      {
        title: "Hazardous Material Management",
        description:
          "Testing and assessment identify asbestos, lead, PCBs, and other hazardous materials within facilities. Services include sampling, risk evaluation, abatement coordination, and regulatory documentation. Oversight ensures safe renovation, demolition, and long-term compliance with federal and state requirements.",
        standards:
          "EPA AHERA, OSHA 29 CFR 1926.1101, HUD Lead Guidelines, NESHAP",
        facilities:
          "Hospitals, universities, government buildings, industrial facilities, commercial and residential structures",
        href: "/hazardous-material-management",
      },
      {
        title: "HEPA Filter Testing & Replacement Services",
        description:
          "PAO/DOP integrity testing and inspections verify HEPA filter performance and identify any leaks or installation issues. Certified replacements and revalidation maintain cleanroom integrity and environmental protection. Documentation ensures compliance with regulatory and quality assurance standards.",
        standards:
          "ISO 14644-3, IEST-RP-CC034, NSF 49, CETA CAG-003",
        facilities:
          "Cleanrooms, biosafety labs, pharmaceutical facilities, healthcare environments, research centers",
        href: "/hepa-filter-testing-replacement-services",
      },
      {
        title: "Remote Surface Sampling",
        description:
          "Remote surface sampling verifies that sterile compounding environments remain free from microbial contamination. Technicians collect samples under aseptic conditions to confirm surface cleanliness, equipment integrity, and compliance with environmental controls. Documentation ensures reliable, defensible results aligned with regulatory expectations.",
        standards:
          "USP <797>, USP <800>, CETA CAG-009, ISO 14644, CDC/NIOSH Guidance",
        facilities:
          "Hospital and retail pharmacies, compounding centers, outpatient infusion clinics, hazardous drug–handling environments",
        href: "/remote-surface-sampling",
      },
    ],

    closingText:
      "Contact Health Systems Sciences today for more information on specific services offered for you industry or facility.",
  },

  // ── About / Company Overview Page ─────────────────────────
  about: {
    hero: {
      heading: "COMPANY OVERVIEW",
      subheading:
        "Expertise, Experience & Clear Insight",
      teamDescription:
        "Health Systems Sciences (HSS) brings deep expertise and clear insight to optimize processes, facilities, and the built environment. Our team includes CETA-certified technicians, professional engineers, and industrial hygiene specialists who use evidence-based, systematic methods to keep people safe and operations compliant.",
    },

    section: {
      heading: "ABOUT HEALTH SYSTEMS SCIENCES",
      paragraphs: [
        "Health Systems Sciences (HSS) is a national leader in specialized facility testing and certification, dedicated to advancing safety, quality, and performance across the Built Environment. Focusing on specialized facilities such as healthcare, pharmaceutical, research laboratories, semiconductor, and manufacturing facilities, we not only certify your space, we provide solutions when problems are identified. Our expertise allows detailed evaluations in accordance with industry standards such as USP 797/800/825, NSF, cGMP, ASHRAE, ISO, IEST and others.",
        "Our engineering and technical staff evaluate and solve the root causes of facility operations shortfalls. Our troubleshooting HVAC performance, water distribution systems and facility structure, will mitigate sources of contaminants such as mold and other infectious agents, chemical contaminants, asbestos and lead. Solutions often include proper airflow testing and balancing, Legionella prevention controls, filtration sysetms and other engineering controls. We also are experts in maintaining and repairing various containment cabinets, such as biosafety cabinets, chemical fume hoods, laminar flow cabinets and others.",
        "At HSS, we believe trusted partnerships drive reliable performance. Our certified and experienced technicians bring deep expertise and consistency to every project, helping clients optimize equipment, reduce downtime, and maintain readiness. Using the latest technology platform, we streamline scheduling, automate reporting, and track assets in real time. This technology-enabled approach delivers prompt, high-quality documentation and clear operational visibility across all client locations.",
        "HSS was founded by Dave Ausdemore, a U.S. veteran with a rich background of diverse experience from international medical facilities to world-class laboratories. With decades of experience in the military, global health, and technical services industries, Dave built HSS on a foundation of Integrity, Mentorship, Performance, Accountability, Customer Focus, and Transformation (IMPACT)—values that continue to guide our national reputation for excellence.",
        "Today, HSS combines veteran discipline with modern innovation to deliver dependable, compliant, and performance-driven results. As a Service Disabled Veteran Owned Small Business (SDVOSB) with industry-recognized certifications and partnerships, we stand as a trusted partner in safety and compliance, helping organizations nationwide create environments where quality, care, and accountability thrive.",
      ],
    },
  },

  // ── Customized Solutions Page ─────────────────────────────
  customizedSolutions: {
    hero: {
      heading: "Customized Solutions",
      paragraph:
        "In addition to testing and certifications, sometimes a longer term, deeper solution is required for your facility, plant or operation. Health Systems Sciences has the expertise to develop and execute long-term planning and management solutions. Health Systems Sciences can develop customized plans, consult on facility design, develop and manage biosafety issues and much more.",
      cta: {
        label: "REQUEST QUOTE",
        href: "/contact-quote",
      },
    },

    sections: [
      {
        heading: "INDUSTRIAL HYGIENE SERVICES",
        subheading: "Improving Worker Safety & Staying in Compliance",
        paragraph:
          "Meeting OSHA compliance and keeping workers safe are top priorities in an industrial setting. Facility managers and safety directors count on Health Systems Sciences to identify workplace hazards (chemical, radiological, biological and physical) and provide real world solutions that help reduce work place injury. Health Systems Sciences provides engineering and industrial hygiene services that include troubleshooting of equipment and ventilations systems, identifying and quantifying health risks and more.",
        additionalParagraph:
          "Health Systems Services offers a wide range of industrial hygiene services to meet almost any need.",
        bulletPoints: [
          "Worker Hazard Assessments",
          "Mold and Indoor Environmental Quality (IEQ) Investigations",
          "Hazardous Waste Stream Characterization",
          "Infection Control and Outbreak Investigations",
          "Waste Anesthesia Gas Monitoring",
          "Legionella Monitoring, Investigations and Management Plans",
          "Joint Commission Environment of Care Reviews",
        ],
      },
      {
        heading: "FACILITY & HVAC COMMISSIONING",
        subheading: "Support for Your Systems",
        paragraph:
          "Air quality is always a concern for facility directors, building supervisors and property managers. A comfortable environment, with sufficient ventilation to dilute and remove contaminants, is an essential component of any building, facility or residence. A proper system provides conditioned air and assists in controlling the transmission of airborne infection. Health Systems Sciences evaluates air-handling and distribution systems for patient care areas, resident care areas and related support areas within healthcare and other facilities.",
        additionalParagraph:
          "Health Systems Services offers the Facility and HVAC Commissioning services you need to make sure your facility is meeting the requirements of patients, residents and employees.",
      },
      {
        heading: "BIOSAFETY & BIOSECURITY",
        subheading: "Biorisk Management by the Experts",
        paragraph:
          "Effective Biosafety and Biosecurity includes the management of procedures, best practices and equipment in order to provide protection of employees, customers and often the general public from hazardous biological materials and situations. Health Systems Sciences is here to guide you through these complex and specialized safety programs and protocols. From testing and monitoring to implementation of biosecurity programs, HSS can you achieve the right level of biorisk management for your organization.",
        bulletPoints: [
          "Legionella Monitoring and Control",
          "Water Quality Testing",
          "Infection Control and Outbreak Investigations",
          "Fume and Biological Safety Hood Certification",
          "USP 797 and 800 Sampling and Protocol Design",
          "Biosafety and Biosecurity Program Assessment",
        ],
      },
      {
        heading: "ENVIRONMENTAL PROGRAM MANAGEMENT",
        subheading: "A Comprehensive Approach",
        paragraph:
          "Maintaining environmental compliance has never been as scrutinized as it is today. Health Systems Sciences offers a variety of technical and evaluation services to help you maintain compliance in any number areas. Assessment, documentation and monitoring are all part of the comprehensive approach to Environmental Program Management.",
        additionalParagraph:
          "No matter the setting, Health Systems Sciences is your partner for environmental program management.",
        bulletPoints: [
          "Hazardous Material Management",
          "Radiological Technical Services",
          "Healthcare Testing/Infection Control",
        ],
      },
    ],
  },

  // ── EHS Services Page ─────────────────────────────────────
  ehsServices: {
    hero: {
      heading: "SPECIALIZED SOLUTIONS FOR EHS MANAGEMENT",
      subheading: "Protecting the Workforce with Compliance Driven Programs",
    },
    paragraph:
      "Health Systems Sciences offers environmental, health, testing and certification services that are needed in a range of industries and facilities. HSS's expertise extends to from highly technical clean room certifications to OSHA compliance and worker safety. Health Systems Sciences is a comprehensive solutions provider.",
    columns: [
      {
        heading: "EHS Management Services",
        items: [
          "OSHA/EPA Program Reviews, Audits and Surveys",
          "Management Plans and SOP Development",
          "EHS Training",
          "Quality Management Systems (ISO 14001/35001/45001)",
          "Environmental Permiting",
          "Infection Control and Outbreak Investigations",
          "Joint Commission Environment of Care Reviews",
        ],
      },
      {
        heading: "EHS Technical Services",
        items: [
          "Industrial Hygiene Evaluations",
          "Focused OSHA Exposure Evaluations",
          "Radiological Surveys",
          "Fire Damage and Combustion Assessments",
          "Indoor Environmental Quality/Microbial Assessments",
          "Local Exhaust and HVAC Ventilation Evaluations",
        ],
      },
    ],
    closingText:
      "Contact Health Systems Sciences today for more information on specific services offered for you industry or facility.",
    cta: {
      label: "REQUEST MORE INFORMATION",
      href: "/contact-quote",
    },
  },

  // ── Contact / Quote Page ──────────────────────────────────
  contact: {
    heading: "Contact/Quote",
    paragraph:
      "Our team is ready to answer your questions, provide a custom quote, and bring science based solutions to your business or agency.",
    officeDetails:
      "Our corporate office is located at 150 Washington Avenue, Suite 201, Santa Fe, New Mexico 87501, USA.",
    hours: "Monday – Friday, 8:00 AM – 5:00 PM MST",
    careersNote: "Looking to apply for a career with us?",
    careersLink: { label: "View Careers.", href: "/careers" },
    phoneLine: "Phone: 507-594-9395",
    cta: {
      label: "REQUEST QUOTE",
      href: "/contact-quote",
    },
  },

  // ── Careers Page ──────────────────────────────────────────
  careers: {
    hero: {
      heading: "BUILD YOUR FUTURE WITH HSS",
    },
    section: {
      heading: "CAREERS",
      paragraphs: [
        "We're not a typical testing company — and we're not looking for typical people.",
        "We're engineers, technicians, and problem-solvers who take pride in work done right — every airflow, every pressure reading, every certification that safeguards health and performance.",
        "At Health Systems Sciences, we're redefining what excellence means in the built environment. From hospital cleanrooms to research labs, we verify the systems that protect lives and power innovation.",
        "We're growing fast — and we're looking for driven professionals who thrive on precision, accountability, and purpose.",
        "If you believe great work should stand up to inspection, not hide behind buzzwords, you'll fit right in.",
        "No suits. No fluff. Just skilled hands, sharp minds, and a shared commitment to making facilities perform at their best.",
        "Take pride in your craft. Join a team where your work truly matters — to clients, to communities, and to the health of those we serve.",
        "Think you've got what it takes? Explore open roles below.",
      ],
    },
    cta: {
      label: "APPLY NOW",
      href: "/careers/apply-now",
    },
  },

  // ── Download Page ─────────────────────────────────────────
  download: {
    heading: "Download Your Copy",
    paragraph:
      "Download your free copy of what your certifier may not be telling you",
    fields: [
      { name: "name", label: "Name", required: true },
      { name: "email", label: "Email", required: true },
    ],
    submitLabel: "Request a quote",
  },

  // ── Blog Page ─────────────────────────────────────────────
  blog: {
    heading: "BLOG",
    quickLinks: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact/Quote", href: "/contact-quote" },
      { label: "Services", href: "/services" },
    ],
    recentPosts: [
      {
        title:
          "Hazardous Material Management: What It Is and Best Practices for Safety and Compliance",
        href: "/hazardous-material-management-guide",
        date: "February 19, 2026",
        author: "Santiago Sabogal",
        image:
          "https://hssciences.com/wp-content/uploads/2026/02/hazardous-materials-management-1200x614.jpg",
        excerpt:
          "In today's industrial world, hazardous materials are an unavoidable reality. From the cleaning [...]",
      },
      {
        title:
          "Biosafety Cabinets vs. Fume Hoods: Key Differences & Safety",
        href: "/biosafety-cabinets-vs-fume-hoods",
        date: "February 18, 2026",
        author: "Santiago Sabogal",
        image:
          "https://hssciences.com/wp-content/uploads/2026/02/Laboratory_Scientists_Biosafety_Cabinet_Fume_Hood-1200x614.jpg",
        excerpt:
          "Biosafety cabinet vs fume hood. In today's high-risk environments, safety is not just [...]",
      },
      {
        title:
          "Professional Mold Visual Inspection Services: What They Are and Why You Need Them",
        href: "/professional-mold-visual-inspection",
        date: "February 17, 2026",
        author: "Santiago Sabogal",
        image:
          "https://hssciences.com/wp-content/uploads/2026/02/Professional_Mold_Inspection_Heat_Scan-1200x614.jpg",
        excerpt:
          "When it comes to maintaining a healthy home or workplace, few things are [...]",
      },
      {
        title:
          "Mold Testing for Home: A Complete Guide to Identifying and Assessing Mold in Your House",
        href: "/mold-testing-for-homes",
        excerpt:
          "For many homeowners, the phrase \"out of sight, out of mind\" applies to [...]",
      },
      {
        title:
          "Mold Inspection and Testing: What It Is, When You Need It, and What to Expect",
        href: "/mold-inspection-testing-guide",
        excerpt:
          "Finding a patch of fuzzy green or black growth in a corner of [...]",
      },
      {
        title:
          "Industrial Hygiene: What It Is, Why It Matters, and How It Protects Workers",
        href: "/ndustrial-hygiene-workplace-safety",
        excerpt:
          "In the modern world, we spend a significant portion of our lives at [...]",
      },
      {
        title:
          "HEPA Filter Testing: What It Is, When to Test, and How It Works",
        href: "/hepa-filter-testing-guide",
        excerpt:
          "Do you ever think about the air you breathe? Not just outside, but [...]",
      },
      {
        title:
          "HVAC Duct Testing: What It Is and Why It Matters for Indoor Air Quality",
        href: "/hvac-duct-testing",
        excerpt:
          "When we think about the air we breathe inside our offices, schools and [...]",
      },
    ],
  },
} as const;

export type SiteContent = typeof siteContent;
