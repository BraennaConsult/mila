"use client";

import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import CountdownTimer from "@/app/components/CountdownTimer";
import { Progress } from "@/app/components/Progress";
import { Section } from "@/app/components/Section";
import { cn, getSaleHasStarted } from "@/app/utils";
import { PRICE_AND_DATE, SALE_FINISHES_AT, SALE_STARTS_AT } from "@/constants";
import Image from "next/image";
import { Card } from "../components/Card";

interface Props {
  className?: string;
  withTitle?: boolean;
  disabled?: boolean;
  trackingType?: string;
}

export function CTA({
  className,
  withTitle = true,
  disabled,
  trackingType,
}: Props) {
  // const targetDate = SALE_FINISHES_AT;
  const targetDate = SALE_STARTS_AT;
  const saleHasStarted = getSaleHasStarted();

  return (
    <Section className={className}>
      <Container className="flex flex-col justify-center space-y-14 lg:max-w-3xl">
        {withTitle && (
          <h2 className="text-center mb-0 text-[28px] lg:text-3xl leading-8 text-black/80 font-sans">
            Vi bygger selvtillit på treningssenteret
          </h2>
        )}

        <Card className="overflow-hidden relative mx-0 lg:px-10">
          {/* SVG Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src={"/cta-background.svg"}
              alt="cta background"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* <div className="absolute z-[0]">
            <Image
              src={"/cta-background.svg"}
              alt="cta"
              width={500}
              height={500}
              // className="absolute inset-0 z-0"
            />
          </div> */}
          <div className="z-10 relative">
            {saleHasStarted ? (
              <div className="flex flex-col space-y-5 lg:space-y-0 lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-x-14 mx-auto z-2">
                <CountdownTimer
                  title="Påmeldingen stenger om"
                  targetDate={targetDate}
                />
                <Progress className="lg:order-first" />
              </div>
            ) : (
              <>
                <CountdownTimer
                  title="Påmeldingen starter om"
                  targetDate={targetDate}
                />
                <Progress className="mx-auto" />
              </>
            )}
            <div className="space-y-3 lg:mx-auto flex flex-col items-center mt-12">
              <Button
                variant="black"
                disabled={disabled}
                location="cta"
                trackingType={trackingType}
                className={cn(
                  "w-full lg:w-fit",
                  disabled && "cursor-not-allowed bg-black/60"
                )}
              >
                Bli med på maraton
              </Button>
              {disabled && (
                <span className="text-md">
                  NB! Du må velge en pakke før du kan gå videre.
                </span>
              )}

              {/* <span className="text-md text-mid-grey">{PRICE_AND_DATE}</span> */}
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
