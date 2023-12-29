"use client";

import { Container } from "@/app/components/Container";
import { FeaturesCarousel } from "@/app/components/FeaturesCarousel";
import { Section } from "@/app/components/Section";

export function AppPreview() {
  return (
    <Section>
      <Container>
        <h2 className="lg:max-w-xl">
          3 måneders treningsmaraton på Myluck appen
        </h2>
      </Container>
      <FeaturesCarousel />
    </Section>
  );
}
