import React from "react";
import { motion } from "framer-motion";
import profile1 from "../../assets/image.webp";   
import profile2 from "../../assets/image.webp";   
import profile3 from "../../assets/slider3.webp";   

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Business Owner",
    feedback:
      "The team did an excellent job! My website is now fast, modern, and mobile friendly. Highly recommended.",
    image: profile1,
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Freelancer",
    feedback:
      "They fixed my laptop and set up my cloud backup system in no time. Professional and friendly service.",
    image:profile2,
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Startup Founder",
    feedback:
      "Amazing IT consultation — helped scale our infrastructure and secure our databases. Worth every penny!",
    image:
      "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-slate-800  dark:to-slate-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
          What Our Clients Say
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          We value our clients’ feedback and continuously strive to improve.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-md hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-sky-500 shadow-md"
                />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {t.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {t.role}
                </p>
                <p className="mt-4 text-slate-600 dark:text-slate-300 italic">
                  “{t.feedback}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
