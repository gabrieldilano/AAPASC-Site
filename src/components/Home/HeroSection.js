import splitStringUsingRegex from "../util/splitStringUsingRegex";
import {motion} from "framer-motion";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  reveal: { 
    opacity: 1, 
    y: 0, 
    transition: {
      duration: 0.5
    }
  }
};

export default function HeroSection () {


    return (
      <>
      <div className="flex justify-center h-[100vh] bg-black">
        <div className="max-w-7xl w-full p-4">
          <motion.h1
            initial="hidden"
            whileInView="reveal"
            viewport={{ once: false, amount: 0.2 }}
            variants={textVariants}
            className="optigurney text-white text-4xl sm:text-7xl md:text-9xl text-center mt-24"
          >
            What is AAPASC?
          </motion.h1>
          <hr className="my-6 border-white sm:mx-auto lg:my-8 mb-20" />
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <motion.p initial="hidden" whileInView="reveal" transition= {{staggerChildren: 0.02}} className="michroma mb-4 text-4xl text-white">{splitStringUsingRegex("AAPASC is the alliance of over 20 clubs and organizations centered around AAPI identity at ASU").map(char => (
              <motion.span key={char} transition={{ duration:0.5}} variants={charVariants}>{char}</motion.span>
              ))}
              </motion.p>
              <p className="articulat-cf font-light mt-16 mb-4 text-white">Our goal is to help maintain a strong AAPI community within ASU by coordinating campus-wide events that cultivate cultural awareness, advocate for and represent the interests and needs of AAPI students, and by remaining active in the community at large.</p>
              
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
              <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                  <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
              </div>
          </div>
        </div>
      </div>
      </>
    );
};