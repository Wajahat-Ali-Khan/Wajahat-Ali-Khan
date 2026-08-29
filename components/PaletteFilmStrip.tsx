"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { projects, CLOUD_PALETTES } from "@/lib/projects";

interface FilmFrame {
  projectId: string;
  provider: string;
  hex: string;
  token: string;
}

const FRAME_WIDTH = 120;
const FRAME_GAP = 16;
const FRAME_STEP = FRAME_WIDTH + FRAME_GAP;

const allFrames: FilmFrame[] = projects.flatMap((p) =>
  CLOUD_PALETTES[p.provider].swatches.map((s) => ({
    projectId: p.id,
    provider: CLOUD_PALETTES[p.provider].name,
    hex: s.hex,
    token: s.token,
  }))
);

function getCenteredIndex(strip: HTMLDivElement): number {
  const center = strip.scrollLeft + strip.clientWidth / 2;
  const firstFrameCenter = FRAME_WIDTH / 2;
  const index = Math.round((center - firstFrameCenter) / FRAME_STEP);
  return Math.min(Math.max(index, 0), allFrames.length - 1);
}

function scrollToIndex(strip: HTMLDivElement, index: number) {
  const target = index * FRAME_STEP;
  strip.scrollTo({ left: target, behavior: "smooth" });
}

export function PaletteFilmStrip() {
  const stripRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const strip = stripRef.current;
    if (!strip) return;
    setActiveIndex(getCenteredIndex(strip));
  }, []);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    strip.addEventListener("scroll", updateActiveIndex, { passive: true });
    updateActiveIndex();
    return () => strip.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  const goPrev = () => {
    const strip = stripRef.current;
    if (!strip) return;
    scrollToIndex(strip, Math.max(activeIndex - 1, 0));
  };

  const goNext = () => {
    const strip = stripRef.current;
    if (!strip) return;
    scrollToIndex(strip, Math.min(activeIndex + 1, allFrames.length - 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

  const active = allFrames[activeIndex];

  return (
    <section className="relative z-10 py-24">
      <div className="monograph-grid mb-8">
        <div className="col-span-12 lg:col-span-6">
          <p className="technical-caption">Color System</p>
          <h2 className="mt-2 text-display-md text-monograph-paper">
            Cloud Provider Palettes
          </h2>
        </div>
        <div className="col-span-12 mt-4 flex items-center justify-between gap-4 lg:col-span-6 lg:mt-0 lg:justify-end">
          <p className="font-mono text-sm text-monograph-muted">
            <span className="text-monograph-paper">{active?.provider}</span>
            {" · "}
            <span style={{ color: active?.hex }}>{active?.hex}</span>
            {" · "}
            <span className="text-monograph-caption">{active?.token}</span>
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={goPrev}
              disabled={activeIndex === 0}
              className="flex h-8 w-8 items-center justify-center rounded border border-monograph-rule font-mono text-sm text-monograph-muted hover:text-monograph-paper disabled:opacity-30"
              aria-label="Previous swatch"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={activeIndex === allFrames.length - 1}
              className="flex h-8 w-8 items-center justify-center rounded border border-monograph-rule font-mono text-sm text-monograph-muted hover:text-monograph-paper disabled:opacity-30"
              aria-label="Next swatch"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="film-sprockets w-full" aria-hidden="true" />

        <div
          ref={stripRef}
          role="listbox"
          aria-label="Cloud provider color swatches"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="film-strip-snap flex gap-4 overflow-x-auto px-[calc(50vw-60px)] py-4 scrollbar-none"
        >
          {allFrames.map((frame, i) => (
            <div
              key={`${frame.projectId}-${frame.token}`}
              role="option"
              aria-selected={i === activeIndex}
              className={`film-frame flex-shrink-0 transition-transform duration-200 ${
                i === activeIndex ? "scale-105" : "scale-100 opacity-60"
              }`}
              style={{ width: FRAME_WIDTH }}
            >
              <div
                className="aspect-[4/3] rounded-sm border-2 border-monograph-rule"
                style={{ backgroundColor: frame.hex }}
              />
              <p className="mt-2 text-center font-mono text-[9px] text-monograph-caption">
                {frame.provider}
              </p>
              <p className="text-center font-mono text-[9px] text-monograph-paper">
                {frame.token}
              </p>
            </div>
          ))}
        </div>

        <div className="film-sprockets w-full" aria-hidden="true" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-0.5 -translate-x-1/2 -translate-y-1/2 bg-monograph-paper/30" />
      </div>
    </section>
  );
}
