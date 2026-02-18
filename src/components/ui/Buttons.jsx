import React, { useState } from "react";
import { T } from "../../utils/designTokens";

export function PrimaryButton({ children, onClick, isMobile, fullWidth = false }) {
  const [hov, setHov] = useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
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
      }}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, onClick, isDark, c, isMobile }) {
  const [hov, setHov] = useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
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
      }}
    >
      {children}
    </button>
  );
}

export function IconButton({ icon, onClick, label, isDark, c }) {
  const [hov, setHov] = useState(false);
  
  return (
    <button
      onClick={onClick}
      aria-label={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
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
      }}
    >
      {icon}
    </button>
  );
}
