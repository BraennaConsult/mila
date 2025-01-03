import { Slide } from "@/lib/types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { cn } from "../utils";
import { Button } from "./Button";

export const MediaCardAutoplay = ({
  type, // 'image' or 'video'
  src,
  alt,
  aspectRatio,
  text,
  position,
}: Slide) => {
  // Determine CSS for text position
  const positionClass = {
    top: "top-0 mt-16",
    center: "top-1/2 -translate-y-1/2",
    bottom: "bottom-0 mb-16",
  };
  return (
    <div className="keen-slider__slide rounded-[39px] relative shadow-card">
      <AspectRatio ratio={aspectRatio}>
        {type === "image" ? (
          <Image
            className="object-cover rounded-project absolute"
            src={src}
            alt={alt || ""}
            fill
          />
        ) : (
          <video
            loop
            autoPlay
            playsInline
            preload="auto"
            controls={false}
            id={src}
            // controls
            // onFocus={(e) => e.target.play()}
            style={{ transform: "translateY(-20%)" }}
            className="object-cover rounded-project absolute w-full"
          >
            <source src={src} width={200} type="video/mp4" />
            Sorry, your browser does not support embedded videos.
          </video>
        )}
        {text && position && (
          <p
            className={`absolute w-full text-center ${positionClass[position]} transform px-4 text-white text-[20px] `}
          >
            {text}
          </p>
        )}
      </AspectRatio>
    </div>
  );
};

export const MediaCard = ({
  type, // 'image' or 'video'
  src,
  alt,
  aspectRatio,
  text,
  position,
  poster,
  tint,
  cta,
}: Slide) => {
  // Determine CSS for text position
  const positionClass = {
    top: "top-0 mt-16",
    center: "top-1/2 -translate-y-1/2",
    bottom: "bottom-0 mb-16",
  };
  return (
    <div
      className={cn("keen-slider__slide rounded-[39px] relative shadow-card")}
    >
      <AspectRatio ratio={aspectRatio}>
        {type === "image" ? (
          <>
            <Image
              className={cn("object-cover rounded-project absolute")}
              src={src}
              alt={alt || ""}
              fill
            />
            {tint && (
              <div className="absolute inset-0 bg-black opacity-30 mix-blend-multiply"></div>
            )}
            {cta && (
              <div className="absolute bottom-8 left left-[20%] flex items-center justify-center">
                <Button location="hero" hasIcon>
                  Bli med på maraton
                </Button>
              </div>
            )}
          </>
        ) : (
          <video
            loop
            playsInline
            preload="auto"
            controls={true}
            id={src}
            poster={poster || undefined}
            // controls
            // onFocus={(e) => e.target.play()}
            style={{ transform: "translateY(-20%)" }}
            className="object-cover rounded-project absolute w-full"
          >
            <source src={src} width={200} type="video/mp4" />
            Sorry, your browser does not support embedded videos.
          </video>
        )}
        {text && position && (
          <p
            className={`absolute w-full text-center ${positionClass[position]} transform px-4 text-white text-[20px] `}
          >
            {text}
          </p>
        )}
      </AspectRatio>
    </div>
  );
};
