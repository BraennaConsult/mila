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

export function MyLuck() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(max-width: 768px)": {
        slides(_, slides) {
          const slideConfig = slides.map((_, idx) => {
            const isFirstSlide = idx === 0;

            const firstSlideOrigin = Math.max(0, 15 / window.innerWidth);
            const spacing = Math.max(0, 4 / window.innerWidth);

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
      <Container>
        <h2 className="lg:max-w-lg text-pretty mb-20 md:mb-32 lg:mb-40">
          &ldquo;Du er så heldig som har den kroppen etter to barn&ldquo;
        </h2>
      </Container>
      <div ref={ref} className="keen-slider mb-8">
        <div
          className={cn(
            "keen-slider__slide rounded-[30px] number-slide-0 relative"
            // currentSlide === 0 && "ml-",
            // currentSlide === 4 && "mr-[-32px] lg:mr-[0px]"
          )}
        >
          <AspectRatio ratio={aspectRatio}>
            <Image
              className="object-cover object-top absolute rounded-project"
              src="/myluck-1.JPG"
              alt="MyLuck 1"
              fill
            />
            <div className="absolute bottom-14 lg:bottom-14 ml-6 flex items-center w-full font-serif">
              <p className="max-w-[180px] lg:max-w-40 text-lg text-balance pl-6 shrink-0">
                Jeg er heldig fordi
              </p>
              <hr className="h-[1px] bg-white grow w-full" />
            </div>
          </AspectRatio>
        </div>
        <div
          className={cn(
            "keen-slider__slide  rounded-[30px] number-slide-1 relative"
            // currentSlide === 1 && "ml-4 mr-1 lg:mx-0"
          )}
        >
          <AspectRatio ratio={aspectRatio}>
            <Image
              className="object-cover rounded-project"
              fill
              src="/myluck-2.JPG"
              alt="MyLuck 2"
            />
            <div className="absolute bottom-11 flex items-center w-full font-serif">
              <hr className="h-[1px] bg-white grow w-full flex-1" />
              <p className="max-w-[184px] w-full text-center flex justify-center text-white text-lg">
                Jeg trener og beveger meg jevnlig
              </p>
              <hr className="h-[1px] bg-white grow w-full flex-1" />
            </div>
          </AspectRatio>
        </div>
        <div
          className={cn(
            "keen-slider__slide  rounded-[30px] number-slide-2 relative"
            // currentSlide === 2 && "ml-4 mr-1 lg:mx-0"
          )}
        >
          <AspectRatio ratio={aspectRatio}>
            <Image
              className="rounded-project object-cover scale-[115%] object-top lg:scale-100"
              fill
              src="/myluck-3.JPG"
              alt="MyLuck 3"
            />
            <div className="absolute bottom-11 flex items-center w-full font-serif space-x-4 lg:space-x-1">
              <hr className="h-[1px] bg-white grow w-full flex-1" />
              <p className="max-w-[220px] w-full text-center flex justify-center text-white text-lg">
                Spiser næringsrikt & forstår betydningen av kalorier
              </p>
              <hr className="h-[1px] bg-white grow w-full flex-1" />
            </div>
          </AspectRatio>
        </div>
        <div
          className={cn(
            "keen-slider__slide  rounded-[30px] number-slide-3 relative"
            // currentSlide === 3 && "ml-4 mr-1 lg:mx-0"
          )}
        >
          <AspectRatio ratio={aspectRatio}>
            <Image
              className="object-cover rounded-project scale-[115%] lg:scale-[125%] object-top"
              fill
              src="/myluck-4.JPG"
              alt="MyLuck 4"
            />
            <div className="absolute bottom-14 flex items-center w-full font-serif space-x-4 lg:space-x-1">
              <hr className="h-[1px] bg-white grow w-full flex-1" />
              <p className="max-w-[180px] w-full text-center flex justify-center text-white text-lg text-pretty">
                Jeg mediterer & har gode vaner{" "}
              </p>
              <hr className="h-[1px] bg-white grow w-full flex-1" />
            </div>
          </AspectRatio>
        </div>
        <div
          className={cn(
            "keen-slider__slide rounded-[30px] number-slide-4 relative"
            // currentSlide === 4 && "mx-2 lg:ml-0 lg:mr-2"
          )}
        >
          <AspectRatio ratio={aspectRatio}>
            <Image
              className="object-cover rounded-project"
              fill
              src="/myluck-5.JPG"
              alt="MyLuck 5"
            />
            <div className="absolute bottom-[55px] lg:bottom-12 flex items-center w-full font-serif space-x-2 pr-12">
              <hr className="h-[1px] bg-white w-[48px]" />
              <Button
                className="border-pink-intense bg-[#FBCBDD]/20 text-[#FBCBDD]"
                fullWidth
              >
                Vil du også være heldig?
              </Button>
            </div>
          </AspectRatio>
        </div>
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
