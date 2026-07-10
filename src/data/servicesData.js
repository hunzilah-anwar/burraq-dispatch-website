// =====================================================================================
// ---- Step Deck & Flatbed ----
import StepDeckImg from "../assets/Step-Deck-1-Service.jpg";
import StepDeckGallery1 from "../assets/step-deck-gallery-1.webp";
import StepDeckGallery2 from "../assets/step-deck-gallery-2.webp";
import StepDeckGallery3 from "../assets/step-deck-gallery-3.webp";
import StepDeckGallery4 from "../assets/step-deck-gallery-4.webp";

// ---- Reefer ----
import ReeferImg from "../assets/Reefer-2.jpg";
import ReeferGallery1 from "../assets/reefer-gallery-1.webp";
import ReeferGallery2 from "../assets/reefer-gallery-2.webp";
import ReeferGallery3 from "../assets/reefer-gallery-3.webp";
import ReeferGallery4 from "../assets/reefer-gallery-4.webp";
import ReeferGallery5 from "../assets/reefer-gallery-5.webp";

// ---- Fleet Owner ----
import FleetOwnerImg from "../assets/Fleet-owner-1.jpg";
import FleetOwnerGallery1 from "../assets/fleet-owner-gallery-1.webp";
import FleetOwnerGallery2 from "../assets/fleet-owner-gallery-2.webp";
import FleetOwnerGallery3 from "../assets/fleet-owner-gallery-3.webp";

// ---- Hot Shot ----
import HotShotImg from "../assets/Hot-shot-1.jpg";
import HotShotGallery1 from "../assets/hot-shot-gallery-1.webp";
import HotShotGallery2 from "../assets/hot-shot-gallery-2.webp";
import HotShotGallery3 from "../assets/hot-shot-gallery-3.webp";
import HotShotGallery4 from "../assets/hot-shot-gallery-4.webp";

// ---- Dry Van ----
import DryVanImg from "../assets/dry-van-orange.webp";
import DryVanGallery1 from "../assets/dry-van-gallery-1.webp";
import DryVanGallery2 from "../assets/dry-van-gallery-2.webp";
import DryVanGallery3 from "../assets/dry-van-gallery-3.webp";

export const servicesData = [
  {
    id: 1,
    slug: "step-deck-flatbed-dispatch",
    title: "Step Deck & Flatbed Dispatch",
    image: StepDeckImg,
    gallery: [StepDeckGallery1, StepDeckGallery2, StepDeckGallery3, StepDeckGallery4],
    shortDescription:
      "High-paying step deck and flatbed loads with minimal deadhead miles.",
    heroTitle: "Step Deck & Flatbed Dispatch Services USA",
    heroSubtitle:
      "Our AI-powered step deck dispatch service matches you with high-paying freight, minimizes empty miles, and handles permits and paperwork so you keep rolling profitably. You focus on driving — we handle the hunt.",
    description:
      "Our step deck dispatching service connects you with high paying loads tailored for your equipment. We handle negotiations, paperwork, and route optimization, ensuring minimal deadhead miles. With 24/7 support and real-time tracking, your hauls stay profitable and stress-free. Focus on driving while we secure the best freight for you. Our step deck  service connects you with high paying loads tailored for your equipment. We handle negotiations, paperwork, and route optimization. With 24/7 support and real time tracking your hauls stay profitable every time.",
    whatIsSection: {
      title: "What Are Step Deck & Flatbed Trailers? A Quick Guide",
      intro:
        "You need the right trailer for the job. Step deck and flatbed trailers both handle open-deck freight, but they suit different loads.",
      items: [
        {
          heading: "Standard Flatbed Trailers",
          text:
            "Flatbed trailers feature a single-level deck, roughly 5 feet from the ground. They handle wide or heavy freight easily, with side rails and stake pockets to secure loads using chains, tarps, and straps — great for lumber, steel, or pipe.",
        },
        {
          heading: "Step Deck Trailers (Drop-Deck Design)",
          text:
            "Step deck trailers have two levels — a higher front deck and a lower rear deck. Tall items load on the lower deck, keeping many loads under legal height limits without extra permits.",
        },
      ],
    },
    comparisonTable: {
      title: "Step Deck vs. Flatbed: Key Differences",
      columns: ["Feature", "Step Deck Trailer", "Flatbed Trailer"],
      rows: [
        ["Deck Design", "Two levels (drop-deck)", "Single level"],
        ["Load Height Clearance", "Higher (up to 10 ft on lower deck)", "Lower (about 5 ft deck height)"],
        ["Best For", "Tall loads (machinery, equipment)", "Wide/heavy loads (lumber, steel)"],
        ["Permit Needs", "Fewer for height", "More for oversize, often"],
        ["Common Use", "Construction gear, tractors", "Building materials, pipes"],
      ],
    },
    features: [
      "AI-Powered Load Matching",
      "Dedicated Personal Dispatcher",
      "Oversize/Overweight Permit Filing",
      "Route Optimization & Planning",
      "Deadhead Mile Reduction (up to 25%)",
      "24/7 Support & Real-Time Tracking",
      "Rate & Accessorial Negotiation (Detention, Tarps, TONU, Lumper Fees)",
      "DOT Compliance Handling",
    ],
    benefits: [
      "More time behind the wheel",
      "More money (net gain after cut)",
      "Eliminate deadhead miles & minimize downtime",
      "Maximize earnings with high-paying, consistent loads",
      "No hidden costs or long-term contracts",
      "Nationwide coverage across the lower 48 states",
    ],
    process: [
      { step: "Onboarding", text: "Send your docs — MC, authority, insurance. We get you set up fast, usually same day or next." },
      { step: "Load Sourcing", text: "Our AI scans thousands of loads instantly, and your dispatcher picks the best matches for your truck and lanes." },
      { step: "Negotiation", text: "We push hard for top linehaul rates plus every accessorial you deserve: detention, tarps, TONU, lumper fees." },
      { step: "Permits & Paperwork", text: "We file oversize/overweight permits, plan legal routes, and handle DOT compliance so you don't miss a beat." },
      { step: "On-Road Support", text: "24/7 support keeps you covered through breakdowns, delays, or last-minute changes." },
      { step: "Payment", text: "Quick-pay factoring gets funds in your account fast after delivery — no waiting weeks." },
    ],
    pricing: {
      fee: "3% flat fee",
      note:
        "No hidden extras, no surprise charges — just a straightforward fixed percentage that covers load finding, rate negotiation, permit help, 24/7 support, and paperwork.",
      comparisonTable: {
        columns: ["Company Type", "Typical Fee", "Hidden Costs", "Contracts"],
        rows: [
          ["Standard Dispatch", "5-8%", "Often yes", "Yes"],
          ["Flat Weekly Fee", "$200-500/wk", "No percentage", "Sometimes"],
          ["Our Dispatch Service", "3% flat", "None", "No"],
        ],
      },
    },
    faqs: [
      {
        question: "What's the difference between step deck & flatbed?",
        answer:
          "Step deck has a drop for taller loads. Flatbed is a single level trailer best for wide items.",
      },
      {
        question: "Do you handle oversize permits?",
        answer: "Yes. We file state permits and track digital changes.",
      },
      {
        question: "How does your fee work?",
        answer: "A flat percentage of gross load pay — no hidden charges.",
      },
      {
        question: "Do you work with owner-operators or fleets?",
        answer: "Both. We build custom plans for each.",
      },
    ],
  },

  {
    id: 2,
    slug: "reefer-dispatch",
    title: "Reefer Dispatch",
    image: ReeferImg,
    gallery: [ReeferGallery1, ReeferGallery2, ReeferGallery3, ReeferGallery4, ReeferGallery5],
    shortDescription:
      "Temperature-controlled precision dispatching for refrigerated freight.",
    heroTitle: "Reefer Dispatching Services",
    heroSubtitle:
      "Temperature-controlled precision for your reefer loads. We provide premium refrigerated freight fast and optimize temperature-sensitive routes, with 24/7 support to protect your cargo and your profits.",
    description:
      "Chilled goods demand temp logs. We book Our reefer dispatching service ensures temperature-sensitive loads are handled with precision. We match you with premium refrigerated freight, manage compliance, and streamline communication with brokers. Our dedicated dispatchers work around the clock to keep your reefer loads on schedule. Maximize earnings with our expert load planning. hauls from California farms to East Coast grocers, holding 32-40°F steady. Temperature controlled precision for yourreefer loads. We provide premium refrigerated freight fast and optimize temperature sensitive routes. Our team provides 24/7 support to protect your cargo and profits.",
    whatIsSection: {
      title: "What Is Reefer Dispatch?",
      intro:
        "Refrigerated (reefer) trailers haul perishable freight — produce, dairy, meat, pharmaceuticals — that must stay within a tight temperature range from pickup to delivery.",
      items: [
        {
          heading: "Why It's Different",
          text:
            "Reefer freight is time- and temperature-sensitive. A missed pickup window or a broken reefer unit can mean a spoiled, unpaid load — so scheduling and communication matter more than with dry freight.",
        },
        {
          heading: "How We Help",
          text:
            "We match you with brokers and shippers who understand reefer requirements, monitor temperature compliance (32–40°F), and plan routes that keep transit times short and predictable.",
        },
      ],
    },
    features: [
      "Premium Refrigerated Freight Matching",
      "Temperature Compliance Monitoring (32-40°F)",
      "Optimized Temperature-Sensitive Routing",
      "Broker Communication & Negotiation",
      "24/7 Dispatcher Support",
      "Load Planning for Maximum Earnings",
    ],
    benefits: [
      "Consistent, high-paying refrigerated loads",
      "Reduced spoilage risk with precise scheduling",
      "Round-the-clock monitoring and support",
      "Nationwide reefer lane access",
    ],
    process: [
      { step: "Onboarding", text: "Send your docs — MC, authority, insurance, reefer unit specs. We get you set up fast." },
      { step: "Load Sourcing", text: "We scan reefer-specific lanes and match loads to your equipment and preferred routes." },
      { step: "Negotiation", text: "We negotiate top rates plus detention and layover pay where it applies." },
      { step: "Compliance", text: "We track temperature logs and handle DOT paperwork so you stay compliant." },
      { step: "On-Road Support", text: "24/7 support for delays, reefer unit issues, or last-minute reroutes." },
      { step: "Payment", text: "Fast invoicing and quick-pay factoring after delivery." },
    ],
    pricing: {
      fee: "Fixed percentage fee",
      note: "No hidden costs, no long contracts — transparent flat-rate dispatching.",
    },
    faqs: [
      {
        question: "What temperature range do you support?",
        answer: "We work with standard reefer ranges of 32-40°F, and can accommodate frozen or specialty temp requirements.",
      },
      {
        question: "Do you monitor temperature during transit?",
        answer: "Yes — we track reefer unit performance and stay in contact with you to catch issues early.",
      },
      {
        question: "How does your fee work?",
        answer: "A flat percentage of gross load pay — no hidden charges.",
      },
    ],
  },

  {
    id: 3,
    slug: "fleet-owner-vehicle-management",
    title: "Fleet Owner & Vehicle Management",
    image: FleetOwnerImg,
    gallery: [FleetOwnerGallery1, FleetOwnerGallery2, FleetOwnerGallery3],
    shortDescription:
      "Complete fleet dispatch and vehicle management for growing carriers.",
    heroTitle: "Fleet Owner & Vehicle Management Services",
    heroSubtitle:
      "Scale your fleet without adding office staff. We coordinate loads across every truck, track performance, and handle the paperwork so growth doesn't mean chaos.",
    description:
      "Managing multiple trucks means juggling dispatch, compliance, and driver coordination all at once. Our fleet owner and vehicle management service takes that weight off your shoulders — coordinating loads across your entire fleet, tracking vehicle performance, and handling paperwork so you can scale your operation without adding office staff.",
    whatIsSection: {
      title: "What Is Fleet Management Dispatch?",
      intro:
        "As you add trucks, dispatch, compliance, and admin work multiply fast. Fleet management dispatch centralizes all of it under one team.",
      items: [
        {
          heading: "One Point of Contact",
          text:
            "Instead of juggling dispatch calls for each truck separately, you get one dedicated team coordinating your whole fleet's loads, routes, and schedules.",
        },
        {
          heading: "Built to Scale",
          text:
            "Whether you run 2 trucks or 20, the same systems — load matching, IFTA reporting, compliance tracking — scale with you without needing to hire in-house staff.",
        },
      ],
    },
    features: [
      "Multi-Truck Load Coordination",
      "Fleet-Wide Route & Schedule Optimization",
      "Driver & Vehicle Performance Tracking",
      "IFTA Reporting & DOT Compliance",
      "Centralized Paperwork & Invoicing",
      "Scalable Support as Your Fleet Grows",
    ],
    benefits: [
      "Scale your fleet without adding office staff",
      "Predictable, steady cash flow",
      "Reduced downtime across all trucks",
      "One dedicated point of contact for your whole fleet",
    ],
    process: [
      { step: "Onboarding", text: "Send fleet documents — MC, authority, insurance, and truck/trailer specs for each unit." },
      { step: "Load Sourcing", text: "We coordinate loads across your whole fleet to minimize deadhead and overlapping routes." },
      { step: "Negotiation", text: "We negotiate rates and accessorials for every truck, not just one at a time." },
      { step: "Compliance & Reporting", text: "IFTA reporting, DOT compliance, and centralized invoicing handled for the entire fleet." },
      { step: "On-Road Support", text: "24/7 support across every truck in your fleet." },
      { step: "Payment", text: "Consolidated, predictable invoicing and quick-pay options fleet-wide." },
    ],
    pricing: {
      fee: "Fixed percentage fee",
      note: "Custom plans available for small fleets and growing carriers.",
    },
    faqs: [
      {
        question: "How many trucks do I need to qualify for fleet management?",
        answer: "We work with fleets of any size — from 2 trucks to 20+ — with custom plans as you grow.",
      },
      {
        question: "Can you handle IFTA reporting?",
        answer: "Yes, IFTA reporting and DOT compliance are included as part of fleet management.",
      },
    ],
  },

  {
    id: 4,
    slug: "hot-shot-dispatch",
    title: "Hot Shot / Power-Only Dispatch",
    image: HotShotImg,
    gallery: [HotShotGallery1, HotShotGallery2, HotShotGallery3, HotShotGallery4],
    shortDescription:
      "Fast, flexible dispatch for urgent, time-sensitive small loads.",
    heroTitle: "Hot Shot & Power-Only Dispatch Services",
    heroSubtitle:
      "Fast and flexible hot shot dispatching for urgent, small loads and quick turns. We secure priority freight and handle every load from booking to payment — so you stay busy and paid every day.",
    description:
      "Our hotshot and power-only dispatch service delivers fast, flexible solutions for smaller trucks and owner-operators. We secure high-value, time-sensitive loads while handling all logistics and paperwork. With nationwide coverage, we keep your rig moving and profitable. Trust us to power your hotshot success. Fast and flexible hot shot dispatching for urgent small loads and quick turns. We secure priority freight and handle every load from booking to payment. Our team provides 24/7 support so you stay busy and paid every day.",
    whatIsSection: {
      title: "What Is Hot Shot / Power-Only Dispatch?",
      intro:
        "Hot shot trucking uses smaller, faster rigs to move time-critical or smaller freight loads — often on short notice.",
      items: [
        {
          heading: "Power-Only Explained",
          text:
            "Power-only loads mean you supply the tractor while the trailer is already loaded and waiting — reducing wait time and boosting turnaround.",
        },
        {
          heading: "Why Speed Matters",
          text:
            "Hot shot freight pays a premium for urgency. Fast booking-to-payment turnaround keeps your rig earning instead of waiting on paperwork.",
        },
      ],
    },
    features: [
      "Priority & Time-Sensitive Load Sourcing",
      "Fast Booking-to-Payment Turnaround",
      "Nationwide Load Coverage",
      "24/7 Dispatcher Support",
      "Quick-Pay Factoring (24-48 hours)",
      "Full Logistics & Paperwork Handling",
    ],
    benefits: [
      "Stay busy and paid every day",
      "Quick turnaround on urgent freight",
      "No forced dispatch — you choose your loads",
      "Ideal for small trucks and owner-operators",
    ],
    process: [
      { step: "Onboarding", text: "Send your docs and trailer/truck info — usually set up same day." },
      { step: "Load Sourcing", text: "We prioritize urgent, high-value freight that matches your truck size and lanes." },
      { step: "Negotiation", text: "We push for premium rates on time-sensitive loads." },
      { step: "Paperwork", text: "We handle booking paperwork so you can move fast." },
      { step: "On-Road Support", text: "24/7 support to keep urgent loads on schedule." },
      { step: "Payment", text: "Quick-pay factoring gets you paid in 24-48 hours." },
    ],
    pricing: {
      fee: "Fixed percentage fee",
      note: "No hidden extras — flat, transparent pricing.",
    },
    faqs: [
      {
        question: "Do I have to take every load you send?",
        answer: "No — there's no forced dispatch. You choose the loads that work for you.",
      },
      {
        question: "How fast do I get paid?",
        answer: "With quick-pay factoring, funds typically arrive in 24-48 hours after delivery.",
      },
    ],
  },

  {
    id: 5,
    slug: "dry-van-dispatch",
    title: "Dry Van Dispatch",
    image: DryVanImg,
    gallery: [DryVanGallery1, DryVanGallery2, DryVanGallery3],
    shortDescription:
      "Consistent, high-paying dry van loads across all 48 states.",
    heroTitle: "Dry Van Dispatch Services",
    heroSubtitle:
      "Reliable dry van dispatching that keeps your trailer full and rolling. We match you with consistent, high-paying loads, cut empty miles to almost zero, and handle every detail so you drive worry-free.",
    description:
      "Our dry van dispatching service pairs you with consistent, high-paying loads across the USA. We manage broker negotiations, load tracking, and documentation, so you stay on the road. With AI-driven load matching and 24/7 support, we boost your efficiency. Drive smarter with our seamless dry van solutions. Reliable, caring dry van dispatching that keeps your trailer full and rolling. We match you with consistent high paying loads cut empty miles to almost zero and take care of every detail so you drive worry free.",
    whatIsSection: {
      title: "What Is Dry Van Dispatch?",
      intro:
        "Dry van trailers are fully enclosed box trailers — the most common trailer type in trucking, used for general, non-perishable freight.",
      items: [
        {
          heading: "Why Dry Van Is Popular",
          text:
            "Dry van freight is the most widely available load type, meaning steadier lane options and fewer empty-mile gaps between loads.",
        },
        {
          heading: "How We Maximize Your Trailer",
          text:
            "AI-driven load matching lines up your next load before you've dropped the current one, cutting empty miles to near zero.",
        },
      ],
    },
    features: [
      "AI-Driven Load Matching",
      "Consistent High-Paying Load Access",
      "Broker Negotiation & Rate Optimization",
      "Load Tracking & Documentation",
      "Near-Zero Empty Mile Planning",
      "24/7 Support",
    ],
    benefits: [
      "Trailer stays full and rolling",
      "Cut empty miles to almost zero",
      "Every detail handled for a worry-free drive",
      "Nationwide dry van lane coverage",
    ],
    process: [
      { step: "Onboarding", text: "Send your docs — MC, authority, insurance. Fast setup, usually same day." },
      { step: "Load Sourcing", text: "AI scans thousands of dry van loads and matches them to your preferred lanes." },
      { step: "Negotiation", text: "We negotiate top rates and detention pay where applicable." },
      { step: "Documentation", text: "We track load documents and handle paperwork end to end." },
      { step: "On-Road Support", text: "24/7 support for delays, detours, or reroutes." },
      { step: "Payment", text: "Fast invoicing with optional quick-pay factoring." },
    ],
    pricing: {
      fee: "Fixed percentage fee",
      note: "Flat, transparent pricing with no hidden charges or long contracts.",
    },
    faqs: [
      {
        question: "How do you keep empty miles low?",
        answer: "AI-driven load matching lines up backhauls in advance, keeping your trailer moving with minimal gaps.",
      },
      {
        question: "Do you cover all 48 states?",
        answer: "Yes — nationwide dry van lane coverage across the lower 48.",
      },
    ],
  },
];