"use client";

import { useRef, useCallback } from "react";
import { useGesture } from "@use-gesture/react";
import type { ApiEndpoint } from "@/lib/projects";

const METHOD_COLORS: Record<ApiEndpoint["method"], string> = {
  GET: "#34A853",
  POST: "#0078D4",
  PUT: "#FF9900",
  DELETE: "#EA4335",
  PATCH: "#9C27B0",
};

interface ApiBlueprintProps {
  endpoint: ApiEndpoint;
  boundsRef: React.RefObject<HTMLDivElement | null>;
  initialX: number;
  initialY: number;
  onBringToFront: () => void;
  zIndex: number;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ApiBlueprint({
  endpoint,
  boundsRef,
  initialX,
  initialY,
  onBringToFront,
  zIndex,
}: ApiBlueprintProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const transform = useRef({ x: initialX, y: initialY, scale: 1 });

  const applyTransform = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `translate3d(${transform.current.x}px, ${transform.current.y}px, 0) scale(${transform.current.scale})`;
  }, []);

  const clampToBounds = useCallback(() => {
    const bounds = boundsRef.current;
    const card = cardRef.current;
    if (!bounds || !card) return;

    const maxX = Math.max(0, bounds.clientWidth - card.offsetWidth);
    const maxY = Math.max(0, bounds.clientHeight - card.offsetHeight);

    transform.current.x = clamp(transform.current.x, 0, maxX);
    transform.current.y = clamp(transform.current.y, 0, maxY);
    applyTransform();
  }, [boundsRef, applyTransform]);

  const bind = useGesture(
    {
      onDragStart: () => onBringToFront(),
      onDrag: ({ offset: [ox, oy] }) => {
        transform.current.x = initialX + ox;
        transform.current.y = initialY + oy;
        clampToBounds();
      },
      onPinch: ({ offset: [s] }) => {
        transform.current.scale = Math.min(Math.max(s, 0.6), 2.5);
        clampToBounds();
      },
      onWheel: ({ event, delta: [, dy] }) => {
        if (!event.ctrlKey && !event.metaKey) return;
        event.preventDefault();
        transform.current.scale = Math.min(
          Math.max(transform.current.scale - dy * 0.002, 0.6),
          2.5
        );
        clampToBounds();
      },
    },
    {
      drag: { from: () => [0, 0] },
      pinch: { scaleBounds: { min: 0.6, max: 2.5 }, rubberband: true },
      eventOptions: { passive: false },
    }
  );

  const zoomIn = () => {
    transform.current.scale = Math.min(transform.current.scale + 0.2, 2.5);
    clampToBounds();
  };

  const zoomOut = () => {
    transform.current.scale = Math.max(transform.current.scale - 0.2, 0.6);
    clampToBounds();
  };

  const resetPosition = () => {
    transform.current.x = initialX;
    transform.current.y = initialY;
    transform.current.scale = 1;
    applyTransform();
  };

  return (
    <div
      ref={cardRef}
      {...bind()}
      className="absolute top-0 left-0 w-56 cursor-grab touch-none rounded-sm border border-monograph-rule bg-monograph-bg/95 p-4 shadow-lg backdrop-blur-sm active:cursor-grabbing sm:w-64"
      style={{
        transform: `translate3d(${initialX}px, ${initialY}px, 0)`,
        zIndex,
      }}
      tabIndex={0}
      role="article"
      aria-label={`API endpoint ${endpoint.method} ${endpoint.path}`}
      onFocus={onBringToFront}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className="rounded px-2 py-0.5 font-mono text-[10px] font-bold text-monograph-bg"
            style={{ backgroundColor: METHOD_COLORS[endpoint.method] }}
          >
            {endpoint.method}
          </span>
          <span className="rounded border border-monograph-rule px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-monograph-caption">
            API Spec
          </span>
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              zoomOut();
            }}
            className="flex h-5 w-5 items-center justify-center rounded border border-monograph-rule font-mono text-[10px] text-monograph-muted hover:text-monograph-paper"
            aria-label="Zoom out"
          >
            −
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              zoomIn();
            }}
            className="flex h-5 w-5 items-center justify-center rounded border border-monograph-rule font-mono text-[10px] text-monograph-muted hover:text-monograph-paper"
            aria-label="Zoom in"
          >
            +
          </button>
        </div>
      </div>

      <p className="mt-2 font-mono text-xs text-monograph-paper">{endpoint.path}</p>
      <p className="mt-1 font-mono text-[10px] text-monograph-muted">{endpoint.summary}</p>

      <div className="mt-3 flex flex-wrap gap-1">
        {endpoint.statusCodes.map((code) => (
          <span
            key={code}
            className="rounded border border-monograph-rule px-1.5 py-0.5 font-mono text-[9px] text-monograph-muted"
          >
            {code}
          </span>
        ))}
      </div>

      {endpoint.requestBody && (
        <pre className="mt-3 overflow-hidden rounded border border-monograph-rule bg-monograph-bg p-2 font-mono text-[9px] leading-relaxed text-monograph-muted">
          {endpoint.requestBody}
        </pre>
      )}

      <pre className="mt-2 overflow-hidden rounded border border-monograph-rule bg-monograph-bg p-2 font-mono text-[9px] leading-relaxed text-cloud-gcp">
        {endpoint.responseBody}
      </pre>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          resetPosition();
        }}
        className="mt-3 font-mono text-[9px] text-monograph-caption underline hover:text-monograph-paper"
      >
        Reset position
      </button>
    </div>
  );
}
