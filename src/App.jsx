import React, { useState, useEffect } from "react";
import {
  Printer, Phone, MessageCircle, MapPin, Sun, Moon, Globe,
  Sparkles, Award, Clock, Mail, Facebook, Instagram,
  User, LogOut, Eye, EyeOff, ChevronLeft, X,
  Zap, Layers, Leaf, Recycle
} from "lucide-react";
import './App.css';

/* ─────────────────────────────────────────────
   DESIGN TOKENS  (single source of truth)
   ───────────────────────────────────────────── */
const T = {
  // Primary palette — deep-sky / cyan family
  primary:      "#0ea5e9", // sky-500
  primaryDark:  "#0284c7", // sky-600
  primaryLight: "#38bdf8", // sky-400
  primaryGlow:  "rgba(14, 165, 233, 0.35)",
  primaryFaint: "rgba(14, 165, 233, 0.08)",

  // Accent — teal for CTAs / highlights
  accent:       "#06b6d4", // cyan-500
  accentDark:   "#0891b2",

  // Success (WhatsApp green)
  green:        "#16a34a",
  greenLight:   "#22c55e",

  // Danger / Logout
  red:          "#ef4444",

  // Gradient helpers
  grad:         "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",
  gradHero:     "linear-gradient(135deg, #0369a1 0%, #0891b2 100%)",

  // Light theme
  bgLight:      "#ffffff",
  surfLight:    "#f0f9ff",   // sky-50
  surfLight2:   "#e0f2fe",   // sky-100
  borderLight:  "#cbd5e1",   // slate-300
  textLight:    "#0f172a",   // slate-900
  textMidLight:"#475569",    // slate-600
  textDimLight:"#94a3b8",    // slate-400

  // Dark theme
  bgDark:       "#020617",   // slate-950
  surfDark:     "#0f172a",   // slate-900
  surfDark2:    "#1e293b",   // slate-800
  borderDark:   "#334155",   // slate-700
  textDark:     "#f1f5f9",   // slate-100
  textMidDark:  "#94a3b8",   // slate-400
  textDimDark:  "#64748b",   // slate-500

  // Typography
  fontDisplay: "'DM Sans', 'Inter', system-ui, sans-serif",
  fontBody:    "'DM Sans', 'Inter', system-ui, sans-serif",

  // Radius
  radiusSm:    "6px",
  radiusMd:    "10px",
  radiusLg:    "14px",
  radiusXl:    "20px",
  radiusCard:  "16px",

  // Shadows
  shadowSm:    "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
  shadowMd:    "0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.06)",
  shadowLg:    "0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)",
  shadowXl:    "0 20px 48px rgba(0,0,0,0.14), 0 8px 16px rgba(0,0,0,0.08)",
};

/* ─────────────────────────────────────────────
   THEME HELPER
   ───────────────────────────────────────────── */
const th = (isDark) => ({
  bg:        isDark ? T.bgDark        : T.bgLight,
  surf:      isDark ? T.surfDark      : T.surfLight,
  surf2:     isDark ? T.surfDark2     : T.surfLight2,
  border:    isDark ? T.borderDark    : T.borderLight,
  text:      isDark ? T.textDark      : T.textLight,
  textMid:   isDark ? T.textMidDark   : T.textMidLight,
  textDim:   isDark ? T.textDimDark   : T.textDimLight,
});


/* ═══════════════════════════════════════════════
   AUTH  MODAL
   ═══════════════════════════════════════════════ */
function Auth({ isDark, onAuthComplete }) {
  const [isLogin, setIsLogin]       = useState(true);
  const [showPw, setShowPw]         = useState(false);
  const [formData, setFormData]     = useState({
    firstName: "", lastName: "", email: "", mobile: "", company: "", password: "", confirmPassword: ""
  });

  const c = th(isDark);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("bk_user", JSON.stringify({
      firstName: formData.firstName,
      lastName:  formData.lastName,
      email:     formData.email,
      isAuthenticated: true
    }));
    onAuthComplete();
  };

  const handleGoogleAuth = () => {
    localStorage.setItem("bk_user", JSON.stringify({
      firstName: "Google", lastName: "User", email: "google@example.com", isAuthenticated: true
    }));
    onAuthComplete();
  };

  /* shared input style */
  const inputStyle = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: T.radiusMd,
    border: `1px solid ${c.border}`,
    background: c.surf,
    color: c.text,
    fontSize: "14px",
    fontFamily: T.fontBody,
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    marginBottom: "6px",
    color: c.textMid,
    letterSpacing: "0.3px",
  };

  return (
    <div style={{
      position: "fixed", inset: 0,
      background: isDark ? "rgba(2,6,23,0.88)" : "rgba(15,23,42,0.55)",
      backdropFilter: "blur(12px)",
      zIndex: 2000,
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "20px",
    }}>
      <div style={{
        background: c.bg,
        borderRadius: T.radiusXl,
        padding: isLogin ? "40px 36px 36px" : "40px 44px 40px",
        width: "100%",
        maxWidth: isLogin ? "420px" : "720px",
        boxShadow: T.shadowXl,
        border: `1px solid ${c.border}`,
        position: "relative",
        transition: "max-width 0.35s cubic-bezier(.4,0,.2,1), padding 0.35s cubic-bezier(.4,0,.2,1)",
      }}>
        {/* back button */}
        <button
          onClick={() => onAuthComplete(false)}
          style={{
            position: "absolute", top: "18px", left: "18px",
            background: "none", border: "none",
            color: c.textDim, cursor: "pointer",
            display: "flex", alignItems: "center", gap: "4px",
            fontSize: "13px", fontWeight: 600,
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = T.primary)}
          onMouseLeave={e => (e.currentTarget.style.color = c.textDim)}
        >
          <ChevronLeft size={16} /> Back
        </button>

        {/* logo + title */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            background: T.grad,
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 16px",
            boxShadow: `0 6px 20px ${T.primaryGlow}`,
          }}>
            <User size={22} color="#fff" />
          </div>
          <h2 style={{ fontSize: "22px", fontWeight: 700, color: c.text, margin: 0 }}>
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p style={{ color: c.textDim, fontSize: "13px", marginTop: "6px", margin: "6px 0 0" }}>
            {isLogin ? "Sign in to continue" : "Fill in the details below"}
          </p>
        </div>

        {/* Google button */}
        <button
          onClick={handleGoogleAuth}
          style={{
            width: "100%", padding: "11px",
            borderRadius: T.radiusMd,
            border: `1px solid ${c.border}`,
            background: c.surf,
            color: c.text,
            display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
            cursor: "pointer", fontWeight: 600, fontSize: "14px",
            transition: "all 0.2s",
            fontFamily: T.fontBody,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = c.surf2; e.currentTarget.style.borderColor = T.primary; }}
          onMouseLeave={e => { e.currentTarget.style.background = c.surf; e.currentTarget.style.borderColor = c.border; }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        {/* divider */}
        <div style={{ display: "flex", alignItems: "center", margin: "18px 0", gap: "12px" }}>
          <div style={{ flex: 1, height: "1px", background: c.border }} />
          <span style={{ color: c.textDim, fontSize: "13px", fontWeight: 600 }}>or</span>
          <div style={{ flex: 1, height: "1px", background: c.border }} />
        </div>

        {/* form */}
        <form onSubmit={handleSubmit}>

          {/* ── REGISTER layout: two-column grid ── */}
          {!isLogin && (
            <>
              {/* Row 1: First Name | Last Name */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                <div>
                  <label style={labelStyle}>First Name *</label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange}
                    placeholder="John" style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = T.primary; e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`; }}
                    onBlur  ={e => { e.target.style.borderColor = c.border; e.target.style.boxShadow = "none"; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Last Name *</label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange}
                    placeholder="Doe" style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = T.primary; e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`; }}
                    onBlur  ={e => { e.target.style.borderColor = c.border; e.target.style.boxShadow = "none"; }}
                  />
                </div>
              </div>

              {/* Row 2: Company | Mobile */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                <div>
                  <label style={labelStyle}>Company Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange}
                    placeholder="Your Company" style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = T.primary; e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`; }}
                    onBlur  ={e => { e.target.style.borderColor = c.border; e.target.style.boxShadow = "none"; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Mobile Number *</label>
                  <input type="tel" name="mobile" required value={formData.mobile} onChange={handleChange}
                    placeholder="+91 99999 88888" style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = T.primary; e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`; }}
                    onBlur  ={e => { e.target.style.borderColor = c.border; e.target.style.boxShadow = "none"; }}
                  />
                </div>
              </div>

              {/* Row 3: Email | Password */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange}
                    placeholder="john@example.com" style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = T.primary; e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`; }}
                    onBlur  ={e => { e.target.style.borderColor = c.border; e.target.style.boxShadow = "none"; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Password *</label>
                  <div style={{ position: "relative" }}>
                    <input type={showPw ? "text" : "password"} name="password" required value={formData.password} onChange={handleChange}
                      placeholder="••••••••" style={{ ...inputStyle, paddingRight: "42px" }}
                      onFocus={e => { e.target.style.borderColor = T.primary; e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`; }}
                      onBlur  ={e => { e.target.style.borderColor = c.border; e.target.style.boxShadow = "none"; }}
                    />
                    <button type="button" onClick={() => setShowPw(!showPw)}
                      style={{
                        position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
                        background: "none", border: "none", color: c.textDim, cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = T.primary)}
                      onMouseLeave={e => (e.currentTarget.style.color = c.textDim)}
                    >
                      {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Row 4: Confirm Password — full width */}
              <div style={{ marginBottom: "22px" }}>
                <label style={labelStyle}>Confirm Password *</label>
                <input type="password" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange}
                  placeholder="••••••••" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = T.primary; e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`; }}
                  onBlur  ={e => { e.target.style.borderColor = c.border; e.target.style.boxShadow = "none"; }}
                />
              </div>
            </>
          )}

          {/* ── LOGIN layout: single column ── */}
          {isLogin && (
            <>
              <div style={{ marginBottom: "14px" }}>
                <label style={labelStyle}>Email Address *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange}
                  placeholder="john@example.com" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = T.primary; e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`; }}
                  onBlur  ={e => { e.target.style.borderColor = c.border; e.target.style.boxShadow = "none"; }}
                />
              </div>
              <div style={{ marginBottom: "22px" }}>
                <label style={labelStyle}>Password *</label>
                <div style={{ position: "relative" }}>
                  <input type={showPw ? "text" : "password"} name="password" required value={formData.password} onChange={handleChange}
                    placeholder="••••••••" style={{ ...inputStyle, paddingRight: "42px" }}
                    onFocus={e => { e.target.style.borderColor = T.primary; e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`; }}
                    onBlur  ={e => { e.target.style.borderColor = c.border; e.target.style.boxShadow = "none"; }}
                  />
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    style={{
                      position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
                      background: "none", border: "none", color: c.textDim, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = T.primary)}
                    onMouseLeave={e => (e.currentTarget.style.color = c.textDim)}
                  >
                    {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </>
          )}


          <button type="submit" style={{
            width: "100%", padding: "12px",
            borderRadius: T.radiusMd, border: "none",
            background: T.grad, color: "#fff",
            fontWeight: 700, fontSize: "15px",
            cursor: "pointer", fontFamily: T.fontBody,
            boxShadow: `0 4px 16px ${T.primaryGlow}`,
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${T.primaryGlow}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)";  e.currentTarget.style.boxShadow = `0 4px 16px ${T.primaryGlow}`; }}
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        {/* toggle login/register */}
        <p style={{ textAlign: "center", marginTop: "20px", fontSize: "13px", color: c.textDim, margin: "20px 0 0" }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} style={{
            background: "none", border: "none", color: T.primary,
            cursor: "pointer", fontWeight: 600, fontSize: "13px", padding: 0,
            transition: "color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = T.primaryDark)}
            onMouseLeave={e => (e.currentTarget.style.color = T.primary)}
          >
            {isLogin ? "Register" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════════
   FLOATING SOCIAL  ICONS
   ═══════════════════════════════════════════════ */
function SocialMediaIcons({ isDark, isAuthenticated }) {
  const [hov, setHov] = useState(null);
  const c = th(isDark);

  const links = [
    { icon: <Mail size={18} />,      href: "mailto:info@bkoffsetprinting.com", label: "Email",     show: isAuthenticated },
    { icon: <Facebook size={18} />,  href: "https://facebook.com",            label: "Facebook" },
    { icon: <Instagram size={18} />, href: "https://instagram.com",           label: "Instagram" },
  ];

  return (
    <div style={{
      position: "fixed", bottom: "28px", right: "28px",
      display: "flex", flexDirection: "column", gap: "10px", zIndex: 100,
    }}>
      {links.filter(l => l.show !== false).map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
          aria-label={link.label}
          onMouseEnter={() => setHov(link.label)}
          onMouseLeave={() => setHov(null)}
          style={{
            width: "46px", height: "46px", borderRadius: "50%",
            background: hov === link.label ? T.grad : c.surf,
            color:      hov === link.label ? "#fff" : c.textMid,
            display: "flex", alignItems: "center", justifyContent: "center",
            textDecoration: "none",
            border: `1px solid ${hov === link.label ? "transparent" : c.border}`,
            boxShadow: hov === link.label ? `0 6px 20px ${T.primaryGlow}` : T.shadowSm,
            transform: hov === link.label ? "translateY(-3px) scale(1.08)" : "scale(1)",
            transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
            position: "relative",
          }}
        >
          {link.icon}
          {/* tooltip */}
          <span style={{
            position: "absolute", right: "calc(100% + 10px)", top: "50%", transform: "translateY(-50%)",
            background: isDark ? T.surfDark2 : T.textLight,
            color: "#fff", padding: "5px 10px", borderRadius: T.radiusSm,
            fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap",
            opacity: hov === link.label ? 1 : 0, pointerEvents: "none",
            transition: "opacity 0.2s",
          }}>
            {link.label}
            <span style={{
              position: "absolute", left: "100%", top: "50%", transform: "translateY(-50%)",
              borderLeft: `5px solid ${isDark ? T.surfDark2 : T.textLight}`,
              borderTop: "5px solid transparent", borderBottom: "5px solid transparent",
            }} />
          </span>
        </a>
      ))}
    </div>
  );
}


/* ═══════════════════════════════════════════════
   USER  PROFILE  DROPDOWN
   ═══════════════════════════════════════════════ */
function UserProfile({ user, isDark, onLogout, onEdit }) {
  const [open, setOpen] = useState(false);
  const c = th(isDark);

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)} style={{
        display: "flex", alignItems: "center", gap: "8px",
        background: "none", border: "none", color: c.text,
        cursor: "pointer", padding: "6px 10px", borderRadius: T.radiusMd,
        transition: "background 0.2s",
      }}
        onMouseEnter={e => (e.currentTarget.style.background = T.primaryFaint)}
        onMouseLeave={e => (e.currentTarget.style.background = "none")}
      >
        <div style={{
          width: "34px", height: "34px", borderRadius: "50%",
          background: T.grad, display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontSize: "14px", fontWeight: 700,
          boxShadow: `0 3px 10px ${T.primaryGlow}`,
        }}>
          {user?.firstName?.charAt(0) || "U"}
        </div>
        <span style={{ fontSize: "14px", fontWeight: 600 }}>Hi, {user?.firstName || "User"}</span>
      </button>

      {open && (
        <>
          <div style={{ position: "fixed", inset: 0, zIndex: 999 }} onClick={() => setOpen(false)} />
          <div style={{
            position: "absolute", top: "calc(100% + 8px)", right: 0,
            background: c.bg, borderRadius: T.radiusLg,
            minWidth: "210px", boxShadow: T.shadowLg,
            border: `1px solid ${c.border}`, zIndex: 1000, overflow: "hidden",
          }}>
            {/* user info header */}
            <div style={{ padding: "14px 16px", borderBottom: `1px solid ${c.border}`, background: c.surf }}>
              <div style={{ fontWeight: 700, fontSize: "14px", color: c.text }}>{user?.firstName} {user?.lastName}</div>
              <div style={{ fontSize: "12px", color: c.textDim, marginTop: "3px" }}>{user?.email}</div>
            </div>
            {/* actions */}
            {[
              { label: "Edit Profile", icon: <User size={15} />, onClick: onEdit, color: c.text },
              { label: "Logout",       icon: <LogOut size={15} />, onClick: onLogout, color: T.red },
            ].map((item) => (
              <button key={item.label} onClick={item.onClick} style={{
                width: "100%", padding: "10px 16px", background: "none", border: "none",
                textAlign: "left", color: item.color, cursor: "pointer",
                fontSize: "14px", fontWeight: 500,
                display: "flex", alignItems: "center", gap: "10px",
                transition: "background 0.15s",
                fontFamily: T.fontBody,
              }}
                onMouseEnter={e => (e.currentTarget.style.background = T.primaryFaint)}
                onMouseLeave={e => (e.currentTarget.style.background = "none")}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}


/* ═══════════════════════════════════════════════
   MAIN  APP
   ═══════════════════════════════════════════════ */
export default function App() {
  const phoneNumber  = "+91-99999-88888";
  const whatsappLink = "https://wa.me/919999988888";

  const [theme, setTheme]           = useState("light");
  const [lang, setLang]             = useState("en");
  const [scrolled, setScrolled]     = useState(false);
  const [showAuth, setShowAuth]     = useState(false);
  const [user, setUser]             = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("bk_user");
    if (savedUser) setUser(JSON.parse(savedUser));

    setTheme(sessionStorage.getItem("bk_theme") || "light");
    setLang(sessionStorage.getItem("bk_lang")   || "en");

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    setTheme(t); sessionStorage.setItem("bk_theme", t);
  };
  const toggleLang = () => {
    const l = lang === "en" ? "hi" : "en";
    setLang(l); sessionStorage.setItem("bk_lang", l);
  };

  const handleAuthComplete = (success = true) => {
    if (success) {
      const saved = localStorage.getItem("bk_user");
      if (saved) setUser(JSON.parse(saved));
    }
    setShowAuth(false);
  };
  const handleLogout = () => { localStorage.removeItem("bk_user"); setUser(null); };

  const isDark = theme === "dark";
  const c      = th(isDark);
  const isAuth = !!user;

  const text = {
    en: {
      heroTitle: "Classic Printing.", heroTitle2: "Modern Precision.",
      heroSub: "Trusted printing & finishing services in Delhi since 1995",
      products: "Our Products", gallery: "Our Machines", visit: "Visit Our Press",
      quality: "Premium Quality",    qualityDesc: "Every print meets the highest standards",
      experience: "30+ Years",       experienceDesc: "Trusted by thousands of businesses",
      fast: "Fast Turnaround",       fastDesc: "Quick delivery without compromise",
      signIn: "Sign In", register: "Register",
      // ── Web Offset section ──
      woTitle:      "WEB OFFSET PRINTING",
      woTagline:    "SPEED. SCALE. PRECISION.",
      woHeroTitle:  "Built for High-Volume Excellence",
      woHeroDesc:   "Web offset printing is designed for non-stop production, and at B&K Offset Printing, speed is only the beginning. Our advanced multi-colour rotary presses deliver consistent quality at exceptional speeds, making them ideal for magazines, catalogues, brochures, inserts, and promotional publications produced in large volumes.",
      woHeroDesc2:  "Every rotation combines power, stability, and accuracy, ensuring sharp images and uniform colour reproduction—even across millions of impressions.",
      woPerfTitle:  "Performance That Goes Beyond Printing",
      woPerfDesc:   "Our web offset systems are equipped with integrated inline finishing, allowing multiple processes to happen in a single run. This means faster turnaround times and flawless results.",
      woPerfList:   ["UV & protective varnishing","Punching and perforation (portrait & landscape)","Folding (standard to creative formats)","Gluing and binding preparation","Custom finishing solutions for special publications"],
      woPerfFoot:   "This seamless workflow helps us deliver ready-to-use printed products with unmatched efficiency.",
      woEnvTitle:   "High Speed. Lower Environmental Impact.",
      woEnvDesc:    "Powerful machines don't have to waste resources. Our web offset operations are engineered to be energy-efficient and environmentally responsible.",
      woEnvList:    ["Energy consumption","Material waste","Production downtime"],
      woEnvFoot:    "This allows us to combine high productivity with sustainable practices, even during 24/7 production cycles.",
      woSusTitle:   "Responsible Printing for a Sustainable Future",
      woSusDesc:    "Environmental care is built into every stage of our process.",
      woSusList:    ["Low-energy drying technology to minimize fuel usage","Alcohol-free printing processes","Avoidance of harmful volatile solvents","Use of eco-friendly inks and consumables","Strict paper waste segregation and recycling"],
      woSusFoot:    "All paper waste is carefully collected and returned to manufacturers for reuse—supporting a closed-loop recycling system.",
    },
    hi: {
      heroTitle: "क्लासिक प्रिंटिंग।", heroTitle2: "आधुनिक गुणवत्ता।",
      heroSub: "1995 से दिल्ली में भरोसेमंद प्रिंटिंग सेवाएँ",
      products: "हमारे प्रोडक्ट्स", gallery: "हमारी मशीनें", visit: "हमारा पता",
      quality: "प्रीमियम क्वालिटी",    qualityDesc: "हर प्रिंट उच्चतम मानकों को पूरा करता है",
      experience: "30+ वर्ष",         experienceDesc: "हजारों व्यवसायों द्वारा भरोसेमंद",
      fast: "तेज़ डिलीवरी",           fastDesc: "गुणवत्ता से कोई समझौता नहीं",
      signIn: "साइन इन", register: "रजिस्टर",
      // ── वेब ऑफ़्सेट सेक्शन ──
      woTitle:      "वेब ऑफ़्सेट प्रिंटिंग",
      woTagline:    "गति। पैमाना। सटीकता।",
      woHeroTitle:  "हाई-वॉल्यूम एक्सलेंस के लिए बनाया गया",
      woHeroDesc:   "वेब ऑफ़्सेट प्रिंटिंग बिना रुके प्रोडक्शन के लिए डिज़ाइन किया गया है, और B&K Offset Printing में, गति केवल शुरुआत है। हमारे अडवांस्ड मल्टी-कलर रोटरी प्रेस मैगज़ीन, कैटलॉग, ब्रोशार, इनसर्ट और बड़े वॉल्यूम में प्रोडक्ड प्रोमोशनल पब्लिकेशनों के लिए आदर्श हैं।",
      woHeroDesc2:  "हर रोटेशन पॉवर, स्टेबिलिटी और एक्यूरेसी को जोड़ता है, जिससे शार्प इमेज और यूनिफॉर्म कलर रिप्रोडक्शन सुनिश्चित होता है—मिलियन इम्प्रेशनों में भी।",
      woPerfTitle:  "प्रिंटिंग से आगे की पर्फॉर्मेंस",
      woPerfDesc:   "हमारे वेब ऑफ़्सेट सिस्टम इंटीग्रेटेड इनलाइन फिनिशिंग के साथ आए हैं, जिससे एक ही रन में कई प्रक्रियाएँ होती हैं।",
      woPerfList:   ["UV & प्रोटेक्टिव वार्निशिंग","पंचिंग और पर्फोरेशन (पोर्ट्रेट व लैंडस्केप)","फोल्डिंग (स्टैंडार्ड से क्रिएटिव फॉर्मेट्स)","ग्लुइंग और बाइंडिंग प्रिपरेशन","स्पेशल पब्लिकेशनों के लिए कस्टम फिनिशिंग सॉल्यूशन्स"],
      woPerfFoot:   "यह सीमलेस वर्कफ़लो हमें बिना किसी कमी के तैयार प्रिंटेड प्रोडक्ट्स डेलिवर करने में मदद करता है।",
      woEnvTitle:   "हाई स्पीड। कम पर्यावरणीय प्रभाव।",
      woEnvDesc:    "शक्तिशाली मशीनों को रिसोर्स बेकार नहीं करना। हमारे वेब ऑफ़्सेट ऑपरेशन एनर्जी-एफिसियंट और पर्यावरण-जिम्मेदार होने के लिए इंजीनीर्ड हैं।",
      woEnvList:    ["एनर्जी कंज़ंप्शन","मटेरियल वेस्ट","प्रोडक्शन डाउनटाइम"],
      woEnvFoot:    "यह हमें 24/7 प्रोडक्शन सॉइकिलों में भी हाई प्रोडक्टिविटी और सस्टेनेबल प्रैक्टिसेज़ को जोड़ने की सुविधा देता है।",
      woSusTitle:   "एक सस्टेनेबल भविष्य के लिए जिम्मेदार प्रिंटिंग",
      woSusDesc:    "पर्यावरण की देखभाल हमारी हर प्रक्रिया में बनाया गया है।",
      woSusList:    ["फ़ेल यूसेज़ कम करने के लिए लो-एनर्जी ड्रइंग टेक्नोलॉजी","अल्कोहल-फ्री प्रिंटिंग प्रोसेसेज़","हानिकारक वोलेटाइल सॉल्वेंट्स से बचाव","इकো-फ्रेंडली इंक्स और कनज़ंप्शेबलज़ का उपयोग","पेपर वेस्ट सेग्रीगेशन और रिसाइक्लिंग"],
      woSusFoot:    "सभी पेपर वेस्ट को सावधानी से कलेक्ट किया जाता है और मैनुफैक्चर्स को रीयूज़ के लिए वापस किया जाता है—एक क्लोज़ड-लूप रिसाइक्लिंग सिस्टम को सपोर्ट करता है।",
    },
  }[lang];

  /* ── NAVBAR ── */
  return (
    <div style={{
      fontFamily: T.fontBody,
      minHeight: "100vh",
      background: isDark
        ? `linear-gradient(rgba(2,6,23,0.85), rgba(2,6,23,0.88)), url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80')`
        : `linear-gradient(rgba(255,255,255,0.80), rgba(248,250,252,0.83)), url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80')`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      color: c.text,
      transition: "background 0.35s, color 0.35s",
    }}>

      <nav style={{
        position: "sticky", top: 0, zIndex: 1000,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "14px 32px",
        background: scrolled
          ? (isDark ? "rgba(2,6,23,0.92)"  : "rgba(255,255,255,0.92)")
          : (isDark ? "rgba(2,6,23,0.4)"   : "rgba(255,255,255,0.6)"),
        backdropFilter: "blur(18px)",
        borderBottom: scrolled ? `1px solid ${c.border}` : "1px solid transparent",
        boxShadow: scrolled ? T.shadowSm : "none",
        transition: "all 0.3s ease",
      }}>
        {/* brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: 40, height: 40, borderRadius: T.radiusMd,
            background: T.grad, display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 800, fontSize: "16px",
            boxShadow: `0 4px 14px ${T.primaryGlow}`,
          }}>BK</div>
          <span style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.5px" }}>BK Offset Printing</span>
        </div>

        {/* nav actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {!isAuth ? (
            <button onClick={() => setShowAuth(true)} style={{
              background: T.grad, color: "#fff", border: "none",
              padding: "8px 20px", borderRadius: T.radiusMd,
              fontWeight: 600, fontSize: "14px", cursor: "pointer",
              boxShadow: `0 3px 12px ${T.primaryGlow}`,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 6px 20px ${T.primaryGlow}`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)";  e.currentTarget.style.boxShadow = `0 3px 12px ${T.primaryGlow}`; }}
            >
              {text.signIn} / {text.register}
            </button>
          ) : (
            <UserProfile user={user} isDark={isDark} onLogout={handleLogout} onEdit={() => setShowAuth(true)} />
          )}

          {/* language toggle */}
          <button onClick={toggleLang} aria-label="Toggle Language" style={{
            background: "transparent", border: "none", color: c.textMid,
            cursor: "pointer", padding: "8px", borderRadius: T.radiusMd,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = T.primaryFaint; e.currentTarget.style.color = T.primary; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = c.textMid; }}
          >
            <Globe size={20} />
          </button>

          {/* theme toggle */}
          <button onClick={toggleTheme} aria-label="Toggle Theme" style={{
            background: "transparent", border: "none", color: c.textMid,
            cursor: "pointer", padding: "8px", borderRadius: T.radiusMd,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = T.primaryFaint; e.currentTarget.style.color = T.primary; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = c.textMid; }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        padding: "130px 32px 100px",
        textAlign: "center",
        background: isDark
          ? `linear-gradient(rgba(12,35,64,0.82), rgba(2,6,23,0.86)), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80')`
          : `linear-gradient(rgba(224,242,254,0.75), rgba(255,255,255,0.80)), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* subtle decorative circle */}
        <div style={{
          position: "absolute", top: "-120px", left: "50%", transform: "translateX(-50%)",
          width: "500px", height: "500px", borderRadius: "50%",
          background: `radial-gradient(circle, ${T.primaryGlow} 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 780, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* sparkle badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: T.primaryFaint, border: `1px solid ${isDark ? T.primaryDark : T.primaryLight}`,
            borderRadius: "999px", padding: "6px 14px", marginBottom: "28px",
            color: T.primary, fontSize: "13px", fontWeight: 600,
          }}>
            <Sparkles size={14} /> Premium Printing Services
          </div>

          <h1 style={{
            fontSize: "clamp(38px, 6.5vw, 68px)", fontWeight: 800,
            letterSpacing: "-2.5px", lineHeight: 1.08, marginBottom: "20px",
          }}>
            {text.heroTitle}
            <br />
            <span style={{
              background: "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              {text.heroTitle2}
            </span>
          </h1>

          <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: c.textMid, lineHeight: 1.7, marginBottom: "40px", maxWidth: 560, margin: "0 auto 40px" }}>
            {text.heroSub}
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            {isAuth ? (
              <>
                <HeroBtn href={`tel:${phoneNumber}`} icon={<Phone size={17} />} label="Call Now"
                  bg={T.grad} shadow={T.primaryGlow} />
                <HeroBtn href={whatsappLink} icon={<MessageCircle size={17} />} label="WhatsApp"
                  bg="linear-gradient(135deg, #16a34a 0%, #22c55e 100%)" shadow="rgba(22,163,74,0.35)" target="_blank" rel="noopener noreferrer" />
              </>
            ) : (
              <button onClick={() => setShowAuth(true)} style={{
                background: T.grad, color: "#fff", border: "none",
                padding: "14px 34px", borderRadius: T.radiusLg,
                fontWeight: 700, fontSize: "16px", cursor: "pointer",
                display: "inline-flex", alignItems: "center", gap: "10px",
                boxShadow: `0 6px 24px ${T.primaryGlow}`,
                transition: "transform 0.25s, box-shadow 0.25s",
                fontFamily: T.fontBody,
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px) scale(1.03)"; e.currentTarget.style.boxShadow = `0 12px 32px ${T.primaryGlow}`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)";     e.currentTarget.style.boxShadow = `0 6px 24px ${T.primaryGlow}`; }}
              >
                <User size={17} /> {text.signIn} to Contact Us
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── FEATURES BAR ── */}
      <section style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        padding: "52px 32px",
        background: isDark
          ? `linear-gradient(rgba(15,23,42,0.88), rgba(15,23,42,0.90)), url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`
          : `linear-gradient(rgba(240,249,255,0.85), rgba(240,249,255,0.88)), url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`,
      }}>
        <FeatureItem icon={<Award size={22} />}      title={text.quality}    desc={text.qualityDesc}    isDark={isDark} />
        <FeatureItem icon={<Sparkles size={22} />}   title={text.experience} desc={text.experienceDesc} isDark={isDark} />
        <FeatureItem icon={<Clock size={22} />}      title={text.fast}       desc={text.fastDesc}       isDark={isDark} />
      </section>

      {/* ── PRODUCTS ── */}
      <ProductsSection text={text} isDark={isDark} c={c} />

      {/* ── GALLERY ── */}
      <GallerySection text={text} isDark={isDark} c={c} />

      {/* ── WEB OFFSET PRINTING ── */}
      <WebOffsetSection text={text} isDark={isDark} c={c} />

      {/* ── LOCATION ── */}
      <LocationSection text={text} isDark={isDark} c={c} />

      {/* ── FOOTER ── */}
      <footer style={{
        background: isDark ? "#020617" : "#0f172a",
        color: "#cbd5e1", padding: "60px 32px 28px", textAlign: "center",
        borderTop: `1px solid ${isDark ? T.surfDark2 : "#1e293b"}`,
      }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <div style={{
            width: 44, height: 44, borderRadius: T.radiusMd, background: T.grad,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 800, fontSize: "16px", margin: "0 auto 14px",
            boxShadow: `0 4px 14px ${T.primaryGlow}`,
          }}>BK</div>
          <div style={{ fontWeight: 700, fontSize: "18px", color: "#f1f5f9" }}>BK Offset Printing</div>
          <div style={{ fontSize: "13px", color: "#64748b", marginTop: "8px", marginBottom: "20px" }}>
            Quality printing services since 1995
          </div>
          {isAuth && (
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
              <FooterIcon href={`tel:${phoneNumber}`}    icon={<Phone size={17} />} />
              <FooterIcon href={whatsappLink} target="_blank" rel="noopener noreferrer" icon={<MessageCircle size={17} />} />
            </div>
          )}
          <div style={{ fontSize: "12px", color: "#475569" }}>
            © {new Date().getFullYear()} BK Offset Printing. All rights reserved.
          </div>
        </div>
      </footer>

      {/* floating social icons */}
      <SocialMediaIcons isDark={isDark} isAuthenticated={isAuth} />

      {/* auth modal */}
      {showAuth && <Auth isDark={isDark} onAuthComplete={handleAuthComplete} />}
    </div>
  );
}


/* ═══════════════════════════════════════════════
   SMALL  REUSABLE  COMPONENTS
   ═══════════════════════════════════════════════ */

/* Hero CTA button */
function HeroBtn({ href, icon, label, bg, shadow, target, rel }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target={target} rel={rel}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: bg, color: "#fff",
        padding: "13px 30px", borderRadius: "12px",
        textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "9px",
        fontWeight: 700, fontSize: "15px",
        boxShadow: hov ? `0 12px 28px ${shadow}` : `0 4px 16px ${shadow}`,
        transform: hov ? "translateY(-3px) scale(1.04)" : "translateY(0) scale(1)",
        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
      }}
    >
      {icon} {label}
    </a>
  );
}

/* Feature bar item */
function FeatureItem({ icon, title, desc, isDark }) {
  const [hov, setHov] = useState(false);
  const c = th(isDark);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        textAlign: "center", padding: "0 20px",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <div style={{
        width: 52, height: 52, borderRadius: "12px",
        background: hov ? T.grad : T.primaryFaint,
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 12px",
        color: hov ? "#fff" : T.primary,
        boxShadow: hov ? `0 6px 18px ${T.primaryGlow}` : "none",
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
      }}>
        {icon}
      </div>
      <div style={{ fontWeight: 700, fontSize: "15px", color: c.text, marginBottom: "4px" }}>{title}</div>
      <div style={{ fontSize: "13px", color: c.textDim, lineHeight: 1.5 }}>{desc}</div>
    </div>
  );
}

/* Products section */
function ProductsSection({ text, isDark, c }) {
  return (
    <section style={{ padding: "100px 32px", maxWidth: 1180, margin: "0 auto" }}>
      <SectionHeader title={text.products} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
        {[
          { title: "Visiting Cards", desc: "Premium cards with sharp print & elegant finish" },
          { title: "Bill Books",     desc: "Durable multi-copy billing books for your business" },
          { title: "Pamphlets",      desc: "High-quality promotional prints that stand out" },
          { title: "Letterheads",    desc: "Professional letterheads for your brand" },
          { title: "Brochures",      desc: "Eye-catching brochures with vibrant colors" },
          { title: "Envelopes",      desc: "Custom envelopes in all sizes" },
        ].map((p) => <ProductCard key={p.title} {...p} isDark={isDark} c={c} />)}
      </div>
    </section>
  );
}

function ProductCard({ title, desc, isDark, c }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: c.surf,
      border: `1px solid ${hov ? T.primary : c.border}`,
      borderRadius: T.radiusCard,
      padding: "28px",
      transform: hov ? "translateY(-6px)" : "translateY(0)",
      boxShadow: hov
        ? (isDark ? `0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px ${T.primaryFaint}` : `0 16px 40px rgba(0,0,0,0.10), 0 0 0 1px ${T.primaryFaint}`)
        : T.shadowSm,
      transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
    }}>
      <div style={{
        width: 50, height: 50, borderRadius: "12px",
        background: hov ? T.grad : T.primaryFaint,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "18px",
        color: hov ? "#fff" : T.primary,
        boxShadow: hov ? `0 5px 16px ${T.primaryGlow}` : "none",
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
        transform: hov ? "rotate(5deg) scale(1.05)" : "rotate(0) scale(1)",
      }}>
        <Printer size={22} />
      </div>
      <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "8px", color: c.text }}>{title}</h3>
      <p style={{ fontSize: "14px", color: c.textDim, lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </div>
  );
}

/* Gallery section */
function GallerySection({ text, isDark, c }) {
  const images = [
    "https://imgs.search.brave.com/0vmwP543aOM5MH0qMkeK-FUMtyKTAednWzujk0DXxIg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzE3LzAzLzEz/LzM2MF9GXzkxNzAz/MTM5NV82QjNEMUxK/djM0d29IQnFHSGl6/MmZhZmdIN3FHR1pj/cS5qcGc",
    "https://imgs.search.brave.com/4fSMXgmsWcxyR037wKCJJ7Obd2YO5B6jGhf4rdcRkcQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY2/MjIyMzM2L3Bob3Rv/L21vZGVybi1wcmlu/dGluZy1ob3VzZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/akZDMXVtWFI1RzYw/b2NCdE9pWE1VZ09D/ZkJHR2RFQWx5cmNk/UFlsRjFnaz0",
    "https://imgs.search.brave.com/LRBqEobG2NVqTrIEV2R9gRWI5qmvV1gcVHaBcykcr6k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzYzLzE0LzAx/LzM2MF9GXzExNjMx/NDAxNDdfbW94Ylg0/aXVGSVhDVEphSkoy/QWE4Rk9XQmpwdlhZ/NUQuanBn",
    "https://imgs.search.brave.com/e3NaDFicvmSTfGN9LcbRTmQ6q0kUtHZ3lDbjkZYJAAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjMv/NDQxLzQzMC9zbWFs/bC9tb2Rlcm4tcHJp/bnRpbmctbWFjaGlu/ZS1wcmVzcy1nZW5l/cmF0ZS1haS1waG90/by5qcGc",
    "https://imgs.search.brave.com/XjqWr7jjcNP8AlyvN_DcwTg8anOL8ZXcAyNsczr2H2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wcmlu/dGluZy1tYWNoaW5l/LTI2OTk4MDg0Lmpw/Zw",
    "https://imgs.search.brave.com/GOdiMYrLND5c6Oj1kSQ4Q-1qcT7I3PJDq45msauhYak/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjgv/Mjk5LzIyOS9zbWFs/bC9oaWdoLXNwZWVk/LXByaW50aW5nLXBy/ZXNzLWluLWluZHVz/dHJpYWwtc2V0dGlu/Zy13aXRoLXN0YWNr/cy1vZi1wcmludGVk/LXNoZWV0cy1pbi1m/YWN0b3J5LWVudmly/b25tZW50LXBob3Rv/LmpwZWc",
    "https://imgs.search.brave.com/IVfnN8HiTFa6mYLGXHosj2kRbfcU9L83sbCHLrTZYbw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NjU0Lzg5My9zbWFs/bC9tb2Rlcm4tcHJp/bnRpbmctcHJlc3Mt/cHJvZHVjZXMtbXVs/dGktY29sb3JlZC1w/cmludG91dHMtYWNj/dXJhdGVseS1nZW5l/cmF0ZWQtYnktYWkt/ZnJlZS1waG90by5q/cGc",
    "https://imgs.search.brave.com/OR-O7lIPVf3hPrA9x9lcRSRvEI8M-GWD1i6l6uCPgVk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDc1/NjkwMTY0L3Bob3Rv/L3Bvc3QtcHJlc3Mt/ZmluaXNoaW5nLWxp/bmUtbWFjaGluZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Wkw0bEJtUzRELVZP/dHRpVUowc1EzQ05Q/eGh6T1NzQVkydW1t/dFVodkZ2RT0",
  ];

  return (
    <section style={{
      padding: "100px 32px",
      background: isDark
        ? `linear-gradient(rgba(15,23,42,0.88), rgba(15,23,42,0.91)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')`
        : `linear-gradient(rgba(240,249,255,0.82), rgba(240,249,255,0.86)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`,
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHeader title={text.gallery} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {images.map((src, i) => <GalleryCard key={i} src={src} alt={`Printing Machine ${i + 1}`} isDark={isDark} />)}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ src, alt, isDark }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      position: "relative", overflow: "hidden", borderRadius: T.radiusCard,
      aspectRatio: "4/3", cursor: "pointer",
      border: `1px solid ${hov ? T.primary : (isDark ? T.borderDark : T.borderLight)}`,
      boxShadow: hov ? `0 12px 32px ${T.primaryGlow}` : T.shadowSm,
      transform: hov ? "translateY(-4px) scale(1.02)" : "translateY(0) scale(1)",
      transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
    }}>
      <img src={src} alt={alt} style={{
        width: "100%", height: "100%", objectFit: "cover",
        transform: hov ? "scale(1.08)" : "scale(1)",
        transition: "transform 0.5s cubic-bezier(.4,0,.2,1)",
      }} />
      {/* gradient overlay on hover */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(2,6,23,0.45) 0%, transparent 55%)",
        opacity: hov ? 1 : 0,
        transition: "opacity 0.35s ease",
      }} />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   WEB  OFFSET  PRINTING  SECTION
   ═══════════════════════════════════════════════ */

function WebOffsetSection({ text, isDark, c }) {
  return (
    <section style={{
      background: isDark
        ? `linear-gradient(rgba(2,6,23,0.87), rgba(2,6,23,0.90)), url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`
        : `linear-gradient(rgba(255,255,255,0.82), rgba(248,250,252,0.86)), url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}>
      {/* ── Hero banner ── */}
      <WebOffsetHero text={text} isDark={isDark} c={c} />

      {/* ── Four content blocks ── */}
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 32px 100px" }}>
        <WebOffsetBlock
          icon={<Layers size={22} />}
          title={text.woPerfTitle}
          desc={text.woPerfDesc}
          items={text.woPerfList}
          footer={text.woPerfFoot}
          isDark={isDark} c={c}
          accent="layers"
        />
        <WebOffsetBlock
          icon={<Zap size={22} />}
          title={text.woEnvTitle}
          desc={text.woEnvDesc}
          items={text.woEnvList}
          footer={text.woEnvFoot}
          isDark={isDark} c={c}
          accent="zap"
          reduceLabel="By using optimized drying systems and modern press technology, we significantly reduce:"
        />
        <WebOffsetBlock
          icon={<Leaf size={22} />}
          title={text.woSusTitle}
          desc={text.woSusDesc}
          items={text.woSusList}
          footer={text.woSusFoot}
          isDark={isDark} c={c}
          accent="leaf"
        />
      </div>
    </section>
  );
}

/* ── Hero banner with decorative background ── */
function WebOffsetHero({ text, isDark, c }) {
  return (
    <div style={{
      position: "relative", overflow: "hidden",
      padding: "110px 32px 100px",
      background: isDark
        ? `linear-gradient(160deg, rgba(12,30,51,0.85) 0%, rgba(2,6,23,0.88) 55%, rgba(10,22,40,0.86) 100%), url('https://images.unsplash.com/photo-1581092918484-8313e1f6c1ef?w=1920&q=80')`
        : `linear-gradient(160deg, rgba(224,242,254,0.78) 0%, rgba(240,249,255,0.82) 40%, rgba(255,255,255,0.85) 100%), url('https://images.unsplash.com/photo-1581092918484-8313e1f6c1ef?w=1920&q=80')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: "380px", height: "380px", borderRadius: "50%",
        background: `radial-gradient(circle, ${T.primaryGlow} 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-60px", left: "-60px",
        width: "260px", height: "260px", borderRadius: "50%",
        background: `radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      {/* faint grid overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: isDark ? 0.04 : 0.06,
        backgroundImage: "linear-gradient(rgba(14,165,233,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div style={{ maxWidth: 780, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
        {/* eyebrow badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: T.primaryFaint,
          border: `1px solid ${isDark ? T.primaryDark : T.primaryLight}`,
          borderRadius: "999px", padding: "7px 18px", marginBottom: "28px",
          color: T.primary, fontSize: "13px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase",
        }}>
          <Printer size={14} /> {text.woTitle}
        </div>

        {/* Tagline */}
        <h2 style={{
          fontSize: "clamp(32px, 5.5vw, 56px)", fontWeight: 800,
          letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: "18px",
          background: "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        }}>
          {text.woTagline}
        </h2>

        {/* Main title */}
        <h3 style={{
          fontSize: "clamp(20px, 2.8vw, 26px)", fontWeight: 700,
          color: c.text, marginBottom: "22px", letterSpacing: "-0.5px",
        }}>
          {text.woHeroTitle}
        </h3>

        {/* Two paragraph descriptions */}
        <p style={{ fontSize: "15px", color: c.textMid, lineHeight: 1.8, marginBottom: "16px", maxWidth: 680, margin: "0 auto 16px" }}>
          {text.woHeroDesc}
        </p>
        <p style={{ fontSize: "15px", color: c.textMid, lineHeight: 1.8, maxWidth: 680, margin: "0 auto" }}>
          {text.woHeroDesc2}
        </p>
      </div>
    </div>
  );
}

/* ── Single content block (Performance / Environment / Sustainability) ── */
function WebOffsetBlock({ icon, title, desc, items, footer, isDark, c, accent, reduceLabel }) {
  const [hov, setHov] = useState(false);

  /* colour accent varies per block */
  const accentColor = accent === "leaf" ? "#22c55e" : accent === "zap" ? "#f59e0b" : T.primary;
  const accentGlow  = accent === "leaf" ? "rgba(34,197,94,0.25)" : accent === "zap" ? "rgba(245,158,11,0.25)" : T.primaryGlow;
  const accentFaint = accent === "leaf" ? "rgba(34,197,94,0.08)" : accent === "zap" ? "rgba(245,158,11,0.08)" : T.primaryFaint;
  const accentGrad  = accent === "leaf"
    ? "linear-gradient(135deg, #16a34a 0%, #4ade80 100%)"
    : accent === "zap"
      ? "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)"
      : T.grad;

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px",
        alignItems: "start", marginBottom: "80px",
        background: c.surf,
        border: `1px solid ${hov ? accentColor : c.border}`,
        borderRadius: T.radiusXl,
        padding: "48px",
        boxShadow: hov
          ? `0 20px 48px ${accentGlow}, 0 0 0 3px ${accentFaint}`
          : T.shadowSm,
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
      }}
    >
      {/* LEFT: icon + title + description */}
      <div>
        {/* icon badge */}
        <div style={{
          width: 56, height: 56, borderRadius: "14px",
          background: hov ? accentGrad : accentFaint,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: hov ? "#fff" : accentColor,
          boxShadow: hov ? `0 6px 20px ${accentGlow}` : "none",
          transform: hov ? "scale(1.08) rotate(3deg)" : "scale(1) rotate(0)",
          transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
          marginBottom: "22px",
        }}>
          {icon}
        </div>

        <h3 style={{
          fontSize: "clamp(18px, 2.2vw, 22px)", fontWeight: 750,
          color: c.text, letterSpacing: "-0.4px", marginBottom: "14px", lineHeight: 1.3,
        }}>
          {title}
        </h3>

        <p style={{ fontSize: "15px", color: c.textMid, lineHeight: 1.8, margin: 0 }}>
          {desc}
        </p>

        {reduceLabel && (
          <p style={{ fontSize: "14px", color: c.textDim, lineHeight: 1.7, marginTop: "14px", fontStyle: "italic" }}>
            {reduceLabel}
          </p>
        )}

        {footer && (
          <p style={{
            fontSize: "14px", color: c.textMid, lineHeight: 1.7,
            marginTop: "20px", paddingTop: "16px",
            borderTop: `1px solid ${c.border}`,
            fontStyle: "italic",
          }}>
            {footer}
          </p>
        )}
      </div>

      {/* RIGHT: bullet list */}
      <div style={{
        background: c.bg,
        border: `1px solid ${c.border}`,
        borderRadius: T.radiusLg,
        padding: "28px 28px 24px",
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "8px",
          marginBottom: "18px",
        }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%",
            background: accentGrad,
            boxShadow: `0 0 8px ${accentGlow}`,
          }} />
          <span style={{ fontSize: "12px", fontWeight: 700, color: accentColor, letterSpacing: "1px", textTransform: "uppercase" }}>
            {accent === "leaf" ? "Sustainability" : accent === "zap" ? "Reductions" : "Capabilities"}
          </span>
        </div>

        {items.map((item, i) => (
          <WebOffsetListItem key={i} label={item} accentColor={accentColor} accentFaint={accentFaint} accentGrad={accentGrad} accentGlow={accentGlow} c={c} />
        ))}
      </div>
    </div>
  );
}

/* ── Single animated list row ── */
function WebOffsetListItem({ label, accentColor, accentFaint, accentGrad, accentGlow, c }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "flex-start", gap: "14px",
        padding: "11px 14px", borderRadius: T.radiusMd,
        background: hov ? accentFaint : "transparent",
        border: `1px solid ${hov ? accentColor : "transparent"}`,
        transform: hov ? "translateX(4px)" : "translateX(0)",
        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
        marginBottom: "6px",
      }}
    >
      {/* bullet dot */}
      <div style={{
        width: 22, height: 22, minWidth: 22, borderRadius: "50%",
        background: hov ? accentGrad : accentFaint,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginTop: "1px",
        boxShadow: hov ? `0 3px 10px ${accentGlow}` : "none",
        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
      }}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 5.5L4 7.5L8 3" stroke={hov ? "#fff" : accentColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <span style={{ fontSize: "14px", color: hov ? c.text : c.textMid, fontWeight: hov ? 600 : 500, lineHeight: 1.6, transition: "color 0.2s" }}>
        {label}
      </span>
    </div>
  );
}

/* Location section */
function LocationSection({ text, isDark, c }) {
  const [mapHov, setMapHov]   = useState(false);
  const [addrHov, setAddrHov] = useState(false);

  return (
    <section style={{ padding: "100px 32px", maxWidth: 1180, margin: "0 auto" }}>
      <SectionHeader title={text.visit} />

      {/* address pill */}
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <span
          onMouseEnter={() => setAddrHov(true)}
          onMouseLeave={() => setAddrHov(false)}
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontSize: "15px", fontWeight: 600,
            color: addrHov ? T.primary : c.textMid,
            background: addrHov ? T.primaryFaint : "transparent",
            border: `1px solid ${addrHov ? T.primary : "transparent"}`,
            borderRadius: "999px",
            padding: addrHov ? "8px 18px" : "8px 0",
            cursor: "default",
            transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
          }}
        >
          <MapPin size={17} style={{ color: T.primary, transition: "transform 0.3s", transform: addrHov ? "scale(1.2)" : "scale(1)" }} />
          Naveen Shahdara, Delhi
        </span>
      </div>

      {/* map wrapper with hover */}
      <div
        onMouseEnter={() => setMapHov(true)}
        onMouseLeave={() => setMapHov(false)}
        style={{
          maxWidth: 860, margin: "0 auto",
          borderRadius: T.radiusCard, overflow: "hidden",
          border: `2px solid ${mapHov ? T.primary : c.border}`,
          boxShadow: mapHov
            ? `0 20px 48px ${T.primaryGlow}, 0 0 0 4px ${T.primaryFaint}`
            : T.shadowLg,
          transform: mapHov ? "translateY(-6px) scale(1.015)" : "translateY(0) scale(1)",
          transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <iframe
          style={{ width: "100%", height: "380px", border: 0, display: "block" }}
          src="https://www.google.com/maps?q=Naveen%20Shahdara%20Delhi&output=embed"
          title="Location Map"
        />
      </div>
    </section>
  );
}

/* Shared section header */
function SectionHeader({ title }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ textAlign: "center", marginBottom: "56px" }}
    >
      <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-1px", margin: 0 }}>{title}</h2>
      <div style={{
        width: hov ? 72 : 48, height: 3, borderRadius: "999px",
        background: T.grad, margin: "14px auto 0",
        boxShadow: `0 2px 8px ${T.primaryGlow}`,
        transition: "width 0.35s cubic-bezier(.4,0,.2,1)",
      }} />
    </div>
  );
}

/* Footer icon */
function FooterIcon({ href, icon, target, rel }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target={target} rel={rel}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        color: hov ? "#fff" : "#64748b",
        textDecoration: "none",
        width: 40, height: 40, borderRadius: "50%",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        background: hov ? T.grad : "rgba(255,255,255,0.06)",
        border: `1px solid ${hov ? "transparent" : "#334155"}`,
        boxShadow: hov ? `0 4px 16px ${T.primaryGlow}` : "none",
        transform: hov ? "translateY(-3px) scale(1.1)" : "translateY(0) scale(1)",
        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
      }}
    >
      {icon}
    </a>
  );
}