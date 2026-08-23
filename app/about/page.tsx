'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { Palette, TrendingUp, Search, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Background Decorators */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-accent/10 dark:bg-brand-accent/10 blur-[120px] pointer-events-none -z-10"></div>
      
      <Navbar />
      
      <main className="flex-grow max-w-6xl mx-auto px-6 py-20 space-y-24 w-full">
        {/* Intro Section */}
        <section className="text-center space-y-8 animate-fade-in-up max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Hey there! I&apos;m <span className="text-gradient">Daisy</span> 👋
          </h1>
          <p className="text-brand-muted-light dark:text-brand-muted-dark text-xl leading-relaxed">
            I am a passionate <span className="font-semibold text-brand-text-light dark:text-brand-text-dark">Website Developer & Digital Marketing Expert</span> based in Nairobi, Kenya. 
            I specialize in bridging the gap between stunning visual design and measurable business growth. 
            From crafting intuitive user interfaces to executing data-driven marketing campaigns, I help brands thrive in the digital landscape.
          </p>
        </section>

        {/* Skills & Expertise */}
        <section className="relative">
          <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand-primary/10 dark:bg-brand-secondary/20 rounded-full blur-2xl -z-10"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">💡 My Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-muted-light dark:text-brand-muted-dark">
            <div className="glass-panel p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark">
              <div className="w-12 h-12 bg-brand-primary/5 dark:bg-brand-surface-dark rounded-lg flex items-center justify-center mb-6">
                <Palette className="text-brand-secondary dark:text-brand-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text-light dark:text-brand-text-dark">Website Development</h3>
              <p className="leading-relaxed">I craft fast, responsive, and visually stunning websites using Next.js, React, and Tailwind CSS. My focus is on creating seamless user experiences that keep visitors engaged and drive conversions.</p>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark">
              <div className="w-12 h-12 bg-brand-primary/5 dark:bg-brand-surface-dark rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-brand-secondary dark:text-brand-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text-light dark:text-brand-text-dark">Digital Marketing Strategy</h3>
              <p className="leading-relaxed">Building a great website is just step one. I design and execute comprehensive marketing campaigns across social media, email, and content channels to amplify your brand&apos;s reach and ROI.</p>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark">
              <div className="w-12 h-12 bg-brand-primary/5 dark:bg-brand-surface-dark rounded-lg flex items-center justify-center mb-6">
                <Search className="text-brand-secondary dark:text-brand-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text-light dark:text-brand-text-dark">SEO & Visibility</h3>
              <p className="leading-relaxed">I implement advanced Search Engine Optimization techniques to ensure your business ranks high on Google. From keyword research to technical SEO, I make sure your target audience finds you first.</p>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark">
              <div className="w-12 h-12 bg-brand-primary/5 dark:bg-brand-surface-dark rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-brand-secondary dark:text-brand-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text-light dark:text-brand-text-dark">Conversion Rate Optimization</h3>
              <p className="leading-relaxed">Traffic means nothing without action. I analyze user behavior, perform A/B testing, and optimize your funnels to turn casual browsers into loyal, paying customers.</p>
            </div>
          </div>
        </section>

        {/* Personal Vibe */}
        <section className="text-center max-w-3xl mx-auto space-y-6 glass-panel p-10 rounded-3xl border border-brand-border-light dark:border-brand-border-dark">
          <h2 className="text-3xl font-bold text-brand-text-light dark:text-brand-text-dark">✨ A Bit More About Me</h2>
          <p className="text-lg text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
            When I&apos;m not coding or analyzing marketing metrics, you&apos;ll find me exploring the latest UI/UX trends, reading up on consumer psychology, or brainstorming creative campaign ideas. 
            I value clean design, compelling copywriting, and clear communication.
          </p>
          <p className="text-lg text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
            I believe that the best digital experiences are built by people who deeply understand both technology and human behavior. That&apos;s the unique blend of expertise I bring to every project.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center pb-10">
          <h3 className="text-3xl font-bold mb-6 text-brand-text-light dark:text-brand-text-dark">Let&apos;s Build Something Amazing 🚀</h3>
          <p className="text-xl text-brand-muted-light dark:text-brand-muted-dark mb-10 max-w-2xl mx-auto">
            Ready to elevate your online presence and dominate your market? I&apos;m currently accepting new projects.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-lg"
          >
            Get In Touch
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
