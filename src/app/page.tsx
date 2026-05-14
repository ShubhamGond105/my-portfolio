import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import OpenSource from "@/components/sections/OpenSource";
import ContactUs from "@/components/sections/ContactUs";
import Navbar from "@/components/layout/Navbar";
import DotGrid from "@/components/ui/DotGrid";
import Scene from "@/components/canvas/Scene";
import Preloader from "@/components/ui/Preloader";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen selection:bg-accent selection:text-white overflow-hidden">
      <Preloader />
      <DotGrid />
      <Scene />
      <Navbar />
      
      <div className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <OpenSource />
        <ContactUs />
      </div>
    </main>
  );
}
