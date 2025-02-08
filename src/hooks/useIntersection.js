import { useState, useEffect, useRef } from "react";

/**
 * @param {Object} options Intersection Observer options
 * @param {number} options.threshold
 * @returns [ref, inView]
 */
export default function useIntersection(options = { threshold: 0.2 }) {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const current = elementRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // If you only want to trigger once, unobserve here:
          observer.unobserve(current);
        }
      },
      options
    );

    observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [options]);

  return [elementRef, inView];
}
