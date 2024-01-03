import { cn } from "@/app/utils";
import { PAYMENT_LINK } from "@/constants";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  className?: string;
  image?: {
    src: string;
    alt: string;
    imageClassName?: string;
  };
}

export function FeatureCard({ title, description, className, image }: Props) {
  return (
    <div
      className={cn(
        "px-6 py-14 flex flex-col justify-between rounded-project relative border border-light-grey hover:border-mid-grey h-[478px]",
        className
      )}
    >
      <div className="flex flex-col space-y-4">
        <h3 className="text-[20px] font-semibold font-sans">{title}</h3>
        <p className="text-[20px] font-light text-balance">{description}</p>
      </div>
      <div className="flex justify-end">
        <Link
          href={PAYMENT_LINK}
          className="border border-dark-grey rounded-full py-2 px-4 font-semibold"
        >
          Bli med
        </Link>
      </div>
      {image && (
        <Image
          fill
          className={cn("z-[-1]", image.imageClassName)}
          src={image.src}
          alt={image.alt}
        />
      )}
    </div>
  );
}
