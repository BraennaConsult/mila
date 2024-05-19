"use client";

import { Button, buttonProps } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { cn, getLink } from "@/app/utils";
import { HeartIcon } from "@/app/icons/HeartIcon";
import { usePlausible } from "next-plausible";
import Link from "next/link";

interface Props {
  salesOpen: boolean;
}

export function Hero({ salesOpen }: Props) {
  const plausible = usePlausible();

  function handleClick() {
    if (!salesOpen) return;

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
        <h1 className="text-[40px] leading-[50px] lg:text-2xl text-pink-primary font-bold max-w-xs md:max-w-md ">
          Strammere glutes,
          <br /> Gå ned i vekt, <br /> Form kroppen
        </h1>
        <p className="text-md text-white max-w-xs md:max-w-md text-balance">
          Alt du trenger for å oppnå målene dine. I en app.
        </p>
        <div className="flex flex-col space-y-5">
          <Link
            href={getLink()}
            aria-disabled={!salesOpen}
            onClick={handleClick}
            className={cn("flex items-center", buttonProps())}
          >
            <span className="mr-2">
              <HeartIcon />
            </span>
            Bli med
          </Link>
          {!salesOpen && (
            <span className="text-md text-white">
              Salget åpner mandag 20. mai kl. 16:00
            </span>
          )}
        </div>
      </Container>
    </div>
  );
}
