// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { services } from "./servicesData";
// // import {
// //   FaTools,
// //   FaDesktop,
// //   FaLaptop,
// //   FaGlobe,
// //   FaMobileAlt,
// //   FaCloud,
// //   FaTags,
// // } from "react-icons/fa";

// // // Example data (make sure you have this or import it)
// // const services = [
// //   {
// //     id: "hardware",
// //     title: "Hardware & Networking",
// //     icon: <FaTools size={22} />,
// //     items: [
// //       "Desktop, Laptop & Printer repair and maintenance",
// //       "Hardware installation & upgrades",
// //       "Networking solutions (LAN, WAN, Wi-Fi setup)",
// //       "AMC (Annual Maintenance Contracts) for companies",
// //     ],
// //   },

// //   {
// //     id: "software",
// //     title: "Software Solutions",
// //     icon: <FaDesktop size={22} />,
// //     items: [
// //       "OS installation, troubleshooting & virus removal",
// //       "Customized software development",
// //       "ERP/CRM development",
// //       "Database setup, optimization, and support",
// //     ],
// //   },

// //   {
// //     id: "web",
// //     title: "Web Development & Designing",
// //     icon: <FaGlobe size={22} />,
// //     items: [
// //       "Modern, responsive website designing",
// //       "Dynamic database-driven websites",
// //       "E-commerce solutions",
// //       "SEO & Digital Marketing",
// //     ],
// //   },
// //   {
// //     id: "mobile",
// //     title: "Mobile & Windows Applications",
// //     icon: <FaMobileAlt size={22} />,
// //     items: [
// //       "Android & iOS app development",
// //       "Windows desktop applications",
// //       "Cross-platform solutions",
// //       "Customized apps for agencies & companies",
// //     ],
// //   },

// //   {
// //     id: "advanced",
// //     title: "Advanced IT Solutions",
// //     icon: <FaCloud size={22} />,
// //     items: [
// //       "Database servers & cloud solutions",
// //       "Data security & backup solutions",
// //       "IT consultation for startups & enterprises",
// //     ],
// //   },

// //   {
// //     id: "sales",
// //     title: "Sales & Deals",
// //     icon: <FaTags size={22} />,
// //     items: [
// //       "Wide range of pre-owned laptops at the best price",
// //       "Customized desktops for every need — from students to gamers",
// //       "Budget-friendly PCs to high-end professional setups",
// //     ],
// //   },
// //   // ... other services
// // ];

// const cardVariant = {
//   hidden: { opacity: 0, y: 18, scale: 0.98 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { type: "spring", stiffness: 120, damping: 14 },
//   },
// };

// export default function Services() {
//   return (
//     // bg-gradient-to-br from-slate-900 to-slate-800
//     //  bg-gradient-to-br from-slate-900 to-slate-800  dark:to-slate-800 rounded-t-[70px]
//     <section className="px-6 md:px-12 bg-white

//  rounded-t-[70px]">

//       <div>
//         <h2 className="mb-10 mt-10 text-5xl md:text-4xl font-extrabold text-center leading-tight text-slate-900 ">
//           Our <span className="text-[#009560]">Services</span>
//         </h2>
//         <p className="mt-3 text-gray  max-w-2xl mx-auto my-5">
//           End-to-end IT solutions — from hardware maintenance to full-stack development and cloud
//           services. Click a card to explore details.
//         </p>
//       </div>
//       <div className="max-w-7xl mx-auto">


//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.15 }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {services.map((s) => (
//             <motion.article
//               key={s.id}
//               variants={cardVariant}
//               whileHover={{ y: -6, scale: 1.01 }}
//               className="relative rounded-2xl p-6 bg-white/80 bg-transparent backdrop-blur-md shadow-md dark:shadow-lg hover:shadow-xl border border-slate-100 dark:border-[#009  560] transition-all duration-300 md-blur opecity-75"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow">
//                   {s.icon}
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-blue-500">{/* dark:text-slate-100 text-slate-900 */}
//                     {s.title}
//                   </h3>
//                   <ul className="mt-3 space-y-2 text-sm text-black ">    {/*//text-slate-600 dark:text-slate-300 */}
//                     {s.items.map((it, idx) => (
//                       <li key={idx} className="flex items-start gap-2">
//                         <span className="mt-1 text-sky-600">•</span>
//                         <span className="leading-tight">{it}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* subtle accent line at bottom */}
//               {/* subtle accent line at bottom with glow */}
//               <div className="absolute left-6 right-6 bottom-4">
//                 {/* Glow layer */}
//                 <div className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent blur-md opacity-75"></div>
//                 {/* Sharp line */}
//                 <div className="h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
//               </div>

//               {/* CTA button */}
//               <div className="mt-6 flex items-center justify-between">
//                 <Link to={`/services/${s.id}`}>

//                   <button
//                     className="inline-flex items-center gap-2 rounded px-3 py-1.5 text-sm font-medium bg-[#009560] border border-sky-100 dark:border-slate-700 hover:bg-sky-100 dark:hover:bg-slate-700 transition text-white"
//                     aria-label={`Learn more about ${s.title}`}
//                   >
//                     Learn more
//                   </button>
//                 </Link>
//                 <span className="text-xs text-slate-400">ID: {s.id}</span>
//               </div>

//             </motion.article>
//           ))}
//         </motion.div>
//       </div>


//     </section>
//   );
// }




import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "./servicesData";

const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } },
};

export default function Services() {
  return (
    <section className="px-6 md:px-12 bg-white rounded-t-[70px]">
      <div>
        <h2 className="mb-10 mt-10 text-5xl md:text-4xl font-extrabold text-center leading-tight text-slate-900">
          Our <span className="text-[#009560]">Services</span>
        </h2>
        <p className="mt-3 text-gray max-w-2xl mx-auto my-5 text-center">
          End-to-end IT solutions — from hardware maintenance to full-stack development and cloud services. Click a card to explore details.
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
              className="relative rounded-2xl p-6 bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow">
                  {React.createElement(s.icon, { size: 22 })}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-500">{s.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-black">
                    {s.items.map((it, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 text-sky-600">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <Link to={`/services/${s.id}`}>
                  <button className="inline-flex items-center gap-2 rounded px-3 py-1.5 text-sm font-medium bg-[#009560] border border-sky-100 hover:bg-sky-100 text-white">
                    Learn more
                  </button>
                </Link>
                <span className="text-xs text-slate-400">ID: {s.id}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
