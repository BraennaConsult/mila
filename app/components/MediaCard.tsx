import { Slide } from "@/lib/types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export const MediaCard = ({
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
    <div className="keen-slider__slide rounded-[69px] relative shadow-card">
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
            className="object-cover rounded-project absolute w-full h-full"
            src={src}
            controls
          />
        )}
        {text && position && (
          <p
            className={`absolute w-full text-center ${positionClass[position]} transform px-4 text-white text-[20px]`}
          >
            {text}
          </p>
        )}
      </AspectRatio>
    </div>
  );
};
