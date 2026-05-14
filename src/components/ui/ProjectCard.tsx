"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  bullets: string[];
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ title, description, tech, bullets, videoUrl, liveUrl, githubUrl }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Reduced tilt angle for mobile/better stability
    const rotateXValue = ((y - centerY) / centerY) * -6;
    const rotateYValue = ((x - centerX) / centerX) * 6;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-background/60 backdrop-blur-md border border-foreground/10 rounded-2xl p-6 md:p-8 hover:border-accent/50 transition-colors cursor-pointer overflow-hidden flex flex-col min-h-[380px]"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {/* Video Background - Optimized for mobile/responsive autoPlay */}
      {videoUrl && (
        <div className="absolute inset-0 z-0 transition-opacity duration-500 rounded-2xl overflow-hidden opacity-10 group-hover:opacity-25" style={{ transform: "translateZ(-20px)" }}>
          <video 
            src={videoUrl} 
            muted 
            loop 
            autoPlay
            playsInline
            className="w-full h-full object-cover grayscale mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-background/40"></div>
        </div>
      )}

      <div className="relative z-10 flex-grow flex flex-col" style={{ transform: "translateZ(30px)" }}>
        <div className="flex justify-between items-start mb-6">
          <div className="text-accent group-hover:scale-110 transition-transform">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="flex gap-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
            {githubUrl && githubUrl !== "#" && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="GitHub Repository">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            )}
            {liveUrl && liveUrl !== "#" && (
              <a href={liveUrl} target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Live Project">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-accent transition-colors drop-shadow-md">{title}</h3>
        <p className="font-sans text-sm text-foreground/80 mb-6 leading-relaxed line-clamp-3 md:line-clamp-none">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {tech.split(", ").map((t, i) => (
            <span key={i} className="font-mono text-[10px] uppercase tracking-wider text-secondary px-2 py-1 border border-secondary/20 rounded-full bg-background/50 backdrop-blur-md">
              {t}
            </span>
          ))}
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ transform: "translateZ(-10px)" }} />
    </motion.div>
  );
}
