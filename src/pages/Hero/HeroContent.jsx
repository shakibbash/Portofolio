import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCode } from 'react-icons/fa';
import { FiDownload, FiFolder } from 'react-icons/fi';
import DeveloperFlip from './DevleoperFlip';

const HeroContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true }); 
  }, []);

  return (
    <div
      className="relative overflow-hidden py-10 px-4 sm:px-10 flex flex-col sm:flex-row items-start gap-8"
      data-aos="fade-up"
     
    >
      {/* 🌟 Left Animated Circle + Line */}
      <div
        className="relative flex flex-col items-center mt-16 ml-2"
        data-aos="fade-right"
       
      >
        {/* Glowing Circle */}
        <div className="w-6 h-6 rounded-full bg-purple-500 shadow-[0_0_20px_5px_rgba(168,85,247,0.6)] border-2 border-purple-300"></div>

        {/* Animated Vertical Line */}
        <div className="w-[3px] bg-gradient-to-b from-purple-500 to-violet-700 mt-2 animate-grow"></div>

        <style>
          {`
            @keyframes grow {
              0% { height: 0; opacity: 0; }
              100% { height: 420px; opacity: 1; }
            }
            .animate-grow {
              animation: grow 1.5s ease-out forwards;
              height: 420px;
            }
          `}
        </style>
      </div>

      {/* 🌟 Hero Text Section */}
      <div
        className="relative z-10 flex-1"
        data-aos="fade-left"
       
      >
        {/* Floating Developer Icon */}
        <div className="absolute left-100 top-10 transform -translate-x-1/2  w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center shadow-xl animate-bounce z-20">
          <FaCode className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
        </div>

        {/* Badge */}
        <div className="relative mt-12 inline-flex items-center gap-2 px-3 py-1 bg-purple-900/80 text-purple-300 text-xs sm:text-sm rounded-full border border-purple-700 backdrop-blur-sm hover:bg-purple-800/70 transition-all duration-300 mb-2 z-10">
          <FaCode className="w-2 h-2 animate-ping text-purple-400" />
          Full Stack Developer
        </div>

        {/* Heading */}
        <h1
          className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400 mb-4"
          data-aos="zoom-in"
         
        >
          <span className="text-3xl">
            Hello, I <span className="text-white">'m</span>
          </span>
          <br />
          Shakib <span className="text-white">Hossain</span>
        </h1>

        {/* Developer Flip */}
        <div className="my-3" data-aos="flip-up">
          <DeveloperFlip />
        </div>

        {/* Description */}
        <p
          className="p-2 text-gray-300 text-base sm:text-xl md:text-xl mb-5 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        
        >
          I craft seamless and engaging web solutions using the latest technologies. 
          From dynamic front-end interfaces to robust full-stack applications, I turn 
          complex ideas into clean, functional, and visually appealing digital experiences.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4"
          data-aos="fade-up"
          data-aos-delay="300"
         
        >
          <a
            href="/assets/Resume.pdf"
            download="Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-purple-400 to-violet-400 hover:from-violet-400 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:scale-105"
          >
            <FiDownload className="text-lg" />
            Download CV
          </a>

          <a
            href="projects"
            className="flex items-center gap-2 px-6 py-3 text-purple-400 font-semibold rounded-xl border border-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 shadow-lg hover:scale-105"
          >
            <FiFolder className="text-lg" />
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
