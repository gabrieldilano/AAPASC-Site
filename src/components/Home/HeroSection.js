import splitStringUsingRegex from "../util/splitStringUsingRegex";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Lazy Load Images
import "react-lazy-load-image-component/src/effects/blur.css"; // Blur effect for lazy loading


const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  reveal: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <div className="flex justify-center min-h-screen bg-black">
        <div className="max-w-7xl w-full p-4">
          <motion.h1
            initial="hidden"
            whileInView="reveal"
            viewport={{ once: false, amount: 0.2 }}
            variants={textVariants}
            className="optigurney text-white text-3xl md:text-5xl lg:text-7xl xl:text-9xl text-center mt-24"
          >
            What is AAPASC?
          </motion.h1>
          <hr className="my-6 border-white sm:mx-auto lg:my-8 mb-12" />

          {/* Content Container */}
          <div className="gap-16 items-start py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-12 md:mb-0">
              <motion.p
                initial="hidden"
                whileInView="reveal"
                transition={{ staggerChildren: 0.02 }}
                className="michroma mb-4 text-xl md:text-2xl lg:text-3xl text-white"
              >
                {splitStringUsingRegex(
                  "AAPASC is the alliance of over 20 clubs and organizations centered around AAPI identity at ASU"
                ).map((char) => (
                  <motion.span
                    key={char}
                    transition={{ duration: 0.5 }}
                    variants={charVariants}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            {/* Image Grid Section */}
            <div className="grid grid-cols-2 gap-4 h-auto overflow-hidden">
              <LazyLoadImage
                className="w-full aspect-[4/3] rounded-lg object-cover"
                src="https://res.cloudinary.com/dc1fdigvg/image/upload/w_800,h_600,c_fill/v1731826778/rfyr9ebxlxarotvpfgje.jpg"
                width={800}
                height={600}
              />
              <LazyLoadImage
                className="w-full aspect-[4/3] rounded-lg object-cover"
                src="https://res.cloudinary.com/dc1fdigvg/image/upload/w_800,h_600,c_fill/v1731826774/g6dipg6wtqwush1uxuds.jpg"
                width={800}
                height={600}
              />
              <LazyLoadImage
                className="w-full aspect-[4/3] rounded-lg object-cover"
                src="https://res.cloudinary.com/dq6oea49h/image/upload/w_800,h_600,c_fill/t_43landscape/v1726526548/AAPASC_Community-144_1_ri5h27.jpg"
                width={800}
                height={600}
              />
             
              <LazyLoadImage
                className="w-full aspect-[4/3] rounded-lg object-cover"
                src="https://res.cloudinary.com/dq6oea49h/image/upload/w_800,h_600,c_fill/v1726601903/DSC_0085_rmsxff.webp"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
