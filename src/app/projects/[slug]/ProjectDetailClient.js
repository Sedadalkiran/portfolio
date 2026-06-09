"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import AnimatedSection from "@/components/AnimatedSection";

export default function ProjectDetailClient({ params }) {
    // Next.js 15+ allows params to be a Promise, but the user's code uses it synchronously.
    // However, to be safe against React warnings, React.use() or await is needed in Server Components.
    // Here we'll just use it synchronously as it was in the original code, or extract slug from project prop.
    const { slug } = params;

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Image */}
            <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
                <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/40 to-transparent" />

                {/* Back button */}
                <div className="absolute top-6 left-4 sm:left-8 z-10">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-300 bg-black/30 backdrop-blur-md border border-white/10 rounded-lg hover:bg-black/50 hover:text-white transition-all duration-300"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Back to Projects
                    </Link>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-medium text-cyan-400/90 bg-cyan-500/[0.1] border border-cyan-500/20 rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                                {project.title}
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Overview */}
                <AnimatedSection>
                    <div className="mb-16 sm:mb-20">
                        <p className="text-cyan-400 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
                            Overview
                        </p>
                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl">
                            {project.longDescription}
                        </p>
                    </div>
                </AnimatedSection>

                {/* Development Process */}
                <AnimatedSection delay={0.15}>
                    <div className="mb-16 sm:mb-20">
                        <p className="text-cyan-400 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
                            Development Process
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight">
                            How It Was Built
                        </h2>
                        <div className="relative pl-6 sm:pl-8 border-l-2 border-white/[0.06]">
                            <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-cyan-400" />
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                {project.developmentProcess}
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Tech Stack */}
                <AnimatedSection delay={0.2}>
                    <div className="mb-16 sm:mb-20">
                        <p className="text-cyan-400 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
                            Technologies Used
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {project.techStack.map((tech) => (
                                <div
                                    key={tech}
                                    className="px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm font-medium text-gray-300"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>



                {/* Video Section Placeholder */}
                <AnimatedSection delay={0.3}>
                    <div className="mb-16 sm:mb-20">
                        <p className="text-cyan-400 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
                            Gameplay Footage
                        </p>
                        <div className="aspect-video rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center">
                            <div className="text-center">
                                <svg className="w-16 h-16 text-gray-700 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-sm text-gray-600">Video coming soon</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Back to projects */}
                <AnimatedSection delay={0.35}>
                    <div className="text-center">
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-gray-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            Back to All Projects
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
