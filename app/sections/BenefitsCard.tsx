import Image from "next/image";
import { Card } from "../components/Card";
import { Section } from "../components/Section";

export function BenefitsCard() {
  return (
    <Section className="py-0">
      <Card className="px-8 py-9">
        <div className="space-y-7">
          <BenefitRow
            iconPath="/benefits/benefit-icon-1.svg"
            text="See visible results before summer and feel great"
          />
          <BenefitRow
            iconPath="/benefits/benefit-icon-2.svg"
            text="Boost the result with easy-to-follow meal plan"
          />
          <BenefitRow
            iconPath="/benefits/benefit-icon-3.svg"
            text="Stay motivated throughout the marathon with other likeminded women"
          />

          <Image
            src="/benefits/benefit-graph.svg"
            alt="icon"
            width={317}
            height={215}
            className="mt-1"
          />
        </div>
        <div className="mt-9">
          <h3 className="text-center font-sans text-[20px] leading-[24px] text-black/80 font-medium">
            Achive great results <br /> by May 19th
          </h3>
        </div>
      </Card>
    </Section>
  );
}

interface BenefitRowProps {
  iconPath: string;
  text: string;
}

function BenefitRow({ iconPath, text }: BenefitRowProps) {
  return (
    <div className="flex items-start">
      <Image
        src={iconPath}
        alt="icon"
        width={32}
        height={32}
        className="mt-1"
      />
      <p className="font-sans text-black/70 text-base ml-5">{text}</p>
    </div>
  );
}
