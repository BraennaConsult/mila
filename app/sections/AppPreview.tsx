"use client";

import { Container } from "@/app/components/Container";
import { FeaturesCarousel } from "@/app/components/FeaturesCarousel";
import { Section } from "@/app/components/Section";

export function AppPreview() {
  return (
    <Section>
      <Container className="max-w-xl">
        <h2 className="">3 måneders treningsmaraton på Myluck appen</h2>
      </Container>
      <FeaturesCarousel />
    </Section>
  );
}
