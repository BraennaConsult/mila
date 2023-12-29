"use client";

import { SPOTS_LEFT } from "@/constants";
import * as Progress from "@radix-ui/react-progress";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

export function ProgressBar({ progress, setProgress }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => setProgress(SPOTS_LEFT));
    return () => clearTimeout(timer);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const imageInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (imageInView) {
      controls.start({
        width: `${100 - progress}%`,
        transition: { type: "spring", stiffness: 25, damping: 15 },
      });
    }
  }, [imageInView, controls]);

  return (
    <Progress.Root
      className="relative overflow-hidden bg-white rounded-[4px] w-full h-[20px] border-mid-grey border"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)",
      }}
      value={progress}
    >
      <Progress.Indicator asChild>
        <motion.div
          ref={ref}
          animate={controls}
          className="bg-black w-full h-full animate-pulse"
          initial={{ width: "0%" }} // initially hidden
        />
      </Progress.Indicator>
    </Progress.Root>
  );
}
