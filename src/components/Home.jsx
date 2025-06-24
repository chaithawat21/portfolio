import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust based on your breakpoints
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => setIsPlaying(true), 2000); // Delay autoplay on large screens
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const handleOnReady = () => {
    setIsLoading(false); // Hide loader once the video is ready
  };

  return (
    <section id="Home" className="flex flex-col justify-center items-center bg-black">
      
      <h1 className="text-white text-[3rem] font-[400] absolute z-10 top-[4rem] sm:text-[2rem] sm:top-[3.5rem]">
        CHAITHAWAT PINSUWAN
      </h1>
      
      {/* <p className="text-white text-[1.915rem] font-[100] absolute z-10 top-[7rem] sm:text-[1.275rem] sm:top-[5.5rem]">
        Art Director / Motion Graphic / Compositor
      </p> */}

      <div className="w-screen h-screen relative">
        {isLoading ? (
          <motion.div
            className="absolute inset-0 flex justify-center items-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-white rounded-full animate-bounce" />
              <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-200" />
              <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-400" />
            </div>
          </motion.div>
        ) : null}

        <ReactPlayer
          url="https://player.vimeo.com/video/1095988553"
          width="100%"
          height="100%"
          title="REEL 2024"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
          playing={isPlaying}
          muted={true}
          loop={true}
          onReady={handleOnReady}
          onClick={() => isMobile && setIsPlaying((prev) => !prev)} // Click to play/pause on mobile
          controls={isMobile} // Show controls on small screens
        />
        
      </div>
<div className="w-full flex justify-end items-center px-4 mt-4">
  <a
    href="https://vimeo.com/1095988553?share=copy"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-center text-[.75rem] font-[200] hover:underline"
  >
    View on Vimeo REEL 2025
  </a>
</div>

<div className="w-full flex justify-end items-center px-4 mt-4">
  <a
    href="https://vimeo.com/1013053963?share=copy"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-center text-[.75rem] font-[200] hover:underline"
  >
    View on Vimeo REEL 2024
  </a>
</div>

    </section>
    
  );
}

export default Home;
