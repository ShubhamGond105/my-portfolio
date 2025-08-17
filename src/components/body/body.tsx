// file: body.tsx
import React from 'react';
import Part1 from './part1';
import Part2 from './part2';
import ColumnScroller from '@/components/ColumnScroller/ColumnScroller';

const Body = () => {
  return (
    <div
      // Now using theme variables like `divide-border`
      className="flex flex-row w-full h-[calc(100vh-60px)] rounded-2xl border border-border divide-x divide-border
      transform-gpu [transform-style:preserve-3d] rotate-x-[10deg] scale-90
      hover:rotate-x-0 hover:scale-100 transition-transform duration-700 ease-in-out
      shadow-2xl shadow-black/50"
    >
      <div className="w-1/2 h-full">
        <ColumnScroller>
          <div className="p-2 md:p-0">
            <Part1 />
          </div>
        </ColumnScroller>
      </div>
      <div className="w-1/2 h-full">
        <ColumnScroller>
          <div className="p-2 md:p-8">
            <Part2 />
          </div>
        </ColumnScroller>
      </div>
    </div>
  );
};
export default Body;