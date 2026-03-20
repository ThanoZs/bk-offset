/**
 * WebOffsetSection.jsx — Focused technical showcase for Web Offset capabilities.
 * Features a tabbed interface for exploring "Capabilities", "Reductions", and "Sustainability".
 */

import React, { useState } from "react";
import { Printer, Layers, Zap, Leaf, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

/**
 * WebOffsetSection — Manages tabbed content and scroll animations for the Web Offset area.
 */
export function WebOffsetSection({ text, isDark, c, isMobile, isTablet }) {
  const [ref, isVisible] = useScrollAnimation();
  const [active, setActive] = useState("layers");
  const [hov, setHov] = useState(false);
  
  const a = ACCENTS[active];
  const tab = TABS.find(t => t.key === active);

  const textDim = isDark ? "rgba(255,255,255,0.48)" : "#475569";
  const textPri = isDark ? "#f1f5f9" : "#0f172a";

  return (
    <>
      <style>{WO_STYLES}</style>

      <section
        ref={ref}
        style={styles.section(isDark, isMobile)}
      >
        <div style={styles.container(isVisible)}>
          {/* ── Section Header ── */}
          <div style={styles.header(isMobile)}>
            <div
              className="wo-eyebrow"
              style={styles.eyebrow}
            >
              <Printer size={11} strokeWidth={2} style={styles.mrNeg2} />
              {text.woTitle}
            </div>

            <h2
              className="wo-hero-grad"
              style={styles.heading(isMobile)}
            >
              {text.woTagline}
            </h2>

            <p style={styles.heroDesc(isMobile, textDim)}>
              {text.woHeroDesc}
            </p>
          </div>

          {/* ── Interactive Tabbed Card ── */}
          <div
            className="wo-card"
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={styles.card(hov, isDark, a)}
          >
            {/* ── Tab Navigation Bar ── */}
            <div style={styles.tabBar(isDark)}>
              {TABS.map(({ key, icon: Icon }) => {
                const ta   = ACCENTS[key];
                const isAc = key === active;
                return (
                  <button
                    key={key}
                    className={`wo-tab${isAc ? " wo-tab-active" : ""}`}
                    onClick={() => setActive(key)}
                    style={styles.tabButton(isAc, isDark, ta, textDim)}
                  >
                    <div
                      className="wo-tab-icon"
                      style={styles.tabIcon(isAc, ta)}
                    >
                      <Icon size={13} strokeWidth={2} />
                    </div>
                    {ta.label}
                  </button>
                );
              })}
            </div>

            {/* ── Active Tab Content Panel ── */}
            <div
              key={active}
              className="wo-panel-content"
              style={styles.panelContent(isMobile)}
            >
              {/* Left Column: Context & Detail */}
              <div style={styles.panelLeft(isMobile, isDark)}>
                {/* Feature Header */}
                <div style={styles.panelHeader}>
                  <div style={styles.panelIcon(a)}>
                    {tab && <tab.icon size={18} strokeWidth={1.75} />}
                  </div>
                  <h3 style={styles.panelTitle(isMobile, textPri)}>
                    {text[tab.titleKey]}
                  </h3>
                </div>

                {/* Feature Description */}
                <p style={styles.panelDesc(textDim)}>
                  {text[tab.descKey]}
                </p>

                {/* Thematic Footer Quote */}
                {text[tab.footKey] && (
                  <div
                    className="wo-quote"
                    style={styles.quote(isDark, a)}
                  >
                    <p style={styles.quoteP(textDim)}>
                      {text[tab.footKey]}
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column: Specification List */}
              <div style={styles.panelRight(isMobile, isDark)}>
                {/* Panel Label */}
                <div style={styles.listHeader(isDark, a)}>
                  <div style={styles.statusDot(a)} />
                  <span style={styles.listLabel(a)}>
                    {a.label}
                  </span>
                  <span style={styles.listCount(isDark)}>
                    {text[tab.itemsKey]?.length ?? 0} items
                  </span>
                </div>

                {/* List Items */}
                <div style={styles.itemsWrapper}>
                  {text[tab.itemsKey]?.map((item, i) => (
                    <ListItem key={i} label={item} a={a} isDark={isDark} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary contextual subtext */}
          {text.woHeroDesc2 && (
            <p style={styles.heroDesc2(isDark)}>
              {text.woHeroDesc2}
            </p>
          )}
        </div>
      </section>
    </>
  );
}

/**
 * ListItem — Interactive list element with hover-driven indicator.
 */
function ListItem({ label, a, isDark }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="wo-item"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={styles.listItem(hov, a)}
    >
      <div
        className="wo-check"
        style={styles.listCheck(hov, isDark, a)}
      >
        <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
          <path d="M2 5.5L4 7.5L8 3" stroke={hov ? "#fff" : a.color}
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <span
        className="wo-item-label"
        style={styles.listItemLabel(hov, isDark, a)}
      >
        {label}
      </span>

      <ArrowRight
        size={12}
        strokeWidth={2}
        style={styles.listArrow(hov, a)}
      />
    </div>
  );
}

/* ─── Config & Data ───────────────────────────── */

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

const TABS = [
  { key: "layers", icon: Layers, titleKey: "woPerfTitle", descKey: "woPerfDesc", itemsKey: "woPerfList", footKey: "woPerfFoot" },
  { key: "zap",    icon: Zap,    titleKey: "woEnvTitle",  descKey: "woEnvDesc",  itemsKey: "woEnvList",  footKey: "woEnvFoot"  },
  { key: "leaf",   icon: Leaf,   titleKey: "woSusTitle",  descKey: "woSusDesc",  itemsKey: "woSusList",  footKey: "woSusFoot"  },
];

/* ─── Consolidated Styles ────────────────────────────────── */

const WO_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  @keyframes wo-fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes wo-gradShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
  @keyframes wo-panelIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

  .wo-tab { position: relative; display: flex; align-items: center; gap: 9px; padding: 10px 20px; border-radius: 10px; border: 1px solid transparent; background: transparent; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; white-space: nowrap; transition: background 0.22s ease, border-color 0.22s ease, color 0.22s ease, box-shadow 0.22s ease; flex-shrink: 0; }
  .wo-tab:hover:not(.wo-tab-active) { background: rgba(255,255,255,0.06); }
  .wo-tab-active { font-weight: 600; box-shadow: 0 4px 16px var(--wo-glow); }
  .wo-tab-active::after { content: ''; position: absolute; bottom: -1px; left: 50%; transform: translateX(-50%); width: 20px; height: 2px; border-radius: 2px; background: var(--wo-grad); }
  .wo-tab-icon { width: 26px; height: 26px; border-radius: 7px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background 0.22s ease, box-shadow 0.22s ease; }
  .wo-panel-content { animation: wo-panelIn 0.3s cubic-bezier(.22,1,.36,1) both; }
  .wo-item { display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 8px; border: 1px solid transparent; transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s cubic-bezier(.22,1,.36,1); cursor: default; }
  .wo-item:hover { transform: translateX(4px); }
  .wo-check { width: 18px; height: 18px; min-width: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background 0.18s ease, box-shadow 0.18s ease; }
  .wo-item-label { font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 400; line-height: 1.5; transition: color 0.18s ease, font-weight 0.18s ease; }
  .wo-hero-grad { background: linear-gradient(270deg,#0ea5e9,#6366f1,#0ea5e9); background-size: 300% 300%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: wo-gradShift 5s ease infinite; }
  .wo-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
  .wo-eyebrow::before, .wo-eyebrow::after { content: ''; display: block; width: 22px; height: 1px; background: currentColor; opacity: 0.5; }
  .wo-quote { position: relative; padding: 12px 16px 12px 20px; border-radius: 8px; }
  .wo-quote::before { content: ''; position: absolute; left: 0; top: 6px; bottom: 6px; width: 3px; border-radius: 2px; background: var(--wo-grad); }
  .wo-card { position: relative; overflow: hidden; transition: background 0.35s ease, border-color 0.3s ease, box-shadow 0.4s cubic-bezier(.22,1,.36,1), transform 0.4s cubic-bezier(.22,1,.36,1); }
  .wo-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(130deg, transparent 0%, rgba(255,255,255,0.07) 45%, transparent 90%); transform: translateX(-110%) skewX(-10deg); transition: transform 0.65s cubic-bezier(.22,1,.36,1); pointer-events: none; z-index: 1; }
  .wo-card:hover::before { transform: translateX(210%) skewX(-10deg); }
  .wo-card:hover { transform: translateY(-4px); }

  @media (max-width: 640px) {
    .wo-tab { padding: 8px 12px; font-size: 12px; }
    .wo-tab-icon { width: 22px; height: 22px; }
  }
`;

const styles = {
  section: (isDark, isMobile) => ({
    background: isDark
      ? `linear-gradient(rgba(2,6,23,0.94),rgba(4,8,28,0.96)),url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`
      : `linear-gradient(rgba(250,250,248,0.92),rgba(244,241,236,0.94)),url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: isMobile ? "scroll" : "fixed",
    padding: isMobile ? "64px 20px" : "88px 40px",
  }),
  container: (isVisible) => ({
    maxWidth: 1100,
    margin: "0 auto",
    opacity: isVisible ? 1 : 0,
    animation: isVisible ? "wo-fadeUp 0.5s ease-out both" : "none",
  }),
  header: (isMobile) => ({ textAlign: "center", marginBottom: isMobile ? 32 : 40 }),
  eyebrow: { color: "#0ea5e9", justifyContent: "center", marginBottom: 14 },
  mrNeg2: { marginRight: -2 },
  heading: (isMobile) => ({
    fontFamily: "'Instrument Serif', Georgia, serif",
    fontSize: isMobile ? "30px" : "clamp(32px,4.5vw,48px)",
    fontWeight: 400,
    letterSpacing: "-0.025em",
    lineHeight: 1.1,
    margin: "0 0 12px",
  }),
  heroDesc: (isMobile, textColor) => ({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: isMobile ? "13.5px" : "14.5px",
    color: textColor,
    maxWidth: 560,
    margin: "0 auto",
    lineHeight: 1.7,
  }),
  card: (hov, isDark, a) => ({
    background: hov
      ? isDark ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,1)"
      : isDark ? "rgba(255,255,255,0.03)"  : "rgba(255,255,255,0.82)",
    border: `1px solid ${hov
      ? isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.10)"
      : isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.075)"}`,
    borderRadius: 20,
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    overflow: "hidden",
    boxShadow: hov
      ? isDark
        ? `0 28px 64px rgba(0,0,0,0.55), 0 0 0 1px ${a.faint}`
        : `0 20px 56px rgba(0,0,0,0.09), 0 0 0 1px ${a.faint}`
      : isDark
      ? "0 1px 3px rgba(0,0,0,0.4)"
      : "0 1px 4px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)",
  }),
  tabBar: (isDark) => ({
    display: "flex",
    gap: 4,
    padding: "12px 14px",
    borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.075)"}`,
    overflowX: "auto",
    scrollbarWidth: "none",
    background: isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.60)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
  }),
  tabButton: (isAc, isDark, ta, textColor) => ({
    "--wo-glow": ta.glow,
    "--wo-grad": ta.grad,
    color: isAc ? ta.color : textColor,
    background: isAc
      ? isDark ? `${ta.faint}` : ta.faint
      : "transparent",
    borderColor: isAc
      ? isDark ? `${ta.color}30` : `${ta.color}28`
      : "transparent",
  }),
  tabIcon: (isAc, ta) => ({
    background: isAc ? ta.grad : "transparent",
    boxShadow: isAc ? `0 2px 8px ${ta.glow}` : "none",
    color: isAc ? "#fff" : ta.color,
  }),
  panelContent: (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: 0,
  }),
  panelLeft: (isMobile, isDark) => ({
    padding: isMobile ? "28px 24px" : "36px 40px",
    borderRight: isMobile ? "none" : `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.075)"}`,
    borderBottom: isMobile ? `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.075)"}` : "none",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    background: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.82)",
  }),
  panelHeader: { display: "flex", alignItems: "center", gap: 14 },
  panelIcon: (a) => ({
    width: 44, height: 44,
    borderRadius: 12,
    background: a.grad,
    display: "flex", alignItems: "center", justifyContent: "center",
    color: "#fff",
    boxShadow: `0 6px 18px ${a.glow}`,
    flexShrink: 0,
  }),
  panelTitle: (isMobile, textColor) => ({
    fontFamily: "'Instrument Serif', Georgia, serif",
    fontSize: isMobile ? "18px" : "22px",
    fontWeight: 400,
    letterSpacing: "-0.02em",
    color: textColor,
    lineHeight: 1.2,
    margin: 0,
  }),
  panelDesc: (textColor) => ({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "13.5px",
    color: textColor,
    lineHeight: 1.75,
    margin: 0,
    flex: 1,
  }),
  quote: (isDark, a) => ({
    "--wo-grad": a.grad,
    background: isDark ? "rgba(255,255,255,0.04)" : a.faint,
    border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : `${a.color}22`}`,
  }),
  quoteP: (textColor) => ({
    fontFamily: "'Instrument Serif', Georgia, serif",
    fontSize: "13.5px",
    fontStyle: "italic",
    color: textColor,
    lineHeight: 1.7,
    margin: 0,
  }),
  panelRight: (isMobile, isDark) => ({
    padding: isMobile ? "24px" : "28px 32px",
    background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.55)",
  }),
  listHeader: (isDark, a) => ({
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 14,
    paddingBottom: 12,
    borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : `${a.color}18`}`,
  }),
  statusDot: (a) => ({
    width: 7, height: 7,
    borderRadius: "50%",
    background: a.grad,
    boxShadow: `0 0 7px ${a.glow}`,
  }),
  listLabel: (a) => ({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "9.5px",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: a.color,
  }),
  listCount: (isDark) => ({
    marginLeft: "auto",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    color: isDark ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.25)",
  }),
  itemsWrapper: { display: "flex", flexDirection: "column", gap: 3 },
  heroDesc2: (isDark) => ({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "13px",
    color: isDark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.38)",
    textAlign: "center",
    marginTop: 20,
    lineHeight: 1.6,
    maxWidth: 600,
    margin: "20px auto 0",
  }),
  listItem: (hov, a) => ({
    background: hov ? a.faint : "transparent",
    borderColor: hov ? `${a.color}40` : "transparent",
  }),
  listCheck: (hov, isDark, a) => ({
    background: hov ? a.grad : isDark ? "rgba(255,255,255,0.07)" : a.faint,
    boxShadow: hov ? `0 2px 8px ${a.glow}` : "none",
    border: hov ? "none" : `1px solid ${a.color}44`,
  }),
  listItemLabel: (hov, isDark, a) => ({
    color: hov
      ? isDark ? "#f1f5f9" : "#0f172a"
      : isDark ? "rgba(255,255,255,0.55)" : "#475569",
    fontWeight: hov ? 600 : 400,
  }),
  listArrow: (hov, a) => ({
    marginLeft: "auto",
    flexShrink: 0,
    color: a.color,
    opacity: hov ? 0.75 : 0,
    transform: hov ? "translateX(0)" : "translateX(-4px)",
    transition: "opacity 0.18s ease, transform 0.18s ease",
  }),
};