import React, { useState } from "react";
import { T } from "../../utils/designTokens";

export function ProductCard({ title, description, icon, isDark, c, onClick }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
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
      }}
    >
      <div
        style={{
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
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontSize: "17px",
          fontWeight: 700,
          marginBottom: "8px",
          color: c.text,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: c.textDim,
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}

export function StatsCard({ value, label, icon, isDark, c }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
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
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontSize: "48px",
          fontWeight: 800,
          background: T.gradAnimated,
          backgroundSize: "300% 300%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: "8px",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "14px",
          color: c.textMid,
          fontWeight: 600,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}
