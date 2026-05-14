"use client";

import { useRef, useLayoutEffect } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/lib/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useLayoutEffect(() => {
    if (!cardRef.current) return;
    
    gsap.fromTo(
      cardRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative z-10 w-full min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div ref={cardRef} className="max-w-4xl mx-auto bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.05)]">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
            <span className="text-accent italic">01.</span> About Me
          </h2>
          
          <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-12">
            {portfolioData.about}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-sans font-bold uppercase tracking-widest text-sm mb-6 text-foreground">
                Education
              </h3>
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="mb-6 border-l-2 border-accent pl-4">
                  <h4 className="font-serif font-bold text-xl">{edu.institution}</h4>
                  <p className="text-sm font-sans mt-1 text-foreground/70">{edu.degree}</p>
                  <p className="text-xs font-mono mt-2 text-secondary">{edu.duration} | {edu.score}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-sans font-bold uppercase tracking-widest text-sm mb-6 text-foreground">
                Core Arsenal
              </h3>
              <div className="flex flex-wrap gap-2">
                {[...portfolioData.skills.languages, ...portfolioData.skills.gen_ai].slice(0, 15).map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="px-3 py-1 text-xs font-mono border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
