"use client";

import { Button, buttonProps } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import CountdownTimer from "@/app/components/CountdownTimer";
import { Progress } from "@/app/components/Progress";
import { Section } from "@/app/components/Section";
import {
  cn,
  getLink,
  getProductLink,
  getSaleHasEnded,
  getSaleHasStarted,
} from "@/app/utils";
import { PRICE_AND_DATE, SALE_FINISHES_AT, SALE_STARTS_AT } from "@/constants";
import Image from "next/image";
import { Card } from "../components/Card";
import { track } from "@vercel/analytics/react";
import { get } from "http";

interface Props {
  expiresIn: string;
  hasExpired: boolean;
  hasOption: boolean;
  className?: string;
  withTitle?: boolean;
  disabled?: boolean;
  trackingType?: string;
  title?: string;
  selectedOption?: string;
  noButton?: boolean;
}

export function CustomCTA({
  expiresIn,
  hasExpired,
  hasOption,
  className,
  withTitle = true,
  disabled,
  trackingType,
  title,
  selectedOption,
  noButton,
}: Props) {
  console.log("noButton", noButton);
  return (
    <Section className={className}>
      <Container className="flex flex-col justify-center space-y-14 lg:max-w-3xl">
        {withTitle && (
          <h2 className="text-center mb-0 text-[28px] lg:text-3xl leading-8 text-black/80 font-sans">
            Vi bygger selvtillit på treningssenteret
          </h2>
        )}
        <Card className="overflow-hidden relative mx-0 lg:px-10">
          <div className="absolute inset-0 z-0">
            <Image
              src={"/cta-background.svg"}
              alt="cta background"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="z-10 relative">
            {title && (
              <h3 className=" font-sans text-[22px] leading-[24px] text-black lg:text-3xl  mb-6">
                Du passer perfekt for dette maratonet! <br /> Du får
                <span className="font-bold"> 15% rabatt </span>
                hvis du blir med de neste{" "}
                <span className="font-bold">30 minuttene</span>
              </h3>
            )}
            {/* {hasSaleStarted ? (
              <div className="flex flex-col space-y-5 lg:space-y-0 lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-x-14 mx-auto z-2">
                <CountdownTimer
                  title="Påmeldingen stenger om"
                  targetDate={saleEndsAt}
                />
                <Progress className="lg:order-first" />
              </div>
            ) : ( */}
            <>
              <CountdownTimer
                title="Tilbudet ditt utløper om"
                targetDate={expiresIn}
              />
              <Progress className="mx-auto" />
            </>
            {!noButton && (
              <div className="space-y-3 lg:mx-auto flex flex-col items-center mt-12">
                <a
                  // href={hasOption ? getLink() : "#"}
                  href={selectedOption ? getProductLink(selectedOption) : "#"}
                  // onClick={() => {
                  //   hasOption ? track(trackingType) : null;
                  // }
                  // onClick={() => {
                  //   location ? track(trackingType, { location }) : track(trackingType);
                  // }}
                  aria-disabled={disabled}
                  className={cn(buttonProps({ variant: "black" }), "relative")}
                >
                  Bli med på maraton
                </a>
                {/* <Button
                variant="black"
                disabled={!disabled && !hasSaleStarted && hasSaleEnded}
                location="cta"
                trackingType={trackingType}
                className={cn(
                  "w-full lg:w-fit",
                  disabled && "cursor-not-allowed bg-black/60"
                )}
              >
                Bli med på maraton
              </Button> */}
                {disabled && (
                  <span className="text-md">
                    NB! Du må velge en pakke før du kan gå videre.
                  </span>
                )}
              </div>
            )}
          </div>
        </Card>
      </Container>
    </Section>
  );
}
