import Image from "next/image";
import { Section } from "../components/Section";
import { Container } from "../components/Container";

export function BeforeAndAfterComponent() {
  return (
    <Section className="py-0 pb-20 lg:pb-32">
      <Container className="lg:max-w-[800px]">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <Image
              src={"/before-after/beforeimage.png"}
              alt="before"
              width={500}
              height={500}
              className="rounded-tl-[30px] rounded-bl-[30px]"
            />
            {/* Pill */}
            <div className="absolute bottom-3 bg-[#F0EDED] py-1 left-3 rounded-full px-4 text-black/50 text-[14px] font-sans font-medium">
              Før
            </div>
          </div>

          <div className="relative">
            <Image
              src={"/before-after/afterimage.png"}
              alt="after"
              width={500}
              height={500}
              className="rounded-tr-[30px] rounded-br-[30px]"
            />
            {/* Pill */}
            <div className="absolute bottom-3 right-3 bg-[#F0EDED] py-2 rounded-full px-4 text-[#7C54BD] text-[14px] font-sans font-medium">
              Etter 6 uker
            </div>
          </div>
          <div className="mt-4">
            <Image
              src={"/before-after/before-kroppsfett-og-mage.svg"}
              alt="before"
              width={500}
              height={500}
            />
          </div>
          <div className="mt-4">
            <Image
              src={"/before-after/after-kroppsfett-og-mage.svg"}
              alt="before"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              src={"/before-after/before-muskelmasse.svg"}
              alt="before"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              src={"/before-after/after-muskelmasse.svg"}
              alt="before"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              src={"/before-after/before-energi-og-humør.svg"}
              alt="before"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              src={"/before-after/after-energi-og-humør.svg"}
              alt="before"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
