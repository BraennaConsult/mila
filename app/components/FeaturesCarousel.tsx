"use client";

import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/app/utils";
import Image from "next/image";
import { FeatureCard } from "@/app/components/FeatureCard";

const images = [
  { src: "/myluck-5.JPG", alt: "MyLuck 1" },
  { src: "/myluck-2.JPG", alt: "MyLuck 2" },
  { src: "/myluck-3.JPG", alt: "MyLuck 3" },
  { src: "/myluck-4.JPG", alt: "MyLuck 4" },
  { src: "/myluck-5.JPG", alt: "MyLuck 5" },
];

export function FeaturesCarousel() {
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
      // "(min-width: 1024px)": {
      //   slides: { perView: 3.5, spacing: 24 },
      // },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div>
      <div className="carousel-center relative">
        <div ref={ref} className="keen-slider pl-4 mb-8 ">
          <FeatureCard
            className="keen-slider__slide number-slide-1 border border-mid-grey"
            title="Du vet alltid hva du skal gjøre"
            description="12 ukers treningsprogram, 100+ videoer med steg-for-steg insstruks for hver enkelt øvelse"
          />
          <FeatureCard
            className="keen-slider__slide number-slide-2 bg-[#DEF7FF]"
            title="Du vet hva du skal spise for å lykkes!"
            description="Smakfulle og enkle oppskrifter som du faktisk gleder deg over å  kunne spise!"
          />
          <FeatureCard
            className="keen-slider__slide number-slide-3 bg-[#FEE9F1]"
            title="Skreddersydd for kvinner"
            description="Myluck inneholder treningsuker som er tilpasset din menstruasjonsperioden."
          />
          <FeatureCard
            className="keen-slider__slide number-slide-4 text-white"
            title="Hold oversikt over de gone vanene dine!"
            description="Å være sunn handler ikke bare om å trene – logg alle de sunne vanene dine i appen for balansert helse!"
            image={{
              src: "/myluck-1.JPG",
              alt: "MyLuck 1",
              imageClassName: "object-cover",
            }}
          />
          <FeatureCard
            className="keen-slider__slide number-slide-5 bg-white"
            title="Du er ikke alene!"
            description="Bli med i en eksklusiv gruppe med likesinnede kvinner som har de samme målene – vi heier på hverandre!"
            image={{
              src: "/network.jpg",
              alt: "Community illustration",
              imageClassName:
                "object-contain bottom-0 absolute h-full object-bottom",
            }}
          />
          <FeatureCard
            className="keen-slider__slide number-slide-6 bg-[#F5BECE]"
            title="Bygg din drømmekropp opp slik som jeg gjorde – med å være heldig!"
            description="Bli med i en eksklusiv gruppe med likesinnede kvinner som har de samme målene – vi heier på hverandre!"
            image={{
              src: "/fancy.png",
              alt: "Model photo of Mila",
              imageClassName: "object-cover ",
            }}
          />
          {images?.map((image, index) => (
            <div
              key={index}
              className={cn(
                "keen-slider__slide rounded-[30px] relative",
                `number-slide-${index + 7}`
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
    </div>
  );
}
