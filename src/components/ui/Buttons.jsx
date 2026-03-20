/**
 * Buttons.jsx — Reusable button components for BK Offset Printing.
 * Includes Primary, Secondary, and Icon button variants with consistent design language.
 */

import React, { useState } from "react";
import { T } from "../../utils/designTokens";

/**
 * PrimaryButton — High-emphasis call to action using the primary brand gradient.
 */
export function PrimaryButton({ children, onClick, isMobile, fullWidth = false }) {
  const [hov, setHov] = useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={styles.primary(hov, isMobile, fullWidth)}
    >
      {children}
    </button>
  );
}

/**
 * SecondaryButton — Medium-emphasis action with a bordered appearance.
 */
export function SecondaryButton({ children, onClick, isDark, c, isMobile }) {
  const [hov, setHov] = useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={styles.secondary(hov, isMobile, c)}
    >
      {children}
    </button>
  );
}

/**
 * IconButton — Round button optimized for solo icons (e.g., theme toggle, profile).
 */
export function IconButton({ icon, onClick, label, isDark, c }) {
  const [hov, setHov] = useState(false);
  
  return (
    <button
      onClick={onClick}
      aria-label={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={styles.icon(hov, c)}
    >
      {icon}
    </button>
  );
}

/* ─── Consolidated Styles ────────────────────────────────── */

const styles = {
  primary: (hov, isMobile, fullWidth) => ({
    background: hov ? T.primaryDark : T.grad,
    color: "#fff",
    border: "none",
    padding: isMobile ? "11px 24px" : "13px 30px",
    borderRadius: T.radiusLg,
    fontWeight: 700,
    fontSize: isMobile ? "14px" : "15px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: fullWidth ? "100%" : "auto",
    boxShadow: hov ? `0 8px 24px ${T.primaryGlow}` : `0 4px 16px ${T.primaryGlow}`,
    transform: hov ? "translateY(-2px)" : "translateY(0)",
    transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
    fontFamily: T.fontBody,
  }),
  secondary: (hov, isMobile, c) => ({
    background: "transparent",
    border: `2px solid ${hov ? T.primary : c.border}`,
    color: hov ? T.primary : c.text,
    padding: isMobile ? "9px 22px" : "11px 28px",
    borderRadius: T.radiusLg,
    fontWeight: 600,
    fontSize: isMobile ? "14px" : "15px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transform: hov ? "translateY(-2px)" : "translateY(0)",
    transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
    fontFamily: T.fontBody,
  }),
  icon: (hov, c) => ({
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: hov ? T.grad : "transparent",
    border: `1px solid ${hov ? "transparent" : c.border}`,
    color: hov ? "#fff" : c.textMid,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: hov ? "scale(1.1)" : "scale(1)",
    transition: "all 0.2s ease",
    boxShadow: hov ? `0 4px 12px ${T.primaryGlow}` : "none",
  }),
};
