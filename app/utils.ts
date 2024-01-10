import { PAYMENT_LINK, SALE_STARTS_AT, STRIPE_LINK } from "@/constants";
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
    12: 18,
    13: 24,
    14: 55,
    15: 55,
    16: 56,
    17: 57,
    18: 58,
    19: 59,
    20: 60,
    21: 61,
    22: 61,
    23: 61,
  };

  const now = new Date();
  if (
    now.getUTCFullYear() !== 2024 ||
    now.getUTCMonth() !== 0 ||
    now.getUTCDate() !== 10 ||
    now.getUTCDay() !== 3
  ) {
    return 62;
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

  const link = saleHasStarted ? STRIPE_LINK : PAYMENT_LINK;

  return link;
}
