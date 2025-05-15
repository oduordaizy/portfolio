'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-10">
          Have a question, a project idea, or just want to connect? I&apos;m always open to meaningful conversations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Mail className="text-primary" />
              <a href="mailto:oduordaizy@gmail.com" className="hover:underline text-gray-800">
                oduordaizy@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary" />
              <span className="text-gray-800">+254 797967839</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-primary" />
              <span className="text-gray-800">Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-5 pt-4">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
