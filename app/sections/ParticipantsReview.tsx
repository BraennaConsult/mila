"use client";

import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import { useIsDesktop } from "@/app/useIsDesktop";
import { cn } from "@/app/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";
import { MediaCard } from "../components/MediaCard";
import { Slide } from "@/lib/types";

export function ParticipantsReview() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(max-width: 768px)": {
        slides(_, slides) {
          const slideConfig = slides.map((_, idx) => {
            const isFirstSlide = idx === 0;

            const firstSlideOrigin = Math.max(0, 15 / window.innerWidth);
            const spacing = Math.max(0, 8 / window.innerWidth);

            let origin = 0.05;

            if (isFirstSlide) {
              origin = firstSlideOrigin;
            }

            return {
              spacing: spacing,
              origin: origin,
              size: 0.9,
            };
          });
          return slideConfig;
        },
      },
      "(min-width: 768px)": {
        slides(_, slides) {
          const slideConfig = slides.map((_, idx) => {
            const isLastSlide = idx === slides.length - 1;

            const marginLeft = Math.max(0, (window.innerWidth - 1200) / 2);
            const originRatio = marginLeft / window.innerWidth;
            const spacing = Math.max(0, 8 / window.innerWidth);

            return {
              spacing: spacing,
              origin: isLastSlide ? 1.33 : originRatio,
              size: 0.33,
            };
          });
          return slideConfig;
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const isDesktop = useIsDesktop();
  const totalSlides =
    isDesktop && instanceRef?.current
      ? instanceRef?.current?.slides.length - 1
      : instanceRef?.current?.slides.length;
  const aspectRatio = isDesktop ? 1 : 0.75;

  return (
    <Section>
      <h2 className="lg:max-w-lg text-pretty mb-[40px] md:mb-32 lg:mb-40 text-[28px] lg:text-2xl text-center lg:text-left">
        What participants say
      </h2>
      <div ref={ref} className="keen-slider mb-8">
        {slides.map((slide, index) => (
          <MediaCard
            key={index}
            type={slide.type}
            src={slide.src}
            alt={slide.alt}
            aspectRatio={aspectRatio}
            text={slide.text}
            position={slide.position}
          />
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="hidden lg:flex space-x-2 items-center justify-end pr-8 lg:absolute lg:right-0">
          <button
            className="rounded-full border-light-grey border p-1 hover:bg-pink-light"
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          >
            <ChevronLeftIcon className="w-6 h-6 " />
          </button>
          <button
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide === instanceRef.current.track.details.slides.length
            }
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      )}
      {loaded && instanceRef.current && (
        <div className="flex space-x-1 justify-center lg:pt-3">
          {Array.from({ length: totalSlides || 0 }, (_, idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={cn(
                "w-2 h-2 rounded-full cursor-pointer bg-mid-grey border-none p-1",
                currentSlide === idx
                  ? "bg-black w-8 animate-enter-dot"
                  : "bg-mid-grey animate-leave-dot"
              )}
            />
          ))}
        </div>
      )}
    </Section>
  );
}

const slides: Slide[] = [
  { type: "image", src: "/myluck-1.JPG", alt: "MyLuck 1", aspectRatio: 0.75 },
  {
    type: "image",
    src: "/myluck-2.JPG",
    alt: "MyLuck 2",
    aspectRatio: 0.75,
  },
];
