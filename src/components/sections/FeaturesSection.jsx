import React, { useState } from "react";
import { Award, Sparkles, Clock } from "lucide-react";
import { T, th } from "../../utils/designTokens";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function FeaturesSection({ text, isDark, c, isMobile }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : "repeat(auto-fit, minmax(220px, 1fr))",
        padding: isMobile ? "40px 20px" : "52px 32px",
        gap: isMobile ? "32px" : "0",
        background: isDark
          ? `linear-gradient(rgba(15,23,42,0.90), rgba(15,23,42,0.92)), url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`
          : `linear-gradient(rgba(240,249,255,0.88), rgba(240,249,255,0.91)), url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderTop: `1px solid ${c.border}`,
        borderBottom: `1px solid ${c.border}`,
      }}
    >
      <FeatureItem
        icon={<Award size={22} />}
        title={text.quality}
        desc={text.qualityDesc}
        isDark={isDark}
        isVisible={isVisible}
        delay={0}
      />
      <FeatureItem
        icon={<Sparkles size={22} />}
        title={text.experience}
        desc={text.experienceDesc}
        isDark={isDark}
        isVisible={isVisible}
        delay={0.15}
      />
      <FeatureItem
        icon={<Clock size={22} />}
        title={text.fast}
        desc={text.fastDesc}
        isDark={isDark}
        isVisible={isVisible}
        delay={0.3}
      />
    </section>
  );
}

function FeatureItem({ icon, title, desc, isDark, isVisible, delay }) {
  const [hov, setHov] = useState(false);
  const c = th(isDark);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        textAlign: "center",
        padding: "0 20px",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
        opacity: isVisible ? 1 : 0,
        animation: isVisible
          ? `slideUp 0.8s ease-out ${delay}s backwards`
          : "none",
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "12px",
          background: hov ? T.grad : T.primaryFaint,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 12px",
          color: hov ? "#fff" : T.primary,
          boxShadow: hov ? `0 6px 18px ${T.primaryGlow}` : "none",
          transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontWeight: 700,
          fontSize: "15px",
          color: c.text,
          marginBottom: "4px",
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: "13px", color: c.textDim, lineHeight: 1.5 }}>
        {desc}
      </div>
    </div>
  );
}
