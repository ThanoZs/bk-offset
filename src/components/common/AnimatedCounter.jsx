/**
 * AnimatedCounter.jsx — A component that animates a number from 0 to a target value.
 * Triggers automatically when the element scrolls into view.
 */

import React, { useState, useEffect, useRef } from "react";

/**
 * AnimatedCounter — Quantifiable metric display with smooth count-up animation.
 * 
 * @param {Object} props
 * @param {number} props.end - The final value to reach.
 * @param {number} props.duration - Total animation length in ms.
 * @param {string} props.suffix - Characters to show after the number (e.g., "+", "%").
 * @param {string} props.prefix - Characters to show before the number (e.g., "$").
 */
export function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  /**
   * Intersection Observer Effect — Detects visibility to initiate the count sequence.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);

          const startTime = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quartic — provides a fast start and a very soft landing.
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(end * easeOutQuart);
            
            setCount(currentCount);

            if (progress === 1) {
              clearInterval(timer);
            }
          }, 16); // ~60fps target

          return () => clearInterval(timer);
        }
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
  }, [end, duration, hasStarted]);

  return (
    <span ref={ref} style={styles.container}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─── Consolidated Styles ────────────────────────────────── */

const styles = {
  container: {
    display: "inline-block",
  },
};
