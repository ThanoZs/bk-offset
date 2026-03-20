/**
 * SocialMediaIcons.jsx — Floating social connectivity bar for BK Offset Printing.
 * Provides quick access to YouTube, Instagram, and Facebook with interactive hover states.
 */

import React, { useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { T, th } from "../../utils/designTokens";

/**
 * SocialMediaIcons — Sidebar utility for social platform linking.
 * 
 * @param {Object} props
 * @param {boolean} props.isDark - Theme mode for dynamic color adaptation.
 * @param {number} props.windowWidth - Used for responsive scaling of icon size.
 */
export function SocialMediaIcons({ isDark, isAuthenticated, windowWidth }) {
  const [hov, setHov] = useState(null);
  const c = th(isDark);
  const isSmall = windowWidth < 420;
  
  // Dynamic layout metrics
  const btnSize = isSmall ? 40 : 46;
  const rightOffset = isSmall ? "12px" : "20px";

  // Configuration for supported social platforms
  const links = [
    {
      icon: <Youtube size={18} />,
      href: "https://youtube.com/@b.k.offset?si=8VAlAdQKIGciGQ8d",
      label: "YouTube",
      color: "#FF0000",
    },
    {
      icon: <Instagram size={18} />,
      href: "https://instagram.com",
      label: "Instagram",
      color: "#d640e4",
    },
    {
      icon: <Facebook size={18} />,
      href: "https://facebook.com",
      label: "Facebook",
      color: "#1877F2",
    },
  ];

  return (
    <div style={styles.wrapper(isSmall, rightOffset)}>
      {links.map((link, idx) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          onMouseEnter={() => setHov(link.label)}
          onMouseLeave={() => setHov(null)}
          style={styles.iconButton(hov === link.label, link, c, btnSize, idx)}
        >
          {link.icon}
          
          {/* Detailed Tooltip — Desktop Only */}
          {!isSmall && (
            <span style={styles.tooltip(hov === link.label, isDark)}>
              {link.label}
              <span style={styles.tooltipArrow(isDark)} />
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

/* ─── Consolidated Styles ────────────────────────────────── */

const styles = {
  wrapper: (isSmall, rightOffset) => ({
    position: "fixed",
    bottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
    right: rightOffset,
    display: "flex",
    flexDirection: "column",
    gap: isSmall ? "8px" : "10px",
    zIndex: 1100,
    pointerEvents: "auto",
  }),
  iconButton: (isHov, link, c, btnSize, idx) => ({
    width: btnSize + "px",
    height: btnSize + "px",
    borderRadius: "50%",
    background: isHov ? link.color : c.surf,
    color: isHov ? "#fff" : c.textMid,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    border: `1px solid ${isHov ? "transparent" : c.border}`,
    boxShadow: isHov 
      ? `0 6px 20px ${link.color}80` 
      : T.shadowSm,
    transform: isHov
      ? "translateY(-3px) scale(1.08)"
      : "scale(1)",
    transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
    position: "relative",
    // Entrance animation for the floating bar
    animation: `floatIn 0.5s ease-out ${idx * 0.1}s backwards`,
  }),
  tooltip: (isVisible, isDark) => ({
    position: "absolute",
    right: "calc(100% + 10px)",
    top: "50%",
    transform: "translateY(-50%)",
    background: isDark ? "#1e293b" : "#0f172a",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 600,
    whiteSpace: "nowrap",
    opacity: isVisible ? 1 : 0,
    pointerEvents: "none",
    transition: "opacity 0.2s",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  }),
  tooltipArrow: (isDark) => ({
    position: "absolute",
    left: "100%",
    top: "50%",
    transform: "translateY(-50%)",
    borderLeft: `5px solid ${isDark ? "#1e293b" : "#0f172a"}`,
    borderTop: "5px solid transparent",
    borderBottom: "5px solid transparent",
  }),
};
