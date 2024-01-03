"use client";

import { AnimatedNumber } from "@/app/components/AnimatedNumber";
import { Button, buttonProps } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import CountdownTimer from "@/app/components/CountdownTimer";
import { DotsProgressBar } from "@/app/components/DotsProgressBar";
import { Progress } from "@/app/components/Progress";
import { Section } from "@/app/components/Section";
import { PAYMENT_LINK, SPOTS_LEFT } from "@/constants";
import Link from "next/link";
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
  const targetDate = "2024-01-20T00:00:00";

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
        <h2 className="lg:text-center mb-0">
          Vi bygger selvtillit på treningssenteret!
        </h2>
        <div className="flex flex-col space-y-5 lg:space-y-0 lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-x-14">
          <CountdownTimer timeLeft={timeLeft} />
          <Progress progress={progress} setProgress={setProgress} />
        </div>
        <div className="space-y-3">
          <Button variant="pink" className="lg:mx-auto">
            Bli med
          </Button>
        </div>
      </Container>
    </Section>
  );
}
