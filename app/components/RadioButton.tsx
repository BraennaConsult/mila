"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { createUrl } from "../utils";
import Link from "next/link";
import { track } from "@vercel/analytics";

interface props {
  // label: string;
  name: string;
  // checked: boolean;
  // value: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CustomRadioButton({ name }: props) {
  const searchParams = useSearchParams();
  const selectedOptionValue = searchParams.get("option");
  const checked = name === selectedOptionValue;

  return (
    <label className="flex items-start cursor-pointer ml-3 mt-0.5">
      <input
        type="radio"
        name={name}
        value={name}
        checked={checked}
        className="hidden" // This hides the default radio button
      />
      <span
        className={`rounded-full w-6 h-6 border-[1px] border-black ${
          checked ? "bg-black" : "bg-white"
        }`}
      ></span>
    </label>
  );
}

export default CustomRadioButton;

export function ProductPageRadioButton({
  option,
  children,
}: {
  option: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const value = option.replace(" ", "-").toLowerCase();

  // get the selected option from url search params

  function handleChange(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const key = "option";
    const optionSearchParams = new URLSearchParams(searchParams.toString());
    optionSearchParams.set(key, value);
    const optionUrl = createUrl(pathname, optionSearchParams);
    router.replace(optionUrl, { scroll: false });
    track("product_option", { option: value });
  }

  return (
    <button onClick={handleChange} className="w-full lg:w-[375px]">
      {children}
    </button>
  );
}
