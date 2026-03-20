/**
 * StatsSection.jsx — Trust-building statistics for BK Offset Printing.
 * Uses AnimatedCounter for dynamic number increments and FloatingParticles for ambient depth.
 */

import React from "react";
import { Clock, Star, Award } from "lucide-react";
import { T } from "../../utils/designTokens";
import { AnimatedCounter } from "../common/AnimatedCounter";
import { FloatingParticles } from "../common/FloatingParticles";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

/**
 * StatsSection — Displays key business metrics with entrance animations.
 */
export function StatsSection({ text, isDark, c, isMobile }) {
  const [ref, isVisible] = useScrollAnimation();

  // Statistics data configuration
  const stats = [
    { value: 30, label: "Years Experience", icon: <Clock size={24} /> },
    { value: 5000, label: "Happy Clients", icon: <Star size={24} /> },
    { value: 50000, label: "Projects Completed", icon: <Award size={24} /> },
  ];

  return (
    <section
      ref={ref}
      style={styles.section(isMobile, isDark, c)}
    >
      {/* Background decoration */}
      <FloatingParticles isDark={isDark} count={20} />

      <div style={styles.grid(isMobile)}>
        {stats.map((stat, idx) => (
          <div
            key={idx}
            style={styles.statItem(isVisible, idx)}
          >
            {/* Circular icon badge with floating animation */}
            <div style={styles.iconBadge(isVisible, idx)}>
              {stat.icon}
            </div>

            {/* Counter with animated gradient text */}
            <div style={styles.counter(isMobile)}>
              <AnimatedCounter end={stat.value} suffix="+" />
            </div>

            {/* Stat description label */}
            <div style={styles.label(c.textMid)}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Consolidated Styles ────────────────────────────────── */

const styles = {
  section: (isMobile, isDark, c) => ({
    padding: isMobile ? "50px 20px" : "70px 32px",
    background: isDark
      ? `linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.90))`
      : `linear-gradient(135deg, rgba(240,249,255,0.95), rgba(224,242,254,0.90))`,
    borderTop: `1px solid ${c.border}`,
    borderBottom: `1px solid ${c.border}`,
    position: "relative",
    overflow: "hidden",
  }),
  grid: (isMobile) => ({
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gap: isMobile ? "40px" : "60px",
    position: "relative",
    zIndex: 1,
  }),
  statItem: (isVisible, idx) => ({
    textAlign: "center",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(30px)",
    transition: `all 0.8s ease-out ${idx * 0.15}s`,
  }),
  iconBadge: (isVisible, idx) => ({
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: T.grad,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    color: "#fff",
    boxShadow: `0 8px 24px ${T.primaryGlow}`,
    animation: isVisible
      ? `float 3s ease-in-out ${idx * 0.5}s infinite`
      : "none",
  }),
  counter: (isMobile) => ({
    fontSize: isMobile ? "36px" : "48px",
    fontWeight: 800,
    background: T.gradAnimated,
    backgroundSize: "300% 300%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "8px",
    animation: "gradientShift 8s ease infinite",
  }),
  label: (textColor) => ({
    fontSize: "14px",
    color: textColor,
    fontWeight: 600,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  }),
};
