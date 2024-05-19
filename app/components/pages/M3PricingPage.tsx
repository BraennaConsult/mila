import { GetLimitedOfferViaDM } from "@/app/components/GetLimitedOfferViaDM";
import { M3DiscountCookieTrigger } from "@/app/components/M3DiscountCookieTrigger";
import { BenefitsCard } from "@/app/sections/BenefitsCard";
import { CTA } from "@/app/sections/CTA";
import { ControlledGoToCheckoutButton } from "@/app/sections/ControlledGoToCheckoutButton";
import { GoToCheckoutButton } from "@/app/sections/GoToCheckout";
import { Guarantee } from "@/app/sections/Guarantee";
import { IncludedInPlans } from "@/app/sections/IncludedInPlans";
import { MyPath } from "@/app/sections/MyPath";
import { ProductOptions } from "@/app/sections/ProductOptions";
import { ProductReview } from "@/app/sections/ProductReview";
import { WhatYouGet } from "@/app/sections/WhatYouGet";
import { WhyMyLuckNoCTA } from "@/app/sections/WhyMyLuckNoCTA";
import { getSaleHasEnded, getSaleHasStarted } from "@/app/utils";
import { usePlausible } from "next-plausible";
import Link from "next/link";

interface Props {
  type: "website" | "funnel" | "sales";
  premiumLink: string;
  innerCircleLink: string;
  searchParams?: { [key: string]: string | string[] | undefined };
  discountHasExpired: boolean;
  discountExpirationTime: string;
}

export function M3PricingPage({
  type,
  premiumLink,
  innerCircleLink,
  searchParams,
  discountHasExpired,
  discountExpirationTime,
}: Props) {
  const option = searchParams?.option as string | undefined;
  const hasOption = searchParams?.option ? true : false;

  const linkHref = type === "website" ? premiumLink : innerCircleLink;

  return (
    <>
      <M3DiscountCookieTrigger countdownTime={discountExpirationTime} />
      <main className="bg-[#F7F6F6]">
        <>
          <WhyMyLuckNoCTA />
          <>
            <h3 className="text-center font-serif text-[28px] leading-[24px] text-black lg:text-3xl">
              Velg pakken din for <br /> å komme i gang
            </h3>
            <p className="text-center text-black/50 text-[14px] mt-6">
              Maratonet starter mandag 27. mai 2024
            </p>
            <ProductOptions className="lg:py-10" />
            {!discountHasExpired && (
              <GetLimitedOfferViaDM
                discountExpirationTime={discountExpirationTime}
              />
            )}
            <CTA
              className="pt-0 md:pt-0 lg:pt-0"
              withTitle={false}
              disabled={!hasOption}
              href={linkHref}
              type={type}
            />
            <IncludedInPlans />
            <WhatYouGet />
            <ProductReview />
            <MyPath />
            <h3 className="text-center font-serif text-[40px] leading-[40px] text-black lg:text-2xl">
              Klar for å få <br /> drømmekroppen din?
            </h3>
            <ProductOptions className="lg:pt-10 lg:pb-32" />
            {!discountHasExpired && (
              <GetLimitedOfferViaDM
                discountExpirationTime={discountExpirationTime}
              />
            )}
            <Guarantee />
            <CTA
              className="pt-0 md:pt-0 lg:pt-0"
              disabled={!hasOption}
              href={linkHref}
              type={type}
            />
            {hasOption && (
              <ControlledGoToCheckoutButton
                href={linkHref}
                type={type}
                option={option}
              />
            )}
          </>
        </>
      </main>
    </>
  );
}
