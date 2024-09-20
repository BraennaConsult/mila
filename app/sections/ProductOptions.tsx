import { cn } from "@/app/utils";
import Image from "next/image";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import CustomRadioButton, {
  ProductPageRadioButton,
} from "../components/RadioButton";
import { Section } from "../components/Section";

interface Props {
  className?: string;
  page?: string;
}

export function ProductOptions({ className, page }: Props) {
  return (
    <Container
      className={
        "w-full space-y-2 lg:flex lg:justify-center lg:space-y-0 lg:gap-x-5"
      }
    >
      <ProductionOption
        title={"Premium"}
        total="kr 2 490"
        name={`premium${page ? `-${page}` : ""}`}
        recommended
        page={page}
      />
      <ProductionOption
        title={"Inner circle"}
        total="kr 5 990"
        name={`inner-circle${page ? `-${page}` : ""}`}
        page={page}
      />
    </Container>
  );
}

interface ProductPros {
  title: string;
  // price: string;
  total: string;
  name: string;
  recommended?: boolean;
  // discountedPrice?: string;
  // discountedTotal?: string;
  page?: string;
}

function ProductionOption({
  title,
  // price,
  total,
  recommended = false,
  name,
  // discountedPrice,
  // discountedTotal,
  page,
}: ProductPros) {
  // Gjør at dette bar har totalt i stedet
  return (
    <ProductPageRadioButton option={name}>
      <Card className="w-full lg:max-w-[375px] justify-between flex flex-row space-x-0 lg:space-x-12 lg:py-10 lg:px-6 py-[0px] pt-6  pb-[12px] overflow-hidden relative">
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <h3 className="font-sans text-left text-[20px] text-black/60 z-10">
              {title}
            </h3>
            <div className="flex justify-end">
              {recommended && (
                <div>
                  <div className="bg-pink-primary inline-block px-[14px] py-[3px] rounded-[100px]">
                    <p className="font-sans text-black/80 text-[12px] whitespace-nowrap">
                      Beste deal
                    </p>
                  </div>
                </div>
              )}
              <CustomRadioButton name={name} />
            </div>
          </div>
          <div className="flex flex-row items-baseline mt-8 whitespace-nowrap w-full">
            {/* <p className="font-serif text-[24px] line-through text-gray-400">
              {total}
            </p> */}
            <div className="flex items-baseline mb-0">
              <p className="font-serif text-[30px] whitespace-nowrap">
                {total}
              </p>
              {/* <p className="font-serif text-[30px] whitespace-nowrap">
                {discountedTotal}
              </p> */}
              <p className="font-serif text-[14px] ml-4 text-black/70">
                for 7 uker
              </p>
            </div>
          </div>
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
    </ProductPageRadioButton>
  );
}
