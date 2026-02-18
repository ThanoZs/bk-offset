import React, { useState } from "react";
import {
  Globe,
  Sun,
  Moon,
  User,
  LogOut,
  ShoppingBag,
  Menu,
  X,
  UserCircle,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

// Import logo directly
import logo from "../../assets/Logo/BK_logo_png.png";

export function Navbar({
  isDark,
  toggleTheme,
  lang,
  toggleLang,
  text,
  onAuthClick,
  onMyOrdersClick,
  scrolled,
}) {
  const { user, logout, isAuthenticated } = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const dropdownBtnStyle = {
    width: "100%",
    padding: "12px",
    background: "none",
    border: "none",
    borderRadius: "8px",
    color: isDark ? "#f1f5f9" : "#0f172a",
    cursor: "pointer",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textAlign: "left",
  };

  const dropdownBtnHover = (e) => {
    e.currentTarget.style.background = isDark ? "#334155" : "#f1f5f9";
  };

  const dropdownBtnLeave = (e) => {
    e.currentTarget.style.background = "none";
  };

  const handleLogout = () => {
    setShowProfile(false);
    setShowMobileMenu(false);
    logout();
  };

  const handleViewProfile = () => {
    setShowProfile(false);
    // Add view profile logic here (e.g., open profile modal)
    console.log("View profile clicked");
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 2000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 24px",
        background: isDark
          ? "rgba(2,6,23,0.95)"
          : "rgba(255,255,255,0.95)",
        borderBottom: scrolled
          ? "1px solid #cbd5e1"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img 
          src={logo}
          alt="BK Offset"
          style={{
            width: "40px",
            height: "40px",
            objectFit: "contain",
            borderRadius: "8px",
            display: "block",
            boxShadow: "0 4px 14px rgba(14, 165, 233, 0.35)",
          }}
          onError={(e) => {
            console.log("Logo failed to load in navbar");
            e.target.style.display = "none";
          }}
        />
        <span
          style={{
            fontSize: "17px",
            fontWeight: 700,
            color: isDark ? "#f1f5f9" : "#0f172a",
          }}
        >
          BK Offset
        </span>
      </div>

      {/* Right Side */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {!isAuthenticated ? (
          <button
            onClick={onAuthClick}
            style={{
              background:
                "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",
              color: "#fff",
              border: "none",
              padding: "8px 20px",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <User size={16} />
            Sign In
          </button>
        ) : (
          <>
            {/* User Profile Button */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowProfile(!showProfile)}
                style={{
                  background: "transparent",
                  border: "1px solid #cbd5e1",
                  borderRadius: "20px",
                  padding: "4px 12px 4px 4px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  {user?.firstName?.charAt(0) || "U"}
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    color: isDark ? "#f1f5f9" : "#0f172a",
                  }}
                >
                  Hi, {user?.firstName || "User"}
                </span>
              </button>

              {/* Profile Dropdown - Now only has View Profile */}
              {showProfile && (
                <>
                  <div
                    style={{
                      position: "fixed",
                      inset: 0,
                      zIndex: 1999,
                    }}
                    onClick={() => setShowProfile(false)}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      right: 0,
                      background: isDark ? "#1e293b" : "#ffffff",
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                      border: "1px solid #cbd5e1",
                      zIndex: 2001,
                      minWidth: "200px",
                    }}
                  >
                    <div
                      style={{
                        padding: "12px 16px",
                        borderBottom: "1px solid #cbd5e1",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 600,
                          color: isDark ? "#f1f5f9" : "#0f172a",
                        }}
                      >
                        {user?.firstName} {user?.lastName}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#64748b",
                          marginTop: "4px",
                        }}
                      >
                        {user?.email}
                      </div>
                    </div>

                    {/* View Profile Option */}
                    <button
                      onClick={handleViewProfile}
                      style={dropdownBtnStyle}
                      onMouseEnter={dropdownBtnHover}
                      onMouseLeave={dropdownBtnLeave}
                    >
                      <UserCircle size={18} color="#0284c7" />
                      View Profile
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Hamburger Menu Button */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                style={{
                  background: "transparent",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  padding: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isDark ? "#94a3b8" : "#475569",
                }}
              >
                {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
              </button>

              {/* Hamburger Menu Dropdown - Now has My Orders, Language, Theme, and Logout */}
              {showMobileMenu && (
                <>
                  <div
                    style={{
                      position: "fixed",
                      inset: 0,
                      zIndex: 1999,
                    }}
                    onClick={() => setShowMobileMenu(false)}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      right: 0,
                      background: isDark ? "#1e293b" : "#ffffff",
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                      border: "1px solid #cbd5e1",
                      zIndex: 2001,
                      minWidth: "180px",
                      padding: "8px",
                    }}
                  >
                    {/* My Orders */}
                    <button
                      onClick={() => {
                        setShowMobileMenu(false);
                        onMyOrdersClick();
                      }}
                      style={dropdownBtnStyle}
                      onMouseEnter={dropdownBtnHover}
                      onMouseLeave={dropdownBtnLeave}
                    >
                      <ShoppingBag size={18} color="#8b5cf6" />
                      My Orders
                    </button>

                    {/* Language Toggle */}
                    <button
                      onClick={() => {
                        toggleLang();
                        setShowMobileMenu(false);
                      }}
                      style={dropdownBtnStyle}
                      onMouseEnter={dropdownBtnHover}
                      onMouseLeave={dropdownBtnLeave}
                    >
                      <Globe size={18} color="#0284c7" />
                      {lang === "en" ? "हिंदी" : "English"}
                    </button>

                    {/* Theme Toggle */}
                    <button
                      onClick={() => {
                        toggleTheme();
                        setShowMobileMenu(false);
                      }}
                      style={dropdownBtnStyle}
                      onMouseEnter={dropdownBtnHover}
                      onMouseLeave={dropdownBtnLeave}
                    >
                      {isDark ? (
                        <Sun size={18} color="#f59e0b" />
                      ) : (
                        <Moon size={18} color="#475569" />
                      )}
                      {isDark ? "Light Mode" : "Dark Mode"}
                    </button>

                    {/* Divider */}
                    <div style={{
                      height: "1px",
                      background: "#cbd5e1",
                      margin: "8px 0",
                    }} />

                    {/* Logout Button - Now in hamburger menu */}
                    <button
                      onClick={handleLogout}
                      style={{
                        ...dropdownBtnStyle,
                        color: "#ef4444",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = isDark ? "#334155" : "#f1f5f9";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "none";
                      }}
                    >
                      <LogOut size={18} color="#ef4444" />
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
  );
}
