"use client";

import { motion } from "framer-motion";
import TextReveal from "../ui/TextReveal";
import MagneticButton from "../ui/MagneticButton";
import { portfolioData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 font-mono text-xs md:text-sm tracking-widest text-accent uppercase"
        >
          &lt; Hello World /&gt;
        </motion.div>

        <h1 className="font-serif text-5xl md:text-8xl lg:text-[10rem] font-bold leading-none tracking-tighter text-foreground mb-6 drop-shadow-md">
          <TextReveal text="SHUBHAM" />
          <br />
          <TextReveal text="GOND." delay={0.3} />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-sans text-lg md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-12 font-light"
        >
          {portfolioData.role.split(" & ").map((part, i) => (
            <span key={i}>
              {part}
              {i === 0 && <span className="text-accent italic px-2">&</span>}
            </span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <MagneticButton href="#projects" className="bg-foreground text-background border-none hover:bg-accent hover:text-white">
            View Projects
          </MagneticButton>
          <MagneticButton href="#about">
            About Me
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-xs tracking-widest uppercase text-foreground/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
