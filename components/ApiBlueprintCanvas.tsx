"use client";

import { useRef, useState, useCallback } from "react";
import type { ApiEndpoint } from "@/lib/projects";
import { ApiBlueprint } from "@/components/ApiBlueprint";

interface ApiBlueprintCanvasProps {
  endpoints: ApiEndpoint[];
}

const CARD_WIDTH = 256;
const CARD_HEIGHT = 280;
const GRID_GAP = 16;
const HEADER_HEIGHT = 56;

function computeGridPosition(index: number, canvasWidth: number) {
  const cols = Math.max(1, Math.floor((canvasWidth - GRID_GAP) / (CARD_WIDTH + GRID_GAP)));
  const col = index % cols;
  const row = Math.floor(index / cols);
  return {
    x: GRID_GAP + col * (CARD_WIDTH + GRID_GAP),
    y: HEADER_HEIGHT + GRID_GAP + row * (CARD_HEIGHT + GRID_GAP),
  };
}

export function ApiBlueprintCanvas({ endpoints }: ApiBlueprintCanvasProps) {
  const boundsRef = useRef<HTMLDivElement>(null);
  const [zOrder, setZOrder] = useState(() => endpoints.map((e) => e.id));
  const [layoutKey, setLayoutKey] = useState(0);

  const bringToFront = useCallback((id: string) => {
    setZOrder((prev) => [...prev.filter((x) => x !== id), id]);
  }, []);

  const resetLayout = () => {
    setLayoutKey((k) => k + 1);
    setZOrder(endpoints.map((e) => e.id));
  };

  const canvasWidth = boundsRef.current?.clientWidth ?? 640;

  return (
    <div className="relative">
      <div className="absolute right-3 top-3 z-30 flex gap-2">
        <button
          type="button"
          onClick={resetLayout}
          className="rounded border border-monograph-rule px-2 py-1 font-mono text-[9px] text-monograph-muted hover:text-monograph-paper"
        >
          Reset layout
        </button>
      </div>

      <div
        ref={boundsRef}
        className="blueprint-surface relative h-[480px] w-full md:h-[640px]"
        aria-label="Interactive API blueprint canvas"
      >
        <div className="pointer-events-none absolute left-3 top-3 z-20">
          <p className="technical-caption">API Blueprint Canvas</p>
          <p className="mt-1 font-mono text-[10px] text-monograph-muted">
            Drag to reposition · Pinch or Ctrl+scroll to resize
          </p>
        </div>
        {endpoints.map((endpoint, index) => {
          const pos = computeGridPosition(index, canvasWidth);
          return (
            <ApiBlueprint
              key={`${endpoint.id}-${layoutKey}`}
              endpoint={endpoint}
              boundsRef={boundsRef}
              initialX={pos.x}
              initialY={pos.y}
              onBringToFront={() => bringToFront(endpoint.id)}
              zIndex={10 + zOrder.indexOf(endpoint.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
