import React, { useEffect } from 'react';
import 'flowbite/dist/flowbite.min.js';
import { Carousel } from 'flowbite'; // Import the Carousel class

export default function CommunityCarousel() {
  useEffect(() => {
    // Locate the carousel element
    const carouselElement = document.querySelector('[data-carousel="slide"]');
    
    if (carouselElement) {
      // Define the items to be displayed in the carousel
      const items = carouselElement.querySelectorAll('[data-carousel-item]');
      
      // Define options for the carousel if needed
      const options = {
        interval: 3000, // Time interval for auto sliding (in ms)
        indicators: {
          activeClasses: 'bg-blue-600',
          inactiveClasses: 'bg-gray-400'
        }
      };
      
      // Initialize the Carousel
      new Carousel(items, options);
    }
  }, []);
  return (
    <div id="gallery" className="relative w-full h-[66vh] " data-carousel="slide" style={{ zIndex: 1 }}>
      {/* Carousel wrapper */}
      <div className="relative h-[66vh] overflow-hidden rounded-lg">
        {/* Item 1 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://res.cloudinary.com/dq6oea49h/image/upload/v1722462676/IMG_1354_uvqtxy.jpg"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Image 1"
          />
        </div>
        {/* Item 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
          <img
            src="https://res.cloudinary.com/dq6oea49h/image/upload/v1722462677/IMG_1331_seyrpl.jpg"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Image 2"
          />
        </div>
        {/* Item 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://res.cloudinary.com/dq6oea49h/image/upload/v1722462680/IMG_1366_fkbvpa.jpg"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Image 3"
          />
        </div>
        {/* Item 4 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://res.cloudinary.com/dq6oea49h/image/upload/v1722544575/IMG_1292_aukpao.jpg"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Image 4"
          />
        </div>
        {/* Item 5 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://res.cloudinary.com/dq6oea49h/image/upload/v1722462676/IMG_1375_t0zdcr.jpg"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Image 5"
          />
        </div>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
