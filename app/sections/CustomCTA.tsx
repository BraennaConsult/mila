"use client";

import { Button, buttonProps } from "@/app/components/Button";
import { usePlausible } from "next-plausible";
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
import {
  ANALYTICS_EVENTS,
  PRICE_AND_DATE,
  SALE_FINISHES_AT,
  SALE_STARTS_AT,
} from "@/constants";
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
  noProgressBar?: boolean;
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
  noProgressBar = false,
}: Props) {
  const plausible = usePlausible();
  return (
    <Section className={className}>
      <Container className="flex flex-col justify-center space-y-14 lg:max-w-3xl">
        {withTitle && (
          <h2 className="text-center mb-0 text-[28px] lg:text-3xl leading-8 text-black/80 font-sans">
            Behold tilgangen til
          </h2>
        )}
        <Card className="overflow-hidden relative mx-0 px-6 lg:px-10">
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
              <div className="mb-8">
                <h2 className="mb-6 text-md font-sanse font-semibold leading-7">
                  Behold tilgangen til
                </h2>
                <div className="mb-8 ml-2 font-md font-sanse">
                  <li>MyLuck App</li>
                  <li>Matplan og oppskrifter</li>
                  <li>Felleskapet</li>
                  <li>Live seminarer</li>
                </div>
                <span className="font-bold">
                  og få tilgang til the neste Maratonet til en rabattert pris
                </span>
              </div>
            )}
            <>
              <CountdownTimer
                title="Tilbudet ditt utløper om"
                targetDate={expiresIn}
              />
              {!noProgressBar && <Progress className="mx-auto" />}
            </>
            {!noButton && (
              <div className="space-y-3 lg:mx-auto flex flex-col items-center mt-12">
                <a
                  href={selectedOption ? getProductLink(selectedOption) : "#"}
                  onClick={() => plausible(ANALYTICS_EVENTS.GO_TO_CHECKOUT)}
                  aria-disabled={disabled}
                  className={cn(buttonProps({ variant: "black" }), "relative")}
                >
                  Bli med på maraton
                </a>
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
