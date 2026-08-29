"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { DiagramNode, DiagramEdge } from "@/lib/projects";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface ArchitectureDiagramProps {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  accent: string;
}

const NODE_COLORS: Record<DiagramNode["type"], string> = {
  gateway: "#0A0B0D",
  service: "#2A2B2E",
  database: "#4A4B4E",
  queue: "#6A6B6E",
  model: "#0A0B0D",
};

function getNodeCenter(node: DiagramNode): { x: number; y: number } {
  return { x: node.x + 50, y: node.y + 18 };
}

function buildPath(from: DiagramNode, to: DiagramNode): string {
  const start = getNodeCenter(from);
  const end = getNodeCenter(to);
  const midX = (start.x + end.x) / 2;
  return `M ${start.x} ${start.y} C ${midX} ${start.y}, ${midX} ${end.y}, ${end.x} ${end.y}`;
}

export function ArchitectureDiagram({ nodes, edges, accent }: ArchitectureDiagramProps) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reducedMotion = useReducedMotion();
  const animate = inView && !reducedMotion;

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <svg
      ref={ref}
      viewBox="0 0 800 360"
      className="h-auto min-w-[640px] w-full"
      role="img"
      aria-label="System architecture diagram"
    >
      {edges.map((edge, i) => {
        const from = nodeMap[edge.from];
        const to = nodeMap[edge.to];
        if (!from || !to) return null;
        const d = buildPath(from, to);

        return (
          <g key={edge.id}>
            <motion.path
              d={d}
              fill="none"
              stroke="#2A2B2E"
              strokeWidth={1.5}
              initial={{ pathLength: animate ? 0 : 1, opacity: animate ? 0 : 1 }}
              animate={animate ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
            />
            {edge.label && (
              <motion.text
                x={(getNodeCenter(from).x + getNodeCenter(to).x) / 2}
                y={(getNodeCenter(from).y + getNodeCenter(to).y) / 2 - 6}
                textAnchor="middle"
                className="fill-monograph-bg font-mono text-[8px]"
                initial={{ opacity: animate ? 0 : 1 }}
                animate={animate ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                {edge.label}
              </motion.text>
            )}
            {animate && (
              <circle r={3} fill={accent}>
                <animateMotion
                  dur={`${1.5 + i * 0.2}s`}
                  repeatCount="indefinite"
                  path={d}
                />
              </circle>
            )}
          </g>
        );
      })}

      {nodes.map((node, i) => (
        <motion.g
          key={node.id}
          initial={animate ? { opacity: 0, scale: 0.8 } : false}
          animate={animate ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          style={{ transformOrigin: `${node.x + 50}px ${node.y + 18}px` }}
        >
          <rect
            x={node.x}
            y={node.y}
            width={100}
            height={36}
            rx={2}
            fill={NODE_COLORS[node.type]}
            stroke={node.type === "model" ? accent : "#8A8A88"}
            strokeWidth={node.type === "model" ? 2 : 1}
          />
          <text
            x={node.x + 50}
            y={node.y + 18}
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-monograph-paper font-mono text-[10px]"
          >
            {node.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
