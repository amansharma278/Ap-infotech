import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className=' mt-10 flex flex-col px-4'>
      <h1 className='text-5xl md:text-5xl lg:text-[90px] pb-6 gradient-title text-center'> "Complete IT Hardware & Software Solutions for Your Business"</h1>
      <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto mt-8'>We are dedicated to delivering reliable and affordable IT solutions that drive <span className='text-[#1FA585]'> business growth, enhance performance,</span>  and create lasting value in the digital world</p>
      <div className='flex justify-center'>
  <Link to="/about">
    <button className="bg-black text-white px-5 py-2 rounded-sm hover:bg-[#44444E] transition duration-300 mb-2">
      Get Started
    </button>
  </Link>
</div>

    </div>
  )
}

export default Home