"use client";

import { BlackHeader } from "@/app/components/BlackHeader";
import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import CountdownTimer from "@/app/components/CountdownTimer";
import { Footer } from "@/app/components/Footer";
import { Progress } from "@/app/components/Progress";
import { Section } from "@/app/components/Section";
import { SALE_STARTS_AT, TEMP_LINK } from "@/constants";

export default function Page() {
  const targetDate = SALE_STARTS_AT;

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
                title="Påmelding åpner om"
                targetDate={targetDate}
              />
              <Progress className="lg:order-first" />
            </div>
            <Button href={TEMP_LINK} variant="pink" className="mx-auto">
              Del Myluck-reelen
            </Button>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
