"use client";

import { AnimatedImage } from "@/app/components/AnimatedImage";
import { Container } from "@/app/components/Container";
import { FeaturesCarousel } from "@/app/components/FeaturesCarousel";
import { Section } from "@/app/components/Section";
import Image from "next/image";

export function AppPreview() {
  return (
    <Section>
      <Container className="lg:max-w-xl ">
        <h2 className="text-pretty mb-9 lg:mb-14 text-center mx-auto">
          3 måneders treningsmaraton på Myluck appen
        </h2>
        <div
          className="container flex justify-center items-end space-x-4"
          style={{ perspective: 1000 }}
        >
          {/* Adjust the initialX, initialY, and rotateX values to control the starting and ending positions */}
          <AnimatedImage
            src="/myluck-1.JPG"
            alt="Screenshot 1"
            initialX={-100}
            initialY={-100}
            rotateX={0}
          />
          <AnimatedImage
            src="/myluck-2.JPG"
            alt="Screenshot 2"
            initialX={0}
            initialY={-50}
            rotateX={0}
          />
          <AnimatedImage
            src="/myluck-3.JPG"
            alt="Screenshot 3"
            initialX={100}
            initialY={-100}
            rotateX={0}
          />
        </div>
        <div className="w-full aspect-square relative mb-9 lg:mb-14 max-w-2xl mx-auto">
          <Image
            fill
            src="/phone-mockup.png"
            className="object-cover absolute"
            alt="App screenshots"
          />
        </div>
        <div className="flex space-x-9 lg:space-x-14 mb-9 lg:mb-14 justify-center">
          <div className="flex flex-col space-y-5">
            <div className="space-x-2 flex items-center">
              <Image
                src="/dumbbell.svg"
                width={22}
                height={22}
                alt="Dumbbell icon"
              />
              <h3 className="text-lg lg:text-xl">Trening</h3>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>Steg for steg instruksjoner</li>
              <li>Fokus på rumpe</li>
              <li>Enkelt å følge</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="space-x-2 flex items-center">
              <Image
                src="/nutrition.svg"
                width={22}
                height={22}
                alt="Nutrition icon"
              />
              <h3 className="text-lg lg:text-xl">Kosthold</h3>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>Smakfulle oppskrifter</li>
              <li>Kalorioversikt</li>
              <li>Din egen matplan</li>
            </ul>
          </div>
        </div>
      </Container>
      <FeaturesCarousel />
    </Section>
  );
}
