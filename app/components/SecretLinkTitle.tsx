"use client";

import { cookies } from "next/headers";
import { setCookie } from "../actions";

export function SecretLinkTitle({
  cookieCountdownTime,
}: {
  cookieCountdownTime?: string;
}) {
  const isClient = typeof window !== "undefined";

  if (isClient) {
    if (!cookieCountdownTime) {
      console.log("Setting cookie");
      setCookie();
    }
  }

  return (
    <h3 className="text-center font-serif text-[28px] leading-[24px] text-black lg:text-3xl mb-8">
      OBS! Hemmelig link!
    </h3>
  );
}
