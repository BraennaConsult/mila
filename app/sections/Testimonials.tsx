import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import { StarIcon } from "@heroicons/react/24/outline";
import Marquee from "react-fast-marquee";

export function Testimonials() {
  return (
    <Section className="bg-light-grey">
      <Container>
        <h2>Reviews</h2>
      </Container>
      <Marquee pauseOnHover>
        {reviews.map((review, i) => (
          <Card key={i} {...review} />
        ))}
      </Marquee>
    </Section>
  );
}

interface CardProps {
  name: string;
  testimonial: string;
  imageUrl?: string;
}

function Card({ name, testimonial, imageUrl }: CardProps) {
  return (
    <div className="rounded-[30px] bg-white p-10 w-full max-w-md mr-7 border-2 border-transparent hover:border-pink-mid shadow-sm mb-2">
      <div className="flex justify-between items-center mb-10">
        <span>{name}</span>
        <div className="flex space-x-[-2px]">
          <StarIcon className="w-5 h-5 fill-pink-intense text-pink-intense" />
          <StarIcon className="w-5 h-5 fill-pink-intense text-pink-intense" />
          <StarIcon className="w-5 h-5 fill-pink-intense text-pink-intense" />
          <StarIcon className="w-5 h-5 fill-pink-intense text-pink-intense" />
          <StarIcon className="w-5 h-5 fill-pink-intense text-pink-intense" />
        </div>
      </div>
      <p>{testimonial}</p>
    </div>
  );
}

// 10 mock reviews
const reviews: CardProps[] = [
  {
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nunc quisque id egestas. Sed enim, amet, in id. Nunc, aliquam s",
  },
  {
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nunc quisque id egestas. Sed enim, amet, in id. Nunc, aliquam s",
  },
  {
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nunc quisque id egestas. Sed enim, amet, in id. Nunc, aliquam s",
  },
  {
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nunc quisque id egestas. Sed enim, amet, in id. Nunc, aliquam s",
  },
  {
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nunc quisque id egestas. Sed enim, amet, in id. Nunc, aliquam s",
  },
  {
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nunc quisque id egestas. Sed enim, amet, in id. Nunc, aliquam s",
  },
  {
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nunc quisque id egestas. Sed enim, amet, in id. Nunc, aliquam s",
  },
  {
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nunc quisque id egestas. Sed enim, amet, in id. Nunc, aliquam s",
  },
  {
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nunc quisque id egestas. Sed enim, amet, in id. Nunc, aliquam s",
  },
];
