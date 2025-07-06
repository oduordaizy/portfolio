'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Image from 'next/image';
import Footer from './components/footer';
import {
  Code,
  Cloud,
  Smartphone,
  Sparkles,
  ArrowRight,
  Server,
  Database,
  Shield,
  GitBranch
} from 'lucide-react';

export default function Main() {
  return (
    <div className="bg-white text-[#00204a]">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-8 md:py-0 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6 md:space-y-8 lg:space-y-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hello <span className="wave">👋</span>,<br />
            I&apos;m <span className="text-[#005792]">Daisy</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700">
            A passionate <span className="font-semibold">Full-Stack Developer</span> & <span className="font-semibold">Cloud Architect</span> creating digital experiences that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="flex items-center justify-center gap-2 bg-[#005792] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#00416a] transition-all hover:shadow-xl hover:-translate-y-1">
              Let&apos;s Collaborate <ArrowRight size={18} />
            </a>
            <a href="/projects" className="flex items-center justify-center gap-2 border-2 border-[#005792] text-[#005792] px-6 py-3 rounded-md hover:bg-[#005792] hover:text-white transition-all hover:shadow-md">
              See My Projects <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/daisyimg.png"
              fill
              priority
              alt="Daisy"
              className="rounded-full object-cover border-[6px] border-white shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 rounded-full border-[3px] border-[#005792] opacity-20 pointer-events-none"></div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Digital Solutions</h2>
            <p className="text-lg md:text-xl text-gray-600">
              I deliver end-to-end solutions that combine technical excellence with creative vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Technology Stack</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Cutting-edge tools and technologies I work with to build exceptional products
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <TechPill key={index} {...tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Development Process</h2>
            <p className="text-lg md:text-xl text-gray-600">
              A structured approach that ensures quality, efficiency, and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="absolute top-16 left-0 right-0 h-1 bg-gray-200 hidden md:block"></div>
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 text-center px-6 bg-gradient-to-r from-[#00204a] to-[#005792] text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl mb-8">
            Let&apos;s discuss how I can help bring your vision to life with cutting-edge technology and exceptional craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#00204a] px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform text-lg"
            >
              Get in Touch <ArrowRight size={20} />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#005792] transition-colors text-lg"
            >
              View My Work <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ---------------------------
// Props & Components Section
// ---------------------------

type ServiceCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  colorClass?: string;
};

const ServiceCard = ({ icon: Icon, title, description, colorClass }: ServiceCardProps) => (
  <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100`}>
    <div className={`flex justify-center mb-6 ${colorClass}`}>
      <Icon className="text-[#005792]" size={28} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

type TechPillProps = {
  name: string;
  icon: React.ElementType;
};

const TechPill = ({ name, icon: Icon }: TechPillProps) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2">
    <div className="bg-blue-50 p-3 rounded-full">
      <Icon className="text-[#005792]" size={20} />
    </div>
    <span className="font-medium">{name}</span>
  </div>
);

type ProcessStepProps = {
  title: string;
  description: string;
  index: number;
};

const ProcessStep = ({ title, description, index }: ProcessStepProps) => (
  <div className="relative z-10 bg-white p-6 rounded-lg shadow-md text-center">
    <div className="bg-[#005792] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="font-bold text-xl">{index + 1}</span>
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// ---------------------------
// Data Arrays
// ---------------------------

const services: ServiceCardProps[] = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications with React, Next.js, and cutting-edge frameworks.',
    colorClass: 'bg-blue-50 p-4 rounded-full'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps for iOS and Android using React Native and Flutter with native performance.',
    colorClass: 'bg-purple-50 p-4 rounded-full'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud architecture, serverless solutions, and DevOps on AWS, Azure, and Google Cloud.',
    colorClass: 'bg-green-50 p-4 rounded-full'
  },
  {
    icon: Sparkles,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that enhance user engagement and drive conversions.',
    colorClass: 'bg-yellow-50 p-4 rounded-full'
  }
];

const technologies: TechPillProps[] = [
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: GitBranch },
  { name: 'React Native', icon: Smartphone },
  { name: 'Node.js', icon: Server },
  { name: 'TypeScript', icon: Code },
  { name: 'AWS', icon: Cloud },
  { name: 'Firebase', icon: Database },
  { name: 'Tailwind', icon: Sparkles },
  { name: 'GraphQL', icon: Database },
  { name: 'Docker', icon: Shield }
];

const processSteps: Omit<ProcessStepProps, 'index'>[] = [
  {
    title: 'Discovery',
    description: 'Understanding your goals, audience, and technical requirements.'
  },
  {
    title: 'Planning',
    description: 'Creating detailed specifications and project roadmap.'
  },
  {
    title: 'Development',
    description: 'Building your solution with clean, maintainable code.'
  },
  {
    title: 'Delivery',
    description: 'Thorough testing and deployment with ongoing support.'
  }
];
