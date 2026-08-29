"use client";

import { useEffect, useRef, useCallback } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

const MAX_PARTICLES = 40;
const PARTICLE_LIFE = 60;

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const reducedMotion = useReducedMotion();
  const initializedRef = useRef(false);
  const pausedRef = useRef(false);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    resize();
    window.addEventListener("resize", resize);

    let lastX = 0;
    let lastY = 0;

    const spawnParticle = (x: number, y: number, vx: number, vy: number) => {
      const pool = particlesRef.current;
      if (pool.length >= MAX_PARTICLES) pool.shift();
      pool.push({
        x,
        y,
        vx,
        vy,
        life: PARTICLE_LIFE,
        maxLife: PARTICLE_LIFE,
        size: 2 + Math.random() * 2,
      });
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!initializedRef.current) {
        lastX = e.clientX;
        lastY = e.clientY;
        initializedRef.current = true;
        return;
      }

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      spawnParticle(e.clientX, e.clientY, dx * 0.05, dy * 0.05);
    };

    window.addEventListener("pointermove", onPointerMove);

    const onVisibilityChange = () => {
      pausedRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const tick = () => {
      if (!pausedRef.current) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        const pool = particlesRef.current;

        for (let i = pool.length - 1; i >= 0; i--) {
          const p = pool[i];
          p.x += p.vx;
          p.y += p.vy;
          p.life--;
          p.vx *= 0.96;
          p.vy *= 0.96;

          if (p.life <= 0) {
            pool.splice(i, 1);
            continue;
          }

          const alpha = (p.life / p.maxLife) * 0.6;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(244, 244, 242, ${alpha})`;
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3);
          ctx.strokeStyle = `rgba(244, 244, 242, ${alpha * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion, resize]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
