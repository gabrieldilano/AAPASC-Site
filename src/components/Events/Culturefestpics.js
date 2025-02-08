import React from "react";
import { motion } from "framer-motion";

// Animation variants for header text
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  reveal: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8 } 
  }
};

// Animation variants for horizontal line
const lineVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  reveal: { 
    opacity: 1, 
    scaleX: 1, 
    transition: { duration: 0.8 } 
  }
};

// Animation variants for images with optional custom props
const imageVariants = {
  hidden: (custom) => ({
    opacity: 0,
    x: custom.x || 100,
    y: custom.y || 0,
    rotate: custom.rotate || 0
  }),
  reveal: (custom) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: { duration: custom.duration || 0.8, delay: custom.delay || 0, ease: "easeOut" }
  })
};

export default function CultureFestPics() {
  // Array of image objects with customization for each image
  const images = [
    {
      src: "https://res.cloudinary.com/dc1fdigvg/image/upload/v1731826778/rfyr9ebxlxarotvpfgje.jpg",
      alt: "Community Pic 1",
      direction: "right", // Slides in from the right
      size: "normal",
      zIndex: 10,
      tilt: "-rotate-6",
      overlap: "-mt-4 -ml-2",
      custom: { x: 100, y: 0, rotate: -6, duration: 0.8, delay: 0 }
    },
    {
      src: "https://res.cloudinary.com/dc1fdigvg/image/upload/v1731826774/g6dipg6wtqwush1uxuds.jpg",
      alt: "Community Pic 2",
      direction: "left", // Slides in from the left
      size: "normal",
      zIndex: 20,
      tilt: "rotate-3",
      overlap: "-mt-8 -ml-4",
      custom: { x: -100, y: 20, rotate: 3, duration: 0.8, delay: 0.3 }
    },
    {
      src: "https://res.cloudinary.com/dc1fdigvg/image/upload/v1731826774/g6dipg6wtqwush1uxuds.jpg",
      alt: "Community Pic 3",
      direction: "center", // Slides in from the bottom to the center
      size: "big",
      zIndex: 30, // Higher z-index to appear above others
      tilt: "-rotate-2",
      overlap: "-mt-6 -ml-3",
      custom: { x: 0, y: 100, rotate: -2, duration: 0.8, delay: 0.6 }
    },
    {
      src: "https://res.cloudinary.com/dc1fdigvg/image/upload/v1731826774/g6dipg6wtqwush1uxuds.jpg",
      alt: "Community Pic 4",
      direction: "left", // Slides in from the left
      size: "normal",
      zIndex: 10,
      tilt: "rotate-6",
      overlap: "-mt-8",
      custom: { x: -100, y: 10, rotate: 6, duration: 0.8, delay: 0.9 }
    }
    // Add more images as needed
  ];

  return (
    <div className="flex justify-center min-h-screen bg-black">
      <div className="max-w-7xl w-full p-4">
        {/* Header Text Animation */}
        <motion.h2
          initial="hidden"
          whileInView="reveal"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
          className="text-left text-xl sm:text-2xl md:text-3xl text-white mt-8"
        >
          Come meet our community!
        </motion.h2>

        {/* Horizontal Line Animation */}
        <motion.hr
          initial="hidden"
          whileInView="reveal"
          viewport={{ once: true, amount: 0.2 }}
          variants={lineVariants}
          className="my-4 border-white w-1/2 origin-left"
        />

        {/* Scrapbook Image Layout */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative w-full ${
                image.size === "big" ? "h-80 md:h-96" : "h-64"
              } rounded-lg overflow-hidden shadow-lg border-2 border-white`}
              style={{
                zIndex: image.zIndex
              }}
              initial="hidden"
              whileInView="reveal"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants}
              custom={image.custom}
            >
              <img
                className={`w-full h-full object-cover ${
                  image.size === "big" ? "scale-105" : ""
                }`}
                src={image.src}
                alt={image.alt}
                loading="lazy" // Enables lazy loading
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
