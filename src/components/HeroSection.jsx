"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-visible px-4"
        >
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[#0a0a0f]" />
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] animate-pulse-slow animation-delay-2000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/3 blur-[150px]" />
                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="mb-8 flex justify-center"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-white/10 bg-[#12121a]">
                            <Image
                                src="/images/profile1.png"
                                alt="Developer pixel art avatar"
                                fill
                                className="object-cover"
                                style={{ imageRendering: "auto" }}
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Name */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <p className="text-cyan-400 text-sm sm:text-base font-medium tracking-[0.25em] uppercase mb-3">
                        Game Developer
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                        <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
                            Seda
                        </span>
                        <span className="text-white"> </span>
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            DALKIRAN
                        </span>
                    </h1>
                </motion.div>

                {/* Title */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto"
                >
                    Unreal Engine Game Developer
                </motion.p>

                {/* Intro */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.55 }}
                    className="mt-4 text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed"
                >
                    Unreal Engine developer specializing in combat systems, AI behavior, and animation-driven gameplay.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group relative w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative flex items-center justify-center gap-2">
                            View Projects
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </a>
                    <a
                        href="/Resume_SedaDalkiran.pdf"
                        download
                        className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-gray-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download CV
                        </span>
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
                        Scroll
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-5 h-8 border border-gray-700 rounded-full flex justify-center pt-1.5"
                    >
                        <div className="w-1 h-1.5 bg-gray-500 rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
