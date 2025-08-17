'use client'
import React from 'react'
import { TextScroll } from '../ui/text-scroll'
import WrapButton from '@/components/ui/wrap-button'
import { FaLinkedin, FaGithub, FaJava } from "react-icons/fa"
import { motion } from 'framer-motion'
import { SiLeetcode, SiPython, SiJavascript, SiTypescript, SiCplusplus, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiHtml5, SiCss3, SiGit, SiPostman } from 'react-icons/si'
import { IoCheckmarkCircle } from "react-icons/io5";

// THE FIX: Add the missing data arrays back here
const techStack = [
  { name: 'Java', icon: <FaJava size={32} /> },
  { name: 'Python', icon: <SiPython size={32} /> },
  { name: 'JavaScript', icon: <SiJavascript size={32} /> },
  { name: 'TypeScript', icon: <SiTypescript size={32} /> },
  { name: 'C++', icon: <SiCplusplus size={32} /> },
  { name: 'React', icon: <SiReact size={32} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={32} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={32} /> },
  { name: 'Express', icon: <SiExpress size={32} /> },
  { name: 'MongoDB', icon: <SiMongodb size={32} /> },
  { name: 'MySQL', icon: <SiMysql size={32} /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={32} /> },
  { name: 'HTML5', icon: <SiHtml5 size={32} /> },
  { name: 'CSS3', icon: <SiCss3 size={32} /> },
  { name: 'Git', icon: <SiGit size={32} /> },
  { name: 'Postman', icon: <SiPostman size={32} /> },
];

const professionalSkills = [
  'API Integration (Gemini)',
  'Full-Stack Development',
  'Leadership & Mentorship',
  'Cloud Computing (Google Cloud)',
  'Rapid Prototyping (Hackathons)',
  'Agile Methodologies',
  'Code Quality Assurance',
  'UI/UX Principles',
];

const socialLinks = [
  { name: 'LinkedIn', icon: <FaLinkedin size={28} />, href: 'https://www.linkedin.com/in/shubham-gond-13ab41242/' },
  { name: 'GitHub', icon: <FaGithub size={28} />, href: 'https://github.com/ShubhamGond105' },
  { name: 'LeetCode', icon: <SiLeetcode size={28} />, href: 'https://leetcode.com/u/SHUBHAM GOND/' },
];

const Part1 = () => {
  const aboutText = "I'm a passionate Information Technology student specializing in full-stack development and AI integration. I have hands-on experience building AI-powered applications with the Gemini API to analyze code and resumes, as well as developing complete e-commerce platforms. I thrive on creating efficient, high-quality solutions that improve development workflows and user experiences.";

  return (
    <div className="flex flex-col items-center justify-start p-2 md:p-1">
      <TextScroll
        className="font-display text-center text-4xl font-semibold tracking-tighter text-foreground md:text-2xl md:leading-[0rem] mb-4"
        text="Developer AI Enthusiast Programmer"
      />
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} className="w-32 h-32 rounded-full overflow-hidden border-4 border-border shadow-lg">
            <img src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </motion.div>
          <a href="/shubhamresume.pdf" target="_blank" rel="noopener noreferrer">
           <WrapButton>Resume</WrapButton>

          </a>
        </div>
        <h1 className="text-2xl font-bold text-primary">SHUBHAM GOND</h1>
      </div>
      <div className="mt-10 w-full max-w-lg text-left">
        <motion.div
          className="mb-8 bg-card/50 backdrop-blur-md border border-border rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold text-primary pb-2">About Me 💡</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">{aboutText}</p>
        </motion.div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-primary pb-2">My Tech Stack 🛠️</h2>
          <div className="mt-4 grid grid-cols-4 sm:grid-cols-6 gap-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center justify-center gap-2 p-3 bg-secondary/50 border border-border rounded-lg transition-all hover:bg-secondary/80 hover:border-blue-800 hover:scale-105" title={tech.name}>
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-primary pb-2">Professional Skills 🧠</h2>
          <ul className="mt-4 space-y-2">
            {professionalSkills.map((skill) => (
              <li key={skill} className="flex items-center gap-3">
                <IoCheckmarkCircle className="text-primary" size={20} />
                <span className="text-foreground">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary pb-2">Connect with Me 🔗</h2>
          <div className="mt-4 flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" title={link.name}
                className={`flex items-center justify-center w-14 h-14 bg-secondary/50 border border-border rounded-full text-muted-foreground transition-colors hover:border-primary hover:text-primary`}
                whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Part1;