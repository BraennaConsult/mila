import { PAYMENT_LINK, SALE_STARTS_AT, TEMP_LINK } from "@/constants";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// For countdown
export function getPercentage(): number {
  const percentageByHour: { [hour: number]: number } = {
    8: 1,
    9: 9,
    10: 10,
    11: 13,
    12: 62,
    13: 63,
    14: 63,
    15: 64,
    16: 64,
    17: 65,
    18: 65,
    19: 66,
    20: 66,
    21: 67,
    22: 67,
    23: 67,
  };

  const now = new Date();
  if (
    now.getUTCFullYear() !== 2024 ||
    now.getUTCMonth() !== 0 ||
    now.getUTCDate() !== 12 ||
    now.getUTCDay() !== 5
  ) {
    return 67;
  }

  const hour = now.getUTCHours() + 1;

  return percentageByHour[hour] || 0;
}

export function getSaleHasStarted() {
  const saleStartTime = SALE_STARTS_AT;

  const saleHasStarted = new Date() >= new Date(saleStartTime);

  return saleHasStarted;
}

export function getLink() {
  const saleHasStarted = getSaleHasStarted();

  const link = saleHasStarted ? PAYMENT_LINK : TEMP_LINK;

  return link;
}
