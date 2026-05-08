"use client";

import AnimatedSection from "./AnimatedSection";

export default function ContactSection() {
    return (
        <section id="contact" className="relative py-24 sm:py-32 px-4 overflow-x-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[150px]" />

            <div className="max-w-3xl mx-auto text-center">
                <AnimatedSection>
                    <p className="text-cyan-400 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
                        Get in Touch
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto mb-12">
                        Interested in collaboration or have a project in mind? I&apos;d love to hear from you.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.15}>
                    {/* Email */}
                    <a
                        href="mailto:sedadalkiran0@gmail.com"
                        className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all duration-300 mb-8 w-full sm:w-auto justify-center"
                    >
                        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-300 group-hover:text-white transition-colors text-sm sm:text-base">
                            sedadalkiran0@gmail.com
                        </span>
                    </a>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4">
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/sedadalkiran-ue/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/Sedadalkiran"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <svg className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>

                        {/* Download CV */}
                        <a
                            href="/Resume_SedaDalkiran.pdf"
                            download
                            className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all duration-300"
                            aria-label="Download CV"
                        >
                            <svg className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
