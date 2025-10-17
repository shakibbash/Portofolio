import React from "react";
import { FaBriefcase, FaProjectDiagram, FaCode, FaSmile, FaEnvelope } from "react-icons/fa";

const StatsCards = () => {
  const stats = [
    { icon: <FaBriefcase className="text-purple-400 w-8 h-8" />, number: "1+", label: "Years Experience" },
    { icon: <FaProjectDiagram className="text-purple-400 w-8 h-8" />, number: "10+", label: "Projects Completed" },
    { icon: <FaCode className="text-purple-400 w-8 h-8" />, number: "12", label: "Technologies" },
    { icon: <FaSmile className="text-purple-400 w-8 h-8" />, number: "100%", label: "Customer Satisfaction" },
  ];

  return (
    <div className="relative flex flex-col items-center gap-6  w-full">
 <div className="relative inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-900/80 to-purple-800/80 text-purple-300 text-base rounded-full border border-purple-600/30 backdrop-blur-sm mb-6 tracking-wide">
  <div className="w-1.5 h-1.5 bg-purple-400/70 rounded-full animate-pulse"></div>
  ACHIEVEMENTS
</div>
      {/* Connection Lines */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {/* Horizontal line */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-0.5 bg-purple-500/50"></div>
        <div className="absolute top-[60%] left-1/4 w-1/2 h-0.5 bg-purple-500/50"></div>
        {/* Vertical line */}
        <div className="absolute top-1/4 left-1/4 w-0.5 h-1/2 bg-purple-500/50"></div>
        <div className="absolute top-1/4 right-1/4 w-0.5 h-1/2 bg-purple-500/50"></div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-6 w-full relative z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800/40 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
          >
            <div className="mb-2">{stat.icon}</div>
            <h3 className="text-2xl font-bold text-purple-400">{stat.number}</h3>
            <p className="text-gray-300 text-center">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Contact Me Button */}
      <a
        href="#contact"
        className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-400 to-violet-400 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all"
      >
        <FaEnvelope className="w-5 h-5" />
        Contact Me
      </a>
    </div>
  );
};

export default StatsCards;
