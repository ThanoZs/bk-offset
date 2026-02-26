import React, { useState } from "react";
import { BookOpen, Sparkles, Layers, Type, Heart } from "lucide-react";
import { T } from "../../utils/designTokens";
import { SectionHeader } from "../common/SectionHeader";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

/* ─────────────────────────────────────────────
   Injected global styles
───────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

  @keyframes ps-fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .ps-card {
    position: relative;
    overflow: hidden;
    cursor: default;
    transition:
      box-shadow   0.4s cubic-bezier(.22,1,.36,1),
      transform    0.4s cubic-bezier(.22,1,.36,1),
      border-color 0.3s ease,
      background   0.35s ease;
  }

  /* shimmer sweep on hover */
  .ps-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      130deg,
      transparent 0%,
      rgba(255,255,255,0.06) 45%,
      transparent 90%
    );
    transform: translateX(-110%) skewX(-10deg);
    transition: transform 0.65s cubic-bezier(.22,1,.36,1);
    pointer-events: none;
    z-index: 1;
  }
  .ps-card:hover::before {
    transform: translateX(210%) skewX(-10deg);
  }

  /* coloured bottom bar */
  .ps-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: var(--ps-accent, #0ea5e9);
    transform: scaleX(0);
    transform-origin: left center;
    border-radius: 0 0 18px 18px;
    transition: transform 0.4s cubic-bezier(.22,1,.36,1);
  }
  .ps-card:hover::after { transform: scaleX(1); }

  .ps-card:hover { transform: translateY(-6px); }

  .ps-icon {
    transition:
      background  0.35s ease,
      color       0.35s ease,
      box-shadow  0.35s ease,
      transform   0.4s cubic-bezier(.34,1.56,.64,1);
  }
  .ps-card:hover .ps-icon {
    transform: scale(1.1) rotate(5deg);
  }

  .ps-badge {
    transition: opacity 0.3s ease;
  }
  .ps-card:hover .ps-badge { opacity: 0.55 !important; }

  .ps-pill {
    transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
  }
  .ps-card:hover .ps-pill {
    background: var(--ps-accent-light, rgba(14,165,233,0.14)) !important;
    color: var(--ps-accent, #0ea5e9) !important;
    border-color: var(--ps-accent-border, rgba(14,165,233,0.25)) !important;
  }

  .ps-divider {
    transition: background 0.35s ease;
  }

  .ps-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .ps-eyebrow::before, .ps-eyebrow::after {
    content: '';
    display: block;
    width: 28px;
    height: 1px;
    opacity: 0.6;
    background: currentColor;
  }

  .ps-intro {
    position: relative;
  }
  .ps-intro::before {
    content: '';
    position: absolute;
    left: 0; top: 12px; bottom: 12px;
    width: 3px;
    border-radius: 2px;
    background: var(--ps-grad);
  }
`;

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const PRODUCTS = [
  {
    title: "Bulk Book Printing",
    desc: "High-volume printing for publishers, authors, and institutions. Consistent quality across thousands of copies — textbooks, novels, catalogs, and manuals.",
    icon: BookOpen,
    features: ["Perfect binding", "Case binding", "Saddle stitch", "Spiral binding"],
    accent: "#0ea5e9",
    accentLight: "rgba(14,165,233,0.10)",
    accentBorder: "rgba(14,165,233,0.22)",
    accentGlow: "rgba(14,165,233,0.28)",
  },
  {
    title: "Thermal Gloss Lamination",
    desc: "Premium gloss lamination using Fevicol-based adhesives. A shiny, protective finish that makes colours pop and stands up to daily handling.",
    icon: Sparkles,
    features: ["High-gloss finish", "Scratch-resistant", "Water-resistant", "UV protection"],
    accent: "#8b5cf6",
    accentLight: "rgba(139,92,246,0.10)",
    accentBorder: "rgba(139,92,246,0.22)",
    accentGlow: "rgba(139,92,246,0.28)",
  },
  {
    title: "Matte Lamination",
    desc: "Sophisticated, non-reflective finish using Fevicol-based adhesives. The go-to for premium covers that need to feel as good as they look.",
    icon: Layers,
    features: ["Non-reflective finish", "Soft-touch feel", "Fingerprint resistant", "Professional look"],
    accent: "#10b981",
    accentLight: "rgba(16,185,129,0.10)",
    accentBorder: "rgba(16,185,129,0.22)",
    accentGlow: "rgba(16,185,129,0.28)",
  },
  {
    title: "Soft-Touch Lamination",
    desc: "Velvety, luxurious texture that turns every printed piece into an experience. Ideal for book covers, premium brochures, and collector's editions.",
    icon: Heart,
    features: ["Velvety smooth finish", "Premium feel", "Scuff-resistant", "Enhances colours"],
    accent: "#f59e0b",
    accentLight: "rgba(245,158,11,0.10)",
    accentBorder: "rgba(245,158,11,0.22)",
    accentGlow: "rgba(245,158,11,0.28)",
  },
  {
    title: "Title Printing",
    desc: "Custom title work for book spines, special-edition covers, and branded collateral. Every detail crafted to make your title unforgettable.",
    icon: Type,
    features: ["Embossing / Debossing", "Spot UV", "Digital printing", "Custom fonts"],
    accent: "#ec4899",
    accentLight: "rgba(236,72,153,0.10)",
    accentBorder: "rgba(236,72,153,0.22)",
    accentGlow: "rgba(236,72,153,0.28)",
  },
];

/* ─────────────────────────────────────────────
   ProductsSection
───────────────────────────────────────────── */
export function ProductsSection({ isDark, c, isMobile, isTablet }) {
  const [ref, isVisible] = useScrollAnimation();

  const primary  = T.primary  ?? "#0ea5e9";
  const grad     = T.grad     ?? "linear-gradient(135deg,#0ea5e9,#6366f1)";

  return (
    <>
      <style>{STYLES}</style>
      <style>{`:root { --ps-grad: ${grad}; }`}</style>

      <section
        ref={ref}
        style={{
          padding: isMobile ? "72px 20px" : "110px 40px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* ── Header block ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? 44 : 64,
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "ps-fadeUp 0.5s ease-out 0s both" : "none",
          }}
        >
          <div className="ps-eyebrow" style={{ color: primary, marginBottom: 16, justifyContent: "center" }}>
            What we offer
          </div>

          <h2
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: isMobile ? "36px" : "54px",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              lineHeight: 1.08,
              color: c.text,
              margin: "0 0 28px",
            }}
          >
            Our Printing{" "}
            <em
              style={{
                fontStyle: "italic",
                background: grad,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Services
            </em>
          </h2>

          {/* intro */}
          <div
            className="ps-intro"
            style={{
              display: "inline-block",
              maxWidth: 580,
              textAlign: "left",
              padding: "16px 22px 16px 28px",
              background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.028)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.075)"}`,
              borderRadius: 12,
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: isMobile ? "13.5px" : "14.5px",
                lineHeight: 1.75,
                color: c.textMid ?? c.textDim,
              }}
            >
              Specialising in high-quality bulk book printing and professional
              lamination services. We use premium Fevicol-based adhesives,
              serving publishers, authors, and businesses across Delhi.
            </p>
          </div>
        </div>

        {/* ── Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
              ? "repeat(2, 1fr)"
              : "repeat(3, 1fr)",
            gap: isMobile ? 16 : 20,
          }}
        >
          {PRODUCTS.map((p, idx) => (
            <ProductCard
              key={p.title}
              {...p}
              index={idx + 1}
              isDark={isDark}
              c={c}
              isMobile={isMobile}
              isVisible={isVisible}
              delay={0.07 + idx * 0.07}
            />
          ))}
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────
   ProductCard
───────────────────────────────────────────── */
function ProductCard({
  title, desc, icon: Icon, features,
  accent, accentLight, accentBorder, accentGlow,
  index, isDark, c, isMobile, isVisible, delay,
}) {
  const [hov, setHov] = useState(false);

  /* card bg */
  const cardBg = hov
    ? isDark ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,1)"
    : isDark ? "rgba(255,255,255,0.03)"  : "rgba(255,255,255,0.82)";

  /* card border */
  const cardBorder = hov
    ? isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.10)"
    : isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.075)";

  /* shadow */
  const shadow = hov
    ? isDark
      ? `0 28px 64px rgba(0,0,0,0.55), 0 0 0 1px ${accentLight}`
      : `0 20px 56px rgba(0,0,0,0.09), 0 0 0 1px ${accentLight}`
    : isDark
    ? "0 1px 3px rgba(0,0,0,0.4)"
    : "0 1px 4px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)";

  return (
    <div
      className="ps-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        /* per-card CSS variables — consumed by .ps-card::after, pills, etc. */
        "--ps-accent":        accent,
        "--ps-accent-light":  accentLight,
        "--ps-accent-border": accentBorder,

        background:   cardBg,
        border:       `1px solid ${cardBorder}`,
        borderRadius: 18,
        padding:      isMobile ? "28px 22px" : "32px 28px",
        backdropFilter:       "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow:    shadow,

        opacity:   isVisible ? 1 : 0,
        animation: isVisible
          ? `ps-fadeUp 0.55s ease-out ${delay}s both`
          : "none",

        display:       "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Top row ── */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 22,
        }}
      >
        <div
          className="ps-icon"
          style={{
            width: 50, height: 50,
            borderRadius: 14,
            background:  hov ? accent : accentLight,
            display:     "flex",
            alignItems:  "center",
            justifyContent: "center",
            color:       hov ? "#fff" : accent,
            boxShadow:   hov ? `0 8px 22px ${accentGlow}` : "none",
            flexShrink:  0,
          }}
        >
          <Icon size={20} strokeWidth={1.75} />
        </div>

        <span
          className="ps-badge"
          style={{
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:      "11px",
            fontWeight:    700,
            letterSpacing: "0.10em",
            color:         isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.22)",
            opacity:       0.55,
            paddingTop:    3,
          }}
        >
          {String(index).padStart(2, "0")}
        </span>
      </div>

      {/* ── Title ── */}
      <h3
        style={{
          fontFamily:    "'Instrument Serif', Georgia, serif",
          fontSize:      "20px",
          fontWeight:    400,
          letterSpacing: "-0.01em",
          lineHeight:    1.22,
          color:         c.text,
          margin:        "0 0 10px",
        }}
      >
        {title}
      </h3>

      {/* ── Description ── */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize:   "13.5px",
          color:      c.textDim,
          lineHeight: 1.72,
          margin:     "0 0 22px",
          flex:       1,
        }}
      >
        {desc}
      </p>

      {/* ── Divider ── */}
      <div
        className="ps-divider"
        style={{
          height:     "1px",
          background: hov
            ? `linear-gradient(90deg, ${accent}55 0%, transparent 100%)`
            : isDark
            ? "rgba(255,255,255,0.08)"
            : "rgba(0,0,0,0.07)",
          marginBottom: 18,
        }}
      />

      {/* ── Features ── */}
      <div>
        <p
          style={{
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:      "9.5px",
            fontWeight:    700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color:         accent,
            margin:        "0 0 10px",
          }}
        >
          Includes
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {features.map((f, i) => (
            <span
              key={i}
              className="ps-pill"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize:   "11.5px",
                fontWeight: 500,
                padding:    "4px 11px",
                borderRadius: 20,
                background:   isDark ? "rgba(255,255,255,0.07)" : accentLight,
                color:        isDark ? "rgba(255,255,255,0.6)"  : `${accent}cc`,
                border:       `1px solid ${isDark ? "rgba(255,255,255,0.1)" : accentBorder}`,
              }}
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}