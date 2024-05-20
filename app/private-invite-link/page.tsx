import { WhatYouGet } from "@/app/sections/WhatYouGet";
import { WhyMyLuckNoCTA } from "@/app/sections/WhyMyLuckNoCTA";
import { BenefitsCard } from "../sections/BenefitsCard";
import { CTA } from "../sections/CTA";
import { GoToCheckoutButton } from "../sections/GoToCheckout";
import { Guarantee } from "../sections/Guarantee";
import { IncludedInPlans } from "../sections/IncludedInPlans";
import { MyPath } from "../sections/MyPath";
import { ProductOptions } from "../sections/ProductOptions";
import { ProductReview } from "../sections/ProductReview";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}
export default function ProductPage({ searchParams }: Props) {
  const option = searchParams?.option as string | undefined;
  const hasOption = searchParams?.option ? true : false;

  return (
    // <>
    //   <main className="bg-[#F7F6F6]">
    //     <>
    //       <WhyMyLuckNoCTA />
    //       <>
    //         <h3 className="text-center font-serif text-[28px] leading-[24px] text-black lg:text-3xl">
    //           Velg pakken din for <br /> å komme i gang
    //         </h3>
    //         <p className="text-center text-black/50 text-[14px] mt-6">
    //           Maratonet starter 8. April 2024
    //         </p>
    //         <ProductOptions className="lg:py-10" />
    //         <CTA
    //           className="pt-0 md:pt-0 lg:pt-0"
    //           withTitle={false}
    //           disabled={!hasOption}
    //           trackingType="checkout_button"
    //         />
    //         <IncludedInPlans />
    //         <WhatYouGet />
    //         <BenefitsCard />
    //         <ProductReview />
    //         <MyPath />
    //         <h3 className="text-center font-serif text-[40px] leading-[40px] text-black lg:text-2xl">
    //           Klar for å få <br /> drømmekroppen din?
    //         </h3>
    //         <ProductOptions className="lg:pt-10 lg:pb-32" />
    //         <Guarantee />
    //         <CTA
    //           className="pt-0 md:pt-0 lg:pt-0"
    //           withTitle={false}
    //           disabled={!hasOption}
    //           trackingType="checkout_button"
    //         />
    //         <GoToCheckoutButton show={hasOption} option={option} />
    //       </>
    //     </>
    //   </main>
    // </>
    <></>
  );
}
