import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import { Layout, LineChart, Search, ShieldCheck, Zap, Share2 } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-[10%] left-[-10%] w-[30%] h-[30%] rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 blur-[100px] pointer-events-none -z-10"></div>
      
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text-light dark:text-brand-text-dark mb-6">
            Services That Drive <span className="text-gradient">Growth</span>
          </h1>
          <p className="text-xl text-brand-muted-light dark:text-brand-muted-dark">
            From building your digital storefront to bringing customers through the door, I offer end-to-end solutions for your online success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          
          {/* Service 1 */}
          <div className="glass-panel p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
              <Layout className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-brand-text-light dark:text-brand-text-dark">Website Development</h2>
            <p className="text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              I design and develop modern, lightning-fast, and responsive websites using Next.js and React. Your website will be tailored to reflect your brand and optimized to convert visitors into clients.
            </p>
          </div>

          {/* Service 2 */}
          <div className="glass-panel p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
              <LineChart className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-brand-text-light dark:text-brand-text-dark">Digital Marketing</h2>
            <p className="text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              Data-driven marketing strategies that increase your reach, drive targeted traffic, and maximize your ROI. I handle campaign planning, execution, and continuous optimization.
            </p>
          </div>

          {/* Service 3 */}
          <div className="glass-panel p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
              <Search className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-brand-text-light dark:text-brand-text-dark">Search Engine Optimization</h2>
            <p className="text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              Dominate search results with tailored SEO practices. I optimize your site's architecture, speed, and content so customers can find your business exactly when they need you.
            </p>
          </div>

          {/* Service 4 */}
          <div className="glass-panel p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
              <Zap className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-brand-text-light dark:text-brand-text-dark">Conversion Optimization</h2>
            <p className="text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              I analyze user journey data to identify bottlenecks on your site, implementing strategic design changes and A/B tests to significantly boost your conversion rates.
            </p>
          </div>

          {/* Service 5 */}
          <div className="glass-panel p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
              <Share2 className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-brand-text-light dark:text-brand-text-dark">Social Media Strategy</h2>
            <p className="text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              Build a loyal community around your brand. I craft compelling content and manage your presence across key platforms to engage your audience and build authority.
            </p>
          </div>

          {/* Service 6 */}
          <div className="glass-panel p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-brand-text-light dark:text-brand-text-dark">Website Maintenance</h2>
            <p className="text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              Keep your digital asset secure, fast, and up-to-date. I provide ongoing support, regular performance checks, and rapid bug fixes so you can focus on running your business.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center glass-panel p-12 rounded-3xl border border-brand-border-light dark:border-brand-border-dark">
          <h2 className="text-3xl font-bold text-brand-text-light dark:text-brand-text-dark mb-6">Need a custom solution?</h2>
          <p className="text-lg text-brand-muted-light dark:text-brand-muted-dark mb-8 max-w-2xl mx-auto">
            Every business is unique. Contact me to discuss a tailored strategy that fits your specific goals and budget.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Request a Consultation
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Services