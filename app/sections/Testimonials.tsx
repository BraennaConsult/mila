import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import testimonials from "@/data/testimonials";
import { StarIcon } from "@heroicons/react/24/outline";

export function Testimonials() {
  return (
    <Section className="">
      <Container>
        <h2>Hva folk sier</h2>
        <div className="columns-1 lg:columns-3 space-y-4 ">
          {testimonials.map((testimonial, i) => (
            <Card key={i} testimonial={testimonial} />
          ))}
        </div>
      </Container>
      {/* <div className="space-y-4 lg:space-y-8">
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
      </div> */}
    </Section>
  );
}

interface CardProps {
  testimonial: string;
}

function Card({ testimonial }: CardProps) {
  return (
    <div className="rounded-[30px] bg-white p-10 border-2 border-pink-mid hover:border-pink-intense shadow-sm break-inside-avoid">
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
