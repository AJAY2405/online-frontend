import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h1 className="text-2xl font-bold text-[#0d22d6] mb-4">
            ONLINE<span className="text-[#07b521]">JOB</span>
          </h1>
          <p className="text-sm text-gray-300 mb-6">
            May your passion for teaching inspire young minds, and may your
            journey as an educator be filled with purpose, patience, and pride.
          </p>
          <p className="text-sm text-gray-300 mb-6">
            The world needs more hearts like yours — Ready to shape the future
            with knowledge, kindness, and dedication.
          </p>
          <div className="flex items-center space-x-2 mb-2">
            <i className="fas fa-phone text-blue-400" />
            <span>+91 6262626262</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-envelope text-blue-400" />
            <span>mail@domain.com</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-blue-400 mb-2">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                F.A.Q
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookies Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms Of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold text-blue-400 mb-2">
            Subscribe To Newsletters
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-2 mb-4">
            {/* <input
              type="email"
              placeholder="Your email id here"
              className="w-full px-3 py-2 rounded text-black focus:outline-none bg-blue-100 hover:bg-white"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">
              Subscribe
            </button> */}
          </div>
          <div className="flex space-x-15 mt-4">
            <a href="#" className="text-gray-400 hover:text-yellow-800">
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://x.com/AJAYSAHANI97389"
              className="text-gray-400 hover:text-yellow-800"
            >
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-800">
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-sahani-464a38298/"
              className="text-gray-400 hover:text-yellow-800 "
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <div className="mt-4 flex items-center space-x-2 text-sm text-gray-400 ">
            <i className="fas fa-map-marker-alt text-blue-400" />
            <span>221603, Madhuban, Mau, India</span>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-10">
        © 2025 ONLINE JOB. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
