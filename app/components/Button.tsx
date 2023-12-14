"use client";

import { HeartIcon } from "@/app/icons/HeartIcon";
import { cn } from "@/app/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";

import { forwardRef } from "react";

const buttonProps = cva({
  base: "rounded-[100px] border transition-color duration-100 ease font-semibold inline-flex shadow-sm",
  variants: {
    variant: {
      primary:
        "border-pink-intense outline-none hover:text-white hover:border-pink-mid hover:bg-pink-mid focus:text-white focus:border-pink-mid focus:bg-pink-light disabled:text-pink-disabled disabled:border-pink-disabled disabled:bg-white text-white bg-pink-intense",
      secondary:
        "border-black disabled:border-mid-grey disabled:text-mid-grey text-black focus:ouline-2 hover:bg-black hover:text-white",
    },
    size: {
      sm: "text-sm lg:text-md py-[2px] px-4",
      default: "text-md lg:text-lg py-3 px-5 lg:py-5 lg:px-10 ",
    },
    fullWidth: {
      true: "w-full",
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
}

// TODO add icon
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading,
      fullWidth,
      children,
      hasIcon = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonProps({ variant, size, fullWidth, className }),
          "relative",
          isLoading && "",
          hasIcon && "flex items-center justify-center"
        )}
        ref={ref}
        {...props}
      >
        {hasIcon && (
          <span className="mr-2">
            <HeartIcon className="" />
          </span>
        )}
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonProps };
