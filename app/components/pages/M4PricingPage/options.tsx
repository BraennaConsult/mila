import { ProductOptions } from "@/app/sections/ProductOptions";
import { getSalesStatus } from "@/app/utils";

export function Options({ type }: { type?: "hidden" | "visible" }) {
  const salesStatus = getSalesStatus();

  const getHeadingText = () => {
    if (type === "hidden") {
      if (salesStatus.status === "post-sale") {
        return "Salget er over";
      }
      return "Velg pakken din for å komme i gang";
    }

    if (salesStatus.status === "post-sale") {
      return "Salget er over";
    }

    return "Pakker som vil være tilgjengelig";
  };

  return (
    <div className="flex flex-col mt-10 gap-6 w-full items-center">
      <h2 className="text-center font-serif text-[28px] max-w-[290px]">
        {getHeadingText()}
      </h2>
      <ProductOptions className="lg:pt-10 lg:pb-32" />
    </div>
  );
}
