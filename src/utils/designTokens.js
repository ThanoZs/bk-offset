// Design tokens - single source of truth
export const T = {
  // Primary palette — deep-sky / cyan family
  primary: "#0ea5e9",
  primaryDark: "#0284c7",
  primaryLight: "#38bdf8",
  primaryGlow: "rgba(14, 165, 233, 0.35)",
  primaryFaint: "rgba(14, 165, 233, 0.08)",

  // Accent — teal for CTAs / highlights
  accent: "#06b6d4",
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
  surfLight: "#f0f9ff",
  surfLight2: "#e0f2fe",
  borderLight: "#cbd5e1",
  textLight: "#0f172a",
  textMidLight: "#475569",
  textDimLight: "#94a3b8",

  // Dark theme
  bgDark: "#020617",
  surfDark: "#0f172a",
  surfDark2: "#1e293b",
  borderDark: "#334155",
  textDark: "#f1f5f9",
  textMidDark: "#94a3b8",
  textDimDark: "#64748b",

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

// Theme helper
export const th = (isDark) => ({
  bg: isDark ? T.bgDark : T.bgLight,
  surf: isDark ? T.surfDark : T.surfLight,
  surf2: isDark ? T.surfDark2 : T.surfLight2,
  border: isDark ? T.borderDark : T.borderLight,
  text: isDark ? T.textDark : T.textLight,
  textMid: isDark ? T.textMidDark : T.textMidLight,
  textDim: isDark ? T.textDimDark : T.textDimLight,
});
