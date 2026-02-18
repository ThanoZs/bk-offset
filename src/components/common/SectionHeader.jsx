import React, { useState } from "react";
import { T } from "../../utils/designTokens";

export function SectionHeader({ title, isVisible }) {
  const [hov, setHov] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        textAlign: "center",
        marginBottom: "56px",
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? "slideUp 0.8s ease-out" : "none",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(26px, 4vw, 40px)",
          fontWeight: 800,
          letterSpacing: "-1px",
          margin: 0,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: hov ? 72 : 48,
          height: 3,
          borderRadius: "999px",
          background: T.grad,
          margin: "14px auto 0",
          boxShadow: `0 2px 8px ${T.primaryGlow}`,
          transition: "width 0.35s cubic-bezier(.4,0,.2,1)",
        }}
      />
    </div>
  );
}
