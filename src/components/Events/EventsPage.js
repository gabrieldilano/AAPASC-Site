import { useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { LazyLoadImage } from "react-lazy-load-image-component"; // Lazy Load Images
import "react-lazy-load-image-component/src/effects/blur.css"; // Blur effect for lazy loading
import splitStringUsingRegex from "../util/splitStringUsingRegex";

// **Animation Variants for Images**
const popIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// **Component**
export default function EventsPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white text-center">
      <div className="max-w-7xl w-full p-4">
        {/* Vintage Alley Section */}
        <section className="mb-16">
          <h1 className="optigurney text-5xl sm:text-7xl md:text-9xl mt-16">
            {splitStringUsingRegex("VINTAGE ALLEY").map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </h1>
          <hr className="my-4 border-white sm:mx-auto dark:border-white lg:my-6" />
          <h2 className="michroma text-2xl md:text-3xl mt-2 mx-auto max-w-3xl">
            A unique thrift shopping experience featuring vintage and second-hand items. Come and explore rare finds!
          </h2>
          <div className="flex justify-center gap-2 mt-6">
            <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={popIn} viewport={{ once: true }}>
              <LazyLoadImage
                src="https://res.cloudinary.com/dc1fdigvg/image/upload/w_1000,h_1000,c_fill/v1731823009/DSCF0041_vcbf4d.jpg"
                alt="Vintage Alley Image 1"
                effect="blur"
                className="h-56 w-auto rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={popIn} viewport={{ once: true }}>
              <LazyLoadImage
                src="https://res.cloudinary.com/dc1fdigvg/image/upload/w_800,h_600,c_fill/v1731822963/DSCF0051_vyae2u.jpg"
                alt="Vintage Alley Image 2"
                effect="blur"
                className="h-56 w-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Culture Fest Section */}
        <section>
          <h1 className="optigurney text-5xl sm:text-7xl md:text-9xl mt-16">
            {splitStringUsingRegex("CULTUREFEST").map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </h1>
          <hr className="my-4 border-white sm:mx-auto dark:border-white lg:my-6" />
          <h2 className="michroma text-2xl md:text-3xl mt-2 mx-auto max-w-3xl">
            Our signature end-of-year event celebrating AAPI heritage.
          </h2>
          <div className="grid grid-cols-2 gap-2 mt-6">
            <motion.div initial="hidden" whileInView="visible" variants={popIn} viewport={{ once: true }}>
              <LazyLoadImage
                src="https://res.cloudinary.com/dc1fdigvg/image/upload/w_800,h_600,c_fill/v1731882759/CF-_A3X_SB-39_daz6d8.jpg"
                alt="CultureFest Image 1"
                effect="blur"
                className="h-56 w-auto rounded-lg"
              />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" variants={popIn} viewport={{ once: true }}>
              <LazyLoadImage
                src="https://res.cloudinary.com/dc1fdigvg/image/upload/w_400,h_1000,c_fill/v1731888093/CF-_Eaj_SB-14_kitsdf.jpg"
                alt="CultureFest Image 2"
                effect="blur"
                className="h-56 w-auto rounded-lg"
              />
            </motion.div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-6">
            {["IMG_1375_mgycuj.jpg", "CF-_VSA_SB-44_ztttj4.jpg", "IMG_1334_1_hhateh.jpg", "IMG_1305_htfn9m.jpg", "CF-_AAPASC_SB-6_vtlv1h.jpg"].map((src, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" variants={popIn} viewport={{ once: true }}>
                <LazyLoadImage
                  src={`https://res.cloudinary.com/dc1fdigvg/image/upload/w_800,h_600,c_fill/v1731887970/${src}`}
                  alt={`Gallery Image ${index + 1}`}
                  effect="blur"
                  className="h-56 w-auto rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
