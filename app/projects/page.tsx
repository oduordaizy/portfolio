'use client';

import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { ExternalLink, Award, Eye, ChevronDown, ChevronUp, Calendar, Star, Sparkles } from "lucide-react";
import Image from 'next/image';

const projectsData = [
    {
        title: "iTravas",
        description: "A modern ridesharing platform connecting drivers with empty seats to passengers seeking affordable, secure, and convenient travel across Kenya. Features real-time tracking, secure payments, and driver verification.",
        category: "Web Development",
        imageUrl: "/projects/itravas.png",
        gradient: "bg-gradient-to-b from-indigo-500 via-blue-600 to-cyan-700",
        tech: ["React", "Django", "PostgreSQL"],
        stats: { views: "8.5K", conversion: "4.1%" },
        url: "https://itravas.com",
        featured: true,
        year: "2024",
    },
    {
        title: "Avoworld Africa Website",
        description: "A comprehensive website for Avocado logistics and transportation company. Includes fleet management, real-time shipment tracking, and customer portal for booking and monitoring deliveries.",
        category: "Logistics",
        imageUrl: "/projects/avoworld.jpg",
        gradient: "bg-gradient-to-b from-emerald-500 via-teal-600 to-cyan-700",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        stats: { views: "12K", conversion: "6.2%" },
        url: "https://avoworldafrica.co.ke/",
        year: "2024",
    },
    {
        title: "Afritox Mobile Lab",
        description: "A mobile laboratory platform for medical testing in Kenya. Enables patients to book mobile lab services, view test results securely, and track sample collection in real-time.",
        category: "Healthcare",
        imageUrl: "/projects/afritox.png",
        gradient: "bg-gradient-to-b from-rose-500 via-pink-600 to-purple-700",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        stats: { views: "5.2K", conversion: "8.3%" },
        url: "http://187.127.229.137:3005",
        year: "2026",
    },
    {
        title: "Elite Africa Football Academy",
        description: "An informational website for a modern football academy that includes a blog for news and updates.",
        category: "Web Development",
        imageUrl: "/projects/eafa.jpg",
        gradient: "bg-gradient-to-b from-amber-500 via-orange-600 to-red-700",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", ".NET Core"],
        stats: { views: "15K", conversion: "7.8%" },
        url: "https://eliteafricafa.com",
        year: "2026",
    },
    {
        title: "Lintech Web Solutions",
        description: "Corporate website for a professional web solutions and IT services provider, showcasing services, portfolio, and company profile.",
        category: "Corporate",
        imageUrl: "/projects/lintech.png",
        gradient: "bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        stats: { views: "6K", conversion: "5.5%" },
        url: "https://lintechwebsolutions.co.ke",
        year: "2026",
    }
];

const categories = ["All", "Web Development", "Logistics", "Healthcare", "Corporate"];

export default function Projects() {
    const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const filteredProjects = selectedCategory === "All"
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);

    const handleScroll = (index: number, direction: 'up' | 'down') => {
        const container = scrollRefs.current[index];
        if (container) {
            const scrollAmount = 300;
            const newScrollTop = direction === 'down'
                ? container.scrollTop + scrollAmount
                : container.scrollTop - scrollAmount;

            container.scrollTo({
                top: newScrollTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Background Decorators */}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 blur-[100px] pointer-events-none -z-10"></div>

            <Navbar />

            <main className="flex-grow max-w-7xl mx-auto px-6 py-20 w-full">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent font-medium mb-4">
                        <Sparkles size={18} />
                        <span>Portfolio</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text-light dark:text-brand-text-dark mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h1>
                    <p className="text-xl text-brand-muted-light dark:text-brand-muted-dark max-w-2xl mx-auto">
                        A curated showcase of digital experiences crafted for diverse industries across Kenya and beyond.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                    ? 'bg-brand-primary text-white shadow-md'
                                    : 'bg-brand-surface-light dark:bg-brand-surface-dark text-brand-muted-light dark:text-brand-muted-dark hover:bg-brand-primary/10 dark:hover:bg-brand-primary/30 border border-brand-border-light dark:border-brand-border-dark'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="group relative flex flex-col glass-panel rounded-3xl overflow-hidden hover-lift border border-brand-border-light dark:border-brand-border-dark">

                            {/* Browser-style Scrollable Image Area */}
                            <div className="relative aspect-[16/10] bg-brand-surface-light dark:bg-brand-surface-dark border-b border-brand-border-light dark:border-brand-border-dark overflow-hidden">
                                {/* Browser Toolbar */}
                                <div className="absolute top-0 left-0 right-0 h-10 bg-brand-primary/5 border-b border-brand-border-light dark:border-brand-border-dark flex items-center px-4 gap-2 z-20 backdrop-blur-sm">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                    </div>
                                    <div className="mx-auto w-1/2 h-5 bg-white/50 dark:bg-black/20 rounded flex items-center justify-center text-[10px] text-brand-muted-light dark:text-brand-muted-dark font-medium overflow-hidden whitespace-nowrap px-2 shadow-inner">
                                        {project.url}
                                    </div>
                                </div>

                                {/* Scrollable Image Container */}
                                <div
                                    ref={(el) => {
                                        scrollRefs.current[index] = el;
                                    }}
                                    className="relative h-full pt-10 overflow-y-auto overflow-x-hidden scroll-smooth hide-scrollbar bg-slate-50 dark:bg-slate-900"
                                >
                                    <style jsx>{`
                                        .hide-scrollbar::-webkit-scrollbar { display: none; }
                                        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                                    `}</style>

                                    <div className="relative w-full min-h-full">
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-auto object-top block"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                        <div className={`hidden w-full h-48 ${project.gradient} flex flex-col items-center justify-center p-8 text-center`}>
                                            <div className="text-white/80 font-bold uppercase tracking-tighter mb-2">{project.title}</div>
                                            <div className="text-white/60 text-xs">(Image placeholder)</div>
                                        </div>
                                    </div>

                                    {/* Scroll Controls */}
                                    <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none pt-10 z-30">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleScroll(index, 'up'); }}
                                            className="w-10 h-10 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur shadow border border-white/40 dark:border-brand-border-dark flex items-center justify-center pointer-events-auto hover:scale-110 transition-transform text-brand-text-light dark:text-white"
                                        >
                                            <ChevronUp className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleScroll(index, 'down'); }}
                                            className="w-10 h-10 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur shadow border border-white/40 dark:border-brand-border-dark flex items-center justify-center pointer-events-auto hover:scale-110 transition-transform text-brand-text-light dark:text-white"
                                        >
                                            <ChevronDown className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-start justify-between gap-2 mb-3">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h2 className="text-2xl font-bold text-brand-text-light dark:text-brand-text-dark group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                                                {project.title}
                                            </h2>
                                            {project.featured && <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />}
                                        </div>
                                        <span className="px-3 py-1 bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark text-brand-text-light dark:text-brand-text-dark text-xs font-bold rounded-full shadow-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs font-medium text-brand-muted-light dark:text-brand-muted-dark bg-brand-primary/5 px-2 py-1 rounded-md">
                                        <Calendar className="w-3 h-3" />
                                        {project.year}
                                    </div>
                                </div>

                                <p className="text-brand-muted-light dark:text-brand-muted-dark mb-6 text-sm leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((techItem, techIndex) => (
                                        <span key={techIndex} className="text-xs font-medium px-2.5 py-1 bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary dark:text-brand-text-dark rounded-md">
                                            {techItem}
                                        </span>
                                    ))}
                                </div>

                              

                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-primary text-white px-4 py-3 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1 font-bold"
                                >
                                    View Live <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}