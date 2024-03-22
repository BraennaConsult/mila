import { Section } from "../components/Section";
import { StarIcon } from "@heroicons/react/24/outline";

export function ProductReview() {
  return (
    <Section className="py-16">
      <div className="flex justify-center items-center mb-8 ">
        <span>⭐️⭐️⭐️⭐️⭐️</span>
      </div>
      <div className="px-5 w-full text-black font-semibold text-center">
        <p>
          Jeg er virkelig evig takknemlig for at jeg fikk ta del i dette. Det er
          uten tvil den BESTE invisteringen jeg noensinne har gjort for meg
          selv.
        </p>
        <p>
          Som sagt er reisen min langt fra over, men jeg er mer motivert enn
          noensinne til å fortsette!
        </p>
        <p>Du må gjerne dele bilde så lenge ansiktet ikke er med</p>
        <p>❤️TUSEN MILLIONER TAKK IGJEN FOR ALT ❤️</p>
      </div>
    </Section>
  );
}
