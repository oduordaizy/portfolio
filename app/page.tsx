'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Image from 'next/image';
import Footer from './components/footer';
import { Code, Cloud, Sparkles } from 'lucide-react';

export default function Main() {
  return (
    <div className="bg-white text-[#00204a]">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-1 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Hello 👋,<br />
            I&apos;m Daisy
          </h1>
          <p className="text-2xl text-gray-700">
            A Software Developer & Cloud Professional helping businesses stand out online and attract more customers.
          </p>
          <div className="flex gap-4">
            <a href="/contact" className="bg-[#005792] text-white px-6 py-2 rounded-md shadow hover:bg-[#00416a] transition">
              Contact Me
            </a>
            <a href="/projects" className="border border-[#005792] text-[#005792] px-6 py-2 rounded-md hover:bg-[#005792] hover:text-white transition">
              View My Work
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mb-10 md:mb-0">
          <Image
            src="/daisyimg.png"
            width={550}
            height={550}
            alt="Daisy"
            className=""
          />
        </div>
      </section>

      {/* What I Offer */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">What I Can Do For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-left">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="flex justify-center"><Code className="text-[#005792] mb-4" size={32} /></div>
              <h3 className="text-xl font-bold mb-2 text-center">Web Development</h3>
              <p className="text-gray-600 text-center">
                I build high-performance websites and web apps using modern tech like Next.js, React, and Tailwind.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="flex justify-center "><Cloud className="text-[#005792] mb-4" size={32} /></div>
              <h3 className="text-xl font-bold mb-2 text-center">Cloud Solutions</h3>
              <p className="text-gray-600 text-center">
                I help businesses scale by deploying secure, scalable applications on AWS and integrating cloud-native practices.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="flex justify-center"><Sparkles className="text-[#005792] mb-4" size={32} /></div>
              <h3 className="text-xl font-bold mb-2 text-center">UI/UX Focus</h3>
              <p className="text-gray-600 text-center">
                I design user-friendly interfaces that look great and feel even better, balancing beauty and usability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 text-center px-6 bg-[#00204a] text-white">
        <h2 className="text-3xl font-semibold mb-4">Ready to collaborate?</h2>
        <p className="mb-6 text-lg">Let’s build something amazing together. I’m just one message away.</p>
        <a
          href="/contact"
          className="bg-white text-[#00204a] px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>

      <Footer />
    </div>
  );
}
