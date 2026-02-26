import React, { useState, useEffect } from "react";
import { T, th } from "./utils/designTokens";
import { translations } from "./utils/translations";
import { PHONE_NUMBER, WHATSAPP_LINK, SCROLL_THRESHOLD } from "./utils/constants";
import { ThemeProvider, useThemeContext } from "./context/ThemeContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
// import { SEO } from './components/common/SEO';

// Layout Components
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { SocialMediaIcons } from "./components/common/SocialMediaIcons";
import { SEO } from './components/common/SEO';

// Section Components
import { HeroSection } from "./components/sections/HeroSection";
import { ProductsSection } from "./components/sections/ProductsSection";
import { GallerySection } from "./components/sections/GallerySection";
import { WebOffsetSection } from "./components/sections/WebOffsetSection";
import { LocationSection } from "./components/sections/LocationSection";
// import { SEO } from './components/common/SEO';

// Auth Component
import { AuthModal } from "./components/auth/AuthModal";
// import { SEO } from './components/common/SEO';

// Import CSS
import "./App.css";
// import { SEO } from './components/common/SEO';

function AppContent() {
  const { isDark } = useThemeContext();
  const { user } = useAuth();
  const [lang, setLang] = useState(() => sessionStorage.getItem("bk_lang") || "en");
  const [scrolled, setScrolled] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const c = th(isDark);
  const text = translations[lang];
  const isMobile = windowWidth < 640;

  // Prevent body scroll when modals are open
  useEffect(() => {
    if (showAuth) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showAuth]);

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

  const toggleLang = () => {
    const newLang = lang === "en" ? "hi" : "en";
    setLang(newLang);
    sessionStorage.setItem("bk_lang", newLang);
  };

  return (
    <>
      <SEO title="BK Offset Printing - Premium Book & Commercial Printing Services in Delhi" description="Premium offset printing in Street no. 2, Zulfe Bengal, Dilshad Garden, Delhi. Specializing in book printing, visiting cards, brochures, and commercial printing since 1995." keywords="offset printing, book printing services, printing press near me, custom book printing, visiting cards, brochure printing, Delhi printing services" />
      <Navbar
        isDark={isDark}
        toggleTheme={useThemeContext().toggleTheme}
        lang={lang}
        toggleLang={toggleLang}
        text={text}
        onAuthClick={() => setShowAuth(true)}
        scrolled={scrolled}
      />
      
      <div
        style={{
          fontFamily: T.fontBody,
          minHeight: "100vh",
          background: isDark
            ? "linear-gradient(to bottom, rgba(2,6,23,0.92), rgba(2,6,23,0.95)), url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80')"
            : "linear-gradient(to bottom, rgba(255,255,255,0.88), rgba(248,250,252,0.92)), url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: c.text,
          transition: "background 0.35s, color 0.35s",
        }}
      >
        <HeroSection
          text={text}
          isDark={isDark}
          c={c}
          isAuth={!!user}
          isMobile={isMobile}
          setShowAuth={setShowAuth}
        />

                        <ProductsSection text={text} isDark={isDark} c={c} isMobile={isMobile} />
        <GallerySection text={text} isDark={isDark} c={c} isMobile={isMobile} />
        <WebOffsetSection text={text} isDark={isDark} c={c} isMobile={isMobile} />
        <LocationSection text={text} c={c} isMobile={isMobile} />

        <Footer isDark={isDark} isMobile={isMobile} />

        <SocialMediaIcons
          isDark={isDark}
          isAuthenticated={!!user}
          windowWidth={windowWidth}
        />
      </div>

      {/* Auth Modal */}
      {showAuth && <AuthModal isDark={isDark} onClose={() => setShowAuth(false)} />}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;


