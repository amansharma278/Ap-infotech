// src/component/pages/servicesData.js
import { FaTools, FaDesktop, FaGlobe, FaMobileAlt, FaCloud, FaTags } from "react-icons/fa";

// Exporting plain data. Icons are components, not JSX.
export const services = [
  {
    id: "hardware",
    title: "Hardware & Networking",
    icon: FaTools,
    items: [
      "Desktop, Laptop & Printer repair and maintenance",
      "Hardware installation & upgrades",
      "Networking solutions (LAN, WAN, Wi-Fi setup)",
      "AMC (Annual Maintenance Contracts) for companies",
    ],
  },
  {
    id: "software",
    title: "Software Solutions",
    icon: FaDesktop,
    items: [
      "OS installation, troubleshooting & virus removal",
      "Customized software development",
      "ERP/CRM development",
      "Database setup, optimization, and support",
    ],
  },
  {
    id: "web",
    title: "Web Development & Designing",
    icon: FaGlobe,
    items: [
      "Modern, responsive website designing",
      "Dynamic database-driven websites",
      "E-commerce solutions",
      "SEO & Digital Marketing",
    ],
  },
  {
    id: "mobile",
    title: "Mobile & Windows Applications",
    icon: FaMobileAlt,
    items: [
      "Android & iOS app development",
      "Windows desktop applications",
      "Cross-platform solutions",
      "Customized apps for agencies & companies",
    ],
  },
  {
    id: "advanced",
    title: "Advanced IT Solutions",
    icon: FaCloud,
    items: [
      "Database servers & cloud solutions",
      "Data security & backup solutions",
      "IT consultation for startups & enterprises",
    ],
  },
  {
    id: "sales",
    title: "Sales & Deals",
    icon: FaTags,
    items: [
      "Wide range of pre-owned laptops at the best price",
      "Customized desktops for every need — from students to gamers",
      "Budget-friendly PCs to high-end professional setups",
    ],
  },
];
