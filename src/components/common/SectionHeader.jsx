/**
 * SectionHeader.jsx — Reusable header component for content sections.
 * Features a title with an organic entry animation and a reactive underline.
 */

import React, { useState } from "react";
import { T } from "../../utils/designTokens";

/**
 * SectionHeader — Primary heading for visual sections.
 * 
 * @param {Object} props
 * @param {string} props.title - The heading text to display.
 * @param {boolean} props.isVisible - Trigger for the scroll-based entry animation.
 */
export function SectionHeader({ title, isVisible }) {
  // Underlying animation state for the hover-reactive bar
  const [hov, setHov] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={styles.container(isVisible)}
    >
      <h2 style={styles.title}>
        {title}
      </h2>
      <div style={styles.underline(hov)} />
    </div>
  );
}

/* ─── Consolidated Styles ────────────────────────────────── */

const styles = {
  container: (isVisible) => ({
    textAlign: "center",
    marginBottom: "56px",
    opacity: isVisible ? 1 : 0,
    animation: isVisible ? "slideUp 0.8s ease-out" : "none",
  }),
  title: {
    fontSize: "clamp(26px, 4vw, 40px)",
    fontWeight: 800,
    letterSpacing: "-1px",
    margin: 0,
  },
  underline: (hov) => ({
    width: hov ? 72 : 48,
    height: 3,
    borderRadius: "999px",
    background: T.grad,
    margin: "14px auto 0",
    boxShadow: `0 2px 8px ${T.primaryGlow}`,
    transition: "width 0.35s cubic-bezier(.4,0,.2,1)",
  }),
};
