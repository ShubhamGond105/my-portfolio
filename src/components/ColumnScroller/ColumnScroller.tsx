// file: components/ColumnScroller.tsx

'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function ColumnScroller({ children }: { children: React.ReactNode }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const lenis = new Lenis({
      wrapper: contentRef.current,
      smoothTouch: true,
      duration: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={contentRef} className="h-full overflow-y-auto hide-scrollbar">
      {children}
    </div>
  );
}