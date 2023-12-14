"use client";

import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import CountdownTimer from "@/app/components/CountdownTimer";
import { Section } from "@/app/components/Section";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function CTA() {
  return (
    <Section className="backdrop-blur-xl z-[50]">
      <Container className="flex flex-col justify-center space-y-14 lg:space-y-20 max-w-xl">
        <h2 className="text-2xl lg:text-3xl text-center max-w-sm lg:max-w-md mx-auto">
          Build confidence in the gym
        </h2>
        <CountdownTimer targetDate="2023-12-31T00:00:00" />
        <Button hasIcon>Join fitness marathon</Button>
      </Container>
    </Section>
  );
}
