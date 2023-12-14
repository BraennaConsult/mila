import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import Marquee from "react-fast-marquee";

export function Testimonials() {
  return (
    <Section className="bg-light-grey">
      <Container>
        <h2 className="text-xl lg:text-2xl mb-20">Reviews</h2>
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
    <div className="rounded-[30px] bg-white p-10 w-full max-w-md mr-7 border-2 border-transparent hover:border-pink-mid">
      <div className="flex justify-between items-center mb-10">
        <span>{name}</span>
        <span>5 stars</span>
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
