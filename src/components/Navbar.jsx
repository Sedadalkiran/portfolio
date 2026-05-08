"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl md:text-2xl font-bold tracking-tight group"
                    >
                        <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                            DEV
                        </span>
                        <span className="text-cyan-400 group-hover:text-white transition-colors duration-300">
                            .FOLIO
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-3/4 transition-all duration-300" />
                            </a>
                        ))}
                        <a
                            href="/Resume_SedaDalkiran.pdf"
                            download
                            className="ml-4 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 flex flex-col gap-1.5">
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                className="block w-full h-[2px] bg-white origin-center"
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                className="block w-full h-[2px] bg-white"
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                className="block w-full h-[2px] bg-white origin-center"
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                        className="fixed inset-0 top-0 z-40 md:hidden"
                    >
                        <div className="absolute inset-0 bg-[#0a0a0f]/98 backdrop-blur-2xl" />
                        <div className="relative flex flex-col items-center justify-center h-full gap-8 p-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.08 }}
                                    className="text-2xl font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="/Resume_SedaDalkiran.pdf"
                                download
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-4 px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl hover:border-cyan-400/60 transition-all duration-300"
                            >
                                Download CV
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
