import {
  INNER_CIRCLE_CHECKOUT_LINK,
  INNER_CIRCLE_LIMITED_CHECKOUT_LINK,
  PAYMENT_LINK,
  POST_SALE_LINK,
  PREMIUM_CHECKOUT_LINK,
  PREMIUM_LIMITED_CHECKOUT_LINK,
  SALE_FINISHES_AT,
  SALE_STARTS_AT,
  TEMP_LINK,
} from "@/constants";
import clsx, { ClassValue } from "clsx";
import { cookies } from "next/headers";
import { ReadonlyURLSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// For countdown
export function getPercentage(): number {
  const percentageByHour: { [hour: number]: number } = {
    6: 83,
    7: 84,
    8: 86,
    9: 86,
    10: 86,
    11: 86,
    12: 87,
    13: 87,
    14: 88,
    15: 88,
    16: 88,
    17: 89,
    18: 89,
    19: 90,
    20: 91,
    21: 91,
    22: 92,
    23: 92,
  };

  const now = new Date();

  const hour = now.getUTCHours() + 1;

  return percentageByHour[hour] || 0;
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

export function getLink() {
  // const saleHasStarted = getSaleHasStarted();
  const saleHasEnded = getSaleHasEnded();

  // const link = saleHasStarted ? PAYMENT_LINK : TEMP_LINK;
  const link = saleHasEnded ? POST_SALE_LINK : PAYMENT_LINK;

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
