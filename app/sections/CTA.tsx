"use client";

import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import CountdownTimer from "@/app/components/CountdownTimer";
import { Progress } from "@/app/components/Progress";
import { Section } from "@/app/components/Section";
import { SPOTS_LEFT } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Props {
  className?: string;
}

export function CTA({ className }: Props) {
  const targetDate = "2024-01-20T23:59:59";

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const [progress, setProgress] = useState(200);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(SPOTS_LEFT));
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section className={className}>
      <Container className="flex flex-col justify-center space-y-14 lg:max-w-2xl">
        <h2 className="text-center mb-0 text-2xl lg:text-3xl">
          Vi bygger selvtillit på treningssenteret
        </h2>
        <div className="flex flex-col space-y-5 lg:space-y-0 lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-x-14 mx-auto">
          <CountdownTimer timeLeft={timeLeft} />
          <Progress className="lg:order-first" progress={progress} />
        </div>
        <div className="space-y-3 lg:mx-auto flex flex-col items-center">
          <Button variant="pink" className="w-full lg:w-fit">
            Bli med
          </Button>
          <div className="flex justify-center text-mid-grey items-center space-x-0.5">
            <span className="mt-0.5">Del opp betalingen med</span>
            <Image src="/klarna.svg" width={64} height={64} alt="Klarna logo" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
