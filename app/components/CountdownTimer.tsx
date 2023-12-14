"use client";

import { AnimatedNumber } from "@/app/components/AnimatedNumber";
import { ProgressBar } from "@/app/components/ProgressBar";
import { useEffect, useState } from "react";

interface Props {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: Props) => {
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
    <div>
      <div className="flex justify-between items-center mb-2 lg:mb-4 text-light">
        <span>Sales close in</span>
        <span>Available slots left</span>
      </div>
      <div className="flex justify-between items-center mb-4 font-serif text-xl lg:text-[50px] space-x-0 tracking-[0px] lg:mb-8">
        <div className="space-x-2 lg:space-x-3">
          <span suppressHydrationWarning>{timeLeft.days}d</span>
          <span suppressHydrationWarning>{timeLeft.hours}t</span>
          <span suppressHydrationWarning>{timeLeft.minutes}m</span>
          <span suppressHydrationWarning>{timeLeft.seconds}s</span>
        </div>
        {/* <span>12%</span> */}
        <AnimatedNumber value={progress} />
      </div>
      <ProgressBar progress={progress} setProgress={setProgress} />
    </div>
  );
};

export default CountdownTimer;
