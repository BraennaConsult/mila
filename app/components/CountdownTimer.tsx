"use client";

import { useCountdown } from "@/app/useCountdown";

interface Props {
  title: string;
  targetDate: string;
}

const CountdownTimer = ({ title, targetDate }: Props) => {
  const timeLeft = useCountdown(targetDate);

  return (
    <div className="flex flex-col">
      <span className="text-mid-grey">{title}</span>
      <div className="space-x-2 lg:space-x-3 text-[50px] lg:[text-60px] font-serif">
        {timeLeft.days > 0 && (
          <span suppressHydrationWarning>{timeLeft.days}d</span>
        )}
        {timeLeft.days > 0 && (
          <span suppressHydrationWarning>{timeLeft.hours}t</span>
        )}
        {timeLeft.minutes > 0 && (
          <span suppressHydrationWarning>{timeLeft.minutes}m</span>
        )}
        <span suppressHydrationWarning>{timeLeft.seconds}s</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
