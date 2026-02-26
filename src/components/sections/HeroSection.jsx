// HeroSection.jsx — Premium cinematic hero for BK Offset Printing

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, User, Sparkles, ArrowRight, Star } from "lucide-react";
import { T } from "../../utils/designTokens";
import { FloatingParticles } from "../common/FloatingParticles";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { PHONE_NUMBER, WHATSAPP_LINK } from "../../utils/constants";

/* ─── Styles ──────────────────────────────── */
const HERO_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  @keyframes hero-fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes hero-fadeDown {
    from { opacity: 0; transform: translateY(-16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes hero-fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes hero-orb1 {
    0%,100% { transform: translate(0,0) scale(1); }
    33%     { transform: translate(40px,-30px) scale(1.08); }
    66%     { transform: translate(-20px,20px) scale(0.95); }
  }
  @keyframes hero-orb2 {
    0%,100% { transform: translate(0,0) scale(1); }
    40%     { transform: translate(-50px,25px) scale(1.05); }
    70%     { transform: translate(30px,-20px) scale(0.97); }
  }
  @keyframes hero-orb3 {
    0%,100% { transform: translate(0,0) scale(1); }
    50%     { transform: translate(20px,40px) scale(1.06); }
  }
  @keyframes hero-gradShift {
    0%,100% { background-position: 0% 50%; }
    50%     { background-position: 100% 50%; }
  }
  @keyframes hero-scanline {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  @keyframes hero-badge-pulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(14,165,233,0.35); }
    50%     { box-shadow: 0 0 0 6px rgba(14,165,233,0); }
  }
  @keyframes hero-counter {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Eyebrow badge ── */
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 18px;
    border-radius: 999px;
    font-family: 'DM Sans', sans-serif;
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: default;
    animation: hero-badge-pulse 3s ease-in-out infinite, hero-fadeDown 0.5s ease-out 0s both;
  }

  /* ── Headline ── */
  .hero-h1 {
    font-family: 'Instrument Serif', Georgia, serif;
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 1.05;
    margin: 0;
  }
  .hero-grad-word {
    background: linear-gradient(270deg,#0ea5e9,#6366f1,#38bdf8,#0ea5e9);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: hero-gradShift 5s ease infinite;
    font-style: italic;
  }

  /* ── Sub text ── */
  .hero-sub {
    font-family: 'DM Sans', sans-serif;
    line-height: 1.75;
  }

  /* ── Stat strip ── */
  .hero-stat-strip {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    flex-wrap: wrap;
  }
  .hero-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 28px;
    animation: hero-counter 0.5s ease-out both;
  }
  .hero-stat + .hero-stat {
    border-left: 1px solid rgba(255,255,255,0.12);
  }
  .hero-stat-num {
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 1;
    background: linear-gradient(135deg,#f1f5f9,#94a3b8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hero-stat-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    margin-top: 3px;
  }

  /* ── CTA buttons ── */
  .hero-btn {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition:
      transform    0.28s cubic-bezier(.34,1.56,.64,1),
      box-shadow   0.28s ease;
  }
  /* Shimmer sweep */
  .hero-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(130deg,transparent 0%,rgba(255,255,255,0.12) 45%,transparent 90%);
    transform: translateX(-110%) skewX(-10deg);
    transition: transform 0.55s cubic-bezier(.22,1,.36,1);
    pointer-events: none;
  }
  .hero-btn:hover::before { transform: translateX(200%) skewX(-10deg); }
  .hero-btn:hover  { transform: translateY(-3px) scale(1.03); }
  .hero-btn:active { transform: scale(0.97); }

  /* ── Orbs ── */
  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }

  /* ── Scan line (subtle) ── */
  .hero-scan {
    position: absolute;
    left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg,transparent,rgba(14,165,233,0.20),transparent);
    animation: hero-scanline 10s linear infinite;
    pointer-events: none;
    z-index: 1;
  }

  /* ── Trust badge row ── */
  .hero-trust {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: rgba(255,255,255,0.38);
  }
  .hero-trust-dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: rgba(255,255,255,0.25);
  }

  @media (max-width: 640px) {
    .hero-stat { padding: 0 18px; }
    .hero-stat-num { font-size: 22px; }
    .hero-stat + .hero-stat { border-color: rgba(255,255,255,0.09); }
  }
`;

// target: number to count up to | suffix: "+" / "K+" etc.
const STATS = [
  { target: 30,  suffix: "+",  label: "Years Active"  },
  { target: 50,  suffix: "K+", label: "Books Printed" },
  { target: 500, suffix: "+",  label: "Happy Clients" },
];

/* ═══════════════════════════════════════════
   HeroSection
═══════════════════════════════════════════ */
export function HeroSection({ text, isDark, c, isAuth, isMobile, setShowAuth }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <>
      <style>{HERO_STYLES}</style>

      <section
        ref={ref}
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: isMobile ? "100svh" : "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? "100px 20px 60px" : "120px 40px 80px",
          textAlign: "center",
          /* Dark-tinted photo bg */
          background: isDark
            ? `linear-gradient(160deg,rgba(4,10,28,0.92) 0%,rgba(2,8,22,0.95) 60%,rgba(6,14,34,0.93) 100%), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80')`
            : `linear-gradient(160deg,rgba(224,242,254,0.82) 0%,rgba(248,250,252,0.88) 60%,rgba(240,249,255,0.85) 100%), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ── Atmospheric orbs ── */}
        <div className="hero-orb" style={{
          width: 600, height: 600,
          top: "-200px", left: "10%",
          background: isDark
            ? "radial-gradient(circle,rgba(14,165,233,0.18) 0%,transparent 70%)"
            : "radial-gradient(circle,rgba(14,165,233,0.14) 0%,transparent 70%)",
          animation: "hero-orb1 14s ease-in-out infinite",
          zIndex: 0,
        }} />
        <div className="hero-orb" style={{
          width: 500, height: 500,
          bottom: "-100px", right: "5%",
          background: isDark
            ? "radial-gradient(circle,rgba(99,102,241,0.16) 0%,transparent 70%)"
            : "radial-gradient(circle,rgba(99,102,241,0.11) 0%,transparent 70%)",
          animation: "hero-orb2 18s ease-in-out infinite",
          zIndex: 0,
        }} />
        <div className="hero-orb" style={{
          width: 320, height: 320,
          top: "35%", right: "20%",
          background: isDark
            ? "radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 70%)"
            : "radial-gradient(circle,rgba(56,189,248,0.08) 0%,transparent 70%)",
          animation: "hero-orb3 11s ease-in-out infinite",
          zIndex: 0,
        }} />

        {/* Scanline */}
        <div className="hero-scan" />

        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(circle,${isDark ? "rgba(14,165,233,0.07)" : "rgba(14,165,233,0.09)"} 1px,transparent 1px)`,
          backgroundSize: "36px 36px",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        <FloatingParticles isDark={isDark} count={isMobile ? 20 : 35} />

        {/* ── Content ── */}
        <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 820 }}>

          {/* Eyebrow */}
          <div
            className="hero-badge"
            style={{
              background: isDark ? "rgba(14,165,233,0.12)" : "rgba(14,165,233,0.10)",
              border: `1px solid ${isDark ? "rgba(14,165,233,0.30)" : "rgba(14,165,233,0.25)"}`,
              color: "#38bdf8",
              marginBottom: 24,
            }}
          >
            <Sparkles size={13} strokeWidth={2} />
            Premium Printing Services
          </div>

          {/* H1 */}
          <h1
            className="hero-h1"
            style={{
              fontSize: isMobile ? "38px" : "clamp(44px,6.5vw,76px)",
              color: isDark ? "#f1f5f9" : "#0f172a",
              marginBottom: 20,
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? "hero-fadeUp 0.7s ease-out 0.08s both" : "none",
            }}
          >
            {text.heroTitle}
            <br />
            <span className="hero-grad-word">{text.heroTitle2}</span>
          </h1>

          {/* Sub */}
          <p
            className="hero-sub"
            style={{
              fontSize: isMobile ? "14.5px" : "clamp(15px,1.6vw,17px)",
              color: isDark ? "rgba(255,255,255,0.52)" : "#475569",
              maxWidth: 540,
              margin: "0 auto 36px",
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? "hero-fadeUp 0.7s ease-out 0.18s both" : "none",
            }}
          >
            {text.heroSub}
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 48,
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? "hero-fadeUp 0.7s ease-out 0.28s both" : "none",
            }}
          >
            {isAuth ? (
              <>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="hero-btn"
                  style={{
                    background: "linear-gradient(135deg,#0ea5e9,#6366f1)",
                    color: "#fff",
                    padding: isMobile ? "12px 24px" : "14px 28px",
                    fontSize: isMobile ? "14px" : "15px",
                    boxShadow: "0 6px 24px rgba(14,165,233,0.35)",
                  }}
                >
                  <Phone size={16} strokeWidth={2} />
                  Call Now
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn"
                  style={{
                    background: "linear-gradient(135deg,#16a34a,#22c55e)",
                    color: "#fff",
                    padding: isMobile ? "12px 24px" : "14px 28px",
                    fontSize: isMobile ? "14px" : "15px",
                    boxShadow: "0 6px 24px rgba(22,163,74,0.32)",
                  }}
                >
                  <MessageCircle size={16} strokeWidth={2} />
                  WhatsApp
                </a>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowAuth(true)}
                  className="hero-btn"
                  style={{
                    background: "linear-gradient(135deg,#0ea5e9,#6366f1)",
                    color: "#fff",
                    padding: isMobile ? "12px 26px" : "14px 30px",
                    fontSize: isMobile ? "14px" : "15px",
                    boxShadow: "0 6px 24px rgba(14,165,233,0.35)",
                  }}
                >
                  <User size={16} strokeWidth={2} />
                  {isMobile ? text.signIn : `${text.signIn} to Contact Us`}
                  <ArrowRight size={15} strokeWidth={2.5} />
                </button>

                {/* Ghost secondary */}
                <button
                  onClick={() => setShowAuth(true)}
                  className="hero-btn"
                  style={{
                    background: "transparent",
                    color: isDark ? "rgba(255,255,255,0.75)" : "#0f172a",
                    padding: isMobile ? "11px 24px" : "13px 28px",
                    fontSize: isMobile ? "14px" : "15px",
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"}`,
                    boxShadow: "none",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  Learn More
                </button>
              </>
            )}
          </div>

          {/* ── Stat strip ── */}
          <div
            className="hero-stat-strip"
            style={{
              marginBottom: 28,
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? "hero-fadeUp 0.6s ease-out 0.38s both" : "none",
            }}
          >
            {STATS.map(({ target, suffix, label }, i) => (
              <CountUpStat
                key={label}
                target={target}
                suffix={suffix}
                label={label}
                isDark={isDark}
                isVisible={isVisible}
                delay={i * 0.12}
              />
            ))}
          </div>

          {/* Trust line */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? "hero-fadeIn 0.8s ease-out 0.55s both" : "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="hero-trust">
              <Star size={11} fill="currentColor" color="#f59e0b" style={{ opacity: 0.85 }} />
              <Star size={11} fill="currentColor" color="#f59e0b" style={{ opacity: 0.85 }} />
              <Star size={11} fill="currentColor" color="#f59e0b" style={{ opacity: 0.85 }} />
              <Star size={11} fill="currentColor" color="#f59e0b" style={{ opacity: 0.85 }} />
              <Star size={11} fill="currentColor" color="#f59e0b" style={{ opacity: 0.85 }} />
              <span style={{ marginLeft: 4 }}>Trusted by publishers across Delhi since 1995</span>
              <span className="hero-trust-dot" />
              <span>Dilshad Garden</span>
            </div>
          </div>

        </div>

        {/* ── Bottom fade ── */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: 80,
          background: isDark
            ? "linear-gradient(to bottom,transparent,rgba(2,6,23,0.55))"
            : "linear-gradient(to bottom,transparent,rgba(248,250,252,0.60))",
          pointerEvents: "none",
          zIndex: 1,
        }} />
      </section>
    </>
  );
}

/* ─── CountUpStat ───────────────────────────
   Counts 0 → target over ~1.6s (easeOutCubic).
   Starts when isVisible flips true, respects
   per-stat delay so they stagger nicely.
─────────────────────────────────────────── */
function CountUpStat({ target, suffix, label, isDark, isVisible, delay }) {
  const [count, setCount] = useState(0);
  const started = React.useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;

    const duration    = 1600;           // ms total animation
    const startDelay  = delay * 1000;   // convert s → ms

    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

    let raf;
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      function tick(now) {
        const t = Math.min((now - startTime) / duration, 1);
        setCount(Math.floor(easeOutCubic(t) * target));
        if (t < 1) raf = requestAnimationFrame(tick);
        else        setCount(target);
      }
      raf = requestAnimationFrame(tick);
    }, startDelay);

    return () => { clearTimeout(timeout); cancelAnimationFrame(raf); };
  }, [isVisible, target, delay]);

  return (
    <div
      className="hero-stat"
      style={{
        opacity: isVisible ? 1 : 0,
        animation: isVisible
          ? `hero-counter 0.5s ease-out ${0.38 + delay}s both`
          : "none",
      }}
    >
      <div
        className="hero-stat-num"
        style={{
          color: isDark ? undefined : "#0f172a",
          WebkitTextFillColor: isDark ? undefined : "#0f172a",
          fontVariantNumeric: "tabular-nums",
          minWidth: "3.5ch",
        }}
      >
        {count}{suffix}
      </div>
      <div
        className="hero-stat-label"
        style={{ color: isDark ? undefined : "rgba(0,0,0,0.40)" }}
      >
        {label}
      </div>
    </div>
  );
}