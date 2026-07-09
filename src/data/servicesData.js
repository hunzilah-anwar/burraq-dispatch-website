import StepDeckImg from "../assets/Step-Deck-1-Service.jpg";
import ReeferImg from "../assets/Reefer-2.jpg";
import FleetOwnerImg from "../assets/Fleet-owner-1.jpg";
import HotShotImg from "../assets/Hot-shot-1.jpg";
import DryVanImg from "../assets/dry-van-orange.webp";

// NOTE: Image file names above are placeholders matching the new service
// names. Please add the actual images in src/assets with these exact names
// (or update the import paths) before using this file.

export const servicesData = [
  {
    id: 1,
    slug: "step-deck-flatbed-dispatch",
    title: "Step Deck & Flatbed Dispatch",
    image: StepDeckImg,
    shortDescription:
      "High-paying step deck and flatbed loads with minimal deadhead miles.",
    heroTitle: "Step Deck & Flatbed Dispatch Services USA",
    description:
      "Step deck load dispatch comes with its own headaches — tall loads that don't fit standard trailers, permit hassles, securement worries, and brokers who lowball rates or leave you deadheading. We tailor our dispatch service to your setup, sourcing steady freight like heavy machinery, construction material, and oversize hauls. We negotiate fair rates, manage permits, and handle compliance so you can focus on driving while we handle the hunt.",
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
    pricing: {
      fee: "3% flat fee",
      note:
        "No hidden extras, no surprise charges — just a straightforward fixed percentage that covers load finding, rate negotiation, permit help, 24/7 support, and paperwork.",
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
    ],
  },

  {
    id: 2,
    slug: "reefer-dispatch",
    title: "Reefer Dispatch",
    image: ReeferImg,
    shortDescription:
      "Temperature-controlled precision dispatching for refrigerated freight.",
    heroTitle: "Reefer Dispatching Services",
    description:
      "Chilled goods demand strict temperature logs and tight scheduling. Our reefer dispatching service ensures temperature-sensitive loads are handled with precision — matching you with premium refrigerated freight, managing compliance, and streamlining broker communication. From California farms to East Coast grocers, we keep your reefer loads holding steady at 32-40°F and on schedule, every time.",
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
    pricing: {
      fee: "Fixed percentage fee",
      note: "No hidden costs, no long contracts — transparent flat-rate dispatching.",
    },
  },

  {
    id: 3,
    slug: "fleet-owner-vehicle-management",
    title: "Fleet Owner & Vehicle Management",
    image: FleetOwnerImg,
    shortDescription:
      "Complete fleet dispatch and vehicle management for growing carriers.",
    heroTitle: "Fleet Owner & Vehicle Management Services",
    description:
      "Managing multiple trucks means juggling dispatch, compliance, and driver coordination all at once. Our fleet owner and vehicle management service takes that weight off your shoulders — coordinating loads across your entire fleet, tracking vehicle performance, and handling paperwork so you can scale your operation without adding office staff.",
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
    pricing: {
      fee: "Fixed percentage fee",
      note: "Custom plans available for small fleets and growing carriers.",
    },
  },

  {
    id: 4,
    slug: "hot-shot-dispatch",
    title: "Hot Shot / Power-Only Dispatch",
    image: HotShotImg,
    shortDescription:
      "Fast, flexible dispatch for urgent, time-sensitive small loads.",
    heroTitle: "Hot Shot & Power-Only Dispatch Services",
    description:
      "Our hot shot and power-only dispatch service delivers fast, flexible solutions for smaller trucks and owner-operators. We secure high-value, time-sensitive loads while handling all logistics and paperwork from booking to payment. With nationwide coverage, we keep your rig moving and profitable, every day.",
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
    pricing: {
      fee: "Fixed percentage fee",
      note: "No hidden extras — flat, transparent pricing.",
    },
  },

  {
    id: 5,
    slug: "dry-van-dispatch",
    title: "Dry Van Dispatch",
    image: DryVanImg,
    shortDescription:
      "Consistent, high-paying dry van loads across all 48 states.",
    heroTitle: "Dry Van Dispatch Services",
    description:
      "Our dry van dispatching service pairs you with consistent, high-paying loads across the USA. We manage broker negotiations, load tracking, and documentation so you stay on the road. With AI-driven load matching and 24/7 support, we cut empty miles to almost zero and take care of every detail so you drive worry-free.",
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
    pricing: {
      fee: "Fixed percentage fee",
      note: "Flat, transparent pricing with no hidden charges or long contracts.",
    },
  },
];