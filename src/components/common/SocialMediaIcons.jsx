import React, { useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { T, th } from "../../utils/designTokens";

export function SocialMediaIcons({ isDark, isAuthenticated, windowWidth }) {
  const [hov, setHov] = useState(null);
  const c = th(isDark);
  const isSmall = windowWidth < 420;
  const btnSize = isSmall ? 40 : 46;
  const rightOffset = isSmall ? "12px" : "20px";

  const links = [
    {
      icon: <Youtube size={18} />,
      href: "https://youtube.com/@b.k.offset?si=8VAlAdQKIGciGQ8d",
      label: "YouTube",
      color: "#FF0000",
    },
    {
      icon: <Instagram size={18} />,
      href: "https://instagram.com",
      label: "Instagram",
      color: "#d640e4",
    },
    {
      icon: <Facebook size={18} />,
      href: "https://facebook.com",
      label: "Facebook",
      color: "#1877F2",
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
      {links.map((link, idx) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          onMouseEnter={() => setHov(link.label)}
          onMouseLeave={() => setHov(null)}
          style={{
            width: btnSize + "px",
            height: btnSize + "px",
            borderRadius: "50%",
            background: hov === link.label 
              ? link.color
              : c.surf,
            color: hov === link.label ? "#fff" : c.textMid,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            border: "1px solid " + (hov === link.label ? "transparent" : c.border),
            boxShadow: hov === link.label 
              ? "0 6px 20px " + link.color + "80" 
              : T.shadowSm,
            transform: hov === link.label
              ? "translateY(-3px) scale(1.08)"
              : "scale(1)",
            transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
            position: "relative",
            animation: "floatIn 0.5s ease-out " + (idx * 0.1) + "s backwards",
          }}
        >
          {link.icon}
          
          {/* Tooltip on hover */}
          {!isSmall && (
            <span
              style={{
                position: "absolute",
                right: "calc(100% + 10px)",
                top: "50%",
                transform: "translateY(-50%)",
                background: isDark ? "#1e293b" : "#0f172a",
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: 600,
                whiteSpace: "nowrap",
                opacity: hov === link.label ? 1 : 0,
                pointerEvents: "none",
                transition: "opacity 0.2s",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              {link.label}
              <span
                style={{
                  position: "absolute",
                  left: "100%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  borderLeft: "5px solid " + (isDark ? "#1e293b" : "#0f172a"),
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
