import { GetLimitedOfferViaDM } from "@/app/components/GetLimitedOfferViaDM";
import { Logo } from "@/app/components/Logo";
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
import Image from "next/image";
import Link from "next/link";

interface Props {
  type: "website" | "funnel" | "sales";
  premiumLink: string;
  innerCircleLink: string;
  searchParams?: { [key: string]: string | string[] | undefined };
  discountHasExpired: boolean;
  discountExpirationTime: string;
  showDiscount?: boolean;
}

export function M3PricingPage({
  type,
  premiumLink,
  innerCircleLink,
  searchParams,
  discountHasExpired,
  discountExpirationTime,
  showDiscount,
}: Props) {
  const option = searchParams?.option as string | undefined;
  const hasOption = searchParams?.option ? true : false;

  const linkHref = option === "premium" ? premiumLink : innerCircleLink;

  return (
    <>
      <M3DiscountCookieTrigger countdownTime={discountExpirationTime} />
      <main className="bg-[#F7F6F6]">
        <div className="flex justify-center pt-3 pb-6">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={98} height={52} />
          </Link>
        </div>
        <div className="mb-5 lg:mb-10">
          <h3 className="text-center font-serif text-[28px] leading-[24px] text-black lg:text-3xl">
            Bli din egen sommerflørt
          </h3>
          <p className="text-center text-black/50 text-[14px] mt-3 lg:mt-6">
            Maratonet starter mandag 27. mai 2024
          </p>
        </div>
        <WhyMyLuckNoCTA />
        <>
          <>
            <div id="options">
              <ProductOptions className="pb-2 md:pb-5" />
            </div>
            {!discountHasExpired && showDiscount && (
              <GetLimitedOfferViaDM
                discountExpirationTime={discountExpirationTime}
              />
            )}
            <CTA
              className="pt-0 md:pt-0 lg:pt-0 md:px-0"
              containerClassName="lg:px-0"
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
            <div id="options">
              <ProductOptions className="lg:pt-10 lg:pb-32" />
            </div>
            {!discountHasExpired && showDiscount && (
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
