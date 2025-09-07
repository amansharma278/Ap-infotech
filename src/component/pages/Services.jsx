import React from "react";
import { motion } from "framer-motion";
import {
  FaTools,
  FaDesktop,
  FaLaptop,
  FaGlobe,
  FaMobileAlt,
  FaCloud,
  FaTags,
} from "react-icons/fa";

// Example data (make sure you have this or import it)
const services = [
  {
    id: "hardware",
    title: "Hardware & Networking",
    icon: <FaTools size={22} />,
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
    icon: <FaDesktop size={22} />,
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
    icon: <FaGlobe size={22} />,
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
    icon: <FaMobileAlt size={22} />,
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
    icon: <FaCloud size={22} />,
    items: [
      "Database servers & cloud solutions",
      "Data security & backup solutions",
      "IT consultation for startups & enterprises",
    ],
  },

  {
    id: "sales",
    title: "Sales & Deals",
    icon: <FaTags size={22} />,
    items: [
      "Wide range of pre-owned laptops at the best price",
      "Customized desktops for every need — from students to gamers",
      "Budget-friendly PCs to high-end professional setups",
    ],
  },
  // ... other services
];

const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export default function Services() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-slate-900 to-slate-800  dark:to-slate-800 rounded-t-[70px]">

      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center leading-tight text-slate-900 dark:text-slate-100">
          Our Services
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto my-5">
          End-to-end IT solutions — from hardware maintenance to full-stack development and cloud
          services. Click a card to explore details.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">


        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.article
              key={s.id}
              variants={cardVariant}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative rounded-2xl p-6 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md shadow-md dark:shadow-lg hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {s.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {s.items.map((it, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 text-sky-500">•</span>
                        <span className="leading-tight">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* subtle accent line at bottom */}
              <div className="absolute left-6 right-6 bottom-4 h-0.5 bg-gradient-to-r from-transparent via-sky-300 to-transparent rounded" />

              {/* CTA button */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  className="inline-flex items-center gap-2 rounded px-3 py-1.5 text-sm font-medium bg-sky-50 bg-[#009560] border border-sky-100 dark:border-slate-700 hover:bg-sky-100 dark:hover:bg-slate-700 transition text-white"
                  aria-label={`Learn more about ${s.title}`}
                >
                  Learn more
                </button>
                <span className="text-xs text-slate-400">ID: {s.id}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom promo / quick contact */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.15 }}
          className="mt-12 rounded-2xl p-6 bg-gradient-to-r from-white to-sky-50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700 shadow-inner"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                Ready to get started?
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Request a quote or book an inspection today.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium bg-sky-600 text-white shadow hover:scale-[1.01] transition"
              >
                Contact Us
              </a>
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium border border-slate-200 dark:border-slate-700"
              >
                View Deals
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
