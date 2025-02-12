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

export default function RolesSection() {
  return (
    <div className="bg-white text-white px-6 py-12 min-h-screen flex items-center">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header Section */}
        <div className="text-center mt-12 sm:mt-24 mb-12 sm:mb-20">
          <h1 className="optigurney text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-black">
            Our Roles
          </h1>
          <hr className="my-6 border-black lg:my-8 w-3/4 mx-auto" />
        </div>

        {/* Info Cards Section */}
        <motion.div
          initial="hidden"
          whileInView="reveal"
          viewport={{ once: false, amount: 0.2 }} // Ensure animation happens again when scrolled into view
          variants={containerVariants} // Staggering effect for cards
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants} // Apply individual card animation
            className="bg-transparent border-black border-[1px] rounded-3xl text-black p-6 flex flex-col h-full"
          >
            <motion.h2
              initial="hidden"
              whileInView="reveal"
              transition={{ staggerChildren: 0.02 }}
              viewport={{ once: false, amount: 0.2 }} // Same for header text
              className="michroma text-2xl md:text-3xl lg:text-4xl mt-2"
            >
              {splitStringUsingRegex("Host Campus-Wide Events").map((char) => (
                <motion.span
                  key={char}
                  transition={{ duration: 0.5 }}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>

            <p className="articulat-cf font-light text-lg md:text-xl mt-6">
              We host vibrant campus-wide events that celebrate Asian American and Pacific Islander culture. 
              These events provide a space for community building and bringing students together.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            className="bg-transparent border-black border-[1px] rounded-3xl text-black p-6 flex flex-col h-full"
          >
            <motion.h2
              initial="hidden"
              whileInView="reveal"
              transition={{ staggerChildren: 0.02 }}
              viewport={{ once: false, amount: 0.2 }} // Ensure animation repeats when in view
              className="michroma text-2xl md:text-3xl lg:text-4xl mt-2"
            >
              {splitStringUsingRegex("Support Member Organizations").map(
                (char) => (
                  <motion.span
                    key={char}
                    transition={{ duration: 0.5 }}
                    variants={charVariants}
                  >
                    {char}
                  </motion.span>
                )
              )}
            </motion.h2>

            <p className="articulat-cf font-light text-lg md:text-xl mt-6">
              We offer resources and guidance to various member organizations, helping them achieve their goals 
              and make a lasting impact on campus and beyond.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            className="bg-transparent border-black border-[1px] rounded-3xl text-black p-6 flex flex-col h-full"
          >
            <motion.h2
              initial="hidden"
              whileInView="reveal"
              transition={{ staggerChildren: 0.02 }}
              viewport={{ once: false, amount: 0.2 }}
              className="michroma text-2xl md:text-3xl lg:text-4xl mt-2"
            >
              {splitStringUsingRegex("Advocate for the AAPI Community").map(
                (char) => (
                  <motion.span
                    key={char}
                    transition={{ duration: 0.5 }}
                    variants={charVariants}
                  >
                    {char}
                  </motion.span>
                )
              )}
            </motion.h2>

            <p className="articulat-cf font-light text-lg md:text-xl mt-6">
              As a vocal advocate for Asian American and Pacific Islander students, we work to raise awareness of social issues 
              and foster understanding.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
