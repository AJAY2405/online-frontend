import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 w-full">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">

        <h1 className="text-2xl font-bold text-[#0d22d6]">
          ONLINE<span className="text-[#07b521]">JOB</span>
        </h1>

        <p className="text-sm text-gray-300 max-w-xl mx-auto">
          May your passion for teaching inspire young minds and shape the future
          with knowledge and kindness.
        </p>

        <div className="flex justify-center gap-6 text-gray-400 text-lg">
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="https://x.com/AJAYSAHANI97389"><i className="fab fa-twitter" /></a>
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="https://www.linkedin.com/in/ajay-sahani-464a38298/"><i className="fab fa-linkedin-in" /></a>
        </div>

        <div className="text-gray-400 text-sm">
          <p>📞 +91 6262626262 | ✉ mail@domain.com</p>
          <p>📍 221603, Madhuban, Mau, India</p>
        </div>

        <p className="text-gray-500 text-xs mt-2">
          © 2025 ONLINE JOB. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
