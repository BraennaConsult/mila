"use client";

import { TimeLeft } from "@/app/sections/CTA";
import { useState } from "react";

interface Props {
  timeLeft: TimeLeft;
}

const CountdownTimer = ({ timeLeft }: Props) => {
  return (
    <div className="flex flex-col space-y-3 items-center">
      <span className="text-mid-grey">Påmeldingen stenger om</span>
      <div className="space-x-2 lg:space-x-3 text-xl lg:text-[50px]">
        <span suppressHydrationWarning>{timeLeft.days} dager,</span>
        <span suppressHydrationWarning>{timeLeft.hours}t,</span>
        <span suppressHydrationWarning>{timeLeft.minutes}m,</span>
        <span suppressHydrationWarning>{timeLeft.seconds}s</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
