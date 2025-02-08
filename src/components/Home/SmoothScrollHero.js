import { useSpring, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-white">
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
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(1.2)",
    config: { tension: 220, friction: 120 },
  });

  return (
    <animated.div
      ref={ref}
      className="sticky top-0 h-screen w-full"
      style={{
        ...animationProps,
        backgroundImage:
          "url(https://res.cloudinary.com/dq6oea49h/image/upload/f_auto,q_auto/v1726522471/CF-_AAPASC_SB-18_ykbuw0.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://res.cloudinary.com/dq6oea49h/image/upload/f_auto,q_auto/v1726525415/AAPASC_Community-216_hyamia.webp"
        alt="A3X"
        className="w-1/3"
      />
      <ParallaxImg
        src="https://res.cloudinary.com/dq6oea49h/image/upload/t_43smart,f_auto,q_auto/v1726601763/CF-_Eaj_SB-34_vi4e3l.webp"
        alt="Headliner Eaj"
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://res.cloudinary.com/dq6oea49h/image/upload/t_43smart,f_auto,q_auto/v1726601763/AAPASC_Community-144_1_uxofy6.webp"
        alt="PASA TINIKLING"
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://res.cloudinary.com/dq6oea49h/image/upload/f_auto,q_auto/v1726601903/DSC_0085_rmsxff.webp"
        alt="OG AAPASC"
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { tension: 220, friction: 30 },
  });

  return (
    <animated.img
      ref={ref}
      src={src}
      alt={alt}
      className={`${className} transition-all duration-500`}
      style={animationProps}
    />
  );
};
