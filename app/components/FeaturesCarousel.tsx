import { Button } from "@/app/components/Button";
import { JoinButton } from "@/app/components/JoinButton";
import { useIsDesktop } from "@/app/useIsDesktop";
import { cn, getLink } from "@/app/utils";
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
              size: 0.5,
            };
          });
          return slideConfig;
        },
      },
      "(min-width: 1200px)": {
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
    <div className="font-sans">
      <div ref={ref} className="keen-slider mb-8">
        <div className="keen-slider__slide number-slide-0 rounded-project relative border border-light-grey  text-white h-full">
          <AspectRatio
            ratio={aspectRatio}
            className="py-8 pb-6 px-6 flex flex-col justify-between h-full"
          >
            <div className="flex flex-col space-y-4 lg:space-y-6">
              <h3 className="text-[20px] font-semibold font-sans">
                Jeg støtter og <br className="lg:hidden" /> heier{" "}
                <br className="hidden lg:block" /> på deg{" "}
                <br className="lg:hidden" /> gjennom{" "}
                <br className="hidden lg:block" /> hele{" "}
                <br className="lg:hidden" /> reisen
              </h3>
              <p className="text-[20px] font-light text-balance">
                Ukentlig sjekk <br className="lg:hidden" /> for{" "}
                <br className="hidden lg:block" />
                motivasjon <br className="lg:hidden" /> og{" "}
                <br className="hidden lg:block" /> veiledning
              </p>
              <div className="absolute bottom-[26px] right-6">
                <JoinButton variant="white" />
              </div>
            </div>
            <Image
              fill
              src="/myluck-5.JPG"
              alt="alt"
              className="object-cover object-left-top absolute z-[-1] h-full w-full scale-[120%] rounded-project"
            />
          </AspectRatio>
        </div>
        <div
          className={cn(
            "keen-slider__slide number-slide-1 rounded-project relative border border-mid-grey/25  bg-white text-black"
            // currentSlide === 1 && "mx-4 lg:mx-0"
          )}
        >
          <AspectRatio ratio={aspectRatio} className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-6 px-6 pt-8 lg:pb-2">
              <h3 className="text-[20px] font-semibold font-sans text-pretty">
                Du vet alltid hva du skal gjøre
              </h3>
              <p className="text-[20px] font-light text-balance">
                12 ukers treningsprogram, 100+ videoer med steg for steg intruks
                for hver enkelt øvelse
              </p>
            </div>
            <div className="space-y-3">
              <Marquee className="flex" speed={25}>
                <div className="w-[182px] h-[82px] mr-1 lg:mr-3 relative">
                  <Image
                    src="/marquee-top-1.png"
                    fill
                    className="object-cover absolute"
                    alt="video screenshot"
                  />
                </div>
                <div className="w-[182px] h-[82px] mr-1 lg:mr-3 relative">
                  <Image
                    src="/marquee-top-2.png"
                    fill
                    className="object-cover absolute"
                    alt="video screenshot"
                  />
                </div>
                <div className="w-[182px] h-[82px] mr-1 lg:mr-3 relative">
                  <Image
                    src="/maruqee-top-3.png"
                    fill
                    className="object-cover absolute"
                    alt="video screenshot"
                  />
                </div>
              </Marquee>
              <Marquee direction="right" speed={25}>
                <div className="w-[182px] h-[82px] mr-1 lg:mr-3 relative">
                  <Image
                    src="/marquee-bottom-1.png"
                    fill
                    className="object-cover absolute"
                    alt="video screenshot"
                  />
                </div>
                <div className="w-[182px] h-[82px] mr-1 lg:mr-3 relative">
                  <Image
                    src="/marquee-bottom-2.png"
                    fill
                    className="object-cover absolute"
                    alt="video screenshot"
                  />
                </div>
                <div className="w-[182px] h-[82px] mr-1 lg:mr-3 relative">
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
            "keen-slider__slide number-slide-2 rounded-project relative border border-[#DEF7FF]  bg-[#DEF7FF] text-black"
            // currentSlide === 2 && "mx-4 lg:mx-0"
          )}
        >
          <AspectRatio
            ratio={aspectRatio}
            className="py-8 pb-6 px-6 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-3 lg:space-y-6">
              <h3 className="text-[20px] font-semibold font-sans text-balance">
                Du vet hva du skal spise for å lykkes
              </h3>
              <p className="text-[20px] font-light text-pretty max-w-[90%] lg:max-w-[80%]">
                Smakfulle og enkle oppskrifter som du faktisk gleder deg over å
                kunne spise
              </p>
              <div className="absolute bottom-[26px] right-6">
                <JoinButton variant="ghost-black" />
              </div>
            </div>
            <Image
              className="absolute lg:bottom-0 bottom-[-10px] w-1/2 lg:w-2/5 z-[-1]"
              width={400}
              height={800}
              src="/nutrition-mockup.png"
              alt="nutrition app mockup"
            />
          </AspectRatio>
        </div>
        <div
          className={cn(
            "keen-slider__slide number-slide-3 rounded-project relative border border-[#FEE9F1]  bg-[#FEE9F1] text-black"
            // currentSlide === 3 && "mx-4 lg:mx-0"
          )}
        >
          <AspectRatio
            ratio={aspectRatio}
            className="py-8 pb-6 px-6 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-3 lg:space-y-6">
              <h3 className="text-[20px] font-sans font-semibold ">
                Skreddersydd for kvinner
              </h3>
              <p className="text-[20px] font-light text-pretty max-w-[90%] lg:max-w-[80%]">
                Myluck inneholder treningsuker som er tilpasset din
                menstruasjonsperiode.
              </p>
              <div className="absolute bottom-[26px] right-6">
                <JoinButton variant="ghost-black" />
              </div>
            </div>
            <Image
              className="absolute bottom-[26px] w-1/2 lg:w-2/5"
              width={196}
              height={395}
              src="/woman.svg"
              alt="Illustration of woman's stomach"
            />
          </AspectRatio>
        </div>
        <div
          className={cn(
            "keen-slider__slide number-slide-4 rounded-project relative text-black h-full w-full"
            // currentSlide === 4 && "mx-4 lg:mx-0"
          )}
        >
          <AspectRatio
            ratio={aspectRatio}
            className="py-8 pb-6 px-6 flex flex-col justify-between text-white h-full w-full"
          >
            <div className="flex flex-col space-y-3 lg:space-y-6 z-10">
              <h3 className="text-[20px] font-semibold font-sans text-balance">
                Hold oversikt over de gode vanene dine
              </h3>
              <p className="text-[20px] font-light text-balance">
                Å være sunn handler ikke bare om å trene – logg alle de sunne
                vanene dine i appen for balansert helse
              </p>
              <div className="absolute bottom-[26px] right-6">
                <JoinButton variant="ghost-white" />
              </div>
            </div>
            <div className="absolute w-full h-full bg-gradient-to-b from-black to-transparent top-0 left-0 opacity-50 z-1 rounded-project" />
            <Image
              className="absolute object-cover z-[-1] h-full w-full rounded-project top-0 left-0"
              fill
              src="/water.jpg"
              alt="Mila in the ocean"
            />
          </AspectRatio>
        </div>
        <div
          className={cn(
            "keen-slider__slide number-slide-5 rounded-project relative border border-mid-grey/25  bg-white text-black"
            // currentSlide === 5 && "mx-4 lg:mx-0"
          )}
        >
          <AspectRatio
            ratio={aspectRatio}
            className="py-8 pb-6 px-6 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-3 lg:space-y-6">
              <h3 className="text-[20px] font-semibold font-sans">
                Du er ikke alene
              </h3>
              <p className="text-[20px] font-light text-balance">
                Bli med i en eksklusiv gruppe med likesinnede kvinner som har de
                samme målene – vi heier på hverandre
              </p>
              <div className="absolute bottom-[26px] right-6">
                <JoinButton variant="pink" />
              </div>
            </div>
            <Image
              className="absolute bottom-6 w-full left-0 z-[-1] px-6"
              width={400}
              height={250}
              src="/network.jpg"
              alt="Illustration of network of women"
            />
          </AspectRatio>
        </div>
        <div
          className={cn(
            "keen-slider__slide number-slide-6 rounded-project relative border border-pink-mid  text-black bg-[#F5BECE] h-full"
            // currentSlide === 6 && "mx-4 lg:ml-0 lg:mr-4"
          )}
        >
          <AspectRatio
            ratio={aspectRatio}
            className="py-8 pb-6 px-6 flex flex-col justify-between h-full"
          >
            <div className="flex flex-col space-y-6 lg:space-y-10">
              <h3 className="text-lg lg:text-xl leading-normal font-serif max-w-[150px] lg:max-w-[200px]">
                Få din drømmekropp med flaks
              </h3>
              <div>
                <Button variant="white">
                  <Link href={getLink()}>Bli med nå</Link>
                </Button>
              </div>
            </div>
            <Image
              className="object-cover object-top z-[-1]"
              fill
              src="/fancy.png"
              alt="Model photo of Mila"
            />
          </AspectRatio>
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
    </div>
  );
}
