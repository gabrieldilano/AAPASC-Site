import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Lazy Load Images
import "react-lazy-load-image-component/src/effects/blur.css"; // Blur effect for lazy loading

// **Animation Variants**
const popIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// **Optimized Image URLs**
const topImages = [
  "CF-_PASA_SB-10_mscivj.jpg",
  "CF-_JAcob-DJ_SB-1_eac1e3.jpg"
];

const verticalBanners = [
  "CF-_BAM_SB-8_lxtph9.jpg",
  "CF-_A3X_SB-6_anlsae.jpg",
  "CF-_Serenity_SB-54_ldnm6p.jpg"
];

export default function CultureFestOrgPerformances() {
  return (
    <div className="flex justify-center bg-white text-black">
      <div className="max-w-7xl w-full p-4">
        
        {/* Main Heading */}
        <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={popIn} className="optigurney text-4xl sm:text-7xl md:text-9xl text-center mt-20">
          Community Performances
        </motion.h1>
        <hr className="my-6 border-black sm:mx-auto dark:border-black lg:my-8 mb-20" />

        {/* **Top Image Grid (2 Large Images, No Gaps)** */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {topImages.map((src, index) => (
            <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={popIn}>
              <LazyLoadImage
                src={`https://res.cloudinary.com/dc1fdigvg/image/upload/w_1200,h_800,c_fill,q_auto:low/v1731887970/${src}`}
                alt={`Performance Top Image ${index + 1}`}
                effect="blur"
                className="h-[450px] w-full rounded-lg object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* **Bottom Vertical Banner Grid (3 Tall Images, No Gaps)** */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] mt-[1px]">
          {verticalBanners.map((src, index) => (
            <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={popIn}>
              <LazyLoadImage
                src={`https://res.cloudinary.com/dc1fdigvg/image/upload/w_700,h_1200,c_fill,q_auto:low/v1731887970/${src}`}
                alt={`Performance Banner ${index + 1}`}
                effect="blur"
                className="w-full h-[800px] rounded-lg object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Photographer Credit */}
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={popIn} className="articulat-cf text-sm ms-4 mt-4 mb-1">
          PHOTOGRAPHY BY @PRESET.STEVEN
        </motion.p>

      </div>
    </div>
  );
}
