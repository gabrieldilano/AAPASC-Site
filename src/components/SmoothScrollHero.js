import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import splitStringUsingRegex from "./splitStringUsingRegex";

const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 }
};

export const SmoothScrollHero = () => {
  return (
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
        <Hero />
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [50, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [50, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;


  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://res.cloudinary.com/dq6oea49h/image/upload/v1726522471/CF-_AAPASC_SB-18_ykbuw0.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://res.cloudinary.com/dq6oea49h/image/upload/v1726525415/AAPASC_Community-216_hyamia.webp"
        alt="A3X"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://res.cloudinary.com/dq6oea49h/image/upload/t_43smart/v1723868383/CF-_Eaj_SB-34_t7cym3.jpg"
        alt="Headliner Eaj"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://res.cloudinary.com/dq6oea49h/image/upload/t_43smart/v1726526548/AAPASC_Community-144_1_ri5h27.jpg"
        alt="PASA TINIKLING"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://res.cloudinary.com/dq6oea49h/image/upload/v1726525651/DSC_0085_nlij5o.jpg"
        alt="Sabrina and Anna"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};