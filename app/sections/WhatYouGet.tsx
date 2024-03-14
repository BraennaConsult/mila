import Image from "next/image";
import { Card } from "../components/Card";
import { Section } from "../components/Section";

interface Props {
  className?: string;
}

export function WhatYouGet({ className }: Props) {
  return (
    <Section>
      <h2 className="text-[22px] text-black/80 text-center font-medium  mb-6 lg:max-w-lg text-pretty md:mb-32 lg:mb-40 lg:text-2xl lg:text-left">
        What you get
      </h2>
      <div className="space-y-3">
        {cardData.map((data) => (
          <BenefitCard key={data.alt} data={data} />
        ))}
      </div>
    </Section>
  );
}

function BenefitCard({ data }: { data: CardDataSchema }) {
  return (
    <Card>
      <div className="flex flex-col items-center space-y-8">
        <Image src={data.src} alt={data.alt} width={245} height={382} />
        <p className="text-[20px] max-w-[245px]">{data.title}</p>
      </div>
    </Card>
  );
}

interface CardDataSchema {
  src: string;
  alt: string;
  title: string;
}

const cardData: CardDataSchema[] = [
  {
    src: "/what-you-get/pro-in-gym.png",
    alt: "What you get",
    title: "Become a pro in the gym",
  },
  {
    src: "/what-you-get/meal-plan.png",
    alt: "What you get",
    title: "Personalized meals plans for you to achieve your goals",
  },
  {
    src: "/what-you-get/instagram-group.png",
    alt: "What you get",
    title: "Instagram chat where  we get results together",
  },
  {
    src: "/what-you-get/habbit-tracker.png",
    alt: "What you get",
    title: "Follow my healthy habbits and reduce stress",
  },
];
