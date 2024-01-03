"use client";

import { Button } from "@/app/components/Button";
import { PAYMENT_LINK } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";

const heading = "Vær med å bygg din drømmekropp og skap din egen lykke!";

export function Hero() {
  return (
    <div className="w-full h-[600px] lg:h-[800px] rounded-bl-[80px] flex items-end  relative overflow-hidden">
      <video
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        id="promo-video"
        className="absolute right-0 bottom-0 min-w-full min-h-full z-[-1] rounded-bl-[80px] aspect-[9/16] object-cover"
      >
        <source src="/promo.mp4" type="video/mp4" />
      </video>
      <div className="space-y-6 mb-14 ml-6 w-full max-w-[1200px] lg:mx-auto">
        <motion.h1
          initial="initial"
          animate="animate"
          variants={containerVariants}
          className="text-xl lg:text-2xl text-pink-mid font-bold max-w-xs md:max-w-md "
        >
          {heading.split(" ").map((word, i) => (
            <motion.span
              key={word + i}
              className="inline-block mr-2"
              variants={variants}
              custom={i} // Pass the index as custom prop for unique animation
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <p className="text-md text-white font-bold max-w-xs md:max-w-md text-pretty">
          Over 100+ rå kvinner har nådd sine personlige mål!
        </p>
        <Button hasIcon>
          <Link href={PAYMENT_LINK}>Bli med!</Link>
        </Button>
      </div>
    </div>
  );
}

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      // staggerChildren: 0.1,
      delayChildren: 0.5,
      ease: "easeInOut",
    },
  },
};

const variants = {
  initial: {
    y: "40px",
    opacity: 0,
  },
  animate: (i: number) => ({
    y: "0px",
    opacity: 1,
    transition: {
      // Modify these properties as needed
      duration: 0.8 + i * 0.1,
      delay: 0.3 + i * 0.1,
      ease: [0.6, -0.05, 0.01, 0.99], // Cubic Bezier function for more natural animation
    },
  }),
};
