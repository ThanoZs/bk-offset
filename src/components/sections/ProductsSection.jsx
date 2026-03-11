import React, { useState, useRef, useEffect, useCallback } from "react";
import { BookOpen, Sparkles, Layers, Type, Heart, ArrowUpRight, Zap } from "lucide-react";
import { T } from "../../utils/designTokens";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

/* ═══════════════════════════════════════════════════════
   STYLES — everything lives here, zero external deps
═══════════════════════════════════════════════════════ */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  /* ─── Keyframes ─── */
  @keyframes ps-fadeUp {
    from { opacity:0; transform:translateY(32px) scale(0.97); }
    to   { opacity:1; transform:translateY(0)    scale(1); }
  }
  @keyframes ps-slideRight {
    from { opacity:0; transform:translateX(-40px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes ps-glow-pulse {
    0%,100% { opacity:0.5; transform:scale(1); }
    50%      { opacity:1;   transform:scale(1.08); }
  }
  @keyframes ps-float {
    0%,100% { transform:translateY(0px) rotate(0deg); }
    33%     { transform:translateY(-8px) rotate(1deg); }
    66%     { transform:translateY(-4px) rotate(-0.5deg); }
  }
  @keyframes ps-spin-slow {
    from { transform:rotate(0deg); }
    to   { transform:rotate(360deg); }
  }
  @keyframes ps-shimmer {
    0%   { transform:translateX(-110%) skewX(-10deg); }
    100% { transform:translateX(210%)  skewX(-10deg); }
  }
  @keyframes ps-bar-in {
    from { transform:scaleX(0); }
    to   { transform:scaleX(1); }
  }
  @keyframes ps-tag-pop {
    0%   { opacity:0; transform:scale(0.7) translateY(6px); }
    70%  { transform:scale(1.05) translateY(-1px); }
    100% { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes ps-counter {
    from { opacity:0; transform:translateY(10px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes ps-orbit {
    from { transform:rotate(0deg) translateX(28px) rotate(0deg); }
    to   { transform:rotate(360deg) translateX(28px) rotate(-360deg); }
  }
  @keyframes ps-scanline {
    0%   { top:-10%; }
    100% { top:110%; }
  }
  @keyframes ps-border-flow {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* ─── Section eyebrow ─── */
  .ps-eyebrow {
    display:inline-flex; align-items:center; gap:12px;
    font-family:'DM Sans',sans-serif;
    font-size:10px; font-weight:700; letter-spacing:0.2em;
    text-transform:uppercase;
  }
  .ps-eyebrow span.line {
    display:block; height:1px; width:32px;
    background:currentColor; opacity:0.5;
  }

  /* ─── Heading gradient text ─── */
  .ps-grad-text {
    display:inline-block;
    background-clip:text; -webkit-background-clip:text;
    -webkit-text-fill-color:transparent; color:transparent;
  }

  /* ─── Card outer wrapper ─── */
  .ps-card-outer {
    position:relative;
    border-radius:20px;
    padding:1.5px;
    transition:padding 0.3s ease;
    cursor:pointer;
    height:100%;
    box-sizing:border-box;
  }

  /* animated rainbow border */
  .ps-card-outer::before {
    content:'';
    position:absolute; inset:0;
    border-radius:20px;
    background:linear-gradient(
      270deg,
      var(--c-accent),
      var(--c-glow2),
      var(--c-accent),
      var(--c-glow2)
    );
    background-size:300% 300%;
    opacity:0;
    transition:opacity 0.4s ease;
    z-index:0;
  }
  .ps-card-outer:hover::before {
    opacity:1;
    animation:ps-border-flow 2.5s ease infinite;
  }

  /* ─── Card inner ─── */
  .ps-card-inner {
    position:relative;
    border-radius:19px;
    overflow:hidden;
    z-index:1;
    transition:
      box-shadow 0.45s cubic-bezier(.22,1,.36,1),
      transform  0.45s cubic-bezier(.22,1,.36,1);
    will-change:transform;
    transform-style:preserve-3d;
  }

  /* lift on hover handled by JS for 3D tilt */
  .ps-card-outer:hover .ps-card-inner {
    box-shadow:
      0 32px 80px rgba(0,0,0,0.18),
      0 0 0 0px transparent;
  }

  /* scanline effect — moves top to bottom */
  .ps-card-inner::before {
    content:'';
    position:absolute; left:0; right:0; top:-10%;
    height:40%;
    background:linear-gradient(
      to bottom,
      transparent 0%,
      rgba(255,255,255,0.03) 50%,
      transparent 100%
    );
    pointer-events:none;
    z-index:5;
    opacity:0;
    transition:opacity 0.3s ease;
  }
  .ps-card-outer:hover .ps-card-inner::before {
    opacity:1;
    animation:ps-scanline 2s linear infinite;
  }

  /* shimmer sweep */
  .ps-card-inner::after {
    content:'';
    position:absolute; inset:0;
    background:linear-gradient(
      130deg,
      transparent 0%,
      rgba(255,255,255,0.07) 45%,
      transparent 90%
    );
    transform:translateX(-110%) skewX(-10deg);
    pointer-events:none;
    z-index:4;
    transition:none;
  }
  .ps-card-outer:hover .ps-card-inner::after {
    animation:ps-shimmer 0.7s cubic-bezier(.22,1,.36,1) forwards;
  }

  /* ─── Card content layer ─── */
  .ps-card-content {
    position:relative;
    display:flex; flex-direction:column;
    padding:28px 26px 24px;
    z-index:2;
    transition:transform 0.45s cubic-bezier(.22,1,.36,1);
  }

  /* ─── Hover overlay glow ─── */
  .ps-card-glow {
    position:absolute; inset:0;
    background:radial-gradient(
      ellipse 70% 50% at var(--mx,50%) var(--my,0%),
      var(--c-glow-bg) 0%,
      transparent 70%
    );
    opacity:0;
    transition:opacity 0.4s ease;
    pointer-events:none;
    z-index:1;
  }
  .ps-card-outer:hover .ps-card-glow { opacity:1; }

  /* ─── Bottom accent bar ─── */
  .ps-card-bar {
    position:absolute; bottom:0; left:0; right:0;
    height:3px;
    background:linear-gradient(90deg, var(--c-accent), var(--c-glow2));
    transform:scaleX(0);
    transform-origin:left;
    transition:transform 0.5s cubic-bezier(.22,1,.36,1);
    z-index:6;
  }
  .ps-card-outer:hover .ps-card-bar { transform:scaleX(1); }

  /* ─── Icon wrapper ─── */
  .ps-icon-wrap {
    transition:
      background  0.4s ease,
      box-shadow  0.4s ease,
      transform   0.5s cubic-bezier(.34,1.56,.64,1);
    position:relative;
    overflow:visible;
  }
  .ps-card-outer:hover .ps-icon-wrap {
    transform:scale(1.12) rotate(-6deg);
  }

  /* orbiting dot around icon */
  .ps-icon-orbit {
    position:absolute;
    width:7px; height:7px;
    border-radius:50%;
    background:var(--c-accent);
    top:50%; left:50%;
    margin:-3.5px 0 0 -3.5px;
    opacity:0;
    transition:opacity 0.3s ease;
  }
  .ps-card-outer:hover .ps-icon-orbit {
    opacity:1;
    animation:ps-orbit 1.2s linear infinite;
  }

  /* ─── Tag pills ─── */
  .ps-tag {
    font-family:'DM Sans',sans-serif;
    font-size:11px; font-weight:500;
    padding:3px 11px; border-radius:20px;
    transition:
      background 0.3s ease,
      color      0.3s ease,
      transform  0.3s cubic-bezier(.34,1.56,.64,1),
      box-shadow 0.3s ease;
  }
  .ps-card-outer:hover .ps-tag {
    background:var(--c-accent-light) !important;
    color:var(--c-accent) !important;
    border-color:var(--c-accent-border) !important;
  }

  /* staggered tag pop-in */
  .ps-card-outer:hover .ps-tag:nth-child(1) { animation:ps-tag-pop 0.35s 0.05s both cubic-bezier(.34,1.56,.64,1); }
  .ps-card-outer:hover .ps-tag:nth-child(2) { animation:ps-tag-pop 0.35s 0.10s both cubic-bezier(.34,1.56,.64,1); }
  .ps-card-outer:hover .ps-tag:nth-child(3) { animation:ps-tag-pop 0.35s 0.15s both cubic-bezier(.34,1.56,.64,1); }
  .ps-card-outer:hover .ps-tag:nth-child(4) { animation:ps-tag-pop 0.35s 0.20s both cubic-bezier(.34,1.56,.64,1); }

  /* ─── Arrow icon ─── */
  .ps-arrow {
    transition:transform 0.4s cubic-bezier(.34,1.56,.64,1), opacity 0.3s ease;
    opacity:0.4;
  }
  .ps-card-outer:hover .ps-arrow {
    transform:translate(3px,-3px);
    opacity:1;
    color:var(--c-accent) !important;
  }

  /* ─── Number badge ─── */
  .ps-num {
    font-family:'DM Sans',sans-serif;
    font-weight:800; letter-spacing:0.05em;
    transition:
      color     0.35s ease,
      transform 0.4s cubic-bezier(.34,1.56,.64,1);
    line-height:1;
  }
  .ps-card-outer:hover .ps-num {
    color:var(--c-accent) !important;
    transform:scale(1.1);
  }

  /* ─── Description text ─── */
  .ps-desc {
    font-family:'DM Sans',sans-serif;
    transition:color 0.35s ease;
  }

  /* ─── Divider ─── */
  .ps-divider {
    height:1px;
    transition:background 0.4s ease;
  }

  /* ─── Section intro left bar ─── */
  .ps-intro { position:relative; }
  .ps-intro::before {
    content:'';
    position:absolute; left:0; top:14px; bottom:14px;
    width:3px; border-radius:2px;
    background:var(--ps-grad);
  }

  /* ─── Floating badge top-right of section ─── */
  .ps-floating-badge {
    animation:ps-float 4s ease-in-out infinite;
  }

  /* ─── Background grid texture ─── */
  .ps-grid-bg {
    position:absolute; inset:0; pointer-events:none;
    background-image:
      linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
    background-size:48px 48px;
    mask-image:radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
    -webkit-mask-image:radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
  }
  .ps-grid-bg.dark {
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  }
`;

/* ═══════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════ */
const PRODUCTS = [
  {
    title: "Bulk Book Printing",
    desc: "High-volume printing for publishers, authors & institutions. Consistent quality across thousands of copies.",
    icon: BookOpen,
    features: ["Perfect binding", "Case binding", "Saddle stitch", "Spiral binding"],
    accent: "#0ea5e9",
    accentLight: "rgba(14,165,233,0.12)",
    accentBorder: "rgba(14,165,233,0.25)",
    glow2: "#6366f1",
    glowBg: "rgba(14,165,233,0.06)",
    stat: "10K+", statLabel: "copies / run",
  },
  {
    title: "Thermal Gloss Lamination",
    desc: "Fevicol-based gloss lamination that makes colours pop and stands up to heavy daily handling.",
    icon: Sparkles,
    features: ["High-gloss finish", "Scratch-resistant", "Water-resistant", "UV protection"],
    accent: "#8b5cf6",
    accentLight: "rgba(139,92,246,0.12)",
    accentBorder: "rgba(139,92,246,0.25)",
    glow2: "#ec4899",
    glowBg: "rgba(139,92,246,0.06)",
    stat: "4×", statLabel: "more durable",
  },
  {
    title: "Matte Lamination",
    desc: "Sophisticated, non-reflective finish — the go-to for premium covers that feel as good as they look.",
    icon: Layers,
    features: ["Non-reflective", "Soft-touch feel", "Fingerprint resist", "Pro look"],
    accent: "#10b981",
    accentLight: "rgba(16,185,129,0.12)",
    accentBorder: "rgba(16,185,129,0.25)",
    glow2: "#34d399",
    glowBg: "rgba(16,185,129,0.06)",
    stat: "★4.9", statLabel: "client rating",
  },
  {
    title: "Soft-Touch Lamination",
    desc: "Velvety, luxurious texture that turns every printed piece into an unforgettable tactile experience.",
    icon: Heart,
    features: ["Velvety smooth", "Premium feel", "Scuff-resistant", "Vivid colours"],
    accent: "#f59e0b",
    accentLight: "rgba(245,158,11,0.12)",
    accentBorder: "rgba(245,158,11,0.25)",
    glow2: "#f97316",
    glowBg: "rgba(245,158,11,0.06)",
    stat: "100%", statLabel: "Fevicol-based",
  },
  {
    title: "Title Printing",
    desc: "Custom title work for book spines, special-edition covers, and branded collateral. Unforgettable.",
    icon: Type,
    features: ["Embossing/Deboss", "Spot UV", "Digital print", "Custom fonts"],
    accent: "#ec4899",
    accentLight: "rgba(236,72,153,0.12)",
    accentBorder: "rgba(236,72,153,0.25)",
    glow2: "#f43f5e",
    glowBg: "rgba(236,72,153,0.06)",
    stat: "48h", statLabel: "turnaround",
  },
];

/* ═══════════════════════════════════════════════════════
   MAIN SECTION
═══════════════════════════════════════════════════════ */
export function ProductsSection({ isDark, c, isMobile, isTablet }) {
  const [ref, isVisible] = useScrollAnimation();
  const primary = T.primary ?? "#0ea5e9";
  const grad    = T.grad    ?? "linear-gradient(135deg,#0ea5e9,#6366f1)";

  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <>
      <style>{STYLES}</style>
      <style>{`:root{--ps-grad:${grad};}`}</style>

      <section
        ref={ref}
        style={{
          position: "relative",
          padding:  isMobile ? "80px 18px 100px" : "120px 48px 140px",
          maxWidth: 1280,
          margin:   "0 auto",
          overflow: "hidden",
        }}
      >
        {/* background grid texture */}
        <div className={`ps-grid-bg${isDark ? " dark" : ""}`} />

        {/* large blurred orb — ambient glow */}
        <div style={{
          position:"absolute", top:"0%", left:"50%",
          transform:"translateX(-50%)",
          width:700, height:340,
          background:`radial-gradient(ellipse, ${primary}14 0%, transparent 70%)`,
          pointerEvents:"none", zIndex:0,
        }} />

        {/* ── HEADER ── */}
        <div style={{
          position:"relative", zIndex:2,
          textAlign:"center",
          marginBottom: isMobile ? 52 : 80,
          opacity:    isVisible ? 1 : 0,
          animation:  isVisible ? "ps-fadeUp 0.6s ease-out both" : "none",
        }}>

          {/* eyebrow */}
          <div className="ps-eyebrow" style={{
            color:primary, marginBottom:20, justifyContent:"center",
          }}>
            <span className="line"/>
            What we offer
            <span className="line"/>
          </div>

          {/* headline */}
          <h2 style={{
            fontFamily:"'Instrument Serif',Georgia,serif",
            fontSize: isMobile ? "38px" : "62px",
            fontWeight:400,
            letterSpacing:"-0.03em",
            lineHeight:1.05,
            color:c.text,
            margin:"0 0 32px",
          }}>
            Our Printing{" "}
            <span style={{
              fontStyle:"italic",
              display:"inline-block",
              background:grad,
              backgroundClip:"text",
              WebkitBackgroundClip:"text",
              WebkitTextFillColor:"transparent",
              color:"transparent",
            }}>
              Services
            </span>
          </h2>

          {/* intro block — original style with gradient left bar */}
          <div className="ps-intro" style={{
            display:"inline-block", maxWidth:580, textAlign:"left",
            padding:"16px 22px 16px 28px",
            background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.028)",
            border:`1px solid ${isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.075)"}`,
            borderRadius:12,
          }}>
            <p style={{
              margin:0,
              fontFamily:"'DM Sans',sans-serif",
              fontSize: isMobile ? "13.5px" : "14.5px",
              lineHeight:1.75,
              color: c.textMid ?? c.textDim,
            }}>
              Specialising in high-quality bulk book printing and professional
              lamination services. We use premium Fevicol-based adhesives,
              serving publishers, authors, and businesses across Delhi.
            </p>
          </div>

        </div>

        {/* ── CARD GRID ── */}
        <div style={{
          position:"relative", zIndex:2,
          display:"grid",
          gridTemplateColumns:`repeat(${cols},1fr)`,
          gap: isMobile ? 14 : 18,
          /* uniform row height */
          gridAutoRows: isMobile ? "auto" : "1fr",
        }}>
          {PRODUCTS.map((p, idx) => (
            <AnimatedCard
              key={p.title}
              {...p}
              index={idx + 1}
              isDark={isDark}
              c={c}
              isMobile={isMobile}
              isVisible={isVisible}
              delay={0.08 + idx * 0.08}
            />
          ))}
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   ANIMATED CARD — 3D magnetic tilt + all micro-animations
═══════════════════════════════════════════════════════ */
function AnimatedCard({
  title, desc, icon: Icon, features,
  accent, accentLight, accentBorder, glow2, glowBg,
  index, isDark, c, isMobile, isVisible, delay,
}) {
  const outerRef  = useRef(null);
  const innerRef  = useRef(null);
  const glowRef   = useRef(null);
  const [hov, setHov] = useState(false);

  /* ── 3D magnetic tilt ── */
  const handleMouseMove = useCallback((e) => {
    if (!innerRef.current || !outerRef.current) return;
    const rect = outerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width  / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;   // -1 to 1
    const dy = (y - cy) / cy;

    const tiltX = dy * -10;   // degrees
    const tiltY = dx *  10;

    innerRef.current.style.transform =
      `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(8px)`;

    /* move radial glow with cursor */
    if (glowRef.current) {
      const pct_x = (x / rect.width)  * 100;
      const pct_y = (y / rect.height) * 100;
      glowRef.current.style.setProperty("--mx", `${pct_x}%`);
      glowRef.current.style.setProperty("--my", `${pct_y}%`);
    }
  }, []);

  const handleMouseEnter = useCallback(() => setHov(true),  []);
  const handleMouseLeave = useCallback(() => {
    setHov(false);
    if (innerRef.current)
      innerRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  }, []);

  /* base card colours */
  const cardBg = isDark
    ? "rgba(15,23,42,0.80)"
    : "rgba(255,255,255,0.88)";

  const cardShadow = hov
    ? isDark
      ? `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px ${accentLight}, 0 0 60px ${accent}18`
      : `0 24px 64px rgba(0,0,0,0.10), 0 0 0 1px ${accentLight}, 0 0 40px ${accent}12`
    : isDark
    ? "0 2px 8px rgba(0,0,0,0.5)"
    : "0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.05)";

  return (
    <div
      ref={outerRef}
      className="ps-card-outer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        "--c-accent":        accent,
        "--c-glow2":         glow2,
        "--c-accent-light":  accentLight,
        "--c-accent-border": accentBorder,
        "--c-glow-bg":       glowBg,
        /* enforce same height for all cards */
        height: "100%",
        opacity:   isVisible ? 1 : 0,
        animation: isVisible
          ? `ps-fadeUp 0.6s cubic-bezier(.22,1,.36,1) ${delay}s both`
          : "none",
      }}
    >
      <div
        ref={innerRef}
        className="ps-card-inner"
        style={{
          height:"100%",
          background:           cardBg,
          boxShadow:            cardShadow,
          backdropFilter:       "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          transition: hov ? "box-shadow 0.4s ease" : "box-shadow 0.4s ease, transform 0.5s cubic-bezier(.22,1,.36,1)",
        }}
      >
        {/* cursor-tracking glow */}
        <div
          ref={glowRef}
          className="ps-card-glow"
          style={{ "--mx":"50%", "--my":"0%" }}
        />

        {/* coloured bottom bar */}
        <div className="ps-card-bar" />

        <div className="ps-card-content" style={{ height:"100%", boxSizing:"border-box" }}>

          {/* ── TOP ROW: icon only ── */}
          <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:20 }}>
            {/* icon */}
            <div
              className="ps-icon-wrap"
              style={{
                width:52, height:52, borderRadius:15,
                background: hov ? accent : accentLight,
                display:"flex", alignItems:"center", justifyContent:"center",
                color: hov ? "#fff" : accent,
                boxShadow: hov ? `0 10px 28px ${accent}55` : "none",
                flexShrink:0,
              }}
            >
              <Icon size={22} strokeWidth={1.7} />
              {/* orbiting dot */}
              <div className="ps-icon-orbit" />
            </div>

            {/* arrow only, no stat/number */}
            <ArrowUpRight className="ps-arrow" size={17} strokeWidth={2} style={{ color:c.textDim, flexShrink:0, marginTop:4 }} />
          </div>

          {/* ── TITLE ── */}
          <h3 style={{
            fontFamily:"'Instrument Serif',Georgia,serif",
            fontSize:"19px", fontWeight:400,
            letterSpacing:"-0.01em", lineHeight:1.22,
            color:c.text, margin:"0 0 10px",
          }}>
            {title}
          </h3>

          {/* ── DESCRIPTION ── */}
          <p className="ps-desc" style={{
            fontSize:"13px",
            color: c.textDim,
            lineHeight:1.72,
            margin:"0 0 20px",
            flex:1,
          }}>
            {desc}
          </p>

          {/* ── DIVIDER ── */}
          <div className="ps-divider" style={{
            background: hov
              ? `linear-gradient(90deg,${accent}55,${glow2}33,transparent)`
              : isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)",
            marginBottom:16,
          }}/>

          {/* ── FEATURES ── */}
          <div>
            <div style={{
              display:"flex", alignItems:"center", gap:6, marginBottom:10,
            }}>
              <Zap size={9} style={{ color:accent }} strokeWidth={2.5} />
              <span style={{
                fontFamily:"'DM Sans',sans-serif",
                fontSize:"9px", fontWeight:700, letterSpacing:"0.16em",
                textTransform:"uppercase", color:accent,
              }}>
                Includes
              </span>
            </div>

            <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
              {features.map((f, i) => (
                <span
                  key={i}
                  className="ps-tag"
                  style={{
                    background:   isDark ? "rgba(255,255,255,0.07)" : accentLight,
                    color:        isDark ? "rgba(255,255,255,0.58)"  : `${accent}cc`,
                    border:       `1px solid ${isDark ? "rgba(255,255,255,0.09)" : accentBorder}`,
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}