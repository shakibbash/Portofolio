import React, { useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaPaperPlane, FaPhone, FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🌀 Initialize AOS only once
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // 'once: true' ensures animations run only once
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please fill in all fields",
        background: "#0f172a",
        color: "#f8fafc",
        confirmButtonColor: "#9333ea",
      });
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for contacting me. I’ll get back to you soon!",
        timer: 2500,
        showConfirmButton: false,
        background: "#0f172a",
        color: "#f8fafc",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="min-h-screen pt-20 pb-16 relative text-white overflow-hidden">
      {/* Background Grid */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-purple-300 relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-transform duration-500 cursor-pointer" data-aos="zoom-in">
              <img src="/assets/l.png" alt="My Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-purple-300 bg-clip-text text-transparent mb-4" data-aos="fade-up">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Have questions, feedback, or want to collaborate? Send me a message and I’ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2" data-aos="fade-right">
            <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl border border-gray-700/50 p-8 shadow-xl">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2" data-aos="fade-up">
                <FaPaperPlane className="text-purple-400 w-6 h-6" /> Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/70 border border-gray-600/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/70 border border-gray-600/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/70 border border-gray-600/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/70 border border-gray-600/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 flex justify-center items-center gap-2 transition-transform hover:scale-[1.02] ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info + Social */}
          <div className="space-y-6" data-aos="fade-left">
            <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-400 w-5 h-5" />
                <span>shakibhossain2273@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-purple-400 w-5 h-5" />
                <span>+8801868623523</span>
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 shadow-lg">
              <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.facebook.com/shakib.hossian.58" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900/50 rounded-lg hover:bg-blue-600/30 transition-colors">
                  <FaFacebook className="text-white w-5 h-5" />
                </a>
                <a href="https://github.com/shakibbash" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900/50 rounded-lg hover:bg-gray-600/30 transition-colors">
                  <FaGithub className="text-white w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/shakib-hossian-9ba1a628b/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900/50 rounded-lg hover:bg-blue-700/30 transition-colors">
                  <FaLinkedin className="text-white w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
