// Navbar.jsx — Premium editorial navbar for BK Offset Printing

import React, { useState } from "react";
import {
  Globe,
  Sun,
  Moon,
  User,
  LogOut,
  Menu,
  X,
  UserCircle,
  ChevronDown,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/Logo/BK_logo_png.png";

/**
 * Navbar — Premium editorial navbar for BK Offset Printing.
 * Features theme toggling, language switching, and user authentication state management.
 */
export function Navbar({
  isDark,
  toggleTheme,
  lang,
  toggleLang,
  text,
  onAuthClick,
  scrolled,
}) {
  const { user, logout, isAuthenticated } = useAuth();
  
  // Local state for UI toggles
  const [showProfile,    setShowProfile]    = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  /**
   * handleLogout — Cleans up UI state and triggers auth logout.
   */
  const handleLogout = () => {
    setShowProfile(false);
    setShowMobileMenu(false);
    logout();
  };

  /**
   * handleLogoClick — Scrolls to top and closes open menus.
   */
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowProfile(false);
    setShowMobileMenu(false);
  };

  // ── Shared colour tokens for dynamic styling
  const borderCol = isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)";
  const textCol   = isDark ? "rgba(255,255,255,0.92)" : "#0f172a";
  const dimCol    = isDark ? "rgba(255,255,255,0.45)" : "#64748b";
  const hoverBg   = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.045)";

  const dropdownBg  = isDark ? "#0f172a" : "#ffffff";
  const dropBorder  = isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.08)";
  const dropShadow  = isDark
    ? "0 20px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)"
    : "0 16px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)";

  return (
    <>
      <style>{NAV_STYLES}</style>

      <nav
        className={`nb-root${scrolled ? " nb-scrolled-shadow" : ""}`}
        style={styles.nav(isDark, scrolled, borderCol)}
      >
        {/* ── Brand Logo & Identity ── */}
        <div className="nb-logo" onClick={handleLogoClick} role="button" tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleLogoClick()}>
          <img
            className="nb-logo-img"
            src={logo}
            alt="BK Offset"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <div>
            <div className="nb-brand-name" style={{ color: textCol }}>
              BK Offset
            </div>
            <div className="nb-brand-sub" style={{ color: dimCol }}>
              Printing Press
            </div>
          </div>
        </div>

        {/* ── Navigation Header Controls ── */}
        <div style={styles.controlsWrapper}>

          {/* ── Public Visitor Controls ── */}
          {!isAuthenticated ? (
            <>
              {/* Language Selector */}
              <button
                className="nb-icon-btn"
                onClick={toggleLang}
                title={lang === "en" ? "हिंदी में बदलें" : "Switch to English"}
                style={styles.iconBtn(borderCol, dimCol)}
                onMouseEnter={(e) => { e.currentTarget.style.background = hoverBg; e.currentTarget.style.color = textCol; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = dimCol; }}
              >
                <Globe size={16} strokeWidth={1.75} />
              </button>

              {/* Visual Theme Selector */}
              <button
                className="nb-icon-btn"
                onClick={toggleTheme}
                title={isDark ? "Light mode" : "Dark mode"}
                style={styles.iconBtn(borderCol, dimCol)}
                onMouseEnter={(e) => { e.currentTarget.style.background = hoverBg; e.currentTarget.style.color = textCol; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = dimCol; }}
              >
                {isDark
                  ? <Sun  size={16} strokeWidth={1.75} />
                  : <Moon size={16} strokeWidth={1.75} />}
              </button>

              {/* Visual Divider */}
              <div style={styles.verticalDivider(borderCol)} />

              {/* Login / Authentication Trigger */}
              <button className="nb-signin" onClick={onAuthClick}>
                <User size={14} strokeWidth={2} />
                Sign In
              </button>
            </>
          ) : (
            <>
              {/* ── Authenticated User Layout ── */}

              {/* Desktop Profile Pill */}
              <div style={styles.relativeBlock}>
                <button
                  className="nb-avatar-pill"
                  onClick={() => { setShowProfile(!showProfile); setShowMobileMenu(false); }}
                  style={styles.avatarPill(showProfile, borderCol, hoverBg, textCol)}
                >
                  <div className="nb-avatar-ring">
                    {user?.firstName?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                  <span className="nb-avatar-name" style={{ color: textCol }}>
                    {user?.firstName || "User"}
                  </span>
                  <ChevronDown
                    size={13}
                    strokeWidth={2}
                    style={styles.chevronIcon(showProfile, dimCol)}
                  />
                </button>

                {/* Profile Overview Dropdown */}
                {showProfile && (
                  <>
                    <div style={styles.dropdownOverlay} onClick={() => setShowProfile(false)} />
                    <div
                      className="nb-dropdown"
                      style={styles.dropdown(dropdownBg, dropBorder, dropShadow)}
                    >
                      {/* User Metadata Header */}
                      <div style={styles.dropdownHeader(dropBorder)}>
                        <div style={styles.dropdownHeaderContent}>
                          <div className="nb-avatar-ring" style={styles.dropdownAvatar}>
                            {user?.firstName?.charAt(0)?.toUpperCase() || "U"}
                          </div>
                          <div>
                            <div style={styles.dropdownUserName(textCol)}>
                              {user?.firstName} {user?.lastName}
                            </div>
                            <div style={styles.dropdownUserEmail(dimCol)}>{user?.email}</div>
                          </div>
                        </div>
                      </div>

                      {/* Dropdown Action Links */}
                      <div style={styles.dropdownPadding}>
                        <button
                          className="nb-dropdown-btn"
                          style={{ color: textCol }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = hoverBg; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
                          onClick={() => setShowProfile(false)}
                        >
                          <UserCircle size={16} strokeWidth={1.75} color="#0ea5e9" />
                          View Profile
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Visual Divider for Mobile/Desktop differentiation */}
              <div style={styles.mobileDivider(borderCol)} />

              {/* Unified Hamburger / Mobile Action Menu */}
              <div style={styles.relativeBlock}>
                <button
                  className="nb-icon-btn"
                  onClick={() => { setShowMobileMenu(!showMobileMenu); setShowProfile(false); }}
                  style={styles.menuTrigger(showMobileMenu, textCol, dimCol, borderCol, hoverBg)}
                >
                  {showMobileMenu
                    ? <X    size={17} strokeWidth={2} />
                    : <Menu size={17} strokeWidth={2} />}
                </button>

                {showMobileMenu && (
                  <>
                    <div style={styles.dropdownOverlay} onClick={() => setShowMobileMenu(false)} />
                    <div
                      className="nb-dropdown"
                      style={styles.mobileMenuDropdown(dropdownBg, dropBorder, dropShadow)}
                    >
                      {/* Interactive Preferences */}
                      <button
                        className="nb-dropdown-btn"
                        style={{ color: textCol }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = hoverBg; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
                        onClick={() => { toggleLang(); setShowMobileMenu(false); }}
                      >
                        <Globe size={15} strokeWidth={1.75} color="#0ea5e9" />
                        {lang === "en" ? "हिंदी में बदलें" : "Switch to English"}
                      </button>

                      <button
                        className="nb-dropdown-btn"
                        style={{ color: textCol }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = hoverBg; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
                        onClick={() => { toggleTheme(); setShowMobileMenu(false); }}
                      >
                        {isDark
                          ? <Sun  size={15} strokeWidth={1.75} color="#f59e0b" />
                          : <Moon size={15} strokeWidth={1.75} color="#6366f1" />}
                        {isDark ? "Light Mode" : "Dark Mode"}
                      </button>

                      {/* Component Break */}
                      <div className="nb-sep" style={{ background: dropBorder }} />

                      {/* Final Account Control */}
                      <button
                        className="nb-dropdown-btn"
                        style={styles.logoutBtn}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(239,68,68,0.07)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
                        onClick={handleLogout}
                      >
                        <LogOut size={15} strokeWidth={1.75} color="#ef4444" />
                        Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

/* ─── Consolidated Styles ────────────────────────────────── */

const NAV_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  .nb-root {
    font-family: 'DM Sans', sans-serif;
  }

  .nb-root::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #0ea5e9, #6366f1, #0ea5e9);
    background-size: 200% 100%;
    animation: nb-bar-flow 4s linear infinite;
    opacity: 0.9;
  }

  @keyframes nb-bar-flow {
    0%   { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  .nb-logo {
    display: flex;
    align-items: center;
    gap: 11px;
    cursor: pointer;
    transition: opacity 0.2s ease;
    text-decoration: none;
  }
  .nb-logo:hover { opacity: 0.78; }

  .nb-logo-img {
    width: 38px;
    height: 38px;
    object-fit: contain;
    border-radius: 9px;
    box-shadow: 0 4px 14px rgba(14,165,233,0.32);
    transition: box-shadow 0.3s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1);
    flex-shrink: 0;
  }
  .nb-logo:hover .nb-logo-img {
    box-shadow: 0 6px 20px rgba(14,165,233,0.50);
    transform: scale(1.06) rotate(-2deg);
  }

  .nb-brand-name {
    font-family: 'DM Sans', sans-serif;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1;
  }
  .nb-brand-sub {
    font-family: 'DM Sans', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-top: 3px;
    opacity: 0.42;
  }

  .nb-icon-btn {
    width: 36px;
    height: 36px;
    border-radius: 9px;
    border: 1px solid transparent;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition:
      background  0.2s ease,
      border-color 0.2s ease,
      transform   0.2s cubic-bezier(.34,1.56,.64,1),
      color       0.2s ease;
    flex-shrink: 0;
  }
  .nb-icon-btn:hover {
    transform: translateY(-1px);
  }

  .nb-signin {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    font-weight: 600;
    letter-spacing: 0.01em;
    padding: 9px 20px;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    background: linear-gradient(135deg, #0ea5e9, #6366f1);
    color: #fff;
    box-shadow: 0 4px 14px rgba(14,165,233,0.28);
    transition:
      transform   0.25s cubic-bezier(.34,1.56,.64,1),
      box-shadow  0.25s ease;
  }
  .nb-signin:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(14,165,233,0.40);
  }
  .nb-signin:active { transform: scale(0.97); }

  .nb-avatar-pill {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 4px 12px 4px 4px;
    border-radius: 999px;
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;
    transition:
      background  0.2s ease,
      border-color 0.2s ease;
    font-family: 'DM Sans', sans-serif;
  }

  .nb-avatar-ring {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0ea5e9, #6366f1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0;
    flex-shrink: 0;
  }

  .nb-avatar-name {
    font-size: 13.5px;
    font-weight: 500;
  }

  .nb-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    border-radius: 14px;
    overflow: hidden;
    min-width: 200px;
    animation: nb-drop-in 0.2s cubic-bezier(.22,1,.36,1) both;
    z-index: 2001;
  }

  @keyframes nb-drop-in {
    from { opacity: 0; transform: translateY(-8px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .nb-dropdown-btn {
    width: 100%;
    padding: 11px 14px;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 11px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    font-weight: 400;
    text-align: left;
    cursor: pointer;
    border-radius: 8px;
    transition: background 0.15s ease;
  }

  .nb-sep {
    height: 1px;
    margin: 5px 8px;
  }

  .nb-scrolled-shadow {
    box-shadow: 0 1px 0 rgba(255,255,255,0.06),
                0 8px 32px rgba(0,0,0,0.18);
  }
`;

const styles = {
  nav: (isDark, scrolled, borderCol) => ({
    position: "sticky",
    top: 0,
    zIndex: 2000,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 28px",
    height: 60,
    background: isDark
      ? "rgba(2,6,23,0.92)"
      : "rgba(255,255,255,0.92)",
    backdropFilter: "blur(18px) saturate(1.5)",
    WebkitBackdropFilter: "blur(18px) saturate(1.5)",
    borderBottom: `1px solid ${scrolled ? borderCol : "transparent"}`,
    transition: "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
  }),
  controlsWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  iconBtn: (borderCol, dimCol) => ({
    color: dimCol,
    border: `1px solid ${borderCol}`,
  }),
  verticalDivider: (borderCol) => ({
    width: 1,
    height: 22,
    background: borderCol,
    margin: "0 4px",
  }),
  relativeBlock: {
    position: "relative",
  },
  avatarPill: (showProfile, borderCol, hoverBg, textCol) => ({
    border: `1px solid ${showProfile ? "rgba(14,165,233,0.40)" : borderCol}`,
    background: showProfile ? hoverBg : "transparent",
    color: textCol,
  }),
  chevronIcon: (showProfile, dimCol) => ({
    color: dimCol,
    transform: showProfile ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.25s ease",
  }),
  dropdownOverlay: {
    position: "fixed",
    inset: 0,
    zIndex: 1999,
  },
  dropdown: (dropdownBg, dropBorder, dropShadow) => ({
    background: dropdownBg,
    border: `1px solid ${dropBorder}`,
    boxShadow: dropShadow,
  }),
  dropdownHeader: (dropBorder) => ({
    padding: "14px 16px 12px",
    borderBottom: `1px solid ${dropBorder}`,
  }),
  dropdownHeaderContent: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 6,
  },
  dropdownAvatar: {
    width: 34,
    height: 34,
    fontSize: 13,
  },
  dropdownUserName: (textCol) => ({
    fontSize: 13.5,
    fontWeight: 600,
    color: textCol,
    lineHeight: 1.2,
  }),
  dropdownUserEmail: (dimCol) => ({
    fontSize: 11,
    color: dimCol,
    marginTop: 2,
  }),
  dropdownPadding: {
    padding: "6px 6px",
  },
  mobileDivider: (borderCol) => ({
    width: 1,
    height: 22,
    background: borderCol,
    margin: "0 2px",
  }),
  menuTrigger: (showMobileMenu, textCol, dimCol, borderCol, hoverBg) => ({
    color: showMobileMenu ? textCol : dimCol,
    border: `1px solid ${showMobileMenu ? "rgba(14,165,233,0.40)" : borderCol}`,
    background: showMobileMenu ? hoverBg : "transparent",
  }),
  mobileMenuDropdown: (dropdownBg, dropBorder, dropShadow) => ({
    background: dropdownBg,
    border: `1px solid ${dropBorder}`,
    boxShadow: dropShadow,
    padding: "6px 6px",
  }),
  logoutBtn: {
    color: "#ef4444",
  },
};