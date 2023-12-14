"use client";

import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import CountdownTimer from "@/app/components/CountdownTimer";
import { Section } from "@/app/components/Section";

export function CTA() {
  return (
    <Section>
      <Container className="flex flex-col justify-center max-w-xl">
        <h2 className="text-center max-w-sm lg:max-w-md mx-auto text-2xl lg:text-3xl">
          Build confidence in the gym
        </h2>
        <div className="space-y-14 lg:space-y-20">
          <CountdownTimer targetDate="2023-12-31T00:00:00" />
          <Button hasIcon className="mx-auto">
            Join fitness marathon
          </Button>
        </div>
      </Container>
    </Section>
  );
}
