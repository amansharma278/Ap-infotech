import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 rounded-t-3xl shadow-lg p-8 md:p-16 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info & Logo */}
        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#" className="text-white text-2xl font-bold mb-4">
            <span className="text-blue-500">AP-Infotech </span>& Cyber Solutions
          </a>
          <p className="text-sm leading-relaxed mb-4 text-gray-400">
            Creating innovative solutions for a better tomorrow.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.04C6.51 2.04 2 6.51 2 12c0 5.49 4.51 9.96 9.96 9.96h-1.92c-5.49 0-9.96-4.47-9.96-9.96 0-5.49 4.47-9.96 9.96-9.96zm2.08 6.78h1.22l-1.92 2.76 1.84 2.46h-1.28l-1.36-1.92-1.28 1.92h-1.28l1.84-2.46-1.92-2.76h1.28l.8 1.12.8-1.12z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6c-.77.34-1.6.56-2.47.66.89-.54 1.58-1.4 1.9-2.42-.83.49-1.74.85-2.7.98-.79-.84-1.92-1.36-3.17-1.36-2.4 0-4.35 1.95-4.35 4.35 0 .34.04.67.11.99-3.62-.18-6.84-1.92-9.01-4.57-.38.65-.59 1.4-.59 2.21 0 1.51.77 2.85 1.94 3.63-.72-.02-1.39-.22-1.98-.55v.06c0 2.11 1.5 3.87 3.49 4.27-.37.1-.76.15-1.16.15-.29 0-.58-.03-.86-.08.55 1.73 2.15 3 4.05 3.04-1.48 1.16-3.34 1.86-5.36 1.86-.35 0-.7-.02-1.04-.06 1.9 1.21 4.15 1.92 6.58 1.92 7.9 0 12.24-6.55 12.24-12.24 0-.19-.01-.39-.01-.58.84-.6 1.57-1.36 2.15-2.22z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 22h-3c-.27 0-.5-.22-.5-.5v-6c0-.27.22-.5.5-.5h3c.27 0 .5.22.5.5v6c0 .28-.23.5-.5.5zm-11 0H6.5c-.27 0-.5-.22-.5-.5v-12c0-.27.22-.5.5-.5h3c.27 0 .5.22.5.5v12c0 .28-.23.5-.5.5zm4.84-13.43c-1.37-1.37-3.59-1.37-4.96 0l-3.5 3.5c-.2.2-.2.5 0 .7.2.2.5.2.7 0l3.5-3.5c.87-.87 2.29-.87 3.16 0l1.84 1.84c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-2.5-2.5zm-5.61 5.61c.2-.2.5-.2.7 0l3.5 3.5c.2.2.2.5 0 .7-.2.2-.5.2-.7 0l-3.5-3.5c-.2-.2-.2-.5 0-.7z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left ">
          <h3 className="text-xl font-semibold text-white mb-4">Product</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Integrations</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Roadmap</a></li>
          </ul>
        </div>

        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Services</a></li>
            
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm leading-relaxed mb-4 text-gray-400" >
            Stay up to date with our latest news and updates.
          </p>
          <form className="flex flex-col md:flex-row gap-2 w-full">
            <input type="email" placeholder="Enter your email" required
                   className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" />
            <button type="submit"
                    className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
        &copy; 2024 AP-Infotech & Cyber Solutions. All Rights Reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer