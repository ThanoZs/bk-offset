/**
 * App.jsx — Root entry point for BK Offset Printing web application.
 * Manages global layout, authentication states, and provides the main scroll-based 
 * experience through a sequence of themed sections.
 */

import React, { useState, useEffect } from "react";
import { T, th } from "./utils/designTokens";
import { translations } from "./utils/translations";
import { PHONE_NUMBER, WHATSAPP_LINK, SCROLL_THRESHOLD } from "./utils/constants";
import { ThemeProvider, useThemeContext } from "./context/ThemeContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Layout & Core UI
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { SocialMediaIcons } from "./components/common/SocialMediaIcons";
import { SEO } from './components/common/SEO';
import { DotWave } from "./components/common/DotWave";

// Landing Sections
import { HeroSection } from "./components/sections/HeroSection";
import { ProductsSection } from "./components/sections/ProductsSection";
import { GallerySection } from "./components/sections/GallerySection";
import { WebOffsetSection } from "./components/sections/WebOffsetSection";
import { LocationSection } from "./components/sections/LocationSection";

// Modal Overlays
import { AuthModal } from "./components/auth/AuthModal";

// Global Styles
import "./App.css";

/**
 * AppContent — Inner component that has access to Theme and Auth contexts.
 */
function AppContent() {
  const { isDark } = useThemeContext();
  const { user } = useAuth();
  
  // ── Global App State ──
  const [lang, setLang] = useState(() => sessionStorage.getItem("bk_lang") || "en");
  const [scrolled, setScrolled] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Design helpers
  const c = th(isDark);
  const text = translations[lang];
  const isMobile = windowWidth < 640;

  /**
   * Scroll Guard — Prevents background scrolling when the Auth Modal is active.
   */
  useEffect(() => {
    document.body.style.overflow = showAuth ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [showAuth]);

  /**
   * Global Event Listeners — Monitors scroll depth and window resize for layout logic.
   */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    const onResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  /**
   * toggleLang — Switches application between English and Hindi.
   */
  const toggleLang = () => {
    const newLang = lang === "en" ? "hi" : "en";
    setLang(newLang);
    sessionStorage.setItem("bk_lang", newLang);
  };

  return (
    <>
      {/* Global Meta Tags */}
      <SEO 
        title="BK Offset Printing - Premium Book & Commercial Printing Services in Delhi" 
        description="Premium offset printing in Street no. 2, Zulfe Bengal, Dilshad Garden, Delhi. Specializing in book printing, visiting cards, brochures, and commercial printing since 1995." 
        keywords="offset printing, book printing services, printing press near me, custom book printing, visiting cards, brochure printing, Delhi printing services" 
      />

      <Navbar
        isDark={isDark}
        toggleTheme={useThemeContext().toggleTheme}
        lang={lang}
        toggleLang={toggleLang}
        text={text}
        onAuthClick={() => setShowAuth(true)}
        scrolled={scrolled}
      />
      
      <main style={styles.main(isDark, c.text)}>
        {/* Atmosphere — Hero & Products share a single DotWave canvas for performance */}
        <div style={styles.heroCloud}>
          {isDark && <DotWave isDark={isDark} />}
          <HeroSection
            text={text}
            isDark={isDark}
            c={c}
            isAuth={!!user}
            isMobile={isMobile}
            setShowAuth={setShowAuth}
          />
          <ProductsSection text={text} isDark={isDark} c={c} isMobile={isMobile} />
        </div>

        {/* Informational Sections */}
        <GallerySection text={text} isDark={isDark} c={c} isMobile={isMobile} />
        <WebOffsetSection text={text} isDark={isDark} c={c} isMobile={isMobile} />
        <LocationSection text={text} c={c} isMobile={isMobile} />

        <Footer isDark={isDark} isMobile={isMobile} />

        {/* Floating Utility Hooks */}
        <SocialMediaIcons
          isDark={isDark}
          isAuthenticated={!!user}
          windowWidth={windowWidth}
        />
      </main>

      {/* Auth Modal Portal */}
      {showAuth && <AuthModal isDark={isDark} onClose={() => setShowAuth(false)} />}
    </>
  );
}

/**
 * App — Root Wrapper providing Global Contexts.
 */
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

/* ─── Consolidated Styles ────────────────────────────────── */

const styles = {
  main: (isDark, textColor) => ({
    fontFamily: T.fontBody,
    minHeight: "100vh",
    background: isDark ? "#020617" : "#FFFFFF",
    color: textColor,
    transition: "background 0.35s, color 0.35s",
  }),
  heroCloud: {
    position: "relative",
  },
};

export default App;
