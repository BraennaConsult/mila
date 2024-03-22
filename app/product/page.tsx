import Image from "next/image";
import { Header } from "../components/Header";
import { BenefitsCard } from "../sections/BenefitsCard";
import { CTA } from "../sections/CTA";
import { Guarantee } from "../sections/Guarantee";
import { IncludedInPlans } from "../sections/IncludedInPlans";
import { MyPath } from "../sections/MyPath";
import { ProductOptions } from "../sections/ProductOptions";
import { ProductReview } from "../sections/ProductReview";

export default function ProductPage() {
  return (
    <>
      {/* <Header /> */}
      <main className="bg-[#F7F6F6]">
        <>
          <div className="flex justify-center py-12">
            <Image
              src={"/my-luck-logo.svg"}
              alt="myLuck"
              width={98}
              height={52}
            />
          </div>
          {/* <h1>myLuck by mila</h1> */}
          <h3 className="text-center font-serif text-[28px] leading-[24px] text-black">
            Choose your plan <br /> to get started
          </h3>
          <ProductOptions />
          <IncludedInPlans />
          <BenefitsCard />
          <ProductReview />
          <MyPath />
          <h3 className="text-center font-serif text-[40px] leading-[40px] text-black">
            Ready for your <br /> dream body?
          </h3>
          <ProductOptions />
          <Guarantee />
          <CTA className="pt-0 md:pt-0 lg:pt-0" withTitle={false} />
        </>
      </main>
    </>
  );
}
