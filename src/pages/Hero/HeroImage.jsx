import React, { useEffect } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiJavascript } from "react-icons/si";
import SocialLinks from "./SocialLinks";

const HeroImage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation speed
      once: false, // allow repeating on scroll
      offset: 100, // trigger distance
    });
  }, []);

  const icons = [
    <FaReact className="text-sky-400" />,
    <FaNodeJs className="text-green-500" />,
    <FaGitAlt className="text-red-500" />,
    <SiTailwindcss className="text-sky-300" />,
    <SiMongodb className="text-green-400" />,
    <SiExpress className="text-gray-400" />,
    <SiJavascript className="text-yellow-400" />,
  ];

  const strokeSize = 360;
  const iconContainerSize = 40;
  const iconRadius = 180;

  return (
    <div data-aos="fade-up" data-aos-once="false">
      <div
        className="relative flex justify-center items-center w-full h-full pt-20"
        data-aos="zoom-in"
        data-aos-once="false"
      >
        {/* Black circular stroke */}
        <div
          className="absolute rounded-full border-8 border-purple-400 bg-black z-0"
          style={{ width: `${strokeSize}px`, height: `${strokeSize}px` }}
          data-aos="fade-down"
          data-aos-once="false"
        />

        {/* Rotating Tech Icons inside stroke */}
        <motion.div
          className="absolute flex justify-center items-center z-5"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          data-aos="fade-right"
          data-aos-once="false"
        >
          <div
            className="relative"
            style={{ width: `${strokeSize}px`, height: `${strokeSize}px` }}
          >
            {icons.map((icon, i) => {
              const angle = (i / icons.length) * 2 * Math.PI;
              const x = iconRadius * Math.cos(angle);
              const y = iconRadius * Math.sin(angle);
              return (
                <div
                  key={i}
                  className="absolute flex items-center justify-center rounded-full border-2 border-purple-400 bg-black"
                  style={{
                    left: `calc(50% + ${x}px - ${iconContainerSize / 2}px)`,
                    top: `calc(50% + ${y}px - ${iconContainerSize / 2}px)`,
                    width: `${iconContainerSize}px`,
                    height: `${iconContainerSize}px`,
                  }}
                  data-aos="flip-up"
                  data-aos-once="false"
                >
                  {icon}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Central Developer Image */}
        <div className="relative z-10" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
          <img
            className="w-[250px] sm:w-[300px] rounded-full border-10 border-white"
            src="/assets/dev.png"
            alt="Developer"
          />
        </div>
      </div>

      {/* Social Links Section */}
      <div data-aos="fade-in" data-aos-delay="300" data-aos-once="false">
        <SocialLinks />
      </div>
    </div>
  );
};

export default HeroImage;
