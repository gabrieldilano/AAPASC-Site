import { motion } from "framer-motion";
import splitStringUsingRegex from "../util/splitStringUsingRegex";

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  reveal: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // duration for each card
    },
  },
};

// Container animation variants for staggering
const containerVariants = {
  hidden: {},
  reveal: {
    transition: {
      staggerChildren: 0.3, // time between the start of each card animation
    },
  },
};

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

export default function GetInvolvedSection() {
  return (
    <div className="bg-black text-white px-4 py-12 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className="text-center mt-12 sm:mt-20 mb-12 sm:mb-20">
          <motion.h1
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
            className="optigurney text-5xl sm:text-6xl md:text-8xl lg:text-9xl"
          >
            {splitStringUsingRegex("Get Involved").map((char, index) => (
              <motion.span key={index} transition={{ duration: 1 }} variants={charVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <hr className="my-6 border-white w-3/4 mx-auto lg:my-8" />
        </div>

        {/* Info Card Section (Centered) */}
        <motion.div
          initial="hidden"
          whileInView="reveal"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
          className="flex justify-center items-center"
        >
          <motion.div
            variants={cardVariants}
            className="bg-transparent border-white border-[1px] rounded-3xl text-white p-6 flex flex-col justify-between max-w-md w-full text-center"
          >
            <motion.h2
              initial="hidden"
              whileInView="reveal"
              transition={{ staggerChildren: 0.02 }}
              viewport={{ once: false, amount: 0.2 }}
              className="michroma text-3xl md:text-3xl lg:text-5xl mt-2"
            >
              {splitStringUsingRegex("Join Our Community").map((char) => (
                <motion.span key={char} transition={{ duration: 0.5 }} variants={charVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h2>

            <p className="articulat-cf font-light text-lg md:text-xl mt-6">
              Connect with students across the campus and help build a stronger AAPI community. Get involved in our events and initiatives!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
