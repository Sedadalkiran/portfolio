"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/20 transition-all duration-500"
        >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                    {project.shortDescription}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 text-[11px] font-medium text-cyan-400/80 bg-cyan-500/[0.08] border border-cyan-500/10 rounded-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* View Project Link */}
                <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-300 group/link"
                >
                    View Project
                    <svg
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </motion.div>
    );
}
