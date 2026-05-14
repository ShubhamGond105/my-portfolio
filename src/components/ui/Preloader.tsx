"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";

export default function Preloader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Wait a minimum time or until 3D is loaded
    if (progress === 100) {
      setTimeout(() => {
        setShow(false);
      }, 1500); // Wait 1.5s after 3D is loaded for dramatic pause
    }
  }, [progress]);

  // Also have a fallback timeout in case 3D fails or takes too long
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 5000); // Max 5 seconds fallback
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground flex items-center gap-2"
            >
              INITIALIZING<span className="text-accent animate-pulse">_</span>
            </motion.div>
            
            <div className="w-64 h-[1px] bg-foreground/20 relative mx-auto overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            
            <div className="mt-4 font-mono text-xs uppercase tracking-widest text-foreground/50 flex justify-between w-64 mx-auto">
              <span>{Math.round(progress)}%</span>
              <span>SYSTEMS ONLINE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
