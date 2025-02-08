import { motion } from "framer-motion";
import splitStringUsingRegex from "../util/splitStringUsingRegex";

// Animation variants
const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

export default function LandingSection() {
  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen flex items-start justify-center"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dq6oea49h/image/upload/f_auto,q_auto/v1726522471/CF-_AAPASC_SB-18_ykbuw0.jpg)",
        }}
      >
        {/* Welcome Section */}
        <div className="flex flex-col items-center justify-start text-center p-4 mt-[10vh] w-full max-w-5xl">
          {/* Animated Heading */}
          <motion.h1
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
            className="optigurney text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-white font-bold"
          >
            {splitStringUsingRegex("WELCOME").map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 1 }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Subheading */}
          <motion.p
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
            className="michroma text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold mt-4 max-w-3xl px-4"
          >
            {splitStringUsingRegex(
              "WE ARE THE ASIAN / ASIAN PACIFIC AMERICAN STUDENT COALITION OF ASU"
            ).map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 0.5 }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* Buttons Section */}
          <div className="flex flex-wrap justify-center mt-8 space-x-2 sm:space-x-4">
            <a
              href="/culturefest"
              className="bg-[#2c3c44] text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full font-bold hover:bg-white hover:text-black transition duration-300 mb-4 sm:mb-0"
            >
              Learn More
            </a>
            <a
              href="/events"
              className="bg-[#2c3c44] text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full font-bold hover:bg-white hover:text-black transition duration-300 mb-4 sm:mb-0"
            >
              Upcoming Events
            </a>
            <a
              href="/community"
              className="bg-[#2c3c44] text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full font-bold hover:bg-white hover:text-black transition duration-300 mb-4 sm:mb-0"
            >
              Explore Our Cultural Clubs
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
