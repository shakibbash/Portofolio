import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaHeart, FaDownload, FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router";

const PersonalIntro = () => {
  const personalInfo = [
    { icon: FaMapMarkerAlt, label: "Location", value: "Bangladesh" },
    { icon: FaCalendarAlt, label: "Experience", value: "1+ Years" },
    { icon: FaHeart, label: "Passion", value: "Problem Solving" },
  ];

  const actions = [
    {
      label: "View Projects",
      href: "/projects",
      icon: FaFolderOpen,
      isPrimary: false,
      isExternal: false,
    },
    {
      label: "Download Resume",
      href: "/assets/Resume.pdf",
      download:"Resume.pdf",
      icon: FaDownload,
      isPrimary: true,
      isExternal: true,
    },
    {
      label: "Contact Me",
      href: "/contact",
      icon: FaHeart,
      isPrimary: false,
      isExternal: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 mt-5">

      {/* Left Section */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
            About <span className="text-white">Me</span>
          </h2>
          <p className="text-gray-300">
            I'm a passionate Full Stack Developer who loves crafting clean, functional, and visually appealing digital solutions.
          </p>
          <p className="text-gray-300">
            My expertise ranges from frontend interfaces to backend architectures. I enjoy solving real-world problems with innovative tech solutions.
          </p>
        </div>

        {/* Personal Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {personalInfo.map((info, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-700/40 to-violet-700/40 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <info.icon className="text-white w-6 h-6" />
              <div>
                <p className="text-gray-400 text-sm">{info.label}</p>
                <p className="text-white font-semibold">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 w-full  mt-15">
          {actions.map((action, index) => {
            const ActionComponent = action.isExternal ? "a" : Link;
            const linkProps = action.isExternal
              ? { href: action.href, target: "_blank", rel: "noopener noreferrer" }
              : { to: action.href };

            return (
              <ActionComponent
                key={index}
                {...linkProps}
                className={`
                  flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-xl font-semibold 
                  relative overflow-hidden transition-all duration-300 group
                  ${action.isPrimary
                    ? "bg-gradient-to-r from-purple-500 to-purple-500 text-white shadow-lg hover:shadow-xl"
                    : "bg-slate-700/50 text-gray-300 border border-purple-600/50 hover:purple-blue-500/50 hover:text-white hover:bg-slate-600/50"
                  }
                  cursor-pointer
                `}
              >
                {action.isPrimary && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
                <action.icon className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{action.label}</span>
                {action.isPrimary && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
                )}
              </ActionComponent>
            );
          })}
        </div>
      </div>

      {/* Right Section */}
      <div className="relative bg-gradient-to-b from-gray-900/70 to-gray-950/70 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center gap-6 border border-purple-700/40 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-500">

        {/* Floating Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-fuchsia-500/10 blur-2xl"></div>

        {/* Avatar */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-transform duration-500 cursor-pointer">
          <img 
            src="/assets/l.png" 
            alt="My Logo" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name Badge */}
        <h3 className="text-base font-semibold px-4 py-2 bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500 text-white rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)] border border-purple-400/60 backdrop-blur-sm cursor-pointer">
          Shakib Hossain
        </h3>

        {/* Tagline */}
        <p className="text-gray-400 text-sm italic text-center cursor-default">
          “Turning ideas into functional, aesthetic web experiences.”
        </p>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-500 rounded-full"></div>

        {/* Extra Content */}
        <div className="mt-4 text-center space-y-3">
          <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 cursor-default">
            Let’s Build Something Amazing
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed cursor-default">
            Collaborate, create, and innovate — I’m open to freelance projects, team collaborations, and exciting new opportunities.
          </p>
        </div>

        {/* Connect Button */}
        <a
          href="contact"
          className="mt-5 px-6 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          Let’s Connect
        </a>
      </div>

    </div>
  );
};

export default PersonalIntro;
