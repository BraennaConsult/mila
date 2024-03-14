import Image from "next/image";
import { Card } from "../components/Card";
import { Section } from "../components/Section";

interface Props {
  className?: string;
}

export function WhatYouGet({ className }: Props) {
  return (
    <Section>
      <h2 className="text-[22px] text-black/80 text-center font-medium  mb-6">
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

function BenefitPerkRow({
  data,
}: {
  data: { src: string; alt: string; text: string; color: string }[];
}) {
  return (
    <div className="flex justify-center">
      {data.map((perk) => (
        <BenefitPerk
          key={perk.alt}
          src={perk.src}
          alt={perk.alt}
          text={perk.text}
          color={perk.color}
        />
      ))}
    </div>
  );
}

function BenefitPerk({
  src,
  alt,
  text,
  color,
}: {
  src: string;
  alt: string;
  text: string;
  color: string;
}) {
  console.log(color);
  return (
    <div className="rounded-[24px] shadow-md  p-4 flex flex-col items-center gap-y-2">
      <Image src={src} alt={alt} width={29.16} height={28} />
      <p style={{ color: color }} className={`text-[14px]`}>
        {text}
      </p>
    </div>
  );
}

const benefitPerkData = {
  row1: [
    {
      src: "/marathon-benefits/hectic-lifestyle.svg",
      alt: "Hectic lifestyle",
      text: "Hectic lifestyle",
      color: "#323232",
    },
    {
      src: "/marathon-benefits/no-motivation.svg",
      alt: "No motivation",
      text: "No motivation",
      color: "#FEA2B0",
    },
  ],
  row2: [
    {
      src: "/marathon-benefits/overweight.svg",
      alt: "Overweight",
      text: "Overweight",
      color: "#FC71C5",
    },
    {
      src: "/marathon-benefits/no-energy.svg",
      alt: "No energy",
      text: "No energy",
      color: "#3BC439",
    },
    {
      src: "/marathon-benefits/pronounced-belly.svg",
      alt: "Pronounced belly",
      text: "Pronounced belly",
      color: "#C6BF29",
    },
  ],
  row3: [
    {
      src: "/marathon-benefits/backpain.svg",
      alt: "Backpain",
      text: "Backpain",
      color: "#D49F6B",
    },
    {
      src: "/marathon-benefits/lack-of-self-discipline.svg",
      alt: "Lack of self-discipline",
      text: "Lack of self-discipline",
      color: "#01B4B1",
    },
    {
      src: "/marathon-benefits/stress.svg",
      alt: "Stress",
      text: "Stress",
      color: "#21A2E3",
    },
  ],
  row4: [
    {
      src: "/marathon-benefits/nutrition-seems-complex.svg",
      alt: "Nutrition seems complex",
      text: "Nutrition seems complex",
      color: "#2BD19F",
    },
    {
      src: "/marathon-benefits/untoned-glutes.svg",
      alt: "Untoned glutes",
      text: "Untoned glutes",
      color: "#9F73E6",
    },
  ],
};
