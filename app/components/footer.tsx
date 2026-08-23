import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker, HiArrowRight } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Django",
    "REST APIs",
  ];

  return (
    <footer className="bg-brand-primary text-white pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Top Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 pb-8 sm:pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Availability */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Daisy Oduor
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Software Engineer & Web Developer crafting high-performance digital experiences and scalable web applications.
            </p>
            {/* Live Work Status Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for freelance & full-time roles
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-brand-accent transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <HiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Tech Stack */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 sm:px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Get in Touch
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <HiOutlineMail className="w-4 h-4 text-brand-accent" />
                <a
                  href="mailto:contact@daisyoduor.com"
                  className="hover:text-brand-accent transition-colors"
                >
                  contact@daisyoduor.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineLocationMarker className="w-4 h-4 text-brand-accent" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex space-x-3 sm:space-x-4 text-base sm:text-lg">
              <a
                href="https://github.com/oduordaizy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-brand-accent hover:text-brand-accent transition-all duration-200"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/daisyoduor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-brand-accent hover:text-brand-accent transition-all duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-brand-accent hover:text-brand-accent transition-all duration-200"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-3 sm:gap-4">
          <p>© {currentYear} Daisy Oduor. All rights reserved.</p>
          <p className="text-gray-400">
            Designed & built with <span className="text-brand-accent">Next.js</span> & <span className="text-brand-accent">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;