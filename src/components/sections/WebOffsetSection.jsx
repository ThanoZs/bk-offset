// WebOffsetSection.jsx — Compact tabbed layout for BK Offset Printing

import React, { useState } from "react";
import { Printer, Layers, Zap, Leaf, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

/* ─── Accent config ─────────────────────────── */
const ACCENTS = {
  layers: {
    color: "#0ea5e9",
    glow:  "rgba(14,165,233,0.25)",
    faint: "rgba(14,165,233,0.08)",
    grad:  "linear-gradient(135deg,#0ea5e9,#6366f1)",
    label: "Capabilities",
  },
  zap: {
    color: "#f59e0b",
    glow:  "rgba(245,158,11,0.25)",
    faint: "rgba(245,158,11,0.08)",
    grad:  "linear-gradient(135deg,#d97706,#fbbf24)",
    label: "Reductions",
  },
  leaf: {
    color: "#22c55e",
    glow:  "rgba(34,197,94,0.25)",
    faint: "rgba(34,197,94,0.08)",
    grad:  "linear-gradient(135deg,#16a34a,#4ade80)",
    label: "Sustainability",
  },
};

/* ─── Styles ────────────────────────────────── */
const WO_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  @keyframes wo-fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes wo-gradShift {
    0%,100% { background-position: 0% 50%; }
    50%     { background-position: 100% 50%; }
  }
  @keyframes wo-panelIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Tab bar ── */
  .wo-tab {
    position: relative;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    white-space: nowrap;
    transition:
      background    0.22s ease,
      border-color  0.22s ease,
      color         0.22s ease,
      box-shadow    0.22s ease;
    flex-shrink: 0;
  }
  .wo-tab:hover:not(.wo-tab-active) {
    background: rgba(255,255,255,0.06);
  }
  .wo-tab-active {
    font-weight: 600;
    box-shadow: 0 4px 16px var(--wo-glow);
  }

  /* Active underline dot */
  .wo-tab-active::after {
    content: '';
    position: absolute;
    bottom: -1px; left: 50%;
    transform: translateX(-50%);
    width: 20px; height: 2px;
    border-radius: 2px;
    background: var(--wo-grad);
  }

  /* ── Tab icon ring ── */
  .wo-tab-icon {
    width: 26px; height: 26px;
    border-radius: 7px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background 0.22s ease, box-shadow 0.22s ease;
  }

  /* ── Panel content ── */
  .wo-panel-content {
    animation: wo-panelIn 0.3s cubic-bezier(.22,1,.36,1) both;
  }

  /* ── List item ── */
  .wo-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
    border-radius: 8px;
    border: 1px solid transparent;
    transition:
      background   0.18s ease,
      border-color 0.18s ease,
      transform    0.18s cubic-bezier(.22,1,.36,1);
    cursor: default;
  }
  .wo-item:hover { transform: translateX(4px); }

  .wo-check {
    width: 18px; height: 18px;
    min-width: 18px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background 0.18s ease, box-shadow 0.18s ease;
  }

  .wo-item-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    transition: color 0.18s ease, font-weight 0.18s ease;
  }

  /* ── Hero title gradient ── */
  .wo-hero-grad {
    background: linear-gradient(270deg,#0ea5e9,#6366f1,#0ea5e9);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: wo-gradShift 5s ease infinite;
  }

  /* ── Eyebrow ── */
  .wo-eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px; font-weight: 700;
    letter-spacing: 0.16em; text-transform: uppercase;
  }
  .wo-eyebrow::before, .wo-eyebrow::after {
    content: ''; display: block;
    width: 22px; height: 1px;
    background: currentColor; opacity: 0.5;
  }

  /* ── Footer quote left bar ── */
  .wo-quote {
    position: relative;
    padding: 12px 16px 12px 20px;
    border-radius: 8px;
  }
  .wo-quote::before {
    content: '';
    position: absolute;
    left: 0; top: 6px; bottom: 6px;
    width: 3px; border-radius: 2px;
    background: var(--wo-grad);
  }

  @media (max-width: 640px) {
    .wo-tab { padding: 8px 12px; font-size: 12px; }
    .wo-tab-icon { width: 22px; height: 22px; }
  }
`;

/* ─── TABS config ───────────────────────────── */
const TABS = [
  { key: "layers", icon: Layers, titleKey: "woPerfTitle", descKey: "woPerfDesc", itemsKey: "woPerfList", footKey: "woPerfFoot" },
  { key: "zap",    icon: Zap,    titleKey: "woEnvTitle",  descKey: "woEnvDesc",  itemsKey: "woEnvList",  footKey: "woEnvFoot"  },
  { key: "leaf",   icon: Leaf,   titleKey: "woSusTitle",  descKey: "woSusDesc",  itemsKey: "woSusList",  footKey: "woSusFoot"  },
];

/* ═══════════════════════════════════════════
   WebOffsetSection
═══════════════════════════════════════════ */
export function WebOffsetSection({ text, isDark, c, isMobile, isTablet }) {
  const [ref, isVisible] = useScrollAnimation();
  const [active, setActive] = useState("layers");
  const a = ACCENTS[active];
  const tab = TABS.find(t => t.key === active);

  const surfBg    = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)";
  const borderCol = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)";
  const textPri   = isDark ? "#f1f5f9" : "#0f172a";
  const textDim   = isDark ? "rgba(255,255,255,0.48)" : "#475569";

  return (
    <>
      <style>{WO_STYLES}</style>

      <section
        ref={ref}
        style={{
          background: isDark
            ? `linear-gradient(rgba(2,6,23,0.94),rgba(4,8,28,0.96)),url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`
            : `linear-gradient(rgba(250,250,248,0.92),rgba(244,241,236,0.94)),url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          padding: isMobile ? "64px 20px" : "88px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "wo-fadeUp 0.5s ease-out both" : "none",
          }}
        >
          {/* ── Compact hero header ── */}
          <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 40 }}>
            <div
              className="wo-eyebrow"
              style={{ color: "#0ea5e9", justifyContent: "center", marginBottom: 14 }}
            >
              <Printer size={11} strokeWidth={2} style={{ marginRight: -2 }} />
              {text.woTitle}
            </div>

            <h2
              className="wo-hero-grad"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: isMobile ? "30px" : "clamp(32px,4.5vw,48px)",
                fontWeight: 400,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                margin: "0 0 12px",
              }}
            >
              {text.woTagline}
            </h2>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: isMobile ? "13.5px" : "14.5px",
              color: textDim,
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
            }}>
              {text.woHeroDesc}
            </p>
          </div>

          {/* ── Main card ── */}
          <div
            style={{
              background: surfBg,
              border: `1px solid ${borderCol}`,
              borderRadius: 20,
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              overflow: "hidden",
              boxShadow: isDark
                ? "0 2px 8px rgba(0,0,0,0.4)"
                : "0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
            }}
          >
            {/* ── Tab bar ── */}
            <div
              style={{
                display: "flex",
                gap: 4,
                padding: "12px 14px",
                borderBottom: `1px solid ${borderCol}`,
                overflowX: "auto",
                scrollbarWidth: "none",
              }}
            >
              {TABS.map(({ key, icon: Icon }) => {
                const ta   = ACCENTS[key];
                const isAc = key === active;
                return (
                  <button
                    key={key}
                    className={`wo-tab${isAc ? " wo-tab-active" : ""}`}
                    onClick={() => setActive(key)}
                    style={{
                      "--wo-glow": ta.glow,
                      "--wo-grad": ta.grad,
                      color: isAc ? ta.color : textDim,
                      background: isAc
                        ? isDark ? `${ta.faint}` : ta.faint
                        : "transparent",
                      borderColor: isAc
                        ? isDark ? `${ta.color}30` : `${ta.color}28`
                        : "transparent",
                    }}
                  >
                    <div
                      className="wo-tab-icon"
                      style={{
                        background: isAc ? ta.grad : "transparent",
                        boxShadow: isAc ? `0 2px 8px ${ta.glow}` : "none",
                        color: isAc ? "#fff" : ta.color,
                      }}
                    >
                      <Icon size={13} strokeWidth={2} />
                    </div>
                    {ta.label}
                  </button>
                );
              })}
            </div>

            {/* ── Tab content ── */}
            <div
              key={active}
              className="wo-panel-content"
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: 0,
              }}
            >
              {/* Left: description */}
              <div
                style={{
                  padding: isMobile ? "28px 24px" : "36px 40px",
                  borderRight: isMobile ? "none" : `1px solid ${borderCol}`,
                  borderBottom: isMobile ? `1px solid ${borderCol}` : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {/* Icon + title row */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 44, height: 44,
                    borderRadius: 12,
                    background: a.grad,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff",
                    boxShadow: `0 6px 18px ${a.glow}`,
                    flexShrink: 0,
                  }}>
                    {tab && <tab.icon size={18} strokeWidth={1.75} />}
                  </div>
                  <h3 style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: isMobile ? "18px" : "22px",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: textPri,
                    lineHeight: 1.2,
                    margin: 0,
                  }}>
                    {text[tab.titleKey]}
                  </h3>
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13.5px",
                  color: textDim,
                  lineHeight: 1.75,
                  margin: 0,
                  flex: 1,
                }}>
                  {text[tab.descKey]}
                </p>

                {/* Footer quote */}
                {text[tab.footKey] && (
                  <div
                    className="wo-quote"
                    style={{
                      "--wo-grad": a.grad,
                      background: isDark ? "rgba(255,255,255,0.04)" : a.faint,
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : `${a.color}22`}`,
                    }}
                  >
                    <p style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: "13.5px",
                      fontStyle: "italic",
                      color: textDim,
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      {text[tab.footKey]}
                    </p>
                  </div>
                )}
              </div>

              {/* Right: list */}
              <div style={{ padding: isMobile ? "24px" : "28px 32px" }}>
                {/* Panel mini-header */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 14,
                  paddingBottom: 12,
                  borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : `${a.color}18`}`,
                }}>
                  <div style={{
                    width: 7, height: 7,
                    borderRadius: "50%",
                    background: a.grad,
                    boxShadow: `0 0 7px ${a.glow}`,
                  }} />
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "9.5px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: a.color,
                  }}>
                    {a.label}
                  </span>
                  <span style={{
                    marginLeft: "auto",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    color: isDark ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.25)",
                  }}>
                    {text[tab.itemsKey]?.length ?? 0} items
                  </span>
                </div>

                {/* Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {text[tab.itemsKey]?.map((item, i) => (
                    <ListItem key={i} label={item} a={a} isDark={isDark} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Second description line below card ── */}
          {text.woHeroDesc2 && (
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              color: isDark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.38)",
              textAlign: "center",
              marginTop: 20,
              lineHeight: 1.6,
              maxWidth: 600,
              margin: "20px auto 0",
            }}>
              {text.woHeroDesc2}
            </p>
          )}
        </div>
      </section>
    </>
  );
}

/* ─── ListItem ──────────────────────────────── */
function ListItem({ label, a, isDark }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="wo-item"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? a.faint : "transparent",
        borderColor: hov ? `${a.color}40` : "transparent",
      }}
    >
      <div
        className="wo-check"
        style={{
          background: hov ? a.grad : isDark ? "rgba(255,255,255,0.07)" : a.faint,
          boxShadow: hov ? `0 2px 8px ${a.glow}` : "none",
          border: hov ? "none" : `1px solid ${a.color}44`,
        }}
      >
        <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
          <path d="M2 5.5L4 7.5L8 3" stroke={hov ? "#fff" : a.color}
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <span
        className="wo-item-label"
        style={{
          color: hov
            ? isDark ? "#f1f5f9" : "#0f172a"
            : isDark ? "rgba(255,255,255,0.55)" : "#475569",
          fontWeight: hov ? 600 : 400,
        }}
      >
        {label}
      </span>

      <ArrowRight
        size={12}
        strokeWidth={2}
        style={{
          marginLeft: "auto",
          flexShrink: 0,
          color: a.color,
          opacity: hov ? 0.75 : 0,
          transform: hov ? "translateX(0)" : "translateX(-4px)",
          transition: "opacity 0.18s ease, transform 0.18s ease",
        }}
      />
    </div>
  );
}