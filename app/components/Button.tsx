"use client";

import { track } from "@vercel/analytics";
import { HeartIcon } from "@/app/icons/HeartIcon";
import { cn, getLink } from "@/app/utils";
import {
  INNER_CIRCLE_CHECKOUT_LINK,
  PAYMENT_LINK,
  PREMIUM_CHECKOUT_LINK,
} from "@/constants";
import { cva, type VariantProps } from "cva";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const buttonProps = cva({
  base: "rounded-[100px] border transition-color duration-100 ease font-semibold  shadow-sm flex justify-center font-sans text-center",
  variants: {
    variant: {
      primary:
        "border-pink-primary bg-pink-primary/20 text-pink-primary hover:bg-[#FBCBDD] hover:text-black",
      pink: "bg-pink-loud text-white border-pink-loud hover:bg-white hover:text-pink-loud focus:bg-white focus:text-pink-loud",
      "pink-ghost":
        "border-pink-loud text-pink-loud bg-transparent hover:bg-pink-loud hover:text-white focus:bg-pink-loud focus:text-white",
      secondary:
        "border-black disabled:border-mid-grey disabled:text-mid-grey text-black focus:ouline-2 hover:bg-black hover:text-white",
      white:
        "border-white text-black hover:bg-black hover:border-black bg-white hover:text-white focus:bg-black focus:border-black focus:text-white",
      black:
        "bg-black text-white hover:text-black focus:text-black hover:bg-white focus:bg-white hover:border-black focus:border-black disabled:border-none",
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
  location?: string;
  disabled?: boolean;
  trackingType?: string;
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
  location,
  disabled,
  trackingType = "cta_button",
}: ButtonProps) => {
  const searchParams = useSearchParams();
  const hasOption = searchParams.has("option");
  const option = searchParams.get("option");

  const linkHref =
    hasOption && option === "premium"
      ? PREMIUM_CHECKOUT_LINK
      : INNER_CIRCLE_CHECKOUT_LINK;

  return (
    <a
      href={disabled ? "#" : hasOption ? linkHref : getLink()}
      onClick={() => {
        location ? track(trackingType, { location }) : track(trackingType);
      }}
      aria-disabled={disabled}
      className={cn(
        buttonProps({ variant, size, fullWidth }),
        "relative",
        isLoading && "",
        hasIcon && "flex items-center justify-center",
        className
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
