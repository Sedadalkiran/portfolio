"use client";

import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
    return (
        <section id="about" className="relative py-24 sm:py-32 px-4 overflow-x-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            <div className="absolute top-1/2 -left-32 w-64 h-64 rounded-full bg-cyan-500/5 blur-[100px]" />

            <div className="max-w-4xl mx-auto">
                <AnimatedSection>
                    <p className="text-cyan-400 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
                        About Me
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                        Who I Am
                    </h2>
                </AnimatedSection>

                <AnimatedSection delay={0.15}>
                    <div className="relative">
                        {/* Decorative accent line */}
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent rounded-full" />

                        <div className="pl-6 sm:pl-8">
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-200 leading-relaxed md:leading-relaxed">
                                <span className="text-white font-normal">Unreal Engine Gameplay Programmer</span>{" "}
                                with a strong background in{" "}
                                <span className="text-cyan-400 font-normal">combat system design</span>,{" "}
                                <span className="text-purple-400 font-normal">AI behavior development</span>,{" "}
                                and{" "}
                                <span className="text-blue-400 font-normal">animation-driven gameplay systems</span>.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { value: "5+", label: "Years Experience" },
                            { value: "5+", label: "Projects Shipped" },
                            { value: "UE5", label: "Primary Engine" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center sm:text-left">
                                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                    {stat.value}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
