import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { PRICE_AND_DATE } from "@/constants";

export function Hero() {
  return (
    <div className="w-full h-[85vh] lg:h-[725px] flex items-end  relative overflow-hidden aspect-[16/9]">
      <video
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        controls={false}
        id="promo-video"
        className="absolute right-0 bottom-0 min-w-full min-h-full z-[-1] object-cover"
      >
        <source src="/promo-big.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full bg-black/20 top-0 left-0 z-1 rounded-project" />
      <Container className="space-y-6 mb-14 w-full lg:mx-auto ml-8 z-20">
        <h1 className="text-xl lg:text-2xl text-pink-primary font-bold max-w-xs md:max-w-md ">
          Vær med å bygg din drømmekropp og skap din egen lykke
        </h1>
        <p className="text-md text-white max-w-xs md:max-w-md text-pretty">
          Over 100+ rå kvinner har nådd sine personlige mål.
          Transformasjonsmaraton av @milatimaa
        </p>
        <div className="flex flex-col space-y-5">
          <Button className="w-full" hasIcon>
            Bli med
          </Button>
          {/* <span className="text-white text-md">{PRICE_AND_DATE}</span> */}
        </div>
      </Container>
    </div>
  );
}
