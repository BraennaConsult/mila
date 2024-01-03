"use client";

import { Container } from "@/app/components/Container";
import { FeaturesCarousel } from "@/app/components/FeaturesCarousel";
import { Section } from "@/app/components/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function AppPreview() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0"],
  });

  const rotatePhone1 = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["16deg", "4deg"]
  );
  const rotatePhone2 = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["18deg", "8deg"]
  );
  const rotatePhone3 = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["20deg", "10deg"]
  );

  const translateYPhone1 = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["0%", "75px"]
  );
  const translateYPhone2 = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["0px", "25px"]
  );
  const translateYPhone3 = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["-40px", "-60px"]
  );

  const translatexPhone1 = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["100px", "125px"]
  );
  const translatexPhone2 = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["125px", "100px"]
  );
  const translatexPhone3 = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["125px", "50px"]
  );

  return (
    <Section>
      <Container className="mb-10 lg:mb-20">
        <h2 className="text-pretty mb-9 lg:mb-14 text-center mx-auto max-w-xl">
          3 måneders treningsmaraton på Myluck appen
        </h2>
        <div className="relative max-w-2xl mx-auto w-full h-[450px] lg:h-[650px] pt-20 lg:pl-20 overflow-hidden">
          <motion.div
            ref={containerRef}
            style={{
              rotate: rotatePhone1,
              translateY: translateYPhone1,
              translateX: translatexPhone1,
            }}
          >
            <Image
              src="/phone-1.png"
              className="absolute w-[60%]"
              alt="App screenshots"
              width={300}
              height={600}
            />
          </motion.div>
          <motion.div
            style={{
              rotate: rotatePhone2,
              translateY: translateYPhone2,
              translateX: translatexPhone2,
            }}
          >
            <Image
              src="/phone-2.png"
              className="absolute w-[60%]"
              alt="App screenshots"
              width={300}
              height={600}
            />
          </motion.div>
          <motion.div
            style={{
              rotate: rotatePhone3,
              translateY: translateYPhone3,
              translateX: translatexPhone3,
            }}
          >
            <Image
              src="/phone-3.png"
              className="absolute w-[60%]"
              alt="App screenshots"
              width={300}
              height={600}
            />
          </motion.div>
        </div>
        <div className="flex space-x-2 lg:space-x-14 mb-9 lg:mb-14 justify-center">
          <div className="flex flex-col space-y-5">
            <div className="space-x-2 flex items-center">
              <Image
                src="/dumbbell.svg"
                width={22}
                height={22}
                alt="Dumbbell icon"
              />
              <h3 className="text-lg lg:text-xl">Trening</h3>
            </div>
            <ul className="list-disc list-outside space-y-2 pl-5">
              <li className="">Steg for steg instruksjoner</li>
              <li className="">Fokus på rumpe</li>
              <li>Enkelt å følge</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="space-x-2 flex items-center">
              <Image
                src="/nutrition.svg"
                width={22}
                height={22}
                alt="Nutrition icon"
              />
              <h3 className="text-lg lg:text-xl">Kosthold</h3>
            </div>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>Smakfulle oppskrifter</li>
              <li>Kalorioversikt</li>
              <li>Din egen matplan</li>
            </ul>
          </div>
        </div>
      </Container>
      <FeaturesCarousel />
    </Section>
  );
}
