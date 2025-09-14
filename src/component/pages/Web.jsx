import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Web() {
  const features = [
    "Responsive and Mobile-First Design",
    "Performance Optimization",
    "E-commerce Solutions",
    "API Integration and Custom Backends",
    "SEO-Friendly Development",
    "Ongoing Maintenance & Support",
  ];

  const packages = [
    {
      title: "Starter Package",
      price: "$499",
      details: ["1-5 Pages", "Responsive Design", "Basic SEO", "1 Month Support"],
    },
    {
      title: "Business Package",
      price: "$1499",
      details: ["Up to 15 Pages", "Custom Design", "Advanced SEO", "E-commerce Integration", "3 Months Support"],
    },
    {
      title: "Enterprise Package",
      price: "$2999",
      details: ["Unlimited Pages", "Full Customization", "SEO & Analytics", "API Integration", "12 Months Support"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Web Development
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
        >
          We build high-performance, scalable, and visually engaging websites tailored to your business goals.
        </motion.p>
        <button className="px-6 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:bg-gray-100 transition">
          Start Your Project
        </button>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Choose Our Web Development?</h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                <span className="text-gray-700 text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1722945683602-fa3b05086316?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Web Development"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Packages Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Packages</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 bg-gray-50"
              >
                <h3 className="text-2xl font-semibold text-gray-900">{pkg.title}</h3>
                <p className="text-3xl font-bold text-blue-600">{pkg.price}</p>
                <ul className="space-y-2 text-gray-700">
                  {pkg.details.map((detail, i) => (
                    <li key={i}>• {detail}</li>
                  ))}
                </ul>
                <button className="mt-4 w-full px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Start Your Web Development Journey Today
        </motion.h2>
        <button className="px-6 py-3 rounded-xl bg-white text-purple-700 font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
