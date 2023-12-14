"use client";

import { HeartIcon } from "@/app/icons/HeartIcon";
import { cn } from "@/app/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";

import { forwardRef } from "react";

const buttonProps = cva({
  base: "rounded-[100px] border py-[20px] px-[80px] transition-color duration-100 ease text-[16px] lg:text-[30px] font-semibold",
  variants: {
    variant: {
      primary:
        "text-pink-mid border-pink-mid bg-pink-light disabled:text-pink-disabled disabled:border-pink-disabled disabled:bg-white hover:text-white hover:bg-pink-intense",
      secondary:
        "border-black disabled:border-mid-grey disabled:text-mid-grey text-black focus:ouline-2 hover:bg-black hover:text-white",
    },
    size: {
      default: "",
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
