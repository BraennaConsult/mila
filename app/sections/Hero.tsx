import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";

export function Hero() {
  return (
    <div className="w-full h-[85vh] lg:h-[725px] rounded-bl-[80px] flex items-end  relative overflow-hidden aspect-[16/9]">
      <video
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        controls={false}
        id="promo-video"
        className="absolute right-0 bottom-0 min-w-full min-h-full z-[-1] rounded-bl-[80px] object-cover"
      >
        <source src="/promo.mov" type="video/mp4" />
      </video>
      <Container className="space-y-6 mb-14 w-full lg:mx-auto ml-8">
        <h1 className="text-xl lg:text-2xl text-pink-mid font-bold max-w-xs md:max-w-md ">
          Vær med å bygg din drømmekropp og skap din egen lykke
        </h1>
        <p className="text-md text-white max-w-xs md:max-w-md text-pretty">
          Over 100+ rå kvinner har nådd sine personlige mål
          Transformasjonsmaraton av @milatimaa
        </p>
        <Button hasIcon>Bli med</Button>
      </Container>
    </div>
  );
}
