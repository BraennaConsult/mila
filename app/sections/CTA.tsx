"use client";

import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import CountdownTimer from "@/app/components/CountdownTimer";
import { Progress } from "@/app/components/Progress";
import { Section } from "@/app/components/Section";
import { PAYMENT_LINK } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CTA() {
  const targetDate = "2024-01-04T00:00:00";

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

  return (
    <Section>
      <Container className="flex flex-col justify-center max-w-xl">
        <h2 className="text-center mb-9">
          Vi bygger selvtillit på treningssenteret!
        </h2>
        <Progress progress={progress} setProgress={setProgress} />
        <div className="space-y-6 mt-14">
          <Button hasIcon className="mx-auto" fullWidth>
            <Link href={PAYMENT_LINK}>Bli med!</Link>
          </Button>
          <CountdownTimer timeLeft={timeLeft} />
        </div>
      </Container>
    </Section>
  );
}
