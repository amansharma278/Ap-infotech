// import React, { useState } from 'react';

// const ContactUsPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//     // Here you would typically send the data to a backend server.
//     alert('Thank you for your message!');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
//       <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 lg:p-16">
        
//         {/* Contact Form Section */}
//         <div className="flex flex-col space-y-8">
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100">Get in Touch</h2>
//           <p className="text-gray-600 dark:text-gray-300">
//             Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.
//           </p>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
//               <input 
//                 type="text" 
//                 id="name" 
//                 name="name" 
//                 value={formData.name} 
//                 onChange={handleChange} 
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
//                 required 
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
//               <input 
//                 type="email" 
//                 id="email" 
//                 name="email" 
//                 value={formData.email} 
//                 onChange={handleChange} 
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
//                 required 
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
//               <textarea 
//                 id="message" 
//                 name="message" 
//                 rows="4" 
//                 value={formData.message} 
//                 onChange={handleChange} 
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
//                 required 
//               />
//             </div>
//             <button 
//               type="submit" 
//               className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Contact Information and Social Links Section */}
//         <div className="flex flex-col space-y-8 md:items-start md:text-left text-center">
//           <div className="flex flex-col space-y-4">
//             <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Contact Information</h3>
//             <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center md:justify-start">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 123 Main Street, Cityville, State 12345
//             </p>
//             <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center md:justify-start">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 contact@example.com
//             </p>
//             <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center md:justify-start">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.293 1.147a1 1 0 00-.41.912v0c.059.183.187.35.356.494l.988.988c.144.17.31.298.494.356v0a1 1 0 00.912-.41l1.147-2.293a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 +1 (555) 123-4567
//             </p>
//           </div>
          
//           <div className="flex flex-col space-y-4">
//             <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Follow Us</h3>
//             <div className="flex space-x-4 justify-center md:justify-start">
//               <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-200">
//                 <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.873v-6.985h-2.54V12h2.54V9.799c0-2.502 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.77l-.443 2.89h-2.327v6.985C18.343 21.128 22 16.991 22 12z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-200">
//                 <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M8.29 20.25c8.73 0 13.49-7.23 13.49-13.49 0-.21 0-.42-.01-.63a9.61 9.61 0 002.34-2.43 9.42 9.42 0 01-2.69.74 4.8 4.8 0 002.1-2.59 9.6 9.6 0 01-3.04 1.16 4.8 4.8 0 00-8.22 4.37A13.62 13.62 0 013.3 5.48a4.8 4.8 0 001.49 6.4 4.77 4.77 0 01-2.16-.6c-.01.02-.01.04-.01.07a4.8 4.8 0 003.85 4.72A4.8 4.8 0 013 16.92c-.15 0-.29-.02-.43-.04a4.8 4.8 0 004.48 3.32z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-200">
//                 <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M16.98 0H7.02C3.14 0 0 3.14 0 7.02v9.96C0 20.86 3.14 24 7.02 24h9.96C20.86 24 24 20.86 24 16.98V7.02C24 3.14 20.86 0 16.98 0zM12 18a6 6 0 110-12 6 6 0 010 12zM12 8a4 4 0 100 8 4 4 0 000-8zM19.74 3.26a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUsPage;

import React from 'react'
import { Youtube, Instagram, Facebook, Twitter } from "lucide-react";
const ContactUsPage = () => {
  return (
        <div className="p-10 bg-gray-100 flex items-center justify-center ">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 ">
        
        {/* Left Side - Contact Info */}
        <div className="p-8 border-r border-gray-200">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <p className="mb-4 text-gray-700">123 Main Street, Cityville, State 12345</p>
          <p className="mb-4 text-gray-700">contact@example.com</p>
          <p className="mb-4 text-gray-700">+91 7827847488</p>
        </div>

        {/* Right Side - Social Media */}
        <div className="p-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-red-600">
              <Youtube size={32} />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500">
              <Instagram size={32} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Facebook size={32} />
            </a>
            <a href="#" className="text-gray-600 hover:text-sky-500">
              <Twitter size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage