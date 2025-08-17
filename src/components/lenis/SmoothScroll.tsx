// components/SmoothScroll.tsx

'use client'; // This line is important for Next.js

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) { // You can optionally add the 'number' type here
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    }
  }, []);

  return null;
}