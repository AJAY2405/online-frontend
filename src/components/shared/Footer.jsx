import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="w-full px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h1 className="text-2xl font-bold text-[#0d22d6] mb-4">
              ONLINE<span className="text-[#07b521]">JOB</span>
            </h1>
            <p className="text-sm text-gray-300 mb-4">
              May your passion for teaching inspire young minds, and may your
              journey as an educator be filled with purpose, patience, and pride.
            </p>
            <p className="text-sm text-gray-300 mb-4">
              The world needs more hearts like yours — ready to shape the future
              with knowledge, kindness, and dedication.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-phone text-blue-400" />
              <span>+91 6262626262</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-envelope text-blue-400" />
              <span>mail@domain.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">F.A.Q</a></li>
              <li><a href="#" className="hover:underline">Cookies Policy</a></li>
              <li><a href="#" className="hover:underline">Terms Of Service</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-3">
              Subscribe to Newsletters
            </h2>
            {/* Newsletter (optional input section here) */}
            {/* <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded text-black bg-blue-100"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Subscribe
              </button>
            </div> */}
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-pink-500 text-lg">
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://x.com/AJAYSAHANI97389"
                className="text-gray-400 hover:text-sky-500 text-lg"
              >
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 text-lg">
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://www.linkedin.com/in/ajay-sahani-464a38298/"
                className="text-gray-400 hover:text-blue-500 text-lg"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
              <i className="fas fa-map-marker-alt text-blue-400" />
              <span>221603, Madhuban, Mau, India</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          © 2025 ONLINE JOB. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
