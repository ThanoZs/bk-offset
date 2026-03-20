/**
 * HeroSection.jsx — Premium editorial hero for BK Offset Printing.
 * Features atmospheric animations, count-up statistics, and a "Learn More" info modal.
 */

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, User, Sparkles, ArrowRight, Star, X } from "lucide-react";
import { T } from "../../utils/designTokens";
import { FloatingParticles } from "../common/FloatingParticles";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { PHONE_NUMBER, WHATSAPP_LINK } from "../../utils/constants";

/**
 * HeroSection — Main landing component with interactive call-to-actions and brand stats.
 */
export function HeroSection({ text, isDark, c, isAuth, isMobile, setShowAuth }) {
  const [ref, isVisible] = useScrollAnimation();
  const [showLearnMore, setShowLearnMore] = useState(false);

  return (
    <>
      <style>{HERO_STYLES}</style>

      <section
        ref={ref}
        style={styles.section(isMobile)}
      >
        {/* ── Atmospheric background orbs ── */}
        <div className="hero-orb" style={styles.orb1(isMobile, isDark)} />
        <div className="hero-orb" style={styles.orb2(isMobile, isDark)} />
        <div className="hero-orb" style={styles.orb3(isMobile, isDark)} />

        {/* Dynamic scanline overlay */}
        <div className="hero-scan" />

        {/* Ambient floating particles */}
        <FloatingParticles isDark={isDark} count={isMobile ? 20 : 35} />

        {/* ── Main Content Container ── */}
        <div style={styles.contentContainer}>

          {/* Eyebrow badge for immediate value proposition */}
          <div
            className="hero-badge"
            style={styles.heroBadge(isDark)}
          >
            <Sparkles size={13} strokeWidth={2} />
            Premium Printing Services
          </div>

          {/* Primary Headline with gradient accent */}
          <h1
            className="hero-h1"
            style={styles.headline(isMobile, isDark, isVisible)}
          >
            {text.heroTitle}
            <br />
            <span className="hero-grad-word">{text.heroTitle2}</span>
          </h1>

          {/* Subtext description */}
          <p
            className="hero-sub"
            style={styles.subtext(isMobile, isDark, isVisible)}
          >
            {text.heroSub}
          </p>

          {/* Call-to-Action Group */}
          <div style={styles.ctaGroup(isVisible)}>
            {isAuth ? (
              <>
                {/* Contact links visible for authenticated users */}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="hero-btn"
                  style={styles.btnPrimary(isMobile)}
                >
                  <Phone size={16} strokeWidth={2} />
                  Call Now
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn"
                  style={styles.btnWhatsapp(isMobile)}
                >
                  <MessageCircle size={16} strokeWidth={2} />
                  WhatsApp
                </a>
              </>
            ) : (
              <>
                {/* Sign-in prompt for non-authenticated visitors */}
                <button
                  onClick={() => setShowAuth(true)}
                  className="hero-btn"
                  style={styles.btnPrimary(isMobile)}
                >
                  <User size={16} strokeWidth={2} />
                  {isMobile ? text.signIn : `${text.signIn} to Contact Us`}
                  <ArrowRight size={15} strokeWidth={2.5} />
                </button>

                {/* Info modal trigger */}
                <button
                  onClick={() => setShowLearnMore(true)}
                  className="hero-btn"
                  style={styles.btnSecondary(isMobile, isDark)}
                >
                  Learn More
                  <ArrowRight size={15} strokeWidth={2.5} />
                </button>
              </>
            )}
          </div>

          {/* ── Stat strip for social proof ── */}
          <div
            className="hero-stat-strip"
            style={styles.statStrip(isVisible)}
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

          {/* Trust indicators (ratings and location) */}
          <div style={styles.trustWrapper(isVisible)}>
            <div className="hero-trust">
              <Star size={11} fill="currentColor" color="#f59e0b" style={styles.starIcon} />
              <Star size={11} fill="currentColor" color="#f59e0b" style={styles.starIcon} />
              <Star size={11} fill="currentColor" color="#f59e0b" style={styles.starIcon} />
              <Star size={11} fill="currentColor" color="#f59e0b" style={styles.starIcon} />
              <Star size={11} fill="currentColor" color="#f59e0b" style={styles.starIcon} />
              <span style={styles.trustText}>Trusted by publishers across Delhi since 1995</span>
              <span className="hero-trust-dot" />
              <span>Dilshad Garden</span>
            </div>
          </div>

        </div>

        {/* ── Bottom gradient vignette ── */}
        <div style={styles.bottomFade(isDark)} />
      </section>

      {/* ── "About Us" Detailed Modal ── */}
      {showLearnMore && (
        <div className="hero-modal-overlay" onClick={() => setShowLearnMore(false)}>
          <div 
            className="hero-modal-content" 
            onClick={(e) => e.stopPropagation()}
            style={styles.modalContent(isDark)}
          >
            <button 
              className="hero-modal-close"
              onClick={() => setShowLearnMore(false)}
            >
              <X size={20} />
            </button>

            <h2 style={styles.modalTitle(isMobile, isDark)}>
              About{" "}
              <span style={styles.modalTitleAccent}>
                BK Offset Printing
              </span>
            </h2>

            <div style={styles.modalBody(isMobile, isDark)}>
              <p style={styles.mb20}>
                <strong>BK Offset Printing</strong> has been a trusted name in the printing industry since 1995, serving publishers, authors, and businesses across Delhi with premium printing solutions.
              </p>

              <h3 style={styles.sectionSubTitle}>Our Services</h3>

              <ul style={styles.modalList}>
                <li style={styles.mb8}><strong>Bulk Book Printing:</strong> High-volume printing for publishers, authors, and institutions. Textbooks, novels, catalogs, and manuals.</li>
                <li style={styles.mb8}><strong>Thermal Gloss Lamination:</strong> Premium gloss finish using Fevicol-based adhesives that makes colours pop and protects your prints.</li>
                <li style={styles.mb8}><strong>Matte Lamination:</strong> Sophisticated, non-reflective finish for premium covers that need to feel as good as they look.</li>
                <li style={styles.mb8}><strong>Soft-Touch Lamination:</strong> Velvety, luxurious texture ideal for book covers, premium brochures, and collector's editions.</li>
                <li style={styles.mb8}><strong>Title Printing:</strong> Custom title work with embossing, debossing, spot UV, and digital printing.</li>
              </ul>

              <h3 style={styles.sectionSubTitle}>Our Equipment</h3>

              <p style={styles.mb16}>
                We operate world-class Heidelberg and Akiyama equipment, including:
              </p>

              <ul style={styles.modalList}>
                <li>Heidelberg Speedmaster Multicolor (Flagship 4-colour press)</li>
                <li>Akiyama 4-Colour Press with alcohol-damping system</li>
                <li>Heidelberg Autoplate automated plate-loading system</li>
                <li>Heidelberg SORDZ 2-Colour press (25×36 inches)</li>
                <li>Industrial-grade thermal lamination machines</li>
                <li>Automatic paper cutting machines with ±0.01mm accuracy</li>
              </ul>

              <h3 style={styles.sectionSubTitle}>Why Choose Us</h3>

              <div style={styles.metricGrid(isMobile)}>
                <div style={styles.metricCard(isDark)}>
                  <div style={styles.metricEmoji}>🎯</div>
                  <h4 style={styles.metricHeader}>30+ Years Experience</h4>
                  <p style={styles.metricSub(isDark)}>Trusted by thousands of businesses since 1995</p>
                </div>
                <div style={styles.metricCard(isDark)}>
                  <div style={styles.metricEmoji}>⚡</div>
                  <h4 style={styles.metricHeader}>Fast Turnaround</h4>
                  <p style={styles.metricSub(isDark)}>Quick delivery without compromise on quality</p>
                </div>
                <div style={styles.metricCard(isDark)}>
                  <div style={styles.metricEmoji}>🏆</div>
                  <h4 style={styles.metricHeader}>Premium Quality</h4>
                  <p style={styles.metricSub(isDark)}>Every print meets the highest standards</p>
                </div>
              </div>

              <p style={styles.modalQuote(isDark)}>
                "We welcome publishers, authors, and businesses for live demonstrations at our facility in Dilshad Garden."
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * CountUpStat — Sub-component that counts 0 → target over ~1.6s.
 */
function CountUpStat({ target, suffix, label, isDark, isVisible, delay }) {
  const [count, setCount] = useState(0);
  const started = React.useRef(false);

  useEffect(() => {
    // Prevent re-triggering once started
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
      style={styles.stat(isVisible, delay)}
    >
      <div
        className="hero-stat-num"
        style={styles.statNum(isDark)}
      >
        {count}{suffix}
      </div>
      <div
        className="hero-stat-label"
        style={styles.statLabel(isDark)}
      >
        {label}
      </div>
    </div>
  );
}

/* ─── Consolidated Styles ────────────────────────────────── */

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
  @keyframes hero-slideDown {
    from { opacity: 0; transform: translateY(-20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

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

  .hero-sub {
    font-family: 'DM Sans', sans-serif;
    line-height: 1.75;
  }

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

  .hero-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.75);
    backdrop-filter: blur(10px);
    z-index: 3000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: hero-fadeIn 0.3s ease-out;
  }
  .hero-modal-content {
    max-width: 800px;
    max-height: 80vh;
    overflow-y: auto;
    background: var(--modal-bg);
    border-radius: 24px;
    padding: 40px;
    position: relative;
    box-shadow: 0 30px 80px rgba(0,0,0,0.4);
    animation: hero-slideDown 0.4s ease-out;
  }
  .hero-modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--close-bg);
    border: 1px solid var(--close-border);
    color: var(--close-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .hero-modal-close:hover {
    background: var(--close-hover-bg);
    transform: scale(1.1);
  }

  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }

  .hero-scan {
    position: absolute;
    left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg,transparent,rgba(14,165,233,0.20),transparent);
    animation: hero-scanline 10s linear infinite;
    pointer-events: none;
    z-index: 1;
  }

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
    .hero-modal-content { padding: 30px 20px; }
  }
`;

const styles = {
  section: (isMobile) => ({
    position: "relative",
    overflow: "hidden",
    minHeight: isMobile ? "100svh" : "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: isMobile ? "100px 20px 60px" : "120px 40px 80px",
    textAlign: "center",
    background: "transparent",
  }),
  orb1: (isMobile, isDark) => ({
    width: isMobile ? 300 : 600, height: isMobile ? 300 : 600,
    top: isMobile ? "-100px" : "-200px", left: "10%",
    background: isDark
      ? "radial-gradient(circle,rgba(14,165,233,0.18) 0%,transparent 70%)"
      : "radial-gradient(circle,rgba(14,165,233,0.14) 0%,transparent 70%)",
    animation: "hero-orb1 14s ease-in-out infinite",
    zIndex: 0,
  }),
  orb2: (isMobile, isDark) => ({
    width: isMobile ? 250 : 500, height: isMobile ? 250 : 500,
    bottom: isMobile ? "-50px" : "-100px", right: "5%",
    background: isDark
      ? "radial-gradient(circle,rgba(99,102,241,0.16) 0%,transparent 70%)"
      : "radial-gradient(circle,rgba(99,102,241,0.11) 0%,transparent 70%)",
    animation: "hero-orb2 18s ease-in-out infinite",
    zIndex: 0,
  }),
  orb3: (isMobile, isDark) => ({
    width: isMobile ? 180 : 320, height: isMobile ? 180 : 320,
    top: "35%", right: isMobile ? "5%" : "20%",
    background: isDark
      ? "radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 70%)"
      : "radial-gradient(circle,rgba(56,189,248,0.08) 0%,transparent 70%)",
    animation: "hero-orb3 11s ease-in-out infinite",
    zIndex: 0,
  }),
  contentContainer: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: 820,
  },
  heroBadge: (isDark) => ({
    background: isDark ? "rgba(14,165,233,0.12)" : "rgba(14,165,233,0.10)",
    border: `1px solid ${isDark ? "rgba(14,165,233,0.30)" : "rgba(14,165,233,0.25)"}`,
    color: "#38bdf8",
    marginBottom: 24,
  }),
  headline: (isMobile, isDark, isVisible) => ({
    fontSize: isMobile ? "38px" : "clamp(44px,6.5vw,76px)",
    color: isDark ? "#f1f5f9" : "#0f172a",
    marginBottom: 20,
    opacity: isVisible ? 1 : 0,
    animation: isVisible ? "hero-fadeUp 0.7s ease-out 0.08s both" : "none",
  }),
  subtext: (isMobile, isDark, isVisible) => ({
    fontSize: isMobile ? "14.5px" : "clamp(15px,1.6vw,17px)",
    color: isDark ? "rgba(255,255,255,0.52)" : "#475569",
    maxWidth: 540,
    margin: "0 auto 36px",
    opacity: isVisible ? 1 : 0,
    animation: isVisible ? "hero-fadeUp 0.7s ease-out 0.18s both" : "none",
  }),
  ctaGroup: (isVisible) => ({
    display: "flex",
    justifyContent: "center",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 48,
    opacity: isVisible ? 1 : 0,
    animation: isVisible ? "hero-fadeUp 0.7s ease-out 0.28s both" : "none",
  }),
  btnPrimary: (isMobile) => ({
    background: "linear-gradient(135deg,#0ea5e9,#6366f1)",
    color: "#fff",
    padding: isMobile ? "12px 24px" : "14px 28px",
    fontSize: isMobile ? "14px" : "15px",
    boxShadow: "0 6px 24px rgba(14,165,233,0.35)",
  }),
  btnWhatsapp: (isMobile) => ({
    background: "linear-gradient(135deg,#16a34a,#22c55e)",
    color: "#fff",
    padding: isMobile ? "12px 24px" : "14px 28px",
    fontSize: isMobile ? "14px" : "15px",
    boxShadow: "0 6px 24px rgba(22,163,74,0.32)",
  }),
  btnSecondary: (isMobile, isDark) => ({
    background: "transparent",
    color: isDark ? "rgba(255,255,255,0.75)" : "#0f172a",
    padding: isMobile ? "11px 24px" : "13px 28px",
    fontSize: isMobile ? "14px" : "15px",
    border: `1px solid ${isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"}`,
    boxShadow: "none",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  }),
  statStrip: (isVisible) => ({
    marginBottom: 28,
    opacity: isVisible ? 1 : 0,
    animation: isVisible ? "hero-fadeUp 0.6s ease-out 0.38s both" : "none",
  }),
  stat: (isVisible, delay) => ({
    opacity: isVisible ? 1 : 0,
    animation: isVisible
      ? `hero-counter 0.5s ease-out ${0.38 + delay}s both`
      : "none",
  }),
  statNum: (isDark) => ({
    color: isDark ? undefined : "#0f172a",
    WebkitTextFillColor: isDark ? undefined : "#0f172a",
    fontVariantNumeric: "tabular-nums",
    minWidth: "3.5ch",
  }),
  statLabel: (isDark) => ({
    color: isDark ? undefined : "rgba(0,0,0,0.40)",
  }),
  trustWrapper: (isVisible) => ({
    opacity: isVisible ? 1 : 0,
    animation: isVisible ? "hero-fadeIn 0.8s ease-out 0.55s both" : "none",
    display: "flex",
    justifyContent: "center",
  }),
  starIcon: {
    opacity: 0.85,
  },
  trustText: {
    marginLeft: 4,
  },
  bottomFade: (isDark) => ({
    position: "absolute",
    bottom: 0, left: 0, right: 0,
    height: 80,
    background: isDark
      ? "linear-gradient(to bottom,transparent,rgba(2,6,23,0.55))"
      : "linear-gradient(to bottom,transparent,rgba(248,250,252,0.60))",
    pointerEvents: "none",
    zIndex: 1,
  }),
  modalContent: (isDark) => ({
    "--modal-bg": isDark ? "#0f172a" : "#ffffff",
    "--close-bg": isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
    "--close-border": isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)",
    "--close-color": isDark ? "#94a3b8" : "#64748b",
    "--close-hover-bg": isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)",
  }),
  modalTitle: (isMobile, isDark) => ({
    fontFamily: "'Instrument Serif', Georgia, serif",
    fontSize: isMobile ? "28px" : "36px",
    fontWeight: 400,
    color: isDark ? "#f1f5f9" : "#0f172a",
    marginBottom: 24,
  }),
  modalTitleAccent: {
    background: "linear-gradient(135deg,#0ea5e9,#6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  modalBody: (isMobile, isDark) => ({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: isMobile ? "15px" : "16px",
    lineHeight: 1.8,
    color: isDark ? "rgba(255,255,255,0.8)" : "#1e293b",
  }),
  sectionSubTitle: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#0ea5e9",
    marginBottom: 12,
    marginTop: 24,
  },
  modalList: {
    marginBottom: 20,
    paddingLeft: 20,
  },
  mb20: { marginBottom: 20 },
  mb16: { marginBottom: 16 },
  mb8: { marginBottom: 8 },
  metricGrid: (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gap: 16,
    marginTop: 16,
    marginBottom: 24,
  }),
  metricCard: (isDark) => ({
    padding: 16,
    background: isDark ? "rgba(255,255,255,0.05)" : "rgba(14,165,233,0.05)",
    borderRadius: 12,
    border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(14,165,233,0.2)"}`,
  }),
  metricEmoji: { fontSize: 24, marginBottom: 8 },
  metricHeader: { fontWeight: 600, marginBottom: 4 },
  metricSub: (isDark) => ({
    fontSize: "14px",
    color: isDark ? "rgba(255,255,255,0.6)" : "#475569",
  }),
  modalQuote: (isDark) => ({
    fontStyle: "italic",
    color: "#0ea5e9",
    textAlign: "center",
    marginTop: 24,
    padding: 16,
    borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(14,165,233,0.2)"}`,
  }),
};

const STATS = [
  { target: 30,  suffix: "+",  label: "Years Active"  },
  { target: 50,  suffix: "K+", label: "Books Printed" },
  { target: 500, suffix: "+",  label: "Happy Clients" },
];
