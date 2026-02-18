import React, { useState } from "react";
import { Phone, MessageCircle, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

// Import logo directly
import logo from "../../assets/Logo/BK_logo_png.png";

export function Footer({ isDark, isMobile }) {
  const { user, isAuthenticated } = useAuth();
  const [hov, setHov] = useState(null);
  
  return (
    <footer style={{
      background: "#020617",
      color: "#cbd5e1",
      padding: isMobile ? "50px 20px 24px" : "60px 32px 28px",
      textAlign: "center",
      borderTop: "1px solid #1e293b",
    }}>
      <div style={{ maxWidth: "520px", margin: "0 auto" }}>
        <img 
          src={logo}
          alt="BK Offset"
          style={{
            width: "60px",
            height: "60px",
            objectFit: "contain",
            margin: "0 auto 15px",
            display: "block",
            borderRadius: "12px",
            boxShadow: "0 4px 14px rgba(14, 165, 233, 0.35)",
          }}
          onError={(e) => {
            console.log("Logo failed to load in footer");
            e.target.style.display = "none";
          }}
        />
        
        <h3 style={{ 
          color: "#f1f5f9", 
          marginBottom: "10px", 
          fontSize: "18px",
          fontWeight: 700,
        }}>
          BK Offset Printing
        </h3>
        
        <p style={{ 
          color: "#64748b", 
          marginBottom: "20px", 
          fontSize: "13px" 
        }}>
          Quality printing services since 1995
        </p>

        {/* Social & Contact Icons */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}>
          {/* Phone - only when authenticated */}
          {isAuthenticated && (
            <a
              href="tel:+91-99999-88888"
              style={{
                color: hov === "phone" ? "#fff" : "#64748b",
                textDecoration: "none",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: hov === "phone" ? "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)" : "rgba(255,255,255,0.06)",
                border: hov === "phone" ? "1px solid transparent" : "1px solid #334155",
                transform: hov === "phone" ? "translateY(-3px) scale(1.1)" : "translateY(0) scale(1)",
                transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHov("phone")}
              onMouseLeave={() => setHov(null)}
            >
              <Phone size={17} />
            </a>
          )}

          {/* WhatsApp - only when authenticated */}
          {isAuthenticated && (
            <a
              href="https://wa.me/919999988888"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: hov === "whatsapp" ? "#fff" : "#64748b",
                textDecoration: "none",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: hov === "whatsapp" ? "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)" : "rgba(255,255,255,0.06)",
                border: hov === "whatsapp" ? "1px solid transparent" : "1px solid #334155",
                transform: hov === "whatsapp" ? "translateY(-3px) scale(1.1)" : "translateY(0) scale(1)",
                transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHov("whatsapp")}
              onMouseLeave={() => setHov(null)}
            >
              <MessageCircle size={17} />
            </a>
          )}

          {/* Email - only when authenticated */}
          {isAuthenticated && (
            <a
              href="mailto:info@bkoffsetprinting.com"
              style={{
                color: hov === "email" ? "#fff" : "#64748b",
                textDecoration: "none",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: hov === "email" ? "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)" : "rgba(255,255,255,0.06)",
                border: hov === "email" ? "1px solid transparent" : "1px solid #334155",
                transform: hov === "email" ? "translateY(-3px) scale(1.1)" : "translateY(0) scale(1)",
                transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHov("email")}
              onMouseLeave={() => setHov(null)}
            >
              <Mail size={17} />
            </a>
          )}

          {/* Facebook - always visible */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: hov === "facebook" ? "#fff" : "#64748b",
              textDecoration: "none",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: hov === "facebook" ? "#1877F2" : "rgba(255,255,255,0.06)",
              border: hov === "facebook" ? "1px solid transparent" : "1px solid #334155",
              transform: hov === "facebook" ? "translateY(-3px) scale(1.1)" : "translateY(0) scale(1)",
              transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHov("facebook")}
            onMouseLeave={() => setHov(null)}
          >
            <Facebook size={17} />
          </a>

          {/* Instagram - always visible */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: hov === "instagram" ? "#fff" : "#64748b",
              textDecoration: "none",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: hov === "instagram" ? "#E4405F" : "rgba(255,255,255,0.06)",
              border: hov === "instagram" ? "1px solid transparent" : "1px solid #334155",
              transform: hov === "instagram" ? "translateY(-3px) scale(1.1)" : "translateY(0) scale(1)",
              transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHov("instagram")}
            onMouseLeave={() => setHov(null)}
          >
            <Instagram size={17} />
          </a>

          {/* YouTube - always visible */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: hov === "youtube" ? "#fff" : "#64748b",
              textDecoration: "none",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: hov === "youtube" ? "#FF0000" : "rgba(255,255,255,0.06)",
              border: hov === "youtube" ? "1px solid transparent" : "1px solid #334155",
              transform: hov === "youtube" ? "translateY(-3px) scale(1.1)" : "translateY(0) scale(1)",
              transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHov("youtube")}
            onMouseLeave={() => setHov(null)}
          >
            <Youtube size={17} />
          </a>
        </div>

        {/* Copyright */}
        <p style={{ 
          color: "#475569", 
          fontSize: "12px" 
        }}>
          © {new Date().getFullYear()} BK Offset Printing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
