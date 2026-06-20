"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StackSectionProps {
  children: React.ReactNode;
  index: number; // 0-based position in stack
  total: number; // total number of stacked sections
  zIndex?: number;
}

export default function StackSection({
  children,
  index,
  zIndex,
}: StackSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Each section scales down slightly as it gets stacked under
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1, 0.96 - index * 0.01],
  );

  // Subtle shadow deepens as sections stack
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 1],
  );

  // Slide up from below on enter
  const y = useTransform(scrollYProgress, [0, 0.15], [60, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        y,
        position: "relative",
        zIndex: zIndex ?? index + 2,
        transformOrigin: "top center",
      }}
    >
      {children}
    </motion.div>
  );
}
