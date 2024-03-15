import Image from "next/image";
import { Card } from "../components/Card";
import { Section } from "../components/Section";

interface Props {
  className?: string;
}

export function MarathonBenefits({ className }: Props) {
  return (
    <Section className="py-12 flex justify-center items-center">
      <Card className="max-w-[1200px] mx-auto flex flex-col lg:flex-row space-x-0 lg:space-x-12">
        <div className="flex items-center justify-center">
          <h2 className="text-[22px] text-black/80 text-center font-sans font-medium leading-7 mb-6">
            This marathon is for you <br />
            if you struggle with
          </h2>
        </div>
        <div>
          <BenefitPerkRow data={benefitPerkData.row1} />
          <BenefitPerkRow data={benefitPerkData.row2} />
          <BenefitPerkRow data={benefitPerkData.row3} />
          <BenefitPerkRow data={benefitPerkData.row4} />
        </div>
      </Card>
    </Section>
  );
}

function BenefitPerkRow({
  data,
}: {
  data: { src: string; alt: string; text: string; color: string }[];
}) {
  return (
    <div className="flex justify-center space-x-0 lg:space-x-8 space-y-0 lg:space-y-2">
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
  return (
    <div className="rounded-[24px] shadow-brand  p-4 flex flex-col items-center gap-y-2">
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
