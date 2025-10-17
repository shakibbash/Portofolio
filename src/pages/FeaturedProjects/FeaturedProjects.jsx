import React, { useState, useEffect } from "react";
import {
  FaEye,
  FaExternalLinkAlt,
  FaStar,
  FaLaptop,
  FaServer,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import featuredProjectsData from "../../../public/featuredProjects.json";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedProject = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 🌀 Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    // Simulate loading delay (for smoother UI)
    const timer = setTimeout(() => {
      setFeaturedProjects(featuredProjectsData);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden">
        {/* 🔮 Themed Background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "#020617",
            backgroundImage: `
              linear-gradient(to right, rgba(71,85,105,0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71,85,105,0.25) 1px, transparent 1px),
              radial-gradient(circle at 50% 0%, rgba(139,92,246,0.25), transparent 70%)
            `,
            backgroundSize: "32px 32px, 32px 32px, 100% 100%",
            backdropFilter: "blur(6px)",
          }}
        ></div>

        {/* ⚙️ Loader Animation */}
        <div
          data-aos="zoom-in"
          className="flex flex-col items-center justify-center"
        >
          <div className="bg-purple-300 relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-transform duration-500 cursor-pointer">
            <img
              src="/assets/l.png"
              alt="My Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-3xl mt-5 animate-bounce">
            Loading projects{" "}
            <span className="text-purple-300 animate-bounce text-3xl">...</span>
          </p>
        </div>
      </section>
    );
  }

  if (featuredProjects.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        No featured projects found.
      </div>
    );
  }

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background Pattern */}
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

      {/* Decorative Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          data-aos="fade-down"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaStar className="text-yellow-400 text-xl" />
            <span className="text-yellow-400 font-semibold uppercase tracking-wide text-sm">
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Featured{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text">
              Projects
            </span>
          </h2>
          <p
            className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore my handpicked collection of projects that showcase
            creativity and technical excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          {featuredProjects.map((project, i) => (
            <div data-aos="fade-up" data-aos-delay={i * 150} key={project.id}>
              <FeaturedProjectCard project={project} navigate={navigate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProjectCard = ({ project, navigate }) => {
  const displayImages =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];
  const hasMultipleImages = displayImages.length > 1;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (hasMultipleImages && !isPaused) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === displayImages.length - 1 ? 0 : prev + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [hasMultipleImages, displayImages.length, isPaused]);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === displayImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? displayImages.length - 1 : prev - 1
    );
  };

  const goToDetail = () => navigate(`/projects/${project.id}`);

  return (
    <div
      className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      {/* Image Slider */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        {displayImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out ${
              idx === currentImageIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {project.featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
            <FaStar className="text-xs" /> Featured
          </div>
        )}

        {/* Carousel Controls */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <FaChevronRight />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
              {displayImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentImageIndex === idx
                      ? "bg-white scale-125"
                      : "bg-white/50"
                  }`}
                  onClick={() => setCurrentImageIndex(idx)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-purple-800/30 text-purple-300 border border-purple-500/20 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 bg-slate-700/50 text-gray-400 border border-slate-600 rounded-full text-xs">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-2">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-500 transition-all"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          {project.clientCode && (
            <a
              href={project.clientCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-700 text-white rounded-lg text-sm font-medium hover:bg-slate-600 transition-all"
            >
              <FaLaptop /> Client
            </a>
          )}
          {project.serverCode && (
            <a
              href={project.serverCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-700 text-white rounded-lg text-sm font-medium hover:bg-slate-600 transition-all"
            >
              <FaServer /> Server
            </a>
          )}
          <button
            onClick={goToDetail}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-all"
          >
            <FaEye /> Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
