'use client';

import React from 'react';
import { Button } from '@mui/material';
import { FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const HomepageVideo: React.FC = () => {
    const router = useRouter();
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="top-0 left-0 absolute">
        <video
          src="paragliding.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-1/2 left-1/4 transform w-1/2 p-16 -translate-x-1/2 -translate-y-1/2 text-white flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Unlock the World of Adventure</h1>
        <p className="text-lg">Discover the thrill of paragliding in the heart of nature</p>
        <div className="flex gap-4">
          <Button
            variant="contained"
            className="bg-blue-500 text-white px-4 py-8 gap-2 rounded hover:bg-blue-600 hover:text-white"
          onClick={() => router.push('/favorites')}>
            Book Now <FaArrowRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomepageVideo;
