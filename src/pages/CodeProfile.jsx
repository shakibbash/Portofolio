import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CodeProfile() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // smooth animation speed
      once: false,    // allows animation to replay on every scroll
      offset: 100,    // distance from viewport to trigger
    });
  }, []);

  return (
    <div
      className="flex items-center justify-center p-4 font-sans"
      data-aos="fade-up"
      data-aos-once="false"
    >
      <CoderProfileCard />
    </div>
  );
}

const coderData = {
  name: "Shakib Hossain",
  role: "Frontend Developer",
  seniority: "Beginner Level",
  location: "Bangladesh",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TailwindCSS",
    "CSS",
    "Figma",
    "GitHub",
    "HTML",
    "Stripe",
    "SSL Commerz",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "Git",
  ],
};

const CoderProfileCard = () => {
  return (
    <div
      className="max-w-2xl w-full mx-auto bg-gradient-to-r from-purple-950 to-violet-900 border-purple-700 relative rounded-lg border shadow-xl"
      data-aos="zoom-in"
      data-aos-once="false"
    >
      {/* Top gradient lines */}
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-violet-400"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-400 to-transparent"></div>
      </div>

      {/* Header */}
      <div
        className="px-4 lg:px-8 py-5 flex justify-between items-center bg-purple-900 rounded-t-lg"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-once="false"
      >
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs text-purple-300 font-mono">coder.js</div>
      </div>

      {/* Code Section */}
      <div
        className="overflow-hidden border-t-[2px] border-purple-700 px-4 lg:px-8 py-4 lg:py-8 relative bg-gray-900 text-white"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="false"
      >
        {/* Glowing blobs */}
        <div className="absolute -top-24 -left-24 w-56 h-56 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-10 blur-3xl"></div>

        <div className="relative flex">
          {/* Line numbers */}
          <div className="hidden md:flex flex-col items-end pr-4 text-purple-400 font-mono text-xs">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="leading-relaxed select-none opacity-70">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code Content */}
          <code className="font-mono text-xs md:text-sm lg:text-base w-full">
            <div>
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-violet-400">coder</span>
              <span className="mr-2 text-pink-500">=</span>
              <span>{"{"}</span>
            </div>

            <div className="pl-6">
              <span className="text-purple-300">name:</span>
              <span>&#39;</span>
              <span className="text-purple-400">{coderData.name}</span>
              <span>&#39;,</span>
            </div>

            <div className="pl-6">
              <span className="text-purple-300">role:</span>
              <span>&#39;</span>
              <span className="text-purple-400">{coderData.role}</span>
              <span>&#39;,</span>
            </div>

            <div className="pl-6">
              <span className="text-purple-300">seniority:</span>
              <span>&#39;</span>
              <span className="text-purple-400">{coderData.seniority}</span>
              <span>&#39;,</span>
            </div>

            <div className="pl-6">
              <span className="text-purple-300">location:</span>
              <span>&#39;</span>
              <span className="text-purple-400">{coderData.location}</span>
              <span>&#39;,</span>
            </div>

            <div className="pl-6">
              <span className="text-purple-300">skills:</span>
              <span>[</span>
              <div className="pl-6 flex flex-wrap">
                {coderData.skills.map((skill, index) => (
                  <span key={skill} className="mr-1">
                    <span>&#39;</span>
                    <span className="text-purple-400">{skill}</span>
                    <span>&#39;</span>
                    {index < coderData.skills.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
              <span>],</span>
            </div>

            <div>{"};"}</div>
          </code>
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-4 lg:px-8 pb-4 mt-4 border-t border-purple-700 pt-3 text-xs text-purple-300 flex justify-between items-center"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-once="false"
      >
        <span>UTF-8</span>
        <span>JavaScript</span>
        <span>Ln 12, Col 2</span>
      </div>
    </div>
  );
};
