"use client";

import { BlackHeader } from "@/app/components/BlackHeader";
import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import CountdownTimer from "@/app/components/CountdownTimer";
import { Footer } from "@/app/components/Footer";
import { Progress } from "@/app/components/Progress";
import { Section } from "@/app/components/Section";
import { SALE_STARTS_AT, STRIPE_LINK, TEMP_LINK } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Page() {
  // const targetDate = SALE_STARTS_AT;
  const containerRefMobile = useRef(null);
  const containerRefDesktop = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRefMobile,
    offset: ["start 0.9", "start 0"],
  });
  const { scrollYProgress: scrollYProgressDesktop } = useScroll({
    target: containerRefDesktop,
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

  const translatexPhone1Desktop = useTransform(
    scrollYProgressDesktop,
    [0, 0.7],
    ["100px", "200px"]
  );
  const translatexPhone2Desktop = useTransform(
    scrollYProgressDesktop,
    [0, 0.7],
    ["125px", "150px"]
  );
  const translatexPhone3Desktop = useTransform(
    scrollYProgressDesktop,
    [0, 0.7],
    ["125px", "50px"]
  );

  return (
    <>
      <BlackHeader href={STRIPE_LINK} />
      <main>
        <Section>
          <Container className="flex flex-col justify-center space-y-14 lg:max-w-3xl">
            <h1 className="text-center mb-0 text-2xl lg:text-3xl">
              Hemmelig påmelding for prioritetslisten
            </h1>
            <div className="flex flex-col space-y-3 mx-auto">
              <Button
                href={STRIPE_LINK}
                variant="pink"
                className="mx-auto w-full lg:w-fit"
              >
                Bli med på maraton
              </Button>
              <span className="text-center text-mid-grey text-md">
                kr 1 883 per mnd i 3 mnd
              </span>
            </div>
          </Container>
        </Section>
        <Section className="mt-0 md:mt-0 lg:mt-0">
          <Container className="mb-10 lg:mb-20 lg:flex">
            <div>
              <h2 className="text-pretty mb-9 lg:mb-14 text-center lg:text-left mx-auto max-w-xl text-2xl lg:text-3xl">
                3 måneders treningsmaraton på Myluck appen
              </h2>
              <div className="lg:hidden relative max-w-2xl mx-auto w-full h-[450px] lg:h-[650px] pt-20 lg:pl-20 overflow-hidden">
                <motion.div
                  ref={containerRefMobile}
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
              <div className="flex space-x-2 lg:space-x-14 mb-9">
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
                    <li>Personlig kalori- og makromål</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col space-y-3 lg:space-y-5 mb-20 lg:mb-0">
                <Button
                  variant="secondary"
                  hasIcon
                  className="w-full lg:w-fit "
                  href={STRIPE_LINK}
                >
                  Bli med
                </Button>
                <span className="text-mid-grey text-md flex justify-center lg:justify-start">
                  Maratonet starter den 29. januar 2024
                </span>
              </div>
            </div>
            <div className="hidden lg:block relative max-w-2xl mx-auto w-full h-[450px] lg:h-[650px] pt-20 lg:pl-10 overflow-hidden">
              <motion.div
                ref={containerRefDesktop}
                style={{
                  rotate: rotatePhone1,
                  translateY: translateYPhone1,
                  translateX: translatexPhone1Desktop,
                }}
              >
                <Image
                  src="/phone-1.png"
                  className="absolute w-[60%]"
                  alt="App screenshots"
                  width={600}
                  height={1200}
                />
              </motion.div>
              <motion.div
                style={{
                  rotate: rotatePhone2,
                  translateY: translateYPhone2,
                  translateX: translatexPhone2Desktop,
                }}
              >
                <Image
                  src="/phone-2.png"
                  className="absolute w-[60%]"
                  alt="App screenshots"
                  width={600}
                  height={1200}
                />
              </motion.div>
              <motion.div
                style={{
                  rotate: rotatePhone3,
                  translateY: translateYPhone3,
                  translateX: translatexPhone3Desktop,
                }}
              >
                <Image
                  src="/phone-3.png"
                  className="absolute w-[60%]"
                  alt="App screenshots"
                  width={600}
                  height={1200}
                />
              </motion.div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
