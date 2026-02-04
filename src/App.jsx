import React, { useState, useEffect, useRef } from "react";
import {
  Printer,
  Phone,
  MessageCircle,
  MapPin,
  Sun,
  Moon,
  Globe,
  Sparkles,
  Award,
  Clock,
  Mail,
  Facebook,
  Instagram,
  User,
  LogOut,
  Eye,
  EyeOff,
  ChevronLeft,
  Zap,
  Layers,
  Leaf,
  Star,
} from "lucide-react";
import "./App.css";
import logoImg from "./assets/Logo/BK_logo_png.png";

// FIX: Correct logo import path - adjust based on your actual file structure
// If the logo is in assets/Logo/BK_logo_png.png
// const logoImg = "./assets/Logo/BK_logo_png.png"; // You need to provide the actual path

/* ─────────────────────────────────────────────
   DESIGN TOKENS  (single source of truth)
   ───────────────────────────────────────────── */
const T = {
  // Primary palette — deep-sky / cyan family
  primary: "#0ea5e9", // sky-500
  primaryDark: "#0284c7", // sky-600
  primaryLight: "#38bdf8", // sky-400
  primaryGlow: "rgba(14, 165, 233, 0.35)",
  primaryFaint: "rgba(14, 165, 233, 0.08)",

  // Accent — teal for CTAs / highlights
  accent: "#06b6d4", // cyan-500
  accentDark: "#0891b2",

  // Success (WhatsApp green)
  green: "#16a34a",
  greenLight: "#22c55e",

  // Danger / Logout
  red: "#ef4444",

  // Gradient helpers
  grad: "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",
  gradHero: "linear-gradient(135deg, #0369a1 0%, #0891b2 100%)",
  gradAnimated: "linear-gradient(270deg, #0284c7, #06b6d4, #0ea5e9, #38bdf8)",

  // Light theme
  bgLight: "#ffffff",
  surfLight: "#f0f9ff", // sky-50
  surfLight2: "#e0f2fe", // sky-100
  borderLight: "#cbd5e1", // slate-300
  textLight: "#0f172a", // slate-900
  textMidLight: "#475569", // slate-600
  textDimLight: "#94a3b8", // slate-400

  // Dark theme
  bgDark: "#020617", // slate-950
  surfDark: "#0f172a", // slate-900
  surfDark2: "#1e293b", // slate-800
  borderDark: "#334155", // slate-700
  textDark: "#f1f5f9", // slate-100
  textMidDark: "#94a3b8", // slate-400
  textDimDark: "#64748b", // slate-500

  // Typography
  fontDisplay: "'DM Sans', 'Inter', system-ui, sans-serif",
  fontBody: "'DM Sans', 'Inter', system-ui, sans-serif",

  // Radius
  radiusSm: "6px",
  radiusMd: "10px",
  radiusLg: "14px",
  radiusXl: "20px",
  radiusCard: "16px",

  // Shadows
  shadowSm: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
  shadowMd: "0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.06)",
  shadowLg: "0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)",
  shadowXl: "0 20px 48px rgba(0,0,0,0.14), 0 8px 16px rgba(0,0,0,0.08)",
};

/* ─────────────────────────────────────────────
   THEME HELPER
   ───────────────────────────────────────────── */
const th = (isDark) => ({
  bg: isDark ? T.bgDark : T.bgLight,
  surf: isDark ? T.surfDark : T.surfLight,
  surf2: isDark ? T.surfDark2 : T.surfLight2,
  border: isDark ? T.borderDark : T.borderLight,
  text: isDark ? T.textDark : T.textLight,
  textMid: isDark ? T.textMidDark : T.textMidLight,
  textDim: isDark ? T.textDimDark : T.textDimLight,
});

/* ═══════════════════════════════════════════════
   SCROLL ANIMATION HOOK
   ═══════════════════════════════════════════════ */
function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
}

/* ═══════════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════════ */
function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);

          const startTime = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(end * easeOutQuart));

            if (progress === 1) {
              clearInterval(timer);
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasStarted]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════
   FLOATING PARTICLES BACKGROUND
   ═══════════════════════════════════════════════ */
function FloatingParticles({ isDark, count = 50 }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 20 + 15}s`,
    animationDelay: `${Math.random() * 5}s`,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: "absolute",
            left: particle.left,
            bottom: "-20px",
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: "50%",
            background: isDark
              ? `radial-gradient(circle, rgba(56, 189, 248, ${particle.opacity}) 0%, transparent 70%)`
              : `radial-gradient(circle, rgba(14, 165, 233, ${particle.opacity}) 0%, transparent 70%)`,
            animation: `floatUp ${particle.animationDuration} ${particle.animationDelay} infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   AUTH MODAL
   ═══════════════════════════════════════════════ */
function Auth({ isDark, onAuthComplete }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPw, setShowPw] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const c = th(isDark);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "bk_user",
      JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        isAuthenticated: true,
      })
    );
    onAuthComplete();
  };

  const handleGoogleAuth = () => {
    localStorage.setItem(
      "bk_user",
      JSON.stringify({
        firstName: "Google",
        lastName: "User",
        email: "google@example.com",
        isAuthenticated: true,
      })
    );
    onAuthComplete();
  };

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
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: isDark ? "rgba(2,6,23,0.88)" : "rgba(15,23,42,0.55)",
        backdropFilter: "blur(12px)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        overflowY: "auto",
        animation: "fadeIn 0.3s ease-out",
      }}
    >
      <div
        style={{
          background: c.bg,
          borderRadius: T.radiusXl,
          padding: "32px 28px",
          width: "100%",
          maxWidth: isLogin ? "420px" : "720px",
          boxShadow: T.shadowXl,
          border: `1px solid ${c.border}`,
          position: "relative",
          transition:
            "max-width 0.35s cubic-bezier(.4,0,.2,1), padding 0.35s cubic-bezier(.4,0,.2,1)",
          margin: "auto",
          animation: "slideUpFade 0.4s ease-out",
        }}
      >
        <button
          onClick={() => onAuthComplete(false)}
          style={{
            position: "absolute",
            top: "18px",
            left: "18px",
            background: "none",
            border: "none",
            color: c.textDim,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "13px",
            fontWeight: 600,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = T.primary)}
          onMouseLeave={(e) => (e.currentTarget.style.color = c.textDim)}
        >
          <ChevronLeft size={16} /> Back
        </button>

        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: T.grad,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              boxShadow: `0 6px 20px ${T.primaryGlow}`,
            }}
          >
            <User size={22} color="#fff" />
          </div>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: c.text,
              margin: 0,
            }}
          >
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p
            style={{
              color: c.textDim,
              fontSize: "13px",
              marginTop: "6px",
              margin: "6px 0 0",
            }}
          >
            {isLogin ? "Sign in to continue" : "Fill in the details below"}
          </p>
        </div>

        <button
          onClick={handleGoogleAuth}
          style={{
            width: "100%",
            padding: "11px",
            borderRadius: T.radiusMd,
            border: `1px solid ${c.border}`,
            background: c.surf,
            color: c.text,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "14px",
            transition: "all 0.2s",
            fontFamily: T.fontBody,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = c.surf2;
            e.currentTarget.style.borderColor = T.primary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = c.surf;
            e.currentTarget.style.borderColor = c.border;
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "18px 0",
            gap: "12px",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: c.border }} />
          <span style={{ color: c.textDim, fontSize: "13px", fontWeight: 600 }}>
            or
          </span>
          <div style={{ flex: 1, height: "1px", background: c.border }} />
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "14px",
                  marginBottom: "14px",
                }}
              >
                <div>
                  <label style={labelStyle}>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = T.primary;
                      e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = c.border;
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = T.primary;
                      e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = c.border;
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "14px",
                  marginBottom: "14px",
                }}
              >
                <div>
                  <label style={labelStyle}>Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = T.primary;
                      e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = c.border;
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 99999 88888"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = T.primary;
                      e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = c.border;
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "14px",
                  marginBottom: "14px",
                }}
              >
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = T.primary;
                      e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = c.border;
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Password *</label>
                  <div style={{ position: "relative" }}>
                    <input
                      type={showPw ? "text" : "password"}
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      style={{ ...inputStyle, paddingRight: "42px" }}
                      onFocus={(e) => {
                        e.target.style.borderColor = T.primary;
                        e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = c.border;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw(!showPw)}
                      style={{
                        position: "absolute",
                        right: "12px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        color: c.textDim,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = T.primary)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = c.textDim)
                      }
                    >
                      {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: "22px" }}>
                <label style={labelStyle}>Confirm Password *</label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = T.primary;
                    e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = c.border;
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </>
          )}

          {isLogin && (
            <>
              <div style={{ marginBottom: "14px" }}>
                <label style={labelStyle}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = T.primary;
                    e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = c.border;
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
              <div style={{ marginBottom: "22px" }}>
                <label style={labelStyle}>Password *</label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPw ? "text" : "password"}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    style={{ ...inputStyle, paddingRight: "42px" }}
                    onFocus={(e) => {
                      e.target.style.borderColor = T.primary;
                      e.target.style.boxShadow = `0 0 0 3px ${T.primaryFaint}`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = c.border;
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      color: c.textDim,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = T.primary)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = c.textDim)
                    }
                  >
                    {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: T.radiusMd,
              border: "none",
              background: T.grad,
              color: "#fff",
              fontWeight: 700,
              fontSize: "15px",
              cursor: "pointer",
              fontFamily: T.fontBody,
              boxShadow: `0 4px 16px ${T.primaryGlow}`,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 8px 24px ${T.primaryGlow}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 4px 16px ${T.primaryGlow}`;
            }}
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "13px",
            color: c.textDim,
            margin: "20px 0 0",
          }}
        >
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{
              background: "none",
              border: "none",
              color: T.primary,
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "13px",
              padding: 0,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = T.primaryDark)}
            onMouseLeave={(e) => (e.currentTarget.style.color = T.primary)}
          >
            {isLogin ? "Register" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   FLOATING SOCIAL ICONS
   ═══════════════════════════════════════════════ */
function SocialMediaIcons({ isDark, isAuthenticated, windowWidth }) {
  const [hov, setHov] = useState(null);
  const c = th(isDark);
  const isSmall = windowWidth < 420;
  const btnSize = isSmall ? 40 : 46;
  const rightOffset = isSmall ? "12px" : "20px";

  const links = [
    {
      icon: <Mail size={18} />,
      href: "mailto:info@bkoffsetprinting.com",
      label: "Email",
      show: isAuthenticated,
    },
    {
      icon: <Facebook size={18} />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <Instagram size={18} />,
      href: "https://instagram.com",
      label: "Instagram",
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
        right: rightOffset,
        display: "flex",
        flexDirection: "column",
        gap: isSmall ? "8px" : "10px",
        zIndex: 1100,
        pointerEvents: "auto",
      }}
    >
      {links
        .filter((l) => l.show !== false)
        .map((link, idx) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            onMouseEnter={() => setHov(link.label)}
            onMouseLeave={() => setHov(null)}
            onTouchStart={() => setHov(link.label)}
            onTouchEnd={() => setTimeout(() => setHov(null), 800)}
            style={{
              width: `${btnSize}px`,
              height: `${btnSize}px`,
              borderRadius: "50%",
              background: hov === link.label ? T.grad : c.surf,
              color: hov === link.label ? "#fff" : c.textMid,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              border: `1px solid ${
                hov === link.label ? "transparent" : c.border
              }`,
              boxShadow:
                hov === link.label ? `0 6px 20px ${T.primaryGlow}` : T.shadowSm,
              transform:
                hov === link.label
                  ? "translateY(-3px) scale(1.08)"
                  : "scale(1)",
              transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
              position: "relative",
              animation: `floatIn 0.5s ease-out ${idx * 0.1}s backwards`,
            }}
          >
            {link.icon}
            {!isSmall && (
              <span
                style={{
                  position: "absolute",
                  right: "calc(100% + 10px)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: isDark ? T.surfDark2 : T.textLight,
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: T.radiusSm,
                  fontSize: "12px",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  opacity: hov === link.label ? 1 : 0,
                  pointerEvents: "none",
                  transition: "opacity 0.2s",
                }}
              >
                {link.label}
                <span
                  style={{
                    position: "absolute",
                    left: "100%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    borderLeft: `5px solid ${
                      isDark ? T.surfDark2 : T.textLight
                    }`,
                    borderTop: "5px solid transparent",
                    borderBottom: "5px solid transparent",
                  }}
                />
              </span>
            )}
          </a>
        ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   USER PROFILE DROPDOWN
   ═══════════════════════════════════════════════ */
function UserProfile({ user, isDark, onLogout, onEdit }) {
  const [open, setOpen] = useState(false);
  const c = th(isDark);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "none",
          border: "none",
          color: c.text,
          cursor: "pointer",
          padding: "6px 10px",
          borderRadius: T.radiusMd,
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = T.primaryFaint)
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: T.grad,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 700,
            boxShadow: `0 3px 10px ${T.primaryGlow}`,
          }}
        >
          {user?.firstName?.charAt(0) || "U"}
        </div>
        {!isMobile && (
          <span style={{ fontSize: "14px", fontWeight: 600 }}>
            Hi, {user?.firstName || "User"}
          </span>
        )}
      </button>

      {open && (
        <>
          <div
            style={{ position: "fixed", inset: 0, zIndex: 999 }}
            onClick={() => setOpen(false)}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              background: c.bg,
              borderRadius: T.radiusLg,
              minWidth: "210px",
              boxShadow: T.shadowLg,
              border: `1px solid ${c.border}`,
              zIndex: 1000,
              overflow: "hidden",
              animation: "dropdownSlide 0.3s ease-out",
            }}
          >
            <div
              style={{
                padding: "14px 16px",
                borderBottom: `1px solid ${c.border}`,
                background: c.surf,
              }}
            >
              <div style={{ fontWeight: 700, fontSize: "14px", color: c.text }}>
                {user?.firstName} {user?.lastName}
              </div>
              <div
                style={{ fontSize: "12px", color: c.textDim, marginTop: "3px" }}
              >
                {user?.email}
              </div>
            </div>
            {[
              {
                label: "Edit Profile",
                icon: <User size={15} />,
                onClick: onEdit,
                color: c.text,
              },
              {
                label: "Logout",
                icon: <LogOut size={15} />,
                onClick: onLogout,
                color: T.red,
              },
            ].map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                style={{
                  width: "100%",
                  padding: "10px 16px",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  color: item.color,
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "background 0.15s",
                  fontFamily: T.fontBody,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = T.primaryFaint)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "none")
                }
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
   STATS SECTION
   ═══════════════════════════════════════════════ */
function StatsSection({ text, isDark, c, isMobile }) {
  const [ref, isVisible] = useScrollAnimation();

  const stats = [
    { value: 30, label: "Years Experience", icon: <Clock size={24} /> },
    { value: 5000, label: "Happy Clients", icon: <Star size={24} /> },
    { value: 50000, label: "Projects Completed", icon: <Award size={24} /> },
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? "50px 20px" : "70px 32px",
        background: isDark
          ? `linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.90))`
          : `linear-gradient(135deg, rgba(240,249,255,0.95), rgba(224,242,254,0.90))`,
        borderTop: `1px solid ${c.border}`,
        borderBottom: `1px solid ${c.border}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <FloatingParticles isDark={isDark} count={20} />

      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: isMobile ? "40px" : "60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            style={{
              textAlign: "center",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.8s ease-out ${idx * 0.15}s`,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: T.grad,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                color: "#fff",
                boxShadow: `0 8px 24px ${T.primaryGlow}`,
                animation: isVisible
                  ? `float 3s ease-in-out ${idx * 0.5}s infinite`
                  : "none",
              }}
            >
              {stat.icon}
            </div>
            <div
              style={{
                fontSize: isMobile ? "36px" : "48px",
                fontWeight: 800,
                background: T.gradAnimated,
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "8px",
                animation: "gradientShift 8s ease infinite",
              }}
            >
              <AnimatedCounter end={stat.value} suffix="+" />
            </div>
            <div
              style={{
                fontSize: "14px",
                color: c.textMid,
                fontWeight: 600,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════════ */
export default function App() {
  const phoneNumber = "+91-99999-88888";
  const whatsappLink = "https://wa.me/919999988888";

  const [theme, setTheme] = useState(
    () => sessionStorage.getItem("bk_theme") || "light"
  );
  const [lang, setLang] = useState(
    () => sessionStorage.getItem("bk_lang") || "en"
  );
  const [scrolled, setScrolled] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(() => {
    const s = localStorage.getItem("bk_user");
    return s ? JSON.parse(s) : null;
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    setTheme(t);
    sessionStorage.setItem("bk_theme", t);
  };
  const toggleLang = () => {
    const l = lang === "en" ? "hi" : "en";
    setLang(l);
    sessionStorage.setItem("bk_lang", l);
  };

  const handleAuthComplete = (success = true) => {
    if (success) {
      const saved = localStorage.getItem("bk_user");
      if (saved) setUser(JSON.parse(saved));
    }
    setShowAuth(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("bk_user");
    setUser(null);
  };

  const isDark = theme === "dark";
  const c = th(isDark);
  const isAuth = !!user;
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const text = {
    en: {
      heroTitle: "Classic Printing.",
      heroTitle2: "Modern Precision.",
      heroSub: "Trusted printing & finishing services in Delhi since 1995",
      products: "Our Products",
      gallery: "Our Machines",
      visit: "Visit Our Press",
      quality: "Premium Quality",
      qualityDesc: "Every print meets the highest standards",
      experience: "30+ Years",
      experienceDesc: "Trusted by thousands of businesses",
      fast: "Fast Turnaround",
      fastDesc: "Quick delivery without compromise",
      signIn: "Sign In",
      register: "Register",
      woTitle: "WEB OFFSET PRINTING",
      woTagline: "SPEED. SCALE. PRECISION.",
      woHeroTitle: "Built for High-Volume Excellence",
      woHeroDesc:
        "Web offset printing is designed for non-stop production, and at BK Offset Printing, speed is only the beginning. Our advanced multi-colour rotary presses deliver consistent quality at exceptional speeds, making them ideal for magazines, catalogues, brochures, inserts, and promotional publications produced in large volumes.",
      woHeroDesc2:
        "Every rotation combines power, stability, and accuracy, ensuring sharp images and uniform colour reproduction—even across millions of impressions.",
      woPerfTitle: "Performance That Goes Beyond Printing",
      woPerfDesc:
        "Our web offset systems are equipped with integrated inline finishing, allowing multiple processes to happen in a single run. This means faster turnaround times and flawless results.",
      woPerfList: [
        "UV & protective varnishing",
        "Punching and perforation (portrait & landscape)",
        "Folding (standard to creative formats)",
        "Gluing and binding preparation",
        "Custom finishing solutions for special publications",
      ],
      woPerfFoot:
        "This seamless workflow helps us deliver ready-to-use printed products with unmatched efficiency.",
      woEnvTitle: "High Speed. Lower Environmental Impact.",
      woEnvDesc:
        "Powerful machines don't have to waste resources. Our web offset operations are engineered to be energy-efficient and environmentally responsible.",
      woEnvList: [
        "Energy consumption",
        "Material waste",
        "Production downtime",
      ],
      woEnvFoot:
        "This allows us to combine high productivity with sustainable practices, even during 24/7 production cycles.",
      woSusTitle: "Responsible Printing for a Sustainable Future",
      woSusDesc: "Environmental care is built into every stage of our process.",
      woSusList: [
        "Low-energy drying technology to minimize fuel usage",
        "Alcohol-free printing processes",
        "Avoidance of harmful volatile solvents",
        "Use of eco-friendly inks and consumables",
        "Strict paper waste segregation and recycling",
      ],
      woSusFoot:
        "All paper waste is carefully collected and returned to manufacturers for reuse—supporting a closed-loop recycling system.",
    },
    hi: {
      heroTitle: "क्लासिक प्रिंटिंग।",
      heroTitle2: "आधुनिक गुणवत्ता।",
      heroSub: "1995 से दिल्ली में भरोसेमंद प्रिंटिंग सेवाएँ",
      products: "हमारे प्रोडक्ट्स",
      gallery: "हमारी मशीनें",
      visit: "हमारा पता",
      quality: "प्रीमियम क्वालिटी",
      qualityDesc: "हर प्रिंट उच्चतम मानकों को पूरा करता है",
      experience: "30+ वर्ष",
      experienceDesc: "हजारों व्यवसायों द्वारा भरोसेमंद",
      fast: "तेज़ डिलीवरी",
      fastDesc: "गुणवत्ता से कोई समझौता नहीं",
      signIn: "साइन इन",
      register: "रजिस्टर",
      woTitle: "वेब ऑफ़्सेट प्रिंटिंग",
      woTagline: "गति। पैमाना। सटीकता।",
      woHeroTitle: "हाई-वॉल्यूम एक्सलेंस के लिए बनाया गया",
      woHeroDesc:
        "वेब ऑफ़्सेट प्रिंटिंग बिना रुके प्रोडक्शन के लिए डिज़ाइन किया गया है।",
      woHeroDesc2: "हर रोटेशन पॉवर, स्टेबिलिटी और एक्यूरेसी को जोड़ता है।",
      woPerfTitle: "प्रिंटिंग से आगे की पर्फॉर्मेंस",
      woPerfDesc:
        "हमारे वेब ऑफ़्सेट सिस्टम इंटीग्रेटेड इनलाइन फिनिशिंग के साथ आए हैं।",
      woPerfList: [
        "UV & प्रोटेक्टिव वार्निशिंग",
        "पंचिंग और पर्फोरेशन",
        "फोल्डिंग",
        "ग्लुइंग और बाइंडिंग",
        "कस्टम फिनिशिंग",
      ],
      woPerfFoot: "यह सीमलेस वर्कफ़लो मदद करता है।",
      woEnvTitle: "हाई स्पीड। कम पर्यावरणीय प्रभाव।",
      woEnvDesc: "हमारे ऑपरेशन एनर्जी-एफिसियंट हैं।",
      woEnvList: ["एनर्जी कंज़ंप्शन", "मटेरियल वेस्ट", "प्रोडक्शन डाउनटाइम"],
      woEnvFoot: "यह हमें सस्टेनेबल प्रैक्टिसेज़ देता है।",
      woSusTitle: "जिम्मेदार प्रिंटिंग",
      woSusDesc: "पर्यावरण की देखभाल हमारी प्रक्रिया में है।",
      woSusList: [
        "लो-एनर्जी टेक्नोलॉजी",
        "अल्कोहल-फ्री प्रोसेस",
        "इको-फ्रेंडली इंक्स",
        "पेपर रिसाइक्लिंग",
      ],
      woSusFoot: "पेपर वेस्ट रिसाइक्लिंग सिस्टम को सपोर्ट करता है।",
    },
  }[lang];

  return (
    <div
      style={{
        fontFamily: T.fontBody,
        minHeight: "100vh",
        background: isDark
          ? `linear-gradient(to bottom, rgba(2,6,23,0.92), rgba(2,6,23,0.95)), url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80')`
          : `linear-gradient(to bottom, rgba(255,255,255,0.88), rgba(248,250,252,0.92)), url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: c.text,
        transition: "background 0.35s, color 0.35s",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "10px 16px" : "10px 24px",
          background: scrolled
            ? isDark
              ? "rgba(2,6,23,0.95)"
              : "rgba(255,255,255,0.95)"
            : isDark
            ? "rgba(2,6,23,0.5)"
            : "rgba(255,255,255,0.7)",
          backdropFilter: "blur(18px)",
          borderBottom: scrolled
            ? `1px solid ${c.border}`
            : "1px solid transparent",
          boxShadow: scrolled ? T.shadowSm : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src={logoImg}
            alt="BK Offset"
            style={{
              width: 36,
              height: 36,
              borderRadius: T.radiusMd,
              objectFit: "cover",
              display: "block",
              boxShadow: `0 4px 14px ${T.primaryGlow}`,
              animation: "none",
            }}
          />
          <span
            style={{
              fontSize: isMobile ? "15px" : "17px",
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            {isTablet ? "BK Offset" : isMobile ? "BK" : "BK Offset"}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {!isAuth ? (
            <button
              onClick={() => setShowAuth(true)}
              style={{
                background: T.grad,
                color: "#fff",
                border: "none",
                padding: isMobile ? "7px 16px" : "8px 20px",
                borderRadius: T.radiusMd,
                fontWeight: 600,
                fontSize: isMobile ? "13px" : "14px",
                cursor: "pointer",
                boxShadow: `0 3px 12px ${T.primaryGlow}`,
                transition: "transform 0.2s, box-shadow 0.2s",
                whiteSpace: "nowrap",
                fontFamily: T.fontBody,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 6px 20px ${T.primaryGlow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 3px 12px ${T.primaryGlow}`;
              }}
            >
              {isMobile ? "Sign In" : `${text.signIn} / ${text.register}`}
            </button>
          ) : (
            <UserProfile
              user={user}
              isDark={isDark}
              onLogout={handleLogout}
              onEdit={() => setShowAuth(true)}
            />
          )}

          <button
            onClick={toggleLang}
            aria-label="Toggle Language"
            style={{
              background: "transparent",
              border: "none",
              color: c.textMid,
              cursor: "pointer",
              padding: isMobile ? "6px" : "7px",
              borderRadius: T.radiusMd,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = T.primaryFaint;
              e.currentTarget.style.color = T.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = c.textMid;
            }}
          >
            <Globe size={isMobile ? 17 : 19} />
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              background: "transparent",
              border: "none",
              color: c.textMid,
              cursor: "pointer",
              padding: "7px",
              borderRadius: T.radiusMd,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = T.primaryFaint;
              e.currentTarget.style.color = T.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = c.textMid;
            }}
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <HeroSection
        text={text}
        isDark={isDark}
        c={c}
        isAuth={isAuth}
        isMobile={isMobile}
        phoneNumber={phoneNumber}
        whatsappLink={whatsappLink}
        setShowAuth={setShowAuth}
      />

      {/* NEW STATS SECTION */}
      <StatsSection text={text} isDark={isDark} c={c} isMobile={isMobile} />

      {/* FEATURES BAR */}
      <FeaturesSection
        text={text}
        isDark={isDark}
        c={c}
        isMobile={isMobile}
        isTablet={isTablet}
      />

      {/* PRODUCTS */}
      <ProductsSection
        text={text}
        isDark={isDark}
        c={c}
        isMobile={isMobile}
        isTablet={isTablet}
      />

      {/* GALLERY */}
      <GallerySection
        text={text}
        isDark={isDark}
        c={c}
        isMobile={isMobile}
        isTablet={isTablet}
      />

      {/* WEB OFFSET PRINTING */}
      <WebOffsetSection
        text={text}
        isDark={isDark}
        c={c}
        isMobile={isMobile}
        isTablet={isTablet}
      />

      {/* LOCATION */}
      <LocationSection text={text} isDark={isDark} c={c} isMobile={isMobile} />

      {/* FOOTER */}
      <Footer
        isAuth={isAuth}
        isDark={isDark}
        phoneNumber={phoneNumber}
        whatsappLink={whatsappLink}
        isMobile={isMobile}
      />

      <SocialMediaIcons
        isDark={isDark}
        isAuthenticated={isAuth}
        windowWidth={windowWidth}
      />

      {showAuth && <Auth isDark={isDark} onAuthComplete={handleAuthComplete} />}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════ */
function HeroSection({
  text,
  isDark,
  c,
  isAuth,
  isMobile,
  phoneNumber,
  whatsappLink,
  setShowAuth,
}) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? "80px 20px 60px" : "600px 32px 90px",
        textAlign: "center",
        background: isDark
          ? `linear-gradient(rgba(12,35,64,0.85), rgba(270,6,23,0.90)), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80')`
          : `linear-gradient(rgba(224,242,254,0.80), rgba(255,255,255,0.88)), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${T.primaryGlow} 0%, transparent 70%)`,
          pointerEvents: "none",
          animation: "pulse 8s ease-in-out infinite",
        }}
      />

      <FloatingParticles isDark={isDark} count={isMobile ? 30 : 50} />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 1,

        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: T.primaryFaint,
            border: `1px solid ${isDark ? T.primaryDark : T.primaryLight}`,
            borderRadius: "999px",
            padding: "6px 14px",
            marginBottom: "24px",
            color: T.primary,
            fontSize: isMobile ? "12px" : "13px",
            fontWeight: 600,
            animation: isVisible ? "slideDown 0.6s ease-out" : "none",
          }}
        >
          <Sparkles size={14} /> Premium Printing Services
        </div>

        <h1
          style={{
            fontSize: isMobile ? "32px" : "clamp(38px, 6.5vw, 68px)",
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1.1,
            marginBottom: "18px",
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "slideUp 0.8s ease-out 0.2s backwards"
              : "none",
          }}
        >
          {text.heroTitle}
          <br />
          <span
            style={{
              background: T.gradAnimated,
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {text.heroTitle2}
          </span>
        </h1>

        <p
          style={{
            fontSize: isMobile ? "14px" : "clamp(15px, 1.8vw, 18px)",
            color: c.textMid,
            lineHeight: 1.7,
            marginBottom: "32px",
            maxWidth: 560,
            margin: "0 auto 32px",
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "slideUp 0.8s ease-out 0.4s backwards"
              : "none",
          }}
        >
          {text.heroSub}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "slideUp 0.8s ease-out 0.6s backwards"
              : "none",
          }}
        >
          {isAuth ? (
            <>
              <HeroBtn
                href={`tel:${phoneNumber}`}
                icon={<Phone size={17} />}
                label="Call Now"
                bg={T.grad}
                shadow={T.primaryGlow}
                isMobile={isMobile}
              />
              <HeroBtn
                href={whatsappLink}
                icon={<MessageCircle size={17} />}
                label="WhatsApp"
                bg="linear-gradient(135deg, #16a34a 0%, #22c55e 100%)"
                shadow="rgba(22,163,74,0.35)"
                target="_blank"
                rel="noopener noreferrer"
                isMobile={isMobile}
              />
            </>
          ) : (
            <button
              onClick={() => setShowAuth(true)}
              style={{
                background: T.grad,
                color: "#fff",
                border: "none",
                padding: isMobile ? "11px 24px" : "13px 30px",
                borderRadius: T.radiusLg,
                fontWeight: 700,
                fontSize: isMobile ? "14px" : "15px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: `0 6px 24px ${T.primaryGlow}`,
                transition: "transform 0.25s, box-shadow 0.25s",
                fontFamily: T.fontBody,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-3px) scale(1.03)";
                e.currentTarget.style.boxShadow = `0 12px 32px ${T.primaryGlow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = `0 6px 24px ${T.primaryGlow}`;
              }}
            >
              <User size={17} />{" "}
              {isMobile ? text.signIn : `${text.signIn} to Contact Us`}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

/* HERO CTA BUTTON */
function HeroBtn({ href, icon, label, bg, shadow, target, rel, isMobile }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: bg,
        color: "#fff",
        padding: isMobile ? "11px 24px" : "13px 30px",
        borderRadius: "12px",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "9px",
        fontWeight: 700,
        fontSize: isMobile ? "14px" : "15px",
        boxShadow: hov ? `0 12px 28px ${shadow}` : `0 4px 16px ${shadow}`,
        transform: hov
          ? "translateY(-3px) scale(1.04)"
          : "translateY(0) scale(1)",
        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
      }}
    >
      {icon} {label}
    </a>
  );
}

/* FEATURES SECTION */
function FeaturesSection({ text, isDark, c, isMobile }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : "repeat(auto-fit, minmax(220px, 1fr))",
        padding: isMobile ? "40px 20px" : "52px 32px",
        gap: isMobile ? "32px" : "0",
        background: isDark
          ? `linear-gradient(rgba(15,23,42,0.90), rgba(15,23,42,0.92)), url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`
          : `linear-gradient(rgba(240,249,255,0.88), rgba(240,249,255,0.91)), url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderTop: `1px solid ${c.border}`,
        borderBottom: `1px solid ${c.border}`,
      }}
    >
      <FeatureItem
        icon={<Award size={22} />}
        title={text.quality}
        desc={text.qualityDesc}
        isDark={isDark}
        isVisible={isVisible}
        delay={0}
      />
      <FeatureItem
        icon={<Sparkles size={22} />}
        title={text.experience}
        desc={text.experienceDesc}
        isDark={isDark}
        isVisible={isVisible}
        delay={0.15}
      />
      <FeatureItem
        icon={<Clock size={22} />}
        title={text.fast}
        desc={text.fastDesc}
        isDark={isDark}
        isVisible={isVisible}
        delay={0.3}
      />
    </section>
  );
}

function FeatureItem({ icon, title, desc, isDark, isVisible, delay }) {
  const [hov, setHov] = useState(false);
  const c = th(isDark);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        textAlign: "center",
        padding: "0 20px",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
        opacity: isVisible ? 1 : 0,
        animation: isVisible
          ? `slideUp 0.8s ease-out ${delay}s backwards`
          : "none",
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "12px",
          background: hov ? T.grad : T.primaryFaint,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 12px",
          color: hov ? "#fff" : T.primary,
          boxShadow: hov ? `0 6px 18px ${T.primaryGlow}` : "none",
          transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontWeight: 700,
          fontSize: "15px",
          color: c.text,
          marginBottom: "4px",
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: "13px", color: c.textDim, lineHeight: 1.5 }}>
        {desc}
      </div>
    </div>
  );
}

/* PRODUCTS SECTION */
function ProductsSection({ text, isDark, c, isMobile, isTablet }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? "60px 20px" : "100px 32px",
        maxWidth: 1180,
        margin: "0 auto",
      }}
    >
      <SectionHeader title={text.products} isVisible={isVisible} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
            ? "repeat(2, 1fr)"
            : "repeat(auto-fit, minmax(300px, 1fr))",
          gap: isMobile ? "20px" : "24px",
        }}
      >
        {[
          {
            title: "Visiting Cards",
            desc: "Premium cards with sharp print & elegant finish",
          },
          {
            title: "Bill Books",
            desc: "Durable multi-copy billing books for your business",
          },
          {
            title: "Pamphlets",
            desc: "High-quality promotional prints that stand out",
          },
          {
            title: "Letterheads",
            desc: "Professional letterheads for your brand",
          },
          {
            title: "Brochures",
            desc: "Eye-catching brochures with vibrant colors",
          },
          { title: "Envelopes", desc: "Custom envelopes in all sizes" },
        ].map((p, idx) => (
          <ProductCard
            key={p.title}
            {...p}
            isDark={isDark}
            c={c}
            isMobile={isMobile}
            isVisible={isVisible}
            delay={idx * 0.1}
          />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ title, desc, isDark, c, isMobile, isVisible, delay }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: c.surf,
        border: `1px solid ${hov ? T.primary : c.border}`,
        borderRadius: T.radiusCard,
        padding: isMobile ? "24px" : "28px",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hov
          ? isDark
            ? `0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px ${T.primaryFaint}`
            : `0 16px 40px rgba(0,0,0,0.10), 0 0 0 1px ${T.primaryFaint}`
          : T.shadowSm,
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
        opacity: isVisible ? 1 : 0,
        animation: isVisible
          ? `slideUp 0.6s ease-out ${delay}s backwards`
          : "none",
      }}
    >
      <div
        style={{
          width: 50,
          height: 50,
          borderRadius: "12px",
          background: hov ? T.grad : T.primaryFaint,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "18px",
          color: hov ? "#fff" : T.primary,
          boxShadow: hov ? `0 5px 16px ${T.primaryGlow}` : "none",
          transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
          transform: hov ? "rotate(5deg) scale(1.05)" : "rotate(0) scale(1)",
        }}
      >
        <Printer size={22} />
      </div>
      <h3
        style={{
          fontSize: "17px",
          fontWeight: 700,
          marginBottom: "8px",
          color: c.text,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: c.textDim,
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

/* GALLERY SECTION */
function GallerySection({ text, isDark, c, isMobile, isTablet }) {
  const [ref, isVisible] = useScrollAnimation();

  // FIXED IMAGE LINKS - removed line breaks and backslashes
  const images = [
    "https://imgs.search.brave.com/d-BxVJB0AVwv7mytORTSGUxHpqMjhHtXeMTPvJqZIPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvODB6X0hUbVRs/ZDQvaHFkZWZhdWx0/LmpwZw",

    "https://imgs.search.brave.com/HXs3SA9y5tqE3-KGyiE53BmUGqKZaxqNbzgADA568tU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvQy0xaEdEd21a/WEkvaHFkZWZhdWx0/LmpwZw",

    "https://imgs.search.brave.com/8sgKubUmPoPQfFSODo5PPaOi7AUVqGw_TIS14-PxwQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wcmVz/cy1wcmludGluZy1w/cmludHNob3Atb2Zm/c2V0LTE2OTMxMzI2/LmpwZw",

    "https://imgs.search.brave.com/prJNhXtQjZFHiNNQsg6lEPcAheXrDNlY1szXvRBQlCo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/Mjc3MDY5L3Bob3Rv/L29mZnNldC1wcmlu/dGluZy1tYWNoaW5l/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz10aHF3cWl2ellU/SEtCdzBxYzgtODBM/UFVvX1AxVHlaMExq/bHQ0RDlhdm0wPQ",

    "https://imgs.search.brave.com/GT4miD1XayG3oiBz9XsPpJ26JFAv4R1pj4j1e_8rwt0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/ODg1OTczL3Bob3Rv/L3BvbHlncmFwaGlj/LXByb2Nlc3MuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVp0/NVE3VnpGREJwX1Nj/Z0d5ZVRRTHprRFNO/MUJ1aS1xaV96eW9N/dzl2TEk9",

    "https://imgs.search.brave.com/W3t3GjUQl9eULJkzTE2O694CXodPY8Jn1OZCXSBBGNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/ODI1NjM0My9waG90/by9wYXBlci10cmlt/bWluZy1vbi1hLWd1/aWxsb3RpbmUtcHJp/bnRpbmctaG91c2Ut/Y3V0dGVyLWZvci1j/dXR0aW5nLXBhcGVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0tZlBQRmZpLXBH/Nnp1Q2lyTUxwcUxD/UkdFQV91NE1sNTZu/UXUtTVlRcTRBPQ",

    "https://imgs.search.brave.com/3zVRqhp8m_8bPZQUGAFEZ8pl7YQlHdzqJmMLi0g1SzI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFjaGluZXNlZWtl/ci5jb20vZGF0YS9s/aXN0aW5nL2ltZy92/Z2EvbXMvNTEvNTYv/MjEwNzgyMTItMDgu/anBnP3Y9MTc2OTUw/NDA5NA",

    "https://imgs.search.brave.com/jIEpK8ZUTWenoD4ppVVn1tb3GOdOfbNmJ50jcNh10QQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/OTE0OTM4L3Bob3Rv/L2hlYXZ5LWR1dHkt/cGFwZXItZ3VpbGxv/dGluZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cV82YWEt/djlqQkFYWGdKekNx/bGRrbWkzaFZUSW5m/X1l6MUd2R01EN0E3/WT0",
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? "60px 20px" : "100px 32px",
        background: isDark
          ? `linear-gradient(rgba(15,23,42,0.90), rgba(15,23,42,0.93)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')`
          : `linear-gradient(rgba(240,249,255,0.85), rgba(240,249,255,0.89)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
        backgroundRepeat: "no-repeat",
        borderTop: `1px solid ${c.border}`,
        borderBottom: `1px solid ${c.border}`,
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHeader title={text.gallery} isVisible={isVisible} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
              ? "repeat(2, 1fr)"
              : "repeat(auto-fill, minmax(280px, 1fr))",
            gap: isMobile ? "16px" : "20px",
          }}
        >
          {images.map((src, i) => (
            <GalleryCard
              key={i}
              src={src}
              alt={`Printing Machine ${i + 1}`}
              isDark={isDark}
              isVisible={isVisible}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ src, alt, isDark, isVisible, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: T.radiusCard,
        aspectRatio: "4/3",
        cursor: "pointer",
        border: `1px solid ${
          hov ? T.primary : isDark ? T.borderDark : T.borderLight
        }`,
        boxShadow: hov ? `0 12px 32px ${T.primaryGlow}` : T.shadowSm,
        transform: hov
          ? "translateY(-4px) scale(1.02)"
          : "translateY(0) scale(1)",
        transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
        opacity: isVisible ? 1 : 0,
        animation: isVisible
          ? `scaleIn 0.6s ease-out ${delay}s backwards`
          : "none",
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: hov ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.5s cubic-bezier(.4,0,.2,1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(2,6,23,0.45) 0%, transparent 55%)",
          opacity: hov ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />
    </div>
  );
}

/* SECTION HEADER */
function SectionHeader({ title, isVisible }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        textAlign: "center",
        marginBottom: "56px",
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? "slideUp 0.8s ease-out" : "none",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(26px, 4vw, 40px)",
          fontWeight: 800,
          letterSpacing: "-1px",
          margin: 0,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: hov ? 72 : 48,
          height: 3,
          borderRadius: "999px",
          background: T.grad,
          margin: "14px auto 0",
          boxShadow: `0 2px 8px ${T.primaryGlow}`,
          transition: "width 0.35s cubic-bezier(.4,0,.2,1)",
        }}
      />
    </div>
  );
}

/* WEB OFFSET SECTION */
function WebOffsetSection({ text, isDark, c, isMobile, isTablet }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      style={{
        background: isDark
          ? `linear-gradient(rgba(2,6,23,0.90), rgba(2,6,23,0.93)), url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`
          : `linear-gradient(rgba(255,255,255,0.85), rgba(248,250,252,0.89)), url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <WebOffsetHero
        text={text}
        isDark={isDark}
        c={c}
        isMobile={isMobile}
        isVisible={isVisible}
      />
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: isMobile ? "0 20px 60px" : "0 32px 100px",
        }}
      >
        <WebOffsetBlock
          icon={<Layers size={22} />}
          title={text.woPerfTitle}
          desc={text.woPerfDesc}
          items={text.woPerfList}
          footer={text.woPerfFoot}
          isDark={isDark}
          c={c}
          accent="layers"
          isMobile={isMobile}
          isTablet={isTablet}
          isVisible={isVisible}
          delay={0}
        />
        <WebOffsetBlock
          icon={<Zap size={22} />}
          title={text.woEnvTitle}
          desc={text.woEnvDesc}
          items={text.woEnvList}
          footer={text.woEnvFoot}
          isDark={isDark}
          c={c}
          accent="zap"
          isMobile={isMobile}
          isTablet={isTablet}
          reduceLabel="By using optimized drying systems and modern press technology, we significantly reduce:"
          isVisible={isVisible}
          delay={0.2}
        />
        <WebOffsetBlock
          icon={<Leaf size={22} />}
          title={text.woSusTitle}
          desc={text.woSusDesc}
          items={text.woSusList}
          footer={text.woSusFoot}
          isDark={isDark}
          c={c}
          accent="leaf"
          isMobile={isMobile}
          isTablet={isTablet}
          isVisible={isVisible}
          delay={0.4}
        />
      </div>
    </section>
  );
}

function WebOffsetHero({ text, isDark, c, isMobile, isVisible }) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "70px 20px 60px" : "110px 32px 100px",
        background: isDark
          ? `linear-gradient(160deg, rgba(12,30,51,0.88) 0%, rgba(2,6,23,0.91) 55%, rgba(10,22,40,0.89) 100%), url('https://images.unsplash.com/photo-1581092918484-8313e1f6c1ef?w=1920&q=80')`
          : `linear-gradient(160deg, rgba(224,242,254,0.82) 0%, rgba(240,249,255,0.86) 40%, rgba(255,255,255,0.89) 100%), url('https://images.unsplash.com/photo-1581092918484-8313e1f6c1ef?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!isMobile && (
        <>
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${T.primaryGlow} 0%, transparent 70%)`,
              pointerEvents: "none",
              animation: "pulse 10s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-60px",
              left: "-60px",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)`,
              pointerEvents: "none",
              animation: "pulse 8s ease-in-out infinite",
            }}
          />
        </>
      )}

      <div
        style={{
          maxWidth: 780,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 16px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: T.primaryFaint,
            border: `1px solid ${isDark ? T.primaryDark : T.primaryLight}`,
            borderRadius: "999px",
            padding: "7px 18px",
            marginBottom: "24px",
            color: T.primary,
            fontSize: isMobile ? "11px" : "13px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "slideDown 0.6s ease-out" : "none",
          }}
        >
          <Printer size={14} /> {text.woTitle}
        </div>

        <h2
          style={{
            fontSize: isMobile ? "28px" : "clamp(32px, 5.5vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            marginBottom: "16px",
            background: T.gradAnimated,
            backgroundSize: "300% 300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "slideUp 0.8s ease-out 0.2s backwards"
              : "none",
          }}
        >
          {text.woTagline}
        </h2>

        <h3
          style={{
            fontSize: isMobile ? "18px" : "clamp(20px, 2.8vw, 26px)",
            fontWeight: 700,
            color: c.text,
            marginBottom: "20px",
            letterSpacing: "-0.5px",
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "slideUp 0.8s ease-out 0.4s backwards"
              : "none",
          }}
        >
          {text.woHeroTitle}
        </h3>

        <p
          style={{
            fontSize: isMobile ? "14px" : "15px",
            color: c.textMid,
            lineHeight: 1.8,
            marginBottom: "16px",
            maxWidth: 680,
            margin: "0 auto 16px",
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "slideUp 0.8s ease-out 0.6s backwards"
              : "none",
          }}
        >
          {text.woHeroDesc}
        </p>
        <p
          style={{
            fontSize: isMobile ? "14px" : "15px",
            color: c.textMid,
            lineHeight: 1.8,
            maxWidth: 680,
            margin: "0 auto",
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "slideUp 0.8s ease-out 0.8s backwards"
              : "none",
          }}
        >
          {text.woHeroDesc2}
        </p>
      </div>
    </div>
  );
}

function WebOffsetBlock({
  icon,
  title,
  desc,
  items,
  footer,
  c,
  accent,
  reduceLabel,
  isMobile,
  isTablet,
  isVisible,
  delay,
}) {
  const [hov, setHov] = useState(false);

  const accentColor =
    accent === "leaf" ? "#22c55e" : accent === "zap" ? "#f59e0b" : T.primary;
  const accentGlow =
    accent === "leaf"
      ? "rgba(34,197,94,0.25)"
      : accent === "zap"
      ? "rgba(245,158,11,0.25)"
      : T.primaryGlow;
  const accentFaint =
    accent === "leaf"
      ? "rgba(34,197,94,0.08)"
      : accent === "zap"
      ? "rgba(245,158,11,0.08)"
      : T.primaryFaint;
  const accentGrad =
    accent === "leaf"
      ? "linear-gradient(135deg, #16a34a 0%, #4ade80 100%)"
      : accent === "zap"
      ? "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)"
      : T.grad;

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "grid",
        gridTemplateColumns: isTablet || isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "32px" : "48px",
        alignItems: "start",
        marginBottom: isMobile ? "50px" : "80px",
        background: c.surf,
        border: `1px solid ${hov ? accentColor : c.border}`,
        borderRadius: T.radiusXl,
        padding: isMobile ? "32px 24px" : "48px",
        boxShadow: hov
          ? `0 20px 48px ${accentGlow}, 0 0 0 3px ${accentFaint}`
          : T.shadowSm,
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
        opacity: isVisible ? 1 : 0,
        animation: isVisible
          ? `slideUp 0.8s ease-out ${delay}s backwards`
          : "none",
      }}
    >
      <div>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "14px",
            background: hov ? accentGrad : accentFaint,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: hov ? "#fff" : accentColor,
            boxShadow: hov ? `0 6px 20px ${accentGlow}` : "none",
            transform: hov ? "scale(1.08) rotate(3deg)" : "scale(1) rotate(0)",
            transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
            marginBottom: "22px",
          }}
        >
          {icon}
        </div>

        <h3
          style={{
            fontSize: isMobile ? "18px" : "clamp(18px, 2.2vw, 22px)",
            fontWeight: 750,
            color: c.text,
            letterSpacing: "-0.4px",
            marginBottom: "14px",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: "15px",
            color: c.textMid,
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          {desc}
        </p>

        {reduceLabel && (
          <p
            style={{
              fontSize: "14px",
              color: c.textDim,
              lineHeight: 1.7,
              marginTop: "14px",
              fontStyle: "italic",
            }}
          >
            {reduceLabel}
          </p>
        )}

        {footer && (
          <p
            style={{
              fontSize: "14px",
              color: c.textMid,
              lineHeight: 1.7,
              marginTop: "20px",
              paddingTop: "16px",
              borderTop: `1px solid ${c.border}`,
              fontStyle: "italic",
            }}
          >
            {footer}
          </p>
        )}
      </div>

      <div
        style={{
          background: c.bg,
          border: `1px solid ${c.border}`,
          borderRadius: T.radiusLg,
          padding: isMobile ? "24px 20px" : "28px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: accentGrad,
              boxShadow: `0 0 8px ${accentGlow}`,
            }}
          />
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: accentColor,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            {accent === "leaf"
              ? "Sustainability"
              : accent === "zap"
              ? "Reductions"
              : "Capabilities"}
          </span>
        </div>

        {items.map((item, i) => (
          <WebOffsetListItem
            key={i}
            label={item}
            accentColor={accentColor}
            accentFaint={accentFaint}
            accentGrad={accentGrad}
            accentGlow={accentGlow}
            c={c}
          />
        ))}
      </div>
    </div>
  );
}

function WebOffsetListItem({
  label,
  accentColor,
  accentFaint,
  accentGrad,
  accentGlow,
  c,
}) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "14px",
        padding: "11px 14px",
        borderRadius: T.radiusMd,
        background: hov ? accentFaint : "transparent",
        border: `1px solid ${hov ? accentColor : "transparent"}`,
        transform: hov ? "translateX(4px)" : "translateX(0)",
        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
        marginBottom: "6px",
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          minWidth: 22,
          borderRadius: "50%",
          background: hov ? accentGrad : accentFaint,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1px",
          boxShadow: hov ? `0 3px 10px ${accentGlow}` : "none",
          transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M2 5.5L4 7.5L8 3"
            stroke={hov ? "#fff" : accentColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <span
        style={{
          fontSize: "14px",
          color: hov ? c.text : c.textMid,
          fontWeight: hov ? 600 : 500,
          lineHeight: 1.6,
          transition: "color 0.2s",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* LOCATION SECTION */
function LocationSection({ text, c, isMobile }) {
  const [ref, isVisible] = useScrollAnimation();
  const [mapHov, setMapHov] = useState(false);
  const [addrHov, setAddrHov] = useState(false);

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? "60px 20px" : "100px 32px",
        maxWidth: 1180,
        margin: "0 auto",
      }}
    >
      <SectionHeader title={text.visit} isVisible={isVisible} />

      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <span
          onMouseEnter={() => setAddrHov(true)}
          onMouseLeave={() => setAddrHov(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: isMobile ? "14px" : "15px",
            fontWeight: 600,
            color: addrHov ? T.primary : c.textMid,
            background: addrHov ? T.primaryFaint : "transparent",
            border: `1px solid ${addrHov ? T.primary : "transparent"}`,
            borderRadius: "999px",
            padding: addrHov ? "8px 18px" : "8px 0",
            cursor: "default",
            transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "slideUp 0.8s ease-out" : "none",
          }}
        >
          <MapPin
            size={17}
            style={{
              color: T.primary,
              transition: "transform 0.3s",
              transform: addrHov ? "scale(1.2)" : "scale(1)",
            }}
          />
          Naveen Shahdara, Delhi
        </span>
      </div>

      <div
        onMouseEnter={() => setMapHov(true)}
        onMouseLeave={() => setMapHov(false)}
        style={{
          maxWidth: 860,
          margin: "0 auto",
          borderRadius: T.radiusCard,
          overflow: "hidden",
          border: `2px solid ${mapHov ? T.primary : c.border}`,
          boxShadow: mapHov
            ? `0 20px 48px ${T.primaryGlow}, 0 0 0 4px ${T.primaryFaint}`
            : T.shadowLg,
          transform: mapHov
            ? "translateY(-6px) scale(1.015)"
            : "translateY(0) scale(1)",
          transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
          opacity: isVisible ? 1 : 0,
          animation: isVisible
            ? "scaleIn 0.8s ease-out 0.2s backwards"
            : "none",
        }}
      >
        <iframe
          style={{
            width: "100%",
            height: isMobile ? "300px" : "380px",
            border: 0,
            display: "block",
          }}
          src="https://www.google.com/maps?q=Naveen%20Shahdara%20Delhi&output=embed"
          title="Location Map"
          loading="lazy"
        />
      </div>
    </section>
  );
}

/* FOOTER */
function Footer({ isAuth, isDark, phoneNumber, whatsappLink, isMobile }) {
  return (
    <footer
      style={{
        background: isDark ? "#020617" : "#0f172a",
        color: "#cbd5e1",
        padding: isMobile ? "50px 20px 24px" : "60px 32px 28px",
        textAlign: "center",
        borderTop: `1px solid ${isDark ? T.surfDark2 : "#1e293b"}`,
      }}
    >
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: T.radiusMd,
            background: T.grad,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 800,
            fontSize: "16px",
            margin: "0 auto 14px",
            boxShadow: `0 4px 14px ${T.primaryGlow}`,
          }}
        >
          BK
        </div>
        <div style={{ fontWeight: 700, fontSize: "18px", color: "#f1f5f9" }}>
          BK Offset Printing
        </div>
        <div
          style={{
            fontSize: "13px",
            color: "#64748b",
            marginTop: "8px",
            marginBottom: "20px",
          }}
        >
          Quality printing services since 1995
        </div>
        {isAuth && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <FooterIcon
              href={`tel:${phoneNumber}`}
              icon={<Phone size={17} />}
            />
            <FooterIcon
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              icon={<MessageCircle size={17} />}
            />
          </div>
        )}
        <div style={{ fontSize: "12px", color: "#475569" }}>
          © {new Date().getFullYear()} BK Offset Printing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ href, icon, target, rel }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        color: hov ? "#fff" : "#64748b",
        textDecoration: "none",
        width: 40,
        height: 40,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: hov ? T.grad : "rgba(255,255,255,0.06)",
        border: `1px solid ${hov ? "transparent" : "#334155"}`,
        boxShadow: hov ? `0 4px 16px ${T.primaryGlow}` : "none",
        transform: hov
          ? "translateY(-3px) scale(1.1)"
          : "translateY(0) scale(1)",
        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
      }}
    >
      {icon}
    </a>
  );
}
