import gymLogo from "../assets/gymSs/logo.png";
//  gym product screenshots
import gymDashboard from "../assets/gymSs/dashboard.png";
import gymDashboard2 from "../assets/gymSs/dashboard2.png";

import clientDetails from "../assets/gymSs/clientDetails.png";
import allClientsList from "../assets/gymSs/allClientsList.png";
import bulkUploadClientsRecords from "../assets/gymSs/bulkUploadClientsRecords.png";
import MembershipPlans from "../assets/gymSs/MembershipPlans.png";
import gymfoxDesktop from "../assets/gymSs/gymfoxDesktop.png";
import clientGrid from "../assets/gymSs/clientGrid.png";

export const products = [
  {
    id: "gym-crm",
    hero: gymfoxDesktop,
    short: "Complete Gym Solution",
    title: "Gym Fox",
    tagline:
      "Manage memberships, track payments, and streamline daily gym operations with a modern platform built for fitness businesses.",
    description:
      "Stop payment leakage, track yearly revenue and pending fees with powerful analytics, automate renewal reminders, and manage your entire gym business effortlessly from one smart dashboard.",
    logo: gymLogo,
    color: "from-blue-600 to-cyan-500",
    features: [
      "Client Registration & Profile",
      "All Clients List (search & filter)",
      "Expired Clients segmentation",
      "Pending Payments tracking",
      "Plan Management & pricing",
      "Quick Plan Renewal",
      "Bulk Upload Members (Excel)",
      "Smart Gender Handling",
      "Smart Plan Detection",
      "Auto Discount Calculation",
      "Dashboard Analytics (12-month)",
      "Subscription Plans & Billing",
    ],
    faq: [
      {
        question: "Is there a free trial?",
        answer:
          "Yes — Gym Fox includes a one-month free trial so gym owners can explore membership, billing, and reporting without any upfront cost.",
      },
      {
        question: "Can I manage multiple branches?",
        answer:
          "Absolutely. Gym Fox supports multi-branch management, allowing you to centralize member data, payments, and performance across each location.",
      },
      {
        question: "Is member data secure?",
        answer:
          "Member details are protected with secure storage practices and access controls, so sensitive gym and client information stays safe.",
      },
      {
        question: "Can I export reports?",
        answer:
          "Yes — you can export reports for payments, renewals, membership status, and attendance to keep your records or share with your team.",
      },
      {
        question: "How does renewal tracking work?",
        answer:
          "Gym Fox automatically tracks expiring plans and pending payments, so you get alerts and renewal summaries to keep member retention on track.",
      },
    ],
    assetFolder: "gymSs",
    domain: "www.gymfox.softwayx.in",
    screenshots: [
      {
        label: "Dashboard Overview",
        img: gymDashboard2,
      },
      {
        label: "Dashboard Overview",
        img: gymDashboard,
      },
      {
        label: "Members List Grid View",
        img: clientGrid,
      },
      {
        label: "Members List",
        img: allClientsList,
      },
      {
        label: "Members Details",
        img: clientDetails,
      },

      {
        label: "Memberships & Plans",
        img: MembershipPlans,
      },
      {
        label: "Client Bulk Upload",
        img: bulkUploadClientsRecords,
      },
    ],
  },

  {
    id: "site-builder",
    title: "Site Craft",
    tagline:
      "Create modern business websites, smart bio pages, and online storefronts with an easy-to-use website builder platform.",
    description:
      "An upcoming website builder platform designed for salons, boutiques, fashion stores, grocery shops, creators, and local businesses. Easily build stunning websites, smart bio links, and product showcases with a modern drag-and-drop experience.",
    icon: "🌐",
    color: "from-purple-600 to-pink-500",
    upcoming: true,
    domain: "Coming Soon",
    features: [
      "Drag & Drop Website Builder",
      "Modern Templates for Local Businesses",
      "Link-in-bio Pages",
      "Mobile Responsive Designs",
      "Custom Branding & Themes",
      "Business Contact Forms",
      "Product & Service Showcase",
      "SEO-Friendly Pages",
      "Social Media Integration",
      "Easy Publishing & Hosting",
    ],
    screenshots: [
      {
        label: "Website Builder",
        bg: "from-purple-900/40 to-pink-900/20",
      },
      {
        label: "Template Library",
        bg: "from-pink-900/40 to-purple-900/20",
      },
      {
        label: "Business Landing Pages",
        bg: "from-violet-900/40 to-purple-900/20",
      },
    ],
  },

  {
    id: "lead-flow",
    title: "Lead Flow",
    tagline:
      "Track leads, manage follow-ups, and streamline your entire sales process with a modern CRM built to help businesses convert more customers efficiently.",
    description:
      "An upcoming lead management software built for growing businesses and sales teams. Track inquiries, organize leads, automate follow-ups, and improve conversions with a clean and powerful CRM experience.",
    icon: "📈",
    color: "from-emerald-600 to-teal-500",
    upcoming: true,
    domain: "Early Access",
    features: [
      "Lead Capture & Tracking",
      "Smart Follow-up Reminders",
      "Sales Pipeline Management",
      "WhatsApp & Email Integration",
      "Lead Status Automation",
      "Team Access & Roles",
      "Client Notes & Activity Timeline",
      "Analytics & Conversion Reports",
      "Custom Lead Sources",
      "Mobile-Friendly Dashboard",
    ],
    screenshots: [
      {
        label: "Lead Dashboard",
        bg: "from-emerald-900/40 to-teal-900/20",
      },
      {
        label: "Sales Pipeline",
        bg: "from-teal-900/40 to-emerald-900/20",
      },
      {
        label: "Lead Analytics",
        bg: "from-green-900/40 to-teal-900/20",
      },
    ],
  },
];
