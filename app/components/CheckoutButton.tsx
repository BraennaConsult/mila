"use client";

import Link from "next/link";

export function CheckoutLink({ option }: { option: string }) {
  const linkHref = option === "premium" ? "premium" : "inner-circle";
  return (
    <Link
      href={linkHref}
      className=" p-8 text-white font-semibold text-[20px] "
    >
      Go to Checkout
    </Link>
  );
}
