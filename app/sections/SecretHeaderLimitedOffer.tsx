"use client";

import { set30MinuteTimer } from "@/app/actions";
import { COOKIES } from "@/constants";
import { cookies } from "next/headers";

export function SecretHeaderLimitedOffer({
  countdownTime,
}: {
  countdownTime: string;
}) {
  const isClient = typeof window !== "undefined";

  if (isClient) {
    if (!countdownTime) {
      setTimeout(() => {
        set30MinuteTimer();
      }, 1500);
    }
  }

  return <></>;
}
