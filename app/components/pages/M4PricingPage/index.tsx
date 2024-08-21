"use client";

import { Container } from "@/app/components/Container";
import { Countdown } from "@/app/components/pages/M4PricingPage/countdown";
import { GoToCheckoutButton } from "@/app/components/pages/M4PricingPage/go-to-checkout-button";
import { MarathonIncludes } from "@/app/components/pages/M4PricingPage/marathon-includes";
import { Options } from "@/app/components/pages/M4PricingPage/options";
import { IncludedInPlans } from "@/app/sections/IncludedInPlans";
import { MyPath } from "@/app/sections/MyPath";
import { WhatYouGet } from "@/app/sections/WhatYouGet";
import { WhyMyLuckNoCTA } from "@/app/sections/WhyMyLuckNoCTA";
import { getSalesStatus } from "@/app/utils";
import { M4_PREMIUM_LINK, M4_INNER_CIRCLE_LINK } from "@/constants";
import Image from "next/image";
import Link from "next/link";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

// TODO translate plans include
export function M4PricingPage({ searchParams }: Props) {
  const option = searchParams?.option as string | undefined;
  const hasOption = Boolean(searchParams?.option);
  const salesStatus = getSalesStatus();

  const linkHref =
    option === "premium" ? M4_PREMIUM_LINK : M4_INNER_CIRCLE_LINK;

  return (
    <main className="bg-[#F7F6F6]">
      <div className="mb-5 lg:mb-10 relative flex flex-col items-center py-10">
        <Link href="/" className="mb-10">
          <Image src="/logo.png" alt="logo" width={98} height={52} />
        </Link>
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-[50px] leading-[50px] font-sans text-center uppercase text-black">
            AB - Out Time Maraton
          </h1>
          <p className="uppercase text-black/60 text-[16px] z-20">
            {salesStatus.status === "pre-sale"
              ? "Salget åpner 28 aug"
              : "Salget stenger 22:00"}
          </p>
          <span className="text-[16px] text-black/70 rounded-[100px] border border-black/30 w-fit py-2 px-6 z-20 uppercase">
            7 ukers
          </span>
        </div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-[#F7F6F6]/50 to-[#F7F6F6]" />
      </div>
      <div className="flex flex-col gap-3">
        <Countdown />
        <Options />
        <IncludedInPlans className="mt-10" />
        <Container className="!max-w-[800px]">
          <MarathonIncludes className="max-w-[800px]" />
        </Container>
        <WhatYouGet />
        <WhyMyLuckNoCTA />
        <Countdown className="mt-10" />
        <Options />
        <Container className="mx-3 mt-10 mb-20">
          <MyPath />
        </Container>
      </div>
      {hasOption && salesStatus.status === "sale" && (
        <GoToCheckoutButton href={linkHref} />
      )}
    </main>
  );
}
