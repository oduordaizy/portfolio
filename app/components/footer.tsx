import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00204a] text-white py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl font-bold text-white">Daisy Oduor</h1>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex space-x-6 text-xl">
          <a href="https://github.com/oduordaizy" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-[#fd5f00]" />
          </a>
          <a href="https://linkedin.com/in/daisyoduor" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-[#fd5f00]" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-[#fd5f00]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
