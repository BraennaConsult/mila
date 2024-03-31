import Image from "next/image";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { Container } from "../components/Container";

interface Props {
  className?: string;
}

export function MarathonBenefits({ className }: Props) {
  return (
    <Section className="py-9 flex justify-center items-center">
      <Container className="lg:w-full px-0">
        <Card className="lg:w-full lg:justify-center flex flex-col lg:flex-col space-x-0 lg:space-x-12 lg:py-20">
          <div className="flex items-center justify-center lg:mb-12">
            <h2 className="text-[22px] text-black/80 text-center font-sans font-medium leading-7 mb-6 lg:text-xl">
              Dette maratonet er for deg
              <br />
              som sliter med
            </h2>
          </div>
          <div className="lg:space-y-4">
            <BenefitPerkRow data={benefitPerkData.row1} />
            <BenefitPerkRow data={benefitPerkData.row2} />
            <BenefitPerkRow data={benefitPerkData.row3} />
            <BenefitPerkRow data={benefitPerkData.row4} />
          </div>
        </Card>
      </Container>
    </Section>
  );
}

function BenefitPerkRow({
  data,
}: {
  data: { src: string; alt: string; text: string; color: string }[];
}) {
  return (
    <div className="flex justify-center space-x-0 lg:gap-x-4 lg:max-w-[720px] lg:mx-auto">
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
    <div className="rounded-[24px] shadow-brand  p-4 flex flex-col items-center gap-y-2 lg:grow ">
      <Image src={src} alt={alt} width={29.16} height={28} />
      <p style={{ color: color }} className={`text-[14px] text-center`}>
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
      text: "Hektisk livsstil",
      color: "#323232",
    },
    {
      src: "/marathon-benefits/no-motivation.svg",
      alt: "No motivation",
      text: "Ingen motivasjon",
      color: "#FEA2B0",
    },
  ],
  row2: [
    {
      src: "/marathon-benefits/overweight.svg",
      alt: "Overweight",
      text: "Overvektig",
      color: "#FC71C5",
    },
    {
      src: "/marathon-benefits/no-energy.svg",
      alt: "No energy",
      text: "Lite energi",
      color: "#3BC439",
    },
    {
      src: "/marathon-benefits/pronounced-belly.svg",
      alt: "Pronounced belly",
      text: "Mage som stikker ut",
      color: "#C6BF29",
    },
  ],
  row3: [
    {
      src: "/marathon-benefits/backpain.svg",
      alt: "Backpain",
      text: "Ryggsmerter",
      color: "#D49F6B",
    },
    {
      src: "/marathon-benefits/lack-of-self-discipline.svg",
      alt: "Lack of self-discipline",
      text: "Manglende selvdisiplin",
      color: "#01B4B1",
    },
    {
      src: "/marathon-benefits/stress.svg",
      alt: "Stress",
      text: "Mye stress",
      color: "#21A2E3",
    },
  ],
  row4: [
    {
      src: "/marathon-benefits/nutrition-seems-complex.svg",
      alt: "Nutrition seems complex",
      text: "Sliter med ernæring",
      color: "#2BD19F",
    },
    {
      src: "/marathon-benefits/untoned-glutes.svg",
      alt: "Untoned glutes",
      text: "Utrent rumpe",
      color: "#9F73E6",
    },
  ],
};
