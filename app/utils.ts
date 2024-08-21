import {
  INNER_CIRCLE_CHECKOUT_LINK,
  INNER_CIRCLE_LIMITED_CHECKOUT_LINK,
  PAYMENT_LINK,
  PREMIUM_CHECKOUT_LINK,
  PREMIUM_LIMITED_CHECKOUT_LINK,
  SALE_FINISHES_AT,
  SALE_STARTS_AT,
} from "@/constants";
import clsx, { type ClassValue } from "clsx";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// For countdown
export function getPercentageSpotsTaken(): number {
  // const percentageByHour: { [hour: number]: number } = {
  //   6: 100,
  //   7: 100,
  //   8: 100,
  //   9: 100,
  //   10: 100,
  //   11: 100,
  //   12: 100,
  //   13: 100,
  //   14: 100,
  //   15: 100,
  //   16: 100,
  //   17: 100,
  //   18: 100,
  //   19: 100,
  //   20: 100,
  //   21: 100,
  //   22: 100,
  //   23: 100,
  // };

  // const now = new Date();

  // const hour = now.getUTCHours() + 1;

  // return percentageByHour[hour] || 0;
  return 15;
}

export function getSaleHasStarted() {
  const saleStartTime = SALE_STARTS_AT;

  const saleHasStarted = new Date() >= new Date(saleStartTime);

  return saleHasStarted;
}

export function getSaleHasEnded() {
  const saleEndTime = SALE_FINISHES_AT;

  const saleHasEnded = new Date() >= new Date(saleEndTime);

  return saleHasEnded;
}

export function getSalesStatus(): {
  status: "pre-sale" | "sale" | "post-sale";
  date: string;
} {
  const saleHasStarted = getSaleHasStarted();
  const saleHasEnded = getSaleHasEnded();

  if (!saleHasStarted) {
    return {
      status: "pre-sale",
      date: SALE_STARTS_AT,
    };
  }
  if (saleHasStarted && !saleHasEnded) {
    return {
      status: "sale",
      date: SALE_FINISHES_AT,
    };
  }

  return {
    status: "post-sale",
    date: SALE_FINISHES_AT,
  };
}

export function getLink() {
  const saleHasStarted = getSaleHasStarted();

  const link = saleHasStarted ? PAYMENT_LINK : "#";

  return link;
}

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const getProductLink = (option: string) => {
  switch (option) {
    case "premium":
      return PREMIUM_CHECKOUT_LINK;
    case "inner-circle":
      return INNER_CIRCLE_CHECKOUT_LINK;
    case "premium-limited":
      return PREMIUM_LIMITED_CHECKOUT_LINK;
    case "inner-circle-limited":
      return INNER_CIRCLE_LIMITED_CHECKOUT_LINK;
    default:
      return PREMIUM_CHECKOUT_LINK;
  }
};
