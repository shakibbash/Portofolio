import React, { useState } from "react";
import { useParams, Link } from "react-router";
import { FaExternalLinkAlt, FaLaptop, FaServer, FaArrowLeft } from "react-icons/fa";
import projectsData from "../../../public/featuredProjects.json";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) return <div className="text-center py-20 text-white">Project not found</div>;

  const nextImage = () => setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  const prevImage = () => setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      
      {/* 🔮 Stylish Themed Background */}
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

      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-purple-400 mb-6 hover:text-violet-300 transition"
      >
        <FaArrowLeft /> Back to Projects
      </Link>

      <div className="max-w-5xl mx-auto bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden">
        {/* 🖼️ Image Carousel */}
        <div className="relative h-64 sm:h-96">
          <img
            src={project.images[currentImage]}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500"
          />
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-violet-600 transition"
              >
                &#8592;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-violet-600 transition"
              >
                &#8594;
              </button>
            </>
          )}
        </div>

        {/* 📋 Project Details */}
        <div className="p-8 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-violet-300">{project.title}</h1>
          <p className="text-gray-300">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-purple-800/30 text-purple-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-violet-300">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-300">
              {project.keyFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* 🌐 Links */}
          <div className="flex flex-wrap gap-3 mt-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 rounded-lg transition shadow-md"
              >
                <FaExternalLinkAlt /> Live Site
              </a>
            )}
            {project.clientCode && (
              <a
                href={project.clientCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 rounded-lg transition shadow-md"
              >
                <FaLaptop /> Client Code
              </a>
            )}
            {project.serverCode && (
              <a
                href={project.serverCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-400 hover:to-violet-500 rounded-lg transition shadow-md"
              >
                <FaServer /> Server Code
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
