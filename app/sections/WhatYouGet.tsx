import Image from "next/image";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { Container } from "../components/Container";

interface Props {
  className?: string;
}

export function WhatYouGet({ className }: Props) {
  return (
    <Section>
      <Container>
        <h2 className="lg:max-w-l text-pretty mb-[40px] md:mb-32 text-[28px] lg:text-2xl text-black/80 text-center font-sans ">
          What you get
        </h2>
        <div className="space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2">
          {cardData.map((data) => (
            <BenefitCard key={data.alt} data={data} />
          ))}
          <BenefitCardWintPills />
        </div>
      </Container>
    </Section>
  );
}

function BenefitCard({ data }: { data: CardDataSchema }) {
  return (
    <Card>
      <div className="flex flex-col items-center space-y-8">
        <Image src={data.src} alt={data.alt} width={245} height={382} />
        <p className="text-[20px] max-w-[245px] text-center">{data.title}</p>
      </div>
    </Card>
  );
}

function BenefitCardWintPills() {
  return (
    <Card className="overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/radiant-background.svg"}
          alt="cta background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-center space-y-2 z-10 relative">
        {benefitPerkData.map((data) => (
          <BenefitPill key={data.title} title={data.title} />
        ))}
      </div>
      <div className="flex flex-col items-center mt-12 z-10 relative">
        <p className="text-[20px] max-w-[245px] text-center text-black/80 font-sans leading-6">
          Proven results from 100+ women
        </p>
      </div>
    </Card>
  );
}

function BenefitPill({ title }: { title: string }) {
  return (
    <div className="shadow-brand px-2 py-2 rounded-[24px] flex items-center bg-white">
      <Image
        src={"/radiant-checkmark.svg"}
        alt={"Checkmark"}
        width={34}
        height={34}
      />
      <p className="text-[14px] mx-3">{title}</p>
    </div>
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

const benefitPerkData = [
  {
    title: "Toned stomach",
  },
  {
    title: "Lower body fat",
  },
  {
    title: "Reduced swelling & pain",
  },
  {
    title: "Shape up glutes",
  },
  {
    title: "Increased musle mass & strength",
  },
  {
    title: "More energy",
  },
];
