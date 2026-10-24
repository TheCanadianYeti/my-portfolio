'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  color: string;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export default function TechnoBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const shockwaves: Shockwave[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
      setMousePos({ x: -1000, y: -1000 });
    };

    // Click shockwave physics
    const handlePointerDown = (e: MouseEvent) => {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 180,
        alpha: 0.8,
      });

      // Scatter nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - e.clientX;
        const dy = p.y - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 0) {
          const force = (1 - dist / 180) * 12;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const gridSize = 45;
    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((width * height) / 16000), 75);
      const colors = ['#00f0ff', '#38bdf8', '#00ffcc', '#818cf8'];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.25,
          baseAlpha: Math.random() * 0.5 + 0.25,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    initParticles();

    // Render loop
    const render = () => {
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.15;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.15;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw background techno grid dots & crosshairs
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          const dx = mx - x;
          const dy = my - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 220) {
            const intensity = 1 - dist / 220;
            ctx.fillStyle = `rgba(0, 240, 255, ${0.1 + intensity * 0.6})`;
            ctx.fillRect(x - 1, y - 1, 2 + intensity * 2, 2 + intensity * 2);

            if (dist < 120 && (x % (gridSize * 2) === 0 || y % (gridSize * 2) === 0)) {
              ctx.strokeStyle = `rgba(0, 240, 255, ${intensity * 0.25})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(x - 4, y);
              ctx.lineTo(x + 4, y);
              ctx.moveTo(x, y - 4);
              ctx.lineTo(x, y + 4);
              ctx.stroke();
            }
          } else {
            ctx.fillStyle = 'rgba(30, 43, 77, 0.4)';
            ctx.fillRect(x, y, 1.2, 1.2);
          }
        }
      }

      // 2. Draw shockwaves from clicks
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += 5;
        sw.alpha *= 0.94;

        ctx.strokeStyle = `rgba(0, 240, 255, ${sw.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (sw.alpha < 0.02 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(s, 1);
        }
      }

      // 3. Draw particles & magnetic connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Friction to return to ambient speed after shockwave
        p.vx *= 0.985;
        p.vy *= 0.985;

        if (Math.abs(p.vx) < 0.2) p.vx += (Math.random() - 0.5) * 0.1;
        if (Math.abs(p.vy) < 0.2) p.vy += (Math.random() - 0.5) * 0.1;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180) {
          p.x += (dx / dist) * 0.4;
          p.y += (dy / dist) * 0.4;
          p.alpha = Math.min(p.baseAlpha + (1 - dist / 180) * 0.6, 1);

          ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - dist / 180) * 0.4})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(mx, my);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        } else {
          p.alpha = p.baseAlpha;
        }

        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p.x - p2.x;
          const pdy = p.y - p2.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < 120) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - pdist / 120) * 0.22})`;
            ctx.lineWidth = 0.65;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background:
            mousePos.x >= 0
              ? `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.09), rgba(37, 99, 235, 0.04) 40%, transparent 80%)`
              : 'none',
        }}
      />
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0 opacity-85"
      />
    </>
  );
}
