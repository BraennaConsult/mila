import {
  PAYMENT_LINK,
  POST_SALE_LINK,
  SALE_FINISHES_AT,
  SALE_STARTS_AT,
  TEMP_LINK,
} from "@/constants";
import clsx, { ClassValue } from "clsx";
import { ReadonlyURLSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// For countdown
export function getPercentage(): number {
  // const percentageByHour: { [hour: number]: number } = {
  //   8: 1,
  //   9: 9,
  //   10: 10,
  //   11: 13,
  //   12: 69,
  //   13: 70,
  //   14: 71,
  //   15: 72,
  //   16: 73,
  //   17: 74,
  //   18: 80,
  //   19: 81,
  //   20: 82,
  //   21: 98,
  //   22: 98,
  //   23: 99,
  // };
  const percentageByHour: { [hour: number]: number } = {
    8: 13,
    9: 13,
    10: 13,
    11: 13,
    12: 13,
    13: 13,
    14: 13,
    15: 13,
    16: 13,
    17: 13,
    18: 13,
    19: 13,
    20: 13,
    21: 13,
    22: 13,
    23: 13,
  };

  const now = new Date();
  // if (
  //   now.getUTCFullYear() !== 2024 ||
  //   now.getUTCMonth() !== 0 ||
  //   now.getUTCDate() !== 20 ||
  //   now.getUTCDay() !== 6
  // ) {
  //   return 100;
  // }

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
