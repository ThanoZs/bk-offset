import React, { useState } from "react";
import { Phone, MessageCircle, User, Sparkles } from "lucide-react";
import { T } from "../../utils/designTokens";
import { FloatingParticles } from "../common/FloatingParticles";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { PHONE_NUMBER, WHATSAPP_LINK } from "../../utils/constants";

export function HeroSection({
  text,
  isDark,
  c,
  isAuth,
  isMobile,
  setShowAuth,
}) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? "500px 20px 60px" : "600px 32px 90px",
        textAlign: "center",
        background: isDark
          ? `linear-gradient(rgba(12, 35, 63, 0.85), rgba(19, 67, 125, 0.9)), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80')`
          : `linear-gradient(rgba(224,242,254,0.80), rgba(255,255,255,0.88)), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${T.primaryGlow} 0%, transparent 70%)`,
          pointerEvents: "none",
          animation: "pulse 8s ease-in-out infinite",
        }}
      />

      <FloatingParticles isDark={isDark} count={isMobile ? 30 : 50} />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: T.primaryFaint,
            border: `1px solid ${isDark ? T.primaryDark : T.primaryLight}`,
            borderRadius: "999px",
            padding: "6px 14px",
            marginBottom: "24px",
            color: T.primary,
            fontSize: isMobile ? "12px" : "13px",
            fontWeight: 600,
            animation: isVisible ? "slideDown 0.6s ease-out" : "none",
          }}
        >
          <Sparkles size={14} /> Premium Printing Services
        </div>

        <h1
          style={{
            fontSize: isMobile ? "32px" : "clamp(38px, 6.5vw, 68px)",
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1.1,
            marginBottom: "18px",
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "slideUp 0.8s ease-out 0.2s backwards"
              : "none",
          }}
        >
          {text.heroTitle}
          <br />
          <span
            style={{
              background: T.gradAnimated,
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {text.heroTitle2}
          </span>
        </h1>

        <p
          style={{
            fontSize: isMobile ? "14px" : "clamp(15px, 1.8vw, 18px)",
            color: c.textMid,
            lineHeight: 1.7,
            marginBottom: "32px",
            maxWidth: 560,
            margin: "0 auto 32px",
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "slideUp 0.8s ease-out 0.4s backwards"
              : "none",
          }}
        >
          {text.heroSub}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "slideUp 0.8s ease-out 0.6s backwards"
              : "none",
          }}
        >
          {isAuth ? (
            <>
              <HeroBtn
                href={`tel:${PHONE_NUMBER}`}
                icon={<Phone size={17} />}
                label="Call Now"
                bg={T.grad}
                shadow={T.primaryGlow}
                isMobile={isMobile}
              />
              <HeroBtn
                href={WHATSAPP_LINK}
                icon={<MessageCircle size={17} />}
                label="WhatsApp"
                bg="linear-gradient(135deg, #16a34a 0%, #22c55e 100%)"
                shadow="rgba(22,163,74,0.35)"
                target="_blank"
                rel="noopener noreferrer"
                isMobile={isMobile}
              />
            </>
          ) : (
            <button
              onClick={() => setShowAuth(true)}
              style={{
                background: T.grad,
                color: "#fff",
                border: "none",
                padding: isMobile ? "11px 24px" : "13px 30px",
                borderRadius: T.radiusLg,
                fontWeight: 700,
                fontSize: isMobile ? "14px" : "15px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: `0 6px 24px ${T.primaryGlow}`,
                transition: "transform 0.25s, box-shadow 0.25s",
                fontFamily: T.fontBody,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
                e.currentTarget.style.boxShadow = `0 12px 32px ${T.primaryGlow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = `0 6px 24px ${T.primaryGlow}`;
              }}
            >
              <User size={17} />{" "}
              {isMobile ? text.signIn : `${text.signIn} to Contact Us`}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function HeroBtn({ href, icon, label, bg, shadow, target, rel, isMobile }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: bg,
        color: "#fff",
        padding: isMobile ? "11px 24px" : "13px 30px",
        borderRadius: "12px",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "9px",
        fontWeight: 700,
        fontSize: isMobile ? "14px" : "15px",
        boxShadow: hov ? `0 12px 28px ${shadow}` : `0 4px 16px ${shadow}`,
        transform: hov
          ? "translateY(-3px) scale(1.04)"
          : "translateY(0) scale(1)",
        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
      }}
    >
      {icon} {label}
    </a>
  );
}
