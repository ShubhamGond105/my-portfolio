"use client";

import { useRef, useLayoutEffect } from "react";
import { portfolioData } from "@/lib/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(".exp-card");

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="experience" className="py-32 relative z-10 w-full min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-20 text-center">
          <span className="text-accent italic">02.</span> Experience
        </h2>

        <div ref={containerRef} className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-foreground/20 -translate-x-1/2" />

          {portfolioData.experience.map((exp, idx) => (
            <div
              key={idx}
              className={`exp-card relative flex flex-col md:flex-row items-center justify-between mb-16 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-accent -translate-x-1/2 z-10 border-4 border-background" />

              {/* Content Card */}
              <div className="w-full md:w-5/12 pl-8 md:pl-0">
                <div className="bg-background/60 backdrop-blur-md border border-foreground/10 p-6 rounded-xl hover:border-accent/50 transition-colors duration-300">
                  <h3 className="font-serif text-2xl font-bold mb-1 text-accent">{exp.role}</h3>
                  <h4 className="font-sans text-lg font-medium mb-2">{exp.company}</h4>
                  <p className="font-mono text-xs text-secondary mb-4">{exp.duration} | {exp.location}</p>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="font-sans text-sm text-foreground/80 flex items-start">
                        <span className="text-accent mr-2 mt-1">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="w-full md:w-5/12 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
