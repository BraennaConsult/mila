"use client";

import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { motion } from "framer-motion";

const heading = "Vær med å bygg din drømmekropp og skap din egen lykke!";

export function Hero() {
  return (
    <div className="w-full h-[600px] rounded-bl-[80px] flex items-end  relative overflow-hidden aspect-[16/9]">
      <video
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        controls={false}
        id="promo-video"
        className="absolute right-0 bottom-0 min-w-full min-h-full z-[-1] rounded-bl-[80px] object-cover"
      >
        <source src="/promo.mp4" type="video/mp4" />
      </video>
      {/* <div className=""> */}
      <Container className="space-y-6 mb-14 w-full lg:mx-auto">
        <h1 className="text-xl lg:text-2xl text-pink-mid font-bold max-w-xs md:max-w-md ">
          Vær med å bygg din drømmekropp og skap din egen lykke!
        </h1>
        {/* <motion.h1
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
        </motion.h1> */}
        <p className="text-md text-white max-w-xs md:max-w-md text-pretty">
          Over 100+ rå kvinner har nådd sine personlige mål!
          Transformasjonsmaraton av @milatimaa
        </p>
        <Button hasIcon>Bli med</Button>
      </Container>
      {/* </div> */}
    </div>
  );
}

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      // staggerChildren: 0.1,
      delayChildren: 0.2,
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
      duration: 0.2 + i * 0.1, // decreased delay increment
      delay: 0.2 + i * 0.1, // decreased delay increment
      type: "spring",
      mass: 0.4, // decreased mass
      stiffness: 100, // increased stiffness
      damping: 35, // decreased damping
    },
  }),
};
