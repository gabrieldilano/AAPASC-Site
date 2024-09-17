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
    }
  }
};

// Container animation variants for staggering
const containerVariants = {
  hidden: {},
  reveal: {
    transition: {
      staggerChildren: 0.3, // time between the start of each card animation
    }
  }
};

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 }
};

export default function GetInvolvedSection() {
  return (
    <div className="bg-black text-white px-6 py-12 h-[100vh] flex items-center">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="optigurney text-9xl mt-20">Get Involved</h1>
          <hr className="my-6 border-white lg:my-8" />
        </div>
      </div>
    </div>
  );
}
