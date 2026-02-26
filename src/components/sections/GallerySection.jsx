// GallerySection.jsx — Premium machine showcase for BK Offset Printing

import React, { useState } from "react";
import { Youtube, ArrowUpRight, Zap } from "lucide-react";
import { T } from "../../utils/designTokens";
import { SectionHeader } from "../common/SectionHeader";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { GALLERY_IMAGES } from "../../utils/constants";

/* ─────────────────────────────────────────────
   Machine data — maps index → details
───────────────────────────────────────────── */
const MACHINES = [
  {
    name: "Heidelberg Speedmaster Multicolor",
    category: "Offset Printing",
    tag: "Flagship",
    desc: "The Heidelberg Speedmaster — the world's most trusted multicolour press. Engineered for peak performance with cutting-edge Intellistart technology, delivering unmatched print quality at production speeds that set the industry standard.",
    spec: "Up to 4-colour",
  },
  {
    name: "Heidelberg Printing Machine",
    category: "Offset Printing",
    tag: "Industry Leader",
    desc: "State-of-the-art Heidelberg — a benchmark in precision engineering. From single-colour to complex multi-colour projects, automated controls, fast plate changes, and flawless registration deliver superior output trusted by professionals worldwide.",
    spec: "Multi-colour output",
  },
  {
    name: "Akiyama 4-Colour Press",
    category: "Offset Printing",
    tag: "Alcohol-Damped",
    desc: "Akiyama alcohol-damped 4-colour press — size 19×26 inches. Alcohol damping system provides superior ink-water balance for exceptional dot gain control and vivid, consistent colour across the entire sheet.",
    spec: "Size: 19×26 in",
  },
  {
    name: "Heidelberg Autoplate Machine",
    category: "Plate Making",
    tag: "Automated",
    desc: "Fully automated plate-loading system that eliminates manual handling errors. Reduces makeready time significantly, ensuring consistent plate registration and faster job turnaround for demanding print environments.",
    spec: "Auto plate loading",
  },
  {
    name: "Heidelberg Speedmaster Multicolor",
    category: "Offset Printing",
    tag: "Flagship",
    desc: "The Heidelberg Speedmaster — the world's most trusted multicolour press. Engineered for peak performance with cutting-edge Intellistart technology, delivering unmatched print quality at production speeds that set the industry standard.",
    spec: "Up to 4-colour",
  },
  {
    name: "Heidelberg SORDZ 2-Colour",
    category: "Offset Printing",
    tag: "Ref. #1447",
    desc: "Heidelberg SORDZ 2-colour offset printing machine. Sheet size 25×36 inches — perfectly balanced for medium-format commercial work. Renowned for its robust build and consistent colour reproduction across long runs.",
    spec: "Size: 25×36 in",
  },
  {
    name: "Thermal Lamination Machine",
    category: "Lamination",
    tag: "High-Speed",
    desc: "Industrial-grade thermal lamination delivering flawless gloss and matte finishes using Fevicol-based adhesives. Handles high volumes with precision heat control for bubble-free, scratch-resistant results every time.",
    spec: "±0.01mm accuracy",
  },
  {
    name: "Automatic Paper Cutting Machine",
    category: "Finishing",
    tag: "Ultra Precise",
    desc: "Automatic paper cutter delivering precise and flawless cuts at incredible speed. Ideal for high-volume printing and paper processing, this machine ensures efficiency and accuracy in every cut — streamlining workflow and maximising productivity.",
    spec: "High-volume ready",
  },
];

/* ─────────────────────────────────────────────
   Styles
───────────────────────────────────────────── */
const GALLERY_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  @keyframes gl-fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes gl-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(255,0,0,0.4); }
    50%       { box-shadow: 0 0 0 8px rgba(255,0,0,0); }
  }

  /* ── Card ── */
  .gl-card {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    cursor: pointer;
    transition:
      transform    0.4s cubic-bezier(.22,1,.36,1),
      box-shadow   0.4s cubic-bezier(.22,1,.36,1),
      border-color 0.3s ease;
  }

  /* Image zoom */
  .gl-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.55s cubic-bezier(.22,1,.36,1);
  }
  .gl-card:hover .gl-card-img {
    transform: scale(1.08);
  }

  /* Base gradient — always visible at bottom */
  .gl-base-grad {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(2,6,23,0.82) 0%,
      rgba(2,6,23,0.30) 45%,
      transparent 75%
    );
    pointer-events: none;
  }

  /* Hover overlay — slides up */
  .gl-hover-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(2,6,23,0.96) 0%,
      rgba(2,6,23,0.75) 55%,
      rgba(2,6,23,0.30) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  .gl-card:hover .gl-hover-overlay { opacity: 1; }

  /* Category tag (top-left) */
  .gl-tag {
    position: absolute;
    top: 14px; left: 14px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 999px;
    background: rgba(14,165,233,0.18);
    color: #7dd3fc;
    border: 1px solid rgba(14,165,233,0.30);
    backdrop-filter: blur(8px);
    z-index: 3;
    transition: background 0.3s ease, border-color 0.3s ease;
  }
  .gl-card:hover .gl-tag {
    background: rgba(14,165,233,0.30);
    border-color: rgba(14,165,233,0.55);
  }

  /* Index number (top-right) */
  .gl-index {
    position: absolute;
    top: 14px; right: 14px;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: rgba(255,255,255,0.25);
    z-index: 3;
    transition: color 0.3s ease;
  }
  .gl-card:hover .gl-index { color: rgba(255,255,255,0.55); }

  /* Bottom info block */
  .gl-info {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 20px 18px 18px;
    z-index: 3;
    transform: translateY(0);
  }

  .gl-machine-name {
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: #f1f5f9;
    line-height: 1.2;
    margin-bottom: 4px;
  }

  .gl-spec-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: #38bdf8;
    margin-bottom: 0;
  }

  /* Description — hidden until hover */
  .gl-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 12.5px;
    line-height: 1.65;
    color: rgba(255,255,255,0.65);
    margin-top: 10px;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition:
      max-height 0.45s cubic-bezier(.22,1,.36,1),
      opacity    0.35s ease 0.05s,
      margin-top 0.35s ease;
  }
  .gl-card:hover .gl-desc {
    max-height: 120px;
    opacity: 1;
    margin-top: 10px;
  }

  /* Arrow icon */
  .gl-arrow {
    position: absolute;
    bottom: 18px; right: 18px;
    width: 32px; height: 32px;
    border-radius: 50%;
    background: rgba(14,165,233,0.20);
    border: 1px solid rgba(14,165,233,0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #38bdf8;
    opacity: 0;
    transform: translateY(6px);
    transition:
      opacity   0.3s ease 0.1s,
      transform 0.3s cubic-bezier(.34,1.56,.64,1) 0.1s,
      background 0.2s ease;
    z-index: 4;
  }
  .gl-card:hover .gl-arrow {
    opacity: 1;
    transform: translateY(0);
  }
  .gl-arrow:hover {
    background: rgba(14,165,233,0.40) !important;
  }

  /* ── Accent line ── */
  .gl-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #0ea5e9, #6366f1);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(.22,1,.36,1);
    z-index: 5;
  }
  .gl-card:hover::after { transform: scaleX(1); }

  /* ── Featured card (spans 2 cols) ── */
  .gl-featured {
    grid-column: span 2;
  }
  .gl-featured .gl-machine-name { font-size: 22px; }

  /* ── YT Quote ── */
  .gl-yt-quote {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-top: 40px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.01em;
    flex-wrap: wrap;
    text-align: center;
    line-height: 1.6;
  }

  .gl-yt-rule {
    width: 36px; height: 1px;
    background: rgba(255,255,255,0.12);
    flex-shrink: 0;
  }

  .gl-yt-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #FF0000;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 1px solid rgba(255,0,0,0.28);
    padding-bottom: 1px;
    transition:
      color        0.2s ease,
      border-color 0.2s ease,
      gap          0.2s ease;
  }
  .gl-yt-link:hover {
    color: #ff4d4d;
    border-color: rgba(255,77,77,0.65);
    gap: 6px;
  }

  /* Section eyebrow */
  .gl-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .gl-eyebrow::before, .gl-eyebrow::after {
    content: '';
    display: block;
    width: 24px; height: 1px;
    background: currentColor;
    opacity: 0.55;
  }

  @media (max-width: 640px) {
    .gl-featured { grid-column: span 1; }
  }
`;

/* ─────────────────────────────────────────────
   GallerySection
───────────────────────────────────────────── */
export function GallerySection({ text, isDark, c, isMobile, isTablet }) {
  const [ref, isVisible] = useScrollAnimation();

  const images = GALLERY_IMAGES ?? [];
  // Pad with placeholder if fewer images than machines
  const getMachineSrc = (i) => images[i] ?? null;

  return (
    <>
      <style>{GALLERY_STYLES}</style>

      <section
        ref={ref}
        style={{
          padding: isMobile ? "72px 20px" : "110px 40px",
          background: isDark
            ? "linear-gradient(rgba(2,6,23,0.94), rgba(4,8,28,0.96)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')"
            : "linear-gradient(rgba(240,249,255,0.90), rgba(236,246,255,0.92)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          borderTop:    `1px solid ${c.border}`,
          borderBottom: `1px solid ${c.border}`,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* ── Header ── */}
          <div
            style={{
              textAlign: "center",
              marginBottom: isMobile ? 40 : 56,
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? "gl-fadeUp 0.5s ease-out 0s both" : "none",
            }}
          >
            <div
              className="gl-eyebrow"
              style={{ color: "#0ea5e9", justifyContent: "center", marginBottom: 14 }}
            >
              Our Machinery
            </div>

            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: isMobile ? "34px" : "52px",
                fontWeight: 400,
                letterSpacing: "-0.025em",
                lineHeight: 1.08,
                color: isDark ? "#f1f5f9" : "#0f172a",
                margin: "0 0 16px",
              }}
            >
              Built for{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg,#0ea5e9,#6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Precision
              </em>
            </h2>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: isMobile ? "14px" : "15px",
                color: isDark ? "rgba(255,255,255,0.42)" : "#64748b",
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              World-class Heidelberg and Akiyama equipment — engineered for
              flawless output, maximum throughput, and zero compromise on quality.
            </p>
          </div>

          {/* ── Masonry-style grid ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                ? "repeat(2, 1fr)"
                : "repeat(3, 1fr)",
              gridAutoRows: isMobile ? "220px" : "260px",
              gap: isMobile ? 14 : 18,
            }}
          >
            {MACHINES.map((machine, idx) => {
              // First card spans 2 cols on desktop for editorial asymmetry
              const isFeatured = idx === 0 && !isMobile && !isTablet;
              return (
                <GalleryCard
                  key={idx}
                  machine={machine}
                  src={getMachineSrc(idx)}
                  index={idx + 1}
                  isDark={isDark}
                  isVisible={isVisible}
                  delay={0.06 + idx * 0.06}
                  isFeatured={isFeatured}
                />
              );
            })}
          </div>

          {/* ── YouTube quote ── */}
          <div
            className="gl-yt-quote"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? "gl-fadeUp 0.5s ease-out 0.5s both" : "none",
            }}
          >
            <span className="gl-yt-rule" />
            <span>
              Want to see these machines in action? Watch live demos on our{" "}
              <a
                href="https://youtube.com/@b.k.offset?si=Y3rb_e2Y9oTBsgw7"
                target="_blank"
                rel="noopener noreferrer"
                className="gl-yt-link"
              >
                <Youtube size={13} strokeWidth={2} />
                YouTube channel
                <ArrowUpRight size={11} strokeWidth={2.5} />
              </a>
            </span>
            <span className="gl-yt-rule" />
          </div>

        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────
   GalleryCard
───────────────────────────────────────────── */
function GalleryCard({ machine, src, index, isDark, isVisible, delay, isFeatured }) {
  const [hov, setHov] = useState(false);

  /* Fallback gradient when no image available */
  const FALLBACK_GRADIENTS = [
    "linear-gradient(135deg,#0c1a3a,#0ea5e9)",
    "linear-gradient(135deg,#1a0c3a,#6366f1)",
    "linear-gradient(135deg,#0c2a1a,#10b981)",
    "linear-gradient(135deg,#2a1a0c,#f59e0b)",
    "linear-gradient(135deg,#2a0c1a,#ec4899)",
    "linear-gradient(135deg,#0c1a2a,#0ea5e9)",
    "linear-gradient(135deg,#1a2a0c,#84cc16)",
    "linear-gradient(135deg,#2a200c,#f97316)",
  ];

  return (
    <div
      className={`gl-card${isFeatured ? " gl-featured" : ""}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: `1px solid ${hov ? "rgba(14,165,233,0.40)" : isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
        boxShadow: hov
          ? "0 24px 56px rgba(0,0,0,0.45), 0 0 0 1px rgba(14,165,233,0.15)"
          : "0 2px 8px rgba(0,0,0,0.20)",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        opacity: isVisible ? 1 : 0,
        animation: isVisible
          ? `gl-fadeUp 0.55s ease-out ${delay}s both`
          : "none",
        background: src ? undefined : FALLBACK_GRADIENTS[index - 1] ?? "#0c1a3a",
      }}
    >
      {/* Image */}
      {src && (
        <img
          className="gl-card-img"
          src={src}
          alt={machine.name}
          loading="lazy"
        />
      )}

      {/* Fallback icon when no image */}
      {!src && (
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.15,
        }}>
          <Zap size={64} color="#fff" strokeWidth={1} />
        </div>
      )}

      {/* Always-visible bottom gradient */}
      <div className="gl-base-grad" />

      {/* Hover darkening overlay */}
      <div className="gl-hover-overlay" />

      {/* Category tag */}
      <div className="gl-tag">{machine.category}</div>

      {/* Index */}
      <div className="gl-index">
        {String(index).padStart(2, "0")}
      </div>

      {/* Info block */}
      <div className="gl-info">
        {/* Spec badge */}
        <div className="gl-spec-badge">
          <Zap size={10} strokeWidth={2.5} />
          {machine.spec}
        </div>

        {/* Machine name */}
        <div className="gl-machine-name">{machine.name}</div>

        {/* Tag pill */}
        <div style={{
          display: "inline-block",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          padding: "2px 8px",
          borderRadius: "999px",
          background: "rgba(99,102,241,0.22)",
          color: "#a5b4fc",
          border: "1px solid rgba(99,102,241,0.30)",
          marginTop: 5,
        }}>
          {machine.tag}
        </div>

        {/* Description — reveals on hover */}
        <div className="gl-desc">{machine.desc}</div>
      </div>

      {/* Arrow icon */}
      <div className="gl-arrow">
        <ArrowUpRight size={14} strokeWidth={2.5} />
      </div>
    </div>
  );
}