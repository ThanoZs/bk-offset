/**
 * DotWave.jsx — High-performance 3D particle background for BK Offset Printing.
 * Inspired by Antigravity homepage. Uses 2D Canvas for efficient rendering.
 */

import React, { useEffect, useRef } from "react";

/**
 * DotWave — Visual anchor component for Hero and Product sections.
 * Implements a reactive sphere of dots that responds to cursor movement and scroll.
 */
export function DotWave({ isDark }) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const raf = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W, H;
    const isMobile = window.innerWidth < 768;
    const particles = [];

    // --- High-level Visual Constants ---
    const PARTICLE_COUNT = isMobile ? 180 : 550;
    const PERSPECTIVE = 1000;
    const BASE_RADIUS = isMobile ? 240 : 460; 

    // Simulation Physics Constants
    const REPULSION_RADIUS = isMobile ? 150 : 300; 
    const REPULSION_STRENGTH = isMobile ? 1.0 : 1.2;
    const SPRING_STRENGTH = 0.04;
    const DAMPING = 0.93;
    const CHASE_SPEED = isMobile ? 0.015 : 0.025; 

    // The current focal point of the particle cluster
    const currentCenter = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    /**
     * Particle Class — Logic for individual dot physics and 3D projection.
     */
    class Particle {
      constructor(idx) {
        // Distribute points on a sphere using Fibonacci lattice for uniform density
        const phi = Math.acos(-1 + (2 * idx) / PARTICLE_COUNT);
        const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;

        // "Home" position on a unit sphere
        this.homeX = Math.cos(theta) * Math.sin(phi);
        this.homeY = Math.sin(theta) * Math.sin(phi);
        this.homeZ = Math.cos(phi);

        // Individual depth variance factor
        this.rFactor = 0.4 + Math.random() * 1.6;

        // World coordinates relative to the cluster center
        this.x = this.homeX * BASE_RADIUS * this.rFactor;
        this.y = this.homeY * BASE_RADIUS * this.rFactor;
        this.z = this.homeZ * BASE_RADIUS * this.rFactor;

        // Velocity components for spring-mass simulation
        this.vx = 0; this.vy = 0; this.vz = 0;

        // Visual attributes
        this.radius = 1.5 + Math.random() * 1.5;
        this.alphaBase = 0.35 + Math.random() * 0.55;
        
        // Dynamic Hue generation based on spherical coordinates (Diagonal Rainbow)
        const lon = Math.atan2(this.homeY, this.homeX);
        const lat = Math.asin(this.homeZ);
        this.hue = ((lon / Math.PI + 1) * 160 + (lat / Math.PI + 0.5) * 40 + 240) % 360;
      }

      /**
       * update — Calculates the next physical state based on repulsion and home-spring.
       */
      update(mx, my, mz, breathing, rotX, rotY, stretchX, stretchY) {
        // 1. Calculate the target "home" coordinate with rotation and breathing applied
        let hx = this.homeX * BASE_RADIUS * this.rFactor * breathing;
        let hy = this.homeY * BASE_RADIUS * this.rFactor * breathing;
        let hz = this.homeZ * BASE_RADIUS * this.rFactor * breathing;

        // Add visual distortion based on movement speed
        hx += hx * stretchX;
        hy += hy * stretchY;

        // 3D rotation matrix application
        const cY = Math.cos(rotY), sY = Math.sin(rotY);
        const x1 = hx * cY - hz * sY;
        const z1 = hx * sY + hz * cY;
        hx = x1; hz = z1;

        const cX = Math.cos(rotX), sX = Math.sin(rotX);
        const y2 = hy * cX - hz * sX;
        const z2 = hy * sX + hz * cX;
        hy = y2; hz = z2;

        // 2. Cursor Repulsion Logic
        const dx = this.x - mx;
        const dy = this.y - my;
        const dz = this.z - mz;
        const distSq = dx * dx + dy * dy + dz * dz;
        const dist = Math.sqrt(distSq) || 1;

        if (dist < REPULSION_RADIUS) {
          const force = (1 - dist / REPULSION_RADIUS) * REPULSION_STRENGTH;
          this.vx += (dx / dist) * force;
          this.vy += (dy / dist) * force;
          this.vz += (dz / dist) * force;
        }

        // 3. Spring behavior — pull particle back to its calculated home
        this.vx += (hx - this.x) * SPRING_STRENGTH;
        this.vy += (hy - this.y) * SPRING_STRENGTH;
        this.vz += (hz - this.z) * SPRING_STRENGTH;

        // Apply friction/damping for stability
        this.vx *= DAMPING;
        this.vy *= DAMPING;
        this.vz *= DAMPING;

        // Final position increment
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;
      }
    }

    /**
     * init — Initializes the canvas size and populates the particle array.
     */
    function init() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle(i));
      }
    }

    let tick = 0;
    let rotX = 0, rotY = 0;

    /**
     * loop — Main render cycle. Handles center chasing and projection.
     */
    function loop() {
      raf.current = requestAnimationFrame(loop);
      if (!W || !H || !ctx) return;
      ctx.clearRect(0, 0, W, H);

      // Advance world rotation and breathing phase
      tick += 0.015;
      rotX += 0.0008;
      rotY += 0.0012;

      // 1. Cluster center chases the mouse cursor with lag for a fluid feel
      const targetCenterX = mouse.current.x !== -1000 ? mouse.current.x : W / 2;
      const targetCenterY = mouse.current.y !== -1000 ? mouse.current.y : H / 2;
      
      const prevX = currentCenter.x;
      const prevY = currentCenter.y;
      
      currentCenter.x += (targetCenterX - currentCenter.x) * CHASE_SPEED;
      currentCenter.y += (targetCenterY - currentCenter.y) * CHASE_SPEED;

      // Calculate the "stretching" effect based on center travel speed
      const velX = (currentCenter.x - prevX);
      const velY = (currentCenter.y - prevY);
      const stretchX = Math.min(Math.abs(velX) * 0.02, 0.4);
      const stretchY = Math.min(Math.abs(velY) * 0.02, 0.4);

      // Ambient breathing effect
      const breathing = 1 + Math.sin(tick) * 0.05;

      // Relative mouse coordinates for localized repulsion
      const mx = mouse.current.x - currentCenter.x;
      const my = mouse.current.y - currentCenter.y;
      const mz = 150; 

      // Sort by depth (Painter's Algorithm) to ensure correct occlusion
      particles.sort((a, b) => b.z - a.z);

      for (const p of particles) {
        try {
          p.update(mx, my, mz, breathing, rotX, rotY, stretchX, stretchY);

          // Standard pinhole camera 3D projection
          const scale = PERSPECTIVE / (PERSPECTIVE + p.z);
          
          if (scale <= 0 || isNaN(scale) || !isFinite(scale)) continue;

          const x2d = currentCenter.x + p.x * scale;
          const y2d = currentCenter.y + p.y * scale;

          // Compute visuals based on projected scale
          const alpha = Math.max(0, p.alphaBase * scale * (p.z > -BASE_RADIUS ? 1 : 0.6));
          const radius = Math.max(0, p.radius * scale);

          if (alpha <= 0 || radius <= 0) continue;

          // Render dot
          ctx.fillStyle = `hsla(${p.hue}, 80%, ${isDark ? 70 : 50}%, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x2d, y2d, radius, 0, Math.PI * 2);
          ctx.fill();
        } catch (err) {
          console.error("Particle update error:", err);
        }
      }
    }

    /* ─── Event Listeners ─── */

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onLeave = () => {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", init);

    init();
    loop();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", init);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      style={styles.canvas}
    />
  );
}

/* ─── Consolidated Styles ────────────────────────────────── */

const styles = {
  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 0,
    background: "transparent",
  },
};
