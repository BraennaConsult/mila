"use client";

import { Button } from "@/app/components/Button";
import { PAYMENT_LINK } from "@/constants";
import Link from "next/link";

export function Hero() {
  return (
    <div className="w-full h-[800px] rounded-bl-[80px] flex items-end  relative overflow-hidden">
      <video
        muted
        loop
        autoPlay
        id="promo-video"
        className="absolute right-0 bottom-0 min-w-full min-h-full z-[-1] rounded-bl-[80px] aspect-[9/16] object-cover"
      >
        <source src="/promo.mp4" type="video/mp4" />
      </video>
      <div className="space-y-6 mb-14 ml-4">
        <h1 className="text-xl lg:text-2xl text-pink-mid font-bold max-w-xs md:max-w-md ">
          Vær med å bygg din drømmekropp og skap din egen lykke!
        </h1>
        <p className="text-md text-white font-bold max-w-xs md:max-w-md text-pretty">
          Over 100+ rå kvinner har nådd sine personlige mål!
        </p>
        <Button hasIcon>
          <Link href={PAYMENT_LINK}>Bli med!</Link>
        </Button>
      </div>
    </div>
  );
}
