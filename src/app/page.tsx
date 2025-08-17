// file: app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import Body from '@/components/body/body';
import Loader from '@/components/loader/Loader';
import Navbar from '@/components/navbar/Navbar';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      {/* The body tag will now get its color from globals.css */}
      <div className="w-full h-screen overflow-hidden p-0 sm:p-5">
       
        <div className="h-full no-scrollbar flex items-center justify-center [perspective:1000px]">
          <Body />
        </div>
      </div>
    </>
  );
};
export default Page;