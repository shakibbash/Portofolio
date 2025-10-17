import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import PersonalIntro from './PersonalIntro';
import MySkills from './MySkills';
import Cloud from './Cloud.jsx';
import Highlights from './HighLights.jsx';

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "#020617",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, transparent 70%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
          backdropFilter: "blur(6px)",
        }}
      ></div>

      {/* About Me Heading */}
      <div className="text-center mt-5" data-aos="fade-up">
        <h2 
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          About <span className="text-transparent bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text">Me</span>
        </h2>
        <p 
          className="text-white text-lg max-w-2xl mx-auto"
        >
          Passionate developer crafting digital experiences with modern technologies
        </p>
      </div>

      {/* Personal Intro */}
      <div data-aos="fade-right" data-aos-delay="200">
        <PersonalIntro />
      </div>

      {/* Left Cloud + Right Skill Cards */}
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 mt-10'>
        {/* Right: Skill Cards */}
        <div className="flex-1" data-aos="fade-left" data-aos-delay="300">
          {/* Technical Skills Heading */}
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-purple-400">
              Technical <span className='text-white'>Skills</span>
            </h3>
            <p className="text-gray-300 text-lg mt-2">
              Technologies I use to bring ideas to life
            </p>
          </div>
          <MySkills />
        </div>

        {/* Left: Orbit Cloud */}
        <div className="flex-1 flex justify-center mt-20" data-aos="fade-up" data-aos-delay="400">
          <Cloud />
        </div>
      </div>

      {/* Highlights Section */}
      <div className='max-w-9xl mx-auto mt-20' data-aos="fade-up" data-aos-delay="500">
        <Highlights />
      </div>
    </div>
  );
};

export default AboutMe;
