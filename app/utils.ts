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
    12: 69,
    13: 70,
    14: 71,
    15: 72,
    16: 73,
    17: 74,
    18: 75,
    19: 76,
    20: 77,
    21: 77,
    22: 78,
    23: 78,
  };

  const now = new Date();
  if (
    now.getUTCFullYear() !== 2024 ||
    now.getUTCMonth() !== 0 ||
    now.getUTCDate() !== 16 ||
    now.getUTCDay() !== 2
  ) {
    return 78;
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
