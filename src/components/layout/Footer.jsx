// Footer.jsx — Premium editorial footer for BK Offset Printing

import React, { useState } from "react";
import {
  Phone, MessageCircle, Mail,
  Facebook, Instagram, Youtube,
  MapPin, Clock, ArrowUpRight,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/Logo/BK_logo_png.png";

/**
 * Footer — Premium editorial footer for BK Offset Printing.
 * Consists of brand info, contact details (auth-gated), and location information.
 */
export function Footer({ isDark, isMobile }) {
  const { isAuthenticated } = useAuth();
  const [hov, setHov] = useState(null);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{FOOTER_STYLES}</style>

      {/* Top gradient separator bar */}
      <div className="ft-top-border" />

      <footer
        className="ft-root"
        style={styles.root(isMobile)}
      >
        <div style={styles.innerContainer}>
          {/* Main Grid: Brand, Contact, and Location columns */}
          <div style={styles.mainGrid(isMobile)}>
            
            {/* Column 1: Brand Identity & Social Links */}
            <div>
              <div style={styles.brandWrapper}>
                <img
                  className="ft-logo-img"
                  src={logo}
                  alt="BK Offset"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                <div>
                  <div className="ft-brand-name">BK Offset</div>
                  <div className="ft-brand-tagline">Printing Press · Since 1995</div>
                </div>
              </div>

              <p style={styles.brandDescription}>
                Delhi's trusted name for bulk book printing and premium lamination services — quality you can feel, precision you can count on.
              </p>

              {/* Social Media Links Row */}
              <div style={styles.socialRow}>
                {SOCIAL.map(({ key, href, Icon, hover, label }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="ft-social-btn"
                    style={styles.socialBtn(hov === key, hover)}
                    onMouseEnter={() => setHov(key)}
                    onMouseLeave={() => setHov(null)}
                  >
                    <Icon size={16} strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Contact Details — visible only to authenticated users */}
            <div>
              <div className="ft-section-head">Contact</div>

              {isAuthenticated ? (
                <div style={styles.contactList}>
                  <a href="tel:+919560959039" className="ft-contact-link">
                    <div className="ft-contact-link-icon" style={styles.iconBox("#0ea5e9")}>
                      <Phone size={14} strokeWidth={1.75} color="#0ea5e9" />
                    </div>
                    +91 95609 59039
                    <ArrowUpRight size={12} style={styles.arrowIcon} />
                  </a>
                  <a
                    href="https://wa.me/919560959039"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ft-contact-link"
                  >
                    <div className="ft-contact-link-icon" style={styles.iconBox("#25d366")}>
                      <MessageCircle size={14} strokeWidth={1.75} color="#25d366" />
                    </div>
                    WhatsApp
                    <ArrowUpRight size={12} style={styles.arrowIcon} />
                  </a>
                  <a href="mailto:rinkusharmarinku54@gmail.com" className="ft-contact-link">
                    <div className="ft-contact-link-icon" style={styles.iconBox("#6366f1")}>
                      <Mail size={14} strokeWidth={1.75} color="#6366f1" />
                    </div>
                    Email us
                    <ArrowUpRight size={12} style={styles.arrowIcon} />
                  </a>
                </div>
              ) : (
                <p style={styles.authPrompt}>
                  Sign in to view contact details and get in touch with our team.
                </p>
              )}
            </div>

            {/* Column 3: Physical Location & Business Hours */}
            <div>
              <div className="ft-section-head">Find Us</div>

              <div style={styles.infoStack}>
                <div className="ft-info-row">
                  <MapPin size={14} strokeWidth={1.75} className="ft-info-icon" color="#0ea5e9" style={styles.infoIconAlign} />
                  <span>
                    Street No. 2, Zulfe Bengal<br />
                    Dilshad Garden, Delhi — 110095
                  </span>
                </div>

                <div className="ft-info-row">
                  <Clock size={14} strokeWidth={1.75} className="ft-info-icon" color="#6366f1" style={styles.infoIconAlign} />
                  <span>
                    Mon – Sun: 9:00 AM – 7:00 PM<br />
                    Tuesday: Closed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright and Legal Disclaimers */}
          <div className="ft-bottom">
            <div>
              <div className="ft-copyright">
                © {currentYear} BK Offset Printing. All Rights Reserved.
              </div>
              <div className="ft-made-with" style={styles.accentText}>
                <span className="ft-dot" />
                Premium printing, Delhi
              </div>
            </div>
            
            {/* Legal Notice relating to authorship and commercial use */}
            <div className="ft-legal-notice">
              <p>© {currentYear} Keshav Sharma. All Rights Reserved.</p>
              <p>Unauthorized commercial use or brand impersonation is strictly prohibited.</p>
              <p style={styles.licenseInfo}>
                License: CC BY-NC 4.0 — Credit required, no commercial use allowed.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ─── Consolidated Styles ────────────────────────────────── */

const FOOTER_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  .ft-root {
    font-family: 'DM Sans', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .ft-root::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(14,165,233,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(14,165,233,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
  }

  .ft-root::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 120px;
    background: linear-gradient(to bottom, #020617, transparent);
    pointer-events: none;
  }

  .ft-logo-img {
    width: 52px;
    height: 52px;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(14,165,233,0.30);
    transition: transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease;
    display: block;
  }
  .ft-logo-img:hover {
    transform: scale(1.08) rotate(-3deg);
    box-shadow: 0 8px 28px rgba(14,165,233,0.50);
  }

  .ft-brand-name {
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: #f1f5f9;
    line-height: 1;
  }

  .ft-brand-tagline {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.30);
    margin-top: 4px;
  }

  .ft-section-head {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.28);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .ft-section-head::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.07);
  }

  .ft-info-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 13px;
    line-height: 1.65;
    color: rgba(255,255,255,0.48);
    transition: color 0.2s ease;
  }
  .ft-info-row:hover { color: rgba(255,255,255,0.70); }
  .ft-info-icon {
    margin-top: 2px;
    flex-shrink: 0;
    opacity: 0.55;
  }

  .ft-social-btn {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.09);
    color: rgba(255,255,255,0.45);
    text-decoration: none;
    transition:
      background   0.25s ease,
      border-color 0.25s ease,
      color        0.25s ease,
      transform    0.3s cubic-bezier(.34,1.56,.64,1),
      box-shadow   0.25s ease;
    cursor: pointer;
  }
  .ft-social-btn:hover {
    color: #fff;
    transform: translateY(-4px) scale(1.05);
  }

  .ft-contact-link {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    color: rgba(255,255,255,0.48);
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.03);
    transition:
      background   0.2s ease,
      border-color 0.2s ease,
      color        0.2s ease,
      transform    0.25s cubic-bezier(.22,1,.36,1);
  }
  .ft-contact-link:hover {
    color: rgba(255,255,255,0.85);
    background: rgba(255,255,255,0.07);
    border-color: rgba(14,165,233,0.30);
    transform: translateX(3px);
  }
  .ft-contact-link-icon {
    width: 28px;
    height: 28px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .ft-top-border {
    height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(14,165,233,0.40) 30%,
      rgba(99,102,241,0.40) 70%,
      transparent 100%
    );
    margin-bottom: 0;
  }

  .ft-bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .ft-copyright {
    font-size: 12px;
    color: rgba(255,255,255,0.25);
    letter-spacing: 0.02em;
    line-height: 1.6;
  }

  .ft-legal-notice {
    font-size: 11px;
    color: rgba(255,255,255,0.35);
    line-height: 1.5;
    max-width: 100%;
    padding: 10px 0 0;
    border-top: 1px dashed rgba(255,255,255,0.1);
    width: 100%;
  }

  .ft-legal-notice p {
    margin: 4px 0;
    opacity: 0.8;
  }

  .ft-made-with {
    font-size: 11px;
    color: rgba(255,255,255,0.18);
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .ft-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0ea5e9, #6366f1);
    display: inline-block;
    flex-shrink: 0;
  }

  @media (min-width: 640px) {
    .ft-bottom {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .ft-legal-notice {
      text-align: right;
      border-top: none;
      padding: 0;
    }
  }
`;

const styles = {
  root: (isMobile) => ({
    background: "#020617",
    color: "#cbd5e1",
    padding: isMobile ? "56px 22px 28px" : "72px 48px 32px",
  }),
  innerContainer: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1100,
    margin: "0 auto",
  },
  mainGrid: (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1.6fr 1fr 1fr",
    gap: isMobile ? 44 : 56,
    marginBottom: isMobile ? 40 : 56,
    alignItems: "start",
  }),
  brandWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    marginBottom: 18,
  },
  brandDescription: {
    fontSize: 13.5,
    lineHeight: 1.75,
    color: "rgba(255,255,255,0.38)",
    maxWidth: 280,
    marginBottom: 22,
  },
  socialRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  socialBtn: (isHov, hoverColor) => ({
    background: isHov ? `${hoverColor}22` : "rgba(255,255,255,0.06)",
    borderColor: isHov ? `${hoverColor}55` : "rgba(255,255,255,0.09)",
    color: isHov ? hoverColor : "rgba(255,255,255,0.45)",
    boxShadow: isHov ? `0 6px 18px ${hoverColor}33` : "none",
  }),
  contactList: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  iconBox: (color) => ({
    background: `${color}1e`,
  }),
  arrowIcon: {
    marginLeft: "auto",
    opacity: 0.4,
  },
  authPrompt: {
    fontSize: 13,
    color: "rgba(255,255,255,0.28)",
    lineHeight: 1.65,
  },
  infoStack: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  infoIconAlign: {
    marginTop: 3,
  },
  accentText: {
    marginTop: 4,
  },
  licenseInfo: {
    fontSize: "10px",
    opacity: 0.5,
    marginTop: 6,
  },
};

const SOCIAL = [
  { key: "fb",  href: "https://facebook.com",  Icon: Facebook,      hover: "#1877F2", label: "Facebook"  },
  { key: "ig",  href: "https://instagram.com", Icon: Instagram,     hover: "#E4405F", label: "Instagram" },
  { key: "yt",  href: "https://youtube.com/@b.k.offset?si=wwfxLPk27TfOcPa_",   Icon: Youtube,       hover: "#FF0000", label: "YouTube"   },
];
