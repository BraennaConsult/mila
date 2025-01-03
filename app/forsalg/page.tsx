"use client";

import { BlackHeader } from "@/app/components/BlackHeader";
import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import CountdownTimer from "@/app/components/CountdownTimer";
import { Footer } from "@/app/components/Footer";
import { Progress } from "@/app/components/Progress";
import { Section } from "@/app/components/Section";
import { getSaleHasStarted } from "@/app/utils";
import {
  PAYMENT_LINK,
  PRICE_AND_DATE,
  SALE_FINISHES_AT,
  SALE_STARTS_AT,
  TEMP_LINK,
} from "@/constants";

export default function Page() {
  const targetDate = SALE_STARTS_AT;
  const saleFinishesAt = SALE_FINISHES_AT;
  const saleHasStarted = getSaleHasStarted();

  return (
    <>
      <BlackHeader />
      <main>
        <Section>
          <Container className="flex flex-col justify-center space-y-14 lg:max-w-3xl">
            <h1 className="text-center mb-0 text-2xl lg:text-3xl">
              Påmeldingen åpner kl. 18:00
            </h1>
            <p className="text-[20px] text-center max-w-lg mx-auto">
              Akkurat nå kan bare de som er i prioritetsgruppen melde seg på,
              men påmeldingen åpner for alle snart ❤️❤️❤️
            </p>
            <div className="flex flex-col space-y-5 lg:space-y-0 lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-x-14 mx-auto">
              <CountdownTimer
                title={
                  saleHasStarted
                    ? "Påmeldingen stenger om"
                    : "Påmeldingen åpner om"
                }
                targetDate={saleHasStarted ? saleFinishesAt : targetDate}
              />
              <Progress className="lg:order-first" />
            </div>
            <div className="flex flex-col space-y-5 justify-center items-center">
              <Button
                href={saleHasStarted ? PAYMENT_LINK : TEMP_LINK}
                variant="pink"
                className="mx-auto"
              >
                {saleHasStarted ? "Bli med på maratonet" : "Del Myluck-reelen"}
              </Button>
              <span className="text-md text-mid-grey">{PRICE_AND_DATE}</span>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
