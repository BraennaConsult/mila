"use client";

import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/app/utils";
import Image from "next/image";
import { Button } from "@/app/components/Button";
import { PAYMENT_LINK } from "@/constants";
import Link from "next/link";

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
        <h2 className="lg:max-w-lg text-pretty mb-10">
          &ldquo;Du er så heldig som har den kroppen etter to barn 👶👶&ldquo;
        </h2>
      </Container>
      <div className="px-4">
        <div ref={ref} className="keen-slider mb-8">
          <div className="keen-slider__slide rounded-[30px] number-slide-0 relative">
            <Image
              className=""
              src="/myluck-1.JPG"
              alt="MyLuck 1"
              width={800}
              height={1000}
            />
            <div className="absolute bottom-8 lg:bottom-14 ml-6 flex items-center w-full font-serif">
              <p className="max-w-48 lg:max-w-40 text-lg">
                Heldig? <br className="lg:hidden" /> Jeg er &ldquo;heldig&ldquo;
                fordi
              </p>
              <hr className="h-[1px] bg-white grow w-full" />
            </div>
          </div>
          <div className="keen-slider__slide rounded-[30px] number-slide-1 relative">
            <Image
              className=""
              src="/myluck-2.JPG"
              alt="MyLuck 2"
              width={800}
              height={1000}
            />
            <div className="absolute bottom-11 flex items-center w-full font-serif">
              <hr className="h-[1px] bg-white grow w-full flex-1" />
              <p className="max-w-[184px] w-full text-center flex justify-center text-white text-lg">
                Jeg trener og beveger meg jevnlig
              </p>
              <hr className="h-[1px] bg-white grow w-full flex-1" />
            </div>
          </div>
          <div className="keen-slider__slide rounded-[30px] number-slide-2 relative">
            <Image
              className=""
              src="/myluck-3.JPG"
              alt="MyLuck 3"
              width={800}
              height={1000}
            />
            <div className="absolute bottom-11 flex items-center w-full font-serif space-x-1">
              <hr className="h-[1px] bg-white grow w-full flex-1" />
              <p className="max-w-[220px] w-full text-center flex justify-center text-white text-lg">
                Spiser næringssrikt & forstår betydningen av kalorier
              </p>
              <hr className="h-[1px] bg-white grow w-full flex-1" />
            </div>
          </div>
          <div className="keen-slider__slide rounded-[30px] number-slide-3 relative">
            <Image
              className=""
              src="/myluck-4.JPG"
              alt="MyLuck 4"
              width={800}
              height={1000}
            />
            <div className="absolute bottom-14 flex items-center w-full font-serif space-x-1">
              <hr className="h-[1px] bg-white grow w-full flex-1" />
              <p className="max-w-[180px] w-full text-center flex justify-center text-white text-lg">
                Jeg mediterer & har gode vaner{" "}
              </p>
              <hr className="h-[1px] bg-white grow w-full flex-1" />
            </div>
          </div>
          <div className="keen-slider__slide rounded-[30px] number-slide-4 relative">
            <Image
              className=""
              src="/myluck-5.JPG"
              alt="MyLuck 5"
              width={800}
              height={1000}
            />
            <div className="absolute bottom-[43px] lg:bottom-12 flex items-center w-full font-serif space-x-2 pr-12">
              <hr className="h-[1px] bg-white w-[48px]" />
              <Button
                className="border-pink-intense bg-[#FBCBDD]/20 text-[#FBCBDD]"
                fullWidth
              >
                <Link href={PAYMENT_LINK}> Vil du også være heldig?</Link>
              </Button>
            </div>
          </div>
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
              currentSlide === instanceRef.current.track.details.slides.length
            }
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      )}
      {loaded && instanceRef.current && (
        <div className="flex space-x-1 justify-center">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
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
