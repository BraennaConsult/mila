import { M3PricingPage } from "@/app/components/pages/M3PricingPage";
import { CHECKOUT_LINKS, COOKIES } from "@/constants";
import { cookies } from "next/headers";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Page({ searchParams }: Props) {
  const premiumLink = CHECKOUT_LINKS.PREMIUM_WEBSITE;
  const innerCircleLink = CHECKOUT_LINKS.INNER_CIRCLE_WEBSITE;

  const discountExpirationTime =
    cookies().get(COOKIES.M3_LIMITED_OFFER)?.value || "";

  const discountHasExpired = discountExpirationTime
    ? new Date(discountExpirationTime) < new Date()
    : false;

  return (
    <>
      <M3PricingPage
        type="website"
        premiumLink={premiumLink}
        innerCircleLink={innerCircleLink}
        searchParams={searchParams}
        discountHasExpired={discountHasExpired}
        discountExpirationTime={discountExpirationTime}
      />
    </>
  );
}
