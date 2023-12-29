import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import testimonials from "@/data/testimonials";
import { StarIcon } from "@heroicons/react/24/outline";
import Marquee from "react-fast-marquee";

export function Testimonials() {
  console.log(testimonials.length);

  return (
    <Section className="bg-light-grey">
      <Container>
        <h2>Reviews</h2>
      </Container>
      <div className="space-y-4 lg:space-y-8">
        <Marquee pauseOnHover>
          {testimonials.slice(0, 16)?.map((testimonial, i) => (
            <Card key={i} testimonial={testimonial} />
          ))}
        </Marquee>
        <Marquee pauseOnHover delay={0.5} className="">
          {testimonials
            .slice(17, testimonials.length)
            ?.map((testimonial, i) => (
              <Card key={i} testimonial={testimonial} />
            ))}
        </Marquee>
      </div>
    </Section>
  );
}

interface CardProps {
  testimonial: string;
}

function Card({ testimonial }: CardProps) {
  return (
    <div className="rounded-[30px] bg-white p-10 w-full max-w-md mr-7 border-2 border-transparent hover:border-pink-mid shadow-sm mb-2">
      <div className="flex justify-between items-center mb-10">
        <div className="flex space-x-[-2px]">
          <StarIcon className="w-5 h-5 fill-pink-intense text-pink-intense" />
          <StarIcon className="w-5 h-5 fill-pink-intense text-pink-intense" />
          <StarIcon className="w-5 h-5 fill-pink-intense text-pink-intense" />
          <StarIcon className="w-5 h-5 fill-pink-intense text-pink-intense" />
          <StarIcon className="w-5 h-5 fill-pink-intense text-pink-intense" />
        </div>
      </div>
      <p dangerouslySetInnerHTML={{ __html: testimonial }}></p>
    </div>
  );
}
