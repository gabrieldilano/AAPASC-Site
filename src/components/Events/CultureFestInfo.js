import { motion } from "framer-motion";
import splitStringUsingRegex from "../util/splitStringUsingRegex";

// Animation variants
const textVariants = {
  hidden: { opacity: 0 }, // Hidden state
  reveal: { 
    opacity: 1, 
    transition: {
      duration: 0.6, // Duration for the reveal animation
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hidden: { opacity: 0 }, // Hidden state
  reveal: { 
    opacity: 1, 
    transition: {
      duration: 0.6, // Duration for the reveal animation
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: {},
  reveal: {
    transition: {
      staggerChildren: 0.6, // Stagger time to ensure sequential appearance
      delayChildren: 0.2 // Short delay to start the first child's animation
    }
  }
};

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 }
};

export default function CultureFestInfo() {
  return (
    <div className="flex justify-center">
      <div className="max-w-7xl w-full p-4">

        {/* Animated Main Heading */}
        <motion.h1 initial="hidden" whileInView="reveal" transition= {{staggerChildren: 0.02}} className="optigurney text-5xl sm:text-7xl md:text-9xl text-center mt-20">{splitStringUsingRegex("CULTUREFEST").map(char => (
          <motion.span key={char} transition={{ duration:1.5}} variants={charVariants}>{char}</motion.span>
        ))}
        </motion.h1>
        <hr className="my-6 border-black sm:mx-auto dark:border-black lg:my-8 mb-20" />

        <section className="bg-white py-12">
          <motion.div
            initial="hidden"
            whileInView="reveal"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div>
              {/* Animated Subheading */}
              <motion.h2
                initial="hidden"
                whileInView="reveal"
                viewport={{ once: false, amount: 0.2 }}
                variants={textVariants}
                className="michroma text-3xl md:text-4xl mt-2"
              >
                Our signature end-of-year event celebrating AAPI heritage
              </motion.h2>
              
              {/* Animated Paragraph */}
              <motion.p
                initial="hidden"
                whileInView="reveal"
                viewport={{ once: false, amount: 0.2 }}
                variants={textVariants}
                className="articulat-cf font-light mt-12"
              >
                Compromising of headlining artists from across the country, member organization performances, and food trucks, CultureFest aims to amplify AAPI voices and provide a space for AAPI artists and performance groups to showcase their talents.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Animated Icon and Text Items */}
              {[{
                title: "SDFC Field",
                description: "CultureFest is held in the heart of campus",
                iconPath: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
              }, {
                title: "2000+ Attendees",
                description: "all ASU and non-ASU students are welcome",
                iconPath: "M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
              }, {
                title: "20+ Performances",
                description: "Featuring headlining artists and member orgs",
                iconPath: "M7 9.5C7 10.8807 5.88071 12 4.5 12C3.11929 12 2 10.8807 2 9.5C2 8.11929 3.11929 7 4.5 7C5.88071 7 7 8.11929 7 9.5ZM7 9.5V2C7.33333 2.5 7.6 4.6 10 5 M13 19.5L13 11C13 10.09 13 9.63502 13.2466 9.35248C13.4932 9.06993 13.9938 9.00163 14.9949 8.86504C18.0085 8.45385 20.2013 7.19797 21.3696 6.42937C21.6498 6.24509 21.7898 6.15295 21.8949 6.20961C22 6.26627 22 6.43179 22 6.76283V17.9259 M13 13C17.8 13 21 10.6667 22 10"
              }, {
                title: "Food and Vendors",
                description: "Supporting local AAPI businesses within the community",
                iconPath: "M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              }].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="reveal"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={iconVariants}
                  className="flex items-center"
                >
                  <div className="p-4">
                    <svg
                      className="w-6 h-6 text-black"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={item.iconPath}
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="articulat-cf text-xl">{item.title}</h4>
                    <p className="articulat-cf text-sm mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}