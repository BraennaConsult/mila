"use client";

import { track } from "@vercel/analytics";
import { HeartIcon } from "@/app/icons/HeartIcon";
import { cn } from "@/app/utils";
import { PAYMENT_LINK } from "@/constants";
import { cva, type VariantProps } from "cva";
import Link from "next/link";

const buttonProps = cva({
  base: "rounded-[100px] border transition-color duration-100 ease font-semibold  shadow-sm flex justify-center font-sans text-center",
  variants: {
    variant: {
      primary:
        "border-pink-intense bg-[#FBCBDD]/20 text-[#FBCBDD] hover:bg-[#FBCBDD] hover:text-black",
      pink: "bg-pink-loud text-white border-pink-loud hover:bg-white hover:text-pink-loud focus:bg-white focus:text-pink-loud",
      "pink-ghost":
        "border-pink-loud text-pink-loud bg-transparent hover:bg-pink-loud hover:text-white focus:bg-pink-loud focus:text-white",
      secondary:
        "border-black disabled:border-mid-grey disabled:text-mid-grey text-black focus:ouline-2 hover:bg-black hover:text-white",
      white:
        "border-white text-black hover:bg-black hover:border-black bg-white hover:text-white focus:bg-black focus:border-black focus:text-white",
      black:
        "bg-black text-white hover:text-black focus:text-black hover:bg-white focus:bg-white hover:border-black focus:border-black",
      "ghost-white":
        "border-white bg-transparent text-white hover:bg-white hover:text-black",
    },
    size: {
      sm: "text-sm lg:text-md py-[2px] px-6",
      default: "text-md lg:text-[20px] py-3 px-5 lg:py-5 lg:px-10",
    },
    fullWidth: {
      true: "w-full",
      false: "w-fit",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
    fullWidth: false,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonProps> {
  asChild?: boolean;
  isLoading?: boolean;
  hasIcon?: boolean;
  href?: string;
}

const Button = ({
  variant,
  size,
  fullWidth,
  className,
  isLoading,
  hasIcon,
  href,
  children,
}: ButtonProps) => {
  return (
    <a
      href={href || PAYMENT_LINK}
      onClick={() => {
        track("cta_button");
      }}
      className={cn(
        buttonProps({ variant, size, fullWidth, className }),
        "relative",
        isLoading && "",
        hasIcon && "flex items-center justify-center"
      )}
    >
      {hasIcon && (
        <span className="mr-2">
          <HeartIcon />
        </span>
      )}
      {children}
    </a>
  );
};

export { Button, buttonProps };
