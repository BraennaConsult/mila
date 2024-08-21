"use client";

import { buttonProps } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import CountdownTimer from "@/app/components/CountdownTimer";
import { Progress } from "@/app/components/Progress";
import { Section } from "@/app/components/Section";
import {
  cn,
  getSaleHasEnded,
  getSaleHasStarted,
  getSalesStatus,
} from "@/app/utils";
import { ROUTES, SALE_FINISHES_AT, SALE_STARTS_AT } from "@/constants";
import { usePlausible } from "next-plausible";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card } from "../components/Card";

interface Props {
  className?: string;
  withTitle?: boolean;
  disabled?: boolean;
}

export function NavigationalCTA({
  className,
  withTitle = true,
  disabled,
}: Props) {
  const saleStartsAt = SALE_STARTS_AT;
  const saleEndsAt = SALE_FINISHES_AT;
  const hasSaleStarted = getSaleHasStarted();
  const hasSaleEnded = getSaleHasEnded();
  const salesStatus = getSalesStatus();
  const router = useRouter();
  const plausible = usePlausible();

  // const isDisabled = disabled || !hasSaleStarted || hasSaleEnded;
  const isDisabled = disabled;

  function handleClick() {
    if (isDisabled) return;

    plausible("go_to_pricing_page", {
      props: {
        location: "cta_section",
      },
    });

    router.push(ROUTES.PRICING);
  }

  return (
    <Section className={className}>
      <Container className="flex flex-col justify-center space-y-10 lg:max-w-3xl">
        {withTitle && (
          <h2 className="text-center mb-0 text-[28px] lg:text-3xl leading-8 text-black/80 font-sans text-balance max-w-[260px] md:max-w-[480px] lg:max-w-[600px] mx-auto font-medium">
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
                type="button"
                disabled={isDisabled}
                onClick={handleClick}
                className={cn(
                  "!w-full disabled:cursor-not-allowed disabled:bg-black/60",
                  buttonProps({ variant: "black" })
                )}
              >
                Bli med
              </button>
              {/* {isDisabled && hasSaleStarted && (
                <span className="text-md">
                  NB! Du må velge en pakke før du kan gå videre.
                </span>
              )} */}
              {/* {isDisabled && !hasSaleStarted && (
                <span className="text-md">Salget har ikke åpnet enda.</span>
              )} */}
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
