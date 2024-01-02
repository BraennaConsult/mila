import { cn } from "@/app/utils";
import { PAYMENT_LINK } from "@/constants";
import Link from "next/link";

interface Props {
  variant: "white" | "ghost-white" | "ghost-black" | "pink";
}

export function JoinButton({ variant }: Props) {
  return (
    <Link
      href={PAYMENT_LINK}
      className={cn(
        "border rounded-full py-1 px-4 font-semibold",
        variant === "white" && "border-white text-black bg-white",
        variant === "ghost-white" &&
          "border-white bg-transparent text-white hover:bg-white hover:text-black",
        variant === "ghost-black" && "border-black bg-white text-black",
        variant === "pink" && "border-pink-loud bg-white text-pink-loud"
      )}
    >
      Bli med!
    </Link>
  );
}
//
