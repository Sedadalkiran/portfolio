"use client";

import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
    return (
        <section id="projects" className="relative py-24 sm:py-32 px-4 overflow-x-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-500/3 blur-[150px]" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/3 blur-[120px]" />

            <div className="max-w-6xl mx-auto">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <p className="text-cyan-400 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
                            Portfolio
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Featured Projects
                        </h2>
                        <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
                            A selection of gameplay systems and tools built with Unreal Engine.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <AnimatedSection key={project.slug} delay={index * 0.12}>
                            <ProjectCard project={project} index={index} />
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
