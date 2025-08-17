'use client';
import React from 'react';
// THE FIX: Import the 'Variants' type from framer-motion
import { motion, Variants } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    title: 'AI Code Reviewer',
    date: "Mar '25",
    description: "Developed an AI-powered code reviewer using the Gemini API to automatically analyze source code for best practices, bugs, and security vulnerabilities.",
    tech: ['Gemini API', 'React.js', 'Node.js', 'REST APIs'],
    githubLink: 'https://github.com/ShubhamGond105/Al-Code-Reviewer',
    mediaType: 'video',
    mediaSrc: '/videos/codereview.mp4'
  },
  {
    title: 'Resume Reviewer',
    date: "Apr '25",
    description: "Built an AI platform using the Gemini API and NLP to extract resume content and provide real-time suggestions for formatting, wording, and ATS alignment.",
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Gemini AI', 'MongoDB'],
    githubLink: 'https://github.com/ShubhamGond105/Resume-Reviewer',
    mediaType: 'video',
    mediaSrc: '/videos/resume-reviewer-project.mp4'
  },
  {
    title: 'Trends-E-Commerce Web App',
    date: "Oct '24",
    description: "A full-stack e-commerce platform with features like product catalog, cart, order tracking, and an admin dashboard, built using the MERN stack.",
    tech: ['MERN Stack', 'JWT', 'Tailwind CSS'],
    githubLink: 'https://github.com/ShubhamGond105/Trends-E-Commerce',
    mediaType: 'video',
    mediaSrc: '/videos/ecom.mp4'
  },
];

// THE FIX: Explicitly type the animation object with ': Variants'
const titleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// THE FIX: Explicitly type the animation object with ': Variants'
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

const Part2 = () => {
  const title = "Projects".split('');
  return (
    <section className="w-full h-full p-4">
      <motion.h2
        className="text-3xl font-bold text-primary mb-8 flex overflow-hidden py-2"
        variants={titleContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {title.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            whileHover={{ scale: 1.2, y: -5, color: 'hsl(var(--primary))' }}
            className="cursor-pointer"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h2>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-card/50 border border-border rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="w-full h-48">
              {project.mediaType === 'video' ? (
                <video
                  src={project.mediaSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover pointer-events-none"
                />
              ) : (
                <Image
                  src={project.mediaSrc}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
                <span className="text-sm text-muted-foreground flex-shrink-0 ml-4">{project.date}</span>
              </div>
              <p className="text-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap items-end justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                      {project.tech.map((techItem) => (
                      <span key={techItem} className="bg-secondary text-primary text-xs font-medium px-3 py-1 rounded-full">
                          {techItem}
                      </span>
                      ))}
                  </div>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FaGithub />
                    <span className='text-sm'>View Code</span>
                  </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Part2;