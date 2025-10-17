import React, { useEffect } from "react";
import { FaUniversity, FaCalendarAlt, FaStar, FaMedal, FaMapMarkerAlt } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const education = [
    {
      id: 1,
      degree: "BSc in Computer Science & Engineering",
      institution: "Premier University Chittagong",
      period: "Current Student",
      status: "Currently Enrolled",
      location: "Chittagong, Bangladesh",
      icon: FaUniversity,
      description: "Pursuing comprehensive education in computer science and engineering with focus on software development, algorithms, and system design.",
      achievements: [
        "Maintaining strong academic performance",
        "Active participation in coding projects and hackathons",
        "Coursework in Data Structures, Algorithms, and Web Technologies",
      ],
      progress: 75,
      tags: ["Programming", "Software Engineering", "Database Systems"]
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Govt. Collegiate College, Chittagong",
      period: "2018 - 2020",
      status: "Completed",
      location: "Chittagong, Bangladesh",
      icon: MdSchool,
      description: "Science Group with outstanding performance in Mathematics, Physics, and Chemistry.",
      achievements: ["GPA: 5.00/5.00", "Science Olympiad Participant", "Mathematics Club Member"],
      progress: 100,
      tags: ["Science", "Mathematics", "Physics"]
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "Al-Zaber Institute, Chittagong",
      period: "2013 - 2018",
      status: "Completed",
      location: "Chittagong, Bangladesh",
      icon: MdSchool,
      description: "Science Group with strong foundation in core subjects and active extracurricular involvement.",
      achievements: ["GPA: 5.00/5.00", "Science Fair Winner", "Debate Club President"],
      progress: 100,
      tags: ["Foundation", "Science", "Extracurricular"]
    },
  ];

  return (
    <div className="space-y-10 relative max-w-7xl mx-auto my-10 px-4">
        
      {/* Timeline vertical line */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-900 via-purple-700 to-black opacity-30 hidden sm:block"></div>

      {education.map((edu, idx) => (
        <div key={edu.id} className="relative group" data-aos="fade-up" data-aos-delay={idx * 150}>
          {/* Timeline dot */}
          <div className="absolute left-0 sm:left-4 top-6 -translate-x-1/2 z-10 hidden sm:block">
            <div className="w-5 h-5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full border-4 border-black shadow-lg"></div>
            <div className="absolute top-0 left-0 w-5 h-5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full animate-ping opacity-50"></div>
          </div>

          {/* Education Card */}
          <div className="ml-0 sm:ml-10 bg-gray-900/70  border border-purple-700/50 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-pink-500/50 transition-all duration-500 group-hover:translate-x-1">
            <div className="flex flex-col lg:flex-row gap-6">
              
              {/* Left Section - Icon & Progress */}
              <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-6" data-aos="fade-right">
                <div className="relative">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-700 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <edu.icon className="text-white text-2xl lg:text-3xl" />
                  </div>
                  {edu.status === "Currently Enrolled" && (
                    <div className="absolute -top-1 -right-1">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Progress Circle */}
                <div className="relative w-16 h-16 lg:w-20 lg:h-20">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-800" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (251.2 * edu.progress) / 100}
                      className="text-purple-500 transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{edu.progress}%</span>
                  </div>
                </div>
              </div>

              {/* Right Section - Content */}
              <div className="flex-1 space-y-4">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                  <div className="space-y-2">
                    <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-sm text-purple-300">
                      <FaMapMarkerAlt className="text-xs" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex items-center gap-2 text-xs text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full w-fit">
                      <FaCalendarAlt className="text-xs" />
                      {edu.period}
                    </div>
                    <div className={`inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full ${
                      edu.status === "Currently Enrolled" ? "text-green-400 bg-green-500/10" : "text-blue-400 bg-blue-500/10"
                    }`}>
                      <FaStar className="text-xs" />
                      {edu.status}
                    </div>
                  </div>
                </div>

                {/* Institution */}
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-200">
                  <MdSchool className="text-pink-400 flex-shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm lg:text-base">{edu.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {edu.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full border border-gray-700">{tag}</span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <FaMedal className="text-yellow-400" />
                    Key Achievements
                  </h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {edu.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
