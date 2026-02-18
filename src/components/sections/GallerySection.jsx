import React, { useState } from "react";
import { T } from "../../utils/designTokens";
import { SectionHeader } from "../common/SectionHeader";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { GALLERY_IMAGES } from "../../utils/constants";

export function GallerySection({ text, isDark, c, isMobile, isTablet }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? "60px 20px" : "100px 32px",
        background: isDark
          ? `linear-gradient(rgba(15,23,42,0.90), rgba(15,23,42,0.93)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')`
          : `linear-gradient(rgba(240,249,255,0.85), rgba(240,249,255,0.89)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
        backgroundRepeat: "no-repeat",
        borderTop: `1px solid ${c.border}`,
        borderBottom: `1px solid ${c.border}`,
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHeader title={text.gallery} isVisible={isVisible} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
              ? "repeat(2, 1fr)"
              : "repeat(auto-fill, minmax(280px, 1fr))",
            gap: isMobile ? "16px" : "20px",
          }}
        >
          {GALLERY_IMAGES.map((src, i) => (
            <GalleryCard
              key={i}
              src={src}
              alt={`Printing Machine ${i + 1}`}
              isDark={isDark}
              isVisible={isVisible}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ src, alt, isDark, isVisible, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: T.radiusCard,
        aspectRatio: "4/3",
        cursor: "pointer",
        border: `1px solid ${
          hov ? T.primary : isDark ? T.borderDark : T.borderLight
        }`,
        boxShadow: hov ? `0 12px 32px ${T.primaryGlow}` : T.shadowSm,
        transform: hov
          ? "translateY(-4px) scale(1.02)"
          : "translateY(0) scale(1)",
        transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
        opacity: isVisible ? 1 : 0,
        animation: isVisible
          ? `scaleIn 0.6s ease-out ${delay}s backwards`
          : "none",
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: hov ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.5s cubic-bezier(.4,0,.2,1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(2,6,23,0.45) 0%, transparent 55%)",
          opacity: hov ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />
    </div>
  );
}
