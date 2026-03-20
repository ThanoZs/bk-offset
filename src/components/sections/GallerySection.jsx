/**
 * GallerySection.jsx — CINEMATIC EXPLOSION GALLERY for BK Offset Printing.
 * Features a scroll-triggered "energy core charge" and "shockwave" effect that blasts 
 * product cards across the screen, which then snap to a grid or can be dragged.
 */

import React, { useState, useRef, useCallback, useEffect } from "react";
import { Youtube, ArrowUpRight, Zap, X, Move } from "lucide-react";
import { GALLERY_IMAGES } from "../../utils/constants";

/**
 * GallerySection — Main interaction controller for the explosion and gallery grid.
 */
export function GallerySection({ isDark, c, isMobile, isTablet }) {
  const sectionRef = useRef(null);
  const [phase,     setPhase]     = useState("dormant");
  const [shockFired,setShock]     = useState(false);
  const [cardsBlast,setBlast]     = useState(false);
  
  // State for draggable cards and their final grid positions
  const [positions, setPositions] = useState(INITIAL_BLAST_POSITIONS.map(p => ({ ...p })));
  const [dragIdx, setDragIdx] = useState(null);
  const [snappedCards, setSnappedCards] = useState({}); 
  const dragStartRef = useRef({ x: 0, y: 0, oX: 0, oY: 0 });
  const dragScreenRef = useRef({ x: 0, y: 0 }); // To detect clicks vs drags

  // Detail view state
  const [selectedMachine, setSelectedMachine] = useState(null);

  const timers = useRef([]);
  const images = GALLERY_IMAGES ?? [];

  /**
   * Intersection Observer — Triggers the "charging" phase when the section is visible.
   */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && phase === "dormant") setPhase("charging"); },
      { threshold: isMobile ? 0.05 : 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [phase, isMobile]);

  /**
   * Phase Sequencer — Orchestrates the timing of the explosion and card blast.
   */
  useEffect(() => {
    if (phase === "charging") {
      const t = setTimeout(() => setPhase("exploding"), 900);
      timers.current.push(t);
    }
    if (phase === "exploding") {
      setShock(true);
      const t1 = setTimeout(() => setBlast(true),        200);
      const t2 = setTimeout(() => setPhase("revealed"),  1400);
      timers.current.push(t1, t2);
    }
    return () => timers.current.forEach(clearTimeout);
  }, [phase]);

  /**
   * Auto-snap Logic — Automatically aligns cards to their final grid positions after the explosion.
   */
  useEffect(() => {
    if (phase === "revealed") {
      const t = setTimeout(() => {
        const targets = getFramePositions(isMobile);
        setPositions(prev => prev.map((p, i) => ({
          ...p,
          x: targets[i].x,
          y: targets[i].y,
        })));
        
        const snaps = {};
        MACHINES.forEach((_, i) => snaps[i] = true);
        setSnappedCards(snaps);
      }, 300); // 0.3s pause after explosion settles
      
      timers.current.push(t);
      return () => clearTimeout(t);
    }
  }, [phase, isMobile]);

  /**
   * handleReset — Restarts the explosion sequence.
   */
  const handleReset = useCallback(() => {
    timers.current.forEach(clearTimeout);
    setPositions(INITIAL_BLAST_POSITIONS.map(p => ({ ...p }))); 
    setSnappedCards({}); 
    setPhase("dormant"); setShock(false); setBlast(false);
    setTimeout(() => setPhase("charging"), 80);
  }, []);

  /**
   * handlePointerDown — Initiates the drag interaction for cards.
   */
  const handlePointerDown = (e, idx) => {
    if (phase !== "revealed") return;
    if (snappedCards[idx]) return; // Draggable only before snapping
    
    e.preventDefault();
    e.stopPropagation();
    
    // Scale factors match the CSS coordinate system
    const scaleX = isMobile ? 1.1 : 1.6;
    const scaleY = isMobile ? 1.0 : 1.3;

    // Remove from snapped state on pick up
    setSnappedCards(prev => {
      const next = { ...prev };
      delete next[idx];
      return next;
    });

    setDragIdx(idx);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      oX: positions[idx].x * scaleX,
      oY: positions[idx].y * scaleY,
    };
    dragScreenRef.current = { x: e.clientX, y: e.clientY };
    e.target.setPointerCapture(e.pointerId);
  };

  /**
   * handlePointerMove — Updates card position during drag and checks for snap-to-grid.
   */
  const handlePointerMove = (e) => {
    if (dragIdx === null) return;
    
    const stageWidth = sectionRef.current?.offsetWidth || window.innerWidth;
    const stageHeight = sectionRef.current?.offsetHeight || window.innerHeight;
    const maxX = stageWidth / 2 - 80;
    const maxY = stageHeight / 2 - 80;

    const scaleX = isMobile ? 1.1 : 1.6;
    const scaleY = isMobile ? 1.0 : 1.3;
    
    // Convert screen movement back to grid-relative units
    let dx = (dragStartRef.current.oX + (e.clientX - dragStartRef.current.x)) / scaleX;
    let dy = (dragStartRef.current.oY + (e.clientY - dragStartRef.current.y)) / scaleY;

    // Apply movement constraints
    dx = Math.max(-maxX / scaleX, Math.min(maxX / scaleX, dx));
    dy = Math.max(-maxY / scaleY + 50, Math.min(maxY / scaleY, dy));

    setPositions(prev => prev.map((p, i) => i === dragIdx ? { ...p, x: dx, y: dy } : p));
    
    // Check magnet distance for automatic snapping
    const target = getFramePositions(isMobile)[dragIdx];
    const distTarget = Math.hypot(dx - target.x, dy - target.y);
    if (distTarget < 80) { 
      setPositions(prev => prev.map((p, i) => i === dragIdx ? { ...p, x: target.x, y: target.y } : p));
      setSnappedCards(prev => ({ ...prev, [dragIdx]: true }));
      setDragIdx(null);
      try { e.target.releasePointerCapture(e.pointerId); } catch(err) {}
    }
  };

  /**
   * handlePointerEnter — Auto-snaps cards when the cursor hovers them.
   */
  const handlePointerEnter = (idx) => {
    if (phase !== "revealed" || dragIdx !== null || snappedCards[idx]) return;
    
    const allSnapped = Object.keys(snappedCards).length >= MACHINES.length;
    if (allSnapped) return;
    
    const target = getFramePositions(isMobile)[idx];
    setPositions(prev => prev.map((p, i) => i === idx ? { ...p, x: target.x, y: target.y } : p));
    setSnappedCards(prev => ({ ...prev, [idx]: true }));
  };

  /**
   * handlePointerUp — Completes interaction and determines if it was a click or a long-drag.
   */
  const handlePointerUp = (e, machine, idx, src) => {
    if (dragIdx !== null) {
      try { e.target.releasePointerCapture(e.pointerId); } catch(err) {}
      setDragIdx(null);
      
      const distFromStart = Math.hypot(e.clientX - dragScreenRef.current.x, e.clientY - dragScreenRef.current.y);
      if (distFromStart < 5) {
         setSelectedMachine({ ...machine, src, idx });
      }
    } else if (snappedCards[idx]) {
      // Normal click handling for already-snapped cards
      setSelectedMachine({ ...machine, src, idx });
    }
  };

  const isExploded = phase === "exploding" || phase === "revealed";
  const isRevealed = phase === "revealed";
  const cardW = isMobile ? 155 : isTablet ? 185 : 215;

  return (
    <>
      <style>{STYLES}</style>

      <section ref={sectionRef} className="gl-section" style={styles.section(isDark, isMobile)}>

        {/* ── HEADER ── */}
        <div style={styles.header(cardsBlast, isMobile, isDark)}>
          <div className="gl-eyebrow" style={styles.eyebrow}>
            <span className="gl-line"/>Our Machinery<span className="gl-line"/>
          </div>
          <h2 style={styles.heading(isMobile, isDark)}>
            Built for{" "}
            <span className="gl-grad-text" style={styles.headingAccent}>
              Precision
            </span>
          </h2>
          <p style={styles.subtext(isDark)}>
            World-class Heidelberg and Akiyama equipment — engineered for flawless output, maximum throughput, and zero compromise on quality.
          </p>
        </div>

        {/* ══════════════════════════════════════
            EXPLOSION STAGE
        ══════════════════════════════════════ */}
        <div className="gl-stage" style={styles.stage(isMobile, cardsBlast)}>

          {/* Background atmosphere */}
          <div style={styles.ambientGlow(isExploded)}/>

          {/* Technical dot grid backdrop */}
          <div style={styles.dotGrid}/>

          {/* Pre-explosion charging visual rings */}
          {!isExploded && (
            <>
              <div className="gl-ring-orbit" style={styles.ringOrbitLarge}/>
              <div className="gl-ring-orbit" style={styles.ringOrbitSmall}/>
            </>
          )}

          {/* ENERGY CORE (The ignition point) */}
          <div
            className={`gl-core ${phase === "charging" ? "charge" : isExploded ? "gone" : "pulse"}`}
            style={styles.core(isMobile)}
          >
            <div style={styles.coreInner}/>
            <div style={styles.coreOuter}/>
          </div>

          {/* SHOCKWAVE RINGS (Expanding out from the core) */}
          <div className={`gl-shock  ${shockFired ? "fire" : ""}`} style={styles.core(isMobile)}/>
          <div className={`gl-shock2 ${shockFired ? "fire" : ""}`} style={styles.core(isMobile)}/>

          {/* SPARK PARTICLES (Directional debris) */}
          {shockFired && SPARK_ANGLES.map((angle, i) => (
            <div key={i} className="gl-spark fire" style={styles.spark(i, angle)}/>
          ))}

          {/* Scroll instruction for first-time visitors */}
          {phase === "dormant" && (
            <div style={styles.scrollHintWrapper}>
              <span className="gl-scroll-hint">↑ scroll to ignite</span>
            </div>
          )}

          {/* ══════════════════════════════
              MAGNET FRAMES & CARDS
          ══════════════════════════════ */}
          
          {/* Target Frames (Ghost receptors in the final grid) */}
          {MACHINES.map((m, idx) => {
            const pos = getFramePositions(isMobile)[idx];
            const fx = `${pos.x * (isMobile ? 1.1 : 1.6)}px`;
            const fy = `${pos.y * (isMobile ? 1.0 : 1.3)}px`;
            
            // Only visible during the sorting phase on mobile
            const showFrame = isRevealed && !snappedCards[idx] && isMobile;
            
            return (
              <div 
                key={`frame-${idx}`} 
                className={`gl-magnet-frame${showFrame ? " visible" : ""}`}
                style={styles.magnetFrame(cardW, fx, fy, pos.rot)}
              />
            );
          })}
          
          {/* Draggable Product Cards */}
          {MACHINES.map((m, idx) => {
            const isDragging = dragIdx === idx;
            const isSnapped = snappedCards[idx];
            const pos  = positions[idx];
            const bx   = `${pos.x * (isMobile ? 1.1 : 1.6)}px`;
            const by   = `${pos.y * (isMobile ? 1.0 : 1.3)}px`;
            const originalRot = isSnapped || isMobile ? "0deg" : `${INITIAL_BLAST_POSITIONS[idx].rot}deg`;
            const delay= 0.04 + idx * 0.055;
            const floatOff = `${idx * 0.6}s`;
            const src  = images[idx] ?? null;

            // Compute companion gradient colour for 3D depth
            const ca2 = getCompanionColor(m.accent);

            return (
              <div
                key={idx}
                onPointerDown={(e) => handlePointerDown(e, idx)}
                onPointerMove={handlePointerMove}
                onPointerEnter={() => handlePointerEnter(idx)}
                onPointerUp={(e) => handlePointerUp(e, m, idx, src)}
                onPointerCancel={(e) => handlePointerUp(e, m, idx, src)}
                className={`gl-card-float${cardsBlast ? " blasting" : ""}${isRevealed ? " floating" : ""}${isDragging ? " dragging" : ""}${isSnapped ? " snapped" : ""}`}
                style={styles.card(bx, by, isDragging, isMobile, pos.rot, originalRot, delay, floatOff, m.accent, ca2, m.glow, cardW)}
              >
                <div className="gl-card-inner" style={styles.cardInner(m.grad)}>
                  {/* High-res asset or technical fallback if asset is missing */}
                  {src
                    ? <img className="gl-card-img" src={src} alt={m.name} loading="lazy"/>
                    : (
                      <div style={styles.cardImgFallback(m.grad)}>
                        <div style={styles.fallbackIcon(m.accent, m.glow)}>
                          <Zap size={24} strokeWidth={1.5}/>
                        </div>
                      </div>
                    )
                  }
                  <div className="gl-img-grad"/>
                  <div className="gl-card-bar"/>
                  <div className="gl-card-content">
                    <span className="gl-cat-pill">{m.category}</span>
                    <span className="gl-card-name">{m.name}</span>
                    <div className="gl-card-spec">
                      <Zap size={9} strokeWidth={2.5}/>{m.spec}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── FOOTER: Post-explosion controls and external links ── */}
        <div style={styles.footer(isRevealed, isMobile)}>
          <div style={styles.mb24}>
            <button className="gl-replay-btn" onClick={handleReset}>
              <Zap size={11} strokeWidth={2.5}/> Replay explosion
            </button>
          </div>
          <div style={styles.linkGroup}>
            <div style={styles.linkLine(isDark)}/>
            <span style={styles.linkText(isDark)}>
              See these machines live —
            </span>
            <a href="https://youtube.com/@b.k.offset?si=Y3rb_e2Y9oTBsgw7" target="_blank" rel="noopener noreferrer" className="gl-yt-pill">
              <span style={styles.statusPill}/>
              Watch on YouTube
              <ArrowUpRight size={13} strokeWidth={2.5}/>
            </a>
            <div style={styles.linkLine(isDark)}/>
          </div>
        </div>

        {/* ── MACHINE SPECIFICATIONS MODAL ── */}
        {selectedMachine && (
          <div className="gl-modal-backdrop" onPointerDown={() => setSelectedMachine(null)}>
            <div className="gl-modal-box" onPointerDown={(e) => e.stopPropagation()}>
              <button 
                className="gl-modal-close" 
                onClick={() => setSelectedMachine(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {selectedMachine.src && (
                <img src={selectedMachine.src} alt={selectedMachine.name} className="gl-modal-img" />
              )}
              {!selectedMachine.src && (
                <div style={styles.modalImgFallback(selectedMachine.grad)}>
                  <Zap size={48} style={styles.modalFallbackIcon(selectedMachine.accent)} />
                </div>
              )}

              <div className="gl-modal-content">
                <div style={styles.modalTagGroup}>
                  <span className="gl-cat-pill" style={styles.modalMainTag(selectedMachine.accent)}>
                    {selectedMachine.category}
                  </span>
                  <span className="gl-cat-pill" style={styles.modalSubTag}>
                    {selectedMachine.tag}
                  </span>
                </div>
                <h3 className="gl-modal-title">{selectedMachine.name}</h3>
                <p className="gl-modal-desc">{selectedMachine.desc}</p>
                
                <div style={styles.modalSpecPill(selectedMachine.accent)}>
                  <Zap size={14} style={styles.mr8}/> {selectedMachine.spec}
                </div>
              </div>
            </div>
          </div>
        )}

      </section>
    </>
  );
}

/* ─── Helper Utilities ─── */

/**
 * getCompanionColor — Determines the secondary gradient color based on the primary accent.
 */
function getCompanionColor(accent) {
  const map = {
    "#0ea5e9": "#6366f1",
    "#6366f1": "#8b5cf6",
    "#10b981": "#06b6d4",
    "#f59e0b": "#f97316",
    "#ec4899": "#f43f5e",
    "#8b5cf6": "#6366f1",
    "#f97316": "#f59e0b"
  };
  return map[accent] || "#0ea5e9";
}

/* ─── Data ─── */

const MACHINES = [
  {
    name: "Heidelberg Speedmaster Multicolor",
    category: "Offset Printing",
    tag: "Flagship",
    desc: "The Heidelberg Speedmaster — the world's most trusted multicolour press. Engineered for peak performance with cutting-edge Intellistart technology.",
    spec: "4-colour", accent: "#0ea5e9", glow: "rgba(14,165,233,0.7)", grad: "linear-gradient(145deg,#030d1f 0%,#0a2a4a 60%,#0ea5e920 100%)",
  },
  {
    name: "Heidelberg Printing Machine",
    category: "Offset Printing",
    tag: "Industry Leader",
    desc: "State-of-the-art Heidelberg — a benchmark in precision engineering. Deliver superior output trusted by professionals worldwide.",
    spec: "Multi-colour", accent: "#6366f1", glow: "rgba(99,102,241,0.7)", grad: "linear-gradient(145deg,#08051e 0%,#151048 60%,#6366f120 100%)",
  },
  {
    name: "Akiyama 4-Colour Press",
    category: "Offset Printing", tag: "Alcohol-Damped",
    desc: "Akiyama alcohol-damped 4-colour press. Alcohol damping system provides superior ink-water balance for exceptional dot gain control.",
    spec: "19×26 in", accent: "#10b981", glow: "rgba(16,185,129,0.7)", grad: "linear-gradient(145deg,#031209 0%,#082a16 60%,#10b98120 100%)",
  },
  {
    name: "Heidelberg Autoplate Machine",
    category: "Plate Making", tag: "Automated",
    desc: "Fully automated plate-loading system that eliminates manual handling errors. Reduces makeready time significantly.",
    spec: "Auto-plate", accent: "#f59e0b", glow: "rgba(245,158,11,0.7)", grad: "linear-gradient(145deg,#1a0e00 0%,#2e1c00 60%,#f59e0b20 100%)",
  },
  {
    name: "Heidelberg Speedmaster Multicolor",
    category: "Offset Printing", tag: "Flagship",
    desc: "The Heidelberg Speedmaster multicolour press. Engineered for peak performance delivering unmatched print quality.",
    spec: "Up to 4-colour", accent: "#0ea5e9", glow: "rgba(14,165,233,0.7)", grad: "linear-gradient(145deg,#030d1f 0%,#0a2a4a 60%,#0ea5e920 100%)",
  },
  {
    name: "Heidelberg SORDZ 2-Colour",
    category: "Offset Printing", tag: "Ref. #1447",
    desc: "Sheet size 25×36 inches — perfectly balanced for medium-format commercial work. Renowned for its robust build.",
    spec: "25×36 in", accent: "#ec4899", glow: "rgba(236,72,153,0.7)", grad: "linear-gradient(145deg,#1a0310 0%,#38071f 60%,#ec489920 100%)",
  },
  {
    name: "Thermal Lamination Machine",
    category: "Lamination", tag: "High-Speed",
    desc: "Industrial-grade thermal lamination delivering flawless gloss and matte finishes using Fevicol-based adhesives.",
    spec: "±0.01mm", accent: "#8b5cf6", glow: "rgba(139,92,246,0.7)", grad: "linear-gradient(145deg,#0d0518 0%,#1c0e38 60%,#8b5cf620 100%)",
  },
  {
    name: "Automatic Paper Cutting Machine",
    category: "Finishing", tag: "Ultra Precise",
    desc: "Automatic paper cutter delivering precise and flawless cuts at incredible speed. Streamlining workflow.",
    spec: "High-volume", accent: "#f97316", glow: "rgba(249,115,22,0.7)", grad: "linear-gradient(145deg,#1a0700 0%,#2e1200 60%,#f9731620 100%)",
  },
];

const INITIAL_BLAST_POSITIONS = [
  { x: -52, y: -42, rot: -18 }, { x:   0, y: -56, rot:   4 }, { x:  52, y: -42, rot:  14 }, { x: -62, y:   0, rot: -10 },
  { x:  62, y:   0, rot:  10 }, { x: -52, y:  44, rot:  16 }, { x:   0, y:  56, rot:  -6 }, { x:  52, y:  44, rot: -14 },
];

const getFramePositions = (isMobile) => {
  const W_gap = isMobile ? 175 : 190;
  const H_gap = isMobile ? 335 : 240;
  if (isMobile) {
    return [
      { x: -W_gap * 0.5, y: 0, rot: 0 }, { x: W_gap * 0.5, y: 0, rot: 0 }, { x: -W_gap * 0.5, y: H_gap, rot: 0 }, { x: W_gap * 0.5, y: H_gap, rot: 0 },
      { x: -W_gap * 0.5, y: H_gap * 2, rot: 0 }, { x: W_gap * 0.5, y: H_gap * 2, rot: 0 }, { x: -W_gap * 0.5, y: H_gap * 3, rot: 0 }, { x: W_gap * 0.5, y: H_gap * 3, rot: 0 },
    ];
  }
  return [
    { x: -W_gap * 1.5, y: -H_gap/2, rot: 0 }, { x: -W_gap * 0.5, y: -H_gap/2, rot: 0 }, { x: W_gap * 0.5, y: -H_gap/2, rot: 0 }, { x: W_gap * 1.5, y: -H_gap/2, rot: 0 },
    { x: -W_gap * 1.5, y:  H_gap/2, rot: 0 }, { x: -W_gap * 0.5, y:  H_gap/2, rot: 0 }, { x: W_gap * 0.5, y:  H_gap/2, rot: 0 }, { x: W_gap * 1.5, y:  H_gap/2, rot: 0 },
  ];
};

const SPARK_ANGLES = [0,30,60,90,120,150,180,210,240,270,300,330];
const SPARK_COLORS = [
  "linear-gradient(to bottom,#fff,#38bdf8,transparent)",
  "linear-gradient(to bottom,#fff,#6366f1,transparent)",
  "linear-gradient(to bottom,#fff,#10b981,transparent)",
];

/* ─── Consolidated Styles ────────────────────────────────── */

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  @keyframes gl-charge {
    0%   { transform:translate(-50%,-50%) scale(0.6);  opacity:0.3; box-shadow:0 0 0px   rgba(14,165,233,0); }
    40%  { transform:translate(-50%,-50%) scale(1.1);  opacity:0.9; box-shadow:0 0 60px  rgba(14,165,233,0.8), 0 0 120px rgba(14,165,233,0.4); }
    60%  { transform:translate(-50%,-50%) scale(0.92); opacity:1;   box-shadow:0 0 100px rgba(14,165,233,1),   0 0 200px rgba(14,165,233,0.6); }
    80%  { transform:translate(-50%,-50%) scale(1.18); opacity:1;   box-shadow:0 0 160px rgba(14,165,233,1),   0 0 300px rgba(14,165,233,0.8); }
    100% { transform:translate(-50%,-50%) scale(0);    opacity:0;   box-shadow:0 0 0     rgba(14,165,233,0); }
  }
  @keyframes gl-core-pulse {
    0%,100% { transform:translate(-50%,-50%) scale(1);    box-shadow:0 0 40px rgba(14,165,233,0.5),0 0 80px rgba(14,165,233,0.25); }
    50%     { transform:translate(-50%,-50%) scale(1.08); box-shadow:0 0 70px rgba(14,165,233,0.9),0 0 140px rgba(14,165,233,0.5); }
  }
  @keyframes gl-ring-expand {
    0%   { transform:translate(-50%,-50%) scale(0); opacity:0.9; }
    100% { transform:translate(-50%,-50%) scale(4); opacity:0; }
  }
  @keyframes gl-ring2-expand {
    0%   { transform:translate(-50%,-50%) scale(0); opacity:0.7; }
    100% { transform:translate(-50%,-50%) scale(6); opacity:0; }
  }
  @keyframes gl-spark {
    0%   { transform:translate(-50%,-50%) rotate(var(--a)) translateX(0px)   scale(1); opacity:1; }
    100% { transform:translate(-50%,-50%) rotate(var(--a)) translateX(200px) scale(0); opacity:0; }
  }
  @keyframes gl-header-blast {
    0%   { transform:translateY(30vh) scale(0.1); opacity:0; filter:blur(14px) brightness(3); }
    15%  { filter:blur(6px) brightness(2); opacity:0.7; }
    60%  { transform:translateY(-10px) scale(1.05); filter:blur(0) brightness(1); opacity:1; }
    90%  { transform:translateY(5px) scale(0.98); opacity:1; }
    100% { transform:translateY(0) scale(1); opacity:1; filter:blur(0) brightness(1); }
  }
  @keyframes gl-card-blast {
    0%   { transform:translate(-50%,-50%) translate(0,0) rotate(0deg) scale(0.1); opacity:0; filter:blur(14px) brightness(3); }
    15%  { filter:blur(6px) brightness(2); opacity:0.7; }
    60%  { transform:translate(-50%,-50%) translate(calc(var(--bx)*0.85),calc(var(--by)*0.85)) rotate(calc(var(--br)*1.4deg)) scale(1.06); filter:blur(0) brightness(1); opacity:1; }
    75%  { transform:translate(-50%,-50%) translate(calc(var(--bx)*1.05),calc(var(--by)*1.05)) rotate(calc(var(--br)*0.8deg)) scale(0.96); }
    88%  { transform:translate(-50%,-50%) translate(calc(var(--bx)*0.97),calc(var(--by)*0.97)) rotate(calc(var(--br)*1.05deg)) scale(1.01); }
    100% { transform:translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(calc(var(--br)*1deg)) scale(1); opacity:1; filter:blur(0) brightness(1); }
  }
  @keyframes gl-card-idle {
    0%,100% { transform:translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(calc(var(--br)*1deg)) scale(1)    translateY(0px); }
    50%     { transform:translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(calc(var(--br)*1deg)) scale(1.01) translateY(-6px); }
  }
  @keyframes gl-fadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes gl-rotate-slow {
    from { transform:translate(-50%,-50%) rotate(0deg); }
    to   { transform:translate(-50%,-50%) rotate(360deg); }
  }
  @keyframes gl-counter-rotate {
    from { transform:translate(-50%,-50%) rotate(0deg); }
    to   { transform:translate(-50%,-50%) rotate(-360deg); }
  }
  @keyframes gl-breathe {
    0%,100% { opacity:0.25; }
    50%     { opacity:0.6; }
  }
  @keyframes gl-scanline {
    0%   { top:-20%; }
    100% { top:120%; }
  }
  @keyframes gl-shimmer {
    0%   { transform:translateX(-110%) skewX(-10deg); }
    100% { transform:translateX(210%)  skewX(-10deg); }
  }
  @keyframes gl-border-flow {
    0%,100% { background-position:0%   50%; }
    50%     { background-position:100% 50%; }
  }

  .gl-section { position:relative; overflow:hidden; background:#ffffff; }
  .gl-stage { position:relative; width:100%; display:flex; align-items:center; justify-content:center; overflow:hidden; }
  .gl-core { position:absolute; left:50%; top:var(--gl-v-center, 50%); border-radius:50%; background:radial-gradient(circle,#fff 0%,#7dd3fc 25%,#0ea5e9 55%,transparent 100%); pointer-events:none; z-index:30; }
  .gl-core.pulse   { animation:gl-core-pulse 2s ease-in-out infinite; }
  .gl-core.charge  { animation:gl-charge 1s cubic-bezier(.22,1,.36,1) forwards; }
  .gl-core.gone    { display:none; }
  .gl-ring-orbit { position:absolute; left:50%; top:var(--gl-v-center, 50%); border-radius:50%; border:1px dashed rgba(14,165,233,0.3); pointer-events:none; z-index:5; }
  .gl-shock { position:absolute; left:50%; top:var(--gl-v-center, 50%); border-radius:50%; border:3px solid rgba(14,165,233,0.9); pointer-events:none; z-index:29; display:none; }
  .gl-shock.fire  { display:block; animation:gl-ring-expand  0.8s cubic-bezier(.22,1,.36,1) forwards; }
  .gl-shock2 { position:absolute; left:50%; top:var(--gl-v-center, 50%); border-radius:50%; border:2px solid rgba(14,165,233,0.5); pointer-events:none; z-index:28; display:none; }
  .gl-shock2.fire { display:block; animation:gl-ring2-expand 1.1s cubic-bezier(.22,1,.36,1) 0.1s forwards; }
  .gl-spark { position:absolute; left:50%; top:var(--gl-v-center, 50%); width:3px; transform-origin:top center; border-radius:2px; pointer-events:none; z-index:28; display:none; }
  .gl-spark.fire { display:block; animation:gl-spark 0.6s cubic-bezier(.22,1,.36,1) forwards; }
  
  .gl-card-float { position:absolute; left:50%; top:var(--gl-v-center, 50%); border-radius:16px; overflow:hidden; cursor:grab; z-index:10; transform:translate(-50%,-50%) scale(0); opacity:0; padding:1.5px; user-select:none; touch-action:none; will-change: transform, z-index; transition: transform 0.4s cubic-bezier(.175,.885,.32,1.275), box-shadow 0.4s ease; }
  .gl-card-float:active { cursor:grabbing; }
  .gl-card-float.dragging { z-index: 100 !important; animation: none !important; opacity: 1 !important; transition: none; transform: translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(0deg) scale(1.1) !important; }
  .gl-card-float.snapped { animation: none !important; opacity: 1 !important; transform: translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(var(--original-rot)) scale(1) !important; box-shadow: 0 0 30px var(--ca-glow) !important; cursor: pointer; }
  .gl-card-float.snapped:hover { opacity: 1 !important; transform: translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(0deg) scale(1.15) !important; z-index: 50 !important; cursor: pointer; }
  .gl-card-float.blasting { animation:gl-card-blast 1.1s cubic-bezier(.22,1,.36,1) var(--blast-delay) both; }
  .gl-card-float.floating:not(.dragging):not(.snapped) { opacity:1; transform:translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(calc(var(--br)*1deg)) scale(1); animation:gl-card-idle 4s ease-in-out var(--float-offset) infinite; }
  .gl-card-float.floating:not(.dragging):not(.snapped):hover { transform: translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(0deg) scale(1.15) !important; z-index: 50 !important; animation-play-state: paused; }
  .gl-card-float::before { content:''; position:absolute; inset:0; border-radius:16px; background:linear-gradient(270deg,var(--ca),var(--ca2),var(--ca),rgba(255,255,255,0.1)); background-size:400% 400%; opacity:0; transition:opacity 0.4s ease; z-index:0; }
  .gl-card-float:hover::before, .gl-card-float.dragging::before { opacity:1; animation:gl-border-flow 2.5s ease infinite; }
  .gl-card-inner { position:relative; width:100%; border-radius:15px; overflow:hidden; z-index:1; transition:box-shadow 0.4s ease; }
  .gl-card-float:hover .gl-card-inner, .gl-card-float.dragging .gl-card-inner { box-shadow:0 24px 60px rgba(0,0,0,0.7), 0 0 40px var(--ca-glow); }
  .gl-card-inner::before { content:''; position:absolute; left:0; right:0; top:-20%; height:35%; background:linear-gradient(to bottom,transparent,rgba(255,255,255,0.04),transparent); pointer-events:none; z-index:6; opacity:0; transition:opacity 0.3s ease; }
  .gl-card-float:hover .gl-card-inner::before { opacity:1; animation:gl-scanline 2s linear infinite; }
  .gl-card-img { width:100%; height:160px; object-fit:cover; display:block; transition:transform 0.6s cubic-bezier(.22,1,.36,1), filter 0.45s ease; filter:saturate(0.9) brightness(1.0); pointer-events:none; }
  .gl-card-float:hover .gl-card-img, .gl-card-float.dragging .gl-card-img { transform:scale(1.1); filter:saturate(1.1) brightness(1.05); }
  .gl-img-grad { position:absolute; top:0; left:0; right:0; height:160px; background:linear-gradient(to bottom,rgba(0,0,0,0.1),rgba(2,4,18,0.72)); pointer-events:none; z-index:2; }
  .gl-card-content { position:relative; padding:14px 14px 12px; z-index:3; pointer-events:none; }
  .gl-cat-pill { display:inline-block; font-family:'DM Sans',sans-serif; font-size:9px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; padding:3px 9px; border-radius:99px; background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.12); color:var(--ca); margin-bottom:7px; transition:background 0.3s ease, border-color 0.3s ease; }
  .gl-card-float:hover .gl-cat-pill { background:rgba(255,255,255,0.14); border-color:var(--ca); }
  .gl-card-name { font-family:'DM Sans',sans-serif; font-size:15px; font-weight:500; letter-spacing:0; line-height:1.25; color:#f8fafc; display:block; transition:color 0.3s ease; margin-bottom:8px; }
  .gl-card-float:hover .gl-card-name { color:#fff; }
  .gl-card-spec { display:flex; align-items:center; gap:5px; font-family:'DM Sans',sans-serif; font-size:10px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:var(--ca); opacity:0.85; }
  .gl-card-bar { position:absolute; bottom:0; left:0; right:0; height:2.5px; background:linear-gradient(90deg,var(--ca),var(--ca2)); transform:scaleX(0); transform-origin:left; transition:transform 0.45s cubic-bezier(.22,1,.36,1); z-index:7; }
  .gl-card-float:hover .gl-card-bar { transform:scaleX(1); }
  
  .gl-magnet-frame { position: absolute; left: 50%; top: var(--gl-v-center, 50%); border-radius: 16px; border: 2px dashed var(--frame-color, rgba(255,255,255,0.2)); transform: translate(-50%,-50%) translate(var(--fx),var(--fy)) rotate(var(--fr)); opacity: 0; pointer-events: none; z-index: 5; transition: opacity 0.3s ease, border-color 0.3s ease; }
  .gl-magnet-frame.visible { opacity: 1; }
  
  .gl-eyebrow { display:inline-flex; align-items:center; gap:12px; font-family:'DM Sans',sans-serif; font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; }
  .gl-eyebrow .gl-line { display:block; height:1px; width:32px; background:currentColor; opacity:0.4; }
  .gl-grad-text { display:inline-block; background-clip:text; -webkit-background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }
  .gl-scroll-hint { font-family:'DM Sans',sans-serif; font-size:11px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase; color:#64748b; animation:gl-breathe 2.5s ease-in-out infinite; }
  .gl-yt-pill { display:inline-flex; align-items:center; gap:7px; padding:10px 22px; border-radius:99px; background:rgba(255,0,0,0.10); border:1px solid rgba(255,0,0,0.22); color:#ff4444; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:700; text-decoration:none; transition:background 0.25s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease; }
  .gl-yt-pill:hover { background:rgba(255,0,0,0.22); transform:scale(1.05) translateY(-2px); box-shadow:0 8px 32px rgba(255,0,0,0.22); }
  .gl-replay-btn { display:inline-flex; align-items:center; gap:6px; padding:8px 18px; border-radius:99px; background:rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.10); color:#64748b; font-family:'DM Sans',sans-serif; font-size:11px; font-weight:600; letter-spacing:0.06em; cursor:pointer; transition:background 0.25s ease, color 0.25s ease; }
  .gl-replay-btn:hover { background:rgba(0,0,0,0.10); color:#0f172a; }

  .gl-modal-backdrop { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(2, 4, 18, 0.85); backdrop-filter: blur(8px); z-index: 1000; display: flex; align-items: center; justify-content: center; opacity: 0; animation: modalFadeIn 0.3s forwards; }
  .gl-modal-box { background: linear-gradient(145deg,#0d1123 0%,#060814 100%); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; width: 90%; max-width: 420px; overflow: hidden; position: relative; transform: scale(0.9) translateY(30px); opacity: 0; animation: modalSlideUp 0.5s cubic-bezier(.175,.885,.32,1.275) 0.05s forwards; box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.4); }
  .gl-modal-close { position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; cursor: pointer; z-index: 10; transition: all 0.2s ease; }
  .gl-modal-close:hover { background: rgba(255,255,255,0.25); transform: scale(1.15) rotate(90deg); }
  .gl-modal-img { width: 100%; height: 200px; object-fit: cover; border-bottom: 1px solid rgba(255,255,255,0.05); pointer-events: none; }
  .gl-modal-content { padding: 24px; }
  .gl-modal-title { font-family: 'Instrument Serif', Georgia, serif; font-size: 26px; font-weight: 400; color: #fff; line-height: 1.1; margin-bottom: 10px; }
  .gl-modal-desc { font-family: 'DM Sans', sans-serif; font-size: 13.5px; line-height: 1.65; color: rgba(255,255,255,0.65); margin-bottom: 20px; }

  @keyframes modalFadeIn { to { opacity: 1; } }
  @keyframes modalSlideUp { to { transform: scale(1) translateY(0); opacity: 1; } }
`;

const styles = {
  section: (isDark, isMobile) => ({
    padding:"0 0 100px", minHeight:"100vh",
    background: isDark
        ? "linear-gradient(rgba(2,6,23,0.94), rgba(4,8,28,0.96)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')"
        : "linear-gradient(rgba(240,249,255,0.90), rgba(236,246,255,0.92)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: isMobile ? "scroll" : "fixed",
    "--frame-color": isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)",
  }),
  header: (cardsBlast, isMobile, isDark) => ({
    textAlign:"center",
    padding: isMobile ? "60px 20px 40px" : "80px 48px 0",
    opacity:   cardsBlast ? 1 : 0,
    animation: cardsBlast ? "gl-header-blast 1.3s cubic-bezier(.22,1,.36,1) both" : "none",
  }),
  eyebrow: { color:"#0ea5e9", justifyContent:"center", marginBottom:16 },
  heading: (isMobile, isDark) => ({
    fontFamily:"'Instrument Serif',Georgia,serif",
    fontSize: isMobile ? "34px" : "54px",
    fontWeight:400, letterSpacing:"-0.03em", lineHeight:1.05,
    color: isDark ? "#f1f5f9" : "#0f172a", margin:"0 0 14px",
  }),
  headingAccent: { fontStyle:"italic", backgroundImage:"linear-gradient(135deg,#0ea5e9,#6366f1)" },
  subtext: (isDark) => ({
    fontFamily:"'DM Sans',sans-serif", fontSize:"14.5px",
    color: isDark ? "rgba(255,255,255,0.42)" : "#64748b", maxWidth:480, margin:"0 auto", lineHeight:1.72,
  }),
  stage: (isMobile, cardsBlast) => ({
    height: isMobile ? "1400px" : "90vh", 
    marginTop: cardsBlast ? -20 : 0,
    "--gl-v-center": isMobile ? "200px" : "50%"
  }),
  ambientGlow: (isExploded) => ({
    position:"absolute", left:"50%", top:"50%",
    transform:"translate(-50%,-50%)",
    width:600, height:600, borderRadius:"50%",
    background:"radial-gradient(circle,rgba(14,165,233,0.08) 0%,transparent 70%)",
    pointerEvents:"none", zIndex:0,
    opacity: isExploded ? 0.5 : 0.2, transition:"opacity 1s ease",
  }),
  dotGrid: {
    position:"absolute", inset:0, pointerEvents:"none", zIndex:0,
    backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.05) 1px,transparent 1px)",
    backgroundSize:"32px 32px",
    maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black 40%,transparent 100%)",
    WebkitMaskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black 40%,transparent 100%)",
  },
  ringOrbitLarge: {
    width:220, height:220, marginLeft:-110, marginTop:-110,
    animation:"gl-rotate-slow 8s linear infinite",
  },
  ringOrbitSmall: {
    width:160, height:160, marginLeft:-80, marginTop:-80,
    borderStyle:"dotted",
    animation:"gl-counter-rotate 5s linear infinite",
  },
  core: (isMobile) => ({ width: isMobile ? 80 : 120, height: isMobile ? 80 : 120 }),
  coreInner: {
    position:"absolute", inset:10, borderRadius:"50%",
    background:"radial-gradient(circle,#fff 0%,rgba(56,189,248,0.6) 50%,transparent 100%)",
  },
  coreOuter: {
    position:"absolute", inset:-20, borderRadius:"50%",
    background:"radial-gradient(circle,rgba(14,165,233,0.3) 0%,transparent 70%)",
  },
  spark: (i, angle) => ({
    "--a":  `${angle}deg`,
    height: `${45 + (i % 4) * 15}px`,
    background: SPARK_COLORS[i % 3],
    opacity: 0.5 + (i % 3) * 0.2,
    animationDelay: `${i * 0.022}s`,
  }),
  scrollHintWrapper: {
    position:"absolute", bottom:"18%", left:"50%", transform:"translateX(-50%)",
    zIndex:20, whiteSpace:"nowrap",
  },
  magnetFrame: (cardW, fx, fy, rot) => ({
    width: cardW,
    height: 320,
    "--fx": fx,
    "--fy": fy,
    "--fr": `${rot}deg`,
  }),
  card: (bx, by, isDragging, isMobile, rot, originalRot, delay, floatOff, accent, ca2, glow, cardW) => ({
    "--bx":          bx,
    "--by":          by,
    "--br":          isDragging || isMobile ? 0 : rot,
    "--original-rot": originalRot,
    "--blast-delay": `${delay}s`,
    "--float-offset":floatOff,
    "--ca":          accent,
    "--ca2":         ca2,
    "--ca-glow":     glow,
    width:           cardW,
  }),
  cardInner: (grad) => ({ background: grad }),
  cardImgFallback: (grad) => ({
    height:160, background:grad,
    display:"flex", alignItems:"center", justifyContent:"center",
  }),
  fallbackIcon: (accent, glow) => ({
    width:56, height:56, borderRadius:14,
    background:`${accent}20`, border:`1px solid ${accent}40`,
    display:"flex", alignItems:"center", justifyContent:"center",
    color: accent, boxShadow:`0 0 24px ${glow}`,
  }),
  footer: (isRevealed, isMobile) => ({
    textAlign:"center", padding: isMobile ? "0 20px" : "0 48px",
    opacity: isRevealed ? 1 : 0, transform: isRevealed ? "translateY(0)" : "translateY(20px)",
    transition:"opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
  }),
  mb24: { marginBottom: 24 },
  linkGroup: { display:"flex", alignItems:"center", justifyContent:"center", gap:16, flexWrap:"wrap" },
  linkLine: (isDark) => ({ width:40, height:1, background: isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.1)" }),
  linkText: (isDark) => ({ fontFamily:"'DM Sans',sans-serif", fontSize:"13px", color: isDark ? "rgba(255,255,255,0.30)" : "#64748b" }),
  statusPill: { width:7, height:7, borderRadius:"50%", background:"#ff4444", boxShadow:"0 0 8px #ff4444", display:"inline-block" },
  modalImgFallback: (grad) => ({
    height: 200, background: grad,
    display:"flex", alignItems:"center", justifyContent:"center",
    borderBottom: "1px solid rgba(255,255,255,0.05)"
  }),
  modalFallbackIcon: (accent) => ({ color: accent, opacity: 0.5 }),
  modalTagGroup: { display: 'flex', gap: 10, marginBottom: 16 },
  modalMainTag: (accent) => ({ margin: 0, '--ca': accent }),
  modalSubTag: { margin: 0, background: 'transparent' },
  modalSpecPill: (accent) => ({
    display: 'inline-flex', padding: '10px 20px', 
    background: 'rgba(255,255,255,0.05)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)',
    color: accent, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700
  }),
  mr8: { marginRight: 8 },
};