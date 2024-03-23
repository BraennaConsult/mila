"use client";

import { INNER_CIRCLE_CHECKOUT_LINK, PREMIUM_CHECKOUT_LINK } from "@/constants";
import { track } from "@vercel/analytics";
import Link from "next/link";

export function CheckoutLink({ option }: { option: string }) {
  const linkHref =
    option === "premium" ? PREMIUM_CHECKOUT_LINK : INNER_CIRCLE_CHECKOUT_LINK;
  return (
    <Link
      href={linkHref}
      onClick={() => {
        track("checkout_button", { location: "floating_button" });
      }}
      className="p-8 text-white font-semibold text-[20px] "
    >
      Bli med på maraton
    </Link>
  );
}
