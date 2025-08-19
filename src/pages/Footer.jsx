import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
  <div className="bg-gray-900 text-gray-300 py-8 mt-10">
  <div className="w-full px-6">
    
    {/* Flex layout full screen left-right */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full ml-100">
      
      {/* Quick Links - Left */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="/" className="hover:text-white">Home</a></li>
          <li><a href="/browse" className="hover:text-white">Browse</a></li>
          <li><Link to="/about" className="hover:text-white">About</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
        </ul>
      </div>

      {/* Social Media - Right */}
      <div className="mt-6 md:mt-0 mr-210 mb-20">
        <h3 className="text-lg font-semibold text-white mb-3 mr-8 md:text-right">Follow Us</h3>
        <div className="flex space-x-4 md:justify-end">
          <a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a>
          <a href="https://x.com/parshotamsinghi" className="hover:text-sky-400"><FaTwitter size={24} /></a>
          <a href="https://www.linkedin.com/in/parshotam-singh-778028288" className="hover:text-blue-600"><FaLinkedin size={24} /></a>
          <a href="https://github.com/parshotamlal" className="hover:text-gray-100"><FaGithub size={24} /></a>
        </div>
      </div>

    </div>
  </div>

        {/* Bottom text */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Parshotam lal. All rights reserved.
        </div>
      </div>

  );
}

export default Footer;
