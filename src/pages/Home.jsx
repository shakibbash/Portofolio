import React from 'react';
import HeroSection from './Hero/HeroSection';
import Demo from './Demo';
import FeaturedProject from './FeaturedProjects/FeaturedProjects';
const Home = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Grid Effect */}
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

      {/* Page content here */}
   <HeroSection></HeroSection>
   <Demo></Demo>
   <FeaturedProject></FeaturedProject>
    </div>
    
  );
};

export default Home;
