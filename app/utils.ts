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
    14: 33,
    15: 39,
    16: 44,
    17: 49,
    18: 53,
  };

  const now = new Date();
  // Make sure the date is Tuesday, January 9, 2024
  if (
    now.getUTCFullYear() !== 2024 ||
    now.getUTCMonth() !== 0 ||
    now.getUTCDate() !== 9 ||
    now.getUTCDay() !== 2
  ) {
    return 0;
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
