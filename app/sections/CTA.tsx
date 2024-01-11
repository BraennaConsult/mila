"use client";

import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import CountdownTimer from "@/app/components/CountdownTimer";
import { Progress } from "@/app/components/Progress";
import { Section } from "@/app/components/Section";
import { getSaleHasStarted } from "@/app/utils";
import { SALE_FINISHES_AT } from "@/constants";
import Image from "next/image";

interface Props {
  className?: string;
}

export function CTA({ className }: Props) {
  const targetDate = SALE_FINISHES_AT;
  const saleHasStarted = getSaleHasStarted();

  return (
    <Section className={className}>
      <Container className="flex flex-col justify-center space-y-14 lg:max-w-3xl">
        <h2 className="text-center mb-0 text-2xl lg:text-3xl text-balance">
          Vi bygger selvtillit på treningssenteret
        </h2>
        {saleHasStarted ? (
          <div className="flex flex-col space-y-5 lg:space-y-0 lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-x-14 mx-auto">
            <CountdownTimer
              title="Påmeldingen stenger om"
              targetDate={targetDate}
            />
            <Progress className="lg:order-first" />
          </div>
        ) : (
          <Progress className="mx-auto" />
        )}
        <div className="space-y-3 lg:mx-auto flex flex-col items-center">
          <Button variant="pink" className="w-full lg:w-fit">
            Bli med
          </Button>

          <div className="flex justify-center text-mid-grey items-center space-x-0.5">
            <span className="text-center text-mid-grey text-md">
              kr 1 883 per mnd i 3 mnd med
            </span>
            <Image src="/klarna.svg" width={64} height={64} alt="Klarna logo" />
          </div>
          <div className="flex justify-center text-mid-grey items-center space-x-2">
            <span className="text-center text-mid-grey text-md">Betal med</span>
            <div className="w-[64px]">
              <Image
                src="/vipps.png"
                width={256}
                height={256}
                alt="Vipps logo"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
