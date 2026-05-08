"use client";

export default function Footer() {
    return (
        <footer className="relative border-t border-white/[0.04] bg-[#08080d]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Logo / Copyright */}
                    <div className="flex flex-col items-center sm:items-start gap-1">
                        <span className="text-sm font-bold">
                            <span className="text-white">DEV</span>
                            <span className="text-cyan-400">.FOLIO</span>
                        </span>
                        <p className="text-xs text-gray-600">
                            © {new Date().getFullYear()} Seda Dalkiran. All rights reserved.
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/sedadalkiran-ue/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-600 hover:text-cyan-400 transition-colors duration-300"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Sedadalkiran"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-600 hover:text-cyan-400 transition-colors duration-300"
                        >
                            GitHub
                        </a>
                        <a
                            href="sedadalkiran0@gmail.com"
                            className="text-xs text-gray-600 hover:text-cyan-400 transition-colors duration-300"
                        >
                            Email
                        </a>
                    </div>

                    {/* Back to top */}
                    <a
                        href="#hero"
                        className="group flex items-center gap-2 text-xs text-gray-600 hover:text-white transition-colors duration-300"
                    >
                        Back to top
                        <svg
                            className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
