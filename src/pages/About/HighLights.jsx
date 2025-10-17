import React from "react";
import { FaCode, FaLightbulb, FaRocket, FaUsers, FaCoffee, FaHeart, FaMobileAlt, FaLaptopCode, FaShieldAlt, FaBrain } from "react-icons/fa";

const Highlights = () => {
  const highlights = [
    { icon: FaCode, title: "Clean Code Enthusiast", description: "Maintainable, scalable, efficient code.", color: "from-blue-500 to-blue-600" },
 
    { icon: FaRocket, title: "Fast Learner", description: "Quickly adapt to new technologies.", color: "from-purple-500 to-pink-500" },
    { icon: FaUsers, title: "Team Player", description: "Collaborative and supportive in teams.", color: "from-green-500 to-emerald-500" },
    { icon: FaCoffee, title: "Detail Oriented", description: "Focus on the small details that matter.", color: "from-amber-500 to-orange-600" },
    { icon: FaMobileAlt, title: "Responsive Design", description: "Build apps that look great on all devices.", color: "from-cyan-500 to-blue-400" },
    { icon: FaLaptopCode, title: "Fullstack Dev", description: "Work confidently on frontend & backend.", color: "from-indigo-500 to-purple-500" },
    { icon: FaHeart, title: "Passionate Creator", description: "Create meaningful, impactful projects.", color: "from-red-500 to-pink-500" },
     { icon: FaUsers, title: "Team Player", description: "Collaborative and supportive in teams.", color: "from-green-500 to-emerald-500" },
    { icon: FaBrain, title: "Innovative Thinker", description: "Bring fresh ideas to solve real problems.", color: "from-pink-500 to-red-500" },
  ];

  return (
    <div className="space-y-10 px-4 md:px-8 mb-10">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-purple-400">What<span className="text-white"> Drives</span> Me</h4>
        <p className="text-gray-400 mt-2">My values and principles that guide my work</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="cursor-pointer group relative overflow-hidden rounded-2xl bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 p-6 hover:border-blue-500/50 transition-all duration-300 shadow-lg"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
            <div className="relative flex flex-col items-start space-y-4">
              <div className={`w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r ${highlight.color} shadow-xl`}>
                <highlight.icon className="text-white w-6 h-6" />
              </div>
              <h5 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                {highlight.title}
              </h5>
              <p className="text-gray-400 text-sm">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
