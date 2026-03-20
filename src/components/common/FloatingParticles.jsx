/**
 * FloatingParticles.jsx — Ambient background decoration for BK Offset Printing.
 * Generates a series of light-weight "floating" orbs to add depth to various sections.
 */

import React, { useMemo } from "react";
import { T } from "../../utils/designTokens";

/**
 * FloatingParticles — Renders a set of ambient floating background particles.
 * 
 * @param {Object} props
 * @param {boolean} props.isDark - Theme mode for particle color adaptation.
 * @param {number} props.count - Number of particles to generate.
 */
export function FloatingParticles({ isDark, count = 50 }) {
  /**
   * Memoize particle data — Prevents recalculation of positions and 
   * animation delays upon every re-render of the parent section.
   */
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 20 + 15}s`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.3 + 0.1,
    })), [count]
  );

  return (
    <div style={styles.container}>
      {/* 
        NOTE: Particles are intentionally inactive to prioritize 
        the Cinematic DotWave background when both are present.
      */}
      {/* 
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={styles.particle(isDark, particle)}
        />
      ))}
      */}
    </div>
  );
}

/* ─── Consolidated Styles ────────────────────────────────── */

const styles = {
  container: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 0,
  },
  /**
   * Dynamic particle styling — Handles unique positioning and timing for each orb.
   */
  particle: (isDark, p) => ({
    position: "absolute",
    left: p.left,
    bottom: "-20px",
    width: `${p.size}px`,
    height: `${p.size}px`,
    borderRadius: "50%",
    background: isDark
      ? `radial-gradient(circle, rgba(56, 189, 248, ${p.opacity}) 0%, transparent 70%)`
      : `radial-gradient(circle, rgba(14, 165, 233, ${p.opacity}) 0%, transparent 70%)`,
    animation: `floatUp ${p.animationDuration} ${p.animationDelay} infinite ease-in-out`,
  }),
};
