"use client";

import { PERCENTAGE_FILLED, SPOTS_AVAILABLE } from "@/constants";
import {
  motion,
  useAnimation,
  useInView,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimatedNumber({ value }: { value: number }) {
  let spring = useSpring(0, {
    mass: 0.8,
    stiffness: 25,
    damping: 15,
  });
  let display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, controls]);

  return (
    <motion.span ref={ref} animate={controls} className="leading-none">
      {display}
    </motion.span>
  );
}
