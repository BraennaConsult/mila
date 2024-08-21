"use client";

import { buttonProps } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { HeartIcon } from "@/app/icons/HeartIcon";
import { cn } from "@/app/utils";
import { PAYMENT_LINK } from "@/constants";
import { usePlausible } from "next-plausible";
import Link from "next/link";

export function Hero() {
  const plausible = usePlausible();

  function handleClick() {
    plausible("go_to_pricing_page", {
      props: {
        location: "hero",
      },
    });
  }

  return (
    <div className="w-full h-[85vh] lg:h-[725px] flex items-end  relative overflow-hidden aspect-[16/9]">
      <video
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        controls={false}
        id="promo-video"
        poster="/promo-big.png"
        className="absolute right-0 bottom-0 min-w-full min-h-full object-cover"
      >
        <source src="/video/promo-big.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full bg-black/20 top-0 left-0 z-1" />
      <Container className="space-y-8 mb-14 w-full lg:mx-auto mx-6 z-20">
        <h1 className="text-[40px] leading-[44px] lg:text-2xl text-pink-primary font-bold max-w-xs md:max-w-md ">
          Ab-out time maraton
        </h1>
        <p className="text-md text-white max-w-xs md:max-w-md text-balance">
          Salger starter 28. august
          <br />
          Maraton starter 2. september
        </p>
        <div className="flex flex-col space-y-5">
          <Link
            href={PAYMENT_LINK}
            onClick={handleClick}
            className={cn(
              "flex items-center !w-full max-w-[400px]",
              buttonProps()
            )}
          >
            <span className="mr-2">
              <HeartIcon />
            </span>
            Bli med
          </Link>
        </div>
      </Container>
    </div>
  );
}
