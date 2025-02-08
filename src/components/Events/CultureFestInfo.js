import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Lazy Load Images
import "react-lazy-load-image-component/src/effects/blur.css"; // Blur effect for lazy loading
import splitStringUsingRegex from "../util/splitStringUsingRegex";

// **Animation Variants**
const popIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// **Optimized Image URLs**
const topImages = [
  "CF-_A3X_SB-39_daz6d8.jpg",
  "CF-_Eaj_SB-14_kitsdf.jpg"
];

const bottomImages = [
  "IMG_1375_mgycuj.jpg",
  "CF-_VSA_SB-44_ztttj4.jpg",
  "IMG_1334_1_hhateh.jpg"
];

export default function CultureFestInfo() {
  return (
    <div className="flex justify-center bg-black text-white">
      <div className="max-w-7xl w-full p-4">
        
        {/* Main Heading */}
        <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={popIn} className="optigurney text-5xl sm:text-7xl md:text-9xl text-center mt-20">
          {splitStringUsingRegex("CULTUREFEST").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </motion.h1>
        <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8 mb-20" />

        {/* Event Description */}
        <section className="py-12 text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={popIn} className="michroma text-3xl md:text-4xl mt-2">
            Our signature end-of-year event celebrating AAPI heritage.
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={popIn} className="articulat-cf font-light mt-12 max-w-2xl mx-auto">
            Featuring headlining artists, cultural performances, and a variety of food and vendors, CultureFest amplifies AAPI voices and provides a stage for local talent.
          </motion.p>
        </section>

        {/* **Image Grid with Reduced Spacing** */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {topImages.map((src, index) => (
            <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={popIn}>
              <LazyLoadImage
                src={`https://res.cloudinary.com/dc1fdigvg/image/upload/w_1200,h_800,c_fill,q_auto:low/v1731887970/${src}`}
                alt={`CultureFest Top Image ${index + 1}`}
                effect="blur"
                className="h-[500px] w-full rounded-lg object-cover"
              />
            </motion.div>
          ))}
        </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] mt-[1px]">

          {bottomImages.map((src, index) => (
            <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={popIn}>
              <LazyLoadImage
                src={`https://res.cloudinary.com/dc1fdigvg/image/upload/w_800,h_600,c_fill,q_auto:low/v1731887970/${src}`}
                alt={`CultureFest Bottom Image ${index + 1}`}
                effect="blur"
                className="h-[350px] w-full rounded-lg object-cover"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
