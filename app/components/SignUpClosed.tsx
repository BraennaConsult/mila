"use client";

import { buttonProps } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import { TimeLeft } from "@/app/useCountdown";
import { M4_REMINDER_LINK } from "@/constants";
import { usePlausible } from "next-plausible";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SignUpClosed() {
  const plausible = usePlausible();

  return (
    <Section className="py-10 lg:py-10">
      <Container className="lg:max-w-3xl flex flex-col justify-center items-center rounded-[30px] shadow-card bg-white p-10">
        <span className="flex justify-center py-0.5 px-3 rounded-full bg-pink-primary text-black font-medium mb-2">
          Påmeldingen er stengt
        </span>
        <h2 className="mb-3 text-balance max-w-md text-center">
          Få beskjed når neste maraton starter
        </h2>
        <p className="mb-5 max-w-md text-center text-md text-gray-700">
          Det er dessverre ingen flere plasser til dette maratonet. Jeg kan gi
          deg beskjed når påmeldingen til neste maraton starter så du får meldt
          deg på!
        </p>
        <Link
          href={M4_REMINDER_LINK}
          onClick={() => {
            plausible("m4_reminder");
          }}
          target="_blank"
          className={buttonProps({ variant: "black" })}
        >
          Ja, gi meg beskjed ❤️
        </Link>
      </Container>
    </Section>
  );
}
