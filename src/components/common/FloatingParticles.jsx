import React, { useMemo } from "react";
import { T } from "../../utils/designTokens";

export function FloatingParticles({ isDark, count = 50 }) {
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
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: "absolute",
            left: particle.left,
            bottom: "-20px",
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: "50%",
            background: isDark
              ? `radial-gradient(circle, rgba(56, 189, 248, ${particle.opacity}) 0%, transparent 70%)`
              : `radial-gradient(circle, rgba(14, 165, 233, ${particle.opacity}) 0%, transparent 70%)`,
            animation: `floatUp ${particle.animationDuration} ${particle.animationDelay} infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}
