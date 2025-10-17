import React, { useEffect } from "react";
import { FaUniversity, FaCalendarAlt, FaStar, FaMedal, FaMapMarkerAlt } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Education from "./Education"; 

const EducationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="min-h-screen w-full relative  overflow-hidden">
      {/* Background pattern */}
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

      {/* Content */}
      <div className="relative z-10 px-4">
    <Education></Education>
      </div>
    </div>
  );
};

export default EducationSection;
