"use client";

import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface DotProps {
  filled: boolean;
}

const Dot: React.FC<DotProps> = ({ filled }) => {
  const variants = {
    filled: { backgroundColor: "#000000" }, // Black for filled
    unfilled: { backgroundColor: "#FFC0CB" }, // Pink for unfilled
  };

  return (
    <motion.div
      className="w-3 h-3 rounded-full"
      variants={variants}
      initial="unfilled"
      animate={filled ? "filled" : "unfilled"}
      transition={{ type: "spring", mass: 0.8, damping: 15, stiffness: 25 }}
    />
  );
};

interface ProgressBarProps {
  totalDots: number;
  progressPercentage: number;
}

export const DotsProgressBar: React.FC<ProgressBarProps> = ({
  totalDots,
  progressPercentage,
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
  });

  const filledDots = Math.round((progressPercentage / 100) * totalDots);

  React.useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: i * 0.065 },
      }));
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-wrap gap-2 max-w-56" ref={ref}>
      {Array.from({ length: totalDots }, (_, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ opacity: 0 }}
          animate={controls}
        >
          <Dot filled={index < filledDots} />
        </motion.div>
      ))}
    </div>
  );
};
