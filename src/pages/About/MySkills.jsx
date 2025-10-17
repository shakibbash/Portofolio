import React from "react";
import { Code2, Database } from "lucide-react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVercel,
} from "react-icons/si";

const SkillCard = ({ title, skills, color, categoryIcon }) => {
  return (
    <div className="w-[500px] relative group rounded-2xl overflow-hidden bg-gray-900/70 border border-purple-700/40 shadow-lg transform transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03]">
      {/* Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent animate-shimmer"></div>

      <div className="p-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`p-3 rounded-xl bg-purple-800/40 ${color} group-hover:scale-110 transition-transform duration-300`}
          >
            {categoryIcon}
          </div>
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-fuchsia-400">
            {title}
          </h3>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 py-1 px-2 rounded-md border border-purple-700/50 bg-gray-800/60 text-gray-100 text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            >
              <span className="w-5 h-5">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MySkills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "text-purple-400",
      categoryIcon: <Code2 className="w-8 h-8 text-purple-400" />,
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
      ],
    },
    {
      title: "Backend",
      color: "text-fuchsia-400",
      categoryIcon: <Database className="w-8 h-8 text-fuchsia-400" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 p-4">
      {skillCategories.map((category, i) => (
        <SkillCard   key={i} {...category} />
      ))}

      {/* Shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default MySkills;
