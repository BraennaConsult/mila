"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { createUrl } from "../utils";

interface props {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomRadioButton({ label, name, value, checked, onChange }: props) {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden" // This hides the default radio button
      />
      <span
        className={`rounded-full w-6 h-6 border-[1px] border-black ${
          checked ? "bg-pink-primary" : "bg-white"
        }`}
      ></span>
    </label>
  );
}

export default CustomRadioButton;

export function ProductPageRadioButton({ option }: { option: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const value = option.replace(" ", "-").toLowerCase();

  // get the selected option from url search params
  const selectedOptionValue = searchParams.get("option");
  console.log(selectedOptionValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const key = "option";
    const optionSearchParams = new URLSearchParams(searchParams.toString());
    optionSearchParams.set(key, value);
    const optionUrl = createUrl(pathname, optionSearchParams);
    router.replace(optionUrl, { scroll: false });
  }

  return (
    <div className="flex flex-col space-y-2 ml-2 z-10">
      <CustomRadioButton
        label={option}
        name={option}
        value={option}
        checked={value === selectedOptionValue}
        onChange={handleChange}
      />
    </div>
  );
}
