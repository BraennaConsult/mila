"use client";

import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/app/utils";
import Image from "next/image";

const images = [
  { src: "/myluck-1.JPG", alt: "MyLuck 1" },
  { src: "/myluck-2.JPG", alt: "MyLuck 2" },
  { src: "/myluck-3.JPG", alt: "MyLuck 3" },
  { src: "/myluck-4.JPG", alt: "MyLuck 4" },
  { src: "/myluck-5.JPG", alt: "MyLuck 5" },
];

export function MyLuck() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(max-width: 768px": {
        slides: { perView: 1.2, spacing: 16 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2.5, spacing: 24 },
      },
      "min-width: 1024px": {
        slides: { perView: 3.5, spacing: 24 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <Section>
      <Container>
        <h2 className="max-w-lg">
          &ldquo;You are so lucky to have the body that you have&ldquo;
        </h2>
      </Container>
      <div ref={ref} className="keen-slider pl-4 mb-8 carousel-center relative">
        {images?.map((image, index) => (
          <div
            key={index}
            className={cn(
              "keen-slider__slide rounded-[30px] relative",
              `number-slide-${index + 1}`
            )}
          >
            <Image
              key={index}
              className={`rounded-[30px]`}
              src={image.src}
              alt={image.alt}
              width={800}
              height={1000}
            />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="hidden lg:flex space-x-2 items-center justify-end pr-8">
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
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      )}
      {loaded && instanceRef.current && (
        <div className="flex space-x-1 justify-center">
          {[
            ...Array(
              instanceRef.current.track.details.slides.length - 1
            ).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={cn(
                  "w-2 h-2 rounded-full cursor-pointer bg-mid-grey border-none p-1 transform-[width] origin-center",
                  currentSlide === idx
                    ? "bg-black animate-enter-dot"
                    : "bg-mid-grey animate-leave-dot"
                )}
              />
            );
          })}
        </div>
      )}
    </Section>
  );
}
