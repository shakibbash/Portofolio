import React from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center  ">
              {/* Logo */}
              <img
                src="/assets/l.png"
                alt="Logo"
                className="w-10 h-10 object-contain rounded-lg shadow-[0_0_10px_rgba(139,92,246,0.4)] bg-gradient-to-br from-[#8B5CF6] to-[#C084FC]"
              />
              {/* Brand Name */}
              <div className="text-2xl font-bold  bg-clip-text text-white tracking-wide">
                hakib
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              A creative full-stack developer focused on building interactive, scalable, and responsive web experiences. Skilled in modern frameworks and technologies, turning complex challenges into elegant digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm">
                Home
              </a>
              <a href="/education" className="block text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm">
                Education
              </a>
              <a href="/about" className="block text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm">
                About
              </a>
              <a href="/projects" className="block text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm">
                Projects
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-purple-400">Email:</span> shakibhossain2273@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-purple-400">Phone:</span> +8801868623523
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-transform duration-300 hover:scale-125">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-transform duration-300 hover:scale-125">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-transform duration-300 hover:scale-125">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-transform duration-300 hover:scale-125">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-transform duration-300 hover:scale-125">
                  <FaCode className="w-5 h-5" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-125">
                  <FaXTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700/50 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025. All rights reserved.
            </p>
            <div className="text-sm">
              <span className="text-gray-400">Developed by </span>
              <a 
                href="" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
              >
                Shakib Hossain
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
