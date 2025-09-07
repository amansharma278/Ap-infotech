import React, { useEffect, useState } from 'react';

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Co-Founder & CEO',
    bio: 'Jane is a visionary leader with a passion for innovation. She has over 15 years of experience in the tech industry, driving product strategy and growth.',
    image: 'https://placehold.co/300x300/F0F4F8/60A5FA?text=Jane',
  },
  {
    name: 'John Smith',
    role: 'Co-Founder & CTO',
    bio: 'John is a seasoned engineer and a technical expert. He leads our development team, ensuring our products are built with cutting-edge technology and robust architecture.',
    image: 'https://placehold.co/300x300/F0F4F8/60A5FA?text=John',
  },
  {
    name: 'Emily Chen',
    role: 'Head of Marketing',
    bio: 'Emily is a creative and results-driven marketer. She is responsible for our brand identity and digital presence, connecting us with our audience worldwide.',
    image: 'https://placehold.co/300x300/F0F4F8/60A5FA?text=Emily',
  },
];

const milestones = [
  { year: '2015', event: 'Company Founded' },
  { year: '2017', event: 'First Major Product Launch' },
  { year: '2020', event: 'Expanded to Global Markets' },
  { year: '2023', event: 'Recognized as an Industry Leader' },
];

const About = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="about-section" className="bg-gray-50 text-gray-800 min-h-screen font-sans antialiased">
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        `}
      </style>
      <header className="py-16 text-center bg-white shadow-md rounded-b-3xl">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-4 fade-in">About Our Company</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto fade-in delay-200">
            We are a one-stop IT solutions company specializing in desktop, laptop, and printer services as well as custom software and application development. Based in Delhi NCR, we provide end-to-end IT support for individuals, startups, and enterprises.
          </p>
        </div>
      </header>

      <main className="py-16 px-4">
        {/* Our Mission */}
        <section className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 ${inView ? 'fade-in' : 'opacity-0'}`}>
          <div className="md:order-1">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 slide-in-left delay-400">Our Mission</h2>
            <p className="text-lg text-gray-600 slide-in-left delay-500">
              Our mission is to deliver reliable, fast, and affordable IT services that help businesses grow in today’s digital world.
            </p>
          </div>
          <div className="md:order-2">
            <img src="https://placehold.co/600x400/DDE4ED/4A5568?text=Our+Mission" alt="Our Mission" className="w-full rounded-2xl shadow-xl slide-in-right delay-400" />
          </div>
        </section>

        {/* Our Team */}
        <section className="max-w-7xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 slide-in-left delay-500">Meet Our Team</h2>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${inView ? 'fade-in' : 'opacity-0'}`}>
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
                <img src={member.image} alt={member.name} className="w-36 h-36 rounded-full object-cover mb-4 ring-4 ring-blue-500 ring-opacity-50" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Journey & Milestones */}
        <section className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 slide-in-right delay-500">Our Journey</h2>
          <div className={`relative px-4 sm:px-12 py-6 ${inView ? 'fade-in' : 'opacity-0'}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1 bg-gray-300 rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col items-center text-center z-10">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full mb-2 shadow-lg">
                    <span className="font-semibold text-lg">{milestone.year}</span>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-4 mt-4 transition-all duration-300 hover:scale-105">
                    <p className="text-sm font-medium text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};


export default About;