import Image from "next/image";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { ProductPageRadioButton } from "../components/RadioButton";
import { Section } from "../components/Section";

export function ProductOptions() {
  return (
    <Section className="flex py-8 w-full">
      <Container className="w-full space-y-2 lg:flex lg:justify-center lg:space-y-0 lg:gap-x-5">
        <ProductionOption
          title="Premium"
          price="kr 390"
          total="kr 2340"
          recommended={true}
        />
        <ProductionOption title="Inner circle" price="kr 990" total="kr 5940" />
      </Container>
    </Section>
  );
}

interface ProductPros {
  title: string;
  price: string;
  total: string;
  recommended?: boolean;
}

function ProductionOption({
  title,
  price,
  total,
  recommended = false,
}: ProductPros) {
  return (
    <Card className="w-full lg:max-w-[375px] justify-between flex flex-row space-x-0 lg:space-x-12 lg:py-10 lg:px-6 py-6 overflow-hidden relative">
      <div className="z-10">
        <h3 className="font-sans text-[20px] text-black/60">{title}</h3>
        <div className="flex items-baseline">
          <p className="font-serif text-[30px]">{price}</p>
          <p className="font-serif text-[14px] ml-1 text-black/70">per uke</p>
        </div>
        <p className="font-serif text-[14px] text-black/70">
          Totalt {total} for 6 uker
        </p>
      </div>
      <div className="flex z-10">
        {recommended && (
          <div>
            <div className="bg-pink-primary inline-block px-[14px] py-[3px] rounded-[100px]">
              <p className="font-sans text-black/80 text-[12px]">
                Mest populær
              </p>
            </div>
          </div>
        )}
        <ProductPageRadioButton option={title} />
      </div>
      {recommended && (
        <div className="absolute inset-0 z-0">
          <Image
            src={"/bg-product-option.svg"}
            alt="cta background"
            width={300}
            height={75}
          />
        </div>
      )}
    </Card>
  );
}
