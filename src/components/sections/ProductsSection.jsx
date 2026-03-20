/**
 * ProductsSection.jsx — Dynamic product showcase with a "printer emergence" animation.
 * Features 3D magnetic tilt cards and a simulated industrial printer UI.
 */

import React, { useState, useRef, useEffect, useCallback } from "react";
import { BookOpen, Sparkles, Layers, Type, Heart, ArrowUpRight, Zap } from "lucide-react";
import { T } from "../../utils/designTokens";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

/**
 * ProductsSection — Main component managing the printer state and card emergence grid.
 */
export function ProductsSection({ isDark, c, isMobile, isTablet }) {
  const [ref, isVisible] = useScrollAnimation();
  const gridRef = useRef(null);
  const [slotCenter, setSlotCenter] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [extractingCount, setExtractingCount] = useState(0);

  // Measure slot center relative to the grid for precise card emergence alignment
  useEffect(() => {
    if (isVisible && gridRef.current) {
      // Small delay to allow initial layout to settle
      const timer = setTimeout(() => {
        const rect = gridRef.current.getBoundingClientRect();
        setSlotCenter(rect.width / 2);
        setShowPreview(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const primary = T.primary ?? "#0ea5e9";
  const grad = T.grad ?? "linear-gradient(135deg,#0ea5e9,#6366f1)";
  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  /**
   * handleExtractionStart — Triggers haptic/vibration state in the printer.
   */
  const handleExtractionStart = useCallback(() => {
    setExtractingCount(prev => prev + 1);
  }, []);

  /**
   * handleExtractionEnd — Cleans up vibration state.
   */
  const handleExtractionEnd = useCallback(() => {
    setExtractingCount(prev => Math.max(0, prev - 1));
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <style>{`
        :root {
          --ps-grad: ${grad};
          --pr-radius: 24px 24px 10px 10px;
          --sl-radius: 0 0 12px 12px;
          --em-mask: linear-gradient(to bottom, transparent 0px, black 15px);
          --em-pad-t: 25px;
          --em-pad-b: 0px;
        }
      `}</style>

      <section
        ref={ref}
        style={styles.section(isMobile)}
      >
        {/* Background grid texture for technical aesthetic */}
        <div className={`ps-grid-bg${isDark ? " dark" : ""}`} />

        {/* Ambient glow orb */}
        <div style={styles.ambientOrb(primary)} />

        {/* ── Simulated industrial printer UI ── */}
        <PrinterHeader
          isDark={isDark}
          isVisible={isVisible}
          primary={primary}
          c={c}
          isMobile={isMobile}
          grad={grad}
          isVibrating={isMobile && extractingCount > 0}
        />

        {/* ── Interactive Card Grid (Emergence Zone) ── */}
        <div className="ps-cards-emergence-zone" style={styles.emergenceZone(isMobile)}>
          <div
            ref={gridRef}
            style={styles.grid(cols, isMobile, slotCenter)}
          >
            {(isMobile ? [...PRODUCTS].reverse() : PRODUCTS).map((p, idx) => {
              // Custom sequence mapping for a more natural staggered appearance
              const orderMap = { 0: 0, 3: 1, 2: 2, 4: 3, 1: 4 };
              const sequencePos = isMobile ? idx : (orderMap[idx] ?? idx);
              const col = idx % cols;
              const centerIdx = (cols - 1) / 2;
              const dealRotation = (col - centerIdx) * 12;

              return (
                <AnimatedCard
                  key={p.title}
                  {...p}
                  index={idx + 1}
                  isDark={isDark}
                  c={c}
                  isMobile={isMobile}
                  isVisible={isVisible && slotCenter > 0}
                  delay={0.5 + sequencePos * 0.3}
                  slotCenter={slotCenter}
                  gridRef={gridRef}
                  dealRotation={dealRotation}
                  onExtractionStart={handleExtractionStart}
                  onExtractionEnd={handleExtractionEnd}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * PrinterHeader — Top UI component simulating the printer chassis and slot.
 */
function PrinterHeader({ isDark, isVisible, primary, c, isMobile, grad, isVibrating }) {
  return (
    <>
      <div
        className={`ps-printer-body ${isVibrating ? 'ps-printer-vibrating' : ''}`}
        style={styles.printerBody(isDark, isVisible)}
      >
        <div style={styles.printerContent(isVisible)}>
          {/* Eyebrow Label */}
          <div className="ps-eyebrow" style={styles.eyebrow(primary)}>
            <span style={styles.eyebrowLine} />
            <span style={styles.mx12}>What we offer</span>
            <span style={styles.eyebrowLine} />
          </div>

          {/* Section Heading */}
          <h2 style={styles.heading(isMobile, c.text)}>
            Our Printing{" "}
            <span style={styles.headingAccent(grad)}>
              Services
            </span>
          </h2>

          {/* Intro Description */}
          <div className="ps-intro" style={styles.intro(isDark)}>
            <p style={styles.introP(isMobile, c)}>
              Specialising in high-quality bulk book printing and professional
              lamination services. We use premium Fevicol-based adhesives,
              serving publishers, authors, and businesses across Delhi.
            </p>
          </div>
        </div>

        {/* Status Indicators */}
        <div style={styles.statusGroup}>
          <div style={styles.statusDot(isVisible)} />
          <div style={styles.statusDotIdle} />
        </div>
      </div>

      {/* Printer Output Slot */}
      <div style={styles.slotContainer}>
        <div className="ps-printer-slot" style={styles.slot(isMobile)}>
          <div className="ps-printer-scan-line" style={styles.scanLineDelay} />
        </div>
      </div>
    </>
  );
}

/**
 * AnimatedCard — 3D interactive product card using perspective transforms and haptics.
 */
function AnimatedCard({
  title, desc, icon: Icon, features,
  accent, accentLight, accentBorder, glow2, glowBg,
  index, isDark, c, isMobile, isVisible, delay, slotCenter, gridRef, dealRotation,
  onExtractionStart, onExtractionEnd
}) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const glowRef = useRef(null);
  const [hov, setHov] = useState(false);
  const [offsets, setOffsets] = useState({ x: 0, y: 0 });

  // Handle Haptic Feedback and Printer Vibration on Extraction
  useEffect(() => {
    if (isVisible && isMobile && onExtractionStart && onExtractionEnd) {
      const timer = setTimeout(() => {
        // Trigger haptic feedback if supported (Android/Chrome)
        if ("vibrate" in navigator) {
          navigator.vibrate([20, 30, 25]);
        }

        onExtractionStart();

        // Vibration duration matches the initial emergence phase
        const endTimer = setTimeout(() => {
          onExtractionEnd();
        }, 550);

        return () => clearTimeout(endTimer);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, isMobile, delay, onExtractionStart, onExtractionEnd]);

  // Calculate dynamic start offsets relative to the printer slot for emergence animation
  useEffect(() => {
    if (outerRef.current && gridRef.current && slotCenter > 0) {
      const cardRect = outerRef.current.getBoundingClientRect();
      const gridRect = gridRef.current.getBoundingClientRect();

      const cardMidX = (cardRect.left + cardRect.right) / 2 - gridRect.left;
      const startX = slotCenter - cardMidX;

      const gridTop = gridRect.top;
      const cardTop = cardRect.top;
      const startY = gridTop - cardTop - 130;

      setOffsets({ x: startX, y: startY });
    }
  }, [slotCenter, gridRef]);

  /**
   * handleMouseMove — Implements "magnetic" 3D tilt based on cursor position.
   */
  const handleMouseMove = useCallback((e) => {
    if (!innerRef.current || !outerRef.current) return;
    const rect = outerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;   // -1 to 1 range
    const dy = (y - cy) / cy;

    const tiltX = dy * -10;     // Tilt up/down
    const tiltY = dx * 10;      // Tilt left/right

    innerRef.current.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(8px)`;

    // Move dynamic radial glow following the cursor
    if (glowRef.current) {
      const pct_x = (x / rect.width) * 100;
      const pct_y = (y / rect.height) * 100;
      glowRef.current.style.setProperty("--mx", `${pct_x}%`);
      glowRef.current.style.setProperty("--my", `${pct_y}%`);
    }
  }, []);

  const handleMouseEnter = useCallback(() => setHov(true), []);
  const handleMouseLeave = useCallback(() => {
    setHov(false);
    if (innerRef.current)
      innerRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  }, []);

  const cardBg = isDark ? "rgba(15,23,42,0.95)" : "rgba(255,255,255,0.98)";
  const cardShadow = hov
    ? (isDark
      ? `0 60px 100px -20px rgba(0,0,0,0.8), 0 30px 60px -10px rgba(0,0,0,0.6), 0 0 0 1px ${accentLight}, 0 0 60px ${accent}25`
      : `0 50px 90px -15px rgba(0,0,0,0.2), 0 25px 50px -8px rgba(0,0,0,0.15), 0 0 0 1px ${accentLight}, 0 0 45px ${accent}18`)
    : (isDark
      ? "0 40px 80px -20px rgba(0,0,0,0.6), 0 20px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)"
      : "0 25px 50px -12px rgba(0,0,0,0.1), 0 10px 20px -8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)");

  return (
    <div
      ref={outerRef}
      className="ps-card-outer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={styles.cardOuter(accent, glow2, accentLight, accentBorder, glowBg, offsets, dealRotation, isMobile, isVisible, delay)}
    >
      <div
        ref={innerRef}
        className="ps-card-inner"
        style={styles.cardInner(cardBg, cardShadow, hov)}
      >
        {/* Cursor-tracking glow layer */}
        <div
          ref={glowRef}
          className="ps-card-glow"
          style={styles.initialGlow}
        />

        {/* Brand accent bottom bar */}
        <div className="ps-card-bar" />

        <div className="ps-card-content" style={styles.cardContent}>
          {/* ── Visual Identity Header ── */}
          <div style={styles.cardHeader}>
            <div
              className="ps-icon-wrap"
              style={styles.iconWrap(hov, accent, accentLight)}
            >
              <Icon size={22} strokeWidth={1.7} />
              <div className="ps-icon-orbit" />
            </div>

            <ArrowUpRight className="ps-arrow" size={17} strokeWidth={2} style={styles.arrow(c.textDim)} />
          </div>

          {/* Product Title */}
          <h3 style={styles.cardTitle(c.text)}>
            {title}
          </h3>

          {/* Description */}
          <p className="ps-desc" style={styles.cardDesc(c.textDim)}>
            {desc}
          </p>

          {/* Decorative Divider */}
          <div className="ps-divider" style={styles.cardDivider(hov, isDark, accent, glow2)} />

          {/* ── Feature Tags ── */}
          <div>
            <div style={styles.includesLabel}>
              <Zap size={9} style={{ color: accent }} strokeWidth={2.5} />
              <span style={styles.includesText(accent)}>
                Includes
              </span>
            </div>

            <div style={styles.tagsContainer}>
              {features.map((f, i) => (
                <span
                  key={i}
                  className="ps-tag"
                  style={styles.tag(isDark, accentLight, accentBorder)}
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

/* ─── Data ─── */
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

/* ─── Consolidated Styles ────────────────────────────────── */

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

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
  @keyframes ps-printer-warmup {
    0% { filter: brightness(1) saturate(1); }
    50% { filter: brightness(1.2) saturate(1.2) drop-shadow(0 0 20px var(--c-accent)); }
    100% { filter: brightness(1) saturate(1); }
  }
  @keyframes ps-printer-vibrate {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(0.5px, 0.5px); }
    50% { transform: translate(-0.5px, 0.5px); }
    75% { transform: translate(0.5px, -0.5px); }
  }

  .ps-printer-vibrating { animation: ps-printer-vibrate 0.1s linear infinite; }

  @keyframes ps-card-deal {
    0% { 
      transform: translateY(var(--dynamic-start-y, -130px)) translateX(var(--dynamic-start-x, 0)) scale(0.75) rotateZ(var(--deal-rotation, 15deg)) rotateY(var(--deal-rotate-y, 35deg));
      opacity: 0; box-shadow: 0 60px 100px -20px rgba(0,0,0,0.4);
    }
    30% { opacity: 1; box-shadow: 0 40px 70px -15px rgba(0,0,0,0.3); }
    100% { transform: translateY(0) translateX(0) scale(1) rotateZ(0deg) rotateY(0deg); opacity: 1; box-shadow: none; }
  }

  @keyframes ps-print-line {
    0% { transform: scaleX(0); left: 0; }
    50% { transform: scaleX(1); left: 0; }
    100% { transform: scaleX(0); left: 100%; }
  }

  .ps-printer-body {
    position: relative;
    background: var(--printer-bg, #0f172a);
    border: 1px solid var(--printer-border, rgba(255,255,255,0.18));
    border-radius: var(--pr-radius, 20px 20px 10px 10px);
    padding: 60px 40px 40px;
    box-shadow: 0 40px 80px -20px rgba(0,0,0,0.4), 0 20px 40px -10px rgba(0,0,0,0.2), 0 0 0 1px var(--printer-outer-border, rgba(255,255,255,0.08));
    z-index: 10;
    overflow: visible;
  }
  .ps-printer-body::after {
    content: ''; position: absolute; bottom: 0; left: 10%; right: 10%;
    height: 4px; background: #000; box-shadow: inset 0 2px 4px rgba(255,255,255,0.05); border-radius: 4px 4px 0 0;
  }
  .ps-printer-slot {
    position: relative; height: 18px; background: #000; border-radius: var(--sl-radius, 0 0 12px 12px);
    z-index: 9; box-shadow: inset 0 4px 8px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.4); overflow: hidden;
  }
  .ps-printer-scan-line {
    position: absolute; top: 50%; left: 0; width: 100%; height: 2px;
    background: var(--ps-grad); box-shadow: 0 0 10px var(--c-accent); transform-origin: left;
    animation: ps-print-line 2s infinite ease-in-out;
  }
  .ps-cards-emergence-zone {
    position: relative; z-index: 1;
    mask-image: var(--em-mask, linear-gradient(to bottom, transparent 0px, black 15px));
    -webkit-mask-image: var(--em-mask, linear-gradient(to bottom, transparent 0px, black 15px));
    perspective: 2000px;
  }

  .ps-eyebrow {
    display:inline-flex; align-items:center; gap:12px;
    font-family:'DM Sans',sans-serif; font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase;
  }
  .ps-eyebrow span.line { display:block; height:1px; width:32px; background:currentColor; opacity:0.5; }

  .ps-card-outer {
    position:relative; border-radius:20px; padding:1.5px; transition:padding 0.3s ease; cursor:pointer; height:100%; box-sizing:border-box;
  }
  .ps-card-outer::before {
    content:''; position:absolute; inset:0; border-radius:20px;
    background:linear-gradient(270deg, var(--c-accent), var(--c-glow2), var(--c-accent), var(--c-glow2));
    background-size:300% 300%; opacity:0; transition:opacity 0.4s ease; z-index:0;
  }
  .ps-card-outer:hover::before { opacity:1; animation:ps-border-flow 2.5s ease infinite; }

  .ps-card-inner {
    position:relative; border-radius:19px; overflow:hidden; z-index:1;
    border: 1px solid rgba(255,255,255,0.18);
    transition: box-shadow 0.45s cubic-bezier(.22,1,.36,1), transform 0.45s cubic-bezier(.22,1,.36,1);
    will-change:transform; transform-style:preserve-3d; box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
  }
  .ps-card-inner::before {
    content:''; position:absolute; left:0; right:0; top:-10%; height:40%;
    background:linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%);
    pointer-events:none; z-index:5; opacity:0; transition:opacity 0.3s ease;
  }
  .ps-card-outer:hover .ps-card-inner::before { opacity:1; animation:ps-scanline 2s linear infinite; }
  .ps-card-inner::after {
    content:''; position:absolute; inset:0;
    background:linear-gradient(130deg, transparent 0%, rgba(255,255,255,0.07) 45%, transparent 90%);
    transform:translateX(-110%) skewX(-10deg); pointer-events:none; z-index:4; transition:none;
  }
  .ps-card-outer:hover .ps-card-inner::after { animation:ps-shimmer 0.7s cubic-bezier(.22,1,.36,1) forwards; }

  .ps-card-content {
    position:relative; display:flex; flex-direction:column; padding:28px 26px 24px; z-index:2; transition:transform 0.45s cubic-bezier(.22,1,.36,1);
  }
  .ps-card-glow {
    position:absolute; inset:0;
    background:radial-gradient(ellipse 70% 50% at var(--mx,50%) var(--my,0%), var(--c-glow-bg) 0%, transparent 70%);
    opacity:0; transition:opacity 0.4s ease; pointer-events:none; z-index:1;
  }
  .ps-card-outer:hover .ps-card-glow { opacity:1; }
  .ps-card-bar {
    position:absolute; bottom:0; left:0; right:0; height:3px;
    background:linear-gradient(90deg, var(--c-accent), var(--c-glow2));
    transform:scaleX(0); transform-origin:left; transition:transform 0.5s cubic-bezier(.22,1,.36,1); z-index:6;
  }
  .ps-card-outer:hover .ps-card-bar { transform:scaleX(1); }
  .ps-icon-wrap { transition: background 0.4s ease, box-shadow 0.4s ease, transform 0.5s cubic-bezier(.34,1.56,.64,1); position:relative; overflow:visible; }
  .ps-card-outer:hover .ps-icon-wrap { transform:scale(1.12) rotate(-6deg); }
  .ps-icon-orbit {
    position:absolute; width:7px; height:7px; border-radius:50%; background:var(--c-accent); top:50%; left:50%; margin:-3.5px 0 0 -3.5px; opacity:0; transition:opacity 0.3s ease;
  }
  .ps-card-outer:hover .ps-icon-orbit { opacity:1; animation:ps-orbit 1.2s linear infinite; }
  .ps-tag {
    font-family:'DM Sans',sans-serif; font-size:11px; font-weight:500; padding:3px 11px; border-radius:20px;
    transition: background 0.3s ease, color 0.3s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease;
  }
  .ps-card-outer:hover .ps-tag { background:var(--c-accent-light) !important; color:var(--c-accent) !important; border-color:var(--c-accent-border) !important; }
  .ps-tag:nth-child(1) { animation:ps-tag-pop 0.35s 0.05s both cubic-bezier(.34,1.56,.64,1); }
  .ps-card-outer:hover .ps-tag:nth-child(1) { animation:ps-tag-pop 0.35s 0.05s both cubic-bezier(.34,1.56,.64,1); }
  .ps-card-outer:hover .ps-tag:nth-child(2) { animation:ps-tag-pop 0.35s 0.10s both cubic-bezier(.34,1.56,.64,1); }
  .ps-card-outer:hover .ps-tag:nth-child(3) { animation:ps-tag-pop 0.35s 0.15s both cubic-bezier(.34,1.56,.64,1); }
  .ps-card-outer:hover .ps-tag:nth-child(4) { animation:ps-tag-pop 0.35s 0.20s both cubic-bezier(.34,1.56,.64,1); }
  .ps-arrow { transition:transform 0.4s cubic-bezier(.34,1.56,.64,1), opacity 0.3s ease; opacity:0.4; }
  .ps-card-outer:hover .ps-arrow { transform:translate(3px,-3px); opacity:1; color:var(--c-accent) !important; }
  .ps-intro { position:relative; }
  .ps-intro::before { content:''; position:absolute; left:0; top:14px; bottom:14px; width:3px; border-radius:2px; background:var(--ps-grad); }
  .ps-grid-bg {
    position:absolute; inset:0; pointer-events:none;
    background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
    background-size:48px 48px; mask-image:radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
  }
  .ps-grid-bg.dark {
    background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  }

  @media (max-width: 640px) {
    .ps-printer-body { padding: 40px 20px 30px; }
  }
`;

const styles = {
  section: (isMobile) => ({
    position: "relative",
    padding: isMobile ? "80px 18px 100px" : "120px 48px 140px",
    maxWidth: 1280,
    margin: "0 auto",
    overflow: "hidden",
  }),
  ambientOrb: (primary) => ({
    position: "absolute", top: "0%", left: "50%",
    transform: "translateX(-50%)",
    width: 700, height: 340,
    background: `radial-gradient(ellipse, ${primary}14 0%, transparent 70%)`,
    pointerEvents: "none", zIndex: 0,
  }),
  emergenceZone: (isMobile) => ({
    marginTop: -2,
    marginBottom: 0,
    paddingBottom: isMobile ? 20 : 60,
  }),
  grid: (cols, isMobile, slotCenter) => ({
    display: "grid",
    gridTemplateColumns: `repeat(${cols},1fr)`,
    gap: isMobile ? 14 : 18,
    gridAutoRows: isMobile ? "auto" : "1fr",
    visibility: slotCenter > 0 ? "visible" : "hidden",
  }),
  printerBody: (isDark, isVisible) => ({
    maxWidth: 800,
    margin: "0 auto",
    "--printer-bg": isDark ? "#0f172a" : "#ffffff",
    "--printer-border": isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.08)",
    "--printer-outer-border": isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)",
    animation: isVisible ? "ps-printer-warmup 2s ease-in-out" : "none",
  }),
  printerContent: (isVisible) => ({
    position: "relative", zIndex: 2,
    textAlign: "center",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease",
  }),
  eyebrow: (primary) => ({
    color: primary,
    marginBottom: 20,
    justifyContent: "center",
  }),
  eyebrowLine: {
    display: "block", height: 1, width: 32, background: "currentColor", opacity: 0.5,
  },
  mx12: { margin: "0 12px" },
  heading: (isMobile, textColor) => ({
    fontFamily: "'Instrument Serif',Georgia,serif",
    fontSize: isMobile ? "32px" : "56px",
    fontWeight: 400,
    letterSpacing: "-0.03em",
    lineHeight: 1.05,
    color: textColor,
    margin: "0 0 32px",
  }),
  headingAccent: (grad) => ({
    fontStyle: "italic",
    display: "inline-block",
    background: grad,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  }),
  intro: (isDark) => ({
    display: "inline-block", maxWidth: 580, textAlign: "left",
    padding: "16px 22px 16px 28px",
    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.028)",
    border: `1px solid ${isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.075)"}`,
    borderRadius: 12,
  }),
  introP: (isMobile, c) => ({
    margin: 0,
    fontFamily: "'DM Sans',sans-serif",
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: 1.75,
    color: c.textMid ?? c.textDim,
  }),
  statusGroup: { position: "absolute", top: 20, right: 20, display: "flex", gap: 6 },
  statusDot: (isVisible) => ({
    width: 6, height: 6, borderRadius: "50%", background: isVisible ? "#22c55e" : "#ef4444",
    boxShadow: isVisible ? "0 0 8px #22c55e" : "none"
  }),
  statusDotIdle: { width: 6, height: 6, borderRadius: "50%", background: "#64748b" },
  slotContainer: { maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 9 },
  slot: (isMobile) => ({
    marginTop: isMobile ? 0 : -10,
    marginBottom: isMobile ? -10 : 0,
  }),
  scanLineDelay: { animationDelay: "1s" },
  cardOuter: (accent, glow2, accentLight, accentBorder, glowBg, offsets, dealRotation, isMobile, isVisible, delay) => ({
    "--c-accent": accent,
    "--c-glow2": glow2,
    "--c-accent-light": accentLight,
    "--c-accent-border": accentBorder,
    "--c-glow-bg": glowBg,
    "--dynamic-start-x": `${offsets.x}px`,
    "--dynamic-start-y": `${offsets.y}px`,
    "--deal-rotation": `${dealRotation}deg`,
    "--deal-rotate-y": `${isMobile ? 0 : 35}deg`,
    height: "100%",
    opacity: isVisible ? 1 : 0,
    animation: isVisible
      ? `ps-card-deal 1.1s cubic-bezier(.17, .67, .41, .99) ${delay}s both`
      : "none",
  }),
  cardInner: (cardBg, cardShadow, hov) => ({
    height: "100%",
    background: cardBg,
    boxShadow: cardShadow,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    transition: hov ? "box-shadow 0.4s ease" : "box-shadow 0.4s ease, transform 0.5s cubic-bezier(.22,1,.36,1)",
  }),
  initialGlow: { "--mx": "50%", "--my": "0%" },
  cardContent: { height: "100%", boxSizing: "border-box" },
  cardHeader: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 },
  iconWrap: (hov, accent, accentLight) => ({
    width: 52, height: 52, borderRadius: 15,
    background: hov ? accent : accentLight,
    display: "flex", alignItems: "center", justifyContent: "center",
    color: hov ? "#fff" : accent,
    boxShadow: hov ? `0 10px 28px ${accent}55` : "none",
    flexShrink: 0,
  }),
  arrow: (textColor) => ({ color: textColor, flexShrink: 0, marginTop: 4 }),
  cardTitle: (textColor) => ({
    fontFamily: "'Instrument Serif',Georgia,serif",
    fontSize: "21px", fontWeight: 500,
    letterSpacing: "-0.01em", lineHeight: 1.15,
    color: textColor, margin: "0 0 10px",
  }),
  cardDesc: (textColor) => ({
    fontSize: "13px",
    color: textColor,
    lineHeight: 1.72,
    margin: "0 0 20px",
    flex: 1,
  }),
  cardDivider: (hov, isDark, accent, glow2) => ({
    background: hov
      ? `linear-gradient(90deg,${accent}55,${glow2}33,transparent)`
      : isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)",
    marginBottom: 16,
  }),
  includesLabel: {
    display: "flex", alignItems: "center", gap: 6, marginBottom: 10,
  },
  includesText: (accent) => ({
    fontFamily: "'DM Sans',sans-serif",
    fontSize: "9px", fontWeight: 700, letterSpacing: "0.16em",
    textTransform: "uppercase", color: accent,
  }),
  tagsContainer: { display: "flex", flexWrap: "wrap", gap: 5 },
  tag: (isDark, accentLight, accentBorder) => ({
    background: isDark ? "rgba(255,255,255,0.07)" : accentLight,
    color: isDark ? "rgba(255,255,255,0.58)" : `${accentLight}cc`,
    border: `1px solid ${isDark ? "rgba(255,255,255,0.09)" : accentBorder}`,
  }),
};