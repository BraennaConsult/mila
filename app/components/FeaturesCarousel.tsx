"use client";

import { Button } from "@/app/components/Button";
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
        slides: { perView: 1.2 },
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

  console.log(currentSlide);

  return (
    <div className="font-sans">
      <div className="">
        <div ref={ref} className="keen-slider mb-8 ">
          <div
            className={cn(
              "keen-slider__slide number-slide-0 rounded-project relative border border-light-grey hover:border-mid-grey text-white h-full",
              currentSlide === 0 && "mx-4 lg:ml-4 lg:mr-0",
              currentSlide === 6 && "mr-[-32px] lg:mr-[-48px]"
            )}
          >
            <AspectRatio
              ratio={364 / 478}
              className="py-8 lg:pt-14 pb-6 px-6 flex flex-col justify-between h-full"
            >
              <div className="flex flex-col space-y-4 lg:space-y-6">
                <h3 className="text-[20px] font-semibold font-sans">
                  Jeg støtter og <br /> heier på deg <br /> gjennom <br /> hele
                  reisen!
                </h3>
                <p className="text-md lg:text-[20px] font-light text-balance">
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
                className="object-cover absolute z-[-1] object-left-top h-full w-full scale-[110%]"
              />
            </AspectRatio>
          </div>
          <div
            className={cn(
              "keen-slider__slide number-slide-1 rounded-project relative border border-mid-grey hover:border-mid-grey bg-white text-black",
              currentSlide === 1 && "mx-4 lg:mx-0"
            )}
          >
            <AspectRatio ratio={364 / 478} className="flex flex-col">
              <div className="flex flex-col space-y-3 lg:space-y-6 px-6 py-8 lg:pt-14 pb-4 lg:pb-14">
                <h3 className="text-[20px] font-semibold font-sans text-pretty">
                  Du vet alltid hva du skal gjøre
                </h3>
                <p className="text-md lg:text-[20px] font-light text-balance">
                  12 ukers treningsprogram, 100+ videoer med steg for steg
                  intruks for hver enkelt øvelse
                </p>
              </div>
              <div className="space-y-1 lg:space-y-3">
                <Marquee className="flex">
                  <div className="w-[100px] lg:w-[182px] h-[50px] lg:h-[82px] mr-1 lg:mr-3 relative">
                    <Image
                      src="/marquee-top-1.png"
                      fill
                      className="object-cover absolute"
                      alt="video screenshot"
                    />
                  </div>
                  <div className="w-[100px] lg:w-[182px] h-[50px] lg:h-[82px] mr-1 lg:mr-3 relative">
                    <Image
                      src="/marquee-top-2.png"
                      fill
                      className="object-cover absolute"
                      alt="video screenshot"
                    />
                  </div>
                  <div className="w-[100px] lg:w-[182px] h-[50px] lg:h-[82px] mr-1 lg:mr-3 relative">
                    <Image
                      src="/maruqee-top-3.png"
                      fill
                      className="object-cover absolute"
                      alt="video screenshot"
                    />
                  </div>
                </Marquee>
                <Marquee delay={1}>
                  <div className="w-[100px] lg:w-[182px] h-[50px] lg:h-[82px] mr-1 lg:mr-3 relative">
                    <Image
                      src="/marquee-bottom-1.png"
                      fill
                      className="object-cover absolute"
                      alt="video screenshot"
                    />
                  </div>
                  <div className="w-[100px] lg:w-[182px] h-[50px] lg:h-[82px] mr-1 lg:mr-3 relative">
                    <Image
                      src="/marquee-bottom-2.png"
                      fill
                      className="object-cover absolute"
                      alt="video screenshot"
                    />
                  </div>
                  <div className="w-[100px] lg:w-[182px] h-[50px] lg:h-[82px] mr-1 lg:mr-3 relative">
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
          <div
            className={cn(
              "keen-slider__slide number-slide-2 rounded-project relative border border-[#DEF7FF] hover:border-mid-grey bg-[#DEF7FF] text-black",
              currentSlide === 2 && "mx-4 lg:mx-0"
            )}
          >
            <AspectRatio
              ratio={364 / 478}
              className="py-8 lg:pt-14 pb-6 px-6 flex flex-col justify-between"
            >
              <div className="flex flex-col space-y-3 lg:space-y-6">
                <h3 className="text-[20px] font-semibold font-sans text-pretty">
                  Du vet hva du skal spise for å lykkes
                </h3>
                <p className="text-md lg:text-[20px] font-light">
                  Smakfulle og enkle oppskrifter som du faktisk gleder deg over
                  å kunne spise!
                </p>
                <div className="absolute bottom-[26px] right-6">
                  <JoinButton variant="ghost-black" />
                </div>
              </div>
              <Image
                className="absolute bottom-0 w-2/5 z-[-1]"
                width={400}
                height={800}
                src="/nutrition-mockup.png"
                alt="nutrition app mockup"
              />
            </AspectRatio>
          </div>
          <div
            className={cn(
              "keen-slider__slide number-slide-3 rounded-project relative border border-[#FEE9F1] hover:border-mid-grey bg-[#FEE9F1] text-black",
              currentSlide === 3 && "mx-4 lg:mx-0"
            )}
          >
            <AspectRatio
              ratio={364 / 478}
              className="py-8 lg:pt-14 pb-6 px-6 flex flex-col justify-between"
            >
              <div className="flex flex-col space-y-3 lg:space-y-6">
                <h3 className="text-[20px] font-sans font-semibold ">
                  Skreddersydd for kvinner
                </h3>
                <p className="text-md lg:text-[20px] font-light text-balance">
                  Myluck inneholder treningsuker som er tilpasset din
                  menstruasjonsperiode.
                </p>
                <div className="absolute bottom-[26px] right-6">
                  <JoinButton variant="ghost-black" />
                </div>
              </div>
              <Image
                className="absolute bottom-[26px] w-1/3 lg:w-3/5"
                width={196}
                height={395}
                src="/woman.svg"
                alt="Illustration of woman's stomach"
              />
            </AspectRatio>
          </div>
          <div
            className={cn(
              "keen-slider__slide number-slide-4 rounded-project relative border border-[#FEE9F1] hover:border-mid-grey text-black h-full",
              currentSlide === 4 && "mx-4 lg:mx-0"
            )}
          >
            <AspectRatio
              ratio={364 / 478}
              className="py-8 lg:pt-14 pb-6 px-6 flex flex-col justify-between text-white h-full"
            >
              <div className="flex flex-col space-y-3 lg:space-y-6 z-10">
                <h3 className="text-[20px] font-semibold font-sans text-pretty">
                  Hold oversikt over de gode vanene dine!
                </h3>
                <p className="text-md lg:text-[20px] font-light text-balance">
                  Å være sunn handler ikke bare om å trene – logg alle de sunne
                  vanene dine i appen for balansert helse!
                </p>
                <div className="absolute bottom-[26px] right-6">
                  <JoinButton variant="ghost-white" />
                </div>
              </div>
              <div className="absolute w-full h-full bg-gradient-to-b from-black to-transparent top-0 left-0 opacity-50 z-1" />
              <Image
                className="absolute object-cover z-[-1] h-full"
                fill
                src="/water.jpg"
                alt="Mila in the ocean"
              />
            </AspectRatio>
          </div>
          <div
            className={cn(
              "keen-slider__slide number-slide-5 rounded-project relative border border-mid-grey hover:border-mid-grey bg-white text-black",
              currentSlide === 5 && "mx-4 lg:mx-0"
            )}
          >
            <AspectRatio
              ratio={364 / 478}
              className="py-8 lg:pt-14 pb-6 mx-6 flex flex-col justify-between"
            >
              <div className="flex flex-col space-y-3 lg:space-y-6">
                <h3 className="text-[20px] font-semibold font-sans">
                  Du er ikke alene!
                </h3>
                <p className="text-md lg:text-[20px] font-light text-balance">
                  Bli med i en eksklusiv gruppe med likesinnede kvinner som har
                  de samme målene – vi heier på hverandre!
                </p>
                <div className="absolute bottom-[26px] right-0">
                  <JoinButton variant="pink" />
                </div>
              </div>
              <Image
                className="absolute bottom-6 w-full left-0 z-[-1]"
                width={400}
                height={250}
                src="/network.jpg"
                alt="Illustration of network of women"
              />
            </AspectRatio>
          </div>
          <div
            className={cn(
              "keen-slider__slide number-slide-6 rounded-project relative border border-pink-mid hover:border-mid-grey text-black bg-pink-mid h-full",
              currentSlide === 6 && "mx-4 lg:ml-0 lg:mr-4"
            )}
          >
            <AspectRatio
              ratio={364 / 478}
              className="py-8 lg:pt-14 pb-6 px-6 flex flex-col justify-between h-full"
            >
              <div className="flex flex-col space-y-6 lg:space-y-10">
                <h3 className="text-[28px] lg:text-xl font-serif max-w-[150px] lg:max-w-[200px]">
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
        <div className="hidden lg:flex lg:absolute lg:right-0 space-x-2 items-center justify-end pr-8">
          <button
            className="rounded-full p-1 hover:bg-pink-light"
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
          {Array.from(
            { length: instanceRef.current.track.details.slides.length },
            (_, idx) => (
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
            )
          )}
        </div>
      )}
    </div>
  );
}
