import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram, FiFacebook } from 'react-icons/fi';
import { SiLeetcode } from "react-icons/si";
const SocialLinks = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub />, url: 'https://github.com/shakibbash' },
    { name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/shakib-hossian-9ba1a628b/' },
    { name: 'LeetCode', icon: <SiLeetcode />, url: 'https://leetcode.com/u/shaking235/' },
    { name: 'Email', icon: <FiMail />, url: 'mailto:shakibhossain2273@gmail.com' },
    { name: 'Facebook', icon: <FiFacebook />, url: 'https://www.facebook.com/shakib.hossian.58' },
  ];

  return (
    <div className="py-20 md:py-15">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="mx-auto rounded-2xl w-[300px] p-2 text-xl font-bold bg-purple-900/80 border border-purple-700 backdrop-blur-sm hover:bg-purple-800/70 transition-all duration-300 text-white mb-8">
          Connect With Me
        </h3>

        <div className="flex justify-center flex-wrap gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full border-2 border-purple-500 flex items-center justify-center text-white text-2xl bg-[#1E1E26] transition-all duration-300 
                group-hover:bg-purple-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/30">
                {social.icon}
              </div>
              <span className="mt-2 text-sm text-[#A0A0B0] group-hover:text-white transition-colors duration-300">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
