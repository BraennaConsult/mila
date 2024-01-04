import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

interface DotProps {
  isFilled: boolean;
}

const Dot: React.FC<DotProps> = ({ isFilled }) => {
  const variants = {
    filled: { backgroundColor: "#000000" }, // Black for filled
    unfilled: { backgroundColor: "#FFC0CB" }, // Pink for unfilled
  };

  return (
    <motion.div
      className="w-3 h-3 rounded-full"
      variants={variants}
      initial="unfilled"
      animate={isFilled ? "filled" : "unfilled"}
      transition={{ type: "spring", stiffness: 500 }}
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
  const ref = useRef(null);
  const inView = useInView(ref);

  const filledDots = Math.round((progressPercentage / 100) * totalDots);

  React.useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        backgroundColor: i < filledDots ? "#000000" : "#FFC0CB",
        transition: { delay: i * 0.11, type: "easeOut" },
      }));
    }
  }, [controls, filledDots, inView]);

  return (
    <div ref={ref} className="grid grid-cols-10 gap-2">
      {Array.from({ length: totalDots }, (_, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ backgroundColor: "#FFC0CB" }}
          animate={controls}
          className="w-3 h-3 rounded-full"
        />
      ))}
    </div>
  );
};
