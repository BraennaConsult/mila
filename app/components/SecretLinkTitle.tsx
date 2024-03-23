"use client";

import { setCookie } from "../actions";

export function SecretLinkTitle({
  cookieCountdownTime,
}: {
  cookieCountdownTime?: string;
}) {
  const isClient = typeof window !== "undefined";

  if (isClient) {
    if (!cookieCountdownTime) {
      setTimeout(() => {
        setCookie();
      }, 1500);
    }
  }

  return (
    <h3 className="text-center font-serif text-[28px] leading-[24px] text-black lg:text-3xl mb-8 px-2">
      OBS! Hemmelig påmeldingslenke (ikke del).
    </h3>
  );
}
