"use client";

import { set30MinuteTimer, setM3LimitedOffer } from "@/app/actions";
import { COOKIES } from "@/constants";
import { cookies } from "next/headers";

export function M3DiscountCookieTrigger({
  countdownTime,
}: {
  countdownTime: string;
}) {
  const isClient = typeof window !== "undefined";

  if (isClient) {
    if (!countdownTime) {
      setTimeout(() => {
        setM3LimitedOffer();
      }, 1500);
    }
  }

  return <></>;
}
