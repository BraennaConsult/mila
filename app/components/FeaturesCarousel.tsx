"use client";

import { Button } from "@/app/components/Button";
import { FeatureCard } from "@/app/components/FeatureCard";
import { JoinButton } from "@/app/components/JoinButton";
import { cn } from "@/app/utils";
import { PAYMENT_LINK } from "@/constants";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Marquee from "react-fast-marquee";

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
  // carousel-center relative

  return (
    <div>
      <div className="">
        <div ref={ref} className="keen-slider pl-4 mb-8">
          <div className="keen-slider__slide number-slide-0 rounded-project relative border border-light-grey hover:border-mid-grey text-white">
            <AspectRatio
              ratio={364 / 478}
              className="px-6 py-14 flex flex-col justify-between"
            >
              <div className="flex flex-col space-y-6">
                <h3 className="text-[20px] font-semibold font-sans">
                  Jeg støtter og heier <br /> på deg gjennom <br /> hele reisen!
                </h3>
                <p className="text-[20px] font-light text-balance">
                  Ukentlig sjekk for <br />
                  motivasjon og <br /> veiledning!
                </p>
                <div className="flex">
                  <JoinButton variant="white" />
                </div>
              </div>
              <Image
                fill
                src="/myluck-5.JPG"
                alt="alt"
                className="object-cover absolute z-[-1] object-left-top scale-[130%]"
              />
            </AspectRatio>
          </div>
          <div className="keen-slider__slide number-slide-1 rounded-project relative border border-mid-grey hover:border-mid-grey bg-white text-black">
            <AspectRatio ratio={364 / 478} className="flex flex-col">
              <div className="flex flex-col space-y-6 px-6 py-14">
                <h3 className="text-[20px] font-semibold font-sans">
                  Du vet alltid hva du skal gjøre
                </h3>
                <p className="text-[20px] font-light text-balance">
                  12 ukers treningsprogram, 100+ videoer med steg for steg
                  intruks for hver enkelt øvelse
                </p>
              </div>
              <div className="space-y-3">
                <Marquee className="flex">
                  <div className="w-[182px] h-[82px] mr-3 relative">
                    <Image
                      src="/marquee-top-1.png"
                      fill
                      className="object-cover absolute"
                      alt="video screenshot"
                    />
                  </div>
                  <div className="w-[182px] h-[82px] mr-3 relative">
                    <Image
                      src="/marquee-top-2.png"
                      fill
                      className="object-cover absolute"
                      alt="video screenshot"
                    />
                  </div>
                  <div className="w-[182px] h-[82px] mr-3 relative">
                    <Image
                      src="/maruqee-top-3.png"
                      fill
                      className="object-cover absolute"
                      alt="video screenshot"
                    />
                  </div>
                </Marquee>
                <Marquee delay={1}>
                  <div className="w-[182px] h-[82px] mr-3 relative">
                    <Image
                      src="/marquee-bottom-1.png"
                      fill
                      className="object-cover absolute"
                      alt="video screenshot"
                    />
                  </div>
                  <div className="w-[182px] h-[82px] mr-3 relative">
                    <Image
                      src="/marquee-bottom-2.png"
                      fill
                      className="object-cover absolute"
                      alt="video screenshot"
                    />
                  </div>
                  <div className="w-[182px] h-[82px] mr-3 relative">
                    <Image
                      src="/marquee-bottom-3.png"
                      fill
                      className="object-cover absolute"
                      alt="video screenshot"
                    />
                  </div>
                </Marquee>
              </div>
              <div className="absolute bottom-[26px] right-6">
                <JoinButton variant="ghost-black" />
              </div>
            </AspectRatio>
          </div>
          <div className="keen-slider__slide number-slide-2 rounded-project relative border border-[#DEF7FF] hover:border-mid-grey bg-[#DEF7FF] text-black">
            <AspectRatio
              ratio={364 / 478}
              className="px-6 py-14 flex flex-col justify-between"
            >
              <div className="flex flex-col space-y-6">
                <h3 className="text-[20px] font-semibold font-sans">
                  Det vet hva du skal spise for å lykkes
                </h3>
                <p className="text-[20px] font-light text-balance">
                  Smakfulle og enkle oppskrifter som du faktisk gleder deg over
                  å kunne spise!
                </p>
                <div className="absolute bottom-[26px] right-6">
                  <JoinButton variant="ghost-black" />
                </div>
              </div>
              <Image
                className="absolute bottom-0 w-1/2"
                width={400}
                height={800}
                src="/nutrition-mockup.png"
                alt="nutrition app mockup"
              />
            </AspectRatio>
          </div>
          <div className="keen-slider__slide number-slide-3 rounded-project relative border border-[#FEE9F1] hover:border-mid-grey bg-[#FEE9F1] text-black">
            <AspectRatio
              ratio={364 / 478}
              className="px-6 py-14 flex flex-col justify-between"
            >
              <div className="flex flex-col space-y-6">
                <h3 className="text-[20px] font-semibold font-sans">
                  Skreddersydd for kvinner
                </h3>
                <p className="text-[20px] font-light text-balance">
                  Myluck inneholder treningsuker som er tilpasset din
                  menstruasjonsperiode.
                </p>
                <div className="absolute bottom-[26px] right-6">
                  <JoinButton variant="ghost-black" />
                </div>
              </div>
              <Image
                className="absolute bottom-[26px]"
                width={196}
                height={395}
                src="/woman.svg"
                alt="Illustration of woman's stomach"
              />
            </AspectRatio>
          </div>
          <div className="keen-slider__slide number-slide-4 rounded-project relative border border-[#FEE9F1] hover:border-mid-grey bg-[#FEE9F1] text-black">
            <AspectRatio
              ratio={364 / 478}
              className="px-6 py-14 flex flex-col justify-between"
            >
              <div className="flex flex-col space-y-6">
                <h3 className="text-[20px] font-semibold font-sans">
                  Hold oversikt over de gode vanene dine!
                </h3>
                <p className="text-[20px] font-light text-balance">
                  Å være sunn handler ikke bare om å trene – logg alle de sunne
                  vanene dine i appen for balansert helse!
                </p>
                <div className="absolute bottom-[26px] right-6">
                  <JoinButton variant="ghost-white" />
                </div>
              </div>
              <Image
                className="absolute object-cover z-[-1]"
                fill
                src="/myluck-1.JPG"
                alt="Mila in the ocean"
              />
            </AspectRatio>
          </div>
          <div className="keen-slider__slide number-slide-4 rounded-project relative border border-mid-grey hover:border-mid-grey bg-white text-black">
            <AspectRatio
              ratio={364 / 478}
              className="px-6 py-14 flex flex-col justify-between"
            >
              <div className="flex flex-col space-y-6">
                <h3 className="text-[20px] font-semibold font-sans">
                  Du er ikke alene!
                </h3>
                <p className="text-[20px] font-light text-balance">
                  Bli med i en eksklusiv gruppe med likesinnede kvinner som har
                  de samme målene – vi heier på hverandre!
                </p>
                <div className="absolute bottom-[26px] right-6">
                  <JoinButton variant="pink" />
                </div>
              </div>
              <Image
                className="absolute bottom-0 w-full left-0 z-[-1]"
                width={400}
                height={250}
                src="/network.jpg"
                alt="Illustration of network of women"
              />
            </AspectRatio>
          </div>
          <div className="keen-slider__slide number-slide-6 rounded-project relative border border-pink-mid hover:border-mid-grey text-black bg-pink-mid">
            <AspectRatio
              ratio={364 / 478}
              className="px-6 py-14 flex flex-col justify-between"
            >
              <div className="flex flex-col space-y-6">
                <h3 className="text-[28px] leading-tight font-serif max-w-[200px]">
                  Bygg din drømmekropp slik som jeg gjorde - med å være heldig!
                </h3>
                <div>
                  <Button variant="white">
                    <Link href={PAYMENT_LINK}>Bli med nå!</Link>
                  </Button>
                </div>
              </div>
              <Image
                className="object-cover z-[-1]"
                fill
                src="/fancy.png"
                alt="Model photo of Mila"
              />
            </AspectRatio>
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
