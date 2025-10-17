import React, { useState } from "react";
import { FiMenu, FiX, FiHome, FiUser, FiBook, FiLayers, FiMail, FiFileText } from "react-icons/fi";
import GlowLine from "../componets/GlowLine";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: <FiHome />, link: "/" },
    { name: "About", icon: <FiUser />, link: "about" },
    { name: "Education", icon: <FiBook />, link: "education" },
    { name: "Projects", icon: <FiLayers />, link: "projects" },
    { name: "Contact", icon: <FiMail />, link: "contact" },
  ];

  return (
    <div className=" w-full z-50">
      <nav className="bg-[#0B0B0F]/95 backdrop-blur-xl shadow-2xl border-b border-[#2A2A3A]/50 py-2 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
        <div className="flex items-center  ">
              {/* Logo */}
              <img
                src="/assets/l.png"
                alt="Logo"
                className="w-10 h-10 object-contain rounded-lg shadow-[0_0_10px_rgba(139,92,246,0.4)] bg-gradient-to-br from-[#8B5CF6] to-[#C084FC]"
              />
              {/* Brand Name */}
              <div className="text-2xl font-bold text-white bg-clip-text  tracking-wide">
                hakib
              </div>
            </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="flex items-center gap-2 px-4 py-2 text-[#E0E0E0] hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5 group relative"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Resume + Mobile Button */}
          <div className="flex items-center space-x-4">
            <a
              href="https://drive.google.com/file/d/1ac-OHd6wscWlmrj2b2gITpXk_lLfoXEp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 text-white font-semibold rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] hover:from-[#A78BFA] hover:to-[#C084FC] transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 group"
            >
              <FiFileText className="group-hover:scale-110 transition-transform duration-300" />
              Resume
            </a>

            {/* Mobile Toggle */}
            <div
              className="text-[#A78BFA] text-2xl md:hidden cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX /> : <FiMenu />}
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute top-full left-0 w-full md:hidden bg-[#0B0B0F]/95 backdrop-blur-xl border-b border-[#2A2A3A] shadow-2xl transition-all duration-500 ease-out ${
              open ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <ul className="flex flex-col space-y-2 px-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="flex items-center gap-3 py-3 px-4 text-[#E0E0E0] hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5 hover:pl-6 group"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300 text-[#A78BFA]">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </a>
                </li>
              ))}

              {/* Resume (Mobile) */}
              <li className="pt-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 text-black font-semibold rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] hover:from-[#A78BFA] hover:to-[#C084FC] transition-all duration-300 shadow-lg shadow-purple-500/30"
                  onClick={() => setOpen(false)}
                >
                  <FiFileText />
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Glow Line Under Navbar */}
      <GlowLine orientation="horizontal" position="100%" color="purple" />
    </div>
  );
};

export default Navbar;
