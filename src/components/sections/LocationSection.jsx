// LocationSection.jsx — Premium location section for BK Offset Printing

import React, { useState } from "react";
import { MapPin, ExternalLink, Clock, Phone, Navigation, Copy, Check } from "lucide-react";
import { T } from "../../utils/designTokens";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

/* ─── Styles ──────────────────────────────── */
const LOC_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  @keyframes loc-fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes loc-pin-bounce {
    0%,100% { transform: translateY(0); }
    40%     { transform: translateY(-6px); }
    60%     { transform: translateY(-3px); }
  }
  @keyframes loc-pulse-ring {
    0%   { transform: scale(0.9); opacity: 0.8; }
    100% { transform: scale(1.8); opacity: 0; }
  }

  /* ── Info card ── */
  .loc-card {
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    transition:
      border-color 0.25s ease,
      box-shadow   0.25s ease,
      transform    0.3s cubic-bezier(.22,1,.36,1);
  }
  .loc-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: var(--loc-grad, linear-gradient(90deg,#0ea5e9,#6366f1));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s cubic-bezier(.22,1,.36,1);
  }
  .loc-card:hover::before { transform: scaleX(1); }
  .loc-card:hover { transform: translateY(-3px); }

  /* ── Hours row ── */
  .loc-hours-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    border-bottom: 1px solid var(--loc-border);
    transition: color 0.2s ease;
  }
  .loc-hours-row:last-child { border-bottom: none; padding-bottom: 0; }
  .loc-hours-row:first-child { padding-top: 0; }

  /* ── Map wrapper ── */
  .loc-map-wrap {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    transition:
      box-shadow   0.35s ease,
      border-color 0.3s ease,
      transform    0.35s cubic-bezier(.22,1,.36,1);
  }
  .loc-map-wrap:hover { transform: translateY(-4px); }

  /* ── Directions button ── */
  .loc-dir-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    padding: 12px 26px;
    border-radius: 999px;
    background: linear-gradient(135deg,#0ea5e9,#6366f1);
    box-shadow: 0 5px 18px rgba(14,165,233,0.32);
    transition:
      transform  0.25s cubic-bezier(.34,1.56,.64,1),
      box-shadow 0.25s ease;
    position: relative;
    overflow: hidden;
  }
  .loc-dir-btn::before {
    content:'';
    position:absolute; inset:0;
    background:linear-gradient(130deg,transparent,rgba(255,255,255,0.12),transparent);
    transform:translateX(-110%) skewX(-10deg);
    transition:transform 0.5s cubic-bezier(.22,1,.36,1);
  }
  .loc-dir-btn:hover::before { transform:translateX(200%) skewX(-10deg); }
  .loc-dir-btn:hover { transform:translateY(-2px); box-shadow:0 8px 26px rgba(14,165,233,0.42); }
  .loc-dir-btn:active { transform:scale(0.97); }

  /* ── Copy button ── */
  .loc-copy-btn {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.04em;
    padding: 5px 10px;
    border-radius: 6px;
    transition: background 0.2s ease, color 0.2s ease;
  }

  /* ── Pin animation ── */
  .loc-pin-icon {
    animation: loc-pin-bounce 3s ease-in-out infinite;
  }
  .loc-ping {
    position: absolute;
    border-radius: 50%;
    background: rgba(14,165,233,0.35);
    animation: loc-pulse-ring 2s ease-out infinite;
  }

  /* ── Eyebrow ── */
  .loc-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .loc-eyebrow::before, .loc-eyebrow::after {
    content:''; display:block;
    width:22px; height:1px;
    background:currentColor; opacity:0.5;
  }
`;

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/GQqACqym97FV1PYb9";
const ADDRESS = "Street No. 2, Zulfe Bengal, Dilshad Garden, Delhi — 110095";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7!2d77.3025!3d28.6816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQwJzUzLjgiTiA3N8KwMTgnMDkuMCJF!5e0!3m2!1sen!2sin!4v1234567890";

const HOURS = [
  { day: "Monday – Sunday", time: "10:00 AM – 6:00 PM", open: true  },
  // { day: "Saturday",        time: "9:00 AM – 5:00 PM", open: true  },
  { day: "Tuesday",          time: "Closed",             open: false },
];

/* ═══════════════════════════════════════════
   LocationSection
═══════════════════════════════════════════ */
export function LocationSection({ text, c, isMobile }) {
  const [ref, isVisible] = useScrollAnimation();
  const [copied, setCopied]   = useState(false);
  const [mapHov, setMapHov]   = useState(false);

  const isDark   = c?.bg?.includes("2") ?? false; // fallback detection
  const borderC  = c?.border ?? "rgba(0,0,0,0.08)";
  const surfBg   = c?.surf   ?? "rgba(255,255,255,0.85)";
  const textPri  = c?.text   ?? "#0f172a";
  const textDim  = c?.textDim ?? "#64748b";

  const handleCopy = () => {
    navigator.clipboard?.writeText(ADDRESS).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <style>{LOC_STYLES}</style>

      <section
        ref={ref}
        style={{
          padding: isMobile ? "72px 20px" : "110px 40px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? 36 : 52,
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "loc-fadeUp 0.5s ease-out both" : "none",
          }}
        >
          <div className="loc-eyebrow" style={{ color: "#0ea5e9", justifyContent: "center", marginBottom: 14 }}>
            <MapPin size={11} strokeWidth={2} style={{ marginRight: -2 }} />
            Find Us
          </div>
          <h2 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: isMobile ? "32px" : "clamp(34px,4vw,48px)",
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            color: textPri,
            margin: "0 0 12px",
          }}>
            Visit Our{" "}
            <em style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg,#0ea5e9,#6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Press
            </em>
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14.5px",
            color: textDim,
            maxWidth: 420,
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Come see our machines in person. We welcome publishers, authors, and
            businesses for a live demonstration.
          </p>
        </div>

        {/* ── 2-col layout ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "380px 1fr",
          gap: isMobile ? 20 : 24,
          alignItems: "start",
          opacity: isVisible ? 1 : 0,
          animation: isVisible ? "loc-fadeUp 0.55s ease-out 0.1s both" : "none",
        }}>

          {/* ── LEFT: Info cards ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Address card */}
            <div
              className="loc-card"
              style={{
                "--loc-grad": "linear-gradient(90deg,#0ea5e9,#6366f1)",
                "--loc-border": borderC,
                background: surfBg,
                border: `1px solid ${borderC}`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                padding: "22px 22px 20px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                {/* Animated pin with pulse ring */}
                <div style={{ position: "relative", flexShrink: 0, marginTop: 2 }}>
                  <div className="loc-ping" style={{ width: 32, height: 32, top: -6, left: -6 }} />
                  <div className="loc-ping" style={{ width: 32, height: 32, top: -6, left: -6, animationDelay: "0.7s" }} />
                  <MapPin size={20} strokeWidth={1.75} color="#0ea5e9" className="loc-pin-icon" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "9.5px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#0ea5e9",
                    marginBottom: 6,
                  }}>
                    Address
                  </div>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: textPri,
                    lineHeight: 1.65,
                    margin: "0 0 12px",
                    fontWeight: 500,
                  }}>
                    {ADDRESS}
                  </p>
                  {/* Copy button */}
                  <button
                    className="loc-copy-btn"
                    onClick={handleCopy}
                    style={{
                      color: copied ? "#22c55e" : textDim,
                      background: copied ? "rgba(34,197,94,0.08)" : "transparent",
                    }}
                  >
                    {copied
                      ? <><Check size={11} strokeWidth={2.5} /> Copied!</>
                      : <><Copy size={11} strokeWidth={2} /> Copy address</>
                    }
                  </button>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div
              className="loc-card"
              style={{
                "--loc-grad": "linear-gradient(90deg,#f59e0b,#f97316)",
                "--loc-border": borderC,
                background: surfBg,
                border: `1px solid ${borderC}`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                padding: "22px 22px 20px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{
                  width: 34, height: 34,
                  borderRadius: 10,
                  background: "rgba(245,158,11,0.10)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Clock size={16} strokeWidth={1.75} color="#f59e0b" />
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "9.5px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#f59e0b",
                }}>
                  Working Hours
                </div>
              </div>

              <div style={{ "--loc-border": borderC }}>
                {HOURS.map(({ day, time, open }) => (
                  <div key={day} className="loc-hours-row" style={{ "--loc-border": borderC }}>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: textDim,
                      fontWeight: 400,
                    }}>
                      {day}
                    </span>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      color: open ? textPri : "#ef4444",
                      fontSize: "12.5px",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}>
                      <span style={{
                        width: 6, height: 6,
                        borderRadius: "50%",
                        background: open ? "#22c55e" : "#ef4444",
                        display: "inline-block",
                        flexShrink: 0,
                      }} />
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Directions button */}
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="loc-dir-btn"
              style={{ justifyContent: "center" }}
            >
              <Navigation size={15} strokeWidth={2} />
              Get Directions
              <ExternalLink size={13} strokeWidth={2} style={{ opacity: 0.7 }} />
            </a>

          </div>

          {/* ── RIGHT: Map ── */}
          <div
            className="loc-map-wrap"
            onMouseEnter={() => setMapHov(true)}
            onMouseLeave={() => setMapHov(false)}
            style={{
              border: `1px solid ${mapHov ? "rgba(14,165,233,0.40)" : borderC}`,
              boxShadow: mapHov
                ? "0 20px 56px rgba(0,0,0,0.12), 0 0 0 1px rgba(14,165,233,0.15)"
                : "0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
            }}
          >
            <iframe
              title="BK Offset Printing Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.623543258682!2d77.30097397549766!3d28.68163887564272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb9fa8843451%3A0x4d76d14b74785b08!2sZulfe%20Bengal%2C%20Dilshad%20Garden%2C%20Delhi%2C%20110095!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height={isMobile ? "300" : "450"}
              style={{
                border: "none",
                display: "block",
                filter: "saturate(1.1) contrast(1.02)",
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlay badge */}
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                bottom: 14, right: 14,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(2,6,23,0.80)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                color: "#fff",
                padding: "7px 14px",
                borderRadius: "999px",
                fontSize: "12px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(14,165,233,0.85)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(2,6,23,0.80)"; }}
            >
              <ExternalLink size={11} strokeWidth={2.5} />
              Open in Google Maps
            </a>
          </div>

        </div>
      </section>
    </>
  );
}