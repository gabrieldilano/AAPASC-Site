import { motion } from "framer-motion";
import splitStringUsingRegex from "../util/splitStringUsingRegex";

const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 }
};

export default function LandingSection() {
    return (
    <>
        <div className="bg-white">
            <div className="flex items-center justify-center">
                <div className="max-w-7xl w-full p-4">
                    <motion.h1 initial="hidden" whileInView="reveal" transition= {{staggerChildren: 0.02}} className="optigurney text-9xl text-right mt-[40vh]">{splitStringUsingRegex("WELCOME").map(char => (
                    <motion.span key={char} transition={{ duration: 1}} variants={charVariants}>{char}</motion.span>
                    ))}
                    </motion.h1>
                    <motion.p initial="hidden" whileInView="reveal" transition= {{staggerChildren: 0.02}} className="michroma text-xl text-right mt-2">{splitStringUsingRegex("WE ARE THE ASIAN / ASIAN PACIFIC AMERICAN STUDENT COALITION OF ASU").map(char => (
                    <motion.span key={char} transition={{ duration:0.5}} variants={charVariants}>{char}</motion.span>
                    ))}
                    </motion.p>
                </div>
            </div>
        </div>
    </>
    );
}