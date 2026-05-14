"use client";

import { portfolioData } from "@/lib/data";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 w-full">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-20">
          <span className="text-accent italic">03.</span> Featured Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              tech={project.tech}
              bullets={project.bullets}
              videoUrl={project.videoUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
