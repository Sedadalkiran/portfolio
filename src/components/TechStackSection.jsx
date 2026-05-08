"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const techItems = [
    {
        name: "Unreal Engine",
        description: "Primary development platform for AAA-quality gameplay systems and real-time experiences.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182a9.818 9.818 0 110 19.636 9.818 9.818 0 010-19.636zm-1.09 4.363c-.502.2-.92.57-1.178 1.09l-.117.255v4.855l-2.073 1.91.073.108c.38.536.834 1.012 1.345 1.413l.255.19 2.182-2.182v-4.69l2.4 1.636 1.455-1.018V7.636l-.218-.145C13.527 6.472 11.818 6.145 10.91 6.545z" />
            </svg>
        ),
        gradient: "from-cyan-500 to-blue-500",
        shadowColor: "shadow-cyan-500/20",
    },
    {
        name: "Blueprint",
        description: "Visual scripting for rapid prototyping, designer-facing tools, and gameplay iteration.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        ),
        gradient: "from-blue-500 to-purple-500",
        shadowColor: "shadow-blue-500/20",
    },
    {
        name: "C++",
        description: "Core systems programming for performance-critical gameplay logic and engine extensions.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor">
                <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.567 3.567 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" />
            </svg>
        ),
        gradient: "from-purple-500 to-pink-500",
        shadowColor: "shadow-purple-500/20",
    },
];

export default function TechStackSection() {
    return (
        <section id="tech-stack" className="relative py-24 sm:py-32 px-4 overflow-x-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px]" />

            <div className="max-w-5xl mx-auto">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <p className="text-cyan-400 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
                            Technologies
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Tech Stack
                        </h2>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {techItems.map((item, index) => (
                        <AnimatedSection key={item.name} delay={index * 0.12}>
                            <motion.div
                                whileHover={{ y: -6, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`group relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:${item.shadowColor} hover:shadow-2xl transition-all duration-500 h-full`}
                            >
                                {/* Glow on hover */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                                <div className="relative">
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-10 text-white mb-5`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
