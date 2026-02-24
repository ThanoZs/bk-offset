import React, { useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { T } from "../../utils/designTokens";
import { SectionHeader } from "../common/SectionHeader";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function LocationSection({ text, c, isMobile }) {
  const [ref, isVisible] = useScrollAnimation();
  const [mapHov, setMapHov] = useState(false);

  // Google Maps link
  const googleMapsLink = "https://maps.app.goo.gl/GQqACqym97FV1PYb9";

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? "60px 20px" : "100px 32px",
        maxWidth: 1180,
        margin: "0 auto",
      }}
    >
      <SectionHeader title="Visit Our Press" isVisible={isVisible} />

      {/* Map Container - Clickable to open Google Maps */}
      <a
        href={googleMapsLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        onMouseEnter={() => setMapHov(true)}
        onMouseLeave={() => setMapHov(false)}
      >
        <div
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
            position: "relative",
            cursor: "pointer",
            background: "#f1f5f9",
            minHeight: isMobile ? "300px" : "380px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Map Placeholder with Icon */}
          <div style={{ textAlign: "center" }}>
            <MapPin size={48} color={T.primary} style={{ marginBottom: "16px" }} />
            <p style={{ color: c.textMid, marginBottom: "8px" }}>Click to view location on Google Maps</p>
          </div>
          
          {/* Click to Open Badge */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              right: "16px",
              background: "rgba(0, 0, 0, 0.7)",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              pointerEvents: "none",
            }}
          >
            <ExternalLink size={14} />
            Open in Google Maps
          </div>
        </div>
      </a>

      {/* Simple Directions Button */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "24px",
      }}>
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: `linear-gradient(135deg, ${T.primaryDark}, ${T.primary})`,
            color: "#fff",
            textDecoration: "none",
            padding: "12px 28px",
            borderRadius: "40px",
            fontSize: isMobile ? "14px" : "16px",
            fontWeight: 600,
            boxShadow: `0 4px 14px ${T.primaryGlow}`,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = `0 8px 25px ${T.primaryGlow}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = `0 4px 14px ${T.primaryGlow}`;
          }}
        >
          <MapPin size={18} />
          Get Directions
        </a>
      </div>
    </section>
  );
}
