import { cn } from "@/app/utils";
import { PAYMENT_LINK } from "@/constants";
import { track } from "@vercel/analytics";

interface Props {
  variant: "white" | "ghost-white" | "ghost-black" | "pink";
}

export function JoinButton({ variant }: Props) {
  return (
    <a
      href={PAYMENT_LINK}
      onClick={() => {
        track("cta_button");
      }}
      className={cn(
        "border rounded-full py-2 px-4 font-semibold",
        variant === "white" &&
          "bg-white border-white text-black hover:bg-black hover:border-black hover:text-white focus:bg-black focus:text-white focus:border-black",
        variant === "ghost-white" &&
          "border-white bg-transparent text-white hover:bg-white hover:text-black",
        variant === "ghost-black" &&
          "border-black text-black hover:bg-black hover:text-white focus:bg-black focus:text-white",
        variant === "pink" &&
          "border-pink-loud text-pink-loud hover:bg-pink-loud hover:text-white focus:bg-pink-loud focus:text-white"
      )}
    >
      Bli med
    </a>
  );
}
//
