import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import testimonials from "@/data/testimonials";
import testimonialsWithImages from "@/data/testimonialsWithImages";
import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export function Testimonials() {
  return (
    <Section className="bg-light-grey">
      <Container>
        <h2 className="mb-10 text-center lg:text-left">Hva folk sier</h2>
        <div className="columns-1 lg:columns-3 space-y-4 ">
          {testimonialsWithImages.map((testimonial, i) => (
            <div key={i}>
              <Card
                key={i}
                testimonial={testimonial.content}
                image={testimonial.image}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

interface CardProps {
  testimonial: string;
  image?: string;
}

function Card({ testimonial, image }: CardProps) {
  return (
    <div className="rounded-[30px] bg-white p-10 border-2 border-pink-light hover:border-pink-intense shadow-sm break-inside-avoid">
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
      {image && (
        <div className="w-full mt-12">
          <Image src={image} alt="testimonial" width={291} height={331} />
        </div>
      )}
    </div>
  );
}
