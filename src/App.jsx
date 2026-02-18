import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { T, th } from "./utils/designTokens";
import { translations } from "./utils/translations";
import { PHONE_NUMBER, WHATSAPP_LINK, SCROLL_THRESHOLD } from "./utils/constants";
import { ThemeProvider, useThemeContext } from "./context/ThemeContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { OrdersProvider } from "./context/OrdersContext";

// Layout Components
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { SocialMediaIcons } from "./components/common/SocialMediaIcons";

// Section Components
import { HeroSection } from "./components/sections/HeroSection";
import { StatsSection } from "./components/sections/StatsSection";
import { FeaturesSection } from "./components/sections/FeaturesSection";
import { ProductsSection } from "./components/sections/ProductsSection";
import { GallerySection } from "./components/sections/GallerySection";
import { WebOffsetSection } from "./components/sections/WebOffsetSection";
import { LocationSection } from "./components/sections/LocationSection";

// Auth Component
import { AuthModal } from "./components/auth/AuthModal";

// Order Components
import PrintingPressOrder from "./components/orders/PrintingPressOrder";
import MyOrders from "./components/orders/MyOrders";

// Import CSS
import "./App.css";
import "./components/orders/PrintingPressOrder.css";

function AppContent() {
  const { isDark } = useThemeContext();
  const { user } = useAuth();
  const [lang, setLang] = useState(() => sessionStorage.getItem("bk_lang") || "en");
  const [scrolled, setScrolled] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showMyOrders, setShowMyOrders] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const c = th(isDark);
  const text = translations[lang];
  const isMobile = windowWidth < 640;

  // Prevent body scroll when modals are open
  useEffect(() => {
    if (showMyOrders || showOrderForm || showAuth) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMyOrders, showOrderForm, showAuth]);

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
        height: "100%",
        overflow: showMyOrders || showOrderForm || showAuth ? "hidden" : "auto",
      }}
    >
      <Navbar
        isDark={isDark}
        toggleTheme={useThemeContext().toggleTheme}
        lang={lang}
        toggleLang={toggleLang}
        text={text}
        onAuthClick={() => setShowAuth(true)}
        onMyOrdersClick={() => setShowMyOrders(true)}
        scrolled={scrolled}
      />

      <HeroSection
        text={text}
        isDark={isDark}
        c={c}
        isAuth={!!user}
        isMobile={isMobile}
        setShowAuth={setShowAuth}
        setShowOrderForm={setShowOrderForm}
      />

      <StatsSection text={text} isDark={isDark} c={c} isMobile={isMobile} />
      <FeaturesSection text={text} isDark={isDark} c={c} isMobile={isMobile} />
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

      {/* Order Form Modal */}
      {showOrderForm && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: isDark ? "rgba(2,6,23,0.95)" : "rgba(255,255,255,0.98)",
            backdropFilter: "blur(10px)",
            zIndex: 1998,
            overflowY: "auto",
            padding: "20px",
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative" }}>
            <button
              onClick={() => setShowOrderForm(false)}
              style={{
                position: "sticky",
                top: "20px",
                right: 0,
                float: "right",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(14, 165, 233, 0.35)",
                zIndex: 1999,
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <X size={20} />
            </button>
            <PrintingPressOrder />
          </div>
        </div>
      )}

      {/* My Orders Modal - Fixed scrolling */}
      {showMyOrders && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: "0",
            right: "0",
            bottom: "0",
            background: "transparent", // Background is handled by MyOrders component
            zIndex: 1998,
            overflowY: "auto", // This enables scrolling within the modal only
            animation: "slideUp 0.2s ease-out",
          }}
        >
          <MyOrders onBack={() => setShowMyOrders(false)} isDark={isDark} />
        </div>
      )}

      {/* Auth Modal */}
      {showAuth && <AuthModal isDark={isDark} onClose={() => setShowAuth(false)} />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <OrdersProvider>
          <AppContent />
        </OrdersProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
