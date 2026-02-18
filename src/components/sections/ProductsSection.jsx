import React, { useState } from "react";
import { Printer } from "lucide-react";
import { T, th } from "../../utils/designTokens";
import { SectionHeader } from "../common/SectionHeader";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function ProductsSection({ text, isDark, c, isMobile, isTablet }) {
  const [ref, isVisible] = useScrollAnimation();

  const products = [
    {
      title: "Visiting Cards",
      desc: "Premium cards with sharp print & elegant finish",
    },
    {
      title: "Bill Books",
      desc: "Durable multi-copy billing books for your business",
    },
    {
      title: "Pamphlets",
      desc: "High-quality promotional prints that stand out",
    },
    {
      title: "Letterheads",
      desc: "Professional letterheads for your brand",
    },
    {
      title: "Brochures",
      desc: "Eye-catching brochures with vibrant colors",
    },
    { title: "Envelopes", desc: "Custom envelopes in all sizes" },
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? "60px 20px" : "100px 32px",
        maxWidth: 1180,
        margin: "0 auto",
      }}
    >
      <SectionHeader title={text.products} isVisible={isVisible} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
            ? "repeat(2, 1fr)"
            : "repeat(auto-fit, minmax(300px, 1fr))",
          gap: isMobile ? "20px" : "24px",
        }}
      >
        {products.map((p, idx) => (
          <ProductCard
            key={p.title}
            {...p}
            isDark={isDark}
            c={c}
            isMobile={isMobile}
            isVisible={isVisible}
            delay={idx * 0.1}
          />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ title, desc, isDark, c, isMobile, isVisible, delay }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: c.surf,
        border: `1px solid ${hov ? T.primary : c.border}`,
        borderRadius: T.radiusCard,
        padding: isMobile ? "24px" : "28px",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hov
          ? isDark
            ? `0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px ${T.primaryFaint}`
            : `0 16px 40px rgba(0,0,0,0.10), 0 0 0 1px ${T.primaryFaint}`
          : T.shadowSm,
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
        opacity: isVisible ? 1 : 0,
        animation: isVisible
          ? `slideUp 0.6s ease-out ${delay}s backwards`
          : "none",
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
        <Printer size={22} />
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
        {desc}
      </p>
    </div>
  );
}
