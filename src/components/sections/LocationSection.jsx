import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { T } from "../../utils/designTokens";
import { SectionHeader } from "../common/SectionHeader";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function LocationSection({ text, c, isMobile }) {
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
