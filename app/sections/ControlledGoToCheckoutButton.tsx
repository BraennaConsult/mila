"use client";

import Link from "next/link";
import { CheckoutLink } from "../components/CheckoutButton";
import { usePlausible } from "next-plausible";

interface Props {
  href: string;
  type: "website" | "funnel" | "sales";
  option?: string;
}

export function ControlledGoToCheckoutButton({ href, type, option }: Props) {
  const plausible = usePlausible();

  if (!option) return null;

  return (
    <div className="fixed z-10 inset-x-0 bottom-0  text-center shadow-md mb-8 rounded-[100px] overflow-hidden my-12 w-fit mx-auto">
      <div className="w-full bg-black py-2 px-4 lg:max-w-[350px]">
        <Link
          href={href}
          onClick={() => {
            plausible("checkout_button", {
              props: {
                location: "floating_button",
                type,
              },
            });
          }}
          className="p-8 text-white font-semibold text-[20px] "
        >
          Bli med på maraton
        </Link>
      </div>
    </div>
  );
}
