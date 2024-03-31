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
import { MediaCardAutoplay, MediaCard } from "../components/MediaCard";
import { Slide } from "@/lib/types";

export function WhyMyLuck() {
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
    <Section className="py-9">
      <h2 className="lg:max-w-l text-pretty mb-[40px] md:mb-32 text-[28px] lg:text-2xl text-black/80 text-center font-sans ">
        Hvorfor jeg startet MyLuck
      </h2>
      <div ref={ref} className="keen-slider mb-8">
        {slides.map((slide, index) => {
          if (slide.autoPlay) {
            return (
              <MediaCardAutoplay
                key={index}
                type={slide.type}
                src={slide.src}
                alt={slide.alt}
                poster={slide.poster}
                aspectRatio={aspectRatio}
                text={slide.text}
                position={slide.position}
              />
            );
          }
          return (
            <MediaCard
              key={index}
              type={slide.type}
              src={slide.src}
              alt={slide.alt}
              poster={slide.poster}
              aspectRatio={aspectRatio}
              text={slide.text}
              position={slide.position}
            />
          );
        })}
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
  {
    type: "video",
    src: "/video/Videonettsted.mp4",
    poster: "/Videonettsted.png",
    alt: "MyLuck 1",
    aspectRatio: 0.75,
    autoPlay: false,
  },
  {
    type: "video",
    src: "/video/in-shower.mp4",
    poster: "/in-shower.png",
    alt: "MyLuck 2",
    aspectRatio: 0.75,
    text: "Loose wight & shape up",
    position: "center",
    autoPlay: true,
  },
  {
    type: "video",
    src: "/video/mila-with-child.mp4",
    poster: "/mila-with-child.png",
    alt: "MyLuck 3",
    aspectRatio: 0.75,
    text: `Have more energy for you family`,
    position: "top",
    autoPlay: true,
  },
  // {
  //   type: "image",
  //   src: "/carusell/carusell1.JPG",
  //   alt: "MyLuck 3",
  //   aspectRatio: 0.75,
  //   text: `Become stronger & more confident`,
  //   position: "top",
  // },
  // {
  //   type: "image",
  //   src: "/carusell/carusell2.JPG",
  //   alt: "MyLuck 3",
  //   aspectRatio: 0.75,
  //   text: `Fit into your old clothes again`,
  //   position: "center",
  // },
  // {
  //   type: "image",
  //   src: "/carusell/carusell3.JPG",
  //   alt: "MyLuck 3",
  //   aspectRatio: 0.75,
  //   text: `Reduce swelling`,
  //   position: "top",
  // },
  // {
  //   type: "image",
  //   src: "/carusell/carusell4.JPG",
  //   alt: "MyLuck 3",
  //   aspectRatio: 0.75,
  //   text: ``,
  //   position: "top",
  // },
  // {
  //   type: "image",
  //   src: "/myluck-1.JPG",
  //   alt: "MyLuck 4",
  //   aspectRatio: 0.75,
  //   text: "Reduce stress",
  //   position: "top",
  // },
  // {
  //   type: "image",
  //   src: "/myluck-2.JPG",
  //   alt: "MyLuck 5",
  //   aspectRatio: 0.75,
  //   text: "Fit into your old clothes again",
  //   position: "center",
  // },
  // {
  //   type: "image",
  //   src: "/myluck-3.JPG",
  //   alt: "MyLuck 5",
  //   aspectRatio: 0.75,
  //   text: "Fit into your old clothes again",
  //   position: "bottom",
  // },
];
