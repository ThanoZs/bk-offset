import React, { useState } from "react";
import { Printer, Layers, Zap, Leaf } from "lucide-react";
import { T } from "../../utils/designTokens";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function WebOffsetSection({ text, isDark, c, isMobile, isTablet }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      style={{
        background: isDark
          ? `linear-gradient(rgba(2,6,23,0.90), rgba(2,6,23,0.93)), url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`
          : `linear-gradient(rgba(255,255,255,0.85), rgba(248,250,252,0.89)), url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <WebOffsetHero
        text={text}
        isDark={isDark}
        c={c}
        isMobile={isMobile}
        isVisible={isVisible}
      />
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: isMobile ? "0 20px 60px" : "0 32px 100px",
        }}
      >
        <WebOffsetBlock
          icon={<Layers size={22} />}
          title={text.woPerfTitle}
          desc={text.woPerfDesc}
          items={text.woPerfList}
          footer={text.woPerfFoot}
          isDark={isDark}
          c={c}
          accent="layers"
          isMobile={isMobile}
          isTablet={isTablet}
          isVisible={isVisible}
          delay={0}
        />
        <WebOffsetBlock
          icon={<Zap size={22} />}
          title={text.woEnvTitle}
          desc={text.woEnvDesc}
          items={text.woEnvList}
          footer={text.woEnvFoot}
          isDark={isDark}
          c={c}
          accent="zap"
          isMobile={isMobile}
          isTablet={isTablet}
          isVisible={isVisible}
          delay={0.2}
        />
        <WebOffsetBlock
          icon={<Leaf size={22} />}
          title={text.woSusTitle}
          desc={text.woSusDesc}
          items={text.woSusList}
          footer={text.woSusFoot}
          isDark={isDark}
          c={c}
          accent="leaf"
          isMobile={isMobile}
          isTablet={isTablet}
          isVisible={isVisible}
          delay={0.4}
        />
      </div>
    </section>
  );
}

function WebOffsetHero({ text, isDark, c, isMobile, isVisible }) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "70px 20px 60px" : "110px 32px 100px",
        background: isDark
          ? `linear-gradient(160deg, rgba(12,30,51,0.88) 0%, rgba(2,6,23,0.91) 55%, rgba(10,22,40,0.89) 100%), url('https://images.unsplash.com/photo-1581092918484-8313e1f6c1ef?w=1920&q=80')`
          : `linear-gradient(160deg, rgba(224,242,254,0.82) 0%, rgba(240,249,255,0.86) 40%, rgba(255,255,255,0.89) 100%), url('https://images.unsplash.com/photo-1581092918484-8313e1f6c1ef?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          maxWidth: 780,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 16px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: T.primaryFaint,
            border: `1px solid ${isDark ? T.primaryDark : T.primaryLight}`,
            borderRadius: "999px",
            padding: "7px 18px",
            marginBottom: "24px",
            color: T.primary,
            fontSize: isMobile ? "11px" : "13px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "slideDown 0.6s ease-out" : "none",
          }}
        >
          <Printer size={14} /> {text.woTitle}
        </div>

        <h2
          style={{
            fontSize: isMobile ? "28px" : "clamp(32px, 5.5vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            marginBottom: "16px",
            background: T.gradAnimated,
            backgroundSize: "300% 300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "slideUp 0.8s ease-out 0.2s backwards"
              : "none",
          }}
        >
          {text.woTagline}
        </h2>

        <h3
          style={{
            fontSize: isMobile ? "18px" : "clamp(20px, 2.8vw, 26px)",
            fontWeight: 700,
            color: c.text,
            marginBottom: "20px",
            letterSpacing: "-0.5px",
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "slideUp 0.8s ease-out 0.4s backwards"
              : "none",
          }}
        >
          {text.woHeroTitle}
        </h3>

        <p
          style={{
            fontSize: isMobile ? "14px" : "15px",
            color: c.textMid,
            lineHeight: 1.8,
            marginBottom: "16px",
            maxWidth: 680,
            margin: "0 auto 16px",
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "slideUp 0.8s ease-out 0.6s backwards"
              : "none",
          }}
        >
          {text.woHeroDesc}
        </p>
        <p
          style={{
            fontSize: isMobile ? "14px" : "15px",
            color: c.textMid,
            lineHeight: 1.8,
            maxWidth: 680,
            margin: "0 auto",
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "slideUp 0.8s ease-out 0.8s backwards"
              : "none",
          }}
        >
          {text.woHeroDesc2}
        </p>
      </div>
    </div>
  );
}

function WebOffsetBlock({
  icon,
  title,
  desc,
  items,
  footer,
  c,
  accent,
  isMobile,
  isTablet,
  isVisible,
  delay,
}) {
  const [hov, setHov] = useState(false);

  const accentColor =
    accent === "leaf" ? "#22c55e" : accent === "zap" ? "#f59e0b" : T.primary;
  const accentGlow =
    accent === "leaf"
      ? "rgba(34,197,94,0.25)"
      : accent === "zap"
      ? "rgba(245,158,11,0.25)"
      : T.primaryGlow;
  const accentFaint =
    accent === "leaf"
      ? "rgba(34,197,94,0.08)"
      : accent === "zap"
      ? "rgba(245,158,11,0.08)"
      : T.primaryFaint;
  const accentGrad =
    accent === "leaf"
      ? "linear-gradient(135deg, #16a34a 0%, #4ade80 100%)"
      : accent === "zap"
      ? "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)"
      : T.grad;

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "grid",
        gridTemplateColumns: isTablet || isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "32px" : "48px",
        alignItems: "start",
        marginBottom: isMobile ? "50px" : "80px",
        marginTop: isMobile ? "50px" : "80px",
        background: c.surf,
        border: `1px solid ${hov ? accentColor : c.border}`,
        borderRadius: T.radiusXl,
        padding: isMobile ? "32px 24px" : "60px",
        boxShadow: hov
          ? `0 20px 48px ${accentGlow}, 0 0 0 3px ${accentFaint}`
          : T.shadowSm,
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
        opacity: isVisible ? 1 : 0,
        animation: isVisible
          ? `slideUp 0.8s ease-out ${delay}s backwards`
          : "none",
      }}
    >
      <div>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "14px",
            background: hov ? accentGrad : accentFaint,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: hov ? "#fff" : accentColor,
            boxShadow: hov ? `0 6px 20px ${accentGlow}` : "none",
            transform: hov ? "scale(1.08) rotate(3deg)" : "scale(1) rotate(0)",
            transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
            marginBottom: "22px",
          }}
        >
          {icon}
        </div>

        <h3
          style={{
            fontSize: isMobile ? "18px" : "clamp(18px, 2.2vw, 22px)",
            fontWeight: 750,
            color: c.text,
            letterSpacing: "-0.4px",
            marginBottom: "14px",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: "15px",
            color: c.textMid,
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          {desc}
        </p>

        {footer && (
          <p
            style={{
              fontSize: "14px",
              color: c.textMid,
              lineHeight: 1.7,
              marginTop: "20px",
              paddingTop: "16px",
              borderTop: `1px solid ${c.border}`,
              fontStyle: "italic",
            }}
          >
            {footer}
          </p>
        )}
      </div>

      <div
        style={{
          background: c.bg,
          border: `1px solid ${c.border}`,
          borderRadius: T.radiusLg,
          padding: isMobile ? "24px 20px" : "28px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: accentGrad,
              boxShadow: `0 0 8px ${accentGlow}`,
            }}
          />
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: accentColor,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            {accent === "leaf"
              ? "Sustainability"
              : accent === "zap"
              ? "Reductions"
              : "Capabilities"}
          </span>
        </div>

        {items.map((item, i) => (
          <WebOffsetListItem
            key={i}
            label={item}
            accentColor={accentColor}
            accentFaint={accentFaint}
            accentGrad={accentGrad}
            accentGlow={accentGlow}
            c={c}
          />
        ))}
      </div>
    </div>
  );
}

function WebOffsetListItem({
  label,
  accentColor,
  accentFaint,
  accentGrad,
  accentGlow,
  c,
}) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "14px",
        padding: "11px 14px",
        borderRadius: T.radiusMd,
        background: hov ? accentFaint : "transparent",
        border: `1px solid ${hov ? accentColor : "transparent"}`,
        transform: hov ? "translateX(4px)" : "translateX(0)",
        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
        marginBottom: "6px",
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          minWidth: 22,
          borderRadius: "50%",
          background: hov ? accentGrad : accentFaint,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1px",
          boxShadow: hov ? `0 3px 10px ${accentGlow}` : "none",
          transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M2 5.5L4 7.5L8 3"
            stroke={hov ? "#fff" : accentColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <span
        style={{
          fontSize: "14px",
          color: hov ? c.text : c.textMid,
          fontWeight: hov ? 600 : 500,
          lineHeight: 1.6,
          transition: "color 0.2s",
        }}
      >
        {label}
      </span>
    </div>
  );
}
