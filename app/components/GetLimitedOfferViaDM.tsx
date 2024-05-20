"use client";

import { buttonProps } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import { TimeLeft } from "@/app/useCountdown";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  discountExpirationTime: string;
}

export function GetLimitedOfferViaDM({ discountExpirationTime }: Props) {
  const discountHasExpired = discountExpirationTime
    ? new Date(discountExpirationTime) < new Date()
    : false;

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(discountExpirationTime)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(discountExpirationTime));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <Section className="py-10 lg:py-10">
      <Container className="lg:max-w-3xl flex flex-col justify-center items-center rounded-[30px] shadow-card bg-white p-10">
        <span className="flex justify-center py-0.5 px-3 rounded-full bg-pink-primary text-black font-medium mb-2">
          Begrenset tilbud
        </span>
        <h2 className="mb-3">Få 15% rabatt</h2>
        <p className="mb-5 max-w-md text-center text-md text-gray-700">
          Hvis du sender meg en melding på Instagram i løpet av de neste 30
          minuttene så gir jeg deg 15% rabatt ❤️🤩 (si at du har tatt
          quiz&rsquo;en når du sender meg melding)
        </p>
        {!discountHasExpired && (
          <div className="space-x-2 lg:space-x-3 text-[50px] lg:[text-60px] font-serif mb-3">
            {timeLeft.days > 0 && (
              <span suppressHydrationWarning>{timeLeft.days}d</span>
            )}
            {timeLeft.hours > 0 && (
              <span suppressHydrationWarning>{timeLeft.hours}t</span>
            )}
            {timeLeft.minutes > 0 && (
              <span suppressHydrationWarning>{timeLeft.minutes}m</span>
            )}
            <span suppressHydrationWarning>{timeLeft.seconds}s</span>
          </div>
        )}
        <Link
          href="https://www.instagram.com/direct/t/17848453169767578/"
          target="_blank"
          className={buttonProps({ variant: "black" })}
        >
          Ja, jeg vil ha rabatt 😍
        </Link>
      </Container>
    </Section>
  );
}

function calculateTimeLeft(targetDate: string) {
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
}
