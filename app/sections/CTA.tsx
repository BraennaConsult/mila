"use client";

import { Button, buttonProps } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import CountdownTimer from "@/app/components/CountdownTimer";
import { Progress } from "@/app/components/Progress";
import { Section } from "@/app/components/Section";
import { cn, getSaleHasEnded, getSaleHasStarted } from "@/app/utils";
import { PRICE_AND_DATE, SALE_FINISHES_AT, SALE_STARTS_AT } from "@/constants";
import Image from "next/image";
import { Card } from "../components/Card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePlausible } from "next-plausible";
import { PageType } from "@/lib/types";

interface Props {
  type: PageType;
  href: string;
  className?: string;
  containerClassName?: string;
  withTitle?: boolean;
  disabled?: boolean;
}

export function CTA({
  type,
  href,
  className,
  containerClassName,
  withTitle = true,
  disabled,
}: Props) {
  const saleStartsAt = SALE_STARTS_AT;
  const saleEndsAt = SALE_FINISHES_AT;
  const hasSaleStarted = getSaleHasStarted();
  const hasSaleEnded = getSaleHasEnded();
  const router = useRouter();
  const plausible = usePlausible();

  const isDisabled = disabled || (!hasSaleStarted && hasSaleEnded);

  function handleClick() {
    if (isDisabled) return;

    plausible("checkout_button", {
      props: {
        location: "cta_section",
        type,
      },
    });

    router.push(href);
  }

  return (
    <Section className={className}>
      <Container
        className={cn(
          "flex flex-col justify-center space-y-14 lg:max-w-3xl",
          containerClassName
        )}
      >
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
            {hasSaleStarted ? (
              <div className="flex flex-col space-y-5 lg:space-y-0 lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-x-14 mx-auto z-2">
                <CountdownTimer
                  title="Påmeldingen stenger om"
                  targetDate={saleEndsAt}
                />
                <Progress className="lg:order-first" />
              </div>
            ) : (
              <>
                <CountdownTimer
                  title="Påmeldingen starter om"
                  targetDate={saleStartsAt}
                />
                <Progress className="mx-auto" />
              </>
            )}
            <div className="space-y-3 lg:mx-auto flex flex-col items-center mt-12">
              <button
                disabled={isDisabled}
                onClick={handleClick}
                className={cn(
                  "w-full lg:w-fit disabled:cursor-not-allowed disabled:bg-black/60",
                  buttonProps({ variant: "black" })
                )}
              >
                Jeg vil være med på maraton
              </button>
              {isDisabled && hasSaleStarted && (
                <span className="text-md">
                  NB! Du må velge en pakke før du kan gå videre.
                </span>
              )}
              {isDisabled && !hasSaleStarted && (
                <span className="text-md">Salget har ikke åpnet enda.</span>
              )}
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
