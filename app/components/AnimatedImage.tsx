"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface Props {
  src: string;
  alt: string;
  initialY?: number;
  initialX?: number;
  rotateX?: number;
}

export function AnimatedImage({
  src,
  alt,
  initialY,
  initialX,
  rotateX,
}: Props) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        y: 0,
        rotateX: rotateX,
        transition: { type: "spring", stiffness: 260, damping: 20 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ x: initialX, y: initialY, rotateX: -90 }} // Start rotated and skewed out of view
      // className="origin-bottom-center origin-center"
      style={{ position: "absolute", transformStyle: "preserve-3d" }} // Ensures proper 3D rotation
    >
      <Image src={src} alt={alt} width={400} height={400} />
    </motion.div>
  );
}
