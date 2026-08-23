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
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-brand-text-light dark:text-brand-text-dark mb-4 sm:mb-6">
            Services That Drive <span className="text-gradient">Growth</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-brand-muted-light dark:text-brand-muted-dark">
            From building your digital storefront to bringing customers through the door, I offer end-to-end solutions for your online success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10">
          
          {/* Service 1 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-blue-900/20">
              <Layout className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Website Development</h2>
            <p className="text-sm sm:text-base text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              I design and develop modern, lightning-fast, and responsive websites using Next.js and React. Your website will be tailored to reflect your brand and optimized to convert visitors into clients.
            </p>
          </div>

          {/* Service 2 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-blue-900/20">
              <LineChart className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Digital Marketing</h2>
            <p className="text-sm sm:text-base text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              Data-driven marketing strategies that increase your reach, drive targeted traffic, and maximize your ROI. I handle campaign planning, execution, and continuous optimization.
            </p>
          </div>

          {/* Service 3 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-blue-900/20">
              <Search className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Search Engine Optimization</h2>
            <p className="text-sm sm:text-base text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              Dominate search results with tailored SEO practices. I optimize your site's architecture, speed, and content so customers can find your business exactly when they need you.
            </p>
          </div>

          {/* Service 4 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-blue-900/20">
              <Zap className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Conversion Optimization</h2>
            <p className="text-sm sm:text-base text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              I analyze user journey data to identify bottlenecks on your site, implementing strategic design changes and A/B tests to significantly boost your conversion rates.
            </p>
          </div>

          {/* Service 5 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-blue-900/20">
              <Share2 className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Social Media Strategy</h2>
            <p className="text-sm sm:text-base text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              Build a loyal community around your brand. I craft compelling content and manage your presence across key platforms to engage your audience and build authority.
            </p>
          </div>

          {/* Service 6 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl hover-lift border border-brand-border-light dark:border-brand-border-dark flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-blue-900/20">
              <ShieldCheck className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-text-light dark:text-brand-text-dark">Website Maintenance</h2>
            <p className="text-sm sm:text-base text-brand-muted-light dark:text-brand-muted-dark leading-relaxed">
              Keep your digital asset secure, fast, and up-to-date. I provide ongoing support, regular performance checks, and rapid bug fixes so you can focus on running your business.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 text-center glass-panel p-8 sm:p-10 md:p-12 rounded-3xl border border-brand-border-light dark:border-brand-border-dark">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text-light dark:text-brand-text-dark mb-4 sm:mb-6">Need a custom solution?</h2>
          <p className="text-base sm:text-lg text-brand-muted-light dark:text-brand-muted-dark mb-6 sm:mb-8 max-w-2xl mx-auto">
            Every business is unique. Contact me to discuss a tailored strategy that fits your specific goals and budget.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-primary text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-base sm:text-lg"
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