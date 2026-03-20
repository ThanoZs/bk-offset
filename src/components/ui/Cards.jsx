/**
 * Cards.jsx — Reusable card components for BK Offset Printing.
 * Includes ProductCard with hover effects and StatsCard for metric displays.
 */

import React, { useState } from "react";
import { T } from "../../utils/designTokens";

/**
 * ProductCard — Interactive card for displaying machine/service details.
 * Features a rising hover effect and shifting icon container.
 */
export function ProductCard({ title, description, icon, isDark, c, onClick }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={styles.product(hov, c)}
    >
      {/* Dynamic icon box with signature gradient on hover */}
      <div style={styles.iconBox(hov)}>
        {icon}
      </div>

      {/* Primary content area */}
      <h3 style={styles.productTitle(c.text)}>
        {title}
      </h3>
      <p style={styles.productDesc(c.textDim)}>
        {description}
      </p>
    </div>
  );
}

/**
 * StatsCard — Non-interactive card focused on high-impact quantitative data.
 */
export function StatsCard({ value, label, icon, isDark, c }) {
  return (
    <div style={styles.statsContainer}>
      {/* Centered brand-gradient icon badge */}
      <div style={styles.statsBadge}>
        {icon}
      </div>

      {/* Large animated counter/value display */}
      <div style={styles.statsValue}>
        {value}
      </div>

      {/* Metric descriptor label */}
      <div style={styles.statsLabel(c.textMid)}>
        {label}
      </div>
    </div>
  );
}

/* ─── Consolidated Styles ────────────────────────────────── */

const styles = {
  product: (hov, c) => ({
    background: c.surf,
    border: `1px solid ${hov ? T.primary : c.border}`,
    borderRadius: T.radiusCard,
    padding: "28px",
    cursor: "pointer",
    transform: hov ? "translateY(-6px)" : "translateY(0)",
    boxShadow: hov
      ? `0 16px 40px rgba(0,0,0,0.10), 0 0 0 1px ${T.primaryFaint}`
      : T.shadowSm,
    transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
  }),
  iconBox: (hov) => ({
    width: 50,
    height: 50,
    borderRadius: "12px",
    background: hov ? T.grad : T.primaryFaint,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "18px",
    color: hov ? "#fff" : T.primary,
    boxShadow: hov ? `0 5px 16px ${T.primaryGlow}` : "none",
    transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
    transform: hov ? "rotate(5deg) scale(1.05)" : "rotate(0) scale(1)",
  }),
  productTitle: (textColor) => ({
    fontSize: "17px",
    fontWeight: 700,
    marginBottom: "8px",
    color: textColor,
  }),
  productDesc: (textColor) => ({
    fontSize: "14px",
    color: textColor,
    lineHeight: 1.6,
    margin: 0,
  }),
  statsContainer: {
    textAlign: "center",
    padding: "20px",
  },
  statsBadge: {
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
  },
  statsValue: {
    fontSize: "48px",
    fontWeight: 800,
    background: T.gradAnimated,
    backgroundSize: "300% 300%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "8px",
  },
  statsLabel: (textColor) => ({
    fontSize: "14px",
    color: textColor,
    fontWeight: 600,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  }),
};
