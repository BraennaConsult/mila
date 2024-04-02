"use server";

import { COOKIES } from "@/constants";
import { cookies } from "next/headers";

export async function setCookie() {
  const newTargetDate = new Date();
  newTargetDate.setHours(newTargetDate.getHours() + 24);
  const targetAsString = newTargetDate.toISOString();
  cookies().set("countdownTime", targetAsString);
}

export async function set30MinuteTimer() {
  const newTargetDate = new Date();
  newTargetDate.setMinutes(newTargetDate.getMinutes() + 30);
  const targetAsString = newTargetDate.toISOString();
  console.log(targetAsString);
  cookies().set(COOKIES.DISCOUNTED_SALE_TIMER, targetAsString);
}
