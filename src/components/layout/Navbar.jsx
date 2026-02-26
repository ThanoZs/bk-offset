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

/* ─── Injected styles ───────────────────────────────────── */
const NAV_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  .nb-root {
    font-family: 'DM Sans', sans-serif;
  }

  /* ── Top accent bar ── */
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

  /* ── Logo hover ── */
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

  /* ── Icon button ── */
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

  /* ── Sign In button ── */
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

  /* ── Avatar pill ── */
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

  /* ── Dropdown ── */
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

  /* ── Divider in dropdown ── */
  .nb-sep {
    height: 1px;
    margin: 5px 8px;
  }

  /* ── Scrolled glow ── */
  .nb-scrolled-shadow {
    box-shadow: 0 1px 0 rgba(255,255,255,0.06),
                0 8px 32px rgba(0,0,0,0.18);
  }
`;

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
  const [showProfile,    setShowProfile]    = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    setShowProfile(false);
    setShowMobileMenu(false);
    logout();
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowProfile(false);
    setShowMobileMenu(false);
  };

  // ── Shared colour tokens
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
        style={{
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
        }}
      >
        {/* ── Logo ── */}
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

        {/* ── Right controls ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>

          {/* ── Not authenticated ── */}
          {!isAuthenticated ? (
            <>
              {/* Lang toggle */}
              <button
                className="nb-icon-btn"
                onClick={toggleLang}
                title={lang === "en" ? "हिंदी में बदलें" : "Switch to English"}
                style={{
                  color: dimCol,
                  border: `1px solid ${borderCol}`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = hoverBg; e.currentTarget.style.color = textCol; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = dimCol; }}
              >
                <Globe size={16} strokeWidth={1.75} />
              </button>

              {/* Theme toggle */}
              <button
                className="nb-icon-btn"
                onClick={toggleTheme}
                title={isDark ? "Light mode" : "Dark mode"}
                style={{
                  color: dimCol,
                  border: `1px solid ${borderCol}`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = hoverBg; e.currentTarget.style.color = textCol; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = dimCol; }}
              >
                {isDark
                  ? <Sun  size={16} strokeWidth={1.75} />
                  : <Moon size={16} strokeWidth={1.75} />}
              </button>

              {/* Spacer rule */}
              <div style={{ width: 1, height: 22, background: borderCol, margin: "0 4px" }} />

              {/* Sign In */}
              <button className="nb-signin" onClick={onAuthClick}>
                <User size={14} strokeWidth={2} />
                Sign In
              </button>
            </>
          ) : (
            <>
              {/* ── Authenticated ── */}

              {/* Avatar pill */}
              <div style={{ position: "relative" }}>
                <button
                  className="nb-avatar-pill"
                  onClick={() => { setShowProfile(!showProfile); setShowMobileMenu(false); }}
                  style={{
                    border: `1px solid ${showProfile ? "rgba(14,165,233,0.40)" : borderCol}`,
                    background: showProfile ? hoverBg : "transparent",
                    color: textCol,
                  }}
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
                    style={{
                      color: dimCol,
                      transform: showProfile ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  />
                </button>

                {showProfile && (
                  <>
                    <div style={{ position: "fixed", inset: 0, zIndex: 1999 }}
                      onClick={() => setShowProfile(false)} />
                    <div
                      className="nb-dropdown"
                      style={{ background: dropdownBg, border: `1px solid ${dropBorder}`, boxShadow: dropShadow }}
                    >
                      {/* User info header */}
                      <div style={{
                        padding: "14px 16px 12px",
                        borderBottom: `1px solid ${dropBorder}`,
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                          <div className="nb-avatar-ring" style={{ width: 34, height: 34, fontSize: 13 }}>
                            {user?.firstName?.charAt(0)?.toUpperCase() || "U"}
                          </div>
                          <div>
                            <div style={{ fontSize: 13.5, fontWeight: 600, color: textCol, lineHeight: 1.2 }}>
                              {user?.firstName} {user?.lastName}
                            </div>
                            <div style={{ fontSize: 11, color: dimCol, marginTop: 2 }}>{user?.email}</div>
                          </div>
                        </div>
                      </div>

                      <div style={{ padding: "6px 6px" }}>
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

              {/* Divider */}
              <div style={{ width: 1, height: 22, background: borderCol, margin: "0 2px" }} />

              {/* Menu button */}
              <div style={{ position: "relative" }}>
                <button
                  className="nb-icon-btn"
                  onClick={() => { setShowMobileMenu(!showMobileMenu); setShowProfile(false); }}
                  style={{
                    color: showMobileMenu ? textCol : dimCol,
                    border: `1px solid ${showMobileMenu ? "rgba(14,165,233,0.40)" : borderCol}`,
                    background: showMobileMenu ? hoverBg : "transparent",
                  }}
                >
                  {showMobileMenu
                    ? <X    size={17} strokeWidth={2} />
                    : <Menu size={17} strokeWidth={2} />}
                </button>

                {showMobileMenu && (
                  <>
                    <div style={{ position: "fixed", inset: 0, zIndex: 1999 }}
                      onClick={() => setShowMobileMenu(false)} />
                    <div
                      className="nb-dropdown"
                      style={{
                        background: dropdownBg,
                        border: `1px solid ${dropBorder}`,
                        boxShadow: dropShadow,
                        padding: "6px 6px",
                      }}
                    >
                      {/* Lang */}
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

                      {/* Theme */}
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

                      {/* Divider */}
                      <div className="nb-sep" style={{ background: dropBorder }} />

                      {/* Logout */}
                      <button
                        className="nb-dropdown-btn"
                        style={{ color: "#ef4444" }}
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