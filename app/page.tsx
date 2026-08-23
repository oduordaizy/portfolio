'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Image from 'next/image';
import Footer from './components/footer';
import {
  Code,
  Layout,
  TrendingUp,
  Search,
  ArrowRight,
  BarChart,
  Megaphone,
  Smartphone,
  Globe
} from 'lucide-react';

export default function Main() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-accent/10 dark:bg-brand-accent/10 blur-[100px] pointer-events-none -z-10"></div>
      
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 md:py-0 max-w-7xl mx-auto z-10 relative">
        <div className="md:w-1/2 space-y-6 md:space-y-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Hello <span className="wave inline-block origin-bottom-right">👋</span>,<br />
            I&apos;m <span className="text-gradient">Daisy Oduor</span>
          </h1>
          <p className="text-xl sm:text-2xl text-brand-muted-light dark:text-brand-muted-dark font-light leading-relaxed">
            I build <span className="font-semibold text-brand-primary dark:text-brand-text-dark">stunning websites</span> and execute <span className="font-semibold text-brand-primary dark:text-brand-text-dark">digital marketing strategies</span> that drive traffic, engage users, and grow businesses online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="/contact" className="flex items-center justify-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all font-medium text-lg">
              Let&apos;s Grow Your Brand <ArrowRight size={20} />
            </a>
            <a href="/projects" className="glass-panel flex items-center justify-center gap-2 text-brand-text-light dark:text-brand-text-dark px-8 py-4 rounded-full hover:bg-brand-bg-light dark:hover:bg-brand-surface-dark transition-all font-medium text-lg hover:shadow-md">
              View My Work
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mb-12 md:mb-0 flex justify-center items-center animate-fade-in">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary to-brand-accent rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <Image
              src="/daisyimg.png"
              fill
              priority
              alt="Daisy Oduor"
              className="rounded-full object-cover border-[6px] border-brand-surface-light dark:border-brand-border-dark shadow-2xl relative z-10"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Bridging the Gap Between <span className="text-gradient">Design & Discovery</span></h2>
            <p className="text-lg md:text-xl text-brand-muted-light dark:text-brand-muted-dark">
              A beautiful website is only half the battle. I ensure your digital presence not only looks incredible but is structured to convert visitors and rank high on search engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-brand-primary/5 dark:bg-brand-bg-dark/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Achieve <span className="text-gradient">Results</span></h2>
            <p className="text-lg md:text-xl text-brand-muted-light dark:text-brand-muted-dark">
              A strategic, data-driven approach to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-border-light dark:via-brand-border-dark to-transparent hidden md:block -translate-y-1/2"></div>
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Technology Stack */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">My Digital <span className="text-gradient">Arsenal</span></h2>
            <p className="text-lg md:text-xl text-brand-muted-light dark:text-brand-muted-dark">
              The tools I use to build fast websites and run successful marketing campaigns.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <TechPill key={index} {...tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-95"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        
        <div className="max-w-3xl mx-auto relative z-10 animate-fade-in-up text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Dominate Your Niche?</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 font-light">
            Whether you need a brand new website or a marketing strategy that actually works, I'm here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary px-10 py-5 rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all text-xl"
            >
              Start a Conversation <ArrowRight size={24} />
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
  delay?: number;
};

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => (
  <div 
    className="glass-panel p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
      <Icon className="text-white" size={28} />
    </div>
    <h3 className="text-xl font-bold mb-4 text-brand-text-light dark:text-brand-text-dark">{title}</h3>
    <p className="text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">{description}</p>
  </div>
);

type TechPillProps = {
  name: string;
  icon: React.ElementType;
};

const TechPill = ({ name, icon: Icon }: TechPillProps) => (
  <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3 hover-lift border border-brand-border-light dark:border-brand-border-dark">
    <Icon className="text-brand-secondary dark:text-brand-accent" size={20} />
    <span className="font-medium text-brand-text-light dark:text-brand-text-dark">{name}</span>
  </div>
);

type ProcessStepProps = {
  title: string;
  description: string;
  index: number;
};

const ProcessStep = ({ title, description, index }: ProcessStepProps) => (
  <div className="relative z-10 glass-panel p-8 rounded-2xl text-center hover-lift border border-brand-border-light dark:border-brand-border-dark">
    <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-2xl font-bold">
      {index + 1}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-brand-text-light dark:text-brand-text-dark">{title}</h3>
    <p className="text-brand-muted-light dark:text-brand-muted-dark">{description}</p>
  </div>
);

// ---------------------------
// Data Arrays
// ---------------------------

const services: ServiceCardProps[] = [
  {
    icon: Layout,
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern frameworks like React and Next.js, tailored to your brand identity.'
  },
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description: 'Data-driven SEO strategies to improve your visibility on Google and attract high-quality organic traffic.'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Comprehensive marketing campaigns across social media and email to engage your audience and build brand loyalty.'
  },
  {
    icon: TrendingUp,
    title: 'Conversion Optimization',
    description: 'Analyzing user behavior and A/B testing to ensure your website turns visitors into paying customers.'
  }
];

const technologies: TechPillProps[] = [
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: Globe },
  { name: 'Tailwind CSS', icon: Layout },
  { name: 'Google Analytics', icon: BarChart },
  { name: 'SEO Strategy', icon: Search },
  { name: 'Social Media Mgmt', icon: Smartphone },
  { name: 'Content Marketing', icon: Megaphone },
  { name: 'Email Marketing', icon: TrendingUp }
];

const processSteps: Omit<ProcessStepProps, 'index'>[] = [
  {
    title: 'Discovery & Audit',
    description: 'We analyze your current presence, target audience, and business goals.'
  },
  {
    title: 'Strategy Formulation',
    description: 'Creating a tailored blueprint for your website and marketing campaigns.'
  },
  {
    title: 'Design & Build',
    description: 'Developing a stunning, fast, and responsive website optimized for conversions.'
  },
  {
    title: 'Launch & Grow',
    description: 'Deploying the site and executing marketing strategies to drive continuous growth.'
  }
];
