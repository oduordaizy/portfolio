'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* Intro Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Hey there! I&apos;m Daisy 👋</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A passionate software developer based in Nairobi, Kenya, with a love for building impactful digital experiences.
            From frontend finesse to backend logic — I thrive at the intersection of creativity and code.
          </p>
        </section>

        {/* Skills & Expertise */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">💡 What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
              <p>I craft intuitive and responsive UIs using Next.js, React, TypeScript, and Tailwind CSS — ensuring users not only *use* your app, but love it.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Backend Engineering</h3>
              <p>Need a robust backend? I&apos;ve got you. I use Node.js, Express, and Django to power APIs and applications that scale and perform.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Cloud & DevOps</h3>
              <p>As an AWS Certified Cloud Practitioner, I design and deploy secure, scalable solutions using cloud-first strategies.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">AI & ML Enthusiast</h3>
              <p>I&apos;ve fine-tuned BERT for semantic search and love solving real-world problems using machine learning and natural language processing.</p>
            </div>
          </div>
        </section>

        {/* Personal Vibe */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">✨ A Bit More About Me</h2>
          <p>
            When I&apos;m not coding, you&apos;ll find me sketching UI ideas in Figma, binge-watching tech talks, or diving into a new machine learning paper.
            I value clean code, clear communication, and constant learning.
          </p>
          <p>
            I believe that great software is built by people who care — not just about code, but about the people using it. That&apos;s the kind of developer I strive to be.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h3 className="text-xl font-semibold mb-2">Let&apos;s Build Something Together 🚀</h3>
          <p className="text-gray-600 mb-4">Whether you&apos;re looking to hire, collaborate, or just chat tech — I&apos;m all ears.</p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Reach Out
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
