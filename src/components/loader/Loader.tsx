// file: components/Loader.tsx

'use client';

import React, { useState, useEffect } from 'react';

const Loader = ({ isLoading }: { isLoading: boolean }) => {
  const name = "Shubham Gond";
  const letters = name.split('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const totalDuration = 2500;
      const intervalTime = 25;
      const increment = 100 / (totalDuration / intervalTime);

      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + increment;
        });
      }, intervalTime);

      return () => clearInterval(timer);
    }
  }, [isLoading]);

  return (
    <div
      // 1. ADD 'flex-col' to stack items vertically
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f2027] transition-opacity duration-1000 ease-in-out
      ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-wider">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="inline-block opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h1>

      {/* 2. UPDATE styles to center the text below the name */}
      <p className="text-lg text-white/50 mt-6 font-mono">
        {Math.floor(progress)}%
      </p>
    </div>
  );
};

export default Loader;