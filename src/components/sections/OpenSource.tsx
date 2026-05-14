"use client";

import { portfolioData } from "@/lib/data";
import { GitPullRequest, Star } from "lucide-react";

export default function OpenSource() {
  return (
    <section className="py-32 relative z-10 w-full bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            <span className="text-accent italic">04.</span> Open Source
          </h2>
          <div className="mt-4 md:mt-0 flex items-center gap-2 font-mono text-sm text-accent">
            <Star size={16} /> 96K+ Combined Stars
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.openSource.map((os, idx) => (
            <div key={idx} className="group relative bg-background/5 p-8 border border-background/10 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <GitPullRequest className="text-accent" />
                  <span className="font-mono text-xs uppercase tracking-widest text-background/70">{os.repo}</span>
                </div>
                <span className="font-mono text-xs font-bold text-background bg-accent px-2 py-1">{os.pr}</span>
              </div>
              <p className="font-sans text-sm leading-relaxed text-background/80">
                {os.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
